import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
    selector: 'app-product-detail-loading',
    imports: [NgxSkeletonLoaderModule],
    templateUrl: './product-detail-loading.component.html',
    styleUrl: './product-detail-loading.component.css'
})
export class ProductDetailLoadingComponent {}
