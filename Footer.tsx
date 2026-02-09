
import React from 'react';
import { Phone, AlertCircle, Facebook, ExternalLink } from 'lucide-react';
import { CONTACT_NUMBER, STORE_NAME, FACEBOOK_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 gold-bg rounded flex items-center justify-center font-black text-black">E</div>
              <span className="text-xl font-bold gold-text tracking-wider">{STORE_NAME}</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              وجهتك الأولى والآمنة لشراء الروبكس في مصر. نضمن لك أفضل الأسعار وأسرع تنفيذ لطلباتك بكل احترافية.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 gold-text" />
                <span className="text-gray-400 tracking-wider font-bold">{CONTACT_NUMBER}</span>
              </div>
              <a 
                href={FACEBOOK_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>صفحة الفيسبوك</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
            <div className="flex items-center gap-3 text-red-400 mb-4">
              <AlertCircle className="w-6 h-6" />
              <h4 className="font-bold">تنبيه هام</h4>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              ممنوع الرن أو الاتصال نهائياً برقم التواصل لعدم الإحراج. يرجى التواصل عبر رسائل الفيسبوك أو الواتساب فقط.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {STORE_NAME}. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
