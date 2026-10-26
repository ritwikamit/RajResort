'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { MovingTextTicker } from '@/components/MovingTextTicker';
import { ScrollReveal } from '@/components/ScrollReveal';
import { WeddingVenuesSection } from '@/components/WeddingVenuesSection';
import { GallerySection } from '@/components/GallerySection';
import { FacilitiesSection } from '@/components/FacilitiesSection';
import { GoogleMapsSection } from '@/components/GoogleMapsSection';
import { ContactEnquirySection } from '@/components/ContactEnquirySection';
import { FAQSection } from '@/components/FAQSection';
import { FollowUsSection } from '@/components/FollowUsSection';
import { OtherListingsSection } from '@/components/OtherListingsSection';
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
      
      {/* JSON-LD Structured Data for Local Wedding Destination SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EventVenue',
            name: 'Raj Resort Patna',
            url: 'https://rajresortpatna.com',
            image: [
              'https://rajresortpatna.com/images/landingpage3.png',
              'https://rajresortpatna.com/images/venue-17.jpg',
              'https://rajresortpatna.com/images/venue-02.jpg',
              'https://rajresortpatna.com/images/venue-08.jpg',
            ],
            description: 'Premier wedding destination and grand celebration lawns in Patliputra, Patna featuring starlit celebration lawns, illuminated floral pergolas, and AC banquet halls.',
            priceRange: '₹₹₹',
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
            telephone: '+917360800001',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '00:00',
                closes: '23:59',
              },
            ],
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

        {/* Real Celebration Photo Gallery - 100% Distinct Photos (12 on Landing Page) */}
        <ScrollReveal>
          <GallerySection isLandingPage={true} />
        </ScrollReveal>

        {/* Venue Facilities & Infrastructure */}
        <ScrollReveal>
          <FacilitiesSection />
        </ScrollReveal>

        {/* Interactive Google Map & Location */}
        <ScrollReveal>
          <GoogleMapsSection />
        </ScrollReveal>

        {/* Frequently Asked Questions */}
        <ScrollReveal>
          <FAQSection />
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
