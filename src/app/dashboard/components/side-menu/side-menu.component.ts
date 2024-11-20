import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { BackendService } from '../../../../services/backend/backend.service';
import { user } from '../../../../types';

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  constructor(private backend: BackendService, private router: Router) {}
  logOut() {
    this.backend.log_out_user().subscribe((data) => {
      if (data) {
        console.log(data);
        this.router.navigate(['/home']);
      }
    });

    console.log('logout ');
  }
}
