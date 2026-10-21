'use client';

import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export const DirectionsSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-[#F5EFEB] dark:bg-[#0B100E] text-stone-900 dark:text-stone-100 border-t border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold tracking-widest text-[#99141A] dark:text-rose-400 uppercase mb-2">
            Patliputra · Kurji Mor · Patna
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            How to Reach Raj Resort
          </h2>
          <p className="mt-3 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
            Raj Resort is situated right next to Gate No. 62 at Kurji Mor, Patliputra. 
            Convenient for family cars and wedding guests traveling from Patliputra Junction (3.8 km), Patna Junction (7.5 km), and Jay Prakash Narayan Airport (9.2 km).
          </p>
        </div>

        {/* 2-Column Split: Map Card + Transit Distances */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Property Coordinates & Map Visual Card with Animated Border */}
          <div className="lg:col-span-7 animated-moving-border p-[2px] rounded-2xl shadow-[0_12px_36px_rgba(153,20,26,0.06)]">
            <div className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between rounded-2xl">
              <div>
                <div className="flex items-start gap-3.5 mb-6">
                  <MapPin className="w-5 h-5 text-[#99141A] dark:text-rose-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                      Raj Resort Patna
                    </h3>
                    <p className="text-sm text-stone-700 dark:text-stone-300 mt-1 leading-relaxed">
                      {RESORT_DATA.fullAddress}
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-sans mt-1">
                      Near Gate No. 62, Kurji Mor, Patliputra
                    </p>
                  </div>
                </div>

                {/* Map Illustration / Visual Preview */}
                <div className="relative w-full aspect-[16/9] bg-[#FAF6EE] dark:bg-[#121815] border border-stone-200 dark:border-stone-700/80 overflow-hidden mb-6 rounded-xl shadow-inner">
                  <svg viewBox="0 0 600 340" className="w-full h-full object-cover" fill="none">
                    <rect width="600" height="340" fill="#FAF6EE" className="dark:fill-[#121815]" />
                    
                    {/* Ganga River at top / north */}
                    <path d="M0 40 Q150 70 300 45 Q450 20 600 50 L600 0 L0 0 Z" fill="#D2E8E0" className="dark:fill-[#163026]" />
                    <text x="300" y="32" textAnchor="middle" fill="#2E694B" className="dark:fill-[#4E9976]" fontSize="11" fontFamily="sans-serif" fontWeight="bold" letterSpacing="2">
                      GANGA RIVER (MARINE DRIVE / DIGHA)
                    </text>

                    {/* Major Road Arteries */}
                    <path d="M0 120 Q300 110 600 130" stroke="#DFD5C2" className="dark:stroke-[#2A3B32]" strokeWidth="12" />
                    <path d="M0 120 Q300 110 600 130" stroke="#99141A" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6" />
                    <text x="140" y="105" fill="#786B5A" className="dark:fill-[#A3B8AD]" fontSize="9" fontWeight="bold" letterSpacing="1">KURJI MAIN ROAD</text>

                    {/* Patliputra Main Road */}
                    <path d="M380 40 L380 340" stroke="#DFD5C2" className="dark:stroke-[#2A3B32]" strokeWidth="12" />
                    <path d="M380 40 L380 340" stroke="#99141A" strokeWidth="1.5" strokeDasharray="8 8" opacity="0.6" />
                    <text x="395" y="280" fill="#786B5A" className="dark:fill-[#A3B8AD]" fontSize="9" fontWeight="bold" letterSpacing="1">TO PATLIPUTRA JUNCTION</text>

                    {/* Kurji Mor Junction */}
                    <circle cx="380" cy="120" r="14" fill="#FFFFFF" className="dark:fill-[#1A2620]" stroke="#99141A" strokeWidth="2.5" />
                    <text x="340" y="145" fill="#99141A" className="dark:fill-rose-400" fontSize="10" fontWeight="bold">Kurji Mor (Gate 62)</text>

                    {/* Access lane to Raj Resort */}
                    <path d="M380 120 L460 170" stroke="#99141A" strokeWidth="4" strokeDasharray="3 3" />
                    
                    {/* Raj Resort Landmark Pin */}
                    <g transform="translate(460, 170)">
                      <rect x="-60" y="-45" width="120" height="30" fill="#99141A" stroke="#FFFFFF" strokeWidth="1.5" rx="4" />
                      <text x="0" y="-26" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="serif" letterSpacing="1">
                        RAJ RESORT
                      </text>
                      <polygon points="0,0 -8,-15 8,-15" fill="#99141A" />
                      <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />
                    </g>

                    {/* Surrounding Landmarks */}
                    <g fill="#574F44" className="dark:fill-[#A3B8AD]" fontSize="9" fontWeight="600">
                      <circle cx="280" cy="115" r="4" fill="#D97706" />
                      <text x="270" y="100">Holy Family Hospital</text>

                      <circle cx="380" cy="300" r="4" fill="#3B82F6" />
                      <text x="310" y="315">Patliputra Station (3.8 km)</text>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Direct Google Maps Action Button in Red Gradient */}
              <a
                href={RESORT_DATA.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#141618] hover:bg-[#25282C] text-white text-xs font-semibold tracking-wider uppercase rounded-xl shadow-md transition-colors"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>Open in Google Maps Navigation</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Transit Points & Proximity Table (5 Cols) */}
          <div className="lg:col-span-5 bg-white/85 dark:bg-stone-900/85 backdrop-blur-xl border border-white/95 dark:border-stone-800 shadow-[0_12px_36px_rgba(153,20,26,0.06)] p-6 sm:p-7 rounded-2xl">
            <div className="flex items-center gap-2 pb-3 border-b border-stone-200 dark:border-stone-800 mb-5">
              <Compass className="w-4 h-4 text-[#99141A] dark:text-rose-400" />
              <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                Distances & Travel Time
              </h3>
            </div>

            <p className="text-xs text-stone-600 dark:text-stone-300 mb-5 leading-relaxed">
              Here is how close we are to major railway stations, hospitals, and the airport in Patna:
            </p>

            <div className="divide-y divide-stone-200 dark:divide-stone-800 font-sans">
              {RESORT_DATA.transitPoints.map((tp) => (
                <div key={tp.destination} className="py-3.5 flex items-center justify-between text-xs">
                  <div className="text-stone-800 dark:text-stone-200 font-medium">
                    {tp.destination}
                  </div>
                  <div className="text-right shrink-0 ml-4 font-sans">
                    <span className="text-[#99141A] dark:text-rose-400 font-bold">
                      {tp.distance}
                    </span>
                    <span className="text-stone-500 dark:text-stone-400 ml-1.5 text-[11px]">
                      ({tp.duration})
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-[#FAF7F2] dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/80 text-xs text-stone-700 dark:text-stone-300 leading-relaxed rounded-xl">
              <p>
                <strong className="text-stone-900 dark:text-stone-100">Need Help Finding Us?</strong> Our front desk is happy to speak directly to your driver or cab at Kurji Mor Gate 62 anytime.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
