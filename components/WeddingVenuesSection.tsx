'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Users, CheckCircle2, ArrowRight, Heart } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';
import { VisualArt } from './VisualArt';

export const WeddingVenuesSection: React.FC = () => {
  const [activeVenueId, setActiveVenueId] = useState<string>(RESORT_DATA.venues[0].id);
  const [venueImgError, setVenueImgError] = useState<Record<string, boolean>>({});

  const activeVenue = RESORT_DATA.venues.find((v) => v.id === activeVenueId) || RESORT_DATA.venues[0];

  const getVisualType = (id: string): 'wedding-lawn' | 'floral-pergola' | 'banquet-hall' | 'family-suite' => {
    switch (id) {
      case 'royal-lawn':
        return 'wedding-lawn';
      case 'floral-tunnel':
        return 'floral-pergola';
      case 'shahi-darbar':
        return 'banquet-hall';
      case 'bridal-suites':
      default:
        return 'family-suite';
    }
  };

  return (
    <section id="weddings" className="py-20 bg-[#F5EFEB] dark:bg-[#0B100E] text-stone-900 dark:text-stone-100 border-t border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#99141A] dark:text-rose-400 uppercase mb-3">
              <Heart className="w-3.5 h-3.5 text-[#99141A] dark:text-rose-400 fill-current" />
              <span>Patliputra Celebrations · Lawns & Halls</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Weddings Celebrated with Family Warmth & Grand Tradition
            </h2>
          </div>
          <p className="text-stone-700 dark:text-stone-300 text-sm max-w-md leading-relaxed font-sans font-medium">
            From your grand Baraat entry along the illuminated pergola to the sacred Varmala on our lotus stage, 
            we have every setup ready so your family can celebrate without worry.
          </p>
        </div>

        {/* Venue Selector Tabs - Red Gradient Active */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 border-b border-stone-200 dark:border-stone-800 pb-5 mb-10">
          {RESORT_DATA.venues.map((venue) => {
            const isActive = venue.id === activeVenueId;
            return (
              <button
                key={venue.id}
                onClick={() => setActiveVenueId(venue.id)}
                className={`p-4 text-left transition-all rounded-xl border cursor-pointer ${
                  isActive
                    ? 'btn-red-gradient border-transparent text-white shadow-md scale-102'
                    : 'bg-white/90 dark:bg-stone-900/90 border-stone-200/90 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:text-[#99141A] dark:hover:text-rose-300 hover:border-[#99141A]/40'
                }`}
              >
                <div className={`text-[10px] uppercase tracking-wider font-semibold ${isActive ? 'text-rose-100' : 'text-[#99141A] dark:text-rose-400'}`}>
                  {venue.type}
                </div>
                <div className="font-serif font-bold text-sm sm:text-base mt-1 line-clamp-1">
                  {venue.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Venue Showcase with Translucent Glass & Animated Moving Border */}
        <div className="animated-moving-border p-[2px] rounded-3xl shadow-[0_16px_50px_rgba(153,20,26,0.12)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white/90 dark:bg-stone-900/90 backdrop-blur-2xl p-6 sm:p-8 md:p-10 rounded-3xl border border-white/60 dark:border-stone-800">
            
            {/* Visual Presentation */}
            <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-[460px] border border-stone-200 dark:border-stone-700/80 bg-[#FAF6F0] dark:bg-[#121815] overflow-hidden rounded-2xl shadow-inner">
              {activeVenue.image && !venueImgError[activeVenue.id] ? (
                <div className="relative w-full h-full min-h-[340px]">
                  <Image
                    src={activeVenue.image}
                    alt={activeVenue.name}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    onError={() => setVenueImgError((prev) => ({ ...prev, [activeVenue.id]: true }))}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              ) : (
                <VisualArt type={getVisualType(activeVenue.id)} />
              )}
            </div>

            {/* Venue Content & Specifications */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-bold tracking-wider text-[#99141A] dark:text-rose-400 uppercase mb-1">
                  {activeVenue.type}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-50">
                  {activeVenue.name}
                </h3>

                {/* Capacity Banner */}
                <div className="flex items-center gap-2 py-3 my-3 border-y border-stone-200 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 font-sans">
                  <Users className="w-4 h-4 text-[#99141A] dark:text-rose-400 shrink-0" />
                  <span>Guest Capacity:</span>
                  <span className="font-bold text-[#99141A] dark:text-rose-400">
                    {activeVenue.capacity}
                  </span>
                </div>

                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-6 font-sans">
                  {activeVenue.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-bold tracking-wider uppercase text-stone-800 dark:text-stone-200">
                    What Makes This Venue Special
                  </div>
                  {activeVenue.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-stone-700 dark:text-stone-300 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#99141A] dark:text-rose-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA action strip with Red Gradient Button redirecting directly to WhatsApp */}
              <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Raj Resort Patna, I would like to check availability and book ${activeVenue.name} for our upcoming wedding celebration. Please share available dates and packages.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 btn-red-gradient text-xs font-semibold tracking-wider uppercase rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-white"
                >
                  <span>Book Date on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${RESORT_DATA.phone.replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto px-5 py-3.5 bg-white/90 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 hover:border-[#99141A] text-stone-800 dark:text-stone-200 hover:text-[#99141A] transition-colors text-xs font-semibold tracking-wider uppercase rounded-xl text-center cursor-pointer"
                >
                  Call Front Desk
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
