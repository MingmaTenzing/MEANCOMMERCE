import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MeanProducts } from '../../../types';
import { QuickViewService } from '../../../services/quickview/quick-view.service';
import { Store } from '@ngrx/store';
import { addProduct } from '../../states/cart-items/action';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-best-deal-product',
  standalone: true,
  imports: [CommonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './best-deal-product.component.html',
  styleUrl: './best-deal-product.component.css',
})
export class BestDealProductComponent {
  @Input() product!: MeanProducts;
  isHoveringProduct: boolean = false;

  constructor(
    private quickViewService: QuickViewService,
    private store: Store,
    private MessageService: MessageService
  ) {}

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
  addToCart(product: MeanProducts) {
    this.store.dispatch(addProduct({ product }));
    this.MessageService.add({
      severity: 'success',
      summary: 'Successfully Added',
      detail: `Product has been added successfully `,
    });
  }
}
