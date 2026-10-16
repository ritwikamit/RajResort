'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { ContactEnquirySection } from '@/components/ContactEnquirySection';
import { FollowUsSection } from '@/components/FollowUsSection';
import { OtherListingsSection } from '@/components/OtherListingsSection';
import { Footer } from '@/components/Footer';
import { PrivacyPolicyModal } from '@/components/PrivacyPolicyModal';
import { CookiePolicyModal } from '@/components/CookiePolicyModal';
import { FloatingActions } from '@/components/FloatingActions';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { Phone } from 'lucide-react';

export default function ContactPage() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#080D0B] text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-[#99141A]/20 selection:text-[#99141A] transition-colors duration-300 relative z-10">
      <Header />
      
      {/* Page Hero Banner */}
      <section className="pt-32 pb-16 bg-[#F5EFEB] dark:bg-[#0D1411] border-b border-stone-200/80 dark:border-stone-800/80 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#99141A] dark:text-rose-400 uppercase mb-4">
            <Phone className="w-4 h-4 text-[#99141A] dark:text-rose-400" />
            <span>24/7 Reception Desk</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Get in Touch with Raj Resort Patna
          </h1>
          <p className="mt-3 text-stone-700 dark:text-stone-300 text-base max-w-2xl mx-auto leading-relaxed font-sans">
            Planning a celebration or visiting Patna? Call our front desk, send a quick message on WhatsApp, 
            or fill out the simple inquiry form below. We will reply quickly with date availability and rates.
          </p>
        </div>
      </section>

      <main className="flex-1">
        <ContactEnquirySection />
        <FollowUsSection />
        <OtherListingsSection />
      </main>

      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenCookies={() => setCookieOpen(true)}
      />
      <PrivacyPolicyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <CookiePolicyModal isOpen={cookieOpen} onClose={() => setCookieOpen(false)} />
      <FloatingActions />
      <MobileStickyBar />
    </div>
  );
}
