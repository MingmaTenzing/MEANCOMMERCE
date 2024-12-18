import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { StripeService } from '../../services/stripe/stripe.service';
import Stripe from 'stripe';
import { MatIconModule } from '@angular/material/icon';

import { session_Status } from '../../types';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-return',
  imports: [MatIconModule, ProgressSpinnerModule, CommonModule],
  templateUrl: './return.component.html',
  styleUrl: './return.component.css',
})
export class ReturnComponent implements OnInit, OnDestroy {
  _$destroy = new Subject<void>();
  session_Status: session_Status | null = null;
  session_id: string | null = null;
  constructor(
    private http: HttpClient,
    private activated_route: ActivatedRoute,
    private stripeService: StripeService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activated_route.queryParams
      .pipe(takeUntil(this._$destroy))
      .subscribe((params) => {
        this.session_id = params['session_id'];
      });

    if (this.session_id) {
      this.stripeService
        .fetchSessionStatus(this.session_id)
        .pipe(takeUntil(this._$destroy))
        .subscribe((data) => {
          this.session_Status = data;

          if (this.session_Status.status === 'open') {
            this.router.navigate(['/checkout']);
          }
        });
    }
  }

  ngOnDestroy(): void {
    this._$destroy.next();
    this._$destroy.complete();
  }
}
