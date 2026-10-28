export interface ProductModel {
  id: string;
  name: string;
  subtitle: string;
  flatImage: string;
  inUseImage: string;
  dimensionImage: string;
  badge: string;
  colorName: string;
  colorHex: string;
}

export interface PricingBundle {
  id: string;
  quantity: number;
  title: string;
  pricePerUnit: number;
  totalPrice: number;
  shippingCost: number;
  popular?: boolean;
  badge?: string;
  shippingText: string;
}

export const WHATSAPP_PHONE = '201280254014';
export const DISPLAY_PHONE = '+201280254014';

export const PRODUCTS: ProductModel[] = [
  {
    id: 'green-kaaba',
    name: 'الأخضر الملكي (نقشة الكعبة المشرفة)',
    subtitle: 'نقش إسلامي ذهبي بكسوة الكعبة المشرفة',
    flatImage: '/assets/aistudio/image_6984cbde.png',
    inUseImage: '/assets/aistudio/image_7c2ab4e4.png',
    dimensionImage: '/assets/aistudio/image_dba7e526.png',
    badge: 'الأكثر طلباً ⭐',
    colorName: 'أخضر زمردي مع ذهبي',
    colorHex: '#0d4a36',
  },
  {
    id: 'teal-andalusian',
    name: 'التركواز الراقي (المحراب الأندلسي)',
    subtitle: 'زخارف إسلامية هندسية بيضاء مع تركواز',
    flatImage: '/assets/aistudio/image_8910c805.png',
    inUseImage: '/assets/aistudio/image_673908e1.png',
    dimensionImage: '/assets/aistudio/image_243c406c.png',
    badge: 'تصميم أندلسي ✨',
    colorName: 'أبيض مع تركواز بحري',
    colorHex: '#0d766e',
  },
  {
    id: 'cashmere-beige',
    name: 'البيج الكشميري (نقش الزهور الهادئة)',
    subtitle: 'درجات الكشمير والبيج الدافئة المريحة للبصر',
    flatImage: '/assets/aistudio/image_3c676ddb.png',
    inUseImage: '/assets/aistudio/image_2e70afcc.png',
    dimensionImage: '/assets/aistudio/image_6be20d88.png',
    badge: 'ألوان هادئة 🌿',
    colorName: 'كشمير بيج دافئ',
    colorHex: '#b58b6f',
  },
  {
    id: 'soft-rose',
    name: 'الوردي الهادئ (المشكاة المخملية)',
    subtitle: 'لون وردي بودري ناعم محاط بزخارف إسلامية بيضاء',
    flatImage: '/assets/aistudio/image_4c330914.png',
    inUseImage: '/assets/aistudio/image_05db635a.png',
    dimensionImage: '/assets/aistudio/image_74b5952a.png',
    badge: 'هدية مميزة 🎁',
    colorName: 'وردي ناعم مع أبيض',
    colorHex: '#df899f',
  },
  {
    id: 'navy-petrol',
    name: 'الكحلي البترولي (المحراب الذهبي)',
    subtitle: 'فخامة ملكية مع إطار محراب إسلامي مذهب',
    flatImage: '/assets/aistudio/Edit_prayer_rug_image_white_2K_20261025223506_978f82d7.jpg',
    inUseImage: '/assets/aistudio/Woman_praying_on_prayer_rug_2K_20261025212442_fe21e9da.jpg',
    dimensionImage: '/assets/aistudio/Edit_prayer_rug_image_white_2K_20261025223506_978f82d7.jpg',
    badge: 'فخامة ملكية 👑',
    colorName: 'كحلي داكن مع تطريز ذهبي',
    colorHex: '#1e384b',
  },
];

