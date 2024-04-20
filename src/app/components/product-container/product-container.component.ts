import { Component, Input } from '@angular/core';
import { MeanProducts } from '../../../types';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-container',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.css',
})
export class ProductContainerComponent {
  @Input() product!: MeanProducts;
}
