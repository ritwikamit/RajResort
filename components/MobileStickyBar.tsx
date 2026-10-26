'use client';

import React from 'react';
import { Phone, Calendar, Home, Images, Heart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RESORT_DATA } from '@/data/resort-data';

export const MobileStickyBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav 
      aria-label="Mobile Navigation Bar"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#FFFAF3]/95 dark:bg-[#181210]/95 backdrop-blur-xl border-t border-[#FFE5BF] dark:border-[#352520] shadow-[0_-4px_25px_rgba(0,0,0,0.06)] px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] flex items-center justify-around gap-1 select-none"
    >
      {/* Home */}
      <Link 
        href="/" 
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] font-semibold transition-colors touch-manipulation ${
          pathname === '/' 
            ? 'text-[#F62440] font-bold' 
            : 'text-stone-600 dark:text-stone-400'
        }`}
      >
        <Home className="w-4 h-4 mb-0.5" />
        <span>Home</span>
      </Link>

      {/* Weddings */}
      <Link 
        href="/weddings" 
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] font-semibold transition-colors ${
          pathname === '/weddings' 
            ? 'text-[#F62440] font-bold' 
            : 'text-stone-600 dark:text-stone-400'
        }`}
      >
        <Heart className="w-4 h-4 mb-0.5" />
        <span>Weddings</span>
      </Link>

      {/* Gallery */}
      <Link 
        href="/gallery" 
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] font-semibold transition-colors ${
          pathname === '/gallery' 
            ? 'text-[#F62440] font-bold' 
            : 'text-stone-600 dark:text-stone-400'
        }`}
      >
        <Images className="w-4 h-4 mb-0.5" />
        <span>Gallery</span>
      </Link>

      {/* Call Reception */}
      <a 
        href={`tel:${RESORT_DATA.phone.replace(/\s+/g, '')}`} 
        className="flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] font-semibold text-stone-600 dark:text-stone-400 hover:text-[#F62440] active:scale-95 transition-all"
      >
        <Phone className="w-4 h-4 mb-0.5" />
        <span>Call Desk</span>
      </a>

      {/* WhatsApp Dates Button */}
      <a 
        href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
          'Hello Raj Resort Patna, I would like to check wedding lawn and date availability.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#F62440] to-[#D81B34] text-white text-[11px] font-bold shadow-sm active:scale-95 transition-transform"
      >
        <Calendar className="w-3.5 h-3.5 text-white" />
        <span>Dates</span>
      </a>
    </nav>
  );
};
