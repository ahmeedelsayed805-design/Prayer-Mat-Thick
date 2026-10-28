import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Phone,
  User,
  MapPin,
  FileText,
  MessageCircle,
  RotateCcw,
} from 'lucide-react';
import {
  PRODUCTS,
  ProductModel,
  PRICING_BUNDLES,
  PricingBundle,
  GOVERNORATES,
  WHATSAPP_PHONE,
  DISPLAY_PHONE,
} from '../data/products';

interface OrderFormProps {
  selectedProduct: ProductModel;
  onSelectProduct: (product: ProductModel) => void;
  selectedBundle: PricingBundle;
  onSelectBundle: (bundle: PricingBundle) => void;
}

interface OrderSubmissionData {
  orderNumber: string;
  fullName: string;
  phone: string;
  altPhone: string;
  governorate: string;
  address: string;
  notes: string;
  bundle: PricingBundle;
  product: ProductModel;
  subtotal: number;
  shippingCost: number;
  total: number;
}

export const OrderForm: React.FC<OrderFormProps> = ({
  selectedProduct,
  onSelectProduct,
  selectedBundle,
  onSelectBundle,
}) => {
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [altPhone, setAltPhone] = useState<string>('');
  const [governorate, setGovernorate] = useState<string>('القاهرة');
  const [address, setAddress] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedOrder, setSubmittedOrder] = useState<OrderSubmissionData | null>(null);

  // Pricing: 369 EGP each, 65 EGP shipping for 1 piece, 0 for 2 or more
  const shippingCost = selectedBundle.quantity >= 2 ? 0 : 65;
  const totalPrice = selectedBundle.totalPrice + shippingCost;

  const validate = (): boolean => {
    const errs: { [key: string]: string } = {};

    if (!fullName.trim() || fullName.trim().length < 3) {
      errs.fullName = 'يرجى كتابة الاسم بالكامل (ثلاثي)';
    }

    const cleanPhone = phone.trim().replace(/\s+/g, '');
    if (!cleanPhone) {
      errs.phone = 'يرجى إدخال رقم الهاتف للتواصل';
    } else if (cleanPhone.length < 10) {
      errs.phone = 'يرجى كتابة رقم هاتف صحيح';
    }

    if (!address.trim() || address.trim().length < 6) {
      errs.address = 'يرجى كتابة العنوان بالتفصيل (المنطقة، الشارع، رقم العمارة)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const createWhatsAppText = (orderNo?: string): string => {
    return `السلام عليكم ورحمة الله،
أرغب في تأكيد طلب مصلية الصلاة الطبية:
${orderNo ? `• رقم الأوردر: ${orderNo}\n` : ''}• العرض: ${selectedBundle.title} (${selectedBundle.quantity} قطع)
• السعر: ${selectedBundle.totalPrice} جنيه
• مصاريف الشحن: ${shippingCost === 0 ? 'مجاناً 🚚' : '65 جنيه'}
• الإجمالي عند الاستلام: ${totalPrice} جنيه
• النقشة/اللون: ${selectedProduct.name}
• الاسم: ${fullName || '---'}
• رقم الهاتف: ${phone || '---'}${altPhone ? `\n• هاتف بديل: ${altPhone}` : ''}
• المحافظة: ${governorate}
• العنوان بالتفصيل: ${address || '---'}${notes ? `\n• ملاحظات: ${notes}` : ''}

(الدفع عند الاستلام بعد المعاينة والفحص)`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    const orderData: OrderSubmissionData = {
      orderNumber,
      fullName: fullName.trim(),
      phone: phone.trim(),
      altPhone: altPhone.trim(),
      governorate,
      address: address.trim(),
      notes: notes.trim(),
      bundle: selectedBundle,
      product: selectedProduct,
      subtotal: selectedBundle.totalPrice,
      shippingCost,
      total: totalPrice,
    };

    setSubmittedOrder(orderData);
    setIsSubmitting(false);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#047857', '#10b981', '#f59e0b', '#14b8a6'],
      });
    } catch (err) {
      // ignore
    }

    // Immediately open WhatsApp with customer's complete order to +201280254014
    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(createWhatsAppText(orderNumber))}`;
    window.location.href = waUrl;
  };

  return (
    <section id="order-form" className="py-14 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4">
        {submittedOrder ? (
          /* Success confirmation */
          <div className="bg-white border-2 border-emerald-500 rounded-3xl p-6 sm:p-8 shadow-xl text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="bg-emerald-100 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full">
                تم تسجيل طلبك بنجاح!
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                رقم الأوردر: <span className="text-emerald-700 dir-ltr">{submittedOrder.orderNumber}</span>
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                سيتم التواصل معك فوراً لتأكيد ميعاد التوصيل على رقم هاتفك.
              </p>
            </div>

            {/* Summary */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-right space-y-2 text-xs sm:text-sm max-w-lg mx-auto">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">الاسم:</span>
                <span className="font-bold text-slate-900">{submittedOrder.fullName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">الهاتف:</span>
                <span className="font-bold text-slate-900 dir-ltr">{submittedOrder.phone}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">المحافظة والعنوان:</span>
                <span className="font-bold text-slate-900">{submittedOrder.governorate} - {submittedOrder.address}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">العرض:</span>
                <span className="font-bold text-slate-900">{submittedOrder.bundle.title}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">اللون المختار:</span>
                <span className="font-bold text-slate-900">{submittedOrder.product.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">مصاريف الشحن:</span>
                <span className="font-bold text-emerald-700">
                  {submittedOrder.shippingCost === 0 ? 'مجاناً 🚚' : '65 جنيه'}
                </span>
              </div>
              <div className="flex justify-between py-1.5 text-base font-black text-emerald-900 bg-emerald-50 px-2 rounded-lg">
                <span>المبلغ المطلوب عند الاستلام:</span>
                <span>{submittedOrder.total} جنيه</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(createWhatsAppText(submittedOrder.orderNumber))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>إرسال تفاصيل الأوردر على الواتساب ({DISPLAY_PHONE})</span>
              </a>

              <button
                onClick={() => setSubmittedOrder(null)}
                className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm px-5 py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>طلب أوردر آخر</span>
              </button>
            </div>
          </div>
        ) : (
          /* Main Order Form */
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="text-center pb-2">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
                <ShoppingBag className="w-4 h-4 text-emerald-700" />
                <span>نموذج الطلب المباشر</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                اطلب الآن والدفع عند الاستلام بعد المعاينة
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                369 جنيه للقطعة + 65 جنيه شحن | والشحن مجاني للقطعتين فأكثر
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 1. بيانات التوصيل أولاً (Form inputs first) */}
              <div className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    الاسم بالكامل (ثلاثي) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: أحمد محمود إبراهيم"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 ${
                      errors.fullName ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-emerald-600 focus:ring-emerald-100'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      رقم الهاتف (واتساب) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      dir="ltr"
                      placeholder="01012345678"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 text-right ${
                        errors.phone ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-emerald-600 focus:ring-emerald-100'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      رقم هاتف بديل <span className="text-slate-400 font-normal">(اختياري)</span>
                    </label>
                    <input
                      type="tel"
                      dir="ltr"
                      placeholder="رقم آخر إن وُجد"
                      value={altPhone}
                      onChange={(e) => setAltPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-right"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">المحافظة</label>
                    <select
                      value={governorate}
                      onChange={(e) => setGovernorate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    >
                      {GOVERNORATES.map((gov) => (
                        <option key={gov} value={gov}>{gov}</option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      العنوان بالتفصيل <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="المنطقة / الشارع / رقم العمارة والشقة"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                        if (errors.address) setErrors({ ...errors, address: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 ${
                        errors.address ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-emerald-600 focus:ring-emerald-100'
                      }`}
                    />
                    {errors.address && <p className="text-xs text-rose-600 mt-1">{errors.address}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    ملاحظات أو رغبة بتشكيلة ألوان <span className="text-slate-400 font-normal">(اختياري)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: سجادة خضراء وسجادة وردي"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
              </div>

              {/* 2. اختيار اللون / النقشة المفضلة (بين آخر مربع في الفورم والسعر) */}
              <div className="pt-2 border-t border-slate-200/80">
                <label className="block text-xs font-bold text-slate-800 mb-2">
                  اختر اللون / النقشة المفضلة:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {PRODUCTS.map((prod) => {
                    const isSelected = selectedProduct.id === prod.id;
                    return (
                      <button
                        type="button"
                        key={prod.id}
                        onClick={() => onSelectProduct(prod)}
                        className={`p-2 rounded-xl border-2 text-center transition-all cursor-pointer flex flex-col items-center justify-between ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-50/80 ring-1 ring-emerald-600'
                            : 'border-slate-200 bg-slate-50/50 hover:bg-white'
                        }`}
                      >
                        <div className="w-16 h-20 rounded-lg overflow-hidden border border-slate-200 mb-1.5 bg-white">
                          <img src={prod.flatImage} alt={prod.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-900 line-clamp-1">{prod.name.split('(')[0].trim()}</span>
                        <div className="w-3.5 h-3.5 rounded-full border border-slate-300 mt-1" style={{ backgroundColor: prod.colorHex }} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. اختيار الكمية والعرض (بين آخر مربع في الفورم والسعر) */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-2">
                  اختر الكمية والعرض:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {PRICING_BUNDLES.map((b) => {
                    const isSelected = selectedBundle.id === b.id;
                    return (
                      <button
                        type="button"
                        key={b.id}
                        onClick={() => onSelectBundle(b)}
                        className={`p-3 rounded-xl border-2 text-right transition-all cursor-pointer ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-50/80 shadow-xs ring-1 ring-emerald-600'
                            : 'border-slate-200 bg-slate-50/60 hover:bg-white'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-sm text-slate-900">{b.title}</span>
                          <span className="text-xs font-black text-emerald-800">{b.totalPrice} ج.م</span>
                        </div>
                        <p className="text-[11px] text-emerald-700 font-semibold mt-1">
                          {b.shippingCost === 0 ? '🚚 شحن مجاني' : '+ 65 ج.م شحن'}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. كرت السعر المباشر (Price Calculation Card) */}
              <div className="bg-[#043324] text-white rounded-2xl p-4 sm:p-5 text-xs sm:text-sm space-y-2 shadow-sm">
                <div className="flex justify-between text-emerald-100">
                  <span>سعر السجاد ({selectedBundle.quantity} قطع):</span>
                  <span className="font-bold text-white">{selectedBundle.totalPrice} جنيه</span>
                </div>
                <div className="flex justify-between text-emerald-100">
                  <span>مصاريف الشحن:</span>
                  <span className="font-bold text-emerald-300">
                    {shippingCost === 0 ? 'مجاناً 🚚' : '65 جنيه'}
                  </span>
                </div>
                <div className="flex justify-between text-base font-black pt-2 border-t border-emerald-800/80 text-white">
                  <span>المبلغ المطلوب عند الاستلام:</span>
                  <span className="text-amber-300 text-lg font-mono">{totalPrice} جنيه</span>
                </div>
                <p className="text-[11px] text-emerald-300 text-center pt-1">
                  الدفع عند الاستلام بعد فحص ومعاينة السجادة
                </p>
              </div>

              {/* 5. زر تأكيد الطلب */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-base py-4 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  <Truck className="w-5 h-5" />
                  <span>تأكيد الطلب الآن (الدفع عند الاستلام)</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
