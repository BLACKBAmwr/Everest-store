
import React from 'react';

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  name: string;
  alias?: string;
  role: string;
  country: string;
  discord?: string;
  isLeader?: boolean;
}

export interface Package {
  amount: number;
  price: number;
  tax: number;
  total: number;
}
