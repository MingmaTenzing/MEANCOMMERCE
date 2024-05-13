import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { QuickViewService } from '../../../services/quickview/quick-view.service';
import { Observable, ObservedValueOf, Subject, Subscription } from 'rxjs';
import { MeanProducts } from '../../../types';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-quick-view',
  standalone: true,
  imports: [NgOptimizedImage, MatIconModule],
  templateUrl: './quick-view.component.html',
  styleUrl: './quick-view.component.css',
})
export class QuickViewComponent implements OnInit, OnDestroy {
  constructor(private QuickViewService: QuickViewService) {}

  product!: MeanProducts;

  addtoFav: boolean = false;

  data!: Observable<MeanProducts>;
  subscription!: Subscription;
  ngOnInit(): void {
    this.subscription = this.QuickViewService.getQuickViewProduct().subscribe(
      (item) => (this.product = item)
    );
  }

  closeQuickView() {
    this.QuickViewService.closeQuickView();
    console.log(this.product);
  }

  favoriteModal() {
    this.addtoFav = !this.addtoFav;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
