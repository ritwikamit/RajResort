'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Sun, Moon, Send } from 'lucide-react';
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

  // Secondary menus in the minimal "More" dropdown
  const moreLinks = [
    { label: 'Resort Facilities', href: '/facilities' },
    { label: 'Location & Travel', href: '/location' },
    { label: 'Contact Reception', href: '/contact' },
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
                <div className="absolute top-full right-0 mt-3 w-52 py-1.5 bg-[#5A0A0E] dark:bg-stone-900 border border-white/20 dark:border-stone-800 rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-150 z-50 overflow-hidden">
                  {moreLinks.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMoreDropdownOpen(false)}
                        className={`block px-4 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer touch-manipulation ${
                          isActive
                            ? 'bg-white/15 text-amber-300 font-bold'
                            : 'text-white/90 hover:text-amber-300 hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
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

              <div className="pt-2 text-[10px] text-amber-300/80 font-bold tracking-wider">
                MORE
              </div>

              {moreLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-2 rounded-lg border-b border-white/10 hover:bg-white/10 hover:text-amber-300 transition-colors flex items-center justify-between touch-manipulation"
                >
                  <span>{item.label}</span>
                  {pathname === item.href && <span className="w-2 h-2 rounded-full bg-amber-400" />}
                </Link>
              ))}
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
