'use client';

import React from 'react';
import { ExternalLink as ExternalLinkIcon, Instagram, Facebook, Youtube } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export const FollowUsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F4F0EB] dark:bg-[#0E1114] text-stone-900 dark:text-stone-100 border-t border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="font-cursive text-3xl sm:text-4xl text-[#8E1B21] dark:text-rose-300 tracking-wide block mb-1">
            Real Moments & Stories
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Follow Raj Resort on Social Channels
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-300 text-sm font-sans font-normal">
            Watch real Baraat entries, behind-the-scenes celebrations, festive decor setups, and wedding stories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {RESORT_DATA.socialLinks.map((social) => {
            const isInsta = social.title === 'Instagram';
            const isFb = social.title === 'Facebook';
            return (
              <a
                key={social.title}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between rounded-2xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800 mb-4 font-sans">
                    <div className="flex items-center gap-2 text-stone-800 dark:text-stone-200">
                      {isInsta && <Instagram className="w-5 h-5 text-rose-600" />}
                      {isFb && <Facebook className="w-5 h-5 text-blue-600" />}
                      {!isInsta && !isFb && <Youtube className="w-5 h-5 text-red-600" />}
                      <span className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                        {social.title}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans mb-3">
                    {social.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-stone-800 dark:text-stone-200 pt-3 border-t border-stone-100 dark:border-stone-800 font-sans">
                  <span>{social.handle}</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5 shrink-0" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
