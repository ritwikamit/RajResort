'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PrivacyPolicyModal } from '@/components/PrivacyPolicyModal';
import { CookiePolicyModal } from '@/components/CookiePolicyModal';
import { FloatingActions } from '@/components/FloatingActions';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { Cookie, ShieldCheck, Check, Sparkles, ArrowLeft, RefreshCw } from 'lucide-react';

const COOKIE_STORAGE_KEY = 'raj_resort_cookies_accepted';

export default function CookiesPage() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);
  const [preference, setPreference] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      setPreference(localStorage.getItem(COOKIE_STORAGE_KEY));
    } catch {
      // Ignore
    }

    const handleSync = () => {
      try {
        setPreference(localStorage.getItem(COOKIE_STORAGE_KEY));
      } catch {
        // Ignore
      }
    };

    window.addEventListener('cookie_consent_updated', handleSync);
    return () => window.removeEventListener('cookie_consent_updated', handleSync);
  }, []);

  const handleSetPreference = (type: 'all' | 'essential' | 'reset') => {
    try {
      if (type === 'reset') {
        localStorage.removeItem(COOKIE_STORAGE_KEY);
        document.cookie = `${COOKIE_STORAGE_KEY}=; path=/; max-age=0; SameSite=Lax`;
        setPreference(null);
        setToastMessage('Cookie preferences reset. The consent banner will show on next visit.');
      } else {
        localStorage.setItem(COOKIE_STORAGE_KEY, type);
        document.cookie = `${COOKIE_STORAGE_KEY}=${type}; path=/; max-age=31536000; SameSite=Lax`;
        setPreference(type);
        setToastMessage(type === 'all' ? 'All cookies have been accepted!' : 'Essential preferences have been saved.');
      }
      window.dispatchEvent(new Event('cookie_consent_updated'));
    } catch {
      // Ignore
    }

    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#FFFAF3] dark:bg-[#181210] text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-[#FFE5BF] selection:text-[#F62440] transition-colors duration-300">
      <Header />

      <main className="flex-1 pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-[#F62440] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex items-center gap-3.5 pb-6 border-b border-[#FFE5BF] dark:border-[#352520] mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#FFF2DB] dark:bg-[#2C1F1B] border border-[#FFE5BF] dark:border-[#3E2C26] flex items-center justify-center text-[#F62440]">
            <Cookie className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Cookie & Data Policy
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
              Raj Resort Patna · Transparent controls for your privacy and preferences
            </p>
          </div>
        </div>

        {/* Notification Toast */}
        {toastMessage && (
          <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 animate-in fade-in">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Live Preference Control Box */}
        <section className="mb-10 p-6 sm:p-8 bg-white dark:bg-[#201714] border border-[#FFE5BF] dark:border-[#352520] rounded-2xl sm:rounded-3xl shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#FFE5BF]/40 dark:border-[#352520]">
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
                Your Current Choice
              </h2>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                Saved locally on your current web browser
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2DB] dark:bg-[#2C1F1B] border border-[#FFE5BF] dark:border-[#3E2C26] text-xs font-bold text-[#F62440] uppercase tracking-wider w-fit">
              <Check className="w-3.5 h-3.5" />
              <span>
                {preference === 'all' 
                  ? 'All Cookies Accepted' 
                  : preference === 'essential' 
                  ? 'Essential Storage Only' 
                  : 'Not Configured Yet'}
              </span>
            </div>
          </div>

          <p className="mt-5 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
            You can update your decision at any time using the action buttons below. Changes take effect immediately across all pages.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => handleSetPreference('all')}
              className="flex-1 min-w-[200px] py-3.5 px-5 bg-gradient-to-r from-[#F62440] to-[#D81B34] hover:from-[#E01A35] hover:to-[#BF132A] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Accept All Cookies</span>
            </button>

            <button
              type="button"
              onClick={() => handleSetPreference('essential')}
              className="flex-1 min-w-[200px] py-3.5 px-5 bg-[#FFF2DB] hover:bg-[#FFE5BF] dark:bg-[#2A1E19] text-stone-900 dark:text-stone-100 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all border border-[#FFE5BF] dark:border-[#352520] cursor-pointer flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4 text-[#F62440]" />
              <span>Essential Only</span>
            </button>

            <button
              type="button"
              onClick={() => handleSetPreference('reset')}
              className="py-3.5 px-4 bg-white dark:bg-[#251B17] hover:bg-stone-50 dark:hover:bg-[#2F221D] text-stone-600 dark:text-stone-400 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all border border-stone-200 dark:border-stone-700 cursor-pointer flex items-center justify-center gap-1.5"
              title="Reset saved cookie decision"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </section>

        {/* Detailed Breakdown */}
        <section className="space-y-6 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#F62440]" />
              <span>1. Why Raj Resort Uses Local Storage & Cookies</span>
            </h2>
            <p>
              Raj Resort Patna respects your digital privacy. Our website does not utilize invasive advertising trackers. We employ lightweight browser storage exclusively for:
            </p>
            <ul className="mt-3 space-y-2 list-none pl-1">
              <li className="flex items-start gap-2">
                <span className="text-[#F62440] font-bold">•</span>
                <span><strong>Theme Preference:</strong> Preserving whether you prefer Light Mode (Ivory & Cream) or Dark Mode.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F62440] font-bold">•</span>
                <span><strong>Performance Caching:</strong> Pre-caching wedding lawn and venue photographs so pages render quickly on 4G and mobile networks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F62440] font-bold">•</span>
                <span><strong>Concierge Chat Session:</strong> Maintaining your ongoing conversation with the digital reception desk across page browsing.</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[#FFE5BF] dark:border-[#352520]">
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
              2. Third-Party Integrations
            </h2>
            <p>
              When navigating external services—such as opening Google Maps for driving directions or initiating a WhatsApp conversation with our front desk—those third-party services operate under their respective privacy policies.
            </p>
          </div>

          <div className="pt-4 border-t border-[#FFE5BF] dark:border-[#352520]">
            <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
              3. Questions & Front Desk Contact
            </h2>
            <p>
              If you have any questions regarding data handling or wish to inspect our facilities in person, our front desk is at your service at Kurji Mor, Patliputra, Patna:
            </p>
            <ul className="mt-3 space-y-1 list-none pl-1">
              <li>• Phone & WhatsApp: <strong>+91 7360800001</strong></li>
              <li>• Official Email: <strong>Rajresortpatna@gmail.com</strong></li>
            </ul>
          </div>
        </section>

      </main>

      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenCookies={() => setCookieOpen(true)}
      />
      <PrivacyPolicyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <CookiePolicyModal isOpen={cookieOpen} onClose={() => setCookieOpen(false)} />
      <FloatingActions />
      <MobileStickyBar />
    </div>
  );
}
