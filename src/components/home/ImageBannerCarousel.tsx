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

interface ImageBannerCarouselProps {
  onNavigate?: (view: string, extra?: string) => void;
  onOpenBooking?: () => void;
}

export const ImageBannerCarousel: React.FC<ImageBannerCarouselProps> = () => {
  const router = useRouter();
  const { openBooking } = useConsultation();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Banner Slides configuration matching brochure references and current theme
  const slides: BannerSlide[] = [
    {
      id: 'slide-anagrow',
      badge: 'Fight Hair Thinning With',
      title: 'Richfeel Anagrow',
      subtitle: "World's First Hair Thinning Treatment With Plant Stem Cell Extracts (PCT Rejuve MAX).",
      mobileSubtitle: 'Revive dormant follicles naturally with Swiss stem cells & Austrian detox.',
      desktopImage: '/images/Banner1.webp',
      mobileImage: '/images/BannerMob1.webp',
      ctaText: 'Explore Anagrow',
      actionView: 'treatment-page',
      actionExtra: 'anagrow'
    },
    {
      id: 'slide-tst',
      badge: 'Stop Hair Loss With',
      title: 'Richfeel TST+',
      subtitle: 'First Time in India — A Revolutionary Patented Technique from Austria.',
      mobileSubtitle: 'Revive dormant follicles naturally with Swiss stem cells & Austrian detox.',
      desktopImage: '/images/Banner2.webp',
      mobileImage: '/images/BannerMob2.webp',
      ctaText: 'Explore TST+',
      actionView: 'treatment-page',
      actionExtra: 'tst-plus'
    },
    {
      id: 'slide-icecube',
      badge: 'Pain-Free ICE CUBE 2.0 Laser',
      title: 'Richfeel Ice Cube 2.0',
      subtitle: 'Laser Hair Reduction with Cool Brush Technology.',
      mobileSubtitle: 'Sapphire contact cooling for permanent pain-free hair reduction.',
      desktopImage: '/images/Banner3.webp',
      mobileImage: '/images/BannerMob3.webp',
      ctaText: 'View Laser Details',
      actionView: 'treatment-page',
      actionExtra: 'laser-hair-reduction'
    },
    {
      id: 'slide-pioneers',
      badge: 'Limca Book Pioneers · Since 1986',
      title: 'Pioneers of Trichology in India',
      subtitle: 'Dr. Apoorva Shah & Dr. Sonal Shah · India’s 1st Certified Trichologists at Sunpharma Road, Vadodara.',
      mobileSubtitle: 'Dr. Apoorva Shah & Dr. Sonal Shah · India’s 1st Certified Trichologists.',
      desktopImage: '/images/Banner4.webp',
      mobileImage: '/images/BannerMob4.webp',
      ctaText: 'Free Assessment',
      actionView: 'booking'
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
      className="relative w-full min-h-[588px] landscape:max-sm:min-h-[440px] sm:min-h-[640px] md:min-h-[700px] xl:min-h-[640px] bg-slate-900 overflow-hidden select-none flex flex-col justify-end xl:justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleInteraction}
      onTouchEnd={handleInteraction}
    >
      {/* Full-Size Background Image with Dual Image Support for Mobile/Tablet-Portrait and Desktop */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Responsive Dual Image: Desktop (>= 1280px and min-height > 500px) vs Mobile/Tablet (< 1280px or mobile landscape) */}
          <picture className="w-full h-full block">
            {/* Mobile (portrait & landscape) and Tablet (< 1280px or short screens) */}
            <source media="(max-width: 1279px), (max-height: 500px)" srcSet={slide.mobileImage} />
            {/* Desktop landscape banner (>= 1280px) */}
            <source media="(min-width: 1280px)" srcSet={slide.desktopImage} />
            <img
              src={slide.desktopImage}
              alt={slide.title}
              referrerPolicy="no-referrer"
              loading={idx === 0 ? 'eager' : 'lazy'}
              className="w-full h-full object-cover object-top filter brightness-[0.88]"
            />
          </picture>

          {/* Scrim Overlay Gradient:
              - Mobile & Tablet Portrait (< 1280px): Bottom-to-top gradient keeping upper image clear for model/illustration
              - Desktop (>= 1280px): Percentage-based right-to-left gradient for right-aligned text
          */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/78 via-slate-950/40 via-38% to-transparent to-70% xl:bg-gradient-to-l xl:from-slate-950/75 xl:via-slate-950/40 xl:via-[40%] xl:to-transparent xl:to-[62%]" />
        </div>
      ))}

      {/* Overlay Content: In normal flow so container height automatically fits text and never cuts down */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pb-20 xl:py-16 flex items-end xl:items-center justify-start xl:justify-end">
        {/* Text Container: Bottom-aligned on mobile/tablet portrait, right-aligned on desktop */}
        <div
          key={currentIdx}
          className="w-full sm:max-w-[560px] xl:w-[42%] xl:max-w-[500px] text-white xl:ml-auto animate-banner-text"
        >
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/15 backdrop-blur-md text-[#4ecdc4] text-[10px] sm:text-xs font-bold border border-white/20 mb-2 sm:mb-3">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#4ecdc4]" />
            <span className="truncate">{active.badge}</span>
          </div>

          {/* Single H1 for the page */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black text-white tracking-tight leading-tight mb-2 sm:mb-3 drop-shadow-sm">
            {active.title}
          </h1>

          {/* 1-2 Line Description: Uses mobileSubtitle on mobile and tablet portrait */}
          <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed mb-4 sm:mb-6 drop-shadow-xs">
            <span className="xl:hidden">{active.mobileSubtitle || active.subtitle}</span>
            <span className="hidden xl:inline">{active.subtitle}</span>
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pointer-events-auto relative z-30">
            <button
              onClick={() => handleActionClick(active)}
              style={{ transform: 'translateZ(0)', willChange: 'transform' }}
              className="group bg-gradient-brand text-white font-bold text-xs sm:text-xs md:text-sm px-4 sm:px-5 md:px-6 py-2.5 sm:py-2.5 md:py-3 rounded-xl shadow-lg hover:shadow-cyan-500/30 hover:shadow-xl hover:scale-[1.03] hover:brightness-115 active:scale-[0.98] transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer pointer-events-auto"
            >
              <span>{active.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => openBooking('Hero Banner Consultation')}
              style={{ transform: 'translateZ(0)', willChange: 'transform' }}
              className="px-3.5 sm:px-4 md:px-5 py-2.5 sm:py-2.5 md:py-3 rounded-xl bg-white/15 hover:bg-white/30 hover:border-white/50 hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] text-white font-bold text-xs sm:text-xs md:text-sm backdrop-blur-md border border-white/25 transition-all cursor-pointer pointer-events-auto"
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
