'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { ContactEnquirySection } from '@/components/ContactEnquirySection';
import { FollowUsSection } from '@/components/FollowUsSection';
import { OtherListingsSection } from '@/components/OtherListingsSection';
import { Footer } from '@/components/Footer';
import { PrivacyPolicyModal } from '@/components/PrivacyPolicyModal';
import { CookiePolicyModal } from '@/components/CookiePolicyModal';
import { FloatingActions } from '@/components/FloatingActions';
import { MobileStickyBar } from '@/components/MobileStickyBar';

export default function ContactPage() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F9] dark:bg-[#120718] text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-[#FFC0DE] selection:text-[#8E1EA2] transition-colors duration-300 relative z-10">
      <Header />
      
      {/* Dedicated Landscape Hero Banner Faded on Side Edges Only */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-[#8E1EA2]/15">
        
        {/* Background Landscape Photo with Subtle Side Fade */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full fade-sides-mask">
            <Image
              src="/images/venue-27.jpg"
              alt="Raj Resort Patna Reception and Event Planning Desk Landscape"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70 pointer-events-none" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="font-cursive text-3xl sm:text-4xl text-[#FFC0DE] tracking-wide block mb-2 drop-shadow-md">
            We Are Here to Serve Your Family
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
            Connect with Raj Resort Reception
          </h1>
          <p className="mt-4 text-stone-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans font-normal drop-shadow-sm">
            Planning a grand wedding celebration or family milestone in Patna? Call our 24/7 reception desk, connect instantly via WhatsApp, or leave a message below. We look forward to welcoming your family.
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
