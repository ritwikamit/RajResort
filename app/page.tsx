'use client';

import React, { useState } from 'react';
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
