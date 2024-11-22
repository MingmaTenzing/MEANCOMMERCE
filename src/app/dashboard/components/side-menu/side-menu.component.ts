import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { BackendService } from '../../../../services/backend/backend.service';
import { user } from '../../../../types';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
  providers: [CookieService],
})
export class SideMenuComponent {
  cookieService = inject(CookieService);
  constructor(private backend: BackendService, private router: Router) {
    console.log(this.cookieService.get('token'));
  }
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
