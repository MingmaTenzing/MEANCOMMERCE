import { ApplicationConfig } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { cartReducer } from './states/cart-items/reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'cartItems', reducer: cartReducer }),
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
};
