'use client';

import React from 'react';
import { MapPin, Navigation, ExternalLink, Clock, Compass } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export const GoogleMapsSection: React.FC = () => {
  return (
    <section id="google-maps" className="py-16 bg-[#F5EFEB] dark:bg-[#0A0F0D] text-stone-900 dark:text-stone-100 border-t border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#99141A] dark:text-rose-400 uppercase mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Location Coordinates</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Find Raj Resort on Google Maps
            </h2>
            <p className="mt-1 text-stone-600 dark:text-stone-300 text-xs sm:text-sm font-sans max-w-xl">
              Conveniently located near Gate No. 62, Kurji Mor, Patliputra, Patna. Easy access for guests, wedding entourages, and private vehicles.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={RESORT_DATA.directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 btn-red-gradient text-xs font-semibold uppercase tracking-wider rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Navigation className="w-4 h-4 text-white" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/80" />
            </a>
          </div>
        </div>

        {/* Small Responsive Map Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Interactive Google Map Embed (8 cols) */}
          <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-stone-300/80 dark:border-stone-700 shadow-md relative min-h-[340px] sm:min-h-[380px] bg-stone-200 dark:bg-stone-800">
            <iframe
              title="Raj Resort Patna Google Map Location"
              src="https://maps.google.com/maps?q=25.6391525,85.1102531+(Raj+Resort+Patna)&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[340px] sm:min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Quick Travel Landmarks & Address (4 cols) */}
          <div className="lg:col-span-4 bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl border border-stone-200 dark:border-stone-800 p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-start gap-3 mb-4 pb-4 border-b border-stone-200 dark:border-stone-800">
                <MapPin className="w-5 h-5 text-[#99141A] dark:text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">
                    Exact Address
                  </h3>
                  <p className="text-xs text-stone-700 dark:text-stone-300 mt-1 leading-relaxed">
                    {RESORT_DATA.fullAddress}
                  </p>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                    Near Gate No. 62, Kurji Mor, Patliputra
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-stone-700 dark:text-stone-300">
                <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Key Landmark Distances
                </div>
                
                <div className="flex items-center justify-between py-1 border-b border-stone-100 dark:border-stone-800">
                  <span>Kurji Mor (Main Road)</span>
                  <span className="font-bold text-stone-900 dark:text-stone-100">~150 meters</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-stone-100 dark:border-stone-800">
                  <span>Patliputra Junction</span>
                  <span className="font-bold text-stone-900 dark:text-stone-100">3.8 km</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-stone-100 dark:border-stone-800">
                  <span>Patna Railway Station</span>
                  <span className="font-bold text-stone-900 dark:text-stone-100">7.5 km</span>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span>Patna Airport (JPN)</span>
                  <span className="font-bold text-stone-900 dark:text-stone-100">9.2 km</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
              <a
                href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Raj Resort, please share live location pin and driving directions from my current location.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>Request Live Pin on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
