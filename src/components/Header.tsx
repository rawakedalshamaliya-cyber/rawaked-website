import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Ship, 
  Send, 
  ChevronDown,
  Sparkles,
  Search
} from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenQuoteModal: () => void;
  onSelectService?: (serviceId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenQuoteModal,
  onSelectService
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'من نحن' },
    { id: 'services', label: 'خدماتنا', hasDropdown: true },
    { id: 'why-us', label: 'لماذا نحن؟' },
    { id: 'sectors', label: 'القطاعات' },
    { id: 'quote', label: 'طلب عرض سعر' },
    { id: 'gallery', label: 'معرض الأعمال' },
    { id: 'partners', label: 'الشركاء' },
    { id: 'blog', label: 'المدونة' },
    { id: 'faq', label: 'الأسئلة الشائعة' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  const quickServices = [
    { id: 'ocean-freight', label: 'الشحن البحري والوكالات' },
    { id: 'air-freight', label: 'الشحن الجوي والوكالات' },
    { id: 'land-freight', label: 'النقل البري واللوجستيات' },
    { id: 'customs-clearance', label: 'التخليص الجمركي' },
    { id: 'warehousing-handling', label: 'المناولة والتخزين' },
    { id: 'import-export', label: 'الاستيراد والتصدير' },
    { id: 'agri-marketing', label: 'التسويق الزراعي' },
    { id: 'contracting-construction', label: 'المقاولات العامة' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top bar with company contact details */}
      <div className="bg-[#0A1D37] text-slate-200 text-xs py-2 border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-[#C5A059] font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              {COMPANY_INFO.location}
            </span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors dir-ltr font-sans"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              {COMPANY_INFO.phone}
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.emails.general}`} 
              className="hidden md:flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
              {COMPANY_INFO.emails.general}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              {COMPANY_INFO.workingHours}
            </span>
            <span className="mono bg-[#C5A059]/10 text-[#C5A059] px-2.5 py-0.5 rounded border border-[#C5A059]/30 font-bold text-[10px]">
              RAWAKID AL SHAMALIYA
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className={`bg-[#0A1D37] backdrop-blur-md border-b border-[#C5A059]/20 transition-all ${
        isScrolled ? 'py-1 shadow-xl shadow-[#0A1D37]/30' : 'py-1.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Company Title */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-right group text-white focus:outline-none"
          >
            <div className="relative w-11 h-11 rounded-xl bg-[#C5A059] flex items-center justify-center text-[#0A1D37] font-black shadow-lg shadow-[#C5A059]/20 group-hover:scale-105 transition-transform duration-300">
              <Ship className="w-6 h-6 text-[#0A1D37] stroke-[2.5]" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#0A1D37] rounded-full border-2 border-[#C5A059] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white group-hover:text-[#C5A059] transition-colors">
                رواكد الشمالية
              </span>
              <span className="mono text-[10px] text-[#C5A059]/80 font-semibold tracking-wider">
                Logistics & Contracting
              </span>
            </div>
          </button>

          {/* Desktop Navigation links */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-bold">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.id} 
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      id={`nav-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-xl transition-all ${
                        isActive || servicesDropdownOpen 
                          ? 'text-[#C5A059] bg-[#FFFFFF]/10 border-r-2 border-[#C5A059]' 
                          : 'text-slate-200 hover:text-[#C5A059] hover:bg-white/5'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-[#C5A059]' : ''}`} />
                    </button>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full right-0 mt-1 w-64 bg-[#0A1D37] border border-[#C5A059]/30 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="mono text-[10px] font-bold text-[#C5A059] px-3 py-1.5 border-b border-[#C5A059]/20 mb-1">
                          جميع الخدمات (12 خدمة)
                        </div>
                        <div className="max-h-80 overflow-y-auto space-y-0.5">
                          {quickServices.map((qs) => (
                            <button
                              key={qs.id}
                              id={`dropdown-srv-${qs.id}`}
                              onClick={() => {
                                onNavigate('services');
                                if (onSelectService) onSelectService(qs.id);
                                setServicesDropdownOpen(false);
                              }}
                              className="w-full text-right px-3 py-2 rounded-xl text-xs text-slate-200 hover:text-[#C5A059] hover:bg-white/10 transition-colors flex items-center justify-between"
                            >
                              <span>{qs.label}</span>
                              <span className="text-slate-400 text-[10px]">عرض</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
                    isActive 
                      ? 'text-[#C5A059] bg-[#FFFFFF]/10 border-r-2 border-[#C5A059] font-bold' 
                      : 'text-slate-200 hover:text-[#C5A059] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="header-quote-btn"
              onClick={onOpenQuoteModal}
              className="bg-[#C5A059] hover:bg-[#b08d48] text-[#0A1D37] font-black text-xs px-5 py-2.5 rounded-xl transition-all shadow-md shadow-[#C5A059]/20 hover:shadow-lg flex items-center gap-2 active:scale-95"
            >
              <Sparkles className="w-4 h-4 fill-[#0A1D37]" />
              <span>اطلب عرض سعر</span>
            </button>
            <button
              id="header-contact-btn"
              onClick={() => handleNavClick('contact')}
              className="border border-[#C5A059]/40 hover:border-[#C5A059] text-white hover:text-[#C5A059] text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>تواصل معنا</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              id="mobile-quote-trigger"
              onClick={onOpenQuoteModal}
              className="bg-[#C5A059] text-[#0A1D37] font-extrabold text-xs px-3 py-2 rounded-lg"
            >
              عرض سعر
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white bg-white/10 rounded-lg focus:outline-none"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A1D37] border-b border-[#C5A059]/30 px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200 text-right shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-[#C5A059]/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-right px-3.5 py-3 rounded-xl text-xs font-black transition-all ${
                  activeSection === item.id
                    ? 'bg-[#C5A059] text-[#0A1D37] shadow-md'
                    : 'bg-white/5 text-slate-200 hover:bg-white/10 hover:text-[#C5A059] border border-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-1 space-y-2">
            <div className="text-xs font-black text-[#C5A059] px-1 flex items-center justify-between">
              <span>الخدمات الرئيسية السريعة:</span>
              <span className="mono text-[10px] text-slate-400">12 خدمة</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {quickServices.map((qs) => (
                <button
                  key={qs.id}
                  id={`mobile-srv-${qs.id}`}
                  onClick={() => {
                    onNavigate('services');
                    if (onSelectService) onSelectService(qs.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-right px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-bold hover:text-[#C5A059] border border-white/5 flex items-center justify-between transition-colors"
                >
                  <span>{qs.label}</span>
                  <span className="text-[#C5A059] text-[10px]">←</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#C5A059]/20 space-y-2.5">
            <button
              id="mobile-drawer-quote-btn"
              onClick={() => {
                onOpenQuoteModal();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#C5A059] text-[#0A1D37] font-black py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#C5A059]/20 active:scale-95"
            >
              <Sparkles className="w-4 h-4 fill-[#0A1D37]" />
              اطلب عرض سعر أو استشارة الآن
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full bg-white/10 border border-[#C5A059]/30 text-white font-black py-3 rounded-xl text-xs flex items-center justify-center gap-2 dir-ltr hover:bg-white/15 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
