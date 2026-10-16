'use client';

import React from 'react';
import { 
  Heart, 
  Users, 
  Zap, 
  Hotel, 
  Building2, 
  Car, 
  UtensilsCrossed, 
  MapPin, 
  PhoneCall 
} from 'lucide-react';

interface TickerEntry {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TICKER_ITEMS: TickerEntry[] = [
  { text: 'ROYAL WEDDINGS & STARLIT CELEBRATIONS', icon: Heart },
  { text: 'LAWN CAPACITY FOR 300 TO 1,200+ GUESTS', icon: Users },
  { text: '24/7 HEAVY GENERATOR BACKUP (ZERO POWER OUTAGES)', icon: Zap },
  { text: 'PEACEFUL AC EXECUTIVE ROOMS & BRIDAL SUITES', icon: Hotel },
  { text: 'SHAHI DARBAR AIR-CONDITIONED BANQUET HALL', icon: Building2 },
  { text: 'GATED SECURE CAR PARKING & FREE VALET', icon: Car },
  { text: 'EXQUISITE MULTI-CUISINE CATERING & FLORAL MANDAP', icon: UtensilsCrossed },
  { text: 'PRIME LOCATION: KURJI MOR, PATLIPUTRA, PATNA', icon: MapPin },
  { text: 'INSTANT WHATSAPP BOOKING & 24/7 FRONT DESK', icon: PhoneCall },
];

export const MovingTextTicker: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#7A0C11] via-[#99141A] to-[#600A0E] text-white py-3.5 border-y border-amber-400/30 shadow-[0_4px_20px_rgba(153,20,26,0.3)] select-none z-20">
      
      {/* Subtle edge fades for ribbon */}
      <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#7A0C11] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#600A0E] to-transparent z-10 pointer-events-none" />

      {/* Scrolling Track */}
      <div className="animate-marquee-left flex items-center">
        {/* Set 1 */}
        {TICKER_ITEMS.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={`set1-${index}`} className="flex items-center gap-3 px-6 text-xs sm:text-sm font-bold tracking-widest whitespace-nowrap">
              <Icon className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="text-white drop-shadow-xs font-serif">{item.text}</span>
              <span className="text-amber-400/60 text-xs">/</span>
            </div>
          );
        })}
        {/* Set 2 (for seamless infinite loop) */}
        {TICKER_ITEMS.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={`set2-${index}`} className="flex items-center gap-3 px-6 text-xs sm:text-sm font-bold tracking-widest whitespace-nowrap">
              <Icon className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="text-white drop-shadow-xs font-serif">{item.text}</span>
              <span className="text-amber-400/60 text-xs">/</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
