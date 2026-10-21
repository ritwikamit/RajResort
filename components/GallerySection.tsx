'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Maximize2, ChevronDown, Sparkles, ChevronsDown, Eye } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';
import { GalleryModal } from './GalleryModal';

const INITIAL_COUNT = 16;
const LOAD_MORE_STEP = 16;

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_COUNT);
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
    setVisibleCount(INITIAL_COUNT);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_STEP, filteredItems.length));
  };

  const handleShowAll = () => {
    setVisibleCount(filteredItems.length);
  };

  const handleCollapse = () => {
    setVisibleCount(INITIAL_COUNT);
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <section
      id="gallery"
      className="py-20 sm:py-28 bg-[#FAF7F9] dark:bg-[#120718] text-stone-900 dark:text-stone-100 border-t border-[#8E1EA2]/15 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-cursive text-3xl sm:text-4xl text-[#8E1EA2] dark:text-[#ED96D7] tracking-wide block mb-1">
              Real Weddings, Real Happiness
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Moments We Are Blessed to Host
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed font-sans font-normal">
              Explore our complete collection of authentic celebration photographs from Raj Resort. The nervous smiles, the happy tears of parents, and the joy of families dancing under the stars.
            </p>
            <div className="mt-2.5 inline-flex items-center gap-2 text-xs font-semibold text-[#8E1EA2] dark:text-[#ED96D7]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{RESORT_DATA.galleryItems.length} Real Celebration Photos in Gallery</span>
            </div>
          </div>
        </div>

        {/* Filter Pills with Counts */}
        <div className="flex flex-wrap gap-2 border-b border-[#8E1EA2]/15 pb-5 mb-8">
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            const count = categoryCounts[cat] || 0;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#8E1EA2] to-[#C654C3] text-white shadow-sm'
                    : 'bg-[#FFC0DE]/25 dark:bg-[#8E1EA2]/20 text-[#8E1EA2] dark:text-[#ED96D7] hover:bg-[#FFC0DE]/40'
                }`}
              >
                <span className="uppercase">{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-[#8E1EA2]/15 dark:bg-[#ED96D7]/20 text-[#8E1EA2] dark:text-[#ED96D7]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Gallery Grid showing authentic photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className={`group relative rounded-2xl overflow-hidden bg-white dark:bg-[#1C0B26] border border-[#8E1EA2]/15 shadow-[0_4px_20px_rgba(142,30,162,0.06)] hover:shadow-xl transition-all duration-300 cursor-pointer ${
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
                loading={index < 8 ? 'eager' : 'lazy'}
                className={`object-cover ${
                  item.aspect === 'portrait' ? 'object-top sm:object-center' : 'object-center'
                } group-hover:scale-105 transition-transform duration-500 ease-out`}
              />

              {/* Gradient Scrim on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* Text Information */}
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#FFC0DE]">
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

        {/* Gallery Pagination & Progressive Loading Controls */}
        <div className="mt-12 pt-8 border-t border-[#8E1EA2]/15 flex flex-col items-center gap-4 text-center">
          
          {/* Progress bar and counter */}
          <div className="w-full max-w-md">
            <div className="flex justify-between items-center text-xs text-stone-600 dark:text-stone-300 mb-2 font-medium">
              <span>Showing {displayedItems.length} of {filteredItems.length} photographs</span>
              <span>{Math.round((displayedItems.length / filteredItems.length) * 100)}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#8E1EA2]/10 dark:bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#8E1EA2] to-[#C654C3] transition-all duration-500 rounded-full"
                style={{ width: `${(displayedItems.length / filteredItems.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Action buttons */}
          {hasMore ? (
            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 bg-gradient-to-r from-[#8E1EA2] to-[#C654C3] hover:from-[#7B188D] hover:to-[#B544B2] text-white text-xs uppercase tracking-wider font-semibold rounded-xl cursor-pointer shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <ChevronDown className="w-4 h-4 animate-bounce" />
                <span>Load More Photos ({Math.min(LOAD_MORE_STEP, filteredItems.length - visibleCount)} more)</span>
              </button>

              <button
                onClick={handleShowAll}
                className="px-5 py-3 bg-[#FFC0DE]/30 dark:bg-[#8E1EA2]/25 hover:bg-[#FFC0DE]/50 text-[#8E1EA2] dark:text-[#ED96D7] text-xs uppercase tracking-wider font-semibold rounded-xl cursor-pointer border border-[#8E1EA2]/20 transition-all flex items-center gap-2"
              >
                <ChevronsDown className="w-4 h-4" />
                <span>View All {filteredItems.length} Photos</span>
              </button>
            </div>
          ) : (
            filteredItems.length > INITIAL_COUNT && (
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                  ✓ You are viewing all {filteredItems.length} photographs in this category.
                </span>
                <button
                  onClick={handleCollapse}
                  className="px-4 py-1.5 bg-stone-200/70 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold rounded-lg hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors cursor-pointer"
                >
                  Show Less (Top 16)
                </button>
              </div>
            )
          )}

          <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1 max-w-sm">
            Tip: Click on any photo to open the high-resolution lightbox viewer and browse with arrow keys or swipe.
          </p>
        </div>

      </div>

      {/* Lightbox Modal (Cycles through all photos in the active category) */}
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
