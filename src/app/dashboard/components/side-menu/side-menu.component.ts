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
import { UserService } from '../../../../services/user/user.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  constructor(
    private backend: BackendService,
    private router: Router,
    private userService: UserService
  ) {}
  logOut() {
    this.backend.log_out_user().subscribe((data) => {
      if (data) {
        this.userService.log_out_user();
        this.router.navigate(['/home']);
      }
    });

    console.log('logout ');
  }
}
