'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Users, CheckCircle2, Calendar } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export const WeddingVenuesSection: React.FC = () => {
  const [activeVenueId, setActiveVenueId] = useState<string>(RESORT_DATA.venues[0].id);

  const activeVenue = RESORT_DATA.venues.find((v) => v.id === activeVenueId) || RESORT_DATA.venues[0];

  return (
    <section id="weddings" className="py-20 sm:py-28 bg-[#FAF7F9] dark:bg-[#120718] text-stone-900 dark:text-stone-100 border-t border-[#8E1EA2]/15 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-cursive text-3xl sm:text-4xl text-[#8E1EA2] dark:text-[#ED96D7] tracking-wide block mb-1">
              Made for Family Celebrations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Spaces Where You Feel at Home
            </h2>
          </div>
          <p className="text-stone-600 dark:text-stone-300 text-sm max-w-md leading-relaxed font-sans font-normal">
            From the Baraat dancing through the flower gate to parents blessing the couple at the mandap, each corner of our resort is prepared with care for your family.
          </p>
        </div>

        {/* Venue Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 border-b border-[#8E1EA2]/15 pb-5 mb-10">
          {RESORT_DATA.venues.map((venue) => {
            const isActive = venue.id === activeVenueId;
            return (
              <button
                key={venue.id}
                onClick={() => setActiveVenueId(venue.id)}
                className={`p-3.5 sm:p-4 text-left transition-all rounded-xl border cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#8E1EA2] to-[#C654C3] text-white border-transparent shadow-md'
                    : 'bg-white dark:bg-[#1E0B28] text-stone-800 dark:text-stone-200 border-[#8E1EA2]/20 hover:border-[#8E1EA2]'
                }`}
              >
                <div className="font-serif text-sm sm:text-base font-bold line-clamp-1">
                  {venue.name}
                </div>
                <div className={`text-[11px] mt-0.5 ${isActive ? 'text-[#FFC0DE]' : 'text-stone-500 dark:text-stone-400'}`}>
                  {venue.capacity}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Venue Showcase Card */}
        <div className="bg-white dark:bg-[#1A0A24] rounded-2xl sm:rounded-3xl border border-[#8E1EA2]/15 shadow-[0_16px_40px_rgba(142,30,162,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Real Venue Photography */}
            <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[440px] lg:min-h-[480px]">
              <Image
                src={activeVenue.image}
                alt={activeVenue.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={`object-cover ${activeVenue.id === 'floral-tunnel' ? 'object-top sm:object-center' : 'object-center'}`}
                priority
              />
              
              {/* Subtle edge shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Tag on image */}
              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#FFC0DE]">
                  {activeVenue.type}
                </span>
                <p className="font-serif text-lg sm:text-xl font-bold mt-0.5">
                  {activeVenue.name}
                </p>
              </div>
            </div>

            {/* Venue Details & Capacity */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#8E1EA2] dark:text-[#ED96D7]">
                  <Users className="w-4 h-4 text-[#8E1EA2]" />
                  <span>{activeVenue.capacity}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-50">
                  {activeVenue.name}
                </h3>

                <p className="font-cursive text-[#8E1EA2] dark:text-[#FFC0DE] text-xl sm:text-2xl leading-none">
                  {activeVenue.emotionalTag}
                </p>

                <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm leading-relaxed font-sans">
                  {activeVenue.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2 border-t border-[#8E1EA2]/15">
                  {activeVenue.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8E1EA2] dark:text-[#ED96D7] mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="pt-4 border-t border-[#8E1EA2]/15 flex items-center gap-3">
                <a
                  href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Raj Resort Patna, I am interested in booking "${activeVenue.name}" for our wedding. Please share packages and date availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-[#8E1EA2] to-[#C654C3] hover:from-[#7B188D] hover:to-[#B544B2] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-[0_4px_16px_rgba(142,30,162,0.25)] cursor-pointer"
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
