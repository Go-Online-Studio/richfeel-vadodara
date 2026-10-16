'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Sparkles, Calendar } from 'lucide-react';
import { GalleryItem } from '@/types';
import { ScrollableFilterContainer } from '@/components/common/ScrollableFilterContainer';
import { useConsultation } from '@/context/ConsultationContext';

interface FancyGalleryProps {
  onOpenBooking?: () => void;
}

export const FancyGallery: React.FC<FancyGalleryProps> = () => {
  const { openBooking } = useConsultation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const categories = ['All', 'Hair Restoration', 'Hair Transplant', 'Scalp Therapy', 'Skin Aesthetics', 'Clinic'];

  const items: GalleryItem[] = [
    {
      id: 'gal-1',
      title: 'Stem Cell Follicle Regeneration',
      subtitle: 'Diffuse thinning reversal with Anagrow',
      category: 'Hair Restoration',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      fullImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=90',
      description: 'Patient after 12 sessions of Swiss Apple Stem Cell PCT Rejuve MAX and RF Anagain 10X transdermal stimulation.'
    },
    {
      id: 'gal-2',
      title: 'Ailesbury UK Aesthetic Hairline',
      subtitle: 'Natural temple & hairline restoration',
      category: 'Hair Transplant',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      fullImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1600&q=90',
      description: 'Ailesbury UK technique: zero scalpel cuts, zero stitches, and zero linear scars. 8-month result showing natural density.'
    },
    {
      id: 'gal-3',
      title: 'Vadodara Consultation & Reception Suite',
      subtitle: 'Marvel Square, Sunpharma Road, Vadodara',
      category: 'Clinic',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      fullImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=90',
      description: 'Our world-class clinic environment designed for privacy, hygiene, and personalized trichological consultations.'
    },
    {
      id: 'gal-4',
      title: 'Painless Laser Hair Reduction (ICE CUBE 2.0)',
      subtitle: 'Silky smooth arms & legs with Cool Brush',
      category: 'Skin Aesthetics',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      fullImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=90',
      description: '90% permanent hair reduction achieved after 6 sessions with zero burns, zero redness, and elimination of ingrown hairs.'
    },
    {
      id: 'gal-5',
      title: 'Austrian MLD Scalp Detox (TST+)',
      subtitle: 'Eradication of persistent seborrheic dandruff',
      category: 'Scalp Therapy',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
      fullImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1600&q=90',
      description: 'Microscopic scalp view showing complete clearance of oily crusts and restoration of healthy pink scalp tissue.'
    },
    {
      id: 'gal-6',
      title: 'Biotin-Enriched PRP Crown Densification',
      subtitle: 'Reactivation of sleeping follicles',
      category: 'Hair Restoration',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      fullImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=90',
      description: 'Marked thickening of vertex thinning after 4 sessions of autologous PRP enriched with micronized pharmaceutical biotin.'
    }
  ];

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowRight') {
        setLightboxIdx((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIdx((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIdx, filteredItems.length]);

  return (
    <div className="py-12 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
            Clinical Evidence & Results
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#27448a] tracking-tight">
            Before & After Regrowth Gallery
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
            Real patient outcomes from Richfeel's patented hair restoration, Austrian scalp detox, and advanced laser aesthetics. Click any image to view high-resolution clinical documentation.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="mb-10">
          <ScrollableFilterContainer
            className="w-full sm:w-auto min-w-0"
            contentClassName="gap-2 p-1"
            bgColor="slate-tint"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#27448a] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </ScrollableFilterContainer>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIdx(idx)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 rounded-full bg-white/90 text-slate-800 shadow-lg">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#0a6ebd] text-xs font-bold shadow-xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-[#27448a] group-hover:text-[#0a6ebd] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#0a6ebd]">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#0a6ebd] font-bold">
                  <span>View Case Study</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd]">
              #WePledgeBaldFreeIndia
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#27448a]">
              Start Your Hair Transformation Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Book a video-microscopic Trichogram consultation with certified trichologists at Marvel Square, Sunpharma Road, Vadodara.
            </p>
          </div>

          <button
            onClick={() => openBooking('Gallery Assessment')}
            className="px-6 py-3.5 rounded-2xl bg-gradient-brand text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            Book Free Hair Analysis
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIdx !== null && filteredItems[lightboxIdx] && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() => setLightboxIdx((lightboxIdx - 1 + filteredItems.length) % filteredItems.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer hidden sm:block"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => setLightboxIdx((lightboxIdx + 1) % filteredItems.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer hidden sm:block"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-[16/10] bg-slate-900 relative">
              <img
                src={filteredItems[lightboxIdx].fullImage || filteredItems[lightboxIdx].image}
                alt={filteredItems[lightboxIdx].title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0a6ebd] uppercase tracking-wider">
                  {filteredItems[lightboxIdx].category}
                </span>
                <span className="text-xs text-slate-400">
                  {lightboxIdx + 1} of {filteredItems.length}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#27448a]">
                {filteredItems[lightboxIdx].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {filteredItems[lightboxIdx].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
