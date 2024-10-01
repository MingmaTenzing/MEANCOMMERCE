import { Component } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { BackendService } from '../../../../services/backend/backend.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  constructor(private backend: BackendService) {}
  logOut() {
    this.backend.log_out_user().subscribe((data) => console.log(data));
    console.log('logout ');
  }
}
