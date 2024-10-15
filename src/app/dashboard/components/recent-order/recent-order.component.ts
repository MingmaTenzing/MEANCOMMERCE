import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { BackendService } from '../../../../services/backend/backend.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { orders } from '../../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-order',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './recent-order.component.html',
  styleUrl: './recent-order.component.css',
})
export class RecentOrderComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  constructor(private backend: BackendService) {}
  date = new Date().toUTCString();

  recent_orders: orders[] = [];
  ngOnInit(): void {
    this.backend
      .get_recent_orders()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => (this.recent_orders = data));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
