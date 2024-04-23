import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MeanProducts } from '../../../types';

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
  hovering() {
    this.isHoveringProduct = true;
  }
  notHovering() {
    this.isHoveringProduct = false;
  }
}
