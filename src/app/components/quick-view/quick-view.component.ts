import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { QuickViewService } from '../../../services/quickview/quick-view.service';
import { Observable, ObservedValueOf, Subject, Subscription } from 'rxjs';
import { MeanProducts } from '../../../types';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-quick-view',
  standalone: true,
  imports: [NgOptimizedImage, MatIconModule, CommonModule],
  templateUrl: './quick-view.component.html',
  styleUrl: './quick-view.component.css',
  animations: [
    trigger('enterAndLeave', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class QuickViewComponent implements OnInit, OnDestroy {
  constructor(private QuickViewService: QuickViewService) {}

  // product$!: Observable<MeanProducts>;
  product: MeanProducts | null = null;

  mainProductImage: string = '';

  numberofItems_addToCart: number = 1;

  productmainImages: Array<string> = [];

  addtoFav: boolean = false;

  subscription!: Subscription;
  ngOnInit(): void {
    // this.product$ = this.QuickViewService.getQuickViewProduct();
    this.subscription = this.QuickViewService.getQuickViewProduct().subscribe(
      (data) => (this.product = data)
    );
    if (this.product) {
      this.mainProductImage = this.product.images[0];
    }
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

  increaseNumber() {
    if (this.numberofItems_addToCart < 20) {
      this.numberofItems_addToCart++;
    }
  }
  decreaseNumber() {
    if (this.numberofItems_addToCart > 1) {
      this.numberofItems_addToCart--;
    }
  }
}
