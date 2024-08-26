import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-recent-order',
  standalone: true,
  imports: [TableModule],
  templateUrl: './recent-order.component.html',
  styleUrl: './recent-order.component.css',
})
export class RecentOrderComponent {
  date = new Date().toUTCString();
}
