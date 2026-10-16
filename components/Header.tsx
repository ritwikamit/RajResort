'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Sun, Moon, Send, Sparkles, MapPin, PhoneCall, ArrowRight } from 'lucide-react';
import { RajResortLogo } from './RajResortLogo';
import { HeaderEnquiryModal } from './HeaderEnquiryModal';
import { useTheme } from '@/context/ThemeContext';
import { useIsMounted } from '@/lib/hooks';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const mounted = useIsMounted();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  // Instant outside click detection using pointerdown for 0ms lag on mobile/touch
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  // Primary necessary nav menus with Home
  const primaryLinks = [
    { label: 'Home', href: '/' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Weddings', href: '/weddings' },
    { label: 'Gallery', href: '/gallery' },
  ];

  // Secondary menus in the redesigned "More" dropdown (Book via Partners removed)
  const moreLinks = [
    { 
      label: 'Resort Facilities', 
      href: '/facilities', 
      desc: '24/7 power backup, valet & lawn spaces',
      icon: Sparkles,
      iconColor: 'text-amber-300',
      iconBg: 'bg-amber-400/15 border-amber-400/30 text-amber-300'
    },
    { 
      label: 'Location & Travel', 
      href: '/location', 
      desc: 'Kurji Mor Gate 62 & Google Maps directions',
      icon: MapPin,
      iconColor: 'text-rose-300',
      iconBg: 'bg-rose-500/15 border-rose-500/30 text-rose-300'
    },
    { 
      label: 'Contact Reception', 
      href: '/contact', 
      desc: 'Call 24/7 desk & instant WhatsApp enquiry',
      icon: PhoneCall,
      iconColor: 'text-emerald-300',
      iconBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#7A0C11] md:bg-gradient-to-r md:from-[#7A0C11] md:via-[#99141A] md:to-[#600A0E] text-white border-b border-white/20 shadow-[0_4px_30px_rgba(90,10,15,0.45)] backdrop-blur-md transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Zone 1: Brand Lockup with Royal Emblem in High Contrast White & Gold */}
          <Link href="/" className="flex items-center gap-3 shrink-0 focus-visible:outline-none touch-manipulation">
            <RajResortLogo variant="horizontal" size={46} showSubtitle={true} inverted={true} />
          </Link>

          {/* Zone 2: Navigation Menu */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs uppercase tracking-[0.16em] font-semibold text-white/90">
            {primaryLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-all whitespace-nowrap shrink-0 py-1.5 touch-manipulation ${
                    isActive
                      ? 'text-amber-300 font-bold border-b-2 border-amber-300 drop-shadow-sm'
                      : 'hover:text-amber-200 hover:border-b-2 hover:border-amber-200/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Redesigned "More" Menu Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setMoreDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1.5 py-1.5 hover:text-amber-200 transition-colors cursor-pointer touch-manipulation select-none"
                aria-expanded={moreDropdownOpen}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-amber-300' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full right-0 mt-3.5 w-80 p-2.5 bg-[#4F070B]/98 dark:bg-stone-900/98 backdrop-blur-xl border border-amber-400/35 dark:border-stone-700/80 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in-95 duration-150 z-50">
                  {/* Subtle Top Accent Header */}
                  <div className="px-3 py-2 flex items-center justify-between border-b border-white/10 mb-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-amber-300">
                      Resort Guide
                    </span>
                    <span className="text-[10px] text-white/60">Kurji Mor · Patna</span>
                  </div>

                  {/* Menu Items */}
                  <div className="space-y-1">
                    {moreLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMoreDropdownOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 dark:hover:bg-stone-800 transition-colors group cursor-pointer touch-manipulation"
                        >
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${item.iconBg}`}>
                            <Icon className={`w-4 h-4 ${item.iconColor} group-hover:scale-110 transition-transform`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-xs text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                              <span>{item.label}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-amber-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                            </div>
                            <div className="text-[11px] text-white/70 dark:text-stone-400 font-normal truncate mt-0.5 normal-case">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Bottom Quick Badge */}
                  <div className="mt-2 pt-2 px-3 pb-1 border-t border-white/10 flex items-center justify-between text-[11px] text-white/70">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Front Desk 24/7
                    </span>
                    <span className="text-amber-300 font-semibold">Near Gate 62</span>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: Enquire Button + Dark Mode Toggle + Mobile Menu */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            
            {/* Enquire Form Button - Opens WhatsApp Enquiry Modal */}
            <button
              type="button"
              onClick={() => setEnquiryModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer touch-manipulation"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enquire</span>
            </button>

            {/* Light / Dark Mode Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${mounted && theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${mounted && theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2.5 rounded-xl border border-white/25 bg-white/10 hover:bg-white/20 text-white hover:text-amber-300 transition-all cursor-pointer shadow-xs touch-manipulation"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300 animate-in spin-in-180 duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-white hover:text-amber-300 animate-in spin-in-180 duration-300" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2.5 border border-white/25 bg-white/10 text-white rounded-xl cursor-pointer touch-manipulation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#58080C]/98 dark:bg-stone-900/98 border-b border-white/20 px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-2 text-xs uppercase tracking-widest font-semibold text-white">
              {primaryLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-2 rounded-lg border-b border-white/10 hover:bg-white/10 hover:text-amber-300 transition-colors flex items-center justify-between touch-manipulation"
                >
                  <span>{link.label}</span>
                  {pathname === link.href && <span className="w-2 h-2 rounded-full bg-amber-400" />}
                </Link>
              ))}

              <div className="pt-3 pb-1 text-[10px] text-amber-300/90 font-bold tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>MORE DESTINATIONS</span>
              </div>

              {moreLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 px-2 rounded-lg hover:bg-white/10 hover:text-amber-300 transition-colors flex items-center gap-3 touch-manipulation"
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border ${item.iconBg}`}>
                      <Icon className={`w-3.5 h-3.5 ${item.iconColor}`} />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-xs">{item.label}</div>
                      <div className="text-[10px] text-white/70 dark:text-stone-400 normal-case">{item.desc}</div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setEnquiryModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer touch-manipulation active:scale-[0.98] transition-transform"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Instant Enquiry Form</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Instant WhatsApp Enquiry Modal */}
      <HeaderEnquiryModal 
        isOpen={enquiryModalOpen} 
        onClose={() => setEnquiryModalOpen(false)} 
      />
    </>
  );
};
