import React from 'react';
import { PARTNERS_LIST } from '../data/companyData';
import { 
  Handshake, 
  Globe2, 
  ShieldCheck, 
  Award,
  CheckCircle2
} from 'lucide-react';

export const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="py-16 sm:py-24 bg-white/95 backdrop-blur-md text-[#0A1D37] relative overflow-hidden border-y border-[#C5A059]/40 shadow-xl">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0A1D37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(#C5A059_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1D37] border border-[#C5A059]/50 text-[#C5A059] text-xs font-bold shadow-md">
            <Handshake className="w-4 h-4 text-[#C5A059]" />
            <span className="mono">05. شبكة الشركاء والتحالفات</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1D37] tracking-tight">
            تحالفات استراتيجية موثوقة محلياً ودولياً
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-bold leading-relaxed">
            نعمل جنبًا إلى جنب مع أكبر الخطوط الملاحية، وكالات الشحن الجوي، الهيئات الجمركية والتنظيمية لتأمين أعلى معايير الاعتماد والسرعة.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERS_LIST.map((partner) => (
            <div
              key={partner.id}
              className="bg-white border border-[#CBD5E1] hover:border-[#C5A059] rounded-2xl p-6 text-right transition-all duration-300 space-y-3 group hover:shadow-2xl shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-black tracking-widest text-[#0A1D37] bg-slate-100 px-3 py-1 rounded-md border border-[#CBD5E1]">
                  {partner.logoText}
                </span>
                {partner.badge && (
                  <span className="bg-[#0A1D37] text-[#C5A059] font-black text-[11px] px-3 py-1 rounded-full border border-[#C5A059]/40 mono shadow-sm">
                    {partner.badge}
                  </span>
                )}
              </div>

              <h3 className="text-base font-black text-[#0A1D37] group-hover:text-[#C5A059] transition-colors">
                {partner.name}
              </h3>

              <p className="text-xs text-[#C5A059] font-black">
                {partner.type}
              </p>

              <p className="text-xs text-slate-800 leading-relaxed font-bold">
                {partner.description}
              </p>

              <div className="pt-2 border-t border-[#CBD5E1] flex items-center gap-1.5 text-[11px] text-[#0A1D37] font-extrabold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>اتفاقيات تشغيل معتمدة مع رواكد الشمالية</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
