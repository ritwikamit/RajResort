'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Sparkles, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export const SpecialWeddingStory: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] dark:bg-[#0A0D0E] text-stone-900 dark:text-stone-100 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Real Venue Photo (landingPage3.png) with Soft Side Fade */}
          <div className="lg:col-span-7 relative group">
            
            {/* Image Frame with Lateral Soft Edge Fade */}
            <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-stone-200/80 dark:border-white/10">
              <Image
                src="/images/landingpage3.png"
                alt="Raj Resort Patna Starlit Lawn and Grand Ceremonial Wedding Stage Setup"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                priority
              />
              
              {/* Soft Side & Edge Vignette */}
              <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Caption Overlay */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white pointer-events-none">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-stone-200">
                  Real Ceremony Setup · Kurji Mor, Patliputra
                </span>
                <p className="font-serif text-base sm:text-xl font-bold mt-1 drop-shadow-md">
                  The Starlit Stage at Raj Resort Patna
                </p>
              </div>
            </div>

            {/* Subtle Behind Ambient Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#6E1217]/10 to-transparent rounded-3xl blur-2xl -z-10 opacity-70 pointer-events-none" />
          </div>

          {/* Right Column: Heart-Touching Emotional Content */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Cursive Accent Kicker */}
            <div>
              <span className="font-cursive text-3xl sm:text-4xl text-[#8E1B21] dark:text-rose-300 tracking-wide block mb-1">
                A Sacred Family Trust
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-[1.2]">
                Where Every Promise Becomes an Eternal Legacy
              </h2>
            </div>

            {/* Culturally Grounded Emotional Narrative */}
            <div className="space-y-4 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
              <p>
                In Bihar, a wedding is never merely an event—it is the sacred union of two families, 
                the proudest evening of a father’s life, and a mother’s lifelong prayers made visible.
              </p>
              <p>
                At <strong className="text-stone-900 dark:text-white font-semibold">Raj Resort Patna</strong>, 
                we hold your family’s honor as our sacred trust. From the joyful arrival of the Baraat under our 
                150-foot illuminated floral pergola to the sacred Saat Phere beneath open starlit skies, 
                we take care of every detail so you can embrace your loved ones without a moment of stress.
              </p>
              <p>
                With pure-air celebration lawns accommodating over 1,200 guests, heavy industrial generator backup that guarantees zero power interruptions, and an attentive team at Kurji Mor, your wedding will be spoken of with fondness for years to come.
              </p>
            </div>

            {/* Quiet Luxury Guarantees */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-stone-800 dark:text-stone-200 font-sans border-t border-stone-200 dark:border-stone-800">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#8E1B21] dark:text-rose-400 shrink-0" />
                <span>Personal Family Care</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8E1B21] dark:text-rose-400 shrink-0" />
                <span>100% Power Guarantee</span>
              </div>
            </div>

            {/* Contact & Date Inquiry */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Raj Resort Patna, I would like to discuss our family wedding plans and check venue availability.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#141618] hover:bg-[#25282C] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Wedding Dates</span>
              </a>

              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-transparent hover:bg-stone-200/50 dark:hover:bg-white/5 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold tracking-wider uppercase rounded-xl transition-colors cursor-pointer"
              >
                <span>View Event Gallery</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
