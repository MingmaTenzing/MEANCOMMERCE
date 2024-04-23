import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FlashContainerComponent } from '../../components/flash-container/flash-container.component';
import { BackendService } from '../../../services/backend.service';
import { Observable } from 'rxjs';
import { MeanProducts } from '../../../types';

@Component({
  selector: 'app-flash-sale',
  standalone: true,
  imports: [CommonModule, FlashContainerComponent],
  templateUrl: './flash-sale.component.html',
  styleUrl: './flash-sale.component.css',
})
export class FlashSaleComponent implements OnInit {
  constructor(private meanBackend: BackendService) {}

  product!: Observable<MeanProducts[]>;

  ngOnInit(): void {
    this.product = this.meanBackend.getData();
  }
}
