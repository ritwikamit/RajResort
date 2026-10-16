'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { GallerySection } from '@/components/GallerySection';
import { Footer } from '@/components/Footer';
import { PrivacyPolicyModal } from '@/components/PrivacyPolicyModal';
import { CookiePolicyModal } from '@/components/CookiePolicyModal';
import { FloatingActions } from '@/components/FloatingActions';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { Image as ImageIcon } from 'lucide-react';

export default function GalleryPage() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#080D0B] text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-[#99141A]/20 selection:text-[#99141A] transition-colors duration-300 relative z-10">
      <Header />
      
      {/* Page Hero Banner */}
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 bg-[#F5EFEB] dark:bg-[#0D1411] border-b border-stone-200/80 dark:border-stone-800/80 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#99141A] dark:text-rose-400 uppercase mb-4">
            <ImageIcon className="w-4 h-4 text-[#99141A] dark:text-rose-400" />
            <span>Property & Event Highlights</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Real Photos of Raj Resort Patna
          </h1>
          <p className="mt-3 text-stone-700 dark:text-stone-300 text-base max-w-2xl mx-auto leading-relaxed font-sans">
            Real photos of our illuminated entrance pergola, grand lotus stage, open celebration lawn, 
            air-conditioned guest rooms, and banquet dining setups near Kurji Mor, Patna.
          </p>
        </div>
      </section>

      <main className="flex-1">
        <GallerySection />
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
