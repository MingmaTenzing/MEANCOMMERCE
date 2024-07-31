import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideState, provideStore } from '@ngrx/store';
import { cartReducer } from './app/states/cart-items/reducer';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
