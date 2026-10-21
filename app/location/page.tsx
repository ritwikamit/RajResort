'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { GoogleMapsSection } from '@/components/GoogleMapsSection';
import { DirectionsSection } from '@/components/DirectionsSection';
import { Footer } from '@/components/Footer';
import { PrivacyPolicyModal } from '@/components/PrivacyPolicyModal';
import { CookiePolicyModal } from '@/components/CookiePolicyModal';
import { FloatingActions } from '@/components/FloatingActions';
import { MobileStickyBar } from '@/components/MobileStickyBar';

export default function LocationPage() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0A0D0E] text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-[#8E1B21]/20 selection:text-[#8E1B21] transition-colors duration-300 relative z-10">
      <Header />
      
      {/* Dedicated Landscape Hero Banner Faded from Sides */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-stone-200/80 dark:border-stone-800/80">
        
        {/* Background Landscape Photo with Side Fades */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full fade-sides-mask">
            <Image
              src="/images/landingpage3.png"
              alt="Raj Resort Patna Arrival and Location Landscape"
              fill
              priority
              className="object-cover object-center scale-105"
            />
            {/* Scrim */}
            <div className="absolute inset-0 bg-black/60 dark:bg-black/75 pointer-events-none" />
          </div>
        </div>

        {/* Lateral Soft Gradients */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-[#FAF8F5] dark:from-[#0A0D0E] to-transparent z-[2] pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-[#FAF8F5] dark:from-[#0A0D0E] to-transparent z-[2] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="font-cursive text-3xl sm:text-4xl text-[#F2E6D8] tracking-wide block mb-2 drop-shadow-md">
            Effortless Arrival for Every Guest
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
            Location & Highway Directions
          </h1>
          <p className="mt-4 text-stone-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans font-normal drop-shadow-sm">
            Situated directly by Gate No. 62 at Kurji Mor in Patliputra. Conveniently accessible from Patliputra Junction, Patna Railway Station, Jay Prakash Narayan Airport, and the Digha Marine Drive expressway.
          </p>
        </div>
      </section>

      <main className="flex-1">
        <GoogleMapsSection />
        <DirectionsSection />
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
