import { Component } from '@angular/core';
import { WidgetsComponent } from './widgets/widgets.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WidgetsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
