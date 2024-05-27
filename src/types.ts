export interface MeanProducts {
  brand: string;
  category: string;
  description: string;
  featured: boolean;
  images: Array<string>;
  name: string;
  price: number;
  rating: number;
  createAt: Date;
  stock: number;
  sku: number;
  _id: string;
}

export interface shopProducts {
  category: string | null;
  maximumRange: number | null;
  mininumRange: number | null;
}
