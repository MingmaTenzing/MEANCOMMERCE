import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FilterSearch,
  MeanProducts,
  categoryProductFilter,
  shopProducts,
} from '../../types';
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

  signInUser(user_credentials: FormGroup) {
    console.log(user_credentials.value.email, user_credentials.value.password);

    this.http
      .post('http://localhost:5000/api/v1/auth/login', {
        email: 'testing@gmail.com',
        password: '123testing',
      })
      .subscribe((token) => console.log(token));
  }
}
