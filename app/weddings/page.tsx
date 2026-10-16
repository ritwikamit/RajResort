'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { WeddingVenuesSection } from '@/components/WeddingVenuesSection';
import { ContactEnquirySection } from '@/components/ContactEnquirySection';
import { Footer } from '@/components/Footer';
import { PrivacyPolicyModal } from '@/components/PrivacyPolicyModal';
import { CookiePolicyModal } from '@/components/CookiePolicyModal';
import { FloatingActions } from '@/components/FloatingActions';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { Heart, CheckCircle } from 'lucide-react';

export default function WeddingsPage() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#080D0B] text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-[#99141A]/20 selection:text-[#99141A] transition-colors duration-300 relative z-10">
      <Header />
      
      {/* Page Hero Banner - Standardized like other pages */}
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 bg-[#F5EFEB] dark:bg-[#0D1411] border-b border-stone-200/80 dark:border-stone-800/80 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#99141A] dark:text-rose-400 uppercase mb-4">
            <Heart className="w-4 h-4 text-[#99141A] dark:text-rose-400 fill-current" />
            <span>Grand Celebrations in Patna</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Weddings, Receptions & Grand Lawns
          </h1>
          <p className="mt-3 text-stone-700 dark:text-stone-300 text-base max-w-2xl mx-auto leading-relaxed font-sans">
            Host your wedding celebration at Raj Resort. We provide an open lawn for 300 to 1,200+ guests under the starlit Patna sky, 
            an illuminated floral pergola for your Baraat arrival, 24/7 industrial generator backup, and the air-conditioned Shahi Darbar hall.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-stone-800 dark:text-stone-200 font-sans">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle className="w-4 h-4 text-[#99141A] dark:text-rose-400" /> Open Lawn & Starlit Aisle
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle className="w-4 h-4 text-[#99141A] dark:text-rose-400" /> 24/7 Heavy Generator (No Outages)
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle className="w-4 h-4 text-[#99141A] dark:text-rose-400" /> AC Bridal Dressing Suites
            </span>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <WeddingVenuesSection />
        <ContactEnquirySection />
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
