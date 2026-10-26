'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Maximize2, ArrowRight } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';
import { GalleryModal } from './GalleryModal';

interface GallerySectionProps {
  isLandingPage?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ isLandingPage = false }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Grand Lawns',
    'Ceremonial Pergola',
    'Stage & Mandap',
    'Banquets & Lighting',
  ];

  // Dynamically calculate counts for all categories from all real photos
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: RESORT_DATA.galleryItems.length };
    RESORT_DATA.galleryItems.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredItems = useMemo(() => {
    return activeCategory === 'All'
      ? RESORT_DATA.galleryItems
      : RESORT_DATA.galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
  };

  // On landing page, show exactly 12 photos; on gallery page, show all photos directly
  const displayedItems = isLandingPage ? filteredItems.slice(0, 12) : filteredItems;

  return (
    <section
      id="gallery"
      className="py-20 sm:py-28 bg-[#FFFAF3] dark:bg-[#181210] text-stone-900 dark:text-stone-100 border-t border-[#FFE5BF] dark:border-[#352520] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-cursive text-3xl sm:text-4xl text-[#F62440] tracking-wide block mb-1">
              Real Weddings, Real Happiness
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Moments We Are Blessed to Host
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed font-sans font-normal">
              {isLandingPage
                ? 'A curated glimpse into actual wedding celebrations at Raj Resort. The nervous smiles, happy tears of parents, and families dancing under the stars.'
                : 'Browse our complete collection of authentic celebration photographs from weddings celebrated at Raj Resort Patna.'}
            </p>
          </div>
        </div>

        {/* Filter Pills with Counts */}
        <div className="flex flex-wrap gap-2 border-b border-[#FFE5BF] dark:border-[#352520] pb-5 mb-8">
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            const count = categoryCounts[cat] || 0;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F62440] to-[#D81B34] text-white shadow-xs'
                    : 'bg-[#FFF2DB] dark:bg-[#221A16] text-stone-800 dark:text-stone-200 border border-[#FFE5BF] dark:border-[#352520] hover:border-[#F62440]/50'
                }`}
              >
                <span className="uppercase">{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-[#FFE5BF] dark:bg-[#352520] text-[#F62440] dark:text-[#FFE5BF]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Gallery Grid showing authentic photos optimized for fast load */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className={`group relative rounded-2xl overflow-hidden bg-white dark:bg-[#201714] border border-[#FFE5BF] dark:border-[#352520] shadow-[0_4px_20px_rgba(246,36,64,0.04)] hover:shadow-xl transition-all duration-300 cursor-pointer ${
                item.aspect === 'portrait'
                  ? 'aspect-[4/5] sm:aspect-[3/4]'
                  : item.aspect === 'landscape'
                    ? 'aspect-[16/10] sm:aspect-[3/4]'
                    : 'aspect-square sm:aspect-[3/4]'
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                loading={index < 4 ? 'eager' : 'lazy'}
                className={`object-cover ${
                  item.aspect === 'portrait' ? 'object-top sm:object-center' : 'object-center'
                } group-hover:scale-105 transition-transform duration-500 ease-out`}
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* Text Information */}
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#FFE5BF]">
                  {item.category}
                </span>
                <h4 className="font-serif text-sm sm:text-base font-bold line-clamp-2 mt-0.5 leading-snug">
                  {item.title}
                </h4>
              </div>

              {/* View Icon Button */}
              <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* On Landing Page: Clean Link to Full Gallery Page (No Load More Component) */}
        {isLandingPage && (
          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#F62440] to-[#D81B34] hover:from-[#E01A35] hover:to-[#BF132A] text-white text-xs uppercase tracking-wider font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <span>Explore Complete Gallery ({RESORT_DATA.galleryItems.length} Photos)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* On Gallery Page: Simple count footer (No Load More Component) */}
        {!isLandingPage && (
          <div className="mt-12 text-center text-xs text-stone-600 dark:text-stone-300 font-medium">
            Showing all {displayedItems.length} authentic wedding celebration photos. Click any photo to view in full resolution.
          </div>
        )}

      </div>

      {/* Lightbox Modal (Cycles through all photos in active category) */}
      {lightboxIndex !== null && (
        <GalleryModal
          items={filteredItems}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
};
