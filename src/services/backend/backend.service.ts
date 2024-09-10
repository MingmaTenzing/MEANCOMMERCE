import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  FilterSearch,
  MeanProducts,
  categoryProductFilter,
  shopProducts,
} from '../../types';
import { FormGroup } from '@angular/forms';
import { token } from '../../app/auth/auth_types';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  });
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

    return this.http.post<token>('http://localhost:5000/api/v1/auth/login', {
      email: user_credentials.value.email,
      password: user_credentials.value.password,
    });
  }

  signup_user(user_details: FormGroup) {
    return this.http.post('http://localhost:5000/api/v1/auth/register', {
      email: user_details.value.email,
      password: user_details.value.password,
      user_name: user_details.value.user_name,
    });
  }
}
