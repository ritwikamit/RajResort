'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, Image as ImageIcon } from 'lucide-react';
import { RESORT_DATA, GalleryItem } from '@/data/resort-data';
import { GalleryModal } from './GalleryModal';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Grand Lawns', 'Ceremonial Pergola', 'Stage & Mandap', 'Banquets & Lighting'];

  const filteredItems = activeCategory === 'All'
    ? RESORT_DATA.galleryItems
    : RESORT_DATA.galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF8F5] dark:bg-[#0A0D0E] text-stone-900 dark:text-stone-100 border-t border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-cursive text-3xl sm:text-4xl text-[#8E1B21] dark:text-rose-300 tracking-wide block mb-1">
              Captured Moments of Joy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Photographs of Real Celebrations
            </h2>
          </div>
          <p className="text-stone-700 dark:text-stone-300 text-sm max-w-md leading-relaxed font-sans font-normal">
            Take a look through our real celebration photographs—from starlit lawns and illuminated pergolas to sacred mandap ceremonies at Kurji Mor, Patliputra.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 border-b border-stone-200 dark:border-stone-800 pb-5 mb-8">
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#141618] dark:bg-white text-white dark:text-stone-950 shadow-sm'
                    : 'bg-stone-200/70 dark:bg-stone-800/70 text-stone-700 dark:text-stone-300 hover:bg-stone-300/70 dark:hover:bg-stone-700/70'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Responsive Gallery Grid with Correct Padding & Aspect Ratios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/3] sm:aspect-[3/4]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Gradient Scrim on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Text Information */}
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-stone-300">
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

      </div>

      {/* Lightbox Modal */}
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
