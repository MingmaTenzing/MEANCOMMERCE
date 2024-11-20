import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
    selector: 'app-loading-product',
    imports: [NgxSkeletonLoaderModule],
    templateUrl: './loading-product.component.html',
    styleUrl: './loading-product.component.css'
})
export class LoadingProductComponent {}
