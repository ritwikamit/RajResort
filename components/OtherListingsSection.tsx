'use client';

import React from 'react';
import { ExternalLink as ExternalLinkIcon, Star } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export const OtherListingsSection: React.FC = () => {
  return (
    <section className="py-14 bg-[#FAF7F2] dark:bg-[#080D0B] text-stone-900 dark:text-stone-100 border-t border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="text-xs font-bold tracking-widest text-[#99141A] dark:text-rose-400 uppercase mb-2">
            City Directory · What People Say
          </div>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Find Us on Justdial Patna
          </h2>
          <p className="mt-1 text-stone-600 dark:text-stone-300 text-xs sm:text-sm">
            Read local reviews, ratings, and customer questions from guests across Patna.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {RESORT_DATA.directoryLinks.map((dir) => (
            <div
              key={dir.title}
              className="p-6 bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-lg hover:border-[#99141A]/50 dark:hover:border-rose-400/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-2xl"
            >
              <div>
                <div className="flex items-center gap-2 mb-1.5 font-sans">
                  <span className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                    {dir.title}
                  </span>
                  <span className="text-stone-300 dark:text-stone-600 text-xs">·</span>
                  <span className="text-amber-700 dark:text-amber-400 text-xs flex items-center gap-1 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    {dir.ratingNote}
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
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAF7F2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 hover:border-[#99141A] dark:hover:border-rose-400 text-stone-900 dark:text-stone-100 hover:text-[#99141A] dark:hover:text-rose-400 text-xs font-bold tracking-wider uppercase transition-colors rounded-xl shadow-xs"
              >
                <span>Read Reviews</span>
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
