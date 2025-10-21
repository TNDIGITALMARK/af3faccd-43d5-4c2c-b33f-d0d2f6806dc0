import React from 'react';

export const InsightsIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill="#2196F3" fillOpacity="0.1"/>
    <circle cx="32" cy="32" r="24" fill="#2196F3"/>
    <path d="M28 32L32 28L36 32L32 36L28 32Z" fill="white" stroke="white" strokeWidth="2"/>
    <circle cx="32" cy="22" r="2" fill="white"/>
    <circle cx="32" cy="42" r="2" fill="white"/>
    <circle cx="22" cy="32" r="2" fill="white"/>
    <circle cx="42" cy="32" r="2" fill="white"/>
    <path d="M32 24V28M32 36V40M24 32H28M36 32H40" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const AutomationIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill="#2196F3" fillOpacity="0.1"/>
    <circle cx="32" cy="32" r="24" fill="#2196F3"/>
    <circle cx="32" cy="32" r="12" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="26" r="2" fill="white"/>
    <circle cx="38" cy="32" r="2" fill="white"/>
    <circle cx="32" cy="38" r="2" fill="white"/>
    <circle cx="26" cy="32" r="2" fill="white"/>
    <path d="M32 20V24M40 32H36M32 40V36M24 32H28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const SecurityIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill="#2196F3" fillOpacity="0.1"/>
    <circle cx="32" cy="32" r="24" fill="#2196F3"/>
    <path d="M32 20L38 24V30C38 35 35 38.5 32 40C29 38.5 26 35 26 30V24L32 20Z" fill="white"/>
    <path d="M30 31L31.5 32.5L34 29.5" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const NetworkVisualization = () => (
  <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-1/2 -translate-y-1/2 opacity-70">
    {/* Network nodes */}
    <circle cx="200" cy="200" r="8" fill="#64B5F6" filter="url(#glow)"/>
    <circle cx="150" cy="150" r="6" fill="#42A5F5" filter="url(#glow)"/>
    <circle cx="250" cy="150" r="6" fill="#42A5F5" filter="url(#glow)"/>
    <circle cx="150" cy="250" r="6" fill="#42A5F5" filter="url(#glow)"/>
    <circle cx="250" cy="250" r="6" fill="#42A5F5" filter="url(#glow)"/>
    <circle cx="100" cy="200" r="5" fill="#64B5F6" filter="url(#glow)"/>
    <circle cx="300" cy="200" r="5" fill="#64B5F6" filter="url(#glow)"/>
    <circle cx="200" cy="100" r="5" fill="#64B5F6" filter="url(#glow)"/>
    <circle cx="200" cy="300" r="5" fill="#64B5F6" filter="url(#glow)"/>

    {/* Connecting lines */}
    <line x1="200" y1="200" x2="150" y2="150" stroke="#42A5F5" strokeWidth="1.5" opacity="0.6"/>
    <line x1="200" y1="200" x2="250" y2="150" stroke="#42A5F5" strokeWidth="1.5" opacity="0.6"/>
    <line x1="200" y1="200" x2="150" y2="250" stroke="#42A5F5" strokeWidth="1.5" opacity="0.6"/>
    <line x1="200" y1="200" x2="250" y2="250" stroke="#42A5F5" strokeWidth="1.5" opacity="0.6"/>
    <line x1="200" y1="200" x2="100" y2="200" stroke="#42A5F5" strokeWidth="1.5" opacity="0.6"/>
    <line x1="200" y1="200" x2="300" y2="200" stroke="#42A5F5" strokeWidth="1.5" opacity="0.6"/>
    <line x1="200" y1="200" x2="200" y2="100" stroke="#42A5F5" strokeWidth="1.5" opacity="0.6"/>
    <line x1="200" y1="200" x2="200" y2="300" stroke="#42A5F5" strokeWidth="1.5" opacity="0.6"/>

    {/* Secondary connections */}
    <line x1="150" y1="150" x2="100" y2="200" stroke="#42A5F5" strokeWidth="1" opacity="0.3"/>
    <line x1="250" y1="150" x2="300" y2="200" stroke="#42A5F5" strokeWidth="1" opacity="0.3"/>
    <line x1="150" y1="250" x2="100" y2="200" stroke="#42A5F5" strokeWidth="1" opacity="0.3"/>
    <line x1="250" y1="250" x2="300" y2="200" stroke="#42A5F5" strokeWidth="1" opacity="0.3"/>
    <line x1="150" y1="150" x2="200" y2="100" stroke="#42A5F5" strokeWidth="1" opacity="0.3"/>
    <line x1="250" y1="150" x2="200" y2="100" stroke="#42A5F5" strokeWidth="1" opacity="0.3"/>
    <line x1="150" y1="250" x2="200" y2="300" stroke="#42A5F5" strokeWidth="1" opacity="0.3"/>
    <line x1="250" y1="250" x2="200" y2="300" stroke="#42A5F5" strokeWidth="1" opacity="0.3"/>

    {/* Glow filter */}
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  </svg>
);
