'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, Image as ImageIcon } from 'lucide-react';
import { RESORT_DATA, GalleryItem } from '@/data/resort-data';
import { VisualArt } from './VisualArt';
import { GalleryModal } from './GalleryModal';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Weddings & Lawns', 'Accommodations', 'Banquets & Receptions'];

  const filteredItems = activeCategory === 'All'
    ? RESORT_DATA.galleryItems
    : RESORT_DATA.galleryItems.filter((item) => item.category === activeCategory);

  const mapItemToVisualType = (id: string): 'wedding-lawn' | 'deluxe-room' | 'banquet-hall' | 'floral-pergola' | 'aerial-lawn' | 'family-suite' | 'dining' => {
    switch (id) {
      case 'gal-1':
        return 'floral-pergola';
      case 'gal-2':
        return 'wedding-lawn';
      case 'gal-3':
        return 'aerial-lawn';
      case 'gal-4':
        return 'deluxe-room';
      case 'gal-5':
        return 'wedding-lawn';
      case 'gal-6':
        return 'banquet-hall';
      case 'gal-7':
        return 'family-suite';
      case 'gal-8':
      default:
        return 'dining';
    }
  };

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" className="py-20 bg-[#FAF7F2] dark:bg-[#080D0B] text-stone-900 dark:text-stone-100 border-t border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#99141A] dark:text-rose-400 uppercase mb-3">
              <ImageIcon className="w-3.5 h-3.5 text-[#99141A] dark:text-rose-400" />
              <span>Realistic Property & Celebration Images</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Explore Our Lawns, Rooms & Hall
            </h2>
          </div>
          <p className="text-stone-700 dark:text-stone-300 text-sm max-w-md leading-relaxed font-sans font-medium">
            Click on any photo to see a larger view of our illuminated floral pergola entrance, grand lotus stage, starlit wedding lawn, and guest rooms.
          </p>
        </div>

        {/* Filter Buttons - Red Gradient Active */}
        <div className="flex flex-wrap gap-2.5 border-b border-stone-200 dark:border-stone-800 pb-5 mb-10">
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 text-xs uppercase tracking-wider font-bold transition-all rounded-xl border cursor-pointer ${
                  isActive
                    ? 'btn-red-gradient border-transparent text-white shadow-md scale-105'
                    : 'bg-white/90 dark:bg-stone-900/90 border-stone-200/90 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:text-[#99141A] dark:hover:text-rose-300 hover:border-[#99141A]/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid - Smooth Rounded Cards with Animated Edge Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => {
            const isFailed = failedImages[item.id];

            return (
              <div
                key={item.id}
                onClick={() => {
                  const indexInAll = RESORT_DATA.galleryItems.findIndex((x) => x.id === item.id);
                  setLightboxIndex(indexInAll !== -1 ? indexInAll : idx);
                }}
                className="group relative cursor-pointer overflow-hidden border border-stone-200/90 dark:border-stone-800 bg-white dark:bg-stone-900 aspect-[4/3] rounded-2xl hover:border-[#99141A] dark:hover:border-rose-400 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1.5"
              >
                {/* Photo Image or SVG Fallback */}
                {item.image && !isFailed ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      onError={() => handleImageError(item.id)}
                    />
                    <div className="absolute inset-0 bg-stone-900/10 dark:bg-stone-950/20 group-hover:bg-transparent transition-colors" />
                  </div>
                ) : (
                  <VisualArt type={mapItemToVisualType(item.id)} />
                )}

                {/* Hover overlay with clean metadata and smooth edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#99141A]/95 via-[#99141A]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between text-white rounded-2xl">
                  <div className="flex justify-end">
                    <div className="p-2 bg-white/25 border border-white/40 text-white rounded-xl shadow-xs backdrop-blur-sm">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold tracking-wider uppercase text-rose-200 mb-1 font-sans">
                      {item.category}
                    </div>
                    <h4 className="font-serif text-base font-bold text-white line-clamp-2 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        <GalleryModal
          items={RESORT_DATA.galleryItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() => {
            if (lightboxIndex !== null) {
              setLightboxIndex((lightboxIndex + 1) % RESORT_DATA.galleryItems.length);
            }
          }}
          onPrev={() => {
            if (lightboxIndex !== null) {
              setLightboxIndex((lightboxIndex - 1 + RESORT_DATA.galleryItems.length) % RESORT_DATA.galleryItems.length);
            }
          }}
        />

      </div>
    </section>
  );
};
