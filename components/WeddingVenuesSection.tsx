'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Users, Calendar } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export const WeddingVenuesSection: React.FC = () => {
  const [activeVenueId, setActiveVenueId] = useState<string>(RESORT_DATA.venues[0].id);

  const activeVenue = RESORT_DATA.venues.find((v) => v.id === activeVenueId) || RESORT_DATA.venues[0];
  const focalPoint = activeVenue.focalPoint || 'object-center';

  const currentPhotoInfo = {
    title: activeVenue.photoTitle || activeVenue.name,
    caption: activeVenue.photoCaption || activeVenue.description,
  };

  return (
    <section id="weddings" className="py-20 sm:py-28 bg-[#FFFAF3] dark:bg-[#181210] text-stone-900 dark:text-stone-100 border-t border-[#FFE5BF] dark:border-[#352520] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-cursive text-3xl sm:text-4xl text-[#F62440] tracking-wide block mb-1">
              Celebration Venues & Settings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Spaces Configured for Your Event
            </h2>
          </div>
          <p className="text-stone-700 dark:text-stone-300 text-sm max-w-md leading-relaxed font-sans font-normal">
            From the illuminated 150-foot floral walkway for Baraat arrivals and royal chariot entries to the starlit celebration lawn and grand Varmala stage, each setting is designed for unforgettable wedding ceremonies.
          </p>
        </div>

        {/* Venue Selector Tabs (6 Spaces) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 border-b border-[#FFE5BF] dark:border-[#352520] pb-5 mb-10">
          {RESORT_DATA.venues.map((venue) => {
            const isActive = venue.id === activeVenueId;
            return (
              <button
                key={venue.id}
                onClick={() => setActiveVenueId(venue.id)}
                className={`p-3 sm:p-3.5 text-left transition-all rounded-xl border cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F62440] to-[#D81B34] text-white border-transparent shadow-md'
                    : 'bg-white dark:bg-[#221A16] text-stone-800 dark:text-stone-200 border-[#FFE5BF] dark:border-[#352520] hover:border-[#F62440]/50'
                }`}
              >
                <div className="font-serif text-xs sm:text-sm font-bold line-clamp-1">
                  {venue.name}
                </div>
                <div className={`text-[10px] sm:text-[11px] mt-0.5 line-clamp-1 ${isActive ? 'text-[#FFE5BF]' : 'text-stone-500 dark:text-stone-400'}`}>
                  {venue.capacity}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Venue Showcase Card (No Thumbnails) */}
        <div className="bg-white dark:bg-[#201714] rounded-2xl sm:rounded-3xl border border-[#FFE5BF] dark:border-[#352520] shadow-[0_16px_40px_rgba(246,36,64,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Elegant Clean Full Photo Showcase - No Thumbnails */}
            <div className="lg:col-span-7 relative w-full h-[360px] sm:h-[440px] lg:h-[500px] overflow-hidden select-none bg-stone-900">
              <Image
                src={activeVenue.image}
                alt={`${activeVenue.name} - Wedding Venue & Banquet Hall at Raj Resort Patna`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={`object-cover ${focalPoint} transition-all duration-700`}
              />

              {/* Subtle bottom gradient shade */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

              {/* Bottom Tag on image */}
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white pointer-events-none">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#FFE5BF]">
                  {activeVenue.type}
                </span>
                <p className="font-serif text-lg sm:text-xl font-bold mt-0.5">
                  {activeVenue.name}
                </p>
              </div>
            </div>

            {/* Clean Venue & Details Panel */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-[#FFFAF3] dark:bg-[#201714]">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF2DB] dark:bg-[#2C1F1B] border border-[#FFE5BF] dark:border-[#3E2C26] text-xs font-semibold text-[#F62440]">
                  <Users className="w-3.5 h-3.5 text-[#F62440]" />
                  <span>{activeVenue.capacity}</span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-50">
                    {activeVenue.name}
                  </h3>
                  <p className="font-cursive text-[#F62440] text-xl sm:text-2xl mt-1 leading-none">
                    {activeVenue.emotionalTag}
                  </p>
                </div>

                {/* Photo Description as per the Authentic Image */}
                <div className="p-4 rounded-xl bg-white dark:bg-[#291F1A] border border-[#FFE5BF] dark:border-[#352520] shadow-xs space-y-2">
                  <div className="text-[11px] font-bold tracking-wider uppercase text-[#F62440]">
                    Authentic Venue Photograph
                  </div>
                  <h4 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100 leading-snug">
                    {currentPhotoInfo.title}
                  </h4>
                  <p className="text-stone-700 dark:text-stone-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {currentPhotoInfo.caption}
                  </p>
                </div>

                {/* Key Highlights of the Setting */}
                {activeVenue.highlights && activeVenue.highlights.length > 0 && (
                  <div className="space-y-2 pt-1">
                    {activeVenue.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F62440] mt-1.5 shrink-0" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* WhatsApp Inquiry Action */}
              <div className="pt-4 border-t border-[#FFE5BF] dark:border-[#352520]">
                <a
                  href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Raj Resort Patna, I am interested in booking "${activeVenue.name}" for our wedding. Please share packages and date availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-[#F62440] to-[#D81B34] hover:from-[#E01A35] hover:to-[#BF132A] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-[0_4px_16px_rgba(246,36,64,0.25)] cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Check Availability on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
