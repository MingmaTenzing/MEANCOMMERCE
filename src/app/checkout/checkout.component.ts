import { Component, OnDestroy, OnInit } from '@angular/core';
import { concat, concatMap, forkJoin, switchMap, tap } from 'rxjs';
import { mergeMap, Subject, take, takeUntil } from 'rxjs';
import { StripeService } from '../../services/stripe/stripe.service';
import {
  loadStripe,
  Stripe,
  StripeEmbeddedCheckout,
  StripeEmbeddedCheckoutOptions,
} from '@stripe/stripe-js';
import { line_items, cartItems } from '../../types';
import { Store } from '@ngrx/store';
import { selectProducts } from '../states/cart-items/selector';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  cartItems: cartItems[] = [];
  stripeEmbedded!: StripeEmbeddedCheckout;
  private stripe: Stripe | null = null;
  clientSecretKey: string = '';

  constructor(private StripeService: StripeService) {}

  async ngOnInit(): Promise<void> {
    this.stripe = await loadStripe(
      'pk_test_51N1gQ2ASPEPBGJmG9FK1qYh81k5hQgOieL6Sq2rtyxPl83f4UJqGnAWp8gVCiJU6FY1bPe6Ie30mjDcmCdHwkjeX00rXWDhqJc'
    );

    this.intialize();
  }

  intialize(): void {
    this.StripeService.createCheckoutSession()
      .pipe(takeUntil(this.destroy$))
      .subscribe((clientSecret) => {
        this.clientSecretKey = clientSecret;
        this.intializeCheckout();
      });
  }

  private async intializeCheckout() {
    if (!this.stripe) {
      return console.log('stripe not loaded yet');
    }
    if (!this.clientSecretKey) {
      return console.log('client secret not available');
    }
    try {
      this.stripeEmbedded = await this.stripe.initEmbeddedCheckout({
        clientSecret: this.clientSecretKey,
      });

      this.stripeEmbedded.mount('#checkout');
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.stripeEmbedded.unmount();
    this.stripeEmbedded.destroy();
  }
}
