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
