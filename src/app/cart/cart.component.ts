import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { MobileShoppingCartItemComponent } from '../components/mobile-shopping-cart-item/mobile-shopping-cart-item.component';
import { cartItems } from '../../types';
import { Subject, filter, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../states/cart-items/app.state';
import {
  selectCartTotalAmount,
  selectProducts,
} from '../states/cart-items/selector';
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from '../states/cart-items/action';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackendService } from '../../services/backend/backend.service';
import { Router, RouterModule } from '@angular/router';
import Stripe from 'stripe';
import { StripeService } from '../../services/stripe/stripe.service';
import { RouteAuthService } from '../../services/routeAuth/route-auth.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MobileShoppingCartItemComponent,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnDestroy {
  cartItems: cartItems[] = [];
  cartTotalAmount: number = 0;
  discount: number = 45;
  shippingCost: number = 10;
  checkoutUrl: String = '';

  line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  private readonly destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private backend: BackendService,
    private StripeService: StripeService,
    private router: Router,
    private routeAuth: RouteAuthService
  ) {
    this.store
      .select(selectProducts)
      .pipe(takeUntil(this.destroy$))
      .subscribe((products) => {
        this.cartItems = products;
      });
    this.store
      .select(selectCartTotalAmount)
      .pipe(takeUntil(this.destroy$))
      .subscribe((amount) => (this.cartTotalAmount = amount));
  }

  increaseQuantity(item: cartItems) {
    this.store.dispatch(increaseQuantity({ product: item }));
  }

  descreaseQuantity(item: cartItems) {
    this.store.dispatch(decreaseQuantity({ product: item }));
  }

  removeProduct(item: cartItems) {
    this.store.dispatch(removeProduct({ product: item }));
  }

  checkout() {
    this.cartItems.forEach((item) => {
      this.line_items.push({
        quantity: item.quantity,
        price_data: {
          currency: 'AUD',
          product_data: {
            name: item.name,
            description: item.description,
            images: item.images,
          },
          unit_amount: item.price * 100,
        },
      });
    });

    this.StripeService.provideLineItems(this.line_items);
    this.routeAuth.proceedRoute();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
