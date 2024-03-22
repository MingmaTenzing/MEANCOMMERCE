import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-best-deal-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-deal-product.component.html',
  styleUrl: './best-deal-product.component.css',
})
export class BestDealProductComponent {
  isHoveringProduct: boolean = false;
  hovering() {
    this.isHoveringProduct = true;
  }
  notHovering() {
    this.isHoveringProduct = false;
  }
}
