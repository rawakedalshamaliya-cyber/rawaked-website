import React, { useState } from 'react';
import { FAQ_LIST } from '../data/companyData';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  MessageCircle, 
  Phone,
  Sparkles 
} from 'lucide-react';

interface FaqSectionProps {
  onOpenQuoteModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenQuoteModal }) => {
  const [openId, setOpenId] = useState<string>('countries');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  const filteredFaqs = FAQ_LIST.filter((faq) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
  });

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white/95 backdrop-blur-md text-[#0A1D37] relative overflow-hidden border-y border-[#C5A059]/40 shadow-xl">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0A1D37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(#C5A059_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1D37] border border-[#C5A059]/50 text-[#C5A059] text-xs font-bold shadow-md">
            <HelpCircle className="w-4 h-4 text-[#C5A059]" />
            <span className="mono">07. الأسئلة الشائعة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1D37] tracking-tight leading-[52px]">
            إجابات وافية على أكثر الاستفسارات شيوعاً
          </h2>
          <p className="text-slate-800 text-sm sm:text-base font-bold leading-relaxed">
            تجدون هنا توضيحاً لكافة التساؤلات المتعلقة بمهام الشحن، المنافذ الجمركية، التسويق الزراعي، وطلب عروض الأسعار.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="ابحث في الأسئلة الشائعة (مثال: الشحن، التخليص، عرض سعر)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#CBD5E1] focus:border-[#C5A059] rounded-2xl px-5 py-3.5 pr-12 text-xs text-[#0A1D37] font-bold placeholder-slate-400 focus:outline-none text-right shadow-sm"
          />
          <Search className="w-4 h-4 text-slate-500 absolute right-4 top-4 pointer-events-none" />
        </div>

        {/* Accordions List */}
        <div className="space-y-3 text-right">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-white border border-[#CBD5E1] hover:border-[#C5A059] rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 font-black text-sm text-[#0A1D37] hover:text-[#C5A059] transition-colors"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 ${isOpen ? 'bg-[#0A1D37] text-[#C5A059] border-[#C5A059] rotate-180' : 'bg-slate-50 border-[#CBD5E1] text-[#0A1D37]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-slate-800 text-xs sm:text-sm leading-relaxed border-t border-[#CBD5E1] animate-in fade-in duration-200 font-bold bg-slate-50/50">
                    <p>{faq.answer}</p>
                    {faq.category && (
                      <span className="inline-block mt-3 text-[10px] bg-[#0A1D37] text-[#C5A059] font-black px-3 py-1 rounded-full border border-[#C5A059]/40 mono shadow-sm">
                        القسم: {faq.category}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 bg-white rounded-2xl border border-[#CBD5E1] text-slate-800 text-xs font-bold">
              لم نجد نتائج تطابق البحث. يمكنك التواصل معنا مباشرة للإجابة عن سؤالك.
            </div>
          )}
        </div>

        {/* Bottom CTA for Unanswered questions */}
        <div className="mt-12 bg-white border border-[#CBD5E1] rounded-2xl p-6 text-center space-y-3 shadow-md">
          <h3 className="font-black text-[#0A1D37] text-base">لديك استفسار خاص لم تجد إجابته هنا؟</h3>
          <p className="text-xs text-slate-800 font-bold">فريقنا اللوجستي بالدمام جاهز للإجابة على جميع تساؤلاتك الدقيقة.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#0A1D37] hover:bg-[#C5A059] text-white hover:text-[#0A1D37] font-black text-xs px-5 py-3 rounded-xl transition-all flex items-center gap-2 shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>طلب عرض سعر أو استشارة</span>
            </button>
            <a
              href="tel:00966597928787"
              className="bg-white hover:bg-[#FAF9F6] text-[#0A1D37] font-bold text-xs px-4 py-2.5 rounded-xl border border-[#E5E2D9] dir-ltr"
            >
              00966597928787 📞
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
