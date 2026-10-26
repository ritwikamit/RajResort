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
    <section id="facilities" className="py-20 sm:py-28 bg-[#FFFAF3] dark:bg-[#181210] text-stone-900 dark:text-stone-100 border-t border-[#FFE5BF] dark:border-[#352520] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-cursive text-3xl sm:text-4xl text-[#F62440] tracking-wide block mb-1">
            Venue Facilities & Infrastructure
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Designed for Smooth Family Gatherings
          </h2>
          <p className="mt-3.5 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
            Spread across 3.5 acres near Kurji Mor, Raj Resort provides dedicated parking for 400+ cars, on-site guest rooms, river-view dining, and continuous power backup to keep your event running seamlessly.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {RESORT_DATA.facilities.map((fac) => (
            <div
              key={fac.title}
              className="p-6 sm:p-7 bg-white dark:bg-[#201714] border border-[#FFE5BF] dark:border-[#352520] hover:border-[#F62440]/50 transition-all duration-300 flex flex-col justify-between rounded-2xl shadow-[0_4px_20px_rgba(246,36,64,0.03)] hover:shadow-lg group"
            >
              <div>
                <div className="w-11 h-11 mb-4 flex items-center justify-center bg-[#FFF2DB] dark:bg-[#2C1F1B] text-[#F62440] group-hover:bg-gradient-to-r group-hover:from-[#F62440] group-hover:to-[#D81B34] group-hover:text-white transition-all rounded-xl">
                  {iconMap[fac.iconName] || <Sparkles className="w-5 h-5" />}
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                  {fac.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans font-normal">
                  {fac.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#FFE5BF]/40 dark:border-[#352520] flex items-center gap-1.5 text-[11px] font-semibold text-[#F62440]">
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
