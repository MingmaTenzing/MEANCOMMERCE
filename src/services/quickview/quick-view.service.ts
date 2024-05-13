import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MeanProducts } from '../../types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuickViewService {
  quickView$ = new BehaviorSubject<boolean>(false);
  productId!: string;
  constructor(private http: HttpClient) {}

  enableQuickView() {
    this.quickView$.next(true);
    document.body.classList.add('stop-scrolling');
  }

  closeQuickView() {
    this.quickView$.next(false);
    document.body.classList.remove('stop-scrolling');
  }

  getQuickViewProduct() {
    return this.http.get<MeanProducts>(
      `http://localhost:5000/api/v1/products/${this.productId}`
    );
  }
}
