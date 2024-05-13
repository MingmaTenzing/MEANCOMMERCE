import { Component, Injectable, Input, OnInit } from '@angular/core';
import { MeanProducts } from '../../../types';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { QuickViewComponent } from '../quick-view/quick-view.component';
import { QuickViewService } from '../../../services/quickview/quick-view.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-container',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, QuickViewComponent],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.css',
})
export class ProductContainerComponent {
  @Input() product!: MeanProducts;
  isproductHover: boolean = false;

  constructor(private quickViewService: QuickViewService) {}

  hovering() {
    this.isproductHover = true;
  }
  notHovering() {
    this.isproductHover = false;
  }
  enableQuickView() {
    this.quickViewService.productId = this.product._id;
    this.quickViewService.enableQuickView();
  }
}

// isquickviewEnabled!: Observable<boolean>;
// constructor(private QuickViewService: QuickViewService) {
//   this.isquickviewEnabled = this.QuickViewService.quickView$;
// }
