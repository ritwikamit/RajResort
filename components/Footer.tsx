'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Cookie, 
  MapPin, 
  Mail, 
  Home, 
  Heart, 
  Images, 
  Compass, 
  PhoneCall
} from 'lucide-react';
import { RajResortLogo } from './RajResortLogo';
import { RESORT_DATA } from '@/data/resort-data';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenCookies?: () => void;
}

// Official Authentic WhatsApp Vector Icon
const WhatsAppOfficialIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
    role="img" 
    aria-label="Official WhatsApp Icon"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z"/>
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenCookies }) => {
  return (
    <footer className="bg-[#FFF2DB] dark:bg-[#140E0C] text-stone-700 dark:text-stone-300 border-t border-[#FFE5BF] dark:border-[#352520] pt-12 sm:pt-16 pb-32 md:pb-14 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Smartphone-Optimized Quick Navigation Grid */}
        <div className="md:hidden pb-10 border-b border-[#FFE5BF] dark:border-[#352520]">
          <div className="text-xs font-bold uppercase tracking-wider text-[#F62440] mb-3 text-center">
            Quick Navigation
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <Link 
              href="/" 
              className="p-3 bg-white dark:bg-[#201714] rounded-xl border border-[#FFE5BF] dark:border-[#352520] flex items-center gap-2 font-medium text-stone-800 dark:text-stone-100 hover:text-[#F62440] active:scale-98 transition-all shadow-xs"
            >
              <Home className="w-4 h-4 text-[#F62440] shrink-0" />
              <span>Home</span>
            </Link>
            <Link 
              href="/weddings" 
              className="p-3 bg-white dark:bg-[#201714] rounded-xl border border-[#FFE5BF] dark:border-[#352520] flex items-center gap-2 font-medium text-stone-800 dark:text-stone-100 hover:text-[#F62440] active:scale-98 transition-all shadow-xs"
            >
              <Heart className="w-4 h-4 text-[#F62440] shrink-0" />
              <span>Weddings</span>
            </Link>
            <Link 
              href="/gallery" 
              className="p-3 bg-white dark:bg-[#201714] rounded-xl border border-[#FFE5BF] dark:border-[#352520] flex items-center gap-2 font-medium text-stone-800 dark:text-stone-100 hover:text-[#F62440] active:scale-98 transition-all shadow-xs"
            >
              <Images className="w-4 h-4 text-[#F62440] shrink-0" />
              <span>Gallery</span>
            </Link>
            <Link 
              href="/facilities" 
              className="p-3 bg-white dark:bg-[#201714] rounded-xl border border-[#FFE5BF] dark:border-[#352520] flex items-center gap-2 font-medium text-stone-800 dark:text-stone-100 hover:text-[#F62440] active:scale-98 transition-all shadow-xs"
            >
              <ShieldCheck className="w-4 h-4 text-[#F62440] shrink-0" />
              <span>Facilities</span>
            </Link>
            <Link 
              href="/location" 
              className="p-3 bg-white dark:bg-[#201714] rounded-xl border border-[#FFE5BF] dark:border-[#352520] flex items-center gap-2 font-medium text-stone-800 dark:text-stone-100 hover:text-[#F62440] active:scale-98 transition-all shadow-xs"
            >
              <Compass className="w-4 h-4 text-[#F62440] shrink-0" />
              <span>Location</span>
            </Link>
            <Link 
              href="/contact" 
              className="p-3 bg-white dark:bg-[#201714] rounded-xl border border-[#FFE5BF] dark:border-[#352520] flex items-center gap-2 font-medium text-stone-800 dark:text-stone-100 hover:text-[#F62440] active:scale-98 transition-all shadow-xs"
            >
              <PhoneCall className="w-4 h-4 text-[#F62440] shrink-0" />
              <span>Contact</span>
            </Link>
          </div>
        </div>

        {/* Desktop Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-10 border-b border-[#FFE5BF] dark:border-[#352520] items-start">
          
          {/* Brand & Emblem Lockup with BIG Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="py-1 inline-block">
              <RajResortLogo variant="horizontal" size={74} showDivider={true} showSubtitle={true} />
            </div>
            <p className="text-xs text-stone-700 dark:text-stone-300 max-w-sm leading-relaxed">
              A place where families come together to celebrate life's most precious beginnings. With an open green lawn under Patna's night sky, a cool banquet hall, and warm hospitality that makes every guest feel at home.
            </p>
            <div className="text-xs text-[#F62440] font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Gate No. 62, Kurji Mor, Patliputra, Patna, Bihar 800010</span>
            </div>
          </div>

          {/* Direct Navigation Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F62440]">
              Celebration Links
            </div>
            <ul className="text-xs space-y-2.5 text-stone-700 dark:text-stone-300">
              <li>
                <Link href="/weddings" className="hover:text-[#F62440] transition-colors">
                  Wedding Lawns & Banquets
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#F62440] transition-colors">
                  Photo & Video Gallery
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#F62440] transition-colors">
                  Venue Facilities & Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-[#F62440] transition-colors">
                  Location & Map Directions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F62440] transition-colors">
                  Contact Reception & Dates
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Reception (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F62440]">
              Front Desk & Inquiries
            </div>
            
            <div className="flex items-center gap-3 pt-1">
              {/* Call Icon */}
              <a
                href={`tel:${RESORT_DATA.phone.replace(/\s+/g, '')}`}
                aria-label="Call Reception Directly"
                title="Call Reception Directly (24/7 Desk)"
                className="w-11 h-11 rounded-xl bg-white dark:bg-[#201714] border border-[#FFE5BF] dark:border-[#352520] flex items-center justify-center text-[#F62440] hover:bg-[#FFE5BF]/40 transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
              >
                <PhoneCall className="w-5 h-5 text-[#F62440]" />
              </a>

              {/* WhatsApp Icon */}
              <a
                href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Raj Resort Patna, I would like to enquire about wedding lawns and date availability.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="Direct WhatsApp Desk"
                className="w-11 h-11 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
              >
                <WhatsAppOfficialIcon className="w-5 h-5 fill-white" />
              </a>

              {/* Location Pin Icon */}
              <Link
                href="/location"
                aria-label="Resort Location & Google Maps"
                title="Location & Map Directions"
                className="w-11 h-11 rounded-xl bg-white dark:bg-[#201714] border border-[#FFE5BF] dark:border-[#352520] flex items-center justify-center text-[#F62440] hover:bg-[#FFE5BF]/40 transition-all hover:scale-105 active:scale-95 shadow-xs"
              >
                <MapPin className="w-5 h-5 text-[#F62440]" />
              </Link>

              {/* Email / Direct Mailto */}
              <a
                href={`mailto:${RESORT_DATA.email}`}
                aria-label={`Email Reception at ${RESORT_DATA.email}`}
                title={`Email: ${RESORT_DATA.email}`}
                className="w-11 h-11 rounded-xl bg-white dark:bg-[#201714] border border-[#FFE5BF] dark:border-[#352520] flex items-center justify-center text-[#F62440] hover:bg-[#FFE5BF]/40 transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
              >
                <Mail className="w-5 h-5 text-[#F62440]" />
              </a>
            </div>

            <p className="text-stone-600 dark:text-stone-400 text-[11px] pt-1">
              24/7 Front desk assistance, instant WhatsApp replies, and wedding planning guidance.
            </p>
          </div>

        </div>

        {/* Center Credits & Copyright */}
        <div className="pt-8 flex flex-col items-center justify-center text-center space-y-2 font-sans">
          <p className="text-xs text-stone-600 dark:text-stone-400">
            © {new Date().getFullYear()} Raj Resort Patna. All rights reserved.
          </p>

          <p className="text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200">
            Designed and Developed by <span className="text-[#F62440] font-bold">ACCustomLabs</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone-700 dark:text-stone-400 pt-3">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#F62440] transition-colors underline underline-offset-4 cursor-pointer inline-flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#F62440]" />
              <span>Privacy Notice & Terms</span>
            </button>
            
            {onOpenCookies && (
              <button
                onClick={onOpenCookies}
                className="hover:text-[#F62440] transition-colors underline underline-offset-4 cursor-pointer inline-flex items-center gap-1.5"
              >
                <Cookie className="w-3.5 h-3.5 text-[#F62440]" />
                <span>Cookies Policy</span>
              </button>
            )}

            <Link
              href="/location"
              className="hover:text-[#F62440] transition-colors underline underline-offset-4 inline-flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-[#F62440]" />
              <span>Google Maps Location</span>
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};
