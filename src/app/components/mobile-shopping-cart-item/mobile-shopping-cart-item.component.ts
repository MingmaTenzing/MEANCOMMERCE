import { Component, Input } from '@angular/core';
import { cartItems } from '../../../types';

@Component({
  selector: 'app-mobile-shopping-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './mobile-shopping-cart-item.component.html',
  styleUrl: './mobile-shopping-cart-item.component.css',
})
export class MobileShoppingCartItemComponent {
  @Input() product!: cartItems;
}
