'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { GallerySection } from '@/components/GallerySection';
import { Footer } from '@/components/Footer';
import { PrivacyPolicyModal } from '@/components/PrivacyPolicyModal';
import { CookiePolicyModal } from '@/components/CookiePolicyModal';
import { FloatingActions } from '@/components/FloatingActions';
import { MobileStickyBar } from '@/components/MobileStickyBar';

export default function GalleryPage() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFAF3] dark:bg-[#181210] text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-[#FFE5BF] selection:text-[#F62440] transition-colors duration-300 relative z-10">
      <Header />
      
      {/* Dedicated Landscape Hero Banner Faded on Side Edges Only */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-[#FFE5BF]/40">
        
        {/* Background Landscape Photo with Subtle Side Fade */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full fade-sides-mask">
            <Image
              src="/images/venue-28.jpg"
              alt="Raj Resort Patna Wedding Ceremony Gallery Landscape"
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
          <span className="font-cursive text-3xl sm:text-4xl text-[#FFE5BF] tracking-wide block mb-2 drop-shadow-md">
            Memories That Stay with You Forever
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
            Real Moments from Real Weddings
          </h1>
          <p className="mt-4 text-stone-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans font-normal drop-shadow-sm">
            Here are actual photographs from weddings celebrated at Raj Resort: the long flower entrance, the sacred mandap, the sparkling chandeliers, and families celebrating under the open Patna sky.
          </p>
        </div>
      </section>

      <main className="flex-1">
        <GallerySection isLandingPage={false} />
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
