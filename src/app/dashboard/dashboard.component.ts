import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SidePanelComponent } from '../components/side-panel/side-panel.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
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
