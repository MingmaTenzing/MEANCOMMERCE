import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { MobileShoppingCartItemComponent } from '../components/mobile-shopping-cart-item/mobile-shopping-cart-item.component';
import { CartService } from '../../services/cart/cart.service';
import { cartItems } from '../../types';
import { BrowserModule } from '@angular/platform-browser';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgOptimizedImage, MobileShoppingCartItemComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnDestroy {
  private _destroy$ = new Subject<void>();
  cartItems: cartItems[] = [];

  constructor(private cartService: CartService) {
    this.cartService
      .getCartItems()
      .pipe(takeUntil(this._destroy$))
      .subscribe((data) => (this.cartItems = data));
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }
}
