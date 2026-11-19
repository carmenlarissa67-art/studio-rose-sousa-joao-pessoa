import React from 'react';

// Monograma RS com arco dourado (lembra o fio dourado das francesinhas da Rose) + ROSE SOUSA + STUDIO
export default function Logo({ light = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${light ? 'text-white' : 'text-ink'}`}>
      <svg viewBox="0 0 54 50" className="w-11 h-10 shrink-0" fill="none" aria-hidden="true">
        <path d="M8 30c2-16 16-25 30-22" stroke="#C6A15B" strokeWidth="1.3" strokeLinecap="round" />
        <text x="18" y="39" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontWeight="500" fontSize="36" fill={light ? '#f4e6dd' : '#561c24'}>R</text>
        <text x="36" y="43" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontWeight="500" fontSize="30" fill={light ? '#e2c1ae' : '#a8766a'}>S</text>
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`text-[8.5px] tracking-[0.5em] font-medium ${light ? 'text-champagne' : 'text-champagne-dark'}`}>STUDIO</span>
        <span className="mt-1 font-serif text-[1.35rem] sm:text-[1.55rem] tracking-[0.08em] font-medium">
          ROSE <span className={light ? 'text-blush' : 'text-brand-500'}>SOUSA</span>
        </span>
      </span>
    </span>
  );
}
