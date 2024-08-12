import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stripe from 'stripe';
import { line_items, session_Status } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  constructor(private http: HttpClient) {}

  provideLineItems(items: Stripe.Checkout.SessionCreateParams.LineItem[]) {
    if (this.line_items.length > 0) {
      this.line_items.push.apply(this.line_items, items);
    } else {
      this.line_items.push(...items);
      console.log(this.line_items);
    }
  }

  getLineItems() {
    return this.line_items;
  }
  createCheckoutSession() {
    return this.http.post<string>(
      'http://localhost:5000/api/v1/checkout/create-checkout-session',

      {
        line_items: this.getLineItems(),
      }
    );
  }

  fetchSessionStatus(sessionId: string) {
    return this.http.get<session_Status>(
      `http://localhost:5000/api/v1/checkout/session-status?session_id=${sessionId}`
    );
  }
}