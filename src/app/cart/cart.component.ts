import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { MobileShoppingCartItemComponent } from '../components/mobile-shopping-cart-item/mobile-shopping-cart-item.component';
import { cartItems } from '../../types';
import { BrowserModule } from '@angular/platform-browser';
import { Observable, Subject, filter, takeUntil } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../states/cart-items/app.state';
import { selectProducts } from '../states/cart-items/selector';
import { dirname } from 'node:path';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgOptimizedImage, MobileShoppingCartItemComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnDestroy {
  cartItems: cartItems[] = [];
  private readonly destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>) {
    this.store
      .select(selectProducts)
      .pipe(takeUntil(this.destroy$))
      .subscribe((products) => (this.cartItems = products));
  }

  increaseQuantity(item: cartItems) {
    item.quantity!++;
  }

  descreaseQuantity(item: cartItems) {
    item.quantity!--;
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
