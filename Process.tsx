
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">كيف <span className="gold-text">تشتري؟</span></h2>
          <p className="text-gray-400">4 خطوات بسيطة لتكون ملكاً في روبلوكس</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl gold-bg flex items-center justify-center text-black mb-6 relative z-10 group-hover:rotate-12 transition-transform shadow-xl">
                {React.cloneElement(step.icon as React.ReactElement, { className: "w-10 h-10" })}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-[#D4AF37] rounded-full flex items-center justify-center font-black border-2 border-[#D4AF37]">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-black mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-[#D4AF37]/50 to-transparent -z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
