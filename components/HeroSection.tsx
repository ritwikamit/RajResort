'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Users, Zap, MapPin } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden pt-20 pb-8 sm:pt-28 sm:pb-16 select-none">
      
      {/* Background Video: LandingHeroSection.mp4 - Pristine Quality, No Zoom Distortions */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        >
          <source src="/LandingHeroSection.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Luxury Scrim with Subtle Rose-Plum Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-[#16061C]/50 to-black/75 pointer-events-none" />
      </div>

      {/* Subtle Lateral Side Edge Fades (Delicate 3-4% side vignette only) */}
      <div className="absolute inset-y-0 left-0 w-4 sm:w-16 bg-gradient-to-r from-black/60 to-transparent z-[2] pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-4 sm:w-16 bg-gradient-to-l from-black/60 to-transparent z-[2] pointer-events-none" />

      {/* Top and Bottom Atmosphere Blends */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/70 to-transparent z-[2] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent z-[2] pointer-events-none" />

      {/* Content Container - Compact and Fully Visible on Smartphone & Desktop */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full my-auto">
        
        {/* Emotional Kicker in Authentic Cursive Font (No Where Forever Begins text) */}
        <div className="mb-2 sm:mb-2.5">
          <span className="font-cursive text-2xl sm:text-3xl md:text-4xl text-[#FFC0DE] tracking-wide block drop-shadow-md">
            Sacred Vows & Royal Family Celebrations
          </span>
        </div>

        {/* Location & Heritage Tag */}
        <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-stone-200 drop-shadow-sm mb-3 sm:mb-4">
          <MapPin className="w-3.5 h-3.5 text-[#ED96D7]" />
          <span>Kurji Mor · Patliputra · Patna</span>
        </div>

        {/* Grand Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.12] drop-shadow-lg">
          Where Patna Celebrates Sacred Vows & Royal Weddings
        </h1>

        {/* Emotional Family Narrative */}
        <p className="mt-3 sm:mt-4 text-stone-200 text-xs sm:text-base max-w-2xl leading-relaxed font-sans font-normal drop-shadow-md">
          From your daughter’s emotional Varmala under open starlit skies to welcoming hundreds of beloved relatives with royal warmth, 
          <strong className="text-white font-semibold"> Raj Resort</strong> turns your family’s most sacred dreams into memories that outlive generations.
        </p>

        {/* Refined Action Buttons - Premium Color Hunt Palette */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto">
          {/* Primary Action: Check Wedding Dates on WhatsApp */}
          <a
            href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
              'Hello Raj Resort Patna, I would like to check wedding lawn and banquet date availability for our family event.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 bg-gradient-to-r from-[#8E1EA2] to-[#C654C3] hover:from-[#7B188D] hover:to-[#B544B2] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xl shadow-[0_8px_25px_rgba(142,30,162,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-white/20"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Check Wedding Dates</span>
          </a>

          {/* Secondary Action: Explore Grand Lawns */}
          <Link
            href="/weddings"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 bg-white/15 hover:bg-white/25 border border-[#ED96D7]/40 text-white hover:text-stone-100 transition-all text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xl backdrop-blur-md cursor-pointer"
          >
            <span>Explore Venues & Lawns</span>
            <ArrowRight className="w-4 h-4 text-[#FFC0DE]" />
          </Link>
        </div>

        {/* Key Venue Highlights (Clean, NO cylinders, NO pulsating dots, NO star icons) */}
        <div className="mt-6 sm:mt-10 pt-5 sm:pt-6 border-t border-white/20 w-full grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-6 text-center">
          <div className="flex items-center justify-center gap-2 text-stone-200">
            <Users className="w-4 h-4 text-[#ED96D7] shrink-0" />
            <span className="text-xs sm:text-sm font-medium">1,200+ Guest Starlit Lawn</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-stone-200">
            <Zap className="w-4 h-4 text-[#ED96D7] shrink-0" />
            <span className="text-xs sm:text-sm font-medium">100% Industrial Generator Backup</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-stone-200">
            <MapPin className="w-4 h-4 text-[#ED96D7] shrink-0" />
            <span className="text-xs sm:text-sm font-medium">Gate 62, Kurji Mor, Patliputra</span>
          </div>
        </div>

      </div>

    </section>
  );
};
