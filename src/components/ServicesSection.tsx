import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/companyData';
import { ServiceItem } from '../types';
import { 
  Ship, 
  Plane, 
  Truck, 
  FileCheck, 
  Warehouse, 
  Globe, 
  Sprout, 
  HardHat, 
  Megaphone, 
  Calendar, 
  PackageCheck, 
  Layers,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Info,
  X,
  Search
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteModalWithService: (serviceName: string) => void;
  selectedServiceId?: string;
  onSelectService?: (serviceId: string | undefined) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onOpenQuoteModalWithService,
  selectedServiceId,
  onSelectService
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [detailModalService, setDetailModalService] = useState<ServiceItem | null>(null);

  // Auto open modal if selectedServiceId passes
  React.useEffect(() => {
    if (selectedServiceId) {
      const found = SERVICES_LIST.find(s => s.id === selectedServiceId);
      if (found) {
        setDetailModalService(found);
      }
    }
  }, [selectedServiceId]);

  const categoryTabs = [
    { id: 'all', label: 'جميع الخدمات (12)' },
    { id: 'shipping', label: 'الشحن والتخليص' },
    { id: 'logistics', label: 'اللوجستيات والتخزين' },
    { id: 'commercial', label: 'التجارة والزراعة' },
    { id: 'general', label: 'المقاولات والتطوير' },
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ship': return <Ship className="w-6 h-6" />;
      case 'Plane': return <Plane className="w-6 h-6" />;
      case 'Truck': return <Truck className="w-6 h-6" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6" />;
      case 'Warehouse': return <Warehouse className="w-6 h-6" />;
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'Sprout': return <Sprout className="w-6 h-6" />;
      case 'HardHat': return <HardHat className="w-6 h-6" />;
      case 'Megaphone': return <Megaphone className="w-6 h-6" />;
      case 'Calendar': return <Calendar className="w-6 h-6" />;
      case 'PackageCheck': return <PackageCheck className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      default: return <Ship className="w-6 h-6" />;
    }
  };

  const filteredServices = SERVICES_LIST.filter((srv) => {
    const matchesCategory = activeCategory === 'all' || srv.category === activeCategory;
    const matchesQuery = searchQuery.trim() === '' || 
      srv.title.includes(searchQuery) || 
      srv.shortDesc.includes(searchQuery) ||
      srv.fullDesc.includes(searchQuery);
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FAF9F6]/95 backdrop-blur-md text-[#0A1D37] relative overflow-hidden border-y border-[#C5A059]/40 shadow-xl">
      {/* Background Decorative Glows and Graphic Grid */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0A1D37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(#C5A059_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1D37] border border-[#C5A059]/50 text-[#C5A059] text-xs font-bold shadow-md">
            <Layers className="w-4 h-4 text-[#C5A059]" />
            <span className="mono">01. خدماتنا الشاملة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1D37] tracking-tight leading-[54px]">
            حلول شامخة تغطي كافة مراحل الشحن والمقاولات والتوريد
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-bold leading-relaxed">
            تقدم شركة رواكد الشمالية بالدمام باقة متخصصة من الخدمات المعتمدة التي تلبي متطلبات القطاعات التجارية والصناعية والزراعية بمرونة واحترافية.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#CBD5E1]">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                id={`srv-tab-${tab.id}`}
                onClick={() => setActiveCategory(tab.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                  activeCategory === tab.id
                    ? 'bg-[#0A1D37] text-[#C5A059] border border-[#C5A059]/50 shadow-md'
                    : 'bg-white text-slate-700 hover:text-[#0A1D37] border border-[#CBD5E1] hover:border-[#C5A059]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="ابحث في الخدمات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#CBD5E1] focus:border-[#C5A059] rounded-xl px-4 py-2.5 pr-10 text-xs text-[#0A1D37] font-bold placeholder-slate-400 focus:outline-none text-right shadow-sm"
            />
            <Search className="w-4 h-4 text-slate-500 absolute right-3.5 top-3 pointer-events-none" />
          </div>

        </div>

        {/* Services Grid (12 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((srv, idx) => {
            const isAgriService = srv.id === 'agri-marketing' || srv.title.includes('الزراعي');

            return (
              <div 
                key={srv.id}
                className="bg-white border border-[#CBD5E1] hover:border-[#C5A059] rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1 text-right relative overflow-hidden"
              >
                {/* Sage Agricultural Badge if agricultural service */}
                {isAgriService && (
                  <span className="bg-[#D8E2DC] text-[#2D6A4F] px-3 py-1 rounded-full text-[11px] font-black absolute top-4 left-4 border border-[#2D6A4F]/20">
                    قطاع زراعي
                  </span>
                )}

                <div>
                  {/* Header Card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0A1D37] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center transition-colors shadow-sm">
                      {getServiceIcon(srv.icon)}
                    </div>
                    {!isAgriService && (
                      <span className="mono text-[11px] font-black text-[#0A1D37] bg-slate-100 px-2.5 py-1 rounded-md border border-[#CBD5E1]">
                        #0{idx + 1}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-[#0A1D37] group-hover:text-[#C5A059] transition-colors mb-2">
                    {srv.title}
                  </h3>

                  {/* Short Desc */}
                  <p className="text-slate-800 text-xs font-bold leading-relaxed mb-4 line-clamp-3">
                    {srv.shortDesc}
                  </p>

                  {/* Key Features Quick Bullets */}
                  <div className="space-y-1.5 mb-6 border-t border-[#CBD5E1] pt-3">
                    {srv.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] font-black text-[#0A1D37]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-[#CBD5E1] flex items-center gap-2">
                  <button
                    id={`srv-details-${srv.id}`}
                    onClick={() => setDetailModalService(srv)}
                    className="flex-1 bg-slate-50 hover:bg-[#0A1D37] hover:text-white border border-[#CBD5E1] text-[#0A1D37] text-xs font-extrabold py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <Info className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>التفاصيل</span>
                  </button>

                  <button
                    id={`srv-quote-${srv.id}`}
                    onClick={() => onOpenQuoteModalWithService(srv.title)}
                    className="bg-[#0A1D37] hover:bg-[#C5A059] text-white hover:text-[#0A1D37] text-xs font-black py-2.5 px-4 rounded-xl transition-all flex items-center gap-1 shadow-md"
                  >
                    <span>طلب الخدمة</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#E5E2D9]">
            <p className="text-[#64748B] text-sm font-semibold">لم نجد أي خدمة تطابق البحث المطلوب.</p>
            <button 
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }} 
              className="mt-3 text-[#C5A059] text-xs font-black underline"
            >
              عرض جميع الخدمات
            </button>
          </div>
        )}

      </div>

      {/* Service Detail Full Modal */}
      {detailModalService && (
        <div className="fixed inset-0 z-50 bg-[#0A1D37]/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white border border-[#E5E2D9] rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-right max-h-[90vh] overflow-y-auto">
            
            {/* Close button */}
            <button
              id="close-srv-modal"
              onClick={() => {
                setDetailModalService(null);
                if (onSelectService) onSelectService(undefined);
              }}
              className="absolute top-4 left-4 p-2 text-[#64748B] hover:text-[#0A1D37] bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-12 h-12 rounded-xl bg-[#0A1D37] text-[#C5A059] flex items-center justify-center shrink-0">
                {getServiceIcon(detailModalService.icon)}
              </div>
              <div>
                <h3 className="text-xl font-black text-[#0A1D37]">{detailModalService.title}</h3>
                {detailModalService.titleEn && (
                  <span className="text-xs text-[#64748B] mono font-sans">{detailModalService.titleEn}</span>
                )}
              </div>
            </div>

            {/* Banner image */}
            <div className="h-44 rounded-2xl overflow-hidden border border-[#E5E2D9]">
              <img 
                src={detailModalService.imageUrl} 
                alt={detailModalService.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Full description */}
            <div className="space-y-2">
              <h4 className="text-xs font-black text-[#C5A059]">الوصف الشامل للخدمة:</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {detailModalService.fullDesc}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2">
              <h4 className="text-xs font-black text-[#C5A059]">مميزات وتغطية الخدمة:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {detailModalService.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#FAF9F6] p-2.5 rounded-xl border border-[#E5E2D9] text-xs font-bold text-[#0A1D37]">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications if present */}
            {detailModalService.specs && detailModalService.specs.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-black text-[#C5A059]">المواصفات الفنية والتنفيذ:</h4>
                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-[#E5E2D9] space-y-2">
                  {detailModalService.specs.map((s, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs border-b border-[#E5E2D9] pb-1.5 last:border-0 last:pb-0">
                      <span className="text-[#64748B] font-medium">{s.label}:</span>
                      <span className="text-[#0A1D37] font-bold">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Process steps if present */}
            {detailModalService.processSteps && (
              <div className="space-y-2">
                <h4 className="text-xs font-black text-[#C5A059]">خطوات الإنجاز والتشغيل:</h4>
                <div className="space-y-1.5">
                  {detailModalService.processSteps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-[#0A1D37]">
                      <span className="w-5 h-5 rounded-full bg-[#0A1D37] text-[#C5A059] font-bold flex items-center justify-center text-[10px] shrink-0 mono">
                        {sIdx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA in Modal */}
            <div className="pt-4 border-t border-[#E5E2D9] flex flex-wrap items-center justify-between gap-3">
              <button
                id="modal-quote-submit"
                onClick={() => {
                  const title = detailModalService.title;
                  setDetailModalService(null);
                  if (onSelectService) onSelectService(undefined);
                  onOpenQuoteModalWithService(title);
                }}
                className="w-full sm:w-auto bg-[#0A1D37] hover:bg-[#C5A059] text-white hover:text-[#0A1D37] font-black text-xs px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Sparkles className="w-4 h-4 fill-current" />
                <span>اطلب عرض سعر لهذه الخدمة</span>
              </button>

              <button
                onClick={() => {
                  setDetailModalService(null);
                  if (onSelectService) onSelectService(undefined);
                }}
                className="w-full sm:w-auto text-[#64748B] hover:text-[#0A1D37] text-xs font-bold py-2 px-4"
              >
                إغلاق النافذة
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
