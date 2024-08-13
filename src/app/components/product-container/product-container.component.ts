import { Component, Input } from '@angular/core';
import { cartItems, MeanProducts } from '../../../types';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { QuickViewComponent } from '../quick-view/quick-view.component';
import { QuickViewService } from '../../../services/quickview/quick-view.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { addProduct } from '../../states/cart-items/action';

@Component({
  selector: 'app-product-container',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, QuickViewComponent, RouterModule],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.css',
})
export class ProductContainerComponent {
  @Input() product!: MeanProducts;
  @Input() isQuickViewDisabled!: boolean;
  isproductHover: boolean = false;

  constructor(
    private quickViewService: QuickViewService,
    private router: ActivatedRoute,
    private store: Store
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
  }
}

// isquickviewEnabled!: Observable<boolean>;
// constructor(private QuickViewService: QuickViewService) {
//   this.isquickviewEnabled = this.QuickViewService.quickView$;
// }
