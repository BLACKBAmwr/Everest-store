
import React from 'react';
import { Package, Review, Stats } from './types';

export const STORE_NAME = "Everest Store";
export const VODAFONE_CASH = "01287702619";
export const CONTACT_PHONE = "01022449197";
export const FB_LINK = "https://m.facebook.com/profile.php?id=61577573870702&name=xhp_nt__fb__action__open_user";

export const calculateTax = (robux: number): number => {
  // Logic: < 500 = 5, 500-999 = 10, 1000-1499 = 15...
  return Math.floor(robux / 500) * 5 + 5;
};

export const PACKAGES: Package[] = [
  { id: 1, robux: 100, basePrice: 50, tax: 5, total: 55 },
  { id: 2, robux: 200, basePrice: 100, tax: 5, total: 105 },
  { id: 3, robux: 500, basePrice: 250, tax: 10, total: 260, popular: true },
  { id: 4, robux: 1000, basePrice: 500, tax: 15, total: 515 },
  { id: 5, robux: 2000, basePrice: 1000, tax: 25, total: 1025 },
  { id: 6, robux: 5000, basePrice: 2500, tax: 55, total: 2555 },
];

export const REVIEWS: Review[] = [
  { id: 1, name: "أحمد محمد", rating: 5, comment: "أسرع تسليم تعاملت معه، ثقة ومصداقية عالية جداً.", date: "منذ يومين" },
  { id: 2, name: "ياسين علي", rating: 5, comment: "الروبكس وصل في أقل من 5 دقائق. شكراً متجر إيفرست.", date: "منذ أسبوع" },
  { id: 3, name: "عمر خالد", rating: 5, comment: "تعامل محترم وأسعار ممتازة مقارنة بالسوق.", date: "منذ شهر" },
];

export const STORE_STATS: Stats = {
  deals: 1250,
  customers: 840,
  totalEGP: 65000,
};
