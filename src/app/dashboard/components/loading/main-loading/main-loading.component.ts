import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { OrderHistoryLoadingComponent } from '../order-history-loading/order-history-loading.component';

@Component({
  selector: 'app-main-loading',
  standalone: true,
  imports: [NgxSkeletonLoaderModule, OrderHistoryLoadingComponent],
  templateUrl: './main-loading.component.html',
  styleUrl: './main-loading.component.css',
})
export class MainLoadingComponent {}
