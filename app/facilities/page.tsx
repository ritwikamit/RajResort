'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { FacilitiesSection } from '@/components/FacilitiesSection';
import { Footer } from '@/components/Footer';
import { PrivacyPolicyModal } from '@/components/PrivacyPolicyModal';
import { CookiePolicyModal } from '@/components/CookiePolicyModal';
import { FloatingActions } from '@/components/FloatingActions';
import { MobileStickyBar } from '@/components/MobileStickyBar';

export default function FacilitiesPage() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F9] dark:bg-[#120718] text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-[#FFC0DE] selection:text-[#8E1EA2] transition-colors duration-300 relative z-10">
      <Header />
      
      {/* Dedicated Landscape Hero Banner Faded only on side edges */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-[#8E1EA2]/15">
        
        {/* Background Landscape Photo with Subtle Side Fade */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full fade-sides-mask">
            <Image
              src="/images/venue-26.jpg"
              alt="Raj Resort Patna Banquet Hall and Event Infrastructure Landscape"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70 pointer-events-none" />
          </div>
        </div>

        {/* Dark Lateral Side Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-8 sm:w-20 md:w-32 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-[2] pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 sm:w-20 md:w-32 bg-gradient-to-l from-black/85 via-black/40 to-transparent z-[2] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="font-cursive text-3xl sm:text-4xl text-[#FFC0DE] tracking-wide block mb-2 drop-shadow-md">
            Care, Comfort & Peace of Mind
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
            Everything Your Family Needs
          </h1>
          <p className="mt-4 text-stone-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans font-normal drop-shadow-sm">
            When your guests arrive, everything should be smooth and comfortable. Continuous generator power so the lights never go out, plenty of safe parking, cool AC rooms for elders and the bride, and our team ready to help at any moment.
          </p>
        </div>
      </section>

      <main className="flex-1">
        <FacilitiesSection />
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
