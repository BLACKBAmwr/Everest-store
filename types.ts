
export interface Package {
  id: number;
  robux: number;
  basePrice: number;
  tax: number;
  total: number;
  popular?: boolean;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Stats {
  deals: number;
  customers: number;
  totalEGP: number;
}
