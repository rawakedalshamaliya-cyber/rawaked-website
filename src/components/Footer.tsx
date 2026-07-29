import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Ship, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  ArrowUp,
  Share2,
  Globe
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1D37]/90 backdrop-blur-sm text-slate-300 border-t border-[#C5A059]/30 relative pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800 text-right">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A059] flex items-center justify-center text-[#0A1D37] font-black shadow-lg">
                <Ship className="w-5 h-5 text-[#0A1D37] stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white">شركة رواكد الشمالية</span>
                <span className="text-[11px] text-[#C5A059] font-bold mono">ذات مسؤولية محدودة</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-medium">
              "نربط الأسواق... ننقل الثقة... نصنع القيمة."
              <br />
              شركة سعودية متميزة مقرها الدمام، توفر حلول الشحن والمقاولات والخدمات اللوجستية والتسويق الزراعي والاستيراد والتصدير.
            </p>

            {/* Quick Slogan Badge */}
            <div className="inline-block bg-[#0A1D37]/80 border border-[#C5A059]/30 p-3 rounded-xl text-[11px] text-slate-300">
              <span className="text-[#C5A059] font-bold block mb-0.5">المقر الرئيسي:</span>
              <span>{COMPANY_INFO.location}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-black text-white border-r-2 border-[#C5A059] pr-2">روابط سريعة</h4>
            <ul className="space-y-2 text-xs font-semibold">
              {['home', 'about', 'services', 'why-us', 'sectors'].map((id) => {
                const labels: Record<string, string> = {
                  home: 'الرئيسية',
                  about: 'من نحن',
                  services: 'خدماتنا الـ 12',
                  'why-us': 'لماذا نحن؟',
                  sectors: 'القطاعات التي نخدمها'
                };
                return (
                  <li key={id}>
                    <button
                      onClick={() => onNavigate(id)}
                      className="hover:text-[#C5A059] transition-colors"
                    >
                      • {labels[id]}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: More Pages */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-black text-white border-r-2 border-[#C5A059] pr-2">أقسام تفاعلية</h4>
            <ul className="space-y-2 text-xs font-semibold">
              {['quote', 'gallery', 'partners', 'blog', 'faq', 'contact'].map((id) => {
                const labels: Record<string, string> = {
                  quote: 'طلب عرض سعر',
                  gallery: 'معرض الأعمال',
                  partners: 'شركاء النجاح',
                  blog: 'المدونة الأخبار',
                  faq: 'الأسئلة الشائعة',
                  contact: 'تواصل معنا'
                };
                return (
                  <li key={id}>
                    <button
                      onClick={() => onNavigate(id)}
                      className="hover:text-[#C5A059] transition-colors"
                    >
                      • {labels[id]}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 4: Explicit Contact Specs as required by prompt */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-black text-white border-r-2 border-[#C5A059] pr-2">معلومات التواصل المباشرة</h4>
            <div className="space-y-2 text-xs">
              
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>المملكة العربية السعودية – الدمام</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="text-slate-400">الهاتف:</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-[#C5A059] hover:underline dir-ltr">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-slate-400 flex items-center gap-1 font-semibold">
                  <Mail className="w-4 h-4 text-[#C5A059]" />
                  العناوين البريدية:
                </span>
                
                <div className="bg-[#061224] p-2.5 rounded-xl border border-slate-800 space-y-1 font-mono text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-sans">عام:</span>
                    <a href={`mailto:${COMPANY_INFO.emails.general}`} className="text-slate-200 hover:text-[#C5A059]">
                      {COMPANY_INFO.emails.general}
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-sans">مبيعات:</span>
                    <a href={`mailto:${COMPANY_INFO.emails.sales}`} className="text-slate-200 hover:text-[#C5A059]">
                      {COMPANY_INFO.emails.sales}
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-sans">مكتب اليمن:</span>
                    <a href={`mailto:${COMPANY_INFO.emails.yemen}`} className="text-slate-200 hover:text-[#C5A059]">
                      {COMPANY_INFO.emails.yemen}
                    </a>
                  </div>
                </div>

              </div>

              {/* Social links */}
              <div className="pt-2 flex items-center gap-2 flex-wrap">
                <span className="text-[11px] text-slate-400 font-medium">التواصل الاجتماعي:</span>
                {[
                  { name: 'LinkedIn', url: COMPANY_INFO.socials?.linkedin || '#' },
                  { name: 'X (Twitter)', url: COMPANY_INFO.socials?.twitter || '#' },
                  { name: 'WhatsApp', url: COMPANY_INFO.socials?.whatsapp || `https://wa.me/${COMPANY_INFO.whatsapp}` },
                  { name: 'Facebook', url: COMPANY_INFO.socials?.facebook || 'https://www.facebook.com/profile.php?id=61588775501027' }
                ].map((item, sIdx) => (
                  <a 
                    key={sIdx} 
                    href={item.url}
                    target={item.url !== '#' ? '_blank' : undefined}
                    rel={item.url !== '#' ? 'noopener noreferrer' : undefined}
                    onClick={(e) => {
                      if (item.url === '#') {
                        e.preventDefault();
                      }
                    }}
                    className="bg-[#061224] hover:bg-[#C5A059] hover:text-[#0A1D37] text-slate-300 p-1.5 rounded-lg border border-slate-800 text-[10px] font-bold transition-colors inline-block"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Copyright & Scroll To Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="font-medium">
            حقوق النشر © 2026 شركة رواكد الشمالية. جميع الحقوق محفوظة.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="text-[#C5A059] font-bold hover:underline"
            >
              اطلب عرض سعر الآن
            </button>
            <button
              onClick={scrollToTop}
              className="bg-[#061224] hover:bg-[#C5A059] text-slate-300 hover:text-[#0A1D37] p-2 rounded-xl border border-slate-800 flex items-center gap-1 font-bold transition-all"
              title="أعلى الصفحة"
            >
              <span>الأعلى</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
