'use client';

import React from 'react';
import { 
  Heart, 
  Users, 
  Zap, 
  Sparkles, 
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
  { text: 'WEDDINGS & CELEBRATIONS UNDER THE STARS', icon: Heart },
  { text: 'OPEN LAWN FOR 400 TO 1,200+ GUESTS', icon: Users },
  { text: 'CONTINUOUS GENERATOR BACKUP (ZERO POWER CUTS)', icon: Zap },
  { text: 'FLOWER WALKWAY FOR BARAAT ARRIVAL', icon: Sparkles },
  { text: 'SHAHI DARBAR AIR-CONDITIONED BANQUET HALL', icon: Building2 },
  { text: 'GATED PARKING WITH SECURITY GUARDS', icon: Car },
  { text: 'SPACIOUS DINING FOR FAMILY HALWAIS & BUFFETS', icon: UtensilsCrossed },
  { text: 'GATE 62, KURJI MOR, PATLIPUTRA, PATNA', icon: MapPin },
  { text: 'CARING EVENT STAFF ON STANDBY', icon: PhoneCall },
];

export const MovingTextTicker: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#1E0509] via-[#F62440] to-[#1E0509] text-white py-3 sm:py-3.5 border-y border-[#FFE5BF]/30 shadow-[0_4px_20px_rgba(246,36,64,0.22)] select-none z-20">
      
      {/* Subtle edge fades for ribbon */}
      <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#1E0509] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#1E0509] to-transparent z-10 pointer-events-none" />

      {/* Scrolling Track */}
      <div className="animate-marquee-left flex items-center">
        {/* Set 1 */}
        {TICKER_ITEMS.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={`set1-${index}`} className="flex items-center gap-3 px-6 text-xs sm:text-sm font-semibold tracking-widest whitespace-nowrap">
              <Icon className="w-3.5 h-3.5 text-[#FFE5BF] shrink-0" />
              <span className="text-white font-serif">{item.text}</span>
              <span className="text-[#FFE5BF]/70 text-xs">•</span>
            </div>
          );
        })}
        {/* Set 2 (for seamless infinite loop) */}
        {TICKER_ITEMS.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={`set2-${index}`} className="flex items-center gap-3 px-6 text-xs sm:text-sm font-semibold tracking-widest whitespace-nowrap">
              <Icon className="w-3.5 h-3.5 text-[#FFE5BF] shrink-0" />
              <span className="text-white font-serif">{item.text}</span>
              <span className="text-[#FFE5BF]/70 text-xs">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
