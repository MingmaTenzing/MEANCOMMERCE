import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-main-loading',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './main-loading.component.html',
  styleUrl: './main-loading.component.css',
})
export class MainLoadingComponent {}
