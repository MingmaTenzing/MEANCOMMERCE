import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  RouterModule,
  Routes,
  withInMemoryScrolling,
} from '@angular/router';
import { UploadProductsComponent } from './upload-products/upload-products.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { DashboardCartComponent } from './dashboard/feature/dash-cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReturnComponent } from './return/return.component';
import { checkoutGaurdGuard } from '../gaurd/checkout-gaurd.guard';
import { WishlistComponent } from './wishlist/wishlist.component';

import { MainComponent } from './dashboard/feature/main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderHistoryComponent } from './dashboard/feature/order-history/order-history.component';
import { SettingsComponent } from './dashboard/feature/settings/settings.component';
import { SigninComponent } from './auth/feature/signin/signin/signin.component';
import { SignupComponent } from './auth/feature/signup/signup/signup.component';
import { AuthFormComponent } from './auth/auth-form/auth-form.component';
import { CartComponent } from './cart/cart.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'upload',
    component: UploadProductsComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
    title: 'Shop',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart',
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent,
    title: 'Product Details',
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Checkout',
    canActivate: [checkoutGaurdGuard],
  },
  {
    path: 'success',
    component: ReturnComponent,
    title: 'Success',
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    title: 'Wishlist',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    children: [
      {
        path: 'order-history',
        component: OrderHistoryComponent,
        title: 'Order History',
      },
      {
        path: 'cart',
        component: DashboardCartComponent,
        title: 'Dashboard-cart',
      },
      {
        path: 'main',
        component: MainComponent,
        title: 'Dashboard',
      },
      {
        path: 'settings',
        component: SettingsComponent,
        title: 'Settings',
      },

      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'auth',
    component: AuthFormComponent,
    title: 'Auth',
    children: [
      {
        path: 'signin',
        component: SigninComponent,
        title: 'Signin',
      },
      {
        path: 'signup',
        component: SignupComponent,
        title: 'Signup',
      },
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
      },
    ],
  },

  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
