'use client';

import React, { useState } from 'react';
import { Cookie, ShieldCheck, ChevronRight } from 'lucide-react';
import { useIsMounted } from '@/lib/hooks';

interface CookieConsentBannerProps {
  onOpenPolicy: () => void;
}

const COOKIE_STORAGE_KEY = 'raj_resort_cookies_accepted';

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onOpenPolicy }) => {
  const mounted = useIsMounted();
  const [dismissed, setDismissed] = useState(false);

  // Check if user has already made a decision
  const hasDecision = typeof window !== 'undefined' ? localStorage.getItem(COOKIE_STORAGE_KEY) !== null : true;

  if (!mounted || hasDecision || dismissed) {
    return null;
  }

  const handleAcceptAll = () => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, 'all');
    } catch {
      // Ignore
    }
    setDismissed(true);
  };

  const handleEssentialOnly = () => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, 'essential');
    } catch {
      // Ignore
    }
    setDismissed(true);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie and Privacy Consent"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-300"
    >
      <div className="relative max-w-lg w-full bg-white/95 dark:bg-[#0E1512]/95 backdrop-blur-2xl border border-stone-200 dark:border-stone-700/80 p-6 sm:p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] text-stone-900 dark:text-stone-100 flex flex-col items-center text-center">
        
        {/* Ornate Cookie Emblem Badge */}
        <div className="w-14 h-14 rounded-2xl bg-[#99141A]/10 dark:bg-rose-950/50 border border-[#99141A]/20 dark:border-rose-800/40 flex items-center justify-center text-[#99141A] dark:text-rose-400 mb-4 shadow-sm">
          <Cookie className="w-7 h-7" />
        </div>

        <h3 className="font-serif text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          Your Comfort & Privacy Matter
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans max-w-md">
          Welcome to <strong className="text-[#99141A] dark:text-rose-400">Raj Resort Patna</strong>. 
          We use cookies and local storage to preserve your theme preference (Light/Dark mode), optimize page load speeds, and enable instant WhatsApp reception assistance.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full">
          {/* Accept All (Primary) */}
          <button
            onClick={handleAcceptAll}
            className="w-full sm:flex-1 py-3 px-5 btn-red-gradient text-xs font-semibold uppercase tracking-wider rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            Accept All Cookies
          </button>

          {/* Essential Only (Secondary) */}
          <button
            onClick={handleEssentialOnly}
            className="w-full sm:flex-1 py-3 px-5 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all border border-stone-300 dark:border-stone-700 cursor-pointer"
          >
            Essential Only
          </button>
        </div>

        {/* Link to Detailed Cookie Policy */}
        <button
          onClick={onOpenPolicy}
          className="mt-4 inline-flex items-center gap-1 text-xs text-stone-500 hover:text-[#99141A] dark:text-stone-400 dark:hover:text-rose-300 underline underline-offset-4 transition-colors cursor-pointer"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Read Full Cookie Policy</span>
          <ChevronRight className="w-3 h-3" />
        </button>

      </div>
    </div>
  );
};
