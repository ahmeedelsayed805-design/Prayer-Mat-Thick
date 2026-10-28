import React, { useState } from 'react';
import { Ruler, ShieldCheck, Sparkles, Feather, Layers, Check, X, Maximize2, Wind, HeartPulse } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export const Features: React.FC = () => {
  const [selectedDimensionColor, setSelectedDimensionColor] = useState<number>(0);

  const featuresList = [
    {
      icon: HeartPulse,
      title: 'بطانة طبية عالية الكثافة',
      desc: 'إسفنج مرن بسماكة مدروسة يمتص وزن الجسم ويزيل ضغط الأرض الصلبة عن مفاصل الركبتين ومشط القدم وأسفل الظهر.',
    },
    {
      icon: Ruler,
      title: 'مقاس رحب وواسع (115 × 65 سم)',
      desc: 'أبعاد مثالية مريحة تتيح لك أداء حركات الصلاة من قيام وركوع وسجود وجلوس بحرية تامة دون أي تضييق.',
    },
    {
      icon: ShieldCheck,
      title: 'قاعدة محكمة مانعة للانزلاق',
      desc: 'طبقة سفلية متطورة تثبت السجادة على السيراميك والبورسلين والرخام والباركيه وتمنع أي تزحلق أثناء الصلاة.',
    },
    {
      icon: Feather,
      title: 'قماش مخملي ناعم جداً ولطيف',
      desc: 'ملمس ناعم كالحرير لا يسبب أي تحسس للجبين أو الوجه أثناء السجود، مع ثبات الألوان ومقاومة الغسيل.',
    },
    {
      icon: Layers,
      title: 'خياطة شريط أبيض مزدوجة',
      desc: 'إطار مقوى بخيوط حريرية تحمي الإسفنج الداخلي من التلف وتعطي مظهراً كلاسيكياً راقياً مع شراشيب بيضاء ناصعة.',
    },
    {
      icon: Wind,
      title: 'عزل تام لبرودة الأرض وسهولة الطي',
      desc: 'تعزلك في الشتاء عن برودة البلاط، وسهلة الطي وخفيفة الوزن لتأخذها معك للمسجد أو أثناء السفر والعمرة.',
    },
  ];

  return (
    <section id="features" className="py-16 bg-[#FAF9F5] relative overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-bold px-4 py-1 rounded-full mb-3">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>المواصفات القياسية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug">
            مميزات تجعلها سجادة الصلاة المثالية لكل منزل
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            تم الجمع بين الراحة الطبية الفائقة وجمال الزخارف الإسلامية لتمنحك أفضل تجربة صلاة ممكنة.
          </p>
        </div>

        {/* 6 Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuresList.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-start group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Dimensions & Structure Visual Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-lg mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Dimension Image with selector */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative max-w-sm w-full bg-slate-50 rounded-2xl p-4 border border-slate-200 shadow-inner flex items-center justify-center">
                <img
                  src={PRODUCTS[selectedDimensionColor].dimensionImage}
                  alt={`مقاسات ${PRODUCTS[selectedDimensionColor].name}`}
                  className="w-full h-auto max-h-[460px] object-contain rounded-xl"
                />
              </div>

              {/* Color thumbnails for dimension view */}
              <div className="flex items-center gap-2 mt-4">
                <span className="text-xs font-bold text-slate-600">اختر اللون للمعاينة:</span>
                {PRODUCTS.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedDimensionColor(idx)}
                    className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer ${
                      selectedDimensionColor === idx ? 'scale-125 ring-2 ring-emerald-500 shadow-sm' : 'border-white opacity-70'
                    }`}
                    style={{ backgroundColor: p.colorHex }}
                    title={p.name}
                  />
                ))}
              </div>
            </div>

            {/* Dimension Specs Breakdown */}
            <div className="lg:col-span-6 space-y-6 text-right">
              <div>
                <span className="text-emerald-700 font-bold text-xs bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  الأبعاد والمقاييس الدقيقة
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                  مقاس صُمم خصيصاً ليناسب جميع الأطوال والأعمار
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mt-2">
                  السجاد العادي الصغير يُشعرك بالضيق، بينما سجادتنا تأتيك بأبعاد سخية ومريحة تضمن اتساع الركبتين واليدين والجبين أثناء السجود دون أن تلامس الأرض الصلبة خارج السجادة.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3 text-center">
                  <div className="text-xl sm:text-2xl font-black text-emerald-900">115 سم</div>
                  <p className="text-[11px] font-bold text-emerald-800 mt-0.5">الطول</p>
                </div>
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3 text-center">
                  <div className="text-xl sm:text-2xl font-black text-emerald-900">65 سم</div>
                  <p className="text-[11px] font-bold text-emerald-800 mt-0.5">العرض</p>
                </div>
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3 text-center">
                  <div className="text-xl sm:text-2xl font-black text-emerald-900">1.5 سم</div>
                  <p className="text-[11px] font-bold text-emerald-800 mt-0.5">السُمك الطبي</p>
                </div>
              </div>

              {/* Anatomy layers */}
              <div className="space-y-2.5 pt-2">
                <h4 className="font-bold text-sm text-slate-900">تشريح طبقات السجادة الطبية:</h4>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span><strong>الطبقة العليا:</strong> قطيفة مخملية ناعمة منسوجة بنقوش إسلامية ثابتة ومريحة.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span><strong>الطبقة الوسطى:</strong> إسفنج طبي مرن فائق الكثافة يخفف ضغط وزن الجسم عن الركبتين.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span><strong>الطبقة السفلية:</strong> بطانة مانعة للانزلاق تحمي من رطوبة وبرودة الأرض.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              مقارنة بين سجادتنا الطبية الفاخرة والسجاد العادي
            </h3>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-right text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-3 sm:p-4 font-bold text-slate-700">وجه المقارنة</th>
                  <th className="p-3 sm:p-4 font-black text-emerald-800 bg-emerald-50/70 border-x border-emerald-100 text-center">
                    سجادتنا الطبية الفاخرة
                  </th>
                  <th className="p-3 sm:p-4 font-bold text-slate-500 text-center">السجاد العادي الخفيف</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3 sm:p-4 font-semibold">حماية الركبتين والمفاصل</td>
                  <td className="p-3 sm:p-4 bg-emerald-50/40 border-x border-emerald-100 text-center font-bold text-emerald-700">
                    <span className="inline-flex items-center gap-1">
                      <Check className="w-4 h-4 text-emerald-600" /> إسفنج طبي سميك وممتص للصدمات
                    </span>
                  </td>
                  <td className="p-3 sm:p-4 text-center text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <X className="w-4 h-4 text-rose-500" /> قماش خفيف ينقل صلابة الأرض فوراً
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold">الثبات على السيراميك والباركيه</td>
                  <td className="p-3 sm:p-4 bg-emerald-50/40 border-x border-emerald-100 text-center font-bold text-emerald-700">
                    <span className="inline-flex items-center gap-1">
                      <Check className="w-4 h-4 text-emerald-600" /> قاعدة مانعة للانزلاق بنسبة 100%
                    </span>
                  </td>
                  <td className="p-3 sm:p-4 text-center text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <X className="w-4 h-4 text-rose-500" /> تنزلق وتتحرك باستمرار
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold">المقاس والراحة</td>
                  <td className="p-3 sm:p-4 bg-emerald-50/40 border-x border-emerald-100 text-center font-bold text-emerald-700">
                    <span className="inline-flex items-center gap-1">
                      <Check className="w-4 h-4 text-emerald-600" /> 115 × 65 سم مساحة واسعة
                    </span>
                  </td>
                  <td className="p-3 sm:p-4 text-center text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <X className="w-4 h-4 text-rose-500" /> مقاسات ضيقة وغير كافية
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold">جودة التقفيل والخياطة</td>
                  <td className="p-3 sm:p-4 bg-emerald-50/40 border-x border-emerald-100 text-center font-bold text-emerald-700">
                    <span className="inline-flex items-center gap-1">
                      <Check className="w-4 h-4 text-emerald-600" /> شريط إطار أبيض مزدوج فائق المتانة
                    </span>
                  </td>
                  <td className="p-3 sm:p-4 text-center text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <X className="w-4 h-4 text-rose-500" /> حواف ضعيفة تتلف وتنسل بسرعة
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold">المعاينة قبل الدفع والضمان</td>
                  <td className="p-3 sm:p-4 bg-emerald-50/40 border-x border-emerald-100 text-center font-bold text-emerald-700">
                    <span className="inline-flex items-center gap-1">
                      <Check className="w-4 h-4 text-emerald-600" /> مسموح فحص المنتج مع المندوب + ضمان 14 يوم
                    </span>
                  </td>
                  <td className="p-3 sm:p-4 text-center text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <X className="w-4 h-4 text-rose-500" /> بدون أي ضمانات حقيقية
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
