'use client';

import React from 'react';
import Link from 'next/link';
import { MessageSquare, ArrowRight, Calendar, Users, Zap, MapPin } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[94vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-12 sm:pb-20">
      
      {/* Background Video: LandingHeroSection.mp4 */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-[1.02]"
        >
          <source src="/LandingHeroSection.mp4" type="video/mp4" />
        </video>

        {/* Sophisticated Luxury Scrim for Crystal-Clear Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80 pointer-events-none" />
      </div>

      {/* Lateral Side Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-8 sm:w-28 md:w-40 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-[2] pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 sm:w-28 md:w-40 bg-gradient-to-l from-black/85 via-black/40 to-transparent z-[2] pointer-events-none" />

      {/* Top & Bottom Ambient Blends */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/80 to-transparent z-[2] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-[2] pointer-events-none" />

      {/* Content Container - Smartphone & Desktop Optimized */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        
        {/* Emotional Kicker in Royal Cursive Font */}
        <div className="mb-2 sm:mb-3">
          <span className="font-cursive text-3xl sm:text-4xl md:text-5xl text-[#F2E6D8] drop-shadow-md tracking-wide">
            Where Forever Begins Under the Starlit Sky
          </span>
        </div>

        {/* Location & Heritage Tag */}
        <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-stone-300 drop-shadow-sm mb-4 sm:mb-5">
          <MapPin className="w-3.5 h-3.5 text-stone-300" />
          <span>Kurji Mor · Patliputra · Patna</span>
        </div>

        {/* Grand Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.15] drop-shadow-lg">
          Where Patna Celebrates Sacred Vows & Royal Weddings
        </h1>

        {/* Emotional Family Narrative */}
        <p className="mt-4 sm:mt-5 text-stone-200 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-sans font-normal drop-shadow-md">
          From your daughter’s emotional Varmala under open starlit skies to welcoming hundreds of beloved relatives with royal warmth, 
          <strong className="text-white font-semibold"> Raj Resort</strong> turns your family’s most sacred dreams into memories that outlive generations.
        </p>

        {/* Refined Action Buttons - Premium Palette, Touch Friendly */}
        <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Primary Action: Check Wedding Dates on WhatsApp */}
          <a
            href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
              'Hello Raj Resort Patna, I would like to check wedding lawn and banquet date availability for our family event.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 bg-[#F5EFEB] hover:bg-white text-stone-900 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-stone-900" />
            <span>Check Wedding Dates</span>
          </a>

          {/* Secondary Action: Explore Grand Lawns */}
          <Link
            href="/weddings"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 border border-white/25 text-white hover:text-stone-100 transition-all text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xl backdrop-blur-md cursor-pointer"
          >
            <span>Explore Venues & Lawns</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Quiet Luxury Key Facts (NO cylinders, NO pulsating dots, NO stars) */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/15 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
          <div className="flex items-center justify-center gap-2.5 text-stone-200">
            <Users className="w-4 h-4 text-stone-300 shrink-0" />
            <span className="text-xs sm:text-sm font-medium">1,200+ Guest Starlit Lawn</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-stone-200">
            <Zap className="w-4 h-4 text-stone-300 shrink-0" />
            <span className="text-xs sm:text-sm font-medium">100% Industrial Generator Power</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-stone-200">
            <MapPin className="w-4 h-4 text-stone-300 shrink-0" />
            <span className="text-xs sm:text-sm font-medium">Gate 62, Kurji Mor, Patliputra</span>
          </div>
        </div>

      </div>

    </section>
  );
};
