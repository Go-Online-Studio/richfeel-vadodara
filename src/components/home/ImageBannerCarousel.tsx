'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { useConsultation } from '@/context/ConsultationContext';

interface BannerSlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  mobileSubtitle?: string;
  desktopImage: string;
  mobileImage: string;
  ctaText: string;
  actionView: string;
  actionExtra?: string;
}

export const ImageBannerCarousel: React.FC = () => {
  const router = useRouter();
  const { openBooking } = useConsultation();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Banner Slides configuration matching OldCodeFiles exactly
  const slides: BannerSlide[] = [
    {
      id: 'slide-1',
      badge: 'Limca Book Pioneers · Since 1986',
      title: 'Pioneers of Trichology in India',
      subtitle: 'Dr. Apoorva Shah & Dr. Sonal Shah · India’s 1st Certified Trichologists at Sunpharma Road, Vadodara.',
      mobileSubtitle: 'Dr. Apoorva Shah & Dr. Sonal Shah · India’s 1st Certified Trichologists.',
      desktopImage: '/images/Banner1.webp',
      mobileImage: '/images/BannerMob1.webp',
      ctaText: 'Free Assessment',
      actionView: 'booking'
    },
    {
      id: 'slide-2',
      badge: 'Pain-Free ICE CUBE 2.0 Laser',
      title: 'Advanced Laser Hair Reduction',
      subtitle: 'Continuous gliding motion with sapphire contact cooling for 90% permanent reduction.',
      mobileSubtitle: 'Sapphire contact cooling for permanent pain-free hair reduction.',
      desktopImage: '/images/Banner2.webp',
      mobileImage: '/images/BannerMob2.webp',
      ctaText: 'View Laser Details',
      actionView: 'treatment-page',
      actionExtra: 'laser-hair-reduction'
    },
    {
      id: 'slide-3',
      badge: 'Patented Swiss & Austrian Protocols',
      title: 'Anagrow & TST+ Scalp Therapy',
      subtitle: 'Austrian MLD detox & Swiss apple stem cells to revive dormant follicles without needles.',
      mobileSubtitle: 'Revive dormant follicles naturally with Swiss stem cells & Austrian detox.',
      desktopImage: '/images/Banner3.webp',
      mobileImage: '/images/BannerMob3.webp',
      ctaText: 'Explore Treatments',
      actionView: 'treatments'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Autoplay with pause on hover/interaction and resume
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleInteraction = () => {
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  const handleActionClick = (slide: BannerSlide) => {
    if (slide.actionView === 'booking') {
      openBooking('Banner Free Assessment');
    } else if (slide.actionView === 'treatment-page' && slide.actionExtra) {
      router.push(`/treatments/${slide.actionExtra}`);
    } else if (slide.actionView === 'treatments') {
      router.push('/treatments');
    } else {
      router.push('/');
    }
  };

  const active = slides[currentIdx];

  return (
    <section
      aria-label="Full-Size Image Banner"
      className="relative w-full min-h-[600px] lg:min-h-[640px] bg-slate-900 overflow-hidden select-none flex flex-col justify-end sm:justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleInteraction}
      onTouchEnd={handleInteraction}
    >
      {/* Full-Size Background Image with Dual Image Support for Mobile and Desktop */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Responsive Dual Image: Desktop (landscape) vs Mobile (portrait) */}
          <picture className="w-full h-full block">
            {/* Mobile portrait banner (< 640px) */}
            <source media="(max-width: 639px)" srcSet={slide.mobileImage} />
            {/* Desktop & Tablet landscape banner (>= 640px) */}
            <source media="(min-width: 640px)" srcSet={slide.desktopImage} />
            <img
              src={slide.desktopImage}
              alt={slide.title}
              referrerPolicy="no-referrer"
              loading={idx === 0 ? 'eager' : 'lazy'}
              className="w-full h-full object-cover object-top sm:object-[center_right] md:object-right lg:object-center filter brightness-[0.88] transition-transform duration-7000 ease-out scale-100"
            />
          </picture>

          {/* Scrim Overlay Gradient:
              - Mobile: Bottom-to-top gradient (keeps top 60% of image completely clear so photo subject is visible)
              - Tablet & Desktop: Percentage-based horizontal gradient from 42% to 64% so the right half of the banner image is fully visible without dark shadow
          */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 via-35% to-transparent to-70% sm:bg-gradient-to-r sm:from-slate-950/90 sm:via-slate-950/60 sm:via-[42%] sm:to-transparent sm:to-[64%]" />
        </div>
      ))}

      {/* Overlay Content: In normal flow so container height automatically fits text and never cuts down */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:py-14 lg:py-18 flex items-end sm:items-center">
        {/* Text Container: Constrained to percentage width on tablets and desktop so banner image stays clearly visible */}
        <div className="w-full sm:w-[48%] md:w-[45%] lg:w-[42%] max-w-[500px] text-white">
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/15 backdrop-blur-md text-[#4ecdc4] text-[10px] sm:text-xs font-bold border border-white/20 mb-2 sm:mb-3">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#4ecdc4]" />
            <span className="truncate">{active.badge}</span>
          </div>

          {/* Single H1 for the page */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-tight mb-2 sm:mb-2.5 drop-shadow-sm">
            {active.title}
          </h1>

          {/* 1-2 Line Description managed cleanly for mobile and tablet */}
          <p className="text-[11px] sm:text-xs md:text-sm text-slate-200 line-clamp-2 leading-snug sm:leading-relaxed mb-3.5 sm:mb-5 drop-shadow-xs">
            <span className="sm:hidden">{active.mobileSubtitle || active.subtitle}</span>
            <span className="hidden sm:inline">{active.subtitle}</span>
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => handleActionClick(active)}
              className="group bg-gradient-brand text-white font-bold text-xs sm:text-xs md:text-sm px-4 sm:px-5 md:px-6 py-2.5 sm:py-2.5 md:py-3 rounded-xl shadow-lg hover:shadow-cyan-500/30 hover:shadow-xl hover:scale-[1.03] hover:brightness-115 active:scale-[0.98] transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer"
            >
              <span>{active.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => openBooking('Hero Banner Consultation')}
              className="px-3.5 sm:px-4 md:px-5 py-2.5 sm:py-2.5 md:py-3 rounded-xl bg-white/15 hover:bg-white/30 hover:border-white/50 hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] text-white font-bold text-xs sm:text-xs md:text-sm backdrop-blur-md border border-white/25 transition-all cursor-pointer"
            >
              Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls & Indicators: Positioned at bottom-left */}
      <div className="absolute bottom-3 sm:bottom-5 left-4 sm:left-6 lg:left-8 z-30 flex items-center gap-2 sm:gap-3 bg-slate-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 shadow-lg">
        {/* Indicators */}
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentIdx(i);
                handleInteraction();
              }}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === currentIdx ? 'w-6 sm:w-8 bg-[#4ecdc4] shadow-xs' : 'w-2 bg-white/40 hover:bg-white/90 hover:scale-125'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-3.5 bg-white/20 mx-0.5" />

        {/* Prev & Next Arrows */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              prevSlide();
              handleInteraction();
            }}
            className="p-1 sm:p-1.5 rounded-full hover:bg-white/25 hover:scale-110 active:scale-95 text-white transition-all cursor-pointer"
            aria-label="Previous banner slide"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={() => {
              nextSlide();
              handleInteraction();
            }}
            className="p-1 sm:p-1.5 rounded-full hover:bg-white/25 hover:scale-110 active:scale-95 text-white transition-all cursor-pointer"
            aria-label="Next banner slide"
          >
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
