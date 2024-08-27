import { Component } from '@angular/core';
import { SidePanelComponent } from './components/side-panel/side-panel/side-panel.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidePanelComponent,
    RouterOutlet,
    SideMenuComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
