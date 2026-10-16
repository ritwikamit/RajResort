'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Zap, Car, ShieldCheck, MessageSquare, ArrowRight } from 'lucide-react';
import { VisualArt } from './VisualArt';
import { RESORT_DATA } from '@/data/resort-data';

export const HeroSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-14 transition-colors duration-300">
      
      {/* Background Realistic Resort Visual - Crystal Clear */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop"
              alt="Raj Resort Patna Luxury Grounds and Illuminated Lawn at Dusk"
              fill
              priority
              referrerPolicy="no-referrer"
              className="object-cover object-center scale-100"
              onError={() => setImageError(true)}
            />
            {/* Dark scrim to keep background rich and black-faded in both light and dark modes */}
            <div className="absolute inset-0 bg-black/55 pointer-events-none" />
          </div>
        ) : (
          <VisualArt type="hero" />
        )}
      </div>

      {/* Subtle lateral side edge fades into black tones with narrow width */}
      <div className="absolute inset-y-0 left-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-[2] pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-black/70 via-black/30 to-transparent z-[2] pointer-events-none" />

      {/* Subtle top & bottom dark blending */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/50 to-transparent z-[2] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-[2] pointer-events-none" />

      {/* Floating Transparent Hero Container with Animated Golden Border */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        
        {/* Animated Golden Border Envelope sticking flush to the transparent box */}
        <div className="animated-golden-border w-full shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          
          {/* Inner Fully Transparent Glass Panel - Simple & Minimal */}
          <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-black/45 dark:bg-black/60 backdrop-blur-md border border-white/30 text-white flex flex-col items-center text-center">
            
            {/* Location Kicker with Decorative Side Lines */}
            <div className="flex items-center justify-center gap-3 text-[11px] sm:text-xs uppercase font-serif tracking-[0.24em] font-bold text-amber-300 drop-shadow-sm mb-3">
              <span className="h-px w-6 sm:w-12 bg-gradient-to-r from-transparent to-amber-300/80" />
              <span>Kurji Mor · Patliputra · Patna</span>
              <span className="h-px w-6 sm:w-12 bg-gradient-to-l from-transparent to-amber-300/80" />
            </div>

            {/* Headline with High Contrast over Clear Photo */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-2xl text-balance leading-[1.15] drop-shadow-md">
              Grand Celebrations & Peaceful Stays in Patna
            </h1>

            {/* Simple, Minimal Story */}
            <p className="mt-4 text-stone-100 text-sm sm:text-base md:text-lg max-w-xl text-balance leading-relaxed font-sans font-medium drop-shadow-sm">
              Welcome to <strong className="text-amber-300 font-bold">Raj Resort</strong>. 
              An open-air celebration lawn for up to 1,200 guests, air-conditioned banquet halls, and quiet executive suites with 24/7 generator backup.
            </p>

            {/* Simple, Minimal Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              {/* Primary Book on WhatsApp */}
              <a
                href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Raj Resort Patna, I would like to book a stay / event. Please guide me with availability and packages.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 btn-red-gradient text-xs font-semibold tracking-wider uppercase rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-white"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Book on WhatsApp</span>
              </a>

              {/* Secondary Explore Lawns Link */}
              <Link
                href="/weddings"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/15 hover:bg-white/25 border border-white/30 text-white hover:text-amber-200 transition-all text-xs font-semibold tracking-wider uppercase rounded-xl backdrop-blur-sm cursor-pointer"
              >
                <span>Explore Wedding Lawns</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Simple Minimal Highlights (No stars, distinct contextual icons) */}
            <div className="mt-8 pt-6 border-t border-white/20 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center gap-1">
                <Users className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-semibold text-white">1,200+ Guest Lawn</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Zap className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-semibold text-white">24/7 Heavy Generator</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Car className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-semibold text-white">Gated Valet Parking</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-semibold text-white">AC Guest Suites</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
