import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BackendService } from '../../../../services/backend/backend.service';
import { orders } from '../../../../types';
import { CommonModule } from '@angular/common';
import { OrderHistoryLoadingComponent } from '../../components/loading/order-history-loading/order-history-loading.component';
import { RecentOrderComponent } from '../../components/recent-order/recent-order.component';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule, OrderHistoryLoadingComponent, RecentOrderComponent],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css',
})
export class OrderHistoryComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  constructor(private backend: BackendService) {}

  recent_orders: orders[] = [];
  ngOnInit(): void {
    this.backend
      .get_recent_orders()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => (this.recent_orders = data));

    this.recent_orders.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
