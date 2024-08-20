import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MeanProducts } from '../../../types';
import { QuickViewService } from '../../../services/quickview/quick-view.service';
import { Store, StoreModule } from '@ngrx/store';
import { addProduct } from '../../states/cart-items/action';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { addToWishlist } from '../../states/wishlist-items/actions';
import { selectWishlist } from '../../states/wishlist-items/selector';
import { WishListState } from '../../states/wishlist-items/wishlist-State';

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
    private store: Store<WishListState>,
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
  addToWishlist(product: MeanProducts) {
    this.store.dispatch(addToWishlist({ product }));
    this.MessageService.add({
      severity: 'success',
      summary: 'Added to Wishlist',
      detail: 'Product has been added to Wishlist',
    });
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
