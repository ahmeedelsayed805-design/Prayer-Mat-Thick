import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircleQuestion, PhoneCall } from 'lucide-react';
import { FAQS } from '../data/products';

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 bg-[#FAF9F5] relative overflow-hidden border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-bold px-4 py-1 rounded-full mb-3">
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span>الأسئلة المتكررة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug">
            كل ما يدور في ذهنك عن مصلية الصلاة الطبية
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            إجابات واضحة ومباشرة على كل استفساراتكم لتكون مطمئناً تماماً قبل الشراء.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-emerald-500 shadow-md ring-1 ring-emerald-500/20'
                    : 'border-slate-200/80 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-right p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-emerald-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p className="pr-8">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
