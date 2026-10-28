import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { ProductModel, PricingBundle } from '../data/products';

interface StickyMobileBarProps {
  selectedProduct: ProductModel;
  selectedBundle: PricingBundle;
  onOrderClick: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  selectedProduct,
  selectedBundle,
  onOrderClick,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const orderFormEl = document.getElementById('order-form');
      if (orderFormEl) {
        const rect = orderFormEl.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100 && rect.bottom >= 150) {
          setIsVisible(false);
          return;
        }
      }
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-emerald-100 p-3 shadow-2xl transition-transform duration-300">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Product & Price Info */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
            <img
              src={selectedProduct.flatImage}
              alt={selectedProduct.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-black text-emerald-800">
                {selectedBundle.totalPrice} <span className="text-xs font-bold">ج.م</span>
              </span>
              <span className="text-[11px] text-slate-500">
                ({selectedBundle.quantity} {selectedBundle.quantity === 1 ? 'مصلية' : 'مصليات'})
              </span>
            </div>
            <p className="text-[10px] text-emerald-700 font-semibold leading-tight">
              {selectedBundle.shippingCost === 0 ? 'شحن مجاني 🚚' : '+ 65 ج.م شحن'}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onOrderClick}
          className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-md shadow-emerald-700/25 flex items-center gap-1.5 shrink-0 cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>اطلب الآن</span>
        </button>
      </div>
    </div>
  );
};
