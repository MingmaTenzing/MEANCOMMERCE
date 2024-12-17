import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../../services/backend/backend.service';
import { ActivatedRoute } from '@angular/router';
import { orders } from '../../../../types';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-order-detail',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css',
})
export class OrderDetailComponent implements OnInit {
  order_details: orders | null = null;
  constructor(
    private backend: BackendService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.backend
      .fetch_order_details(this.router.snapshot.params['id'])
      .subscribe((data) => {
        this.order_details = data;
      });
  }
}
