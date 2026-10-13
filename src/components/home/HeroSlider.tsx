import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Award, ShieldCheck, Microscope } from 'lucide-react';

interface HeroSliderProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
  onNavigate: (view: string, extra?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenBooking,
  onExploreTreatments,
  onNavigate
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
        { label: 'Limca Certified', value: '1st in India' }
      ],
      ctaText: 'Book Free Consultation',
      secondaryAction: () => onNavigate('about'),
      secondaryText: 'Founders & Heritage',
      bgGradient: 'from-blue-900/95 via-[#27448a]/90 to-blue-950/95',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80'
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
        { label: 'Target Areas', value: 'Full Body' }
      ],
      ctaText: 'Explore Laser Packages',
      secondaryAction: () => onNavigate('treatment-detail', 'laser-hair-reduction'),
      secondaryText: 'View Laser Details',
      bgGradient: 'from-cyan-950/95 via-[#084f8a]/90 to-[#27448a]/95',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'patented-restoration',
      kicker: 'International Collaborations: UK, Switzerland, Italy, Austria',
      title: 'Patented Hair Restoration Therapies',
      subtitle: 'Anagrow · TST+ · Aesthetic Hair Transplants',
      description: 'From Austrian MLD scalp detoxification (TST+) and Swiss Apple Stem Cells (Anagrow) to UK Ailesbury scar-free hair transplants — world-class scientific solutions for every stage of hair loss.',
      badge: 'Award-Winning Science',
      stats: [
        { label: 'Swiss Stem Cells', value: 'PCT Rejuve' },
        { label: 'Austrian MLD', value: 'TST+ Tech' },
        { label: 'UK Hair Transplant', value: 'No Scars' }
      ],
      ctaText: 'View All 15+ Treatments',
      secondaryAction: onExploreTreatments,
      secondaryText: 'Explore Catalog',
      bgGradient: 'from-[#102454]/95 via-[#1a3875]/90 to-[#0a6ebd]/90',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  // Auto advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const active = slides[currentSlide];

  return (
    <div className="relative overflow-hidden bg-slate-900 text-white min-h-[580px] lg:min-h-[620px] flex items-center">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={active.image}
          alt={active.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.4] transition-all duration-1000 scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${active.bgGradient} mix-blend-multiply transition-colors duration-700`} />
        <div className="absolute inset-0 bg-radial at-c from-transparent via-black/30 to-black/70" />
      </div>

      {/* Slide Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="max-w-3xl">
          {/* Kicker badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#4ecdc4] text-xs font-semibold tracking-wide mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#4ecdc4]" />
            <span>{active.kicker}</span>
          </div>

          {/* Main Titles */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none mb-3">
            {active.title}
          </h1>

          <div className="text-xl sm:text-2xl font-bold mb-4 text-[#4ecdc4]">
            {active.subtitle}
          </div>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
            {active.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={onOpenBooking}
              className="bg-gradient-brand text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2 text-sm cursor-pointer group"
            >
              <span>{active.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={active.secondaryAction}
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-sm border border-white/20 transition-all text-sm cursor-pointer"
            >
              {active.secondaryText}
            </button>
          </div>

          {/* KPI Stats Strip */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15 max-w-lg">
            {active.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2 px-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === currentSlide ? 'w-8 bg-[#4ecdc4]' : 'w-2 bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
