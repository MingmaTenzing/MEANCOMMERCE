import { Component, Input } from '@angular/core';
import { cartItems } from '../../../types';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-mobile-shopping-cart-item',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './mobile-shopping-cart-item.component.html',
  styleUrl: './mobile-shopping-cart-item.component.css',
})
export class MobileShoppingCartItemComponent {
  @Input() product!: cartItems;
}
