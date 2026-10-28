import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquare, ZoomIn, X, ShieldCheck } from 'lucide-react';

interface RealReviewItem {
  id: string;
  image: string;
  title: string;
  quote: string;
  sub: string;
}

export const CustomerReviews: React.FC = () => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const realReviews: RealReviewItem[] = [
    {
      id: 'review-1',
      image: '/assets/aistudio/image_ae09cfc9.png',
      title: 'محادثة واتساب حقيقية بعد استلام الأوردر',
      quote: '"اه الاوردر تحفه تسلم ايدك جميل جداا ❤️"',
      sub: 'عميل يؤكد استلام الشحنة وإعجابه التام بفخامة الخامة والتقفيل',
    },
    {
      id: 'review-2',
      image: '/assets/aistudio/image_99dc8f02.png',
      title: 'محادثة حقيقية - طلب للأهل',
      quote: '"جميل اوي تسلم يدك ❤️ عجب اختي شديد وانا كمان عجبني"',
      sub: 'عميل طلب السجادة له ولأخته ويوثق رضاهما وسعادتهما بالجودة',
    },
  ];

  return (
    <section id="reviews" className="py-14 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-bold px-4 py-1 rounded-full mb-2.5">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>آراء وتجارب حقيقية من عملائنا</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
            تقييمات عملائنا الحقيقية فور استلام الشحنات
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            محادثات موثقة من رسائل المشترين بعد معاينة واستلام السجادة
          </p>
        </div>

        {/* 2 Real Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {realReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-800 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{rev.title}</span>
                </span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              {/* Clickable Image to Zoom */}
              <div
                onClick={() => setZoomedImage(rev.image)}
                className="relative rounded-2xl overflow-hidden bg-black/60 border border-white/10 cursor-pointer shadow-inner my-2 flex items-center justify-center max-h-[360px]"
              >
                <img
                  src={rev.image}
                  alt={rev.quote}
                  className="w-full h-auto max-h-[350px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5">
                  <ZoomIn className="w-5 h-5 text-amber-300" />
                  <span>اضغط لتكبير صورة المحادثة</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <p className="text-amber-300 font-bold text-base sm:text-lg leading-snug">
                  {rev.quote}
                </p>
                <p className="text-slate-400 text-xs mt-1">
                  {rev.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Assurance Footer */}
        <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center max-w-xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm text-emerald-950 font-semibold">
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
          <span>الدفع عند الاستلام بعد أن تفتح الشحنة وتتأكد بنفسك من الجودة قبل دفع أي جنيه</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {zoomedImage && (
        <div
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-2xl w-full bg-slate-900 rounded-2xl overflow-hidden p-2 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={zoomedImage}
              alt="صورة المحادثة مكبرة"
              className="w-full h-auto rounded-xl max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
