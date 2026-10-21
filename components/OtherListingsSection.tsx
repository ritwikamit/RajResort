'use client';

import React from 'react';
import { ExternalLink as ExternalLinkIcon, CheckCircle2 } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export const OtherListingsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5] dark:bg-[#0A0D0E] text-stone-900 dark:text-stone-100 border-t border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="font-cursive text-3xl sm:text-4xl text-[#8E1B21] dark:text-rose-300 tracking-wide block mb-1">
            Community Trust
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Local City Listings & Verified Feedback
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-400 text-xs sm:text-sm">
            Read authentic reviews and customer feedback from families across Patna on verified directories.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {RESORT_DATA.directoryLinks.map((dir) => (
            <div
              key={dir.title}
              className="p-5 sm:p-6 bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100">
                    {dir.title}
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-medium">
                    {dir.badge}
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 max-w-md leading-relaxed font-sans">
                  {dir.description}
                </p>
              </div>

              <a
                href={dir.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-900 dark:text-stone-100 text-xs font-semibold tracking-wider uppercase transition-colors rounded-xl shadow-xs"
              >
                <span>View Listing</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
