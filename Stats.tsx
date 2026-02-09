
import React from 'react';
import { ShoppingCart, Users, Wallet } from 'lucide-react';
import { STORE_STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 -mt-16 relative z-10">
      <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-8 rounded-2xl shadow-xl hover:border-amber-500/50 transition-all text-center group">
        <div className="gold-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-black group-hover:scale-110 transition-transform">
          <ShoppingCart size={28} />
        </div>
        <h3 className="text-4xl font-black mb-1">+{STORE_STATS