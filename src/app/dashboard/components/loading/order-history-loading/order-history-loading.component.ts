import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
    selector: 'app-order-history-loading',
    imports: [NgxSkeletonLoaderModule],
    templateUrl: './order-history-loading.component.html',
    styleUrl: './order-history-loading.component.css'
})
export class OrderHistoryLoadingComponent {}
