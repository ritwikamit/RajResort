'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-[#FFFAF3] dark:bg-[#181210] text-stone-900 dark:text-stone-100 border-t border-[#FFE5BF] dark:border-[#352520] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-cursive text-3xl sm:text-4xl text-[#F62440] tracking-wide block mb-1">
            Questions & Answers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Frequently Asked Questions
          </h2>
          <p className="mt-3.5 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
            Helpful information about event hosting, guest capacities, parking facilities, and booking at Raj Resort Patna.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {RESORT_DATA.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white dark:bg-[#201714] border border-[#FFE5BF] dark:border-[#352520] rounded-2xl overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F62440]"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#F62440] text-white rotate-180'
                        : 'bg-[#FFF2DB] dark:bg-[#2C1F1B] text-[#F62440]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans border-t border-[#FFE5BF]/30 dark:border-[#352520] animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Helpful Contact Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-[#FFF2DB]/70 dark:bg-[#231A16] border border-[#FFE5BF] dark:border-[#352520] rounded-2xl sm:rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#F62440] text-white flex items-center justify-center shrink-0 shadow-sm">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 dark:text-stone-50">
                Have a specific question about your event?
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                Our front desk is here to assist with date checks and package details.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${RESORT_DATA.phone.replace(/\s+/g, '')}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white dark:bg-[#2D211C] border border-[#FFE5BF] dark:border-[#3E2C26] text-stone-800 dark:text-stone-200 text-xs font-semibold uppercase tracking-wider hover:text-[#F62440] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F62440]" />
              <span>Call Us</span>
            </a>
            <a
              href={`https://wa.me/${RESORT_DATA.whatsappNumber}?text=${encodeURIComponent(
                'Hello Raj Resort Patna, I have a question regarding event bookings and would like to speak with the reception team.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F62440] to-[#D81B34] text-white text-xs font-semibold uppercase tracking-wider hover:opacity-95 transition-opacity shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
