import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FilterSearch,
  MeanProducts,
  categoryProductFilter,
  shopProducts,
} from '../../types';
import { FormGroup } from '@angular/forms';
import { Url } from 'url';
import Stripe from 'stripe';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<MeanProducts[]>(
      'http://localhost:5000/api/v1/products?page=1&limit=10'
    );
  }

  getshopProducts(filter: FilterSearch) {
    return this.http.post<MeanProducts[]>(
      'http://localhost:5000/api/v1/products?page=1&limit=10',
      filter
    );
  }

  getCategoryProducts(categoryName: string) {
    return this.http.post<MeanProducts[]>(
      'http://localhost:5000/api/v1/products/category-products?page=1&limit=10',
      {
        category: categoryName,
      }
    );
  }

  getSingleProduct(id: string) {
    return this.http.get<MeanProducts>(
      `http://localhost:5000/api/v1/products/${id}`
    );
  }

}