export const PRICING_BUNDLES: PricingBundle[] = [
  {
    id: 'single',
    quantity: 1,
    title: 'سجادة واحدة',
    pricePerUnit: 369,
    totalPrice: 369,
    shippingCost: 65,
    shippingText: '+ 65 جنيه مصاريف شحن',
  },
  {
    id: 'double',
    quantity: 2,
    title: 'سجادتين (الأكثر طلباً)',
    pricePerUnit: 369,
    totalPrice: 738,
    shippingCost: 0,
    popular: true,
    badge: 'شحن مجاني 🚚',
    shippingText: 'شحن مجاني بالكامل',
  },
  {
    id: 'triple',
    quantity: 3,
    title: '3 سجادات (العرض العائلي)',
    pricePerUnit: 369,
    totalPrice: 1107,
    shippingCost: 0,
    badge: 'شحن مجاني 🚚',
    shippingText: 'شحن مجاني بالكامل',
  },
];

export const RETURN_POLICY_POINTS = [
  '14 يوم استبدال أو استرجاع من تاريخ استلام السجادة',
  'من غير ما تذكر أي أسباب، لو السجادة مش عجباك ارجّعها',
  'مفيش مصاريف إضافية عليك في الاستبدال أو الاسترجاع',
  'افتح السجادة وافردها وافحصها براحتك، ده مش بيعتبر استخدام',
  'الشرط: تكون غير مستخدمة (ما اتصلّى عليها) ونضيفة من غير بقع أو روائح',
  'تتسلّم في تغليفها الأصلي عشان تفضل بحالتها',
  'لو فيه عيب تصنيع (خياطة مفكوكة أو وبر بيتساقط) هنستبدلها فوراً',
  'لو وصلك مقاس أو لون غير اللي اتعلن (115×65 سم، سُمك 1.5 سم) هنعوّضك',
  'الدفع عند الاستلام، يعني تفحص المنتج الأول وبعدين تدفع',
  'للاستبدال أو الاسترجاع كلمنا على واتساب/ماسنجر وهنرد عليك في نفس اليوم',
];

export const FAQS = [
  {
    q: 'كم سعر السجادة ومصاريف الشحن؟',
    a: 'سعر المصلية الواحدة 369 جنيه + 65 جنيه مصاريف شحن. وعند طلب قطعتين أو أكثر يكون الشحن مجاني بالكامل لجميع المحافظات.',
  },
  {
    q: 'ما هي المقاسات وسُمك السجادة؟',
    a: 'المقاس: الطول 115 سم × العرض 65 سم، بسُمك 1.5 سم من الإسفنج الطبي فائق الراحة لدعم الركبتين والمفاصل.',
  },
  {
    q: 'هل يمكنني فحص ومعاينة السجادة قبل الدفع؟',
    a: 'نعم بكل تأكيد، الدفع عند الاستلام ويحق لك فتح الشحنة وفرد السجادة والتأكد من خامتها ومقاسها وسماكتها قبل دفع أي مبلغ للمندوب.',
  },
  {
    q: 'ما هي سياسة الاستبدال والاسترجاع؟',
    a: 'معك 14 يوماً كاملة للاستبدال أو الاسترجاع بدون أي مصاريف إضافية عليك وبدون اشتراط إبداء أسباب، بشرط أن تكون السجادة نظيفة وبغلافها الأصلي.',
  },
  {
    q: 'هل السجادة ثابتة على السيراميك والباركيه؟',
    a: 'نعم، الجزء السفلي مزود بقاعدة مانعة للانزلاق تحافظ على ثبات السجادة على الأرض تماماً أثناء الصلاة.',
  },
];

export const GOVERNORATES = [
  'القاهرة',
  'الجيزة',
  'الإسكندرية',
  'القليوبية',
  'الدقهلية',
  'الشرقية',
  'الغربية',
  'المنوفية',
  'البحيرة',
  'كفر الشيخ',
  'دمياط',
  'بورسعيد',
  'الإسماعيلية',
  'السويس',
  'الفيوم',
  'بني سويف',
  'المنيا',
  'أسيوط',
  'سوهاج',
  'قنا',
  'الأقصر',
  'أسوان',
  'البحر الأحمر',
  'شمال سيناء',
  'جنوب سيناء',
  'مطروح',
  'الوادي الجديد',
];
