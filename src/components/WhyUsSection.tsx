import React from 'react';
import { WHY_US_ITEMS } from '../data/companyData';
import { 
  Award, 
  Zap, 
  TrendingUp, 
  Network, 
  Headphones, 
  ShieldCheck, 
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

interface WhyUsSectionProps {
  onOpenQuoteModal: () => void;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ onOpenQuoteModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-7 h-7" />;
      case 'Zap': return <Zap className="w-7 h-7" />;
      case 'TrendingUp': return <TrendingUp className="w-7 h-7" />;
      case 'Network': return <Network className="w-7 h-7" />;
      case 'Headphones': return <Headphones className="w-7 h-7" />;
      default: return <ShieldCheck className="w-7 h-7" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white/95 backdrop-blur-md text-[#0A1D37] relative overflow-hidden border-y border-[#C5A059]/40 shadow-xl">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0A1D37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(#C5A059_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1D37] border border-[#C5A059]/50 text-[#C5A059] text-xs font-bold shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span className="mono">02. لماذا نحن؟</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1D37] tracking-tight">
            ميزتنا التنافسية: الجودة، السرعة، والالتزام المطلق
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-bold leading-relaxed">
            نحن نضع مصلحة العميل واستدامة أعماله في مقدمة أولوياتنا من خلال خمس دعائم رئيسية تُشكل فلسفة عملنا في شركة رواكد الشمالية.
          </p>
        </div>

        {/* 5 Why Us Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_ITEMS.map((item, idx) => (
            <div 
              key={item.id}
              className={`bg-white border border-[#CBD5E1] hover:border-[#C5A059] rounded-2xl p-6 text-right transition-all duration-300 space-y-4 group hover:-translate-y-1 shadow-md hover:shadow-2xl ${
                idx === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#0A1D37] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center transition-colors shadow-sm">
                  {getIcon(item.icon)}
                </div>
                {item.metric && (
                  <span className="bg-[#0A1D37] text-[#C5A059] font-black text-xs px-3 py-1.5 rounded-full border border-[#C5A059]/40 mono shadow-sm">
                    {item.metric}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-black text-[#0A1D37] group-hover:text-[#C5A059] transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-800 text-xs sm:text-sm font-bold leading-relaxed">
                {item.description}
              </p>

              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-black text-[#0A1D37]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>معتمد ومطبق في جميع شحناتنا بالدمام</span>
              </div>
            </div>
          ))}

          {/* 6th Banner Card Call-To-Action */}
          <div className="bg-[#0A1D37] text-white rounded-2xl p-6 border border-[#C5A059]/50 flex flex-col justify-between space-y-4 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-2 text-right relative z-10">
              <span className="text-[10px] font-black uppercase tracking-wider bg-[#C5A059] text-[#0A1D37] px-2.5 py-1 rounded mono">
                [ Logistical Advice ]
              </span>
              <h3 className="text-xl font-black leading-tight text-white pt-1">
                هل تبحث عن حلول لوجستية مخصصة لشركتك؟
              </h3>
              <p className="text-xs font-bold text-slate-200 leading-relaxed">
                تواصل مع مستشارينا اللوجستيين بالدمام للحصول على دراسة مبسطة وعرض سعر تنافسي خاص بمشاريعك.
              </p>
            </div>

            <button
              id="why-us-quote-cta"
              onClick={onOpenQuoteModal}
              className="relative z-10 bg-[#C5A059] hover:bg-[#b08d48] text-[#0A1D37] font-black text-xs py-3.5 px-5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              <span>احصل على عرض السعر الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
