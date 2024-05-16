import { Component, OnInit } from '@angular/core';
import { ProductContainerComponent } from '../../components/product-container/product-container.component';
import { BackendService } from '../../../services/backend/backend.service';
import { Observable } from 'rxjs';
import { MeanProducts } from '../../../types';
import { CommonModule } from '@angular/common';
import { LoadingProductComponent } from '../../components/loading-product/loading-product.component';

@Component({
  selector: 'app-computer-accessories',
  standalone: true,
  imports: [ProductContainerComponent, CommonModule, LoadingProductComponent],
  templateUrl: './computer-accessories.component.html',
  styleUrl: './computer-accessories.component.css',
})
export class ComputerAccessoriesComponent implements OnInit {
  products!: Observable<MeanProducts[]>;
  constructor(private meanBackend: BackendService) {}

  ngOnInit(): void {
    this.products = this.meanBackend.getData();
  }
}
