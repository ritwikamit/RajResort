'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { MovingTextTicker } from '@/components/MovingTextTicker';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SpecialWeddingStory } from '@/components/SpecialWeddingStory';
import { WeddingVenuesSection } from '@/components/WeddingVenuesSection';
import { GallerySection } from '@/components/GallerySection';
import { FacilitiesSection } from '@/components/FacilitiesSection';
import { GoogleMapsSection } from '@/components/GoogleMapsSection';
import { DirectionsSection } from '@/components/DirectionsSection';
import { ContactEnquirySection } from '@/components/ContactEnquirySection';
import { FollowUsSection } from '@/components/FollowUsSection';
import { OtherListingsSection } from '@/components/OtherListingsSection';
import { Footer } from '@/components/Footer';
import { PrivacyPolicyModal } from '@/components/PrivacyPolicyModal';
import { CookiePolicyModal } from '@/components/CookiePolicyModal';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';
import { FloatingActions } from '@/components/FloatingActions';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { Phone, Calendar, Heart, ShieldCheck, MapPin } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export default function Home() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0A0D0E] text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-[#8E1B21]/20 selection:text-[#8E1B21] transition-colors duration-300 relative z-10 scroll-smooth">
      
      {/* JSON-LD Structured Data for Local Wedding Destination SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EventVenue',
            name: 'Raj Resort Patna',
            description: 'Premier wedding destination and grand celebration lawns in Patliputra, Patna featuring starlit celebration lawns, illuminated floral pergolas, and AC banquet halls.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Near Gate No. 62, Kurji Mor, Patliputra',
              addressLocality: 'Patna',
              addressRegion: 'Bihar',
              postalCode: '800010',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 25.6391525,
              longitude: 85.1102531,
            },
            telephone: '+919054394665',
            amenityFeature: [
              { '@type': 'LocationFeatureSpecification', name: 'Open Air Celebration Lawn', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'AC Banquet Hall', value: true },
              { '@type': 'LocationFeatureSpecification', name: '24/7 Power Backup', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Gated Valet Parking', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Floral Pergola Walkway', value: true },
            ],
          }),
        }}
      />

      {/* Luxury Obsidian Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with LandingHeroSection.mp4 Video Background & Cursive Typography */}
        <HeroSection />

        {/* Moving Text Ticker */}
        <MovingTextTicker />

        {/* SPECIAL WEDDING STORY SECTION - landingPage3.png with Emotional Family Narrative */}
        <ScrollReveal>
          <SpecialWeddingStory />
        </ScrollReveal>

        {/* Curated Wedding Venues & Lawns */}
        <ScrollReveal>
          <WeddingVenuesSection />
        </ScrollReveal>

        {/* Real Celebration Photo Gallery */}
        <ScrollReveal>
          <GallerySection />
        </ScrollReveal>

        {/* Venue Facilities & Infrastructure */}
        <ScrollReveal>
          <FacilitiesSection />
        </ScrollReveal>

        {/* Interactive Google Map & Location */}
        <ScrollReveal>
          <GoogleMapsSection />
        </ScrollReveal>

        {/* Highway Travel & Arrival Guide */}
        <ScrollReveal>
          <DirectionsSection />
        </ScrollReveal>

        {/* Wedding Date Inquiries & Contact Form */}
        <ScrollReveal>
          <ContactEnquirySection />
        </ScrollReveal>

        {/* Verified Social Media Channels */}
        <ScrollReveal>
          <FollowUsSection />
        </ScrollReveal>

        {/* Local Verified Directory Profiles */}
        <ScrollReveal>
          <OtherListingsSection />
        </ScrollReveal>
      </main>

      {/* Luxury Footer */}
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

      {/* Cookie Consent Banner */}
      <CookieConsentBanner
        onOpenPolicy={() => setCookiePolicyOpen(true)}
      />

      {/* Floating Vertical Actions */}
      <FloatingActions />

      {/* Mobile Sticky Bar */}
      <MobileStickyBar />

    </div>
  );
}
