import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-product-detail-loading',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './product-detail-loading.component.html',
  styleUrl: './product-detail-loading.component.css',
})
export class ProductDetailLoadingComponent {}
