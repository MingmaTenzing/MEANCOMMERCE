import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stripe from 'stripe';
import { line_items, session_Status } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  api_Url: string = 'https://meancommerce-backend.onrender.com';

  constructor(private http: HttpClient) {}

  provideLineItems(items: Stripe.Checkout.SessionCreateParams.LineItem[]) {
    this.line_items = items;
  }

  getLineItems() {
    return this.line_items;
  }
  createCheckoutSession() {
    return this.http.post<string>(
      `${this.api_Url}/api/v1/checkout/create-checkout-session`,

      {
        line_items: this.getLineItems(),
      },
      {
        withCredentials: true,
      }
    );
  }

  fetchSessionStatus(sessionId: string) {
    return this.http.get<session_Status>(
      `${this.api_Url}/api/v1/checkout/session-status?session_id=${sessionId}`,
      {
        withCredentials: true,
      }
    );
  }
}
