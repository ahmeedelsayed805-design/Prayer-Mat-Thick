import React from 'react';
import { ShieldCheck, Truck, RotateCcw } from 'lucide-react';

interface FooterProps {
  onOpenBloggerModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBloggerModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-10 pb-20 lg:pb-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-slate-800 items-center">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-2 text-center md:text-right">
            <div className="inline-flex items-center gap-2 text-white font-black text-xl">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-amber-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M4 22h16" />
                  <path d="M6 18V9a6 6 0 0 1 12 0v9" />
                  <path d="M9 18v-4a3 3 0 0 1 6 0v4" />
                  <circle cx="12" cy="5" r="1" fill="currentColor" />
                </svg>
              </div>
              <span>سجادة الصلاة الطبية</span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto md:mx-0 leading-relaxed">
              سجادة الصلاة الطبية الفاخرة (115×65 سم، سُمك 1.5 سم) لحماية الركبتين والمفاصل، الدفع عند الاستلام مع ضمان 14 يوماً للاستبدال والاسترجاع.
            </p>
          </div>

          {/* Guarantees */}
          <div className="md:col-span-6 space-y-2">
            <div className="grid grid-cols-3 gap-2.5 text-xs text-slate-300 text-center">
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 flex flex-col items-center gap-1.5">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-white text-[11px]">معاينة قبل الدفع</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 flex flex-col items-center gap-1.5">
                <RotateCcw className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-white text-[11px]">استبدال 14 يوم</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 flex flex-col items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-white text-[11px]">سُمك 1.5 سم</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-right">
          <p>© {new Date().getFullYear()} سجادة الصلاة الطبية. جميع الحقوق محفوظة.</p>
          <span>راحة تامة وسكينة في كل سجدة</span>
        </div>
      </div>
    </footer>
  );
};
