import { Component, OnInit } from '@angular/core';
import { SidePanelComponent } from './components/side-panel/side-panel/side-panel.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { BackendService } from '../../services/backend/backend.service';

@Component({
    selector: 'app-dashboard',
    imports: [
        SidePanelComponent,
        RouterOutlet,
        SideMenuComponent,
        RouterLink,
        RouterLinkActive,
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // user_details: Observable<user> | null = null;
  constructor() {
    // this.backend.check_session();
  }

  ngOnInit(): void {
    // this.user_details = this.backend.fetch_user_details();
  }
}
