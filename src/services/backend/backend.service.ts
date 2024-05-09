import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeanProducts } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<MeanProducts[]>(
      'http://localhost:5000/api/v1/products'
    );
  }

  getSingleProduct(id: string) {
    return this.http.get<MeanProducts>(
      `http://localhost:5000/api/v1/products/${id}`
    );
  }
}
