import { TestBed } from '@angular/core/testing';

import { StripeService } from './stripe.service';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import Stripe from 'stripe';

describe('StripeService', () => {
  let service: StripeService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClient],
      providers: [StripeService, provideHttpClient()],
    });
    service = TestBed.inject(StripeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
