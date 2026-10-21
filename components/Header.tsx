'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Sun, Moon, Calendar, Phone } from 'lucide-react';
import { RajResortLogo } from './RajResortLogo';
import { HeaderEnquiryModal } from './HeaderEnquiryModal';
import { useTheme } from '@/context/ThemeContext';
import { useIsMounted } from '@/lib/hooks';
import { RESORT_DATA } from '@/data/resort-data';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const mounted = useIsMounted();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  // Instant outside click detection for dropdown
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  // Primary wedding-focused navigation links (NO rooms)
  const primaryLinks = [
    { label: 'Home', href: '/' },
    { label: 'Weddings & Lawns', href: '/weddings' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Venue Facilities', href: '/facilities' },
  ];

  // Secondary links in "More" dropdown
  const moreLinks = [
    { label: 'Location & Map', href: '/location' },
    { label: 'Contact Reception', href: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#FAF7F9]/92 dark:bg-[#15071C]/95 backdrop-blur-xl text-[#1C0A22] dark:text-stone-100 border-b border-[#8E1EA2]/15 shadow-[0_4px_25px_rgba(142,30,162,0.06)] transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0 focus-visible:outline-none">
            <RajResortLogo variant="horizontal" size={44} showSubtitle={true} inverted={false} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs uppercase tracking-[0.16em] font-semibold text-stone-700 dark:text-stone-300">
            {primaryLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-colors py-1.5 ${
                    isActive
                      ? 'text-[#8E1EA2] dark:text-[#ED96D7] font-bold border-b-2 border-[#8E1EA2]'
                      : 'hover:text-[#8E1EA2] dark:hover:text-[#ED96D7]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* "More" Menu Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setMoreDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1.5 py-1.5 hover:text-[#8E1EA2] dark:hover:text-[#ED96D7] transition-colors cursor-pointer select-none"
                aria-expanded={moreDropdownOpen}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-[#8E1EA2]' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full right-0 mt-3 w-52 py-2 bg-white dark:bg-[#1E0B28] border border-[#8E1EA2]/20 rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-150 z-50 overflow-hidden">
                  {moreLinks.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMoreDropdownOpen(false)}
                        className={`block px-4 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-[#FFC0DE]/30 text-[#8E1EA2] font-bold'
                            : 'text-stone-700 dark:text-stone-300 hover:text-[#8E1EA2] hover:bg-[#FFC0DE]/20'
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

          {/* Right Action Group */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Phone Front Desk */}
            <a
              href={`tel:${RESORT_DATA.phone.replace(/\s+/g, '')}`}
              aria-label="Call Front Desk"
              className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#8E1EA2]/20 bg-[#FFC0DE]/25 hover:bg-[#FFC0DE]/40 text-[#8E1EA2] dark:text-[#ED96D7] text-xs font-semibold tracking-wide transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Front Desk</span>
            </a>

            {/* Check Dates Button in Color Hunt Gradient */}
            <button
              type="button"
              onClick={() => setEnquiryModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#8E1EA2] to-[#C654C3] hover:from-[#7B188D] hover:to-[#B544B2] text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_16px_rgba(142,30,162,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Check Dates</span>
            </button>

            {/* Light / Dark Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${mounted && theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${mounted && theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 sm:p-2.5 rounded-xl border border-[#8E1EA2]/20 bg-white/70 dark:bg-stone-900/70 hover:bg-[#FFC0DE]/30 text-stone-700 dark:text-stone-200 transition-colors cursor-pointer"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#ED96D7]" />
              ) : (
                <Moon className="w-4 h-4 text-[#8E1EA2]" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 sm:p-2.5 border border-[#8E1EA2]/25 bg-white/80 dark:bg-stone-900/80 text-[#8E1EA2] rounded-xl cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 dark:bg-[#190924]/98 border-b border-[#8E1EA2]/20 px-5 py-5 space-y-3.5 shadow-2xl animate-in slide-in-from-top-2 duration-150 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col space-y-2 text-xs uppercase tracking-widest font-semibold text-stone-800 dark:text-stone-200">
              {primaryLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-3 rounded-lg border-b border-stone-100 dark:border-stone-800 hover:bg-[#FFC0DE]/20 hover:text-[#8E1EA2] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  {pathname === link.href && <span className="w-1.5 h-1.5 rounded-full bg-[#8E1EA2]" />}
                </Link>
              ))}

              <div className="pt-2 text-[10px] text-[#8E1EA2] dark:text-[#ED96D7] font-bold tracking-wider">
                EXPLORE MORE
              </div>

              {moreLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-3 rounded-lg border-b border-stone-100 dark:border-stone-800 hover:bg-[#FFC0DE]/20 hover:text-[#8E1EA2] transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  {pathname === item.href && <span className="w-1.5 h-1.5 rounded-full bg-[#8E1EA2]" />}
                </Link>
              ))}
            </div>

            <div className="pt-3 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setEnquiryModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#8E1EA2] to-[#C654C3] text-white font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer active:scale-[0.98] transition-transform"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Check Wedding Dates</span>
              </button>

              <a
                href={`tel:${RESORT_DATA.phone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#8E1EA2]/25 bg-[#FFC0DE]/20 text-[#8E1EA2] text-xs font-semibold uppercase tracking-wider"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Front Desk ({RESORT_DATA.phoneDisplay})</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Wedding Enquiry Modal */}
      <HeaderEnquiryModal 
        isOpen={enquiryModalOpen} 
        onClose={() => setEnquiryModalOpen(false)} 
      />
    </>
  );
};
