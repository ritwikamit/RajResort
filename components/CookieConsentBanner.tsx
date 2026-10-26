'use client';

import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, ChevronRight, Check } from 'lucide-react';

interface CookieConsentBannerProps {
  onOpenPolicy?: () => void;
}

const COOKIE_STORAGE_KEY = 'raj_resort_cookies_accepted';

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onOpenPolicy }) => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkConsent = () => {
      try {
        const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
        // If not set, it's a new user -> show the banner!
        setVisible(!stored);
      } catch {
        setVisible(false);
      }
    };

    checkConsent();

    // Listen for cross-component consent updates (e.g. from modal or cookies page)
    const handleSync = () => checkConsent();
    window.addEventListener('cookie_consent_updated', handleSync);
    window.addEventListener('storage', handleSync);

    return () => {
      window.removeEventListener('cookie_consent_updated', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  if (!mounted || !visible) {
    return null;
  }

  const handleAcceptAll = () => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, 'all');
      document.cookie = `${COOKIE_STORAGE_KEY}=all; path=/; max-age=31536000; SameSite=Lax`;
      window.dispatchEvent(new Event('cookie_consent_updated'));
    } catch {
      // Ignore
    }
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, 'essential');
      document.cookie = `${COOKIE_STORAGE_KEY}=essential; path=/; max-age=31536000; SameSite=Lax`;
      window.dispatchEvent(new Event('cookie_consent_updated'));
    } catch {
      // Ignore
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie and Privacy Consent"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs p-3 sm:p-6 animate-in fade-in duration-300 pointer-events-auto"
    >
      <div className="relative max-w-lg w-full bg-[#FFFAF3] dark:bg-[#1E1714] border border-[#FFE5BF] dark:border-[#352520] p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(246,36,64,0.18)] text-stone-900 dark:text-stone-100 flex flex-col items-center text-center">
        
        {/* Ornate Cookie Emblem Badge */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FFF2DB] dark:bg-[#2C1F1B] border border-[#FFE5BF] dark:border-[#3E2C26] flex items-center justify-center text-[#F62440] mb-3 sm:mb-4 shadow-xs">
          <Cookie className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          Your Comfort & Privacy Matter
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans max-w-md">
          Welcome to <strong className="text-[#F62440] font-semibold">Raj Resort Patna</strong>. 
          We use functional cookies to preserve your theme preference (Light/Dark mode), optimize page load speeds, and enable WhatsApp concierge assistance.
        </p>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row items-center gap-2.5 w-full">
          {/* Accept All (Primary) */}
          <button
            type="button"
            onClick={handleAcceptAll}
            className="w-full sm:flex-1 py-3 px-4 bg-gradient-to-r from-[#F62440] to-[#D81B34] hover:from-[#E01A35] hover:to-[#BF132A] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>Accept All Cookies</span>
          </button>

          {/* Essential Only (Secondary) */}
          <button
            type="button"
            onClick={handleEssentialOnly}
            className="w-full sm:flex-1 py-3 px-4 bg-[#FFF2DB] hover:bg-[#FFE5BF] dark:bg-[#2A1E19] text-stone-900 dark:text-stone-100 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all border border-[#FFE5BF] dark:border-[#352520] cursor-pointer"
          >
            Essential Only
          </button>
        </div>

        {/* Link to Detailed Cookie Policy */}
        {onOpenPolicy && (
          <button
            type="button"
            onClick={onOpenPolicy}
            className="mt-3.5 inline-flex items-center gap-1 text-xs text-stone-500 hover:text-[#F62440] dark:text-stone-400 dark:hover:text-[#FFE5BF] underline underline-offset-4 transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Read Full Cookie Policy</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        )}

      </div>
    </div>
  );
};
