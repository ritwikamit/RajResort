'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { MovingTextTicker } from '@/components/MovingTextTicker';
import { ScrollReveal } from '@/components/ScrollReveal';
import { RoomsSection } from '@/components/RoomsSection';
import { WeddingVenuesSection } from '@/components/WeddingVenuesSection';
import { GallerySection } from '@/components/GallerySection';
import { FacilitiesSection } from '@/components/FacilitiesSection';
import { BookingProvidersSection } from '@/components/BookingProvidersSection';
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
import { Phone, MessageSquare, Award, CheckCircle, Heart } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export default function Home() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#080D0B] text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-[#99141A]/20 selection:text-[#99141A] transition-colors duration-300 relative z-10 scroll-smooth">
      
      {/* JSON-LD Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Hotel',
            name: 'Raj Resort Patna',
            description: 'Resort and wedding celebration destination in Patliputra, Patna featuring starlit lawns, banquet halls, and guest accommodations.',
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
            checkinTime: '12:00',
            checkoutTime: '11:00',
            amenityFeature: [
              { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
              { '@type': 'LocationFeatureSpecification', name: '24/7 Power Backup', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Wedding Lawn', value: true },
            ],
          }),
        }}
      />

      {/* Red Gradient Header with Phone Call Icon & Instant WhatsApp Enquiry Modal */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with Clear Resort Image, Transparent Box, Flush Golden Border & Edge Fades */}
        <HeroSection />

        {/* Where hero ends: Moving text marquee ribbon going right to left */}
        <MovingTextTicker />

        {/* Resort Introduction & Quick Connect Strip in Frosted Glass */}
        <ScrollReveal>
          <section className="py-16 bg-[#F5EFEB] dark:bg-[#0D1411] border-b border-stone-200/80 dark:border-stone-800/80 transition-colors">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-7 space-y-4">
                  {/* Text and icon without rectangular box */}
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#99141A] dark:text-rose-400 uppercase">
                    <Heart className="w-3.5 h-3.5 text-[#99141A] dark:text-rose-400 fill-current" />
                    <span>Welcome to Raj Resort</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                    Where Patna Celebrates with Heart & Hospitality
                  </h2>
                  <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
                    Located right by Gate No. 62 at Kurji Mor, Raj Resort brings together the beauty of 
                    an open green wedding garden with modern hotel comfort. Whether you are hosting a wedding with 
                    hundreds of family and friends, celebrating a ring ceremony in our AC banquet hall, or needing 
                    peaceful rooms for out-of-town guests, we take care of every detail.
                  </p>

                  {/* Highlights in Simple Human Words */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-800 dark:text-stone-200 font-sans">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#99141A] dark:text-rose-400 shrink-0" />
                      <span>Open Lawn for 300 to 1,200+ Guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#99141A] dark:text-rose-400 shrink-0" />
                      <span>Cool AC Shahi Darbar Indoor Hall</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#99141A] dark:text-rose-400 shrink-0" />
                      <span>24/7 Generator Backup (Never Any Power Cuts)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#99141A] dark:text-rose-400 shrink-0" />
                      <span>Safe Gated Parking & Valet Help</span>
                    </div>
                  </div>
                </div>

                {/* Quick Action Card with Animated Golden Border */}
                <div className="lg:col-span-5 animated-golden-border shadow-[0_12px_36px_rgba(153,20,26,0.12)]">
                  <div className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-white/60 dark:border-stone-800">
                    <div className="flex items-center gap-2 pb-3 border-b border-stone-200 dark:border-stone-800 mb-4">
                      <Award className="w-4 h-4 text-[#99141A] dark:text-rose-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200">
                        Talk Directly to Front Desk
                      </span>
                    </div>

                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-5 font-sans">
                      Need to check dates quickly or have a question about rooms or wedding packages? 
                      Our manager is ready to assist you right now without any delay.
                    </p>

                    <div className="space-y-3">
                      {/* Call Reception Desk Directly without exposing mobile number */}
                      <a
                        href={`tel:${RESORT_DATA.phone.replace(/\s+/g, '')}`}
                        className="w-full flex items-center justify-center gap-2.5 px-4 py-3 bg-[#FAF7F2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 hover:border-[#99141A] dark:hover:border-rose-400 text-stone-900 dark:text-stone-100 hover:text-[#99141A] dark:hover:text-rose-300 text-xs font-semibold tracking-wider uppercase transition-colors rounded-xl shadow-xs cursor-pointer"
                      >
                        <Phone className="w-4 h-4 text-[#99141A] dark:text-rose-400" />
                        <span>Call Reception (24/7 Desk)</span>
                      </a>

                      {/* WhatsApp Redirect directly with pre-filled message */}
                      <a
                        href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
                          'Hello Raj Resort Patna, I would like to check room availability and event lawn packages.'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2.5 px-4 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold tracking-wider uppercase transition-colors rounded-xl shadow-xs cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4 text-white" />
                        <span>Instant WhatsApp Desk</span>
                      </a>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-sans">
                      <span>Front Desk: Open 24/7</span>
                      <span>Kurji Mor Gate 62</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Rooms Section with Scroll Reveal */}
        <ScrollReveal>
          <RoomsSection />
        </ScrollReveal>

        {/* Wedding Venues & Lawns with Scroll Reveal */}
        <ScrollReveal>
          <WeddingVenuesSection />
        </ScrollReveal>

        {/* Gallery with Accessible Modal Lightbox with Scroll Reveal */}
        <ScrollReveal>
          <GallerySection />
        </ScrollReveal>

        {/* Verified Facilities & Infrastructure with Scroll Reveal */}
        <ScrollReveal>
          <FacilitiesSection />
        </ScrollReveal>

        {/* Small Google Maps Section with Real Interactive Map & Transit Distances with Scroll Reveal */}
        <ScrollReveal>
          <GoogleMapsSection />
        </ScrollReveal>

        {/* DEDICATED External Booking Section (PRD Requirement: Strictly Separate) */}
        <ScrollReveal>
          <BookingProvidersSection />
        </ScrollReveal>

        {/* Location & Directions (Detailed Highway Guide, Distances) with Scroll Reveal */}
        <ScrollReveal>
          <DirectionsSection />
        </ScrollReveal>

        {/* Contact & Inquiries Form with Scroll Reveal */}
        <ScrollReveal>
          <ContactEnquirySection />
        </ScrollReveal>

        {/* DEDICATED Social Links Section (PRD Requirement: Strictly Separate) */}
        <ScrollReveal>
          <FollowUsSection />
        </ScrollReveal>

        {/* DEDICATED Directory Section (PRD Requirement: Strictly Separate) */}
        <ScrollReveal>
          <OtherListingsSection />
        </ScrollReveal>
      </main>

      {/* Footer with Centered ACCustomLabs Attribution, Front Desk Icons & Legal Links */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenCookies={() => setCookiePolicyOpen(true)}
      />

      {/* Privacy Notice & Terms Modal */}
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

      {/* Accept Cookies Page / Modal for New Users Appearing First */}
      <CookieConsentBanner
        onOpenPolicy={() => setCookiePolicyOpen(true)}
      />

      {/* Floating Vertical Actions: Scroll Up with filling border + Chatbot */}
      <FloatingActions />

      {/* Mobile Sticky Action & Navigation Bar for Smartphones */}
      <MobileStickyBar />

    </div>
  );
}
