import Stripe from 'stripe';

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
  name: string;
  userId: string;
  message: string;
}
