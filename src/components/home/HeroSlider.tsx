'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Award, ShieldCheck, Microscope } from 'lucide-react';
import { useConsultation } from '@/context/ConsultationContext';

interface HeroSliderProps {
  onOpenBooking?: () => void;
  onExploreTreatments?: () => void;
  onNavigate?: (view: string, extra?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenBooking,
  onExploreTreatments,
  onNavigate,
}) => {
  const router = useRouter();
  const { openBooking } = useConsultation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBooking = () => {
    if (onOpenBooking) onOpenBooking();
    else openBooking('Hero Slider Consultation');
  };

  const slides = [
    {
      id: 'pioneers',
      kicker: 'Limca Book of Records Entry · Since 1986',
      title: 'Pioneers of Trichology in India',
      subtitle: 'Dr. Apoorva Shah & Dr. Sonal Shah',
      description: "India's first certified Trichologists and founders of Richfeel Trichology Centre. Bringing over 35 years of clinical hair restoration science to Marvel Square, Vadodara.",
      badge: 'Shahs of Trichology',
      stats: [
        { label: 'Clinical Heritage', value: '38+ Yrs' },
        { label: 'Trusted Centers', value: 'Pan-India' },
        { label: 'Limca Certified', value: '1st in India' },
      ],
      ctaText: 'Book Free Consultation',
      secondaryAction: () => {
        const el = document.getElementById('heritage');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else router.push('/#heritage');
      },
      secondaryText: 'Founders & Heritage',
      bgGradient: 'from-blue-900/95 via-[#27448a]/90 to-blue-950/95',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'laser-reduction',
      kicker: 'Painless Gliding & Deep Dermal Chill',
      title: 'Advanced Laser Hair Reduction 2.0',
      subtitle: 'ICE CUBE Technology with Cool Brush',
      description: 'Experience 90% permanent reduction in unwanted hair with large spot size and continuous gliding motion. Virtually painless, eliminates ingrown hairs, and improves overall skin texture.',
      badge: 'ICE CUBE 2.0 Cool Brush',
      stats: [
        { label: 'Permanent Reduction', value: 'Up to 90%' },
        { label: 'Comfort Level', value: 'Painless' },
        { label: 'Target Areas', value: 'Full Body' },
      ],
      ctaText: 'Explore Laser Packages',
      secondaryAction: () => router.push('/treatments/laser-hair-reduction'),
      secondaryText: 'View Laser Details',
      bgGradient: 'from-cyan-950/95 via-[#084f8a]/90 to-[#27448a]/95',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'patented-restoration',
      kicker: 'International Collaborations: UK, Switzerland, Italy, Austria',
      title: 'Patented Hair Restoration Therapies',
      subtitle: 'Anagrow · TST+ · Aesthetic Hair Transplants',
      description: 'From Austrian MLD scalp detoxification (TST+) and Swiss Apple Stem Cells (Anagrow) to UK Ailesbury scar-free hair transplants — world-class scientific solutions for every stage of hair loss.',
      badge: 'Award-Winning Science',
      stats: [
        { label: 'Stem Cell Formula', value: 'Swiss PCT' },
        { label: 'Detox Technique', value: 'Austrian MLD' },
        { label: 'Scarless Transplants', value: 'UK Technique' },
      ],
      ctaText: 'Discover Stem Cell Anagrow',
      secondaryAction: () => router.push('/treatments/anagrow'),
      secondaryText: 'Learn About Anagrow',
      bgGradient: 'from-blue-950/95 via-[#1d3557]/90 to-[#0a6ebd]/95',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleInteraction = () => {
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  const slide = slides[currentSlide];

  return (
    <div
      className="relative min-h-[580px] sm:min-h-[620px] bg-slate-900 overflow-hidden flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleInteraction}
      onTouchEnd={handleInteraction}
    >
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover opacity-25 filter blur-xs scale-105 transition-all duration-1000"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Slide Copy (7 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#4ecdc4] text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#4ecdc4]" />
              <span>{slide.kicker}</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl font-bold text-cyan-200">
                {slide.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl">
              {slide.description}
            </p>

            {/* Slide Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleBooking}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#4ecdc4] to-[#20b2aa] hover:from-[#3dbdb4] hover:to-[#1a9c95] text-slate-900 font-extrabold text-xs sm:text-sm shadow-lg shadow-teal-900/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={slide.secondaryAction}
                className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                {slide.secondaryText}
              </button>
            </div>
          </div>

          {/* Stats Box (4 Cols) */}
          <div className="lg:col-span-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 space-y-6 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-bold text-[#4ecdc4] uppercase tracking-wider">
                Clinical Metrics
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#4ecdc4]/20 text-[#4ecdc4] text-[11px] font-bold">
                {slide.badge}
              </span>
            </div>

            <div className="space-y-4">
              {slide.stats.map((st, i) => (
                <div key={i} className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-300 font-medium">{st.label}</span>
                  <span className="text-lg font-black text-white">{st.value}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-cyan-200">Vadodara Centre</span>
              <button
                onClick={handleBooking}
                className="text-xs font-bold text-white underline hover:text-[#4ecdc4] transition-colors cursor-pointer"
              >
                Book Diagnostic Test →
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slide Indicators & Arrows */}
        <div className="flex items-center justify-between pt-12 mt-6 border-t border-white/10">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentSlide(i);
                  handleInteraction();
                }}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === currentSlide ? 'w-8 bg-[#4ecdc4]' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                prevSlide();
                handleInteraction();
              }}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                nextSlide();
                handleInteraction();
              }}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
