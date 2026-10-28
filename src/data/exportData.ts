/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as XLSX from 'xlsx';
import { PRODUCTS, PRICING_BUNDLES, RETURN_POLICY_POINTS, FAQS, DISPLAY_PHONE, WHATSAPP_PHONE } from './products';

export function getFunnelImportJson(): string {
  const data = {
    version: "2.1.0",
    funnel_type: "cod_sales_funnel",
    funnel_name: "سجادة الصلاة الطبية الفاخرة - قمع بيع مباشر COD",
    funnel_slug: "medical-prayer-rug-cod-funnel",
    currency: "EGP",
    currency_symbol: "ج.م",
    payment_method: "الدفع عند الاستلام بعد المعاينة (COD)",
    target_whatsapp: DISPLAY_PHONE,
    whatsapp_number: WHATSAPP_PHONE,
    product: {
      id: "medical-prayer-rug-orthopedic",
      title: "سجادة الصلاة الطبية الفاخرة - راحة تامة للمفاصل والركبتين",
      base_price: 369,
      compare_at_price: 550,
      cost_price: 250,
      sku: "RUG-MED-01",
      dimensions: "115 × 65 سم (سُمك 1.5 سم ميموري فوم)",
      images: PRODUCTS.map((p) => `https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app${p.flatImage}`),
      variants: PRODUCTS.map((p, idx) => ({
        id: `variant-${p.id}`,
        title: p.name,
        price: 369,
        sku: `RUG-MED-0${idx + 1}`,
        color_hex: p.colorHex,
        image: `https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app${p.flatImage}`,
      })),
      bundles: PRICING_BUNDLES,
    },
    steps: [
      {
        step_id: "step_1",
        step_name: "صفحة الهبوط ونموذج الطلب COD المباشر",
        step_type: "landing_and_checkout",
        return_policy: RETURN_POLICY_POINTS,
        order_form_sequence: [
          "full_name",
          "phone",
          "secondary_phone",
          "governorate",
          "address",
          "notes",
          "color_selection",
          "bundle_selection",
          "price_summary",
          "submit_button"
        ]
      },
      {
        step_id: "step_2",
        step_name: "صفحة شكراً لك وتأكيد الطلب",
        step_type: "thank_you",
        whatsapp_confirmation_url: `https://wa.me/${WHATSAPP_PHONE}`,
      }
    ]
  };
  return JSON.stringify(data, null, 2);
}

export function getProductsImportJson(): string {
  const data = [
    {
      id: 'medical-prayer-rug-orthopedic',
      name: 'سجادة الصلاة الطبية الفاخرة - راحة تامة للمفاصل والركبتين',
      title: 'سجادة الصلاة الطبية الفاخرة - راحة تامة للمفاصل والركبتين',
      handle: 'medical-prayer-rug',
      slug: 'medical-prayer-rug',
      product_type: 'سجاد صلاة طبي',
      category: 'سجاد صلاة طبي',
      categories: [
        'سجاد صلاة طبي',
        'صحة وعناية كبار السن',
      ],
      vendor: 'متجر سجاد الصلاة الطبي',
      price: 369,
      compare_at_price: 550,
      cost_price: 250,
      currency: 'EGP',
      sku: 'RUG-MED-01',
      barcode: '6221234567891',
      quantity: 500,
      stock: 500,
      inventory_quantity: 500,
      available: true,
      status: 'active',
      published: true,
      image: `https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app${PRODUCTS[0].flatImage}`,
      thumbnail: `https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app${PRODUCTS[0].flatImage}`,
      images: [
        `https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app${PRODUCTS[0].flatImage}`,
        `https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app${PRODUCTS[1].flatImage}`,
        `https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app${PRODUCTS[2].flatImage}`,
        `https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app${PRODUCTS[3].flatImage}`,
        `https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app${PRODUCTS[4].flatImage}`,
        'https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app/assets/aistudio/image_7c2ab4e4.png',
        'https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app/assets/aistudio/image_dba7e526.png',
      ],
      description: '<p>سجادة صلاة طبية فاخرة مبطنة بطبقة إسفنج طبي عالي الكثافة (سُمك 1.5 سم) يمتص وزن الجسم بالكامل ويخفف الضغط عن الركبتين والمفاصل وأسفل الظهر بنسبة 100%.</p><ul><li>سُمك طبي 1.5 سم ميموري فوم مضاد للهبوط</li><li>مقاس واسع ومريح: 115 سم × 65 سم</li><li>قاعدة سفلية مانعة للانزلاق على السيراميك والباركيه</li><li>خامة مخملية تركية باردة وناعمة الملمس مع تطريز إسلامي مذهب</li><li>شريط أبيض مقوى على الحواف لضمان أطول عمر افتراضي</li><li>سعر المصلية 369 جنيه + 65 جنيه مصاريف شحن (وشحن مجاني عند طلب قطعتين أو أكثر)</li><li>ضمان 14 يوم استبدال واسترجاع مجاني بالكامل والدفع عند الاستلام بعد المعاينة والفحص</li></ul>',
      short_description: 'سجادة صلاة طبية مبطنة بإسفنج ميموري فوم بسُمك 1.5 سم تخفف آلام المفاصل والركبتين، مقاس 115×65 سم، قاعدة مانعة للانزلاق والدفع عند الاستلام بعد المعاينة.',
      options: PRODUCTS.map((p) => p.name),
      variants: PRODUCTS.map((p, idx) => ({
        id: `variant-${p.id}`,
        title: p.name,
        name: p.name,
        option1: p.name,
        price: 369,
        compare_at_price: 550,
        cost_price: 250,
        sku: `RUG-MED-0${idx + 1}`,
        barcode: `622123456789${idx + 1}`,
        quantity: 100,
        inventory_quantity: 100,
        image: `https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app${p.flatImage}`,
        image_src: `https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app${p.flatImage}`,
      })),
      tags: [
        'سجادة صلاة طبية',
        'ميموري فوم',
        'علاج آلام المفاصل والركبتين',
        'الدفع عند الاستلام',
        'كبار السن',
      ],
    },
  ];

  return JSON.stringify(data, null, 2);
}

