'use client';

import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Wifi, 
  Wind, 
  CheckCircle2, 
  Clock, 
  UtensilsCrossed, 
  MapPin,
  Sparkles
} from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Wifi: <Wifi className="w-5 h-5" />,
  Wind: <Wind className="w-5 h-5" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  UtensilsCrossed: <UtensilsCrossed className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
};

export const FacilitiesSection: React.FC = () => {
  return (
    <section id="facilities" className="py-20 sm:py-28 bg-[#FAF7F9] dark:bg-[#120718] text-stone-900 dark:text-stone-100 border-t border-[#8E1EA2]/15 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-cursive text-3xl sm:text-4xl text-[#8E1EA2] dark:text-[#ED96D7] tracking-wide block mb-1">
            Reliable Infrastructure & Care
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Venue Facilities for Seamless Celebrations
          </h2>
          <p className="mt-3.5 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
            Everything in place so your family can focus solely on celebrations, blessings, and warm hospitality in Patna.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {RESORT_DATA.facilities.map((fac) => (
            <div
              key={fac.title}
              className="p-6 sm:p-7 bg-white dark:bg-[#1C0B26] border border-[#8E1EA2]/15 hover:border-[#8E1EA2]/40 transition-all duration-300 flex flex-col justify-between rounded-2xl shadow-[0_4px_20px_rgba(142,30,162,0.04)] hover:shadow-lg group"
            >
              <div>
                <div className="w-11 h-11 mb-4 flex items-center justify-center bg-[#FFC0DE]/30 text-[#8E1EA2] group-hover:bg-gradient-to-r group-hover:from-[#8E1EA2] group-hover:to-[#C654C3] group-hover:text-white transition-all rounded-xl">
                  {iconMap[fac.iconName] || <Sparkles className="w-5 h-5" />}
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                  {fac.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans font-normal">
                  {fac.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#8E1EA2]/10 flex items-center gap-1.5 text-[11px] font-semibold text-[#8E1EA2] dark:text-[#ED96D7]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Facility at Kurji Mor</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
