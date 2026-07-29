import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/companyData';
import { GalleryItem } from '../types';
import { 
  Camera, 
  X, 
  Ship, 
  Warehouse, 
  Building, 
  Calendar, 
  Maximize2 
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const tabs = [
    { id: 'all', label: 'الكل' },
    { id: 'shipping', label: 'صور الشحن' },
    { id: 'warehouses', label: 'صور المستودعات' },
    { id: 'projects', label: 'صور المشاريع' },
    { id: 'events', label: 'صور الفعاليات' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAF9F6]/95 backdrop-blur-md text-[#0A1D37] relative overflow-hidden border-y border-[#C5A059]/40 shadow-xl">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0A1D37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(#C5A059_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1D37] border border-[#C5A059]/50 text-[#C5A059] text-xs font-bold shadow-md">
            <Camera className="w-4 h-4 text-[#C5A059]" />
            <span className="mono">04. معرض العمليات</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1D37] tracking-tight leading-[52px]">
            نظرة ميدانية على عمليات الشحن والمناولة والتخزين والمشاريع
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-bold leading-relaxed">
            استعرض صور وأنشطة شركة رواكد الشمالية في الموانئ السعودية، المستودعات المبردة، مواقع المقاولات والفعاليات.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none justify-start md:justify-center -mx-4 px-4 md:mx-0 md:px-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`gallery-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === tab.id
                  ? 'bg-[#0A1D37] text-[#C5A059] border border-[#C5A059]/50 shadow-md'
                  : 'bg-white text-slate-700 hover:text-[#0A1D37] border border-[#CBD5E1] hover:border-[#C5A059]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="bg-white border border-[#CBD5E1] rounded-2xl overflow-hidden group cursor-pointer hover:border-[#C5A059] transition-all duration-300 shadow-md hover:shadow-2xl text-right"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D37] via-[#0A1D37]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute top-3 right-3 bg-[#0A1D37]/95 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-extrabold text-[#C5A059] border border-[#C5A059]/50 shadow-md">
                  {item.categoryLabel}
                </div>

                <div className="absolute bottom-3 left-3 bg-[#0A1D37] p-2 rounded-lg text-white group-hover:bg-[#C5A059] group-hover:text-[#0A1D37] transition-colors shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="font-black text-[#0A1D37] text-sm group-hover:text-[#C5A059] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-700 text-xs line-clamp-2 font-bold">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-[#0A1D37]/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="max-w-3xl w-full bg-white border border-[#E5E2D9] rounded-3xl overflow-hidden shadow-2xl relative text-right space-y-4 p-6">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 left-4 p-2 bg-[#FAF9F6] text-[#64748B] hover:text-[#0A1D37] rounded-xl z-10 border border-[#E5E2D9]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#E5E2D9]">
              <img 
                src={lightboxItem.imageUrl} 
                alt={lightboxItem.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#C5A059] bg-[#0A1D37] px-3 py-1 rounded-full border border-[#C5A059]/30 mono inline-block">
                {lightboxItem.categoryLabel}
              </span>
              <h3 className="text-xl font-black text-[#0A1D37]">{lightboxItem.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {lightboxItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
