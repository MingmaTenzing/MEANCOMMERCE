import { Component } from '@angular/core';
import { MobileShoppingCartItemComponent } from '../../../components/mobile-shopping-cart-item/mobile-shopping-cart-item.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../states/cart-items/app.state';
import { BackendService } from '../../../../services/backend/backend.service';
import { StripeService } from 'ngx-stripe';
import { Router } from 'express';
import { RouteAuthService } from '../../../../services/routeAuth/route-auth.service';
import Stripe from 'stripe';
import { Subject, takeUntil } from 'rxjs';
import { cartItems } from '../../../../types';
import {
  selectCartTotalAmount,
  selectProducts,
} from '../../../states/cart-items/selector';
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from '../../../states/cart-items/action';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MobileShoppingCartItemComponent, NgOptimizedImage, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class DashboardCartComponent {
  cartItems: cartItems[] = [];
  cartTotalAmount: number = 0;
  discount: number = 45;
  shippingCost: number = 10;
  checkoutUrl: String = '';

  line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  private readonly destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>) {
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
