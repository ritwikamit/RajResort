'use client';

import React, { useEffect, useState } from 'react';
import { X, Cookie, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptAll?: () => void;
}

const COOKIE_STORAGE_KEY = 'raj_resort_cookies_accepted';

export const CookiePolicyModal: React.FC<CookiePolicyModalProps> = ({
  isOpen,
  onClose,
  onAcceptAll,
}) => {
  const [currentPreference, setCurrentPreference] = useState<string | null>(null);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    try {
      const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
      setCurrentPreference(stored);
    } catch {
      // Ignore
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSavePreference = (pref: 'all' | 'essential') => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, pref);
      document.cookie = `${COOKIE_STORAGE_KEY}=${pref}; path=/; max-age=31536000; SameSite=Lax`;
      window.dispatchEvent(new Event('cookie_consent_updated'));
    } catch {
      // Ignore
    }

    setCurrentPreference(pref);
    setSavedMessage(pref === 'all' ? 'All cookies accepted successfully!' : 'Essential preferences saved.');
    if (onAcceptAll && pref === 'all') {
      onAcceptAll();
    }

    setTimeout(() => {
      setSavedMessage(null);
      onClose();
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-policy-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative max-w-2xl w-full bg-[#FFFAF3] dark:bg-[#1E1714] border border-[#FFE5BF] dark:border-[#352520] p-5 sm:p-8 text-stone-800 dark:text-stone-200 shadow-2xl rounded-2xl sm:rounded-3xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close cookie policy"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 border border-[#FFE5BF] dark:border-[#352520] bg-white dark:bg-[#251B17] text-stone-700 dark:text-stone-300 hover:text-[#F62440] dark:hover:text-[#F62440] rounded-xl transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-[#FFE5BF] dark:border-[#352520] mb-5">
          <div className="p-2.5 bg-[#FFF2DB] dark:bg-[#2C1F1B] text-[#F62440] rounded-xl border border-[#FFE5BF] dark:border-[#3E2C26]">
            <Cookie className="w-6 h-6" />
          </div>
          <div>
            <h2 id="cookie-policy-title" className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-50">
              Cookie & Data Storage Policy
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              Raj Resort Patna · Transparent & Respectful Data Usage
            </p>
          </div>
        </div>

        {/* Saved confirmation toast */}
        {savedMessage && (
          <div className="mb-4 p-3 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-2 animate-in fade-in">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>{savedMessage}</span>
          </div>
        )}

        {/* Content Body */}
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
          <p>
            Welcome to <strong className="text-stone-900 dark:text-stone-100">Raj Resort Patna</strong>. 
            We value your privacy and believe in total transparency regarding how data and local storage are utilized on our official website.
          </p>

          <h3 className="font-serif text-base font-semibold text-stone-900 dark:text-stone-100 pt-2 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#F62440]" />
            <span>1. What Are Cookies and Local Storage?</span>
          </h3>
          <p>
            Cookies and browser local storage are small data files saved on your device when you visit our website. 
            They allow the website to remember your device preferences and ensure fast, responsive page navigation across your visits.
          </p>

          <h3 className="font-serif text-base font-semibold text-stone-900 dark:text-stone-100 pt-2">
            2. Categories of Storage We Use
          </h3>
          
          <div className="space-y-2.5 pt-1">
            <div className="p-3.5 bg-white dark:bg-[#251B17] rounded-xl border border-[#FFE5BF] dark:border-[#352520]">
              <div className="font-bold text-stone-900 dark:text-stone-100 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Strictly Necessary & Functional Preferences</span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                These preserve your theme mode preference (Light or Dark mode), keep the navigation responsive, and record your cookie preference so you are not asked again on future visits.
              </p>
            </div>

            <div className="p-3.5 bg-white dark:bg-[#251B17] rounded-xl border border-[#FFE5BF] dark:border-[#352520]">
              <div className="font-bold text-stone-900 dark:text-stone-100 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>External Portals & Third-Party Services</span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                When you click to connect via WhatsApp or open Google Maps navigation, their independent privacy and cookie policies govern those respective services.
              </p>
            </div>
          </div>

          <h3 className="font-serif text-base font-semibold text-stone-900 dark:text-stone-100 pt-2">
            3. Current Status & Controls
          </h3>
          <div className="p-3 bg-[#FFF2DB]/60 dark:bg-[#281E19] rounded-xl border border-[#FFE5BF] dark:border-[#352520] flex items-center justify-between text-xs">
            <span>Your current preference:</span>
            <span className="font-bold text-[#F62440] uppercase tracking-wider">
              {currentPreference === 'all' 
                ? 'All Cookies Accepted' 
                : currentPreference === 'essential' 
                ? 'Essential Storage Only' 
                : 'Not Yet Decided'}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-[#FFE5BF] dark:border-[#352520] flex flex-col sm:flex-row items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#FFE5BF] dark:border-[#352520] bg-white dark:bg-[#251B17] text-stone-700 dark:text-stone-200 hover:text-[#F62440] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => handleSavePreference('essential')}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#FFE5BF] dark:border-[#352520] bg-[#FFF2DB] hover:bg-[#FFE5BF] dark:bg-[#2A1E19] text-stone-900 dark:text-stone-100 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={() => handleSavePreference('all')}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F62440] to-[#D81B34] hover:from-[#E01A35] hover:to-[#BF132A] text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Accept All Cookies</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
