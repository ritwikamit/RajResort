'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  ShieldCheck, 
  Cookie, 
  MapPin, 
  Mail, 
  Home, 
  Bed, 
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
    <footer className="bg-[#EDE5DA] dark:bg-[#060A08] text-stone-700 dark:text-stone-300 border-t border-stone-300/80 dark:border-stone-800/80 pt-14 pb-24 md:pb-12 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Smartphone-Optimized Quick Navigation Grid (Visible on mobile screens) */}
        <div className="md:hidden pb-10 border-b border-stone-300 dark:border-stone-800">
          <div className="text-xs font-bold uppercase tracking-wider text-[#99141A] dark:text-rose-400 mb-3 text-center">
            Quick Smartphone Navigation
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <Link 
              href="/" 
              className="p-3 bg-white/80 dark:bg-stone-900/90 rounded-xl border border-stone-200 dark:border-stone-800 flex items-center gap-2 font-medium text-stone-800 dark:text-stone-100 hover:text-[#99141A] active:scale-98 transition-all"
            >
              <Home className="w-4 h-4 text-[#99141A] dark:text-rose-400 shrink-0" />
              <span>Home Page</span>
            </Link>
            <Link 
              href="/rooms" 
              className="p-3 bg-white/80 dark:bg-stone-900/90 rounded-xl border border-stone-200 dark:border-stone-800 flex items-center gap-2 font-medium text-stone-800 dark:text-stone-100 hover:text-[#99141A] active:scale-98 transition-all"
            >
              <Bed className="w-4 h-4 text-[#99141A] dark:text-rose-400 shrink-0" />
              <span>Rooms & Suites</span>
            </Link>
            <Link 
              href="/weddings" 
              className="p-3 bg-white/80 dark:bg-stone-900/90 rounded-xl border border-stone-200 dark:border-stone-800 flex items-center gap-2 font-medium text-stone-800 dark:text-stone-100 hover:text-[#99141A] active:scale-98 transition-all"
            >
              <Heart className="w-4 h-4 text-[#99141A] dark:text-rose-400 shrink-0" />
              <span>Wedding Lawns</span>
            </Link>
            <Link 
              href="/gallery" 
              className="p-3 bg-white/80 dark:bg-stone-900/90 rounded-xl border border-stone-200 dark:border-stone-800 flex items-center gap-2 font-medium text-stone-800 dark:text-stone-100 hover:text-[#99141A] active:scale-98 transition-all"
            >
              <Images className="w-4 h-4 text-[#99141A] dark:text-rose-400 shrink-0" />
              <span>Photo Gallery</span>
            </Link>
            <Link 
              href="/facilities" 
              className="p-3 bg-white/80 dark:bg-stone-900/90 rounded-xl border border-stone-200 dark:border-stone-800 flex items-center gap-2 font-medium text-stone-800 dark:text-stone-100 hover:text-[#99141A] active:scale-98 transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-[#99141A] dark:text-rose-400 shrink-0" />
              <span>Resort Facilities</span>
            </Link>
            <Link 
              href="/location" 
              className="p-3 bg-white/80 dark:bg-stone-900/90 rounded-xl border border-stone-200 dark:border-stone-800 flex items-center gap-2 font-medium text-stone-800 dark:text-stone-100 hover:text-[#99141A] active:scale-98 transition-all"
            >
              <Compass className="w-4 h-4 text-[#99141A] dark:text-rose-400 shrink-0" />
              <span>Maps & Route</span>
            </Link>
          </div>
        </div>

        {/* Desktop Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-10 border-b border-stone-300 dark:border-stone-800">
          
          {/* Brand & Emblem Lockup (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <RajResortLogo variant="horizontal" size={48} showSubtitle={true} />
            <p className="text-xs text-stone-600 dark:text-stone-300 max-w-sm leading-relaxed">
              Patna’s premier destination for grand weddings and comfortable stays. 
              Featuring our starlit celebration lawn, ceremonial chandelier pergola, air-conditioned Shahi Darbar hall, 
              and peaceful guest accommodations in Patliputra.
            </p>
            <div className="text-xs text-stone-600 dark:text-stone-400 font-medium">
              Gate No. 62, Kurji Mor, Patliputra, Patna, Bihar 800010
            </div>
          </div>

          {/* Direct Navigation Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#99141A] dark:text-rose-400">
              Quick Navigation
            </div>
            <ul className="text-xs space-y-2 text-stone-600 dark:text-stone-300">
              <li>
                <Link href="/rooms" className="hover:text-[#99141A] dark:hover:text-rose-400 transition-colors">
                  Rooms & Executive Suites
                </Link>
              </li>
              <li>
                <Link href="/weddings" className="hover:text-[#99141A] dark:hover:text-rose-400 transition-colors">
                  Wedding Lawns & Banquets
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#99141A] dark:hover:text-rose-400 transition-colors">
                  Photo & Video Gallery
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#99141A] dark:hover:text-rose-400 transition-colors">
                  Resort Facilities
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-[#99141A] dark:hover:text-rose-400 transition-colors">
                  Location & Map Directions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#99141A] dark:hover:text-rose-400 transition-colors">
                  Contact & Front Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Reception (4 Cols) - Front desk inquiries just icons with ACTUAL WhatsApp icon */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#99141A] dark:text-rose-400">
              Front Desk & Inquiries
            </div>
            
            {/* Clean row of luxury action icons */}
            <div className="flex items-center gap-3 pt-1">
              {/* Call Icon */}
              <a
                href={`tel:${RESORT_DATA.phone.replace(/\s+/g, '')}`}
                aria-label="Call Reception Directly"
                title="Call Reception Directly (24/7 Desk)"
                className="w-11 h-11 rounded-xl bg-white/80 dark:bg-stone-900/90 border border-stone-300 dark:border-stone-700 flex items-center justify-center text-stone-800 dark:text-stone-100 hover:text-[#99141A] hover:border-[#99141A] transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer group"
              >
                <PhoneCall className="w-5 h-5 text-[#99141A] dark:text-rose-400 group-hover:scale-110 transition-transform" />
              </a>

              {/* ACTUAL WhatsApp Icon as requested */}
              <a
                href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Raj Resort Patna, I would like to enquire about room bookings and event venues.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="Direct WhatsApp Desk"
                className="w-11 h-11 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer group"
              >
                <WhatsAppOfficialIcon className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
              </a>

              {/* Location Pin Icon */}
              <Link
                href="/location"
                aria-label="Resort Location & Google Maps"
                title="Location & Map Directions"
                className="w-11 h-11 rounded-xl bg-white/80 dark:bg-stone-900/90 border border-stone-300 dark:border-stone-700 flex items-center justify-center text-stone-800 dark:text-stone-100 hover:text-amber-600 hover:border-amber-400 transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer group"
              >
                <MapPin className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
              </Link>

              {/* Email / Form Contact Icon */}
              <Link
                href="/contact"
                aria-label="Contact Reception Page"
                title="Front Desk Enquiries & Bookings"
                className="w-11 h-11 rounded-xl bg-white/80 dark:bg-stone-900/90 border border-stone-300 dark:border-stone-700 flex items-center justify-center text-stone-800 dark:text-stone-100 hover:text-[#99141A] hover:border-[#99141A] transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer group"
              >
                <Mail className="w-5 h-5 text-[#99141A] dark:text-rose-400 group-hover:scale-110 transition-transform" />
              </Link>
            </div>

            <p className="text-stone-500 dark:text-stone-400 text-[11px] pt-1">
              24/7 Front desk assistance, instant WhatsApp replies, and direction guidance.
            </p>
          </div>

        </div>

        {/* Center Credits & Copyright with Designed and Developed BELOW All Rights Reserved */}
        <div className="pt-8 flex flex-col items-center justify-center text-center space-y-2 font-sans">
          
          {/* 1. All Rights Reserved sentence FIRST */}
          <p className="text-xs text-stone-500 dark:text-stone-400">
            © {new Date().getFullYear()} Raj Resort Patna. All rights reserved.
          </p>

          {/* 2. Designed and Developed by sentence BELOW */}
          <p className="text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200">
            Designed and Developed by <span className="text-[#99141A] dark:text-rose-400 font-bold">ACCustomLabs</span>
          </p>

          {/* Legal and Cookie Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone-600 dark:text-stone-400 pt-3">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#99141A] dark:hover:text-rose-400 transition-colors underline underline-offset-4 cursor-pointer inline-flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#99141A] dark:text-rose-400" />
              <span>Privacy Notice & Terms</span>
            </button>
            
            {onOpenCookies && (
              <button
                onClick={onOpenCookies}
                className="hover:text-[#99141A] dark:hover:text-rose-400 transition-colors underline underline-offset-4 cursor-pointer inline-flex items-center gap-1.5"
              >
                <Cookie className="w-3.5 h-3.5 text-amber-500" />
                <span>Cookies Policy</span>
              </button>
            )}

            <Link
              href="/location"
              className="hover:text-[#99141A] dark:hover:text-rose-400 transition-colors underline underline-offset-4 inline-flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Google Maps Location</span>
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};
