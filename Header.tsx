
import React from 'react';
import { Facebook } from 'lucide-react';
import { STORE_NAME, FACEBOOK_URL } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 gold-bg rounded-lg flex items-center justify-center font-black text-black text-xl">E</div>
          <span className="text-xl font-bold gold-text tracking-wider">{STORE_NAME}</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-[#D4AF37] transition-colors">الرئيسية</a>
          <a href="#pricing" className="hover:text-[#D4AF37] transition-colors">الأسعار</a>
          <a href="#team" className="hover:text-[#D4AF37] transition-colors">الفريق</a>
          <a href="#stats" className="hover:text-[#D4AF37] transition-colors">إحصائياتنا</a>
          <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">آراء العملاء</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href={FACEBOOK_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 hover:bg-white/10 rounded-full transition-colors gold-text"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <button className="gold-bg text-black px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
            اطلب الآن
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
