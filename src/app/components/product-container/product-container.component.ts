import { Component, Input } from '@angular/core';
import { MeanProducts } from '../../../types';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { QuickViewComponent } from '../quick-view/quick-view.component';
import { QuickViewService } from '../../../services/quickview/quick-view.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

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
    private router: ActivatedRoute
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
}

// isquickviewEnabled!: Observable<boolean>;
// constructor(private QuickViewService: QuickViewService) {
//   this.isquickviewEnabled = this.QuickViewService.quickView$;
// }
