import { Component } from '@angular/core';
import { ProductContainerComponent } from '../../components/product-container/product-container.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductContainerComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
