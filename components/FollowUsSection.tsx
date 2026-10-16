'use client';

import React from 'react';
import { ExternalLink as ExternalLinkIcon, Instagram, Facebook } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';

export const FollowUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F5EFEB] dark:bg-[#0B100E] text-stone-900 dark:text-stone-100 border-t border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="text-xs font-bold tracking-widest text-[#99141A] dark:text-rose-400 uppercase mb-2">
            Social Media · Watch Real Weddings
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Follow Raj Resort on Instagram & Facebook
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-300 text-sm">
            Watch real wedding entries, behind-the-scenes celebrations, festive decor setups, and local announcements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {RESORT_DATA.socialLinks.map((social) => {
            const isInsta = social.title === 'Instagram';
            return (
              <a
                key={social.title}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-lg hover:border-[#99141A]/50 dark:hover:border-rose-400/50 transition-all duration-300 group flex flex-col justify-between rounded-2xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800 mb-4 font-sans">
                    <div className="flex items-center gap-2 text-stone-800 dark:text-stone-200">
                      {isInsta ? (
                        <Instagram className="w-5 h-5 text-rose-600" />
                      ) : (
                        <Facebook className="w-5 h-5 text-blue-600" />
                      )}
                      <span className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 group-hover:text-[#99141A] dark:group-hover:text-rose-400 transition-colors">
                        {social.title}
                      </span>
                    </div>
                    <span className="text-xs text-stone-500 dark:text-stone-400 font-semibold font-sans">
                      {social.handle}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                    {social.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between text-xs font-bold tracking-wider uppercase text-[#99141A] dark:text-rose-400 group-hover:text-[#7D0E13] dark:group-hover:text-rose-300 pt-3 border-t border-stone-100 dark:border-stone-800 font-sans">
                  <span>Visit Our Official Page</span>
                  <ExternalLinkIcon className="w-4 h-4 shrink-0" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
