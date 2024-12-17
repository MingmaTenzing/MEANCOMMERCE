import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ai_assistant_chat,
  FilterSearch,
  MeanProducts,
  orders,
  uploadImage,
  user,
} from '../../types';
import { FormGroup } from '@angular/forms';
import { auth_session } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  // use localhost: 5000 for development
  // api_Url: string = 'https://meancommerce-backend.onrender.com';
  // api_Url: string = 'http://localhost:5000';
  api_Url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  chat_OpenAI(user_query: string) {
    return this.http.post<ai_assistant_chat>(
      `${this.api_Url}/api/v1/compare/shop_ai`,
      {
        query: user_query,
      }
    );
  }

  fetch_order_details(order_id: string) {
    return this.http.get<orders>(
      `${this.api_Url}/api/v1/orders/get-order-details?order_id=${order_id}`,
      {
        withCredentials: true,
      }
    );
  }

  getData() {
    return this.http.get<MeanProducts[]>(
      `${this.api_Url}/api/v1/products?page=1&limit=10`
    );
  }

  getshopProducts(filter: FilterSearch) {
    return this.http.post<MeanProducts[]>(
      `${this.api_Url}/api/v1/products?page=1&limit=10`,
      filter
    );
  }

  getCategoryProducts(categoryName: string) {
    return this.http.post<MeanProducts[]>(
      `${this.api_Url}/api/v1/products/category-products?page=1&limit=10`,
      {
        category: categoryName,
      }
    );
  }

  getSingleProduct(id: string) {
    return this.http.get<MeanProducts>(`${this.api_Url}/api/v1/products/${id}`);
  }

  signInUser(user_credentials: FormGroup) {
    return this.http.post<user>(
      `${this.api_Url}/api/v1/auth/login`,
      {
        email: user_credentials.value.email,
        password: user_credentials.value.password,
      },
      {
        withCredentials: true,
      }
    );
  }

  googleAuth() {
    return this.http.get<any>(`${this.api_Url}/auth/google`, {
      withCredentials: true,
    });
  }

  signup_user(user_details: FormGroup) {
    return this.http.post(
      `${this.api_Url}/api/v1/auth/register`,
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
    let formData = new FormData();
    formData.append('image', image);
    console.log(formData);

    return this.http.post<uploadImage>(
      `${this.api_Url}/api/v1/upload-image`,
      formData,

      {
        withCredentials: true,
      }
    );
  }

  check_session() {
    return this.http.get<auth_session>(
      `${this.api_Url}/api/v1/auth/auth-check-session`,
      {
        withCredentials: true,
      }
    );
  }

  fetch_user_details() {
    return this.http.get<user>(
      `${this.api_Url}/api/v1/dashboard/user-details`,
      {
        withCredentials: true,
      }
    );
  }

  log_out_user() {
    return this.http.post(
      `${this.api_Url}/api/v1/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );
  }

  get_recent_orders() {
    return this.http.get<orders[]>(
      `${this.api_Url}/api/v1/orders/get_recent_orders`,
      {
        withCredentials: true,
      }
    );
  }
}
