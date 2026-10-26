'use client';

import React, { useRef, useState } from 'react';
import {
  Instagram,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ExternalLink,
  Sparkles,
  Film,
} from 'lucide-react';

export interface InstagramReelItem {
  id: string;
  videoSrc: string;
  reelUrl: string;
  title: string;
  subtitle: string;
  category: string;
  author: string;
  authorHandle: string;
  authorUrl: string;
  highlights: string[];
}

export const INSTAGRAM_REELS: InstagramReelItem[] = [
  {
    id: 'Db5GzFhzsa6',
    videoSrc: '/videos/reel-1.mp4',
    reelUrl: 'https://www.instagram.com/reel/Db5GzFhzsa6/?utm_source=ig_web_copy_link',
    title: 'Aishwarya & Abhishek — A Love Story Written in Forever',
    subtitle: 'Mandap ceremonies, 150-ft illuminated floral walkway, starlight celebrations, and lifetime promises at Raj Resort Patna.',
    category: 'Wedding Ceremony',
    author: 'K.P Studio Bihar',
    authorHandle: '@kpstudio09',
    authorUrl: 'https://www.instagram.com/kpstudio09/',
    highlights: ['Mandap Ceremonies', 'Baraat Arrival', 'Open Lawn Vows'],
  },
  {
    id: 'DXw5TEspqMl',
    videoSrc: '/videos/reel-2.mp4',
    reelUrl: 'https://www.instagram.com/reel/DXw5TEspqMl/?utm_source=ig_web_copy_link',
    title: 'Luxury Grand Celebrations & Starlit Lawns',
    subtitle: 'From dream weddings to premium celebrations — crystal chandeliers, 3.5-acre lawn night lighting, and banquet setups.',
    category: 'Lawn & Decor',
    author: 'Raj Resort Patna',
    authorHandle: '@rajresortpatna',
    authorUrl: 'https://www.instagram.com/rajresortpatna/',
    highlights: ['3.5-Acre Lighting', 'Crystal Chandeliers', 'Luxury Stage'],
  },
  {
    id: 'DU27q4uCe1L',
    videoSrc: '/videos/reel-3.mp4',
    reelUrl: 'https://www.instagram.com/reel/DU27q4uCe1L/?utm_source=ig_web_copy_link',
    title: 'Baraat Entry & High-Energy Celebrations',
    subtitle: 'Experience the royal welcome — grand floral gateway, celebratory dhol beats, dancing baraatis, and joyous memories.',
    category: 'Baraat Celebration',
    author: 'Raj Resort Patna',
    authorHandle: '@rajresortpatna',
    authorUrl: 'https://www.instagram.com/rajresortpatna/',
    highlights: ['150-ft Floral Walkway', 'Baraat Procession', '400+ Car Parking'],
  },
  {
    id: 'DSjb45Xiarv',
    videoSrc: '/videos/reel-4.mp4',
    reelUrl: 'https://www.instagram.com/reel/DSjb45Xiarv/?utm_source=ig_web_copy_link',
    title: 'Grand Mandap Rituals & Royal Wedding Vows',
    subtitle: 'Sacred ceremonies, majestic stage decorations, and emotional wedding moments under the illuminated night sky of Patna.',
    category: 'Mandap & Rituals',
    author: 'Raj Resort Patna',
    authorHandle: '@rajresortpatna',
    authorUrl: 'https://www.instagram.com/rajresortpatna/',
    highlights: ['Sacred Mandap', 'Royal Stage Setup', 'Groom & Bride Entry'],
  },
];

const CATEGORIES = [
  'All 4 Videos',
  'Wedding Ceremony',
  'Lawn & Decor',
  'Baraat Celebration',
  'Mandap & Rituals',
];

interface InstagramReelsSectionProps {
  id?: string;
  className?: string;
}

