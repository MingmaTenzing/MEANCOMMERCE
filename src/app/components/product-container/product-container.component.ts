import { Component, Input } from '@angular/core';
import { MeanProducts } from '../../../types';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-container',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.css',
})
export class ProductContainerComponent {
  @Input() product!: MeanProducts;
  isproductHover: boolean = false;

  hovering() {
    this.isproductHover = true;
  }
  notHovering() {
    this.isproductHover = false;
  }
}
