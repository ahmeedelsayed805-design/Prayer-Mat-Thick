import React from 'react';
import { RotateCcw, CheckCircle2 } from 'lucide-react';
import { RETURN_POLICY_POINTS } from '../data/products';

export const ReturnPolicy: React.FC = () => {
  return (
    <section id="return-policy" className="py-14 bg-emerald-950 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-800 text-amber-300 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-3 shadow-xs">
            <RotateCcw className="w-4 h-4" />
            <span>ضمانك الذهبي وحقك الكامل</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight flex items-center justify-center gap-2">
            <span>🔄 سياسة الاستبدال والاسترجاع</span>
          </h2>
          <p className="text-emerald-200 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            راحتك وثقتك هي أولويتنا الأولى.. اشتري وأنت مطمئن 100%
          </p>
        </div>

        {/* 10 Points Grid */}
        <div className="bg-emerald-900/60 border border-emerald-700/60 rounded-3xl p-5 sm:p-8 backdrop-blur-xs shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {RETURN_POLICY_POINTS.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-emerald-950/60 border border-emerald-700/40 rounded-2xl p-3.5 text-xs sm:text-sm text-slate-100 leading-relaxed"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
