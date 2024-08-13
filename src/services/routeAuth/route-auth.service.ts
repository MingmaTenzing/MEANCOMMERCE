import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteAuthService {
  allowRoute: boolean = false;

  constructor(private router: Router) {}

  isAllowed() {
    return this.allowRoute;
  }

  proceedRoute() {
    this.allowRoute = true;
    console.log('this route');
    this.router.navigate(['/checkout']);
  }
}
