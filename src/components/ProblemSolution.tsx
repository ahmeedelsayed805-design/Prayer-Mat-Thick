import React from 'react';
import { XCircle, CheckCircle2, HeartHandshake, ShieldAlert, Sparkles, Feather } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="problem-solution" className="py-16 bg-white relative overflow-hidden border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm font-bold px-3.5 py-1 rounded-full mb-3">
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            <span>المشكلة والحل</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug">
            هل تعاني من ألم الركبتين والمفاصل أثناء الصلاة وتفقد الخشوع؟
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            أكبر عائق يمنع الكثيرين من إطالة السجود والتلذذ بالصلاة هو الألم البدني الناتج عن قسوة الأرضيات الخرسانية والسيراميك مع السجاد الخفيف التقليدي.
          </p>
        </div>

        {/* 2-Column Comparison: Pain vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* The Problem (المعاناة مع السجاد العادي) */}
          <div className="bg-gradient-to-b from-rose-50/50 to-rose-50/20 border-2 border-rose-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-rose-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-rose-950">السجاد العادي الخفيف</h3>
                    <p className="text-xs text-rose-700">معاناة مستمرة في كل ركعة وسجدة</p>
                  </div>
                </div>
                <span className="text-rose-600 font-extrabold text-xs bg-rose-100 px-2.5 py-1 rounded-lg">
                  المشكلة ❌
                </span>
              </div>

              <ul className="mt-6 space-y-4 text-slate-700 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>صلابة الأرضيات تؤلم الركبتين:</strong> السيراميك والباركيه يضغطان بقوة على مفاصل الركبة وغضاريف القدمين دون أي حماية.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>صعوبة الجلوس للتشهد:</strong> الشعور بتنميل وألم في أسفل الظهر والكاحلين مما يدفعك للاستعجال في الصلاة.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>الانزلاق المزعج:</strong> السجاد التجاري الخفيف يتحرك وينزلق على الأرضية مع كل حركة سجود وقيام.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>تشتيت الذهن وضياع الخشوع:</strong> ينشغل عقلك بالألم الجسدي بدلاً من التدبر في الآيات والسكينة بين يدي الله.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-200/60 text-xs text-rose-800 font-semibold bg-rose-100/50 rounded-xl p-3 text-center">
              النتيجة: الصلاة بتعجل أو الاضطرار للصلاة على كرسي مبكراً!
            </div>
          </div>

          {/* The Solution (الحل الجذري مع سجادتنا الطبية) */}
          <div className="bg-gradient-to-b from-emerald-50/70 to-emerald-50/30 border-2 border-emerald-500/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg shadow-emerald-950/5 relative">
            <div className="absolute -top-3.5 left-8 bg-gradient-to-r from-emerald-700 to-teal-800 text-amber-300 text-xs font-black px-4 py-1 rounded-full shadow-md">
              الحل الجذري المريح ⭐
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-emerald-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-950">سجادة الصلاة الطبية الفاخرة</h3>
                    <p className="text-xs text-emerald-700 font-medium">راحة مضاعفة وخشوع تدوم لذته</p>
                  </div>
                </div>
                <span className="text-emerald-700 font-extrabold text-xs bg-emerald-100 px-2.5 py-1 rounded-lg">
                  الحل ✅
                </span>
              </div>

              <ul className="mt-6 space-y-4 text-slate-800 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>تبطين إسفنجي طبي سميك:</strong> طبقة إسفنجية عالية المرونة والكثافة تمتص وزن الجسم بالكامل وتعزلك تماماً عن صلابة الأرض.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>إطالة السجود والتشهد براحة:</strong> راحة فورية للركبتين والقدمين وأسفل الظهر مما يتيح لك الدعاء والتأمل دون استعجال.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>ثبات مطلق مانع للانزلاق:</strong> قاعدة سفلية مصممة خصيصاً لتلتصق بالسيراميك والباركيه والرخام دون أي تزحلق.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>ملمس مخملي فاخر وأبعاد رحبة:</strong> مقاس واسع (115 × 65 سم) وملمس ناعم جداً ولطيف على الوجه والجبين وقت السجود.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-200 text-xs sm:text-sm text-emerald-900 font-bold bg-emerald-100/70 rounded-xl p-3 text-center flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>النتيجة: صلاة هادئة مطمئنة، وخشوع حقيقي يملأ قلبك وسكينة تسري في بدنك!</span>
            </div>
          </div>
        </div>

        {/* Suitable For Callout */}
        <div className="mt-10 bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 text-center max-w-4xl mx-auto">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3 flex items-center justify-center gap-2">
            <HeartHandshake className="w-5 h-5 text-emerald-600" />
            <span>لمن هذه السجادة الطبية؟</span>
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
              👴 لكبار السن والوالدين والأجداد
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
              🩺 لمن يعانون من خشونة وآلام الركبة
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
              🌙 لمحبي قيام الليل وصلاة التراويح
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
              🎁 هدية بر وإحسان تدوم حسناتها
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
