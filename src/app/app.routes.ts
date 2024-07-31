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
import bootstrap from '../main.server';
import { bootstrapApplication } from '@angular/platform-browser';
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
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
