'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import { RESORT_DATA } from '@/data/resort-data';
import { GalleryModal } from './GalleryModal';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Grand Lawns', 'Ceremonial Pergola', 'Stage & Mandap', 'Banquets & Lighting'];

  const filteredItems = activeCategory === 'All'
    ? RESORT_DATA.galleryItems
    : RESORT_DATA.galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF7F9] dark:bg-[#120718] text-stone-900 dark:text-stone-100 border-t border-[#8E1EA2]/15 transition-colors duration-300">
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
          <p className="text-stone-600 dark:text-stone-300 text-sm max-w-md leading-relaxed font-sans font-normal">
            Take a look through real photographs from celebrations at Raj Resort. The nervous smiles, the happy tears of parents, and the joy of families dancing under the stars.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 border-b border-[#8E1EA2]/15 pb-5 mb-8">
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#8E1EA2] to-[#C654C3] text-white shadow-sm'
                    : 'bg-[#FFC0DE]/25 dark:bg-[#8E1EA2]/20 text-[#8E1EA2] dark:text-[#ED96D7] hover:bg-[#FFC0DE]/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Responsive Gallery Grid with 100% Distinct Real Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
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