export const InstagramReelsSection: React.FC<InstagramReelsSectionProps> = ({
  id = 'reels',
  className = '',
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All 4 Videos');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({
    Db5GzFhzsa6: true,
    DXw5TEspqMl: true,
    DU27q4uCe1L: true,
    DSjb45Xiarv: true,
  });

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  // Smooth hover autoplay
  const handleMouseEnter = (reelId: string) => {
    const video = videoRefs.current[reelId];
    if (!video) return;

    // Pause any other video
    Object.keys(videoRefs.current).forEach((otherId) => {
      if (otherId !== reelId && videoRefs.current[otherId]) {
        videoRefs.current[otherId]?.pause();
      }
    });

    video.muted = mutedStates[reelId] ?? true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setPlayingId(reelId);
        })
        .catch(() => {
          // If browser policy restricted playback, ensure muted and retry
          video.muted = true;
          setMutedStates((prev) => ({ ...prev, [reelId]: true }));
          video
            .play()
            .then(() => setPlayingId(reelId))
            .catch(() => {});
        });
    }
  };

  // Smooth hover pause
  const handleMouseLeave = (reelId: string) => {
    const video = videoRefs.current[reelId];
    if (!video) return;

    video.pause();
    if (playingId === reelId) {
      setPlayingId(null);
    }
  };

  // Click/Tap toggle for touch devices
  const handleTogglePlay = (reelId: string) => {
    const video = videoRefs.current[reelId];
    if (!video) return;

    if (playingId === reelId) {
      video.pause();
      setPlayingId(null);
    } else {
      handleMouseEnter(reelId);
    }
  };

  // Toggle Mute / Sound
  const toggleMute = (e: React.MouseEvent, reelId: string) => {
    e.stopPropagation();
    const video = videoRefs.current[reelId];
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setMutedStates((prev) => ({ ...prev, [reelId]: nextMuted }));
  };

  // Fullscreen
  const handleFullscreen = (e: React.MouseEvent, reelId: string) => {
    e.stopPropagation();
    const video = videoRefs.current[reelId];
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitRequestFullscreen) {
      (video as any).webkitRequestFullscreen();
    }
  };

  const displayedReels =
    activeCategory === 'All 4 Videos'
      ? INSTAGRAM_REELS
      : INSTAGRAM_REELS.filter((r) => r.category === activeCategory);

  return (
    <section
      id={id}
      className={`py-20 sm:py-28 bg-[#FFFAF3] dark:bg-[#181210] text-stone-900 dark:text-stone-100 border-t border-[#FFE5BF] dark:border-[#352520] transition-colors duration-300 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Consistent Section Header (Matches WeddingVenuesSection & GallerySection) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-cursive text-3xl sm:text-4xl text-[#F62440] tracking-wide block mb-1">
              Real Moments in Motion
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Watch Real Weddings & Viral Reels
            </h2>
          </div>
          <p className="text-stone-700 dark:text-stone-300 text-sm max-w-md leading-relaxed font-sans font-normal">
            Experience actual wedding celebrations, 3.5-acre starlit lawn decors, and high-energy baraat entries recorded live in panoramic landscape view. Hover over any video to preview instantly with smooth autoplay.
          </p>
        </div>

        {/* Consistent Filter Pills (Matches GallerySection) */}
        <div className="flex flex-wrap gap-2 border-b border-[#FFE5BF] dark:border-[#352520] pb-5 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F62440] to-[#D81B34] text-white shadow-xs'
                    : 'bg-[#FFF2DB] dark:bg-[#221A16] text-stone-800 dark:text-stone-200 border border-[#FFE5BF] dark:border-[#352520] hover:border-[#F62440]/50'
                }`}
              >
                <span className="uppercase">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* 4 Landscaped Video Boxes in 2x2 Grid with Smooth Hover Scale & Autoplay */}
        <div
          className={`grid gap-6 sm:gap-8 ${
            displayedReels.length === 1
              ? 'max-w-2xl mx-auto grid-cols-1'
              : 'grid-cols-1 md:grid-cols-2'
          }`}
        >
          {displayedReels.map((reel) => {
            const isPlaying = playingId === reel.id;
            const isMuted = mutedStates[reel.id] ?? true;

            return (
              <div
                key={reel.id}
                onMouseEnter={() => handleMouseEnter(reel.id)}
                onMouseLeave={() => handleMouseLeave(reel.id)}
                className="group relative flex flex-col bg-white dark:bg-[#201714] rounded-2xl border border-[#FFE5BF] dark:border-[#352520] shadow-sm hover:shadow-2xl transition-all duration-700 ease-out hover:scale-[1.025] hover:border-[#F62440]/60 z-10 hover:z-20 overflow-hidden"
              >
                {/* Card Top Creator Bar */}
                <div className="p-4 sm:p-5 border-b border-[#FFE5BF]/40 dark:border-[#352520] bg-[#FFFAF3]/70 dark:bg-[#1a1310] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full p-0.5 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center shrink-0 shadow-xs">
                      <div className="w-full h-full bg-white dark:bg-[#181210] rounded-full flex items-center justify-center">
                        <Instagram className="w-4 h-4 text-[#F62440]" />
                      </div>
                    </div>
                    <div>
                      <a
                        href={reel.authorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-stone-900 dark:text-stone-100 hover:text-[#F62440] transition-colors block"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {reel.author}
                      </a>
                      <span className="text-[11px] text-stone-500 dark:text-stone-400 block font-sans">
                        {reel.authorHandle}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-[#FFE5BF]/60 dark:bg-[#352520] text-[#B8860B] dark:text-[#FFE5BF]">
                    {reel.category}
                  </span>
                </div>

                {/* Landscaped Video Box Container with 16:9 Aspect Ratio */}
                <div
                  className="relative w-full aspect-video bg-black overflow-hidden cursor-pointer select-none"
                  onClick={() => handleTogglePlay(reel.id)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[reel.id] = el;
                    }}
                    src={reel.videoSrc}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    playsInline
                    loop
                    muted={isMuted}
                    preload="metadata"
                  />

                  {/* Play Button Overlay (Fades out seamlessly on hover / play) */}
                  <div
                    className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-500 pointer-events-none ${
                      isPlaying ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/95 dark:bg-stone-900/90 text-[#F62440] flex items-center justify-center shadow-2xl backdrop-blur-md transform group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-8 h-8 ml-1 fill-current" />
                    </div>
                  </div>

                  {/* Floating Top Controls (Audio & Fullscreen) */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
                    <button
                      type="button"
                      onClick={(e) => toggleMute(e, reel.id)}
                      className="p-2 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md transition-all duration-300 shadow-md cursor-pointer"
                      title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-white/90" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-[#FFE5BF]" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleFullscreen(e, reel.id)}
                      className="p-2 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md transition-all duration-300 shadow-md cursor-pointer"
                      title="Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4 text-white/90" />
                    </button>
                  </div>

                  {/* Floating Bottom Status Indicator */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs px-3 py-1.5 rounded-xl bg-black/55 backdrop-blur-md z-20 pointer-events-none transition-all duration-300">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-white/60'
                        }`}
                      />
                      <span>{isPlaying ? 'Playing Live' : 'Hover to Play'}</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-white/75">
                      {isMuted ? 'Muted' : 'Sound On'}
                    </span>
                  </div>
                </div>

                {/* Card Content & Narrative */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 group-hover:text-[#F62440] transition-colors duration-300 leading-snug">
                      {reel.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300 line-clamp-2 font-sans font-normal leading-relaxed">
                      {reel.subtitle}
                    </p>

                    {/* Feature Highlight Tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {reel.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-[#FFFAF3] dark:bg-[#181210] border border-[#FFE5BF]/60 dark:border-[#352520] text-stone-600 dark:text-stone-300"
                        >
                          <Sparkles className="w-2.5 h-2.5 text-[#F62440]" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Links */}
                  <div className="mt-4 pt-3 border-t border-[#FFE5BF]/40 dark:border-[#352520] flex items-center justify-between">
                    <a
                      href={reel.reelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F62440] hover:text-[#d41c34] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>View on Instagram</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                    </a>

                    <button
                      type="button"
                      onClick={() => handleTogglePlay(reel.id)}
                      className="inline-flex items-center gap-1 text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-[#F62440] transition-colors cursor-pointer"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Play</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community Follow Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#FFFAF3] via-white to-[#FFFAF3] dark:from-[#201714] dark:via-[#1a1310] dark:to-[#201714] border border-[#FFE5BF] dark:border-[#352520] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl p-0.5 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center shrink-0 shadow-md">
              <div className="w-full h-full bg-white dark:bg-[#181210] rounded-[14px] flex items-center justify-center">
                <Instagram className="w-6 h-6 text-[#F62440]" />
              </div>
            </div>
            <div>
              <h4 className="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100">
                Follow @rajresortpatna for Daily Celebration Videos
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-0.5">
                Tag @rajresortpatna in your Baraat entries, stage moments, and wedding memories to get featured.
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/rajresortpatna/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white text-xs font-bold tracking-wide shadow-md hover:shadow-lg hover:opacity-95 transition-all"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @rajresortpatna</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
