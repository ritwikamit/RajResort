'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  vx: number;
  vy: number;
  alpha: number;
  targetAlpha: number;
  alphaSpeed: number;
  color: string;
  glowColor: string;
  pulsePhase: number;
  pulseSpeed: number;
}

export const AnimatedBackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Palette tailored for luxury resort vibe in Light & Dark modes
    const isDark = theme === 'dark' || document.documentElement.classList.contains('dark');
    
    const palette = isDark
      ? [
          { color: '#F5EBE1', glow: 'rgba(245, 235, 225, 0.4)' }, // Warm Pearl Starlight
          { color: '#E5D5C5', glow: 'rgba(229, 213, 197, 0.35)' }, // Champagne Glow
          { color: '#D4C4B5', glow: 'rgba(212, 196, 181, 0.3)' },  // Soft Muted Ivory
          { color: '#C8A898', glow: 'rgba(200, 168, 152, 0.25)' }, // Gentle Rose Gold
        ]
      : [
          { color: '#C5B5A5', glow: 'rgba(197, 181, 165, 0.25)' }, // Soft Linen Pearl
          { color: '#B8A595', glow: 'rgba(184, 165, 149, 0.2)' },  // Warm Muted Amber
          { color: '#A59282', glow: 'rgba(165, 146, 130, 0.2)' },  // Neutral Starlight
          { color: '#881318', glow: 'rgba(136, 19, 24, 0.15)' },   // Deep Royal Wine Hint
        ];

    const particleCount = Math.min(width < 768 ? 32 : 65, 75);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const pColor = palette[Math.floor(Math.random() * palette.length)];
      const baseRadius = Math.random() * 2.2 + 0.9;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: baseRadius,
        baseRadius,
        vx: (Math.random() - 0.5) * 0.45,
        vy: -Math.random() * 0.5 - 0.15, // Gentle upward celestial float
        alpha: Math.random() * 0.5 + 0.15,
        targetAlpha: Math.random() * 0.6 + 0.25,
        alphaSpeed: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
        color: pColor.color,
        glowColor: pColor.glow,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
      });
    }

    let frameCount = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      frameCount++;

      // Draw faint constellation links between nearby particles
      const maxConnectDist = isDark ? 95 : 75;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const linkAlpha = (1 - dist / maxConnectDist) * 0.12 * Math.min(particles[i].alpha, particles[j].alpha);
            ctx.strokeStyle = isDark ? `rgba(253, 230, 138, ${linkAlpha})` : `rgba(212, 175, 55, ${linkAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Render & update floating glowing particles without expensive canvas shadowBlur
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Sinuous undulating drift
        p.pulsePhase += p.pulseSpeed;
        p.x += p.vx + Math.sin(p.pulsePhase) * 0.25;
        p.y += p.vy;

        // Subtle gentle repulsion from cursor
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 120 && mDist > 0) {
          const force = (1 - mDist / 120) * 0.5;
          p.x += (mdx / mDist) * force;
          p.y += (mdy / mDist) * force;
        }

        // Pulse size and alpha
        p.radius = p.baseRadius + Math.sin(p.pulsePhase) * 0.5;
        p.alpha += p.alphaSpeed;

        if (p.alpha > p.targetAlpha || p.alpha < 0.12) {
          p.alphaSpeed = -p.alphaSpeed;
        }

        // Wrap around bounds
        if (p.y < -15) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 10;
        if (p.x > width + 15) p.x = -10;

        const effectiveAlpha = Math.max(0.08, Math.min(p.alpha, 0.85));
        
        // Fast dual-circle glow without expensive CPU shadowBlur
        ctx.globalAlpha = effectiveAlpha * 0.4;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, p.radius * 2), 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = effectiveAlpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, p.radius), 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-80 dark:opacity-90 transition-opacity duration-700"
    />
  );
};
