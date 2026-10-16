'use client';

import React, { useEffect } from 'react';
import { X, Cookie, ShieldCheck, Check } from 'lucide-react';

interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptAll?: () => void;
}

export const CookiePolicyModal: React.FC<CookiePolicyModalProps> = ({
  isOpen,
  onClose,
  onAcceptAll,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-policy-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 p-4 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative max-w-2xl w-full bg-white/95 dark:bg-stone-900/95 backdrop-blur-2xl border border-white/90 dark:border-stone-700 p-6 sm:p-8 text-stone-800 dark:text-stone-200 shadow-2xl rounded-3xl max-h-[85vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close cookie policy"
          className="absolute top-5 right-5 p-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-[#99141A] dark:hover:text-rose-400 rounded-xl transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 pb-4 border-b border-stone-200 dark:border-stone-800 mb-6">
          <div className="p-2.5 bg-[#99141A]/10 dark:bg-rose-950/40 text-[#99141A] dark:text-rose-400 rounded-xl">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <h2 id="cookie-policy-title" className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
              Cookie & Data Storage Policy
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              Raj Resort Patna · Transparent & Respectful Data Usage
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
          <p>
            Welcome to <strong className="text-stone-900 dark:text-stone-100">Raj Resort Patna</strong>. 
            We value your privacy and believe in total transparency regarding how data and local storage are utilized on our official website.
          </p>

          <h3 className="font-serif text-base font-semibold text-stone-900 dark:text-stone-100 pt-2 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#99141A] dark:text-rose-400" />
            <span>1. What Are Cookies and Local Storage?</span>
          </h3>
          <p>
            Cookies and browser local storage are small data files saved on your device when you visit our website. 
            They allow the website to remember your device preferences and ensure fast, seamless navigation across your visits.
          </p>

          <h3 className="font-serif text-base font-semibold text-stone-900 dark:text-stone-100 pt-2">
            2. Categories of Storage We Use
          </h3>
          
          <div className="space-y-2.5 pt-1">
            <div className="p-3.5 bg-stone-50 dark:bg-stone-800/60 rounded-xl border border-stone-200 dark:border-stone-700">
              <div className="font-bold text-stone-900 dark:text-stone-100 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Strictly Necessary & Functional Preferences</span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                These preserve your theme mode preference (Light or Dark mode), keep the navigation responsive, and record your cookie preference so you are not asked again on future visits.
              </p>
            </div>

            <div className="p-3.5 bg-stone-50 dark:bg-stone-800/60 rounded-xl border border-stone-200 dark:border-stone-700">
              <div className="font-bold text-stone-900 dark:text-stone-100 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>External Portals & Third-Party Cookies</span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                When you click to book rooms via certified partners (such as MakeMyTrip, Agoda, or Guest Reservations) or open Google Maps, their independent privacy and cookie policies govern those services.
              </p>
            </div>
          </div>

          <h3 className="font-serif text-base font-semibold text-stone-900 dark:text-stone-100 pt-2">
            3. Managing Your Preferences
          </h3>
          <p>
            You have full control over your preferences. You can accept all cookies, choose essential storage only, or clear your browser cache and cookies at any time through your browser settings.
          </p>

          <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:text-[#99141A] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
            {onAcceptAll && (
              <button
                onClick={() => {
                  onAcceptAll();
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl btn-red-gradient text-xs font-semibold uppercase tracking-wider text-white shadow-md cursor-pointer"
              >
                Accept All Cookies
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
