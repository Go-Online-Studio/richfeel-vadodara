'use client';

import React, { useState } from 'react';
import { Sparkles, Eye, ShieldCheck, Calendar, ArrowRight } from 'lucide-react';
import { ScrollableFilterContainer } from '../common/ScrollableFilterContainer';

interface GallerySectionProps {
  onOpenBooking: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'results'>('all');

  const galleryItems = [
    {
      id: 'g-1',
      type: 'results',
      title: 'Hair Regrowth with Anagrow & PCT Rejuve MAX',
      subtitle: 'Diffuse thinning reversal after 6 months',
      category: 'Hair Restoration',
      image: '/images/gallery/gal_anagrow_regrowth.webp',
      badge: '6 Months Protocol'
    },
    {
      id: 'g-2',
      type: 'results',
      title: 'Aesthetic Hairline Restoration',
      subtitle: 'Ailesbury UK Technique (No cuts, no stitches)',
      category: 'Hair Transplant',
      image: '/images/gallery/gal_hairline_transplant.webp',
      badge: 'Ailesbury Protocol'
    },
    {
      id: 'g-4',
      type: 'results',
      title: 'Laser Hair Reduction 2.0 (ICE CUBE)',
      subtitle: 'Smooth, hair-free skin with Cool Brush gliding',
      category: 'Skin Aesthetics',
      image: '/images/gallery/gal_laser_smooth_skin.webp',
      badge: '90% Reduction'
    },
    {
      id: 'g-5',
      type: 'results',
      title: 'Scalp Detox & Dandruff Elimination (TST+)',
      subtitle: 'Austrian MLD clearing persistent seborrhea',
      category: 'Scalp Therapy',
      image: '/images/gallery/gal_scalp_detox_clean.webp',
      badge: 'Austrian MLD'
    }
  ];

  const filtered = galleryItems.filter((item) => activeTab === 'all' || item.type === activeTab);

  return (
    <div className="py-16 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
            Clinical Visual Evidence
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#27448a] tracking-tight">
            From Bald to Bold
          </h1>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            #wepledgebaldfreeindia · Real patient transformations and our high-standard clinic infrastructure at Marvel Square, Vadodara.
          </p>
        </div>

        {/* Filter Pills with Responsive Edge Fade */}
        <div className="mb-12 max-w-xl mx-auto">
          <ScrollableFilterContainer
            centerWhenFits={true}
            bgColor="white"
            contentClassName="p-1.5 bg-white rounded-xl border border-slate-200 shadow-xs"
          >
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                activeTab === 'all'
                  ? 'bg-gradient-brand text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#27448a]'
              }`}
            >
              All Visuals
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                activeTab === 'results'
                  ? 'bg-gradient-brand text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#27448a]'
              }`}
            >
              Treatment Outcomes
            </button>
          </ScrollableFilterContainer>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-64 relative overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-[#27448a]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[11px] font-bold">
                  {item.badge}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-[#0a6ebd] px-2.5 py-0.5 rounded text-[10px] font-semibold">
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-bold text-[#27448a] mb-1 group-hover:text-[#0a6ebd] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-[#27448a]">
              Start Your Transformation at Richfeel Vadodara
            </h3>
            <p className="text-xs text-slate-500">
              Personalized treatment plans tailored to your scalp type and aesthetic expectations.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="bg-gradient-brand text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-md hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book In-Person Diagnostic</span>
          </button>
        </div>
      </div>
    </div>
  );
};
