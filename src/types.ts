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

export interface ai_assistant_chat {
  message: string;
  role: string;
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

export interface uploadImage {
  image: string;
}

export interface user {
  email: string;
  password: string;
  profile_image: string;
  user_name: string;
  date: Date;
  _id: string;
}

export interface order_detail_lineItem {
  currency: string;
  images: Array<string>;
  name: string;
  price: number;
  quantity: number;
}
export interface orders {
  _id: string;
  user_id: string;
  total_amount: number;
  status: string;
  receipt_url: string;
  line_items: Array<order_detail_lineItem>;
  customer_name: string;
  customer_email: string;
  created_at: Date;
  charge_id: string;
}
