import React, { useState, useEffect } from 'react';
import { SERVICES_LIST, COMPANY_INFO } from '../data/companyData';
import { QuoteFormData } from '../types';
import { 
  Sparkles, 
  Send, 
  Calculator, 
  CheckCircle2, 
  Copy, 
  PhoneCall, 
  Ship, 
  FileCheck2, 
  MessageSquareText,
  AlertCircle
} from 'lucide-react';

interface QuoteRequestFormProps {
  prefilledServiceTitle?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const QuoteRequestForm: React.FC<QuoteRequestFormProps> = ({ 
  prefilledServiceTitle,
  isModal = false,
  onCloseModal
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: prefilledServiceTitle || SERVICES_LIST[0].title,
    origin: 'الدمام، المملكة العربية السعودية',
    destination: '',
    weightVolume: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [estimatedPriceRange, setEstimatedPriceRange] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefilledServiceTitle) {
      setFormData(prev => ({ ...prev, serviceType: prefilledServiceTitle }));
    }
  }, [prefilledServiceTitle]);

  // Rough estimation logic based on selected service
  const handleEstimate = () => {
    if (!formData.serviceType) return;
    if (formData.serviceType.includes('بحري')) {
      setEstimatedPriceRange('تقديري بحري: 800 - 2,200 دولار أمريكي (حسب الحاوية والمسار)');
    } else if (formData.serviceType.includes('جوي')) {
      setEstimatedPriceRange('تقديري جوي: 3.5 - 7.0 دولار / كجم (حسب الوزن والنوع)');
    } else if (formData.serviceType.includes('بري')) {
      setEstimatedPriceRange('تقديري بري: 1,500 - 4,500 ريال سعودي (حسب أبعاد المقطورة)');
    } else if (formData.serviceType.includes('جمركي')) {
      setEstimatedPriceRange('تقديري تخليص: رسوم ثابتة + رسوم البيان الجمركي المباشرة');
    } else {
      setEstimatedPriceRange('سيتم مراجعة الطلب وتقديم جدول كميات وعرض أسعار مخصص');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRef = 'RWK-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(newRef);
    setSubmitted(true);
  };

  const handleCopyDetails = () => {
    const text = `طلب عرض سعر - شركة رواكد الشمالية
رقم المرجع: ${referenceId}
الاسم: ${formData.name}
الشركة: ${formData.company}
الخدمة: ${formData.serviceType}
الهاتف: ${formData.phone}
البريد: ${formData.email}
التفاصيل: ${formData.details}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      `مرحباً شركة رواكد الشمالية، أود طلب عرض سعر.\nرقم المرجع: ${referenceId}\nالاسم: ${formData.name}\nالشركة: ${formData.company}\nنوع الخدمة: ${formData.serviceType}\nتفاصيل الطلب: ${formData.details}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div id="quote" className={`${isModal ? 'p-0' : 'py-16 sm:py-24 bg-white/95 backdrop-blur-md border-y border-[#C5A059]/40 shadow-xl relative overflow-hidden'} text-[#0A1D37]`}>
      {!isModal && (
        <>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0A1D37]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(#C5A059_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
        </>
      )}

      <div className={`${isModal ? '' : 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'}`}>
        
        {!isModal && (
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1D37] border border-[#C5A059]/50 text-[#C5A059] text-xs font-bold shadow-md">
              <Sparkles className="w-4 h-4 fill-current text-[#C5A059]" />
              <span className="mono">[ Quote Request ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1D37] tracking-tight">
              احصل على عرض سعر مخصص وشفاف
            </h2>
            <p className="text-slate-800 text-sm sm:text-base font-bold leading-relaxed">
              قم بتعبئة البيانات التالية وسيقوم فريق المبيعات والاستشارات بالدمام بالتواصل معك وتقديم أفضل العروض خلال ساعات.
            </p>
          </div>
        )}

        <div className="bg-white border border-[#CBD5E1] rounded-3xl p-6 sm:p-10 shadow-xl relative text-right">
          
          {submitted ? (
            <div className="space-y-6 text-center py-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-[#0A1D37] text-[#C5A059] rounded-2xl flex items-center justify-center mx-auto border border-[#C5A059]/30 shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-[#0A1D37]">تم استلام طلبك بنجاح!</h3>
                <p className="text-[#64748B] text-xs sm:text-sm font-medium">
                  شكرًا لتواصلك مع شركة رواكد الشمالية. تم إنشاء المرجع رقم:
                </p>
                <div className="inline-block bg-[#FAF9F6] border border-[#C5A059] text-[#0A1D37] font-mono font-extrabold text-xl px-6 py-2 rounded-xl dir-ltr tracking-wider my-2 shadow-inner">
                  {referenceId}
                </div>
              </div>

              <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-[#E5E2D9] text-right space-y-2 max-w-md mx-auto text-xs text-[#0A1D37]">
                <div className="flex justify-between border-b border-[#E5E2D9] pb-1.5">
                  <span className="text-[#64748B]">اسم العميل:</span>
                  <span className="font-bold">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5E2D9] pb-1.5">
                  <span className="text-[#64748B]">اسم الشركة:</span>
                  <span className="font-bold">{formData.company || 'غير محدد'}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5E2D9] pb-1.5">
                  <span className="text-[#64748B]">نوع الخدمة:</span>
                  <span className="font-bold text-[#C5A059]">{formData.serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">رقم التواصل:</span>
                  <span className="font-bold dir-ltr">{formData.phone}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition-colors flex items-center gap-2 shadow-md"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>إرسال عبر الواتساب فوراً</span>
                </button>

                <button
                  onClick={handleCopyDetails}
                  className="bg-[#0A1D37] hover:bg-[#C5A059] text-white hover:text-[#0A1D37] font-bold text-xs px-4 py-3 rounded-xl transition-all flex items-center gap-2"
                >
                  <Copy className="w-4 h-4 text-[#C5A059]" />
                  <span>{copied ? 'تم النسخ!' : 'نسخ تفاصيل الطلب'}</span>
                </button>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    if (onCloseModal) onCloseModal();
                  }}
                  className="text-[#64748B] hover:text-[#0A1D37] text-xs font-bold px-4 py-3"
                >
                  إغلاق أو تقديم طلب آخر
                </button>
              </div>

            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Title in Modal */}
              {isModal && (
                <div className="border-b border-[#E5E2D9] pb-4 mb-2 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-black text-[#0A1D37]">طلب عرض سعر مخصص</h3>
                    <p className="text-xs text-[#64748B] font-semibold">شركة رواكد الشمالية – الدمام</p>
                  </div>
                  <span className="text-xs bg-[#0A1D37] text-[#C5A059] px-3 py-1 rounded-full font-bold mono">
                    [ Rapid Quote ]
                  </span>
                </div>
              )}

              {/* Grid Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#0A1D37] block">
                    الاسم الكامل <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: محمد العمري"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-[#E5E2D9] focus:border-[#C5A059] rounded-xl px-4 py-3 text-xs text-[#0A1D37] placeholder-slate-400 focus:outline-none text-right font-medium"
                  />
                </div>

                {/* Company */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#0A1D37] block">
                    اسم الشركة / المؤسسة <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: شركة الخليج للتوريدات"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-[#E5E2D9] focus:border-[#C5A059] rounded-xl px-4 py-3 text-xs text-[#0A1D37] placeholder-slate-400 focus:outline-none text-right font-medium"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#0A1D37] block">
                    البريد الإلكتروني <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-[#E5E2D9] focus:border-[#C5A059] rounded-xl px-4 py-3 text-xs text-[#0A1D37] placeholder-slate-400 focus:outline-none text-right dir-ltr font-medium"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#0A1D37] block">
                    رقم الهاتف / الواتساب <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="00966597928787"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-[#E5E2D9] focus:border-[#C5A059] rounded-xl px-4 py-3 text-xs text-[#0A1D37] placeholder-slate-400 focus:outline-none text-right dir-ltr font-medium"
                  />
                </div>

              </div>

              {/* Service Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#0A1D37] block">
                  نوع الخدمة المطلوبة <span className="text-[#C5A059]">*</span>
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => {
                    setFormData({ ...formData, serviceType: e.target.value });
                    setEstimatedPriceRange(null);
                  }}
                  className="w-full bg-[#FAF9F6] border border-[#E5E2D9] focus:border-[#C5A059] rounded-xl px-4 py-3 text-xs text-[#0A1D37] focus:outline-none text-right font-semibold"
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.title} className="bg-white text-[#0A1D37]">
                      {srv.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Optional route / volume info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#64748B] block">
                    مكان القيام / المصدر والإرسال (اختياري)
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: ميناء الدمام أو ميناء نينغبو الصين"
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-[#E5E2D9] focus:border-[#C5A059] rounded-xl px-4 py-2.5 text-xs text-[#0A1D37] placeholder-slate-400 focus:outline-none text-right"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#64748B] block">
                    الوزن / الحجم / عدد الحاوات (اختياري)
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: حاوية 40ft أو 1500 كجم"
                    value={formData.weightVolume}
                    onChange={(e) => setFormData({ ...formData, weightVolume: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-[#E5E2D9] focus:border-[#C5A059] rounded-xl px-4 py-2.5 text-xs text-[#0A1D37] placeholder-slate-400 focus:outline-none text-right"
                  />
                </div>
              </div>

              {/* Shipment Details / Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#0A1D37] block">
                  تفاصيل الشحنة أو الطلب <span className="text-[#C5A059]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="اذكر نوع البضائع، الشروط الخاصة، تاريخ الشحن المتوقع، أو تفاصيل المشروع المطلوب..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-[#FAF9F6] border border-[#E5E2D9] focus:border-[#C5A059] rounded-xl p-4 text-xs text-[#0A1D37] placeholder-slate-400 focus:outline-none text-right resize-none font-medium"
                ></textarea>
              </div>

              {/* Rough Price Estimate Preview Helper */}
              {estimatedPriceRange && (
                <div className="bg-[#FAF9F6] border border-[#C5A059] p-3 rounded-xl flex items-center gap-2 text-xs text-[#0A1D37] font-bold">
                  <AlertCircle className="w-4 h-4 shrink-0 text-[#C5A059]" />
                  <span>{estimatedPriceRange}</span>
                </div>
              )}

              {/* Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleEstimate}
                  className="bg-[#FAF9F6] hover:bg-[#E5E2D9] text-[#0A1D37] border border-[#E5E2D9] text-xs font-bold px-4 py-3 rounded-xl transition-colors flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4 text-[#C5A059]" />
                  <span>تقدير حاسبة النطاق المبدئي</span>
                </button>

                <button
                  type="submit"
                  className="bg-[#0A1D37] hover:bg-[#C5A059] text-white hover:text-[#0A1D37] font-black text-xs px-8 py-3.5 rounded-xl transition-all shadow-lg flex items-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال طلب عرض السعر</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
