'use client';

import React from 'react';
import { ExternalLink as ExternalLinkIcon, Instagram, Facebook, Youtube } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';
import { InstagramReelsSection } from '@/components/InstagramReelsSection';

export const FollowUsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FFFAF3] dark:bg-[#181210] text-stone-900 dark:text-stone-100 border-t border-[#FFE5BF] dark:border-[#352520] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Instagram Reels Section */}
        <InstagramReelsSection
          title="Watch Real Weddings & Viral Reels"
          subtitle="Real baraat entries, breathtaking 3.5-acre lawn decor, mandap vows, and celebration stories filmed live at Raj Resort, Patna."
        />

        {/* Social Channels Directory */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-[#FFE5BF]/60 dark:border-[#352520]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="font-cursive text-2xl sm:text-3xl text-[#F62440] tracking-wide block mb-1">
              Stay Connected
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Follow Us on Official Social Channels
            </h3>
            <p className="mt-1.5 text-stone-600 dark:text-stone-400 text-xs sm:text-sm font-sans font-normal">
              Connect with our team across Instagram, Facebook, and YouTube for daily updates and wedding planning guides.
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
                  className="p-5 sm:p-6 bg-white dark:bg-[#201714] border border-[#FFE5BF] dark:border-[#352520] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between rounded-2xl hover:border-[#F62440]/50"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#FFE5BF]/40 dark:border-[#352520] mb-3 font-sans">
                      <div className="flex items-center gap-2 text-stone-800 dark:text-stone-200">
                        {isInsta && <Instagram className="w-5 h-5 text-[#F62440]" />}
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

                  <div className="mt-3 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#F62440] pt-3 border-t border-[#FFE5BF]/40 dark:border-[#352520] font-sans">
                    <span>{social.handle}</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5 shrink-0" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
