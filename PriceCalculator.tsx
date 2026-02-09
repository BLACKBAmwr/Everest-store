
import React, { useState, useEffect } from 'react';
import { CALCULATE_PRICE, CALCULATE_TAX, VODAFONE_CASH, FACEBOOK_URL } from '../constants';
import { Wallet, Info, ArrowRightLeft, ShoppingCart, Send } from 'lucide-react';

const PriceCalculator: React.FC = () => {
  const [robuxAmount, setRobuxAmount] = useState<number>(100);
  const [results, setResults] = useState({ price: 0, tax: 0, total: 0 });

  useEffect(() => {
    const p = CALCULATE_PRICE(robuxAmount);
    const t = CALCULATE_TAX(robuxAmount);
    setResults({ price: p, tax: t, total: p + t });
  }, [robuxAmount]);

  const predefined = [100, 500, 1000, 2000, 5000];

  const handleOrder = () => {
    const message = `مرحباً Everest Store، أريد شراء ${robuxAmount} روبكس. المبلغ الإجمالي هو ${results.total} ج.م.`;
    window.open(`${FACEBOOK_URL}&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">احسب <span className="gold-text">سعرك</span></h2>
          <p className="text-gray-400">سعر الـ 100 روبكس بـ 50ج + ضرائب التحويل البسيطة</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Input */}
          <div className="glass p-8 md:p-12 rounded-3xl border border-white/10">
            <label className="block text-xl font-bold mb-6">كم روبكس تحتاج؟</label>
            <div className="relative mb-8">
              <input 
                type="number" 
                value={robuxAmount}
                onChange={(e) => setRobuxAmount(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-8 text-3xl font-black focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="100"
              />
              <div className="absolute left-8 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-500">R$</div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {predefined.map(amt => (
                <button 
                  key={amt}
                  onClick={() => setRobuxAmount(amt)}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${robuxAmount === amt ? 'gold-bg text-black' : 'bg-white/5 hover:bg-white/10'}`}
                >
                  {amt}
                </button>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-[#D4AF37]/5 border border-[#D4AF37]/20 flex gap-4 items-start">
              <Info className="w-6 h-6 gold-text shrink-0 mt-1" />
              <div className="text-sm text-gray-300 leading-relaxed">
                <p className="font-bold gold-text mb-1">توضيح الضرائب:</p>
                تحت الـ 500: +5ج ضرائب <br />
                من 500 لـ 999: +10ج ضرائب <br />
                كل 500 زيادة: +5ج ضرائب إضافية
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="flex flex-col gap-6">
            <div className="glass p-8 rounded-3xl border-2 gold-border shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="text-gray-400 font-bold mb-1">إجمالي المبلغ المطلوب</h3>
                  <div className="text-6xl font-black gold-text">{results.total} <span className="text-2xl">جنيه</span></div>
                </div>
                <Wallet className="w-12 h-12 text-white/10" />
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10 mb-8">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-400">سعر الروبكس الأساسي</span>
                  <span className="font-bold">{results.price} ج.م</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-400">ضرائب التحويل</span>
                  <span className="font-bold text-red-400">+{results.tax} ج.م</span>
                </div>
              </div>

              {/* NEW ORDER BUTTON */}
              <button 
                onClick={handleOrder}
                className="w-full gold-bg text-black py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-lg mb-6"
              >
                <ShoppingCart className="w-6 h-6" />
                اطلب الروبكس الآن
              </button>

              <div className="p-6 rounded-2xl bg-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400 mb-1">رقم فودافون كاش (تحويل فقط)</div>
                  <div className="text-xl font-black tracking-widest">{VODAFONE_CASH}</div>
                </div>
                <button 
                  onClick={() => navigator.clipboard.writeText(VODAFONE_CASH)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-bold transition-colors"
                >
                  نسخ
                </button>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10">
              <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                <ArrowRightLeft className="w-5 h-5 gold-text" />
                طريقة التسليم
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex gap-2">
                  <span className="gold-text font-black">•</span>
                  عن طريق الجيم باس (Gamepass) في حسابك الخاص.
                </li>
                <li className="flex gap-2">
                  <span className="gold-text font-black">•</span>
                  أو هدية (Gift) داخل الماب المخصص.
                </li>
                <li className="flex gap-2">
                  <span className="gold-text font-black">•</span>
                  التسليم فوري بمجرد تأكيد عملية التحويل.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
