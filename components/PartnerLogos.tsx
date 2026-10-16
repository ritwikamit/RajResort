'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
}

/**
 * Official MakeMyTrip Brand Vector Logo
 * Features the signature brand red pill, bold "make", royal blue/white "my" badge, and "trip"
 */
export const MakeMyTripOfficialLogo: React.FC<LogoProps> = ({ className = 'h-7 w-auto' }) => (
  <svg
    viewBox="0 0 204 46"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="MakeMyTrip Official Logo"
  >
    {/* Signature MMT Red Pill Badge Container */}
    <rect width="204" height="46" rx="23" fill="#E41D24" />
    
    {/* Word "make" in Bold Geometric White */}
    <text
      x="18"
      y="30"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontSize="23"
      fontWeight="900"
      letterSpacing="-0.5"
      fill="#FFFFFF"
    >
      make
    </text>

    {/* Center "my" Pill Capsule in White with Royal Navy Text */}
    <rect x="80" y="8" width="46" height="30" rx="15" fill="#FFFFFF" />
    <text
      x="88"
      y="29.5"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontSize="20"
      fontWeight="900"
      letterSpacing="-0.5"
      fill="#0A3982"
    >
      my
    </text>

    {/* Word "trip" in Bold Geometric White */}
    <text
      x="134"
      y="30"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontSize="23"
      fontWeight="900"
      letterSpacing="-0.5"
      fill="#FFFFFF"
    >
      trip
    </text>
  </svg>
);

/**
 * Official Agoda Brand Vector Logo
 * Features the signature 5 colorful dots (Red, Yellow, Green, Blue, Purple) and the lowercase wordmark
 */
export const AgodaOfficialLogo: React.FC<LogoProps> = ({ className = 'h-7 w-auto', variant = 'auto' }) => (
  <svg
    viewBox="0 0 170 46"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Agoda Official Logo"
  >
    {/* 5 Signature Agoda Brand Dots */}
    <g transform="translate(4, 3)">
      <circle cx="10" cy="13" r="6.5" fill="#EE2E24" />
      <circle cx="23" cy="8" r="6.5" fill="#FFB300" />
      <circle cx="36" cy="7" r="6.5" fill="#34B043" />
      <circle cx="48" cy="11" r="6.5" fill="#008BE3" />
      <circle cx="59" cy="18" r="6.5" fill="#844399" />
    </g>

    {/* "agoda" Lowercase Wordmark in Bold Round Typography */}
    <g className={variant === 'dark' ? 'fill-white' : variant === 'light' ? 'fill-[#222222]' : 'fill-[#222222] dark:fill-white'}>
      {/* a */}
      <path d="M78 28.5c0 3.6-2.5 5.8-6 5.8-3.4 0-5.7-2-5.7-5.4 0-4.8 4.2-5.6 10-5.8v-.6c0-2-1.3-3.1-3.6-3.1-2.2 0-3.6.9-4 2.5l-3.3-1c.9-2.7 3.6-4.2 7.5-4.2 4.4 0 6.9 2.2 6.9 6.2v8.5h-3.4v-2.9zm-1.6-3.2c-4 .2-6.5.7-6.5 3.3 0 1.6 1.1 2.7 2.8 2.7 2.2 0 3.7-1.4 3.7-3.7v-2.3z" />
      {/* g */}
      <path d="M93.5 17.1v2.7c-1.1-1.7-3-2.7-5.5-2.7-4.7 0-8.2 3.6-8.2 8.6 0 5 3.5 8.6 8.2 8.6 2.5 0 4.4-1 5.5-2.7v2.4c0 3.2-2.1 4.9-5.3 4.9-2.3 0-3.9-.9-4.5-2.5l-3.3 1.2c1.2 2.8 3.9 4.3 7.8 4.3 5.4 0 8.7-3.1 8.7-8.3V17.1h-3.4zm-4.9 14.3c-2.9 0-5.1-2.2-5.1-5.7s2.2-5.7 5.1-5.7 5.1 2.2 5.1 5.7c0 3.6-2.2 5.7-5.1 5.7z" />
      {/* o */}
      <path d="M107.5 17.1c-5 0-8.7 3.8-8.7 8.6 0 4.8 3.7 8.6 8.7 8.6 5 0 8.7-3.8 8.7-8.6 0-4.8-3.7-8.6-8.7-8.6zm0 14c-3 0-5.2-2.3-5.2-5.4s2.2-5.4 5.2-5.4 5.2 2.3 5.2 5.4-2.2 5.4-5.2 5.4z" />
      {/* d */}
      <path d="M129 9.8v10c-1.1-1.7-3-2.7-5.5-2.7-4.7 0-8.2 3.6-8.2 8.6 0 5 3.5 8.6 8.2 8.6 2.5 0 4.4-1 5.5-2.7v2.4h3.4V9.8H129zm-4.9 21.6c-2.9 0-5.1-2.2-5.1-5.7s2.2-5.7 5.1-5.7 5.1 2.2 5.1 5.7c0 3.6-2.2 5.7-5.1 5.7z" />
      {/* a */}
      <path d="M145.5 28.5c0 3.6-2.5 5.8-6 5.8-3.4 0-5.7-2-5.7-5.4 0-4.8 4.2-5.6 10-5.8v-.6c0-2-1.3-3.1-3.6-3.1-2.2 0-3.6.9-4 2.5l-3.3-1c.9-2.7 3.6-4.2 7.5-4.2 4.4 0 6.9 2.2 6.9 6.2v8.5h-3.4v-2.9zm-1.6-3.2c-4 .2-6.5.7-6.5 3.3 0 1.6 1.1 2.7 2.8 2.7 2.2 0 3.7-1.4 3.7-3.7v-2.3z" />
    </g>
  </svg>
);

