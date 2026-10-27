'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ZoomIn, Sparkles, Calendar } from 'lucide-react';
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
  const gridRef = useRef<HTMLDivElement>(null);

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

  // Initialize and re-initiate Masonry on mount, filter changes, image loads, and resize
  useEffect(() => {
    let msnryInstance: any = null;
    let imgLoadedInstance: any = null;
    let isCancelled = false;

    const initMasonry = async () => {
      if (typeof window === 'undefined' || !gridRef.current) return;

      try {
        const MasonryModule = await import('masonry-layout');
        const imagesLoadedModule = await import('imagesloaded');
        const Masonry = ((MasonryModule as any).default || MasonryModule) as any;
        const imagesLoaded = ((imagesLoadedModule as any).default || imagesLoadedModule) as any;

        if (isCancelled || !gridRef.current) return;

        // Initialize Masonry with responsive percentage positioning
        msnryInstance = new Masonry(gridRef.current, {
          itemSelector: '.masonry-item',
          columnWidth: '.masonry-sizer',
          percentPosition: true,
          transitionDuration: '0.25s',
          resize: true,
        });

        // Trigger immediate layout
        msnryInstance.layout();

        // Re-layout as each image finishes loading
        imgLoadedInstance = imagesLoaded(gridRef.current);
        imgLoadedInstance.on('progress', () => {
          if (!isCancelled && msnryInstance) {
            msnryInstance.layout();
          }
        });
        imgLoadedInstance.on('always', () => {
          if (!isCancelled && msnryInstance) {
            msnryInstance.layout();
          }
        });
      } catch (err) {
        console.error('Error initializing Masonry layout:', err);
      }
    };

    initMasonry();

    return () => {
      isCancelled = true;
      if (imgLoadedInstance && typeof imgLoadedInstance.off === 'function') {
        imgLoadedInstance.off('progress');
        imgLoadedInstance.off('always');
      }
      if (msnryInstance && typeof msnryInstance.destroy === 'function') {
        msnryInstance.destroy();
      }
    };
  }, [filteredItems]);

  // Initialize Fancybox on gallery anchors and rebind on filter changes
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

        {/* Responsive Masonry Grid (Free Natural Height, Managed Column Widths) */}
        <div ref={gridRef} className="masonry-container relative -mx-2 sm:-mx-3 clear-both">
          {/* Column Sizer for Masonry Calculation (1 col on mobile, 2 on sm, 3 on lg) */}
          <div className="masonry-sizer w-full sm:w-1/2 lg:w-1/3" />

          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="masonry-item w-full sm:w-1/2 lg:w-1/3 p-2 sm:p-3 float-left"
            >
              <a
                href={item.fullImage}
                data-fancybox="richfeel-gallery"
                data-caption={`<b>${item.title}</b> — <span style="opacity: 0.85">${item.category} · ${item.subtitle}</span>`}
                style={{ cursor: 'zoom-in' }}
                className="group block bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-zoom-in"
              >
                {/* Photo Container: NO fixed aspect ratio, natural image height */}
                <div className="relative overflow-hidden bg-slate-900 rounded-2xl" style={{ cursor: 'zoom-in' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Lens-Plus Hover Overlay */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none backdrop-blur-[1px]">
                    <div className="w-12 h-12 rounded-full bg-white/95 text-[#27448a] shadow-2xl border border-white/60 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5 stroke-[2.3]" />
                    </div>
                  </div>

                  {/* Minimal Bottom Vignette Gradient */}
                  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

                  {/* Minimal Bottom Bar: Title & Tag in Flexbox */}
                  <div className="absolute bottom-0 inset-x-0 p-3 sm:p-3.5 z-10 flex items-center justify-between gap-2.5">
                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-200 transition-colors drop-shadow-sm leading-snug truncate flex-1 min-w-0">
                      {item.title}
                    </h3>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold border border-white/15 whitespace-nowrap shrink-0 shadow-xs">
                      {item.category}
                    </span>
                  </div>
                </div>
              </a>
            </div>
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
