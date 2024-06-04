import { Routes } from '@angular/router';
import { UploadProductsComponent } from './upload-products/upload-products.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'upload',
    component: UploadProductsComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
