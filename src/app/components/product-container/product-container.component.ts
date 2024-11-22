import { Component, Input } from '@angular/core';
import { MeanProducts } from '../../../types';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { QuickViewService } from '../../../services/quickview/quick-view.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { addProduct } from '../../states/cart-items/action';
import { addToWishlist } from '../../states/wishlist-items/actions';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-product-container',
  imports: [NgOptimizedImage, CommonModule, RouterModule, ToastModule],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.css',
  providers: [MessageService],
})
export class ProductContainerComponent {
  @Input() product!: MeanProducts;
  @Input() isQuickViewDisabled!: boolean;
  isproductHover: boolean = false;

  constructor(
    private quickViewService: QuickViewService,
    private router: ActivatedRoute,
    private store: Store,
    private MessageService: MessageService
  ) {}

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
  addToCart(product: MeanProducts) {
    this.store.dispatch(addProduct({ product }));
    this.MessageService.add({
      severity: 'success',
      summary: 'Added to Cart',
      detail: 'Product has been added to Cart',
    });
  }

  addToWishlist(product: MeanProducts) {
    this.store.dispatch(addToWishlist({ product }));
    this.MessageService.add({
      severity: 'success',
      summary: 'Added to Wishlist',
      detail: 'Product has been added to Wishlist',
    });
  }
}

// isquickviewEnabled!: Observable<boolean>;
// constructor(private QuickViewService: QuickViewService) {
//   this.isquickviewEnabled = this.QuickViewService.quickView$;
// }
