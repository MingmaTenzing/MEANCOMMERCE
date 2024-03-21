import { Component } from '@angular/core';
import { WidgetsComponent } from './widgets/widgets.component';
import { FeaturesComponent } from './features/features.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WidgetsComponent, FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