// دالة توليد ملف Excel (XLSX) متكامل ومتعدد الصفحات
export function generateProductsExcelBlob(): Blob {
  const wb = XLSX.utils.book_new();

  // 1. ورقة العمل الرئيسية: استيراد المنتجات القياسي (متوافق مع Shopify, YouCan, EasyOrders, Salla, WooCommerce)
  const storeImportRows = PRODUCTS.map((p, idx) => ({
    'Handle': 'medical-prayer-rug',
    'Title': 'سجادة الصلاة الطبية الفاخرة - راحة تامة للمفاصل والركبتين',
    'Body (HTML)': 'سجادة صلاة طبية فاخرة مبطنة بسُمك 1.5 سم ميموري فوم بمقاس 115×65 سم مع قاعدة مانعة للانزلاق وخامة مخملية تركية ناعمة باردة.',
    'Vendor': 'متجر سجاد الصلاة الطبي',
    'Type': 'سجاد صلاة طبي',
    'Tags': 'سجادة صلاة طبية, ميموري فوم, علاج آلام المفاصل, الدفع عند الاستلام, كبار السن',
    'Published': 'TRUE',
    'Option1 Name': 'اللون والنقشة',
    'Option1 Value': p.name,
    'Variant SKU': `RUG-MED-0${idx + 1}`,
    'Variant Grams': 1200,
    'Variant Inventory Tracker': 'shopify',
    'Variant Inventory Qty': 100,
    'Variant Inventory Policy': 'deny',
    'Variant Fulfillment Service': 'manual',
    'Variant Price': 369,
    'Variant Compare At Price': 550,
    'Variant Cost Price': 250,
    'Variant Requires Shipping': 'TRUE',
    'Variant Taxable': 'FALSE',
    'Variant Barcode': `622123456789${idx + 1}`,
    'Image Src': `https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app${p.flatImage}`,
    'Image Position': idx + 1,
    'Image Alt Text': p.name,
    'Gift Card': 'FALSE',
    'SEO Title': 'سجادة الصلاة الطبية الفاخرة - ميموري فوم أصلي',
    'SEO Description': 'سجادة صلاة طبية بسُمك 1.5 سم لحماية الركبتين والمفاصل بسعر 369 ج.م والدفع عند الاستلام',
    'Variant Image': `https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app${p.flatImage}`,
    'Variant Weight Unit': 'kg',
    'Status': 'active',
  }));

  const wsImport = XLSX.utils.json_to_sheet(storeImportRows);
  XLSX.utils.book_append_sheet(wb, wsImport, 'استيراد المتاجر (Store Import)');

  // 2. ورقة العمل الثانية: جدول بيانات المنتج باللغة العربية (سعر، مقاسات، ألوان، تفاصيل)
  const arabicProductRows = PRODUCTS.map((p, idx) => ({
    'رقم الصنف': idx + 1,
    'اسم المنتج': 'سجادة الصلاة الطبية الفاخرة',
    'اللون والنقشة': p.name,
    'كود اللون': p.colorHex,
    'السعر للقطعة (ج.م)': 369,
    'سعر المقارنة قبل الخصم': 550,
    'تكلفة المنتج': 250,
    'الربح للقطعة': 119,
    'المخزون المتوفر': 100,
    'كود الصنف SKU': `RUG-MED-0${idx + 1}`,
    'الباركود': `622123456789${idx + 1}`,
    'الطول (سم)': 115,
    'العرض (سم)': 65,
    'السُمك (سم)': 1.5,
    'نوع التبطين': 'إسفنج طبي عالي الكثافة (ميموري فوم)',
    'رابط صورة السجادة': `https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app${p.flatImage}`,
    'رابط صورة الاستخدام': 'https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app/assets/aistudio/image_7c2ab4e4.png',
  }));

  const wsArabic = XLSX.utils.json_to_sheet(arabicProductRows);
  XLSX.utils.book_append_sheet(wb, wsArabic, 'المنتجات والألوان (عربي)');

  // 3. ورقة العمل الثالثة: باقات العروض والشحن
  const bundleRows = PRICING_BUNDLES.map((b) => ({
    'كود الباقة': b.id,
    'اسم العرض': b.title,
    'الكمية (قطع)': b.quantity,
    'سعر القطعة (ج.م)': b.pricePerUnit,
    'إجمالي سعر السجاد (ج.م)': b.totalPrice,
    'مصاريف الشحن (ج.م)': b.shippingCost,
    'المبلغ الإجمالي عند الاستلام (ج.م)': b.totalPrice + b.shippingCost,
    'ميزة العرض': b.badge || b.shippingText,
    'رقم واتساب الطلبات': DISPLAY_PHONE,
  }));

  const wsBundles = XLSX.utils.json_to_sheet(bundleRows);
  XLSX.utils.book_append_sheet(wb, wsBundles, 'باقات العروض والأسعار');

  // 4. ورقة العمل الرابعة: سياسة الاستبدال والاسترجاع والأسئلة الشائعة
  const policyRows = RETURN_POLICY_POINTS.map((point, index) => ({
    'رقم البند': index + 1,
    'بند سياسة الاستبدال والاسترجاع (14 يوم)': point,
  }));

  const wsPolicy = XLSX.utils.json_to_sheet(policyRows);
  XLSX.utils.book_append_sheet(wb, wsPolicy, 'سياسة الاسترجاع');

  // إنشاء مصفوفة بايتات لملف Excel ثنائي
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  return new Blob([wbout], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
}

// دالة توليد ملف CSV مع UTF-8 BOM لفتحه مباشرة في Excel العربي
export function generateProductsCsv(): string {
  const headers = [
    'Handle',
    'Title',
    'Body (HTML)',
    'Vendor',
    'Type',
    'Tags',
    'Published',
    'Option1 Name',
    'Option1 Value',
    'Variant SKU',
    'Variant Price',
    'Variant Compare At Price',
    'Variant Inventory Qty',
    'Variant Barcode',
    'Image Src',
    'Status',
  ];

  const rows = PRODUCTS.map((p, idx) => {
    return [
      'medical-prayer-rug',
      '"سجادة الصلاة الطبية الفاخرة - راحة تامة للمفاصل والركبتين"',
      '"سجادة صلاة طبية فاخرة مبطنة بسُمك 1.5 سم ميموري فوم بمقاس 115×65 سم قاعدة مانعة للانزلاق."',
      '"متجر سجاد الصلاة الطبي"',
      '"سجاد صلاة طبي"',
      '"سجادة صلاة طبية, ميموري فوم, علاج آلام المفاصل, الدفع عند الاستلام"',
      'TRUE',
      '"اللون والنقشة"',
      `"${p.name}"`,
      `"RUG-MED-0${idx + 1}"`,
      '369',
      '550',
      '100',
      `"622123456789${idx + 1}"`,
      `"https://ais-pre-ts5axkesjombi5mkolod5c-185137071279.europe-west3.run.app${p.flatImage}"`,
      'active',
    ].join(',');
  });

  // \uFEFF هو الـ Byte Order Mark الضروري لعرض الحروف العربية بشكل صحيح في Excel
  return '\uFEFF' + [headers.join(','), ...rows].join('\n');
}
