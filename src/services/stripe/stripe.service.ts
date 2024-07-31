import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  constructor(private http: HttpClient) {}

  fetchClientSecret() {
    return this.http.post<string>(
      'http://localhost:5000/api/v1/create-checkout-session',
      {}
    );
  }
}
