import { Injectable } from '@angular/core';
import { MeanProducts, cartItems } from '../../types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<cartItems[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  getCartItems() {
    return this.cartItems$;
  }

  addToCart(item: cartItems) {
    let cartItem = this.cartItemsSubject
      .getValue()
      .find((product) => product._id === item._id);
    if (cartItem) {
      cartItem.quantity!++;
    } else {
      cartItem = { ...item, quantity: 1 };
      this.cartItemsSubject.getValue().push(cartItem);
    }

    console.log(this.cartItemsSubject.getValue());
  }
}
