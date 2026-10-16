'use client';

import React, { useEffect } from 'react';
import { X, Shield } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
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
      aria-labelledby="privacy-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 p-4 sm:p-6 backdrop-blur-md"
    >
      <div className="relative max-w-2xl w-full bg-white/95 dark:bg-stone-900/95 backdrop-blur-2xl border border-white/90 dark:border-stone-700 p-6 sm:p-8 text-stone-800 dark:text-stone-200 shadow-2xl rounded-2xl max-h-[85vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close privacy policy"
          className="absolute top-5 right-5 p-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-[#99141A] dark:hover:text-rose-400 rounded-xl transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2.5 pb-4 border-b border-stone-200 dark:border-stone-800 mb-6">
          <Shield className="w-5 h-5 text-[#99141A] dark:text-rose-400 shrink-0" />
          <h2 id="privacy-title" className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
            Privacy Policy & External Booking Notice
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
          <p>
            This website serves as the verified official informational portal for{' '}
            <strong className="text-stone-900 dark:text-stone-100">Raj Resort Patna</strong>, located near Gate No. 62, 
            Kurji Mor, Patliputra, Kurji, Patna, Bihar 800010.
          </p>

          <h3 className="font-serif text-base font-semibold text-stone-900 dark:text-stone-100 pt-2">
            1. External Booking Platform Notice
          </h3>
          <p>
            Raj Resort does not process credit cards, collect banking information, or confirm room reservations directly on this web page. Room bookings are facilitated through certified third-party distribution partners, specifically MakeMyTrip, Agoda, and Guest Reservations.
          </p>
          <p>
            When you select &quot;Book a Stay&quot; or choose a booking provider card, you are directed to that provider&apos;s external website in a new tab. All transactions, reservation dates, payments, refunds, and room cancellation terms are governed solely by the respective booking provider&apos;s terms and privacy notices.
          </p>

          <h3 className="font-serif text-base font-semibold text-stone-900 dark:text-stone-100 pt-2">
            2. Event & Stay Enquiry Information
          </h3>
          <p>
            If you voluntarily submit an event or accommodation inquiry via our contact form or WhatsApp click-to-chat, we collect your provided name, contact phone number, and event details solely to respond to your request and check date availability. We never sell, lease, or distribute your personal contact information to third parties.
          </p>

          <h3 className="font-serif text-base font-semibold text-stone-900 dark:text-stone-100 pt-2">
            3. Contact & Inquiries
          </h3>
          <p>
            For questions regarding property policies, wedding lawn visits, or to update your inquiry details, please contact our reception team directly at{' '}
            <a href={`tel:${RESORT_DATA.phone.replace(/\s+/g, '')}`} className="text-[#99141A] dark:text-rose-400 font-bold underline">
              {RESORT_DATA.phoneDisplay}
            </a>.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-stone-200 dark:border-stone-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 btn-red-gradient text-xs uppercase tracking-wider font-semibold rounded-xl transition-colors shadow-sm cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>

      </div>
    </div>
  );
};
