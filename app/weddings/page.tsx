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
import { Users, Zap, ShieldCheck, Car } from 'lucide-react';
import { FAQSection } from '@/components/FAQSection';

export default function WeddingsPage() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFAF3] dark:bg-[#181210] text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-[#FFE5BF] selection:text-[#F62440] transition-colors duration-300 relative z-10">
      <Header />
      
      {/* Dedicated Hero Section with Real Landscape Image & Subtle Side Fade */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-[#FFE5BF]/40">
        
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

        {/* Dark Lateral Side Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-8 sm:w-20 md:w-32 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-[2] pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 sm:w-20 md:w-32 bg-gradient-to-l from-black/85 via-black/40 to-transparent z-[2] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="font-cursive text-3xl sm:text-4xl text-[#FFE5BF] tracking-wide block mb-2 drop-shadow-md">
            Weddings & Celebrations
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
            Wedding Lawns & Celebration Spaces
          </h1>
          <p className="mt-4 text-stone-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans font-normal drop-shadow-sm">
            Host your wedding, sagai, or reception across our 3.5-acre property in Patliputra. With an open celebration lawn for 400 to 1,200+ guests, a 150-ft illuminated floral walkway, glass-walk bride and groom entry, themed Varmala stages, continuous generator backup, and parking for 400+ cars.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-stone-200 font-sans">
            <span className="flex items-center gap-1.5 font-medium">
              <Users className="w-4 h-4 text-[#FFE5BF]" /> 400 to 1,200+ Guests
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Car className="w-4 h-4 text-[#FFE5BF]" /> 400+ Car Parking
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Zap className="w-4 h-4 text-[#FFE5BF]" /> Continuous Generator Power
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#FFE5BF]" /> 400+ Celebrations Hosted
            </span>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <WeddingVenuesSection />
        <FAQSection />
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
