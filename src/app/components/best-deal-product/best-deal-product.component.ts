import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MeanProducts } from '../../../types';
import { QuickViewService } from '../../../services/quickview/quick-view.service';

@Component({
  selector: 'app-best-deal-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-deal-product.component.html',
  styleUrl: './best-deal-product.component.css',
})
export class BestDealProductComponent {
  @Input() product!: MeanProducts;
  isHoveringProduct: boolean = false;

  constructor(private quickViewService: QuickViewService) {}

  hovering() {
    this.isHoveringProduct = true;
  }
  notHovering() {
    this.isHoveringProduct = false;
  }
  enableQuickView() {
    this.quickViewService.productId = this.product._id;
    this.quickViewService.enableQuickView();
  }
}
