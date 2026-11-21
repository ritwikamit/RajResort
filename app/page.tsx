'use client';

import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { MovingTextTicker } from '@/components/MovingTextTicker';
import { ScrollReveal } from '@/components/ScrollReveal';
import { WeddingVenuesSection } from '@/components/WeddingVenuesSection';
import { InstagramReelsSection } from '@/components/InstagramReelsSection';
import { GallerySection } from '@/components/GallerySection';
import { FacilitiesSection } from '@/components/FacilitiesSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { PrivacyPolicyModal } from '@/components/PrivacyPolicyModal';
import { CookiePolicyModal } from '@/components/CookiePolicyModal';
import { FloatingActions } from '@/components/FloatingActions';
import { MobileStickyBar } from '@/components/MobileStickyBar';

export default function Home() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFAF3] dark:bg-[#181210] text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-[#FFE5BF] selection:text-[#F62440] transition-colors duration-300 relative z-10 scroll-smooth">
      

      {/* Light Luxury Translucent Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with LandingHeroSection.mp4 Video Background */}
        <HeroSection />

        {/* Moving Text Ticker */}
        <MovingTextTicker />

        {/* Curated Wedding Venues & Lawns */}
        <ScrollReveal>
          <WeddingVenuesSection />
        </ScrollReveal>

        {/* Watch Real Weddings & Viral Reels (Above Moments We Are Blessed to Host) */}
        <ScrollReveal>
          <InstagramReelsSection />
        </ScrollReveal>

        {/* Real Celebration Photo Gallery - Moments We Are Blessed to Host */}
        <ScrollReveal>
          <GallerySection isLandingPage={true} />
        </ScrollReveal>

        {/* Venue Facilities & Infrastructure */}
        <ScrollReveal>
          <FacilitiesSection />
        </ScrollReveal>

        {/* Sister Brand Spotlight */}
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FFF2DB] via-[#FFE5BF]/60 to-[#FFF2DB] dark:from-[#201714] dark:via-[#2A1D19] dark:to-[#201714] border border-[#FFE5BF] dark:border-[#352520] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 transition-colors">
              <div className="space-y-1.5 text-center md:text-left">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F62440] block">
                  Hospitality Group Sister Brand
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                  Sheesh Mahal Resorts
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 max-w-xl leading-relaxed font-sans">
                  Proud sister brand of Raj Resort Patna. Experience our signature royal hospitality, luxury banquet lawns, and bespoke wedding celebrations at sheeshmahalresorts.com.
                </p>
              </div>
              <a
                href="https://sheeshmahalresorts.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F62440] to-[#D81B34] hover:from-[#E01A35] hover:to-[#BF132A] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-md hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer border border-white/20"
              >
                <span>Visit Sheesh Mahal</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Frequently Asked Questions */}
        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>
      </main>

      {/* Luxury Footer with Big Logo */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenCookies={() => setCookiePolicyOpen(true)}
      />

      {/* Privacy Notice Modal */}
      <PrivacyPolicyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />

      {/* Cookie Policy Modal */}
      <CookiePolicyModal
        isOpen={cookiePolicyOpen}
        onClose={() => setCookiePolicyOpen(false)}
        onAcceptAll={() => {
          try {
            localStorage.setItem('raj_resort_cookies_accepted', 'all');
          } catch {
            // Ignore
          }
        }}
      />

      {/* Floating Concierge Chatbot & Scroll Action */}
      <FloatingActions />

      {/* Mobile Sticky Bar */}
      <MobileStickyBar />

    </div>
  );
}
