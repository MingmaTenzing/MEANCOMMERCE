import {
  DestroyRef,
  inject,
  Inject,
  Injectable,
  OnDestroy,
} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FilterSearch, MeanProducts, orders, user } from '../../types';
import { FormGroup } from '@angular/forms';
import { token } from '../../app/auth/auth_types';
import { auth_session } from '../../types';
import { Subject, take, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  destroy$ = new Subject<void>();
  destroyRef = inject(DestroyRef);

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
    return this.http.post<user>(
      'http://localhost:5000/api/v1/auth/login',
      {
        email: user_credentials.value.email,
        password: user_credentials.value.password,
      },
      {
        withCredentials: true,
      }
    );
  }

  signup_user(user_details: FormGroup) {
    return this.http.post(
      'http://localhost:5000/api/v1/auth/register',
      {
        email: user_details.value.email,
        password: user_details.value.password,
        user_name: user_details.value.user_name,
        profile_image: user_details.value.profile_image,
      },
      {
        withCredentials: true,
      }
    );
  }

  upload_profile_image(image: File) {
    return this.http.post('http://localhost:5000/api/v1/upload-image', {});
  }

  check_session() {
    return this.http.get<auth_session>(
      'http://localhost:5000/api/v1/auth/auth-check-session',
      {
        withCredentials: true,
      }
    );
  }

  fetch_user_details() {
    return this.http.get<user>(
      'http://localhost:5000/api/v1/dashboard/user-details',
      {
        withCredentials: true,
      }
    );
  }

  log_out_user() {
    return this.http.get('http://localhost:5000/api/v1/dashboard/logout', {
      withCredentials: true,
    });
  }

  get_recent_orders() {
    return this.http.get<orders[]>(
      'http://localhost:5000/api/v1/orders/get_recent_orders',
      {
        withCredentials: true,
      }
    );
  }
}
