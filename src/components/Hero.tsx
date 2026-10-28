import React, { useState } from 'react';
import { ShieldCheck, Truck, Star, CheckCircle2, Play, Eye, ArrowDown } from 'lucide-react';
import { PRODUCTS, ProductModel } from '../data/products';

interface HeroProps {
  selectedProduct: ProductModel;
  onSelectProduct: (product: ProductModel) => void;
  onOrderClick: () => void;
  onVideoClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  selectedProduct,
  onSelectProduct,
  onOrderClick,
  onVideoClick,
}) => {
  const [viewMode, setViewMode] = useState<'flat' | 'inUse' | 'dimensions'>('inUse');

  const currentImage =
    viewMode === 'flat'
      ? selectedProduct.flatImage
      : viewMode === 'dimensions'
      ? selectedProduct.dimensionImage
      : selectedProduct.inUseImage;

  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-14 lg:py-16 bg-gradient-to-b from-white via-emerald-50/30 to-[#FAF9F5]">
      {/* Decorative Islamic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#047857_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Price and Offer Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold text-emerald-950 shadow-2xs">
            <span className="text-emerald-700">السعر: 369 جنيه فقط</span>
            <span>•</span>
            <span className="text-emerald-700 font-medium">الشحن مجاني للقطعتين فأكثر 🚚</span>
          </div>
          <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full">
            الدفع عند الاستلام بعد المعاينة والفحص
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text & Content Column */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.3] sm:leading-[1.25]">
              صَلِّ بخشوع وسكينة تامة..{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-800 via-emerald-600 to-teal-700 block mt-2">
                وداعاً لآلام الركبتين والمفاصل
              </span>
              مع مصلية الصلاة الطبية
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              سجادة صلاة طبية مبطنة بإسفنج عالي الكثافة (سُمك 1.5 سم) لحماية الركبتين وعظام القدمين من صلابة الأرض، بمقاس واسع ومريح (115 × 65 سم) وقاعدة ثابتة مانعة للانزلاق.
            </p>

            {/* Quick Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs sm:text-sm font-bold text-slate-700">
              <div className="flex items-center gap-2 bg-white/90 border border-slate-200/80 rounded-xl p-2.5 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>سُمك 1.5 سم داعم للركب</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 border border-slate-200/80 rounded-xl p-2.5 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>مقاس 115 × 65 سم</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 border border-slate-200/80 rounded-xl p-2.5 shadow-2xs col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>قاعدة مانعة للانزلاق</span>
              </div>
            </div>

            {/* Color Model Selector on Hero */}
            <div className="bg-white/95 rounded-2xl p-4 border border-emerald-100 shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block animate-ping" />
                  اختر نقشة ولون سجادتك المفضلة:
                </span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                  {selectedProduct.badge}
                </span>
              </div>

              {/* 5 Color Options Tabs */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {PRODUCTS.map((prod) => {
                  const isSelected = prod.id === selectedProduct.id;
                  return (
                    <button
                      key={prod.id}
                      onClick={() => onSelectProduct(prod)}
                      className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-600/30 font-bold text-emerald-950 shadow-xs scale-[1.02]'
                          : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100/80 text-slate-700'
                      }`}
                    >
                      <div className="relative w-12 h-14 rounded-lg overflow-hidden border border-slate-200 shadow-2xs bg-white">
                        <img
                          src={prod.flatImage}
                          alt={prod.name}
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>
                      <span className="text-[11px] leading-tight line-clamp-1">{prod.name.split('(')[0].trim()}</span>
                      <div
                        className="w-3 h-3 rounded-full border border-white shadow-xs"
                        style={{ backgroundColor: prod.colorHex }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOrderClick}
                className="pulse-glow flex-1 bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-lg shadow-emerald-700/25 transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>اطلب الآن بـ 369 ج.م (الدفع عند الاستلام)</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>

              <button
                onClick={onVideoClick}
                className="bg-white hover:bg-slate-50 border-2 border-emerald-600/30 hover:border-emerald-600 text-emerald-900 font-bold text-sm sm:text-base py-3.5 px-5 rounded-2xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>شاهد الفيديو الحقيقي 🎥</span>
              </button>
            </div>

            {/* Reassurance Micro-Copy */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-emerald-600" />
                <span>شحن سريع خلال 24 - 48 ساعة</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>معاينة مجانية للمنتج قبل دفع أي مبلغ</span>
              </span>
            </div>
          </div>

          {/* Product Media Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-emerald-100">
              {/* Badge Overlay */}
              <div className="absolute top-6 right-6 z-20 bg-emerald-800 text-amber-300 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {selectedProduct.badge}
              </div>

              {/* View Mode Switcher */}
              <div className="flex items-center justify-center gap-1 bg-slate-100 p-1 rounded-xl mb-3 text-xs font-bold text-slate-700">
                <button
                  onClick={() => setViewMode('inUse')}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all cursor-pointer ${
                    viewMode === 'inUse'
                      ? 'bg-white text-emerald-900 shadow-2xs font-extrabold'
                      : 'hover:text-emerald-700 text-slate-600'
                  }`}
                >
                  أثناء الصلاة
                </button>
                <button
                  onClick={() => setViewMode('flat')}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all cursor-pointer ${
                    viewMode === 'flat'
                      ? 'bg-white text-emerald-900 shadow-2xs font-extrabold'
                      : 'hover:text-emerald-700 text-slate-600'
                  }`}
                >
                  الشكل كاملاً
                </button>
                <button
                  onClick={() => setViewMode('dimensions')}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all cursor-pointer ${
                    viewMode === 'dimensions'
                      ? 'bg-white text-emerald-900 shadow-2xs font-extrabold'
                      : 'hover:text-emerald-700 text-slate-600'
                  }`}
                >
                  المقاسات (115×65)
                </button>
              </div>

              {/* Main Image Container */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-inner flex items-center justify-center group">
                <img
                  key={currentImage}
                  src={currentImage}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />

                {/* Floating caption on image bottom */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white text-center">
                  <p className="font-bold text-sm sm:text-base drop-shadow-sm">{selectedProduct.name}</p>
                  <p className="text-xs text-white/90 drop-shadow-xs">{selectedProduct.colorName}</p>
                </div>
              </div>

              {/* Thumbnails to Switch Views Quickly */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                <button
                  onClick={() => setViewMode('inUse')}
                  className={`relative rounded-xl overflow-hidden border-2 aspect-square cursor-pointer transition-all ${
                    viewMode === 'inUse' ? 'border-emerald-600 ring-2 ring-emerald-600/30' : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={selectedProduct.inUseImage} alt="In use" className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[10px] text-center py-0.5">في الصلاة</span>
                </button>
                <button
                  onClick={() => setViewMode('flat')}
                  className={`relative rounded-xl overflow-hidden border-2 aspect-square cursor-pointer transition-all ${
                    viewMode === 'flat' ? 'border-emerald-600 ring-2 ring-emerald-600/30' : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={selectedProduct.flatImage} alt="Flat" className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[10px] text-center py-0.5">التصميم</span>
                </button>
                <button
                  onClick={() => setViewMode('dimensions')}
                  className={`relative rounded-xl overflow-hidden border-2 aspect-square cursor-pointer transition-all ${
                    viewMode === 'dimensions' ? 'border-emerald-600 ring-2 ring-emerald-600/30' : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={selectedProduct.dimensionImage} alt="Dimensions" className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[10px] text-center py-0.5">المقاسات</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
