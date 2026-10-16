'use client';

import React, { useState } from 'react';
import { Phone, Send, Home, Bed, Heart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RESORT_DATA } from '@/data/resort-data';
import { HeaderEnquiryModal } from './HeaderEnquiryModal';

const WhatsAppOfficialIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
    role="img" 
    aria-label="WhatsApp"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
  </svg>
);

export const MobileStickyBar: React.FC = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Sticky Bottom Navigation Bar (md:hidden) */}
      <nav 
        aria-label="Mobile Navigation Bar"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-[#0D1411]/95 backdrop-blur-xl border-t border-stone-200 dark:border-stone-800 shadow-[0_-4px_25px_rgba(0,0,0,0.1)] px-3 py-2 flex items-center justify-around gap-1"
      >
        {/* Home */}
        <Link 
          href="/" 
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] font-semibold transition-colors ${
            pathname === '/' 
              ? 'text-[#99141A] dark:text-rose-400 font-bold' 
              : 'text-stone-600 dark:text-stone-400'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span>Home</span>
        </Link>

        {/* Rooms */}
        <Link 
          href="/rooms" 
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] font-semibold transition-colors ${
            pathname === '/rooms' 
              ? 'text-[#99141A] dark:text-rose-400 font-bold' 
              : 'text-stone-600 dark:text-stone-400'
          }`}
        >
          <Bed className="w-4 h-4 mb-0.5" />
          <span>Rooms</span>
        </Link>

        {/* Weddings */}
        <Link 
          href="/weddings" 
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] font-semibold transition-colors ${
            pathname === '/weddings' 
              ? 'text-[#99141A] dark:text-rose-400 font-bold' 
              : 'text-stone-600 dark:text-stone-400'
          }`}
        >
          <Heart className="w-4 h-4 mb-0.5" />
          <span>Weddings</span>
        </Link>

        {/* Call Reception */}
        <a 
          href={`tel:${RESORT_DATA.phone.replace(/\s+/g, '')}`} 
          className="flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] font-semibold text-stone-600 dark:text-stone-400 hover:text-[#99141A] active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>Call Desk</span>
        </a>

        {/* WhatsApp Book (Direct & Fast) */}
        <a 
          href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
            'Hello Raj Resort Patna, I would like to book a stay / event on WhatsApp.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366] text-white text-[11px] font-bold shadow-sm active:scale-95 transition-transform"
        >
          <WhatsAppOfficialIcon className="w-4 h-4 fill-white" />
          <span>Book</span>
        </a>
      </nav>

      {/* WhatsApp Enquiry Modal */}
      <HeaderEnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  );
};
