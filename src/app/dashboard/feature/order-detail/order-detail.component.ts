import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../../services/backend/backend.service';

@Component({
  selector: 'app-order-detail',
  imports: [],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css',
})
export class OrderDetailComponent implements OnInit {
  constructor(private backend: BackendService) {}

  ngOnInit(): void {
    this.backend
      .fetch_order_details('676101cb0bd52ed26bf4d43b')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
