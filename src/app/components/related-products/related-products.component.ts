import { Component, Input } from '@angular/core';
import { MeanProducts } from '../../../types';
import { NgOptimizedImage } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-related-products',
  standalone: true,
  imports: [NgOptimizedImage, RouterModule],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.css',
})
export class RelatedProductsComponent {
  @Input() product!: MeanProducts;

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
