'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';

interface ScrollableFilterContainerProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  bgColor?: 'slate-tint' | 'white';
  centerWhenFits?: boolean;
}

export const ScrollableFilterContainer: React.FC<ScrollableFilterContainerProps> = ({
  children,
  className = '',
  contentClassName = '',
  bgColor = 'slate-tint',
  centerWhenFits = false
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Tolerance of 2px
    const overflow = el.scrollWidth > el.clientWidth + 4;
    setHasOverflow(overflow);

    const isAtStart = el.scrollLeft <= 4;
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;

    setCanScrollLeft(!isAtStart && overflow);
    setCanScrollRight(!isAtEnd && overflow);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();

    el.addEventListener('scroll', checkScroll, { passive: true });

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        checkScroll();
      });
      resizeObserver.observe(el);
    }

    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  // Re-check whenever children change (e.g. data updates)
  useEffect(() => {
    const t = setTimeout(checkScroll, 50);
    return () => clearTimeout(t);
  }, [children, checkScroll]);

  // Pure background fade gradients (no blur) matching the exact page theme
  const leftGradientClass =
    bgColor === 'white'
      ? 'from-white via-white/80 to-transparent'
      : 'from-[#f6f9fc] via-[#f6f9fc]/80 to-transparent';

  const rightGradientClass =
    bgColor === 'white'
      ? 'from-white via-white/80 to-transparent'
      : 'from-[#f6f9fc] via-[#f6f9fc]/80 to-transparent';

  // Safe alignment: NEVER use justify-center when there is overflow!
  // In CSS, justify-center on overflowing flex containers cuts off left-side items in unscrollable negative coordinate space.
  const alignmentClass = centerWhenFits && !hasOverflow ? 'justify-center' : 'justify-start';

  return (
    <div className={`relative overflow-hidden w-full group/filter-scroll ${className}`}>
      {/* Left Pure Background Fade Overlay (No Blur) */}
      <div
        aria-hidden="true"
        className={`absolute left-0 top-0 bottom-0 w-8 sm:w-12 z-10 pointer-events-none transition-opacity duration-300 bg-gradient-to-r ${leftGradientClass} ${
          canScrollLeft ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Horizontally Scrollable Button Container */}
      <div
        ref={scrollRef}
        className={`flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 ${alignmentClass} ${contentClassName}`}
      >
        {children}

        {/* End Spacer so the last button can pass fully through the fade and be seen clearly when scrolling */}
        {hasOverflow && (
          <span
            className="shrink-0 w-10 sm:w-14 h-1 pointer-events-none select-none"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Right Pure Background Fade Overlay (No Blur) */}
      <div
        aria-hidden="true"
        className={`absolute right-0 top-0 bottom-0 w-10 sm:w-14 z-10 pointer-events-none transition-opacity duration-300 bg-gradient-to-l ${rightGradientClass} ${
          canScrollRight ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
