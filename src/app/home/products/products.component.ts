import { Component, OnInit } from '@angular/core';
import { ProductContainerComponent } from '../../components/product-container/product-container.component';
import { BackendService } from '../../../services/backend/backend.service';
import { Observable } from 'rxjs';
import { MeanProducts } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductContainerComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  constructor(private meanBackend: BackendService) {}

  products!: Observable<MeanProducts[]>;

  ngOnInit(): void {
    this.products = this.meanBackend.getData();
    console.log(this.products);
  }
}
