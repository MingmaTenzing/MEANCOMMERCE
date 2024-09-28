import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          transform: 'translateX(0)',
        })
      ),
      state(
        'closed',
        style({
          transform: 'translateX(100%)',
        })
      ),
      transition('open => closed', [animate('300ms ease-in-out')]),
      transition('closed => open', [animate('300ms ease-out')]),
    ]),
  ],
})
export class AuthFormComponent {
  currentRoute: string = '';
  left_side_bar: boolean = false;

  constructor(private Router: Router) {
    this.currentRoute = this.Router.url.split('/')[2];
    if (this.currentRoute == 'signin') {
      this.left_side_bar = true;
    }
    console.log(this.left_side_bar);
  }

  toggle() {
    this.left_side_bar = !this.left_side_bar;
    console.log(this.left_side_bar);
  }
}
