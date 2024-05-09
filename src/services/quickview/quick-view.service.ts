import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuickViewService {
  quickView$ = new BehaviorSubject<boolean>(false);
  constructor() {}

  enableQuickView() {
    this.quickView$.next(true);
    document.body.classList.add('stop-scrolling');
  }

  closeQuickView() {
    this.quickView$.next(false);
    document.body.classList.remove('stop-scrolling');
  }
}
