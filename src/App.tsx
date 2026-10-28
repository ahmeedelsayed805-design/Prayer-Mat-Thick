/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { RealVideo } from './components/RealVideo';
import { CustomerReviews } from './components/CustomerReviews';
import { Features } from './components/Features';
import { PricingOffer } from './components/PricingOffer';
import { ReturnPolicy } from './components/ReturnPolicy';
import { FAQ } from './components/FAQ';
import { OrderForm } from './components/OrderForm';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Footer } from './components/Footer';
import { PRODUCTS, ProductModel, PRICING_BUNDLES, PricingBundle } from './data/products';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductModel>(PRODUCTS[0]);
  const [selectedBundle, setSelectedBundle] = useState<PricingBundle>(PRICING_BUNDLES[0]); // Single mat by default (369 EGP)

  const scrollToOrder = () => {
    const el = document.getElementById('order-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToVideo = () => {
    const el = document.getElementById('real-video');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-slate-800 font-['Cairo',sans-serif]">
      {/* Sticky Header with Notice Bar */}
      <Header onOrderClick={scrollToOrder} />

      <main className="flex-1">
        {/* 1. Hero (الهيرو) */}
        <Hero
          selectedProduct={selectedProduct}
          onSelectProduct={setSelectedProduct}
          onOrderClick={scrollToOrder}
          onVideoClick={scrollToVideo}
        />

        {/* 2. المشكلة والحل (Problem & Solution) */}
        <ProblemSolution />

        {/* 3. فيديو حقيقي (Real Video) */}
        <RealVideo onOrderClick={scrollToOrder} />

        {/* 4. تقييمات العملاء (Customer Reviews - Real Chat Proofs only) */}
        <CustomerReviews />

        {/* 5. المميزات (Features & Specifications) */}
        <Features />

        {/* 6. العرض والسعر (Pricing & Offers - 369 EGP + 65 EGP shipping, free on 2+) */}
        <PricingOffer
          selectedBundle={selectedBundle}
          onSelectBundle={setSelectedBundle}
          onOrderClick={scrollToOrder}
        />

        {/* 7. الأسئلة الشائعة (FAQ) */}
        <FAQ />

        {/* 8. سياسة الاستبدال والاسترجاع (فوق فورم الطلب) */}
        <ReturnPolicy />

        {/* 9. نموذج الطلب (Order Form linked to +201280254014) */}
        <OrderForm
          selectedProduct={selectedProduct}
          onSelectProduct={setSelectedProduct}
          selectedBundle={selectedBundle}
          onSelectBundle={setSelectedBundle}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Order Bar */}
      <StickyMobileBar
        selectedProduct={selectedProduct}
        selectedBundle={selectedBundle}
        onOrderClick={scrollToOrder}
      />
    </div>
  );
}
