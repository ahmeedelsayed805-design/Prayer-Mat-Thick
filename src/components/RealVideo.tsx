import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, ShieldCheck, CheckCircle, Sparkles, Layers } from 'lucide-react';

interface RealVideoProps {
  onOrderClick: () => void;
}

export const RealVideo: React.FC<RealVideoProps> = ({ onOrderClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section id="real-video" className="py-16 bg-gradient-to-b from-[#FAF9F5] via-slate-50 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-bold px-4 py-1 rounded-full mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>تصوير حقيقي 100% بدون أي مؤثرات</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug">
            شاهد بالفيديو الحقيقي سماكة التبطين وجودة الخياطة الفاخرة
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            نحن نؤمن بالشفافية الكاملة.. إليك تصويراً مباشراً للمصلية من أرض الواقع لتشاهد بنفسك كثافة الإسفنج وجودة التقفيل قبل أن تطلبها.
          </p>
        </div>

        {/* Video & Features Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Video Player Column */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group aspect-[9/16] max-h-[580px]">
              <video
                ref={videoRef}
                src="/assets/aistudio/WhatsApp_Video_2026-10-04_at_8.15.33_PM_7ded4565.mp4"
                playsInline
                loop
                muted={isMuted}
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlay}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Big Center Play Overlay Button */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-black/30"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform pulse-glow">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <span className="mt-3 text-white font-bold text-sm bg-black/60 px-3 py-1 rounded-full border border-white/20">
                    اضغط لتشغيل الفيديو 🎥
                  </span>
                </div>
              )}

              {/* Bottom Quick Controls Bar */}
              <div className="absolute bottom-3 inset-x-3 bg-black/60 backdrop-blur-md rounded-xl py-2 px-3 flex items-center justify-between text-white text-xs">
                <button
                  onClick={togglePlay}
                  className="flex items-center gap-1.5 font-bold hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{isPlaying ? 'إيقاف مؤقت' : 'تشغيل'}</span>
                </button>

                <button
                  onClick={toggleMute}
                  className="p-1 rounded-lg hover:bg-white/20 transition-colors cursor-pointer text-white"
                  title={isMuted ? 'تشغيل الصوت' : 'كتم الصوت'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-amber-300" /> : <Volume2 className="w-4 h-4 text-emerald-300" />}
                </button>
              </div>

              {/* Floating Live Badge */}
              <div className="absolute top-3 right-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>فيديو حقيقي مباشر</span>
              </div>
            </div>
          </div>

          {/* Video Highlights & Proof Column */}
          <div className="lg:col-span-6 space-y-5 text-right">
            <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-emerald-950 flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-700" />
                <span>ماذا تلاحظ في هذا الفيديو الحقيقي؟</span>
              </h3>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-slate-900">سماكة الإسفنج الطبي فائق الكثافة</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      الإسفنج محشو بعناية بسماكة تحمي الركبتين تماماً، ويستعيد شكله فور رفع الضغط عنه دون هبوط.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-slate-900">شريط الحياكة المزدوج المقوى</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      إطار أبيض عريض محاك بخيوط حريرية متينة تمنع انفصال الإسفنج أو تلف الأطراف حتى مع الاستخدام اليومي لسنوات.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-slate-900">البطانة السفلية العازلة المانعة للانزلاق</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      طبقة سوداء سفلية مصممة خصيصاً لتمنع امتصاص الرطوبة والبرودة من البلاط وتثبت السجادة على الأرض تماماً.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
              <button
                onClick={onOrderClick}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>احصل عليها الآن بنفس هذه الجودة تماماً</span>
                <ShieldCheck className="w-5 h-5 text-amber-300" />
              </button>
              <p className="text-center text-xs text-slate-500 mt-2">
                🔒 الدفع عند الاستلام بعد أن تفتح الشحنة وتتأكد من نفس السماكة والخامة بنفسك
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
