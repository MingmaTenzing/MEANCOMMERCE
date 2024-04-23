import { Component, OnInit } from '@angular/core';
import { BestDealProductComponent } from '../../components/best-deal-product/best-deal-product.component';
import { BackendService } from '../../../services/backend.service';
import { Observable } from 'rxjs';
import { MeanProducts } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bestdeals',
  standalone: true,
  imports: [BestDealProductComponent, CommonModule],
  templateUrl: './bestdeals.component.html',
  styleUrl: './bestdeals.component.css',
})
export class BestdealsComponent implements OnInit {
  products!: Observable<MeanProducts[]>;

  constructor(private meanBackend: BackendService) {}

  ngOnInit(): void {
    this.products = this.meanBackend.getData();
  }
}
