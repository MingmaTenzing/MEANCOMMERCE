import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stripe from 'stripe';
import { line_items } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  line_items: Observable<Stripe.Checkout.SessionCreateParams.LineItem[]> = [];
  constructor(private http: HttpClient) {}

  provideLineItems(products: Stripe.Checkout.SessionCreateParams.LineItem[]) {
    this.line_items.push(...products);
    console.log(this.line_items);
  }

  createCheckoutSession() {
    return this.http.post<string>(
      'http://localhost:5000/api/v1/create-checkout-session',

      {
        line_items: this.line_items,
      }
    );
  }
}
