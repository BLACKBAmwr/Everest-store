
import React from 'react';
import { ChevronDown, Rocket, ShoppingCart } from 'lucide-react';
import { FACEBOOK_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#D4AF37]/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-white/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10 text-xs md:text-sm font-medium">
          <Rocket className="w-4 h-4 gold-text" />
          <span className="gold-text">أسرع وأضمن خدمة تسليم روبكس في مصر</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
          ارتقِ بتجربتك في <br />
          <span className="gold-text">روبلوكس</span> مع <span className="underline decoration-[#D4AF37] decoration-4 underline-offset-8">إيفرست</span>
        </h1>
        
        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-12">
          أسعار تنافسية، حماية كاملة لحسابك، وفريق دعم متاح على مدار الساعة. Everest Store هو اختيار المحترفين.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto gold-bg text-black px-10 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <ShoppingCart className="w-6 h-6" />
            اطلب الآن
          </a>
          <a href="#pricing" className="w-full md:w-auto glass text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-white/10 transition-all border border-white/10">
            عرض الأسعار
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-50">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
