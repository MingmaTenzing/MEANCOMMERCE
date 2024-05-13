import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { QuickViewService } from '../../../services/quickview/quick-view.service';
import { Observable, ObservedValueOf, Subject, Subscription } from 'rxjs';
import { MeanProducts } from '../../../types';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-quick-view',
  standalone: true,
  imports: [NgOptimizedImage, MatIconModule, CommonModule],
  templateUrl: './quick-view.component.html',
  styleUrl: './quick-view.component.css',
})
export class QuickViewComponent implements OnInit, OnDestroy {
  constructor(private QuickViewService: QuickViewService) {}

  // product$!: Observable<MeanProducts>;
  product!: MeanProducts;

  mainProductImage: string = '';

  productmainImages: Array<string> = [];

  addtoFav: boolean = false;

  data!: Observable<MeanProducts>;
  subscription!: Subscription;
  ngOnInit(): void {
    // this.product$ = this.QuickViewService.getQuickViewProduct();
    this.subscription = this.QuickViewService.getQuickViewProduct().subscribe(
      (data) => (this.product = data)
    );
    this.mainProductImage = this.product.images[0];
  }

  closeQuickView() {
    this.QuickViewService.closeQuickView();
  }

  favoriteModal() {
    this.addtoFav = !this.addtoFav;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeMainImage(image: string) {
    this.mainProductImage = image;
  }
}
