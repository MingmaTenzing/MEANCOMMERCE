import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterSearch, MeanProducts, shopProducts } from '../../types';
import { FormGroup } from '@angular/forms';

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

  getSingleProduct(id: string) {
    return this.http.get<MeanProducts>(
      `http://localhost:5000/api/v1/products/${id}`
    );
  }
}
