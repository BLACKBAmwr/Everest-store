
import React from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">آراء <span className="gold-text">العملاء</span></h2>
          <p className="text-gray-400 italic">ماذا يقول عنا من جرب خدمتنا</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="glass p-8 rounded-2xl relative group hover:scale-[1.02] transition-transform">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-[#D4AF37]/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 min-h-[80px]">"{review.comment}"</p>
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <span className="font-bold gold-text">{review.name}</span>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
