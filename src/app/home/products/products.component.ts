import { Component, OnInit } from '@angular/core';
import { ProductContainerComponent } from '../../components/product-container/product-container.component';
import { BackendService } from '../../../services/backend/backend.service';
import { Observable } from 'rxjs';
import { MeanProducts } from '../../../types';
import { CommonModule } from '@angular/common';
import { LoadingProductComponent } from '../../components/loading-product/loading-product.component';

@Component({
  selector: 'app-products',
  imports: [ProductContainerComponent, CommonModule, LoadingProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  constructor(private meanBackend: BackendService) {}

  products!: Observable<MeanProducts[]>;

  ngOnInit(): void {
    this.products = this.meanBackend.getCategoryProducts('Headphone');
  }
}
