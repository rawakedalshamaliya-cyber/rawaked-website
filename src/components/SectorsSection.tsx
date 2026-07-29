import React from 'react';
import { SECTORS_SERVED } from '../data/companyData';
import { 
  Wheat, 
  Factory, 
  ShoppingBag, 
  Landmark, 
  ArrowLeftRight, 
  Briefcase, 
  CheckCircle2,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

interface SectorsSectionProps {
  onOpenQuoteModal: () => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onOpenQuoteModal }) => {
  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wheat': return <Wheat className="w-6 h-6" />;
      case 'Factory': return <Factory className="w-6 h-6" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6" />;
      case 'Landmark': return <Landmark className="w-6 h-6" />;
      case 'ArrowLeftRight': return <ArrowLeftRight className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      default: return <Briefcase className="w-6 h-6" />;
    }
  };

  return (
    <section id="sectors" className="py-16 sm:py-24 bg-[#FAF9F6]/95 backdrop-blur-md text-[#0A1D37] relative overflow-hidden border-y border-[#C5A059]/40 shadow-xl">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0A1D37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(#C5A059_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1D37] border border-[#C5A059]/50 text-[#C5A059] text-xs font-bold shadow-md">
            <Briefcase className="w-4 h-4 text-[#C5A059]" />
            <span className="mono">03. القطاعات المستهدفة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1D37] tracking-tight">
            حلول متكاملة مصممة خصيصاً لتحديات كل قطاع
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-bold leading-relaxed">
            نفهم المتطلبات التشغيلية والتنظيمية لمختلف المنظومات الاقتصادية ونوفر استراتيجيات شحن وتخزين ومقاولات مخصصة لضمان الكفاءة.
          </p>
        </div>

        {/* Sectors 6 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS_SERVED.map((sec) => {
            const isAgriSector = sec.id === 'agri' || sec.title.includes('الزراعي');

            return (
              <div 
                key={sec.id}
                className="bg-white border border-[#CBD5E1] hover:border-[#C5A059] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl text-right shadow-md"
              >
                {/* Image Banner */}
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={sec.imageUrl} 
                    alt={sec.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D37] via-[#0A1D37]/30 to-transparent"></div>
                  
                  <div className={`absolute bottom-3 right-3 flex items-center gap-2 backdrop-blur-md px-3 py-1.5 rounded-xl border text-xs font-bold ${
                    isAgriSector 
                      ? 'bg-[#D8E2DC] text-[#2D6A4F] border-[#2D6A4F]/30' 
                      : 'bg-[#0A1D37]/95 text-[#C5A059] border-[#C5A059]/50 shadow-md'
                  }`}>
                    {getSectorIcon(sec.icon)}
                    <span className="font-extrabold">{sec.title}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-800 text-xs sm:text-sm font-bold leading-relaxed mb-4">
                      {sec.description}
                    </p>

                    <div className="space-y-1.5">
                      <span className="text-[11px] font-black text-[#C5A059] block mb-1">
                        أبرز المميزات لهذا القطاع:
                      </span>
                      {sec.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-[#0A1D37] font-black">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#CBD5E1]">
                    <button
                      id={`sector-quote-${sec.id}`}
                      onClick={onOpenQuoteModal}
                      className="w-full bg-slate-50 hover:bg-[#0A1D37] hover:text-white text-[#0A1D37] border border-[#CBD5E1] text-xs font-black py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>طلب عرض سعر لهذا القطاع</span>
                      <ArrowLeft className="w-3.5 h-3.5 text-[#C5A059]" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
