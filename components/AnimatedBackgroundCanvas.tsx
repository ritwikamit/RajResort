'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

export const AnimatedBackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smooth easing
    let targetX = width / 2;
    let targetY = height / 2;
    let currentX = width / 2;
    let currentY = height / 2;
    let isHovering = false;
    let hoverOpacity = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createPaperPattern();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Pre-render a seamless luxury handcrafted paper texture on an offscreen canvas
    let paperPattern: CanvasPattern | null = null;

    const createPaperPattern = () => {
      const patternCanvas = document.createElement('canvas');
      const patternSize = 256;
      patternCanvas.width = patternSize;
      patternCanvas.height = patternSize;
      const pCtx = patternCanvas.getContext('2d');
      if (!pCtx) return;

      const isDark = theme === 'dark' || document.documentElement.classList.contains('dark');
      
      // Base paper tone according to Color Hunt palette
      pCtx.fillStyle = isDark ? '#181210' : '#FFFAF3';
      pCtx.fillRect(0, 0, patternSize, patternSize);

      // Procedural paper grain & organic fibers
      const numGrain = 1400;
      for (let i = 0; i < numGrain; i++) {
        const x = Math.random() * patternSize;
        const y = Math.random() * patternSize;
        const radius = Math.random() * 0.85 + 0.2;
        const alpha = Math.random() * 0.045 + 0.015;

        pCtx.beginPath();
        pCtx.arc(x, y, radius, 0, Math.PI * 2);
        pCtx.fillStyle = isDark 
          ? `rgba(255, 229, 191, ${alpha * 0.8})`
          : `rgba(246, 36, 64, ${alpha * 0.35})`;
        pCtx.fill();
      }

      // Fine organic paper weave fibers
      const numFibers = 90;
      for (let i = 0; i < numFibers; i++) {
        const x = Math.random() * patternSize;
        const y = Math.random() * patternSize;
        const length = Math.random() * 8 + 3;
        const angle = Math.random() * Math.PI * 2;
        const alpha = Math.random() * 0.035 + 0.01;

        pCtx.beginPath();
        pCtx.moveTo(x, y);
        pCtx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
        pCtx.strokeStyle = isDark 
          ? `rgba(255, 229, 191, ${alpha})`
          : `rgba(216, 27, 52, ${alpha * 0.4})`;
        pCtx.lineWidth = 0.55;
        pCtx.stroke();
      }

      paperPattern = ctx.createPattern(patternCanvas, 'repeat');
    };

    createPaperPattern();

    // Subtle ambient stardust motes (minimal, elegant)
    interface Mote {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      alpha: number;
      baseAlpha: number;
      pulse: number;
    }

    const motes: Mote[] = [];
    const moteCount = Math.min(width < 768 ? 16 : 28, 35);
    for (let i = 0; i < moteCount; i++) {
      motes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.4 + 0.2,
        baseAlpha: Math.random() * 0.35 + 0.15,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw paper texture background
      if (paperPattern) {
        ctx.fillStyle = paperPattern;
        ctx.fillRect(0, 0, width, height);
      }

      // Smooth cursor follow for minimal hover interaction
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      hoverOpacity += ((isHovering ? 1 : 0) - hoverOpacity) * 0.05;

      // Minimal hover sheen: soft ambient glow around cursor
      if (hoverOpacity > 0.01) {
        const isDark = theme === 'dark' || document.documentElement.classList.contains('dark');
        const glowRadius = width < 768 ? 90 : 140;
        
        const gradient = ctx.createRadialGradient(
          currentX,
          currentY,
          0,
          currentX,
          currentY,
          glowRadius
        );

        if (isDark) {
          gradient.addColorStop(0, `rgba(246, 36, 64, ${0.1 * hoverOpacity})`);
          gradient.addColorStop(0.5, `rgba(255, 229, 191, ${0.05 * hoverOpacity})`);
          gradient.addColorStop(1, 'rgba(24, 18, 16, 0)');
        } else {
          gradient.addColorStop(0, `rgba(255, 229, 191, ${0.25 * hoverOpacity})`);
          gradient.addColorStop(0.5, `rgba(246, 36, 64, ${0.05 * hoverOpacity})`);
          gradient.addColorStop(1, 'rgba(255, 250, 243, 0)');
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(currentX, currentY, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Minimal floating stardust specks
      const isDark = theme === 'dark' || document.documentElement.classList.contains('dark');
      motes.forEach((m) => {
        m.x += m.vx;
        m.y += m.vy;
        m.pulse += 0.015;

        // Wrap around boundaries
        if (m.x < 0) m.x = width;
        if (m.x > width) m.x = 0;
        if (m.y < 0) m.y = height;
        if (m.y > height) m.y = 0;

        // Subtle reaction to cursor distance (minimal interaction)
        const dx = m.x - currentX;
        const dy = m.y - currentY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let extraAlpha = 0;
        if (dist < 120) {
          extraAlpha = (1 - dist / 120) * 0.25;
        }

        const alpha = Math.min(1, Math.max(0, m.baseAlpha + Math.sin(m.pulse) * 0.15 + extraAlpha));

        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(255, 229, 191, ${alpha * 0.6})`
          : `rgba(246, 36, 64, ${alpha * 0.25})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[-1] transition-opacity duration-500"
    />
  );
};
