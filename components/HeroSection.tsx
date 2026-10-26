'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Users, ShieldCheck, MapPin, Sparkles, UtensilsCrossed } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden pt-20 pb-8 sm:pt-28 sm:pb-16 select-none">
      
      {/* Background Media: Instant WebP Poster + Faststart Video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {/* Instant High-Priority LCP Poster Image (Paints in <50ms) */}
        <Image
          src="/images/hero-poster.webp"
          alt="Raj Resort Patna Luxury Wedding Venue"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center"
        />

        {/* Seamless Faststart Video Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-poster.webp"
          className="relative z-[1] w-full h-full object-cover object-center"
        >
          <source src="/LandingHeroSection.mp4" type="video/mp4" />
        </video>

        {/* Ambient Film Scrim */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/65 via-black/45 to-black/75 pointer-events-none" />
      </div>

      {/* Lateral Side Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-8 sm:w-24 md:w-36 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-[2] pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 sm:w-24 md:w-36 bg-gradient-to-l from-black/85 via-black/40 to-transparent z-[2] pointer-events-none" />

      {/* Top and Bottom Atmosphere Blends */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/70 to-transparent z-[2] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent z-[2] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full my-auto">
        
        {/* Natural Kicker in Cursive */}
        <div className="mb-2 sm:mb-2.5">
          <span className="font-cursive text-2xl sm:text-3xl md:text-4xl text-[#FFE5BF] tracking-wide block drop-shadow-md">
            Celebrations Built Around Family
          </span>
        </div>

        {/* Location Tag */}
        <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-stone-200 drop-shadow-sm mb-3 sm:mb-4">
          <MapPin className="w-3.5 h-3.5 text-[#FFE5BF]" />
          <span>Kurji Mor · Patliputra · Patna</span>
        </div>

        {/* Clear, Factual Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.14] drop-shadow-lg">
          Wedding & Event Venue in Patna
          <span className="block text-lg sm:text-2xl md:text-3xl font-normal text-[#FFE5BF] mt-2 font-serif italic">
            3.5 Acres of Open Lawns, Ganga River-View Dining & Parking for 400+ Cars
          </span>
        </h1>

        {/* Clear, Informative Narrative */}
        <p className="mt-3 sm:mt-4 text-stone-200 text-xs sm:text-base max-w-2xl leading-relaxed font-sans font-normal drop-shadow-md">
          Located near Gate No. 62 at Kurji Mor, Patliputra, <strong className="text-white font-semibold">Raj Resort</strong> offers spacious outdoor lawns for 400 to 1,200+ guests, an air-conditioned banquet hall, and 25+ rooms for visiting relatives. With experience hosting over 400 celebrations, our team assists your family with custom stage setups, lighting, and dedicated catering.
        </p>

        {/* Action Buttons in Color Hunt Palette */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto">
          {/* Primary Action: WhatsApp Inquiry */}
          <a
            href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
              'Hello Raj Resort Patna, I would like to check wedding lawn and banquet date availability for our family event.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 bg-gradient-to-r from-[#F62440] to-[#D81B34] hover:from-[#E01A35] hover:to-[#BF132A] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xl shadow-[0_8px_25px_rgba(246,36,64,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-white/20"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Check Available Dates</span>
          </a>

          {/* Secondary Action: Explore Facilities */}
          <Link
            href="/weddings"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 bg-white/15 hover:bg-white/25 border border-[#FFE5BF]/40 text-white hover:text-stone-100 transition-all text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xl backdrop-blur-md cursor-pointer"
          >
            <span>View Lawns & Banquets</span>
            <ArrowRight className="w-4 h-4 text-[#FFE5BF]" />
          </Link>
        </div>

        {/* Confirmed Key Venue Highlights */}
        <div className="mt-6 sm:mt-10 pt-5 sm:pt-6 border-t border-white/20 w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div className="flex flex-col items-center justify-center gap-1 text-stone-200">
            <Sparkles className="w-4 h-4 text-[#FFE5BF]" />
            <span className="text-xs sm:text-sm font-semibold">3.5-Acre Property</span>
            <span className="text-[10px] text-stone-300">Open Lawns & Banquets</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 text-stone-200">
            <ShieldCheck className="w-4 h-4 text-[#FFE5BF]" />
            <span className="text-xs sm:text-sm font-semibold">400+ Car Parking</span>
            <span className="text-[10px] text-stone-300">Dedicated Valet Facility</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 text-stone-200">
            <UtensilsCrossed className="w-4 h-4 text-[#FFE5BF]" />
            <span className="text-xs sm:text-sm font-semibold">Ganga-View Dining</span>
            <span className="text-[10px] text-stone-300">Scenic Dine-In Area</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 text-stone-200">
            <Users className="w-4 h-4 text-[#FFE5BF]" />
            <span className="text-xs sm:text-sm font-semibold">25+ Guest Rooms</span>
            <span className="text-[10px] text-stone-300">On-Site Accommodation</span>
          </div>
        </div>

      </div>

    </section>
  );
};
