import { ApplicationConfig } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { cartReducer } from './states/cart-items/reducer';
import { provideNgxStripe } from 'ngx-stripe';
import { wishListReducer } from './states/wishlist-items/reducer';
import { compare_Reducer } from './states/compare-items/reducer';
import { provideMarkdown } from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideMarkdown(),
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'cartItems', reducer: cartReducer }),
    provideState({ name: 'wishList', reducer: wishListReducer }),
    provideState({ name: 'compare', reducer: compare_Reducer }),
    provideNgxStripe(
      'pk_test_51N1gQ2ASPEPBGJmG9FK1qYh81k5hQgOieL6Sq2rtyxPl83f4UJqGnAWp8gVCiJU6FY1bPe6Ie30mjDcmCdHwkjeX00rXWDhqJc'
    ),
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
};
