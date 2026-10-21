'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { WeddingVenuesSection } from '@/components/WeddingVenuesSection';
import { ContactEnquirySection } from '@/components/ContactEnquirySection';
import { Footer } from '@/components/Footer';
import { PrivacyPolicyModal } from '@/components/PrivacyPolicyModal';
import { CookiePolicyModal } from '@/components/CookiePolicyModal';
import { FloatingActions } from '@/components/FloatingActions';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { Users, Zap, ShieldCheck } from 'lucide-react';

export default function WeddingsPage() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F9] dark:bg-[#120718] text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-[#FFC0DE] selection:text-[#8E1EA2] transition-colors duration-300 relative z-10">
      <Header />
      
      {/* Dedicated Hero Section with Real Landscape Image & Subtle Side Fade */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-[#8E1EA2]/15">
        
        {/* Background Landscape Photo with Subtle Side Fade */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full fade-sides-mask">
            <Image
              src="/images/landingpage3.png"
              alt="Raj Resort Patna Grand Wedding Lawns Landscape"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70 pointer-events-none" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="font-cursive text-3xl sm:text-4xl text-[#FFC0DE] tracking-wide block mb-2 drop-shadow-md">
            Sacred Vows & Starlit Celebrations
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
            Grand Wedding Lawns & Banquets
          </h1>
          <p className="mt-4 text-stone-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans font-normal drop-shadow-sm">
            Host your wedding celebration at Raj Resort. An open lawn for 400 to 1,200+ guests under the starlit Patna sky, 
            an illuminated floral pergola for your royal Baraat arrival, 100% industrial power backup, and the AC Shahi Darbar banquet hall.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-stone-200 font-sans">
            <span className="flex items-center gap-1.5 font-medium">
              <Users className="w-4 h-4 text-[#ED96D7]" /> 1,200+ Guest Capacity
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Zap className="w-4 h-4 text-[#ED96D7]" /> 100% Dual Generator Power
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#ED96D7]" /> Secured Gated Premises
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
