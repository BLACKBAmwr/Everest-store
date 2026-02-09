
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-24 relative bg-black/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="glass p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:border-[#D4AF37]/30 transition-all">
              <div className="mb-4 p-4 rounded-xl bg-white/5 gold-text group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-black gold-text mb-2">{stat.value}</div>
              <div className="text-gray-400 font-bold text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
