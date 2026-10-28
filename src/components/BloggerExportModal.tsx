/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Copy, Check, Download, ExternalLink, X, FileCode, Database, Zap, Eye, EyeOff, Layers, CheckCircle2 } from 'lucide-react';
import { getFunnelImportJson, getProductsImportJson } from '../data/exportData';

interface BloggerExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BloggerExportModal({ isOpen, onClose }: BloggerExportModalProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showFunnelPreview, setShowFunnelPreview] = useState(false);

  if (!isOpen) return null;

  // تنزيل آمن عبر Blob محلي
  const downloadBlobSafely = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };

  // 1. تنزيل ملف Funnel Import JSON
  const handleDownloadFunnelJson = () => {
    const jsonStr = getFunnelImportJson();
    const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
    downloadBlobSafely(blob, 'funnel-import.json');
  };

  // 2. تنزيل JSON استيراد المنتجات
  const handleDownloadProductsJson = () => {
    const jsonStr = getProductsImportJson();
    const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
    downloadBlobSafely(blob, 'products-import.json');
  };

  // 3. قوالب بلوجر
  const handleDownloadOther = async (type: 'xml' | 'html') => {
    try {
      setLoading(true);
      const url = type === 'xml' ? '/blogger-template.xml' : '/blogger-landing-page.html';
      const filename = type === 'xml' ? 'blogger-theme-prayer-rug.xml' : 'blogger-landing-page.html';
      const mime = type === 'xml' ? 'application/xml' : 'text/html';
      const res = await fetch(url);
      const text = await res.text();
      const blob = new Blob([text], { type: `${mime};charset=utf-8` });
      downloadBlobSafely(blob, filename);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyCode = async (type: 'funnel-json' | 'products-json') => {
    try {
      setLoading(true);
      let content = '';
      if (type === 'funnel-json') {
        content = getFunnelImportJson();
      } else if (type === 'products-json') {
        content = getProductsImportJson();
      }

      await navigator.clipboard.writeText(content);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 3000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    } finally {
      setLoading(false);
    }
  };

  const funnelPreviewSnippet = getFunnelImportJson().slice(0, 490) + '\n  ...\n}';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[92vh] overflow-y-auto"
        dir="rtl"
      >
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 sm:top-5 sm:left-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors cursor-pointer"
          title="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* الهيدر */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
            <Zap className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900">ملف استيراد الفانل (Import Funnel)</h3>
            <p className="text-xs text-slate-600">جاهز للاستيراد المباشر في منصات Funnel Builders ومتاجر الـ COD</p>
          </div>
        </div>

        {/* 1. قسم Import Funnel الرئيسي */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-600 rounded-2xl p-4 sm:p-5 mb-4 space-y-3 shadow-xs">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="bg-emerald-700 text-white text-xs font-black px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>ملف قمع البيع المكتمل (Funnel Import JSON)</span>
            </span>
            <span className="text-xs text-emerald-950 font-bold font-mono bg-emerald-200/60 px-2 py-0.5 rounded">
              funnel-import.json
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            ملف متكامل مهيأ خصيصاً لخيار <strong>&quot;Import Funnel&quot;</strong> في منصات قنوات ومسارات البيع (Lightfunnels, Dropify, EasyOrders, YouCan, FunnelKit, CartFlows):
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-700 font-semibold bg-white/70 p-3 rounded-xl border border-emerald-200/70">
            <div className="flex items-center gap-1 text-emerald-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>صفحة 1-Page COD</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>5 ألوان بصورها</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>باقات 369 ج.م وشحن مجاني</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>واتساب +201280254014</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <button
              onClick={handleDownloadFunnelJson}
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all cursor-pointer text-sm"
            >
              <Download className="w-4 h-4" />
              <span>تحميل funnel-import.json 📥</span>
            </button>

            <button
              onClick={() => handleCopyCode('funnel-json')}
              disabled={loading}
              className={`flex items-center justify-center gap-2 border font-bold py-3 px-4 rounded-xl transition-all cursor-pointer text-sm ${
                copiedType === 'funnel-json'
                  ? 'bg-emerald-700 text-white border-emerald-700'
                  : 'bg-white hover:bg-emerald-100/50 text-emerald-900 border-emerald-300'
              }`}
            >
              {copiedType === 'funnel-json' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-200" />
                  <span>تم نسخ كود الفانل بنجاح! ✓</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>نسخ كود الفانل مباشرة</span>
                </>
              )}
            </button>
          </div>

          {/* زر معاينة كود الفانل */}
          <div className="pt-2 border-t border-emerald-200/60">
            <button
              onClick={() => setShowFunnelPreview(!showFunnelPreview)}
              className="flex items-center gap-1.5 text-xs text-emerald-900 font-bold hover:underline cursor-pointer"
            >
              {showFunnelPreview ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showFunnelPreview ? 'إخفاء معاينة كود الفانل' : 'معاينة هيكل الـ JSON الخاص بالفانل'}</span>
            </button>

            {showFunnelPreview && (
              <div className="mt-2 p-3 bg-slate-900 text-emerald-400 font-mono text-[11px] rounded-xl overflow-x-auto max-h-40 leading-relaxed dir-ltr text-left">
                <pre>{funnelPreviewSnippet}</pre>
              </div>
            )}
          </div>
        </div>

        {/* 2. خيار بديل: استيراد المنتجات القياسي للمتجر */}
        <div className="border border-slate-200 rounded-2xl p-3.5 mb-4 bg-slate-50 space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-bold text-xs sm:text-sm text-slate-800 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-slate-600" />
              <span>ملف استيراد المنتجات القياسي (لقسم المنتجات بالمتجر)</span>
            </span>
            <span className="text-[11px] text-slate-500 font-mono">products-import.json</span>
          </div>
          <p className="text-xs text-slate-600">
            مخصص إذا أردت إضافة المنتج فقط داخل كتالوج المتجر (سعر 369 ج.م، الـ 5 ألوان، روابط الصور المباشرة، والمخزون).
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <button
              onClick={handleDownloadProductsJson}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold py-2 px-3.5 rounded-xl cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>تحميل products-import.json</span>
            </button>
            <button
              onClick={() => handleCopyCode('products-json')}
              className="flex items-center gap-1.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-semibold py-2 px-3 rounded-xl cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedType === 'products-json' ? 'تم النسخ ✓' : 'نسخ الكود'}</span>
            </button>
          </div>
        </div>

        {/* 3. قوالب بلوجر (XML و HTML) */}
        <div className="border border-slate-200 rounded-2xl p-3.5 mb-4 bg-slate-50 space-y-2">
          <h4 className="font-bold text-xs text-slate-700 flex items-center gap-1.5">
            <FileCode className="w-4 h-4 text-amber-600" />
            <span>قوالب بلوجر وصفحة HTML:</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => handleDownloadOther('xml')}
              className="flex items-center justify-between p-2.5 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 font-semibold text-slate-700 cursor-pointer"
            >
              <span>قالب بلوجر (XML)</span>
              <Download className="w-3.5 h-3.5 text-slate-500" />
            </button>

            <button
              onClick={() => handleDownloadOther('html')}
              className="flex items-center justify-between p-2.5 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 font-semibold text-slate-700 cursor-pointer"
            >
              <span>صفحة مستقلة (HTML)</span>
              <Download className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </div>
        </div>

        {/* روابط سريعة */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 border-t border-slate-100">
          <a
            href="/funnel-import.json"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1"
          >
            <span>معاينة funnel-import.json في تبويب جديد</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <span className="text-[11px] text-slate-400">متوافق مع مسارات الشراء المباشر COD</span>
        </div>
      </div>
    </div>
  );
}
