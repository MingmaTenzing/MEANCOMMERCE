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

import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReturnComponent } from './return/return.component';
import { checkoutGaurdGuard } from '../gaurd/checkout-gaurd.guard';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
