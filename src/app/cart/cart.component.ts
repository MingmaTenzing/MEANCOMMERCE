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

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgOptimizedImage, MobileShoppingCartItemComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnDestroy {
  cartItems: cartItems[] = [];
  cartTotalAmount: number = 0;
  discount: number = 45;
  shippingCost: number = 10;

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
