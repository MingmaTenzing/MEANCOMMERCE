import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [ProgressSpinnerModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css',
  providers: [MessageService],
})
export class ProgressBarComponent {}
