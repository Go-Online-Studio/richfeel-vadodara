import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Sparkles, Calendar } from 'lucide-react';
import { GalleryItem } from '../../types';
import { ScrollableFilterContainer } from '../common/ScrollableFilterContainer';

interface FancyGalleryProps {
  onOpenBooking: () => void;
}

export const FancyGallery: React.FC<FancyGalleryProps> = ({ onOpenBooking }) => {
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
      title: 'Capilloscopy & Trichogram Diagnostic Suite',
      subtitle: 'Microscopic root anchorage & density analysis',
      category: 'Clinic',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      fullImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=90',
      description: 'High-precision diagnostic cameras examining follicle unit density per square cm and the anagen/telogen growth ratio.'
    },
    {
      id: 'gal-7',
      title: 'Vortex Hydra Facial & Dermal Glow',
      subtitle: 'Deep pore purification and radiant bridal tone',
      category: 'Skin Aesthetics',
      image: 'https://images.unsplash.com/photo-1512290900672-1f5be572d4ff?auto=format&fit=crop&w=800&q=80',
      fullImage: 'https://images.unsplash.com/photo-1512290900672-1f5be572d4ff?auto=format&fit=crop&w=1600&q=90',
      description: 'Immediate post-procedure glow after vortex pore cleansing and clinical antioxidant super-serum infusion.'
    },
    {
      id: 'gal-8',
      title: 'Swiss Lace Non-Surgical Hair System',
      subtitle: 'Second-skin permeable derma base fitting',
      category: 'Hair Restoration',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
      fullImage: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=90',
      description: 'Breathable Swiss derma base tailored for extensive male pattern baldness, offering total lifestyle freedom.'
    }
  ];

  const filtered = items.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowRight') setLightboxIdx((lightboxIdx + 1) % filtered.length);
      if (e.key === 'ArrowLeft') setLightboxIdx((lightboxIdx - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIdx, filtered.length]);

  return (
    <div className="py-12 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
            Clinical Visual Evidence
          </span>
          {/* Single H1 on this page */}
          <h1 className="text-3xl sm:text-5xl font-black text-[#27448a] tracking-tight">
            From Bald to Bold
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            #wepledgebaldfreeindia · Real patient transformations and our world-class clinic infrastructure at Marvel Square, Sunpharma Road, Vadodara. Click any image to view in high resolution.
          </p>
        </div>

        {/* Category Filter Pills with Responsive Edge Fade */}
        <div className="mb-10 max-w-5xl mx-auto">
          <ScrollableFilterContainer
            centerWhenFits={true}
            bgColor="slate-tint"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-gradient-brand text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-[#27448a] border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </ScrollableFilterContainer>
        </div>

        {/* Gallery Grid (Card with primarily images and minimal text) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIdx(idx)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#0a6ebd]/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              {/* Gallery Image Container (Consistent 4:3 Aspect Ratio) */}
              <div className="w-full aspect-[4/3] relative overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#0a6ebd] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] font-semibold">
                  {item.category}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-bold text-[#27448a] line-clamp-1 group-hover:text-[#0a6ebd] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Booking CTA Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-[#27448a]">
              Start Your Own Transformation at Richfeel Vadodara
            </h3>
            <p className="text-xs text-slate-500">
              Personalized treatment plans tailored to your hair density and scalp health.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="bg-gradient-brand text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-md hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </button>
        </div>
      </div>

      {/* Fancybox-Style Lightbox Modal */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxIdx(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((lightboxIdx - 1 + filtered.length) % filtered.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((lightboxIdx + 1) % filtered.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIdx].fullImage}
              alt={filtered[lightboxIdx].title}
              referrerPolicy="no-referrer"
              className="max-h-[65vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#4ecdc4] block mb-1">
                {filtered[lightboxIdx].category}
              </span>
              <h4 className="text-xl font-bold">{filtered[lightboxIdx].title}</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {filtered[lightboxIdx].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
