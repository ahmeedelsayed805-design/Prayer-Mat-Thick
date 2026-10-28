import React from 'react';
import { Truck, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOrderClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOrderClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white text-xs sm:text-sm py-2 px-3">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-center font-medium">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>السعر <strong>369 جنيه</strong> للمصلية | الشحن مجاني للقطعتين فأكثر 🚚</span>
          </span>
          <span className="hidden md:inline-block opacity-40">|</span>
          <span className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5 text-emerald-200" />
            <span>الدفع عند الاستلام بعد المعاينة والفحص</span>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-700 to-teal-900 flex items-center justify-center text-amber-300 shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M4 22h16" />
              <path d="M6 18V9a6 6 0 0 1 12 0v9" />
              <path d="M9 18v-4a3 3 0 0 1 6 0v4" />
              <circle cx="12" cy="5" r="1" fill="currentColor" />
            </svg>
          </div>
          <div>
            <div className="text-lg font-bold text-slate-900 flex items-center gap-1.5">
              <span>سجادة الصلاة الطبية</span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">مقاس 115×65 سم | سُمك 1.5 سم</p>
          </div>
        </a>

        {/* Quick links on desktop */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-slate-600">
          <a href="#problem-solution" className="hover:text-emerald-700 transition-colors">المشكلة والحل</a>
          <a href="#real-video" className="hover:text-emerald-700 transition-colors">فيديو حقيقي</a>
          <a href="#reviews" className="hover:text-emerald-700 transition-colors">آراء العملاء</a>
          <a href="#features" className="hover:text-emerald-700 transition-colors">المميزات</a>
          <a href="#pricing" className="hover:text-emerald-700 transition-colors">الأسعار والعروض</a>
          <a href="#return-policy" className="hover:text-emerald-700 transition-colors">سياسة الاسترجاع</a>
          <a href="#faq" className="hover:text-emerald-700 transition-colors">الأسئلة الشائعة</a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOrderClick}
            className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>اطلب الآن (369 ج.م)</span>
          </button>
        </div>
      </div>
    </header>
  );
};
