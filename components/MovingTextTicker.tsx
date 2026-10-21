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
  { text: 'ROYAL WEDDINGS & STARLIT CELEBRATIONS', icon: Heart },
  { text: 'OPEN LAWN CAPACITY FOR 400 TO 1,200+ GUESTS', icon: Users },
  { text: '100% INDUSTRIAL GENERATOR POWER (ZERO BLACKOUTS)', icon: Zap },
  { text: 'ILLUMINATED FLORAL PERGOLA BARAAT ARRIVAL', icon: Sparkles },
  { text: 'SHAHI DARBAR AIR-CONDITIONED BANQUET HALL', icon: Building2 },
  { text: 'GATED VALET PARKING & SECURE PREMISES', icon: Car },
  { text: 'EXQUISITE MULTI-CUISINE FEASTS & STAGE DÉCOR', icon: UtensilsCrossed },
  { text: 'GATE 62, KURJI MOR, PATLIPUTRA, PATNA', icon: MapPin },
  { text: '24/7 EVENT CONCIERGE & WHATSAPP DESK', icon: PhoneCall },
];

export const MovingTextTicker: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#121417] text-stone-200 py-3 sm:py-3.5 border-y border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)] select-none z-20">
      
      {/* Subtle edge fades for ribbon */}
      <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#121417] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#121417] to-transparent z-10 pointer-events-none" />

      {/* Scrolling Track */}
      <div className="animate-marquee-left flex items-center">
        {/* Set 1 */}
        {TICKER_ITEMS.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={`set1-${index}`} className="flex items-center gap-3 px-6 text-xs sm:text-sm font-semibold tracking-widest whitespace-nowrap">
              <Icon className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span className="text-stone-100 font-serif">{item.text}</span>
              <span className="text-stone-600 text-xs">•</span>
            </div>
          );
        })}
        {/* Set 2 (for seamless infinite loop) */}
        {TICKER_ITEMS.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={`set2-${index}`} className="flex items-center gap-3 px-6 text-xs sm:text-sm font-semibold tracking-widest whitespace-nowrap">
              <Icon className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span className="text-stone-100 font-serif">{item.text}</span>
              <span className="text-stone-600 text-xs">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
