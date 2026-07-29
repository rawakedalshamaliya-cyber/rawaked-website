import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { SectorsSection } from './components/SectorsSection';
import { QuoteRequestForm } from './components/QuoteRequestForm';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { GallerySection } from './components/GallerySection';
import { PartnersSection } from './components/PartnersSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { COMPANY_INFO } from './data/companyData';
import vividLogisticsBg8k from './assets/images/vivid_logistics_bg_8k_1785318749503.jpg';
import { MessageSquareText, Phone, Sparkles, X } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  // Smooth navigation scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuoteModal = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPrefilledService(serviceTitle);
    } else {
      setPrefilledService('');
    }
    setIsQuoteModalOpen(true);
  };

  const handleSelectServiceFromNav = (serviceId: string | undefined) => {
    setSelectedServiceId(serviceId);
  };

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'why-us', 'sectors', 'quote', 'gallery', 'partners', 'blog', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0A1D37] font-['Cairo','IBM_Plex_Sans_Arabic',sans-serif] selection:bg-amber-500 selection:text-slate-950 dir-rtl antialiased relative">
      
      {/* Global Vivid Background with Cinematic Video Motion Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <motion.img 
          src={vividLogisticsBg8k} 
          alt="خلفية خدمات شركة رواكد الشمالية 8K" 
          animate={{
            scale: [1, 1.08, 1.04, 1.09, 1],
            x: [0, -15, 10, -5, 0],
            y: [0, -10, -15, 5, 0],
            rotate: [0, 0.5, -0.5, 0]
          }}
          transition={{
            duration: 24,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
          className="w-full h-full object-cover object-center opacity-95 filter contrast-115 saturate-125 brightness-102 transform-gpu origin-center"
        />
        {/* Subtle cinematic video light overlay effect */}
        <motion.div 
          animate={{
            opacity: [0.15, 0.25, 0.15],
            x: ['-20%', '20%', '-20%']
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/10 to-transparent pointer-events-none"
        />
      </div>

      {/* Header & Sticky Top Bar */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onSelectService={handleSelectServiceFromNav}
      />

      {/* Main Content Area */}
      <motion.main 
        id="home"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Hero Section */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onNavigate={handleNavigate}
        />

        {/* About Section */}
        <AboutSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onNavigate={handleNavigate}
        />

        {/* Services Section (All 12 Services) */}
        <ServicesSection
          onOpenQuoteModalWithService={(serviceTitle) => handleOpenQuoteModal(serviceTitle)}
          selectedServiceId={selectedServiceId}
          onSelectService={handleSelectServiceFromNav}
        />

        {/* Why Us Section */}
        <WhyUsSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Sectors Served Section */}
        <SectorsSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Quote Request Form Section */}
        <QuoteRequestForm
          prefilledServiceTitle={prefilledService}
        />

        {/* Gallery Section */}
        <GallerySection />

        {/* Partners Section */}
        <PartnersSection />

        {/* Blog Section */}
        <BlogSection />

        {/* FAQ Section */}
        <FaqSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Contact Section */}
        <ContactSection />
      </motion.main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        
        {/* Floating WhatsApp */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('مرحباً شركة رواكد الشمالية بالدمام، أريد استفسار عن خدمات الشحن واللوجستيات.')}`}
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform p-3"
          title="محادثة واتساب مباشرة"
        >
          <MessageSquareText className="w-6 h-6" />
        </a>

        {/* Floating Phone Call */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="w-13 h-13 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform p-3"
          title="اتصال تلفوني مباشر"
        >
          <Phone className="w-6 h-6" />
        </a>

        {/* Floating Quote Trigger */}
        <button
          onClick={() => handleOpenQuoteModal()}
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs hover:scale-105 transition-transform"
        >
          <Sparkles className="w-4 h-4 fill-slate-950" />
          <span className="hidden sm:inline">طلب عرض سعر</span>
        </button>

      </div>

      {/* Quote Request Dedicated Modal Overlay */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute top-5 left-5 p-2 bg-slate-800 text-slate-400 hover:text-white rounded-xl z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <QuoteRequestForm
              prefilledServiceTitle={prefilledService}
              isModal={true}
              onCloseModal={() => setIsQuoteModalOpen(false)}
            />

          </div>
        </div>
      )}

    </div>
  );
}
