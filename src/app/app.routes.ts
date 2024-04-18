import { Routes } from '@angular/router';
import { UploadProductsComponent } from './upload-products/upload-products.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'upload',
    component: UploadProductsComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
