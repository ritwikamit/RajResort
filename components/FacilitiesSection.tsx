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
    <section id="facilities" className="py-20 bg-[#F5EFEB] dark:bg-[#0B100E] text-stone-900 dark:text-stone-100 border-t border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-widest text-[#99141A] dark:text-rose-400 uppercase mb-2">
            Comfort & Convenience · What We Offer
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Resort Facilities You Can Count On
          </h2>
          <p className="mt-3.5 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
            Everything you need for an uninterrupted wedding ceremony or a peaceful stay with your family in Patna.
          </p>
        </div>

        {/* Facilities Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RESORT_DATA.facilities.map((fac, idx) => (
            <div
              key={fac.title}
              className="p-6 bg-white/85 dark:bg-stone-900/85 backdrop-blur-xl border border-white/95 dark:border-stone-800 hover:border-[#99141A]/50 dark:hover:border-rose-400/50 transition-all duration-300 flex flex-col justify-between rounded-2xl shadow-[0_8px_25px_rgba(153,20,26,0.04)] hover:shadow-lg group"
            >
              <div>
                <div className="w-11 h-11 mb-4 flex items-center justify-center bg-[#99141A]/10 dark:bg-rose-950/40 text-[#99141A] dark:text-rose-400 group-hover:bg-[#99141A] group-hover:text-white transition-colors rounded-xl">
                  {iconMap[fac.iconName] || <Sparkles className="w-5 h-5" />}
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#99141A] dark:group-hover:text-rose-400 transition-colors mb-2">
                  {fac.title}
                </h3>

                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  {fac.detail}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-200/80 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-sans">
                <span className="font-semibold text-[#99141A] dark:text-rose-400">Always Included</span>
                <span className="text-stone-400 dark:text-stone-500">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
