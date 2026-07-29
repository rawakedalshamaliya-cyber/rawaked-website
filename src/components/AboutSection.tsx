import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Target, 
  Compass, 
  ShieldCheck, 
  Award, 
  Users, 
  Phone, 
  Mail,
  ArrowLeft
} from 'lucide-react';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal, onNavigate }) => {
  return (
    <section id="about" className="mt-[130px] py-16 sm:py-24 bg-white/95 backdrop-blur-md text-[#0A1D37] relative overflow-hidden border-y border-[#C5A059]/40 shadow-xl">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0A1D37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(#C5A059_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1D37] border border-[#C5A059]/50 text-[#C5A059] text-xs font-bold shadow-md">
            <Building2 className="w-4 h-4 text-[#C5A059]" />
            <span className="mono">[ About Us ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1D37] tracking-tight leading-[52px]">
            شريككم الموثوق في الخدمات اللوجستية والمقاولات والتجارة
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-bold leading-relaxed">
            شركة ذات مسؤولية محدودة مقرها الدمام بالمملكة العربية السعودية، تقدم منظومة خدمات متكاملة تهدف لتيسير نمو أعمالكم وتأمين سلاسل إمدادكم.
          </p>
        </div>

        {/* Main Grid: About Card & Core Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Visual/Image Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-[#C5A059]/40 shadow-xl group bg-white">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" 
                alt="شركة رواكد الشمالية بالدمام" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D37] via-[#0A1D37]/20 to-transparent"></div>
              
              <div className="absolute bottom-4 right-4 left-4 bg-[#0A1D37]/95 backdrop-blur-md p-4 rounded-2xl border border-[#C5A059]/50 text-right space-y-1">
                <div className="text-xs font-bold text-[#C5A059] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  الدمام – المملكة العربية السعودية
                </div>
                <div className="text-xs font-bold text-slate-100">
                  شركة ذات مسؤولية محدودة – سجل تجاري رسمي
                </div>
              </div>
            </div>

            {/* Quick Contact Badge */}
            <div className="bg-white border border-[#C5A059]/30 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs shadow-md">
              <div className="space-y-0.5">
                <span className="text-slate-800 font-extrabold block">المقر الرئيسي الدمام:</span>
                <span className="text-[#C5A059] font-black text-sm dir-ltr block">{COMPANY_INFO.formattedPhone}</span>
              </div>
              <button
                id="about-quote-fast"
                onClick={onOpenQuoteModal}
                className="bg-[#0A1D37] hover:bg-[#C5A059] text-white hover:text-[#0A1D37] font-extrabold px-4 py-2.5 rounded-xl transition-all text-xs shadow-md"
              >
                طلب عرض سعر
              </button>
            </div>
          </div>

          {/* Details Content */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <div className="space-y-3">
              <h3 className="text-2xl font-black text-[#0A1D37]">
                عن <span className="text-[#C5A059]">شركة رواكد الشمالية</span> ذات مسؤولية محدودة
              </h3>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-bold">
                {COMPANY_INFO.aboutBrief}
              </p>
              <p className="text-slate-700 text-sm leading-relaxed font-semibold">
                {COMPANY_INFO.aboutFull}
              </p>
            </div>

            {/* Key Service Offerings Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'الشحن البحري والجوي والنقل البري',
                'التخليص الجمركي والإجراءات الحكومية',
                'المناولة والتخزين وخدمات المستودعات',
                'الاستيراد والتصدير وتجارة الجملة والتجزئة',
                'التسويق الزراعي والمنتجات الزراعية',
                'المقاولات والإنشاءات والمشاريع العامة',
                'الدعاية والإعلان والتسويق الرقمي',
                'تنظيم المعارض والمؤتمرات والفعاليات',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#0A1D37] bg-white p-3 rounded-xl border border-[#CBD5E1] font-black shadow-sm hover:border-[#C5A059]">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#C5A059] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Vision and Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white border border-[#CBD5E1] p-5 rounded-2xl space-y-2 shadow-sm hover:border-[#C5A059]">
                <div className="flex items-center gap-2 text-[#C5A059] font-black text-sm">
                  <Target className="w-4 h-4 text-[#C5A059]" />
                  <span>الرؤية</span>
                </div>
                <p className="text-xs text-slate-800 font-bold leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </div>

              <div className="bg-white border border-[#CBD5E1] p-5 rounded-2xl space-y-2 shadow-sm hover:border-[#C5A059]">
                <div className="flex items-center gap-2 text-[#C5A059] font-black text-sm">
                  <Compass className="w-4 h-4 text-[#C5A059]" />
                  <span>الرسالة</span>
                </div>
                <p className="text-xs text-slate-800 font-bold leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Company Core Values */}
        <div className="pt-10 border-t border-[#CBD5E1]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-black text-[#0A1D37] mb-2">قيمنا الجوهرية</h3>
            <p className="text-slate-800 text-xs font-bold">المبادئ التي تقود كل قرار وعملية ننفذها في رواكد الشمالية</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMPANY_INFO.values.map((v, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-[#CBD5E1] hover:border-[#C5A059] transition-all text-right space-y-2 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#0A1D37] text-[#C5A059] flex items-center justify-center font-black text-xs mono">
                  0{i + 1}
                </div>
                <h4 className="font-extrabold text-[#0A1D37] text-sm">{v.title}</h4>
                <p className="text-xs text-slate-700 font-semibold leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