/**
 * Official Guest Reservations Brand Vector Logo
 * Features the signature stylized hotel canopy/bed arch emblem in Navy & Cyan,
 * with bold "GUEST" and "RESERVATIONS" typography
 */
export const GuestReservationsOfficialLogo: React.FC<LogoProps> = ({ className = 'h-7 w-auto', variant = 'auto' }) => (
  <svg
    viewBox="0 0 215 46"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Guest Reservations Official Logo"
  >
    {/* Stylized Hotel Canopy & Pin Emblem */}
    <g transform="translate(2, 4)">
      {/* Outer Cyan Arch / Roof */}
      <path
        d="M20 3C11 3 3 11 3 20c0 7.5 5 14 12 16.2V26.5c-3-.9-5-3.5-5-6.5 0-3.9 3.1-7 7-7s7 3.1 7 7c0 3-2 5.6-5 6.5v9.7C26 34 31 27.5 31 20c0-9-8-17-11-17z"
        fill="#00A3E0"
      />
      {/* Inner Navy Bed / Foundation Arch */}
      <path
        d="M17 19.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 .9-.5 1.7-1.2 2.1v9.4h-2.6v-9.4c-.7-.4-1.2-1.2-1.2-2.1z"
        fill="#0C3464"
      />
      {/* Bed Base Line in Navy */}
      <rect x="8" y="27" width="24" height="3" rx="1.5" fill="#0C3464" />
    </g>

    {/* Text Lockup: "GUEST" in Bold Navy & "RESERVATIONS" in Bright Cyan */}
    <text
      x="46"
      y="24"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontSize="17"
      fontWeight="900"
      letterSpacing="1.2"
      className={variant === 'dark' ? 'fill-white' : variant === 'light' ? 'fill-[#0C3464]' : 'fill-[#0C3464] dark:fill-white'}
    >
      GUEST
    </text>
    <text
      x="110"
      y="24"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontSize="17"
      fontWeight="800"
      letterSpacing="1"
      fill="#00A3E0"
    >
      RESERVATIONS
    </text>

    {/* Sub-label: INDEPENDENT NETWORK */}
    <text
      x="47"
      y="37"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontSize="8.5"
      fontWeight="700"
      letterSpacing="2.2"
      className={variant === 'dark' ? 'fill-stone-300' : variant === 'light' ? 'fill-stone-500' : 'fill-stone-500 dark:fill-stone-300'}
    >
      INDEPENDENT NETWORK
    </text>
  </svg>
);
