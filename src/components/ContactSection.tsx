import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquareText, 
  Send, 
  Building2, 
  CheckCircle2,
  ExternalLink,
  Globe2
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF9F6]/95 backdrop-blur-md text-[#0A1D37] relative overflow-hidden border-y border-[#C5A059]/40 shadow-xl">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0A1D37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(#C5A059_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1D37] border border-[#C5A059]/50 text-[#C5A059] text-xs font-bold shadow-md">
            <Phone className="w-4 h-4 text-[#C5A059]" />
            <span className="mono">08. تواصل معنا</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1D37] tracking-tight leading-[60px]">
            نحن هنا لخدمتك ومرافقتك في كافة استفساراتك اللوجستية
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-bold leading-relaxed">
            تواصل مباشرة مع المقر الرئيسي لشركة رواكد الشمالية بالدمام، أو راسلنا عبر إحدى القنوات البريدية المخصصة لكل قطاع.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Card Column */}
          <div className="lg:col-span-5 space-y-6 text-right">
            
            {/* Main Headquarters Details Box */}
            <div className="bg-white border border-[#CBD5E1] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-2 bg-[#0A1D37]"></div>

              <div className="space-y-2">
                <span className="text-xs font-black text-[#C5A059] uppercase tracking-wider block mono">
                  [ LLC Company ]
                </span>
                <h3 className="text-2xl font-black text-[#0A1D37]">{COMPANY_INFO.name}</h3>
                <p className="text-xs text-slate-800 leading-relaxed font-bold">
                  المقر الرئيسي: {COMPANY_INFO.location}
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#E5E2D9]">
                
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A1D37] text-[#C5A059] flex items-center justify-center shrink-0 border border-[#C5A059]/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#64748B] block">العنوان:</span>
                    <span className="text-xs sm:text-sm text-[#0A1D37] font-bold">
                      {COMPANY_INFO.fullAddress}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A1D37] text-[#C5A059] flex items-center justify-center shrink-0 border border-[#C5A059]/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#64748B] block">الهاتف المباشر والواتساب:</span>
                    <a 
                      href={`tel:${COMPANY_INFO.phone}`} 
                      className="text-sm font-black text-[#0A1D37] hover:text-[#C5A059] hover:underline dir-ltr inline-block"
                    >
                      {COMPANY_INFO.formattedPhone}
                    </a>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A1D37] text-[#C5A059] flex items-center justify-center shrink-0 border border-[#C5A059]/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 w-full">
                    <span className="text-xs font-bold text-[#64748B] block">العناوين البريدية الإلكترونية:</span>
                    <div className="space-y-1">
                      <a 
                        href={`mailto:${COMPANY_INFO.emails.general}`} 
                        className="flex items-center justify-between text-xs bg-[#FAF9F6] p-2 rounded-lg border border-[#E5E2D9] hover:border-[#C5A059] text-[#0A1D37]"
                      >
                        <span className="text-[#64748B] font-medium">الاستفسارات العامة:</span>
                        <span className="font-mono font-bold">{COMPANY_INFO.emails.general}</span>
                      </a>
                      
                      <a 
                        href={`mailto:${COMPANY_INFO.emails.sales}`} 
                        className="flex items-center justify-between text-xs bg-[#FAF9F6] p-2 rounded-lg border border-[#E5E2D9] hover:border-[#C5A059] text-[#0A1D37]"
                      >
                        <span className="text-[#64748B] font-medium">المبيعات والعقود:</span>
                        <span className="font-mono font-bold">{COMPANY_INFO.emails.sales}</span>
                      </a>

                      <a 
                        href={`mailto:${COMPANY_INFO.emails.yemen}`} 
                        className="flex items-center justify-between text-xs bg-[#FAF9F6] p-2 rounded-lg border border-[#E5E2D9] hover:border-[#C5A059] text-[#0A1D37]"
                      >
                        <span className="text-[#64748B] font-medium">مكتب اليمن والمنطقة:</span>
                        <span className="font-mono font-bold">{COMPANY_INFO.emails.yemen}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-3 pt-2">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] text-[#0A1D37] flex items-center justify-center shrink-0 border border-[#E5E2D9]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#64748B] block">ساعات العمل الرسمية:</span>
                    <span className="text-xs text-[#0A1D37] font-semibold">{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E5E2D9] grid grid-cols-2 gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="bg-[#0A1D37] hover:bg-[#C5A059] text-white hover:text-[#0A1D37] font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>اتصل بنا الآن</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('مرحباً شركة رواكد الشمالية بالدمام، استفسار عام')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>محادثة واتساب</span>
                </a>
              </div>

            </div>

            {/* Dammam Map Card */}
            <div className="bg-white border border-[#E5E2D9] rounded-2xl p-4 space-y-2 shadow-sm">
              <div className="flex justify-between items-center text-xs font-bold text-[#0A1D37]">
                <span className="flex items-center gap-1 text-[#C5A059]">
                  <Globe2 className="w-4 h-4" />
                  موقعنا الجغرافي بالدمام
                </span>
                <span className="text-[#64748B] text-[11px]">طريق الملك عبد العزيز</span>
              </div>
              
              <div className="h-40 rounded-xl overflow-hidden relative border border-[#E5E2D9] bg-[#FAF9F6] flex items-center justify-center">
                <iframe 
                  title="Rawakid Al Shamaliya Location Dammam"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114389.17231454652!2d50.05187979999999!3d26.4344211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb0317e082cb%3A0x8e833481b0a9f5d6!2sDammam%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                  className="w-full h-full border-0 grayscale opacity-80 hover:opacity-100 transition-opacity" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 bg-white border border-[#E5E2D9] rounded-3xl p-6 sm:p-8 text-right shadow-xl">
            {formSent ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 bg-[#0A1D37] text-[#C5A059] rounded-2xl flex items-center justify-center mx-auto border border-[#C5A059]/30 shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#0A1D37]">تم إرسال رسالتك بنجاح</h3>
                <p className="text-[#64748B] text-xs sm:text-sm max-w-md mx-auto font-medium">
                  شكرًا لتواصلك مع شركة رواكد الشمالية. قام فريق خدمة العملاء باستلام رسالتك وسيتواصل معك بأسرع وقت عبر الهاتف أو البريد.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="bg-[#0A1D37] text-[#C5A059] font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-[#C5A059] hover:text-[#0A1D37] transition-all"
                >
                  إرسال رسالة جديدة
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="border-b border-[#E5E2D9] pb-3 mb-2">
                  <h3 className="text-xl font-black text-[#0A1D37]">أرسل لنا رسالة مباشرة</h3>
                  <p className="text-xs text-[#64748B] font-medium">سنقوم بالإجابة على استفساراتكم خلال أوقات العمل الرسمية</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#0A1D37]">الاسم الكامل *</label>
                    <input
                      type="text"
                      required
                      placeholder="اسمك الكريم"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl px-4 py-3 text-xs text-[#0A1D37] placeholder-slate-400 focus:outline-none focus:border-[#C5A059] text-right font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#0A1D37]">رقم الهاتف *</label>
                    <input
                      type="tel"
                      required
                      placeholder="00966597928787"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl px-4 py-3 text-xs text-[#0A1D37] placeholder-slate-400 focus:outline-none focus:border-[#C5A059] text-right dir-ltr font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#0A1D37]">البريد الإلكتروني *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl px-4 py-3 text-xs text-[#0A1D37] placeholder-slate-400 focus:outline-none focus:border-[#C5A059] text-right dir-ltr font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#0A1D37]">موضوع الاستفسار *</label>
                    <input
                      type="text"
                      required
                      placeholder="استفسار عن الشحن / التخليص / المقاولات..."
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl px-4 py-3 text-xs text-[#0A1D37] placeholder-slate-400 focus:outline-none focus:border-[#C5A059] text-right font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#0A1D37]">نص الرسالة *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="اكتب رسالتك وتفاصيل استفسارك هنا..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-4 text-xs text-[#0A1D37] placeholder-slate-400 focus:outline-none focus:border-[#C5A059] text-right resize-none font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0A1D37] hover:bg-[#C5A059] text-white hover:text-[#0A1D37] font-black text-xs py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال الرسالة إلى شركة رواكد الشمالية</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
