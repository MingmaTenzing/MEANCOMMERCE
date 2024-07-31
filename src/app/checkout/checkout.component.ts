import { Component, OnDestroy, OnInit } from '@angular/core';
import { concat, concatMap, forkJoin, switchMap, tap } from 'rxjs';
import { mergeMap, Subject, take, takeUntil } from 'rxjs';
import { StripeService } from '../../services/stripe/stripe.service';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();

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
    this.StripeService.fetchClientSecret()
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
      const checkout = await this.stripe.initEmbeddedCheckout({
        clientSecret: this.clientSecretKey,
      });
      checkout.mount('#checkout');
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
