'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { RoomsSection } from '@/components/RoomsSection';
import { BookingProvidersSection } from '@/components/BookingProvidersSection';
import { Footer } from '@/components/Footer';
import { PrivacyPolicyModal } from '@/components/PrivacyPolicyModal';
import { CookiePolicyModal } from '@/components/CookiePolicyModal';
import { FloatingActions } from '@/components/FloatingActions';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { Bed, CheckCircle } from 'lucide-react';

export default function RoomsPage() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#080D0B] text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-[#99141A]/20 selection:text-[#99141A] transition-colors duration-300 relative z-10">
      <Header />
      
      {/* Page Hero Banner in Luminous Glass */}
      <section className="pt-32 pb-16 bg-[#F5EFEB] dark:bg-[#0D1411] border-b border-stone-200/80 dark:border-stone-800/80 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#99141A] dark:text-rose-400 uppercase mb-4">
            <Bed className="w-4 h-4 text-[#99141A] dark:text-rose-400" />
            <span>Stay at Raj Resort Patna</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Comfortable & Clean Rooms in Patliputra
          </h1>
          <p className="mt-3 text-stone-700 dark:text-stone-300 text-base max-w-2xl mx-auto leading-relaxed font-sans">
            Choose from our Classic, Deluxe, and Family Suites. Each room comes with individual air conditioning, 
            soft fresh linens, 24/7 power backup, and round-the-clock room service.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-stone-800 dark:text-stone-200 font-sans">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle className="w-4 h-4 text-[#99141A] dark:text-rose-400" /> 24/7 Hot Water & Power Backup
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle className="w-4 h-4 text-[#99141A] dark:text-rose-400" /> Fast Fiber Wi-Fi
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle className="w-4 h-4 text-[#99141A] dark:text-rose-400" /> Daily Housekeeping
            </span>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <RoomsSection />
        <BookingProvidersSection />
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
