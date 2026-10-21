'use client';

import React, { useState, useEffect } from 'react';
import { Maximize2, Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { GalleryItem } from '@/types';
import { ScrollableFilterContainer } from '@/components/common/ScrollableFilterContainer';
import { useConsultation } from '@/context/ConsultationContext';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

interface FancyGalleryProps {
  onOpenBooking?: () => void;
}

export const FancyGallery: React.FC<FancyGalleryProps> = () => {
  const { openBooking } = useConsultation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Hair Restoration', 'Hair Transplant', 'Scalp Therapy', 'Skin Aesthetics', 'Clinic'];

  const items: GalleryItem[] = [
    {
      id: 'gal-1',
      title: 'Stem Cell Follicle Regrowth',
      subtitle: 'Anagrow & PCT Rejuve MAX protocol',
      category: 'Hair Restoration',
      image: '/images/gallery/gal_anagrow_regrowth.webp',
      fullImage: '/images/gallery/gal_anagrow_regrowth.jpg',
      description: 'Anagrow Swiss plant stem cell hair regrowth'
    },
    {
      id: 'gal-2',
      title: 'Aesthetic Hairline Restoration',
      subtitle: 'Ailesbury UK Micro-FUE technique',
      category: 'Hair Transplant',
      image: '/images/gallery/gal_hairline_transplant.webp',
      fullImage: '/images/gallery/gal_hairline_transplant.jpg',
      description: 'Ailesbury UK natural hairline transplant'
    },
    {
      id: 'gal-3',
      title: 'Vadodara Consultation & Reception Suite',
      subtitle: 'Marvel Square, Sunpharma Road',
      category: 'Clinic',
      image: '/images/gallery/gal_clinic_lounge.webp',
      fullImage: '/images/gallery/gal_clinic_lounge.jpg',
      description: 'Vadodara clinic lounge and consultation suite'
    },
    {
      id: 'gal-4',
      title: 'Painless Laser Hair Reduction (ICE CUBE 2.0)',
      subtitle: 'Cool Brush painless laser treatment',
      category: 'Skin Aesthetics',
      image: '/images/gallery/gal_laser_smooth_skin.webp',
      fullImage: '/images/gallery/gal_laser_smooth_skin.jpg',
      description: 'Laser hair reduction 2.0 smooth skin outcome'
    },
    {
      id: 'gal-5',
      title: 'Austrian MLD Scalp Detox (TST+)',
      subtitle: 'Microscopic follicle clarification',
      category: 'Scalp Therapy',
      image: '/images/gallery/gal_scalp_detox_clean.webp',
      fullImage: '/images/gallery/gal_scalp_detox_clean.jpg',
      description: 'TST+ Austrian MLD healthy scalp and pore clearance'
    },
    {
      id: 'gal-6',
      title: 'Biotin-Enriched PRP Crown Densification',
      subtitle: 'Autologous growth factor stimulation',
      category: 'Hair Restoration',
      image: '/images/gallery/gal_prp_crown_density.webp',
      fullImage: '/images/gallery/gal_prp_crown_density.jpg',
      description: 'PRP enriched hair density restoration'
    }
  ];

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter((item) => item.category === selectedCategory);

  // Initialize Fancybox on gallery anchors
  useEffect(() => {
    Fancybox.bind('[data-fancybox="richfeel-gallery"]', {
      theme: 'dark',
      dragToClose: true,
      fadeEffect: true,
      zoomEffect: true,
      backdropClick: 'close',
    });

    return () => {
      Fancybox.unbind('[data-fancybox="richfeel-gallery"]');
      Fancybox.destroy();
    };
  }, [filteredItems]);

  return (
    <div className="py-6 sm:py-10 lg:py-12 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header: Visual-first, minimal, elegant */}
        <div className="max-w-2xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0a6ebd] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Gallery</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#27448a] tracking-tight">
            Real Results &amp; Clinic Visuals
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Click any photo to open full-screen high-resolution view with zoom and navigation.
          </p>
        </div>

        {/* Categories Filter Pills */}
        <div className="mb-6 sm:mb-8">
          <ScrollableFilterContainer
            className="w-full sm:w-auto min-w-0"
            contentClassName="gap-2 p-1"
            bgColor="slate-tint"
          >
            {categories.map((cat) => {
              const count = cat === 'All' ? items.length : items.filter((i) => i.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer inline-flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#27448a] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </ScrollableFilterContainer>
        </div>

        {/* Fancybox Visual Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {filteredItems.map((item) => (
            <a
              key={item.id}
              href={item.fullImage}
              data-fancybox="richfeel-gallery"
              data-caption={`<b>${item.title}</b> — <span style="opacity: 0.85">${item.category} · ${item.subtitle}</span>`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block cursor-pointer"
            >
              {/* Photo Container with Sleek Hover Zoom */}
              <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Category Badge on top-left */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold shadow-xs border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Dark Vignette & Hover Fullscreen Trigger */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Centered Expand Icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-[#27448a] shadow-xl flex items-center justify-center scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Minimal Overlay Caption on Image */}
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-white z-10">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-200 transition-colors drop-shadow-sm leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mt-1 text-[11px] text-cyan-100/90 font-medium">
                    <span>{item.subtitle}</span>
                    <span className="text-[10px] text-white/80 group-hover:text-cyan-200 flex items-center gap-0.5">
                      View full size <ChevronRight className="w-3 h-3 inline" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Minimal Bottom Assessment CTA */}
        <div className="mt-10 sm:mt-14 bg-gradient-to-r from-[#27448a] to-[#0a6ebd] rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-1.5 text-center md:text-left max-w-xl">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#4ecdc4] block">
              In-Clinic Consultation · Vadodara
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-white">
              Start Your Hair Transformation
            </h3>
            <p className="text-xs sm:text-sm text-cyan-100 leading-relaxed">
              Book a digital Trichogram scalp assessment with certified trichologists at Marvel Square, Sunpharma Road.
            </p>
          </div>

          <button
            onClick={() => openBooking('Gallery Page Consultation')}
            className="w-full sm:w-auto px-5 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-white text-[#27448a] font-black text-xs sm:text-sm shadow-md hover:bg-cyan-50 hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap inline-flex items-center justify-center gap-2 shrink-0"
          >
            <Calendar className="w-4 h-4 text-[#0a6ebd]" />
            <span>Book In-Clinic Assessment</span>
          </button>
        </div>
      </div>
    </div>
  );
};
