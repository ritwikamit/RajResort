'use client';

import React, { useRef, useState, useEffect } from 'react';
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
  CheckCircle2,
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
    subtitle: 'Mandap ceremonies, floral walkway, starlight celebrations, and lifetime promises at Raj Resort Patna.',
    category: 'Real Wedding Story',
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
    subtitle: 'From dream weddings to premium celebrations — breathtaking crystal chandelier decor, 3.5-acre lawn night lighting, and banquet setups.',
    category: 'Grand Lawn & Decor',
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
    subtitle: 'Experience the joy, music, and royal welcome — 150-ft illuminated floral gateway, dancing baraatis, and family celebrations.',
    category: 'Vibrant Celebration',
    author: 'Raj Resort Patna',
    authorHandle: '@rajresortpatna',
    authorUrl: 'https://www.instagram.com/rajresortpatna/',
    highlights: ['150-ft Floral Walkway', 'Baraat Procession', '400+ Car Parking'],
  },
];

interface InstagramReelsSectionProps {
  showHeader?: boolean;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const InstagramReelsSection: React.FC<InstagramReelsSectionProps> = ({
  showHeader = true,
  className = '',
  title = 'Watch Real Weddings & Celebrations',
  subtitle = 'Play actual wedding videos, 3.5-acre starlit lawn decors, and high-energy baraat celebrations filmed live at Raj Resort, Patna — plays right here with sound!',
}) => {
  const [activeTab, setActiveTab] = useState<'all' | string>('all');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({
    Db5GzFhzsa6: true,
    DXw5TEspqMl: true,
    DU27q4uCe1L: true,
  });

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const togglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
    } else {
      // Pause any currently playing video first
      if (playingId && videoRefs.current[playingId]) {
        videoRefs.current[playingId]?.pause();
      }
      video.play().then(() => {
        setPlayingId(id);
      }).catch(() => {
        // Fallback if browser blocked unmuted autoplay
        video.muted = true;
        setMutedStates((prev) => ({ ...prev, [id]: true }));
        video.play();
        setPlayingId(id);
      });
    }
  };

  const toggleMute = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setMutedStates((prev) => ({ ...prev, [id]: nextMuted }));
  };

  const handleFullscreen = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitRequestFullscreen) {
      (video as any).webkitRequestFullscreen();
    }
  };

  const displayedReels =
    activeTab === 'all'
      ? INSTAGRAM_REELS
      : INSTAGRAM_REELS.filter((r) => r.id === activeTab);

  return (
    <div className={`w-full ${className}`}>
      {showHeader && (
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F62440]/10 border border-[#F62440]/20 text-[#F62440] text-xs font-semibold uppercase tracking-wider mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>Direct Video Player — Plays On Website</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            {title}
          </h2>

          <p className="mt-3 text-stone-600 dark:text-stone-300 text-sm sm:text-base font-sans font-normal leading-relaxed">
            {subtitle}
          </p>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-[#F62440] text-white shadow-sm'
                  : 'bg-white dark:bg-[#201714] text-stone-700 dark:text-stone-300 border border-[#FFE5BF] dark:border-[#352520] hover:border-[#F62440]/40'
              }`}
            >
              All 3 Videos ({INSTAGRAM_REELS.length})
            </button>
            {INSTAGRAM_REELS.map((reel) => (
              <button
                key={reel.id}
                type="button"
                onClick={() => setActiveTab(reel.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeTab === reel.id
                    ? 'bg-[#F62440] text-white shadow-sm'
                    : 'bg-white dark:bg-[#201714] text-stone-700 dark:text-stone-300 border border-[#FFE5BF] dark:border-[#352520] hover:border-[#F62440]/40'
                }`}
              >
                {reel.category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 3 Reels Responsive Grid */}
      <div
        className={`grid gap-6 sm:gap-8 ${
          displayedReels.length === 1
            ? 'max-w-md mx-auto grid-cols-1'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto'
        }`}
      >
        {displayedReels.map((reel) => {
          const isPlaying = playingId === reel.id;
          const isMuted = mutedStates[reel.id] ?? true;

          return (
            <div
              key={reel.id}
              className="flex flex-col bg-white dark:bg-[#201714] rounded-2xl border border-[#FFE5BF] dark:border-[#352520] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:border-[#F62440]/40"
            >
              {/* Card Header */}
              <div className="p-4 sm:p-5 border-b border-[#FFE5BF]/40 dark:border-[#352520] bg-[#FFFAF3]/60 dark:bg-[#1a1310] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full p-0.5 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center shadow-sm">
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
                    >
                      {reel.author}
                    </a>
                    <span className="text-[11px] text-stone-500 dark:text-stone-400 block font-sans">
                      {reel.authorHandle}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-[#FFE5BF]/50 dark:bg-[#352520] text-[#B8860B] dark:text-[#FFE5BF]">
                  {reel.category}
                </span>
              </div>

              {/* Direct Native Video Player */}
              <div
                className="relative w-full aspect-[9/16] max-h-[520px] bg-black overflow-hidden cursor-pointer flex items-center justify-center select-none"
                onClick={() => togglePlay(reel.id)}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[reel.id] = el;
                  }}
                  src={reel.videoSrc}
                  className="w-full h-full object-cover"
                  playsInline
                  loop
                  muted={isMuted}
                  preload="metadata"
                  onPlay={() => setPlayingId(reel.id)}
                  onPause={() => {
                    if (playingId === reel.id) setPlayingId(null);
                  }}
                />

                {/* Scrim Overlay when Paused */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-black/40 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 text-[#F62440] flex items-center justify-center shadow-2xl backdrop-blur-sm transform group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 ml-1 fill-current" />
                    </div>
                  </div>
                )}

                {/* Floating Top Controls (Audio & Fullscreen) */}
                <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                  <button
                    type="button"
                    onClick={(e) => toggleMute(e, reel.id)}
                    className="p-2 rounded-full bg-black/60 text-white hover:bg-black/80 backdrop-blur-md transition-all shadow-md"
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
                    className="p-2 rounded-full bg-black/60 text-white hover:bg-black/80 backdrop-blur-md transition-all shadow-md"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4 text-white/90" />
                  </button>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/90 text-xs px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md z-10 pointer-events-none">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-white/60'
                      }`}
                    />
                    <span>{isPlaying ? 'Playing on Site' : 'Tap to Play with Sound'}</span>
                  </div>
                  <span className="text-[10px] text-white/70">HD</span>
                </div>
              </div>

              {/* Card Narrative & Highlights */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 group-hover:text-[#F62440] transition-colors leading-snug">
                    {reel.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300 line-clamp-2 font-sans font-normal leading-relaxed">
                    {reel.subtitle}
                  </p>

                  {/* Highlights Tags */}
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

                {/* Bottom Bar: Action to original Instagram Reel */}
                <div className="mt-4 pt-3 border-t border-[#FFE5BF]/40 dark:border-[#352520] flex items-center justify-between">
                  <a
                    href={reel.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F62440] hover:text-[#d41c34] transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>View on Instagram</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                  </a>

                  <button
                    type="button"
                    onClick={() => togglePlay(reel.id)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-[#F62440]"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Play Video</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Social Community Callout */}
      <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#FFFAF3] via-white to-[#FFFAF3] dark:from-[#201714] dark:via-[#1a1310] dark:to-[#201714] border border-[#FFE5BF] dark:border-[#352520] shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
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
  );
};
