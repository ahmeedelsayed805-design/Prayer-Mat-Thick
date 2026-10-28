import React from 'react';
import { Tag, Check, Truck, ShieldCheck, ArrowDown } from 'lucide-react';
import { PRICING_BUNDLES, PricingBundle } from '../data/products';

interface PricingOfferProps {
  selectedBundle: PricingBundle;
  onSelectBundle: (bundle: PricingBundle) => void;
  onOrderClick: () => void;
}

export const PricingOffer: React.FC<PricingOfferProps> = ({
  selectedBundle,
  onSelectBundle,
  onOrderClick,
}) => {
  const handleBundleChoose = (bundle: PricingBundle) => {
    onSelectBundle(bundle);
    onOrderClick();
  };

  return (
    <section id="pricing" className="py-14 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold px-4 py-1 rounded-full mb-2.5">
            <Tag className="w-4 h-4 text-emerald-600" />
            <span>الأسعار والعروض</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
            369 جنيه فقط للمصلية.. والشحن مجاني للقطعتين فأكثر!
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            اختر الكمية المطلوبة وسيتم تجهيز طلبك فوراً مع حق المعاينة الكاملة قبل الدفع.
          </p>
        </div>

        {/* 3 Bundles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRICING_BUNDLES.map((bundle) => {
            const isSelected = selectedBundle.id === bundle.id;
            return (
              <div
                key={bundle.id}
                className={`rounded-3xl p-6 flex flex-col justify-between transition-all relative ${
                  bundle.popular
                    ? 'bg-gradient-to-b from-emerald-50/80 to-white border-2 border-emerald-600 shadow-xl ring-2 ring-emerald-600/20 md:-translate-y-1'
                    : 'bg-white border-2 border-slate-200 hover:border-emerald-300 shadow-xs'
                }`}
              >
                {bundle.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-xs font-bold px-3.5 py-0.5 rounded-full shadow-sm">
                    {bundle.badge}
                  </div>
                )}

                <div>
                  <div className="text-center pb-4 border-b border-slate-100">
                    <h3 className="text-lg font-bold text-slate-900">{bundle.title}</h3>
                    <div className="mt-3">
                      <span className="text-3xl font-black text-emerald-800">
                        {bundle.totalPrice} <span className="text-sm font-bold">ج.م</span>
                      </span>
                    </div>

                    <div className={`mt-2 text-xs font-bold inline-block px-3 py-1 rounded-full ${
                      bundle.shippingCost === 0
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {bundle.shippingText}
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>سعر القطعة: 369 جنيه فقط</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>مقاس 115×65 سم، سُمك 1.5 سم</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{bundle.shippingCost === 0 ? '🚚 شحن مجاني 100%' : 'شحن 65 ج.م (للقطعة الواحدة)'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>الدفع عند الاستلام بعد المعاينة والفحص</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => handleBundleChoose(bundle)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      bundle.popular
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>اختيار هذا العرض</span>
                    <ArrowDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct notice */}
        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>افتح السجادة وافردها وافحصها براحتك مع المندوب قبل دفع أي جنيه.</span>
        </div>
      </div>
    </section>
  );
};
