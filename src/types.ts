import Stripe from 'stripe';
import { Url } from 'url';

export interface MeanProducts {
  brand: string;
  category: string;
  description: string;
  featured: boolean;
  images: Array<string>;
  name: string;
  price: number;
  rating: number;
  createdAt: Date;
  stock: number;
  sku: number;
  _id: string;
  quantity?: number;
}
export interface line_items {
  line_items: Stripe.Checkout.SessionCreateParams.LineItem[];
}

export interface session_Status {
  status: string;
  customer_email: string;
  customer_name: string;
  id: string;
  payment_intent: string;
  amount_total: number;
  amount_subtotal: number;
  receipt: string;
}

export interface shopProducts {
  category: string;
  maximumRange: number;
  mininumRange: number;
}

export interface FilterSearch {
  category?: string;
  price?: {
    $gte?: number;
    $lt?: number;
  };
  brand?: {
    $in?: string[] | null;
  };
}

export interface categoryProductFilter {
  category: string;
}

export interface cartItems {
  brand: string;
  category: string;
  description: string;
  featured: boolean;
  images: Array<string>;
  name: string;
  price: number;
  rating: number;
  createdAt: Date;
  stock: number;
  sku: number;
  _id: string;
  quantity?: number;
}

export interface auth_session {
  userId: string;
  userName: string;
}

export interface user {
  email: string;
  password: string;
  profile_image: string;
  user_name: string;
  date: Date;
  _id: string;
}

export interface orders {
  user_id: string;
  paymend_intent: string;
  charge_id: string;
  total_amount: number;
  customer_email: string;
  customer_name: string;
  status: string;
  receipt_url: string;
  _id: string;
  created_at: Date;
}
