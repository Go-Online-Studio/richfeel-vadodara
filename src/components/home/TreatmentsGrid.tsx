import React, { useState } from 'react';
import { ArrowRight, Globe2, Sparkles, Check, Search } from 'lucide-react';
import { Treatment } from '../../types';
import { ScrollableFilterContainer } from '../common/ScrollableFilterContainer';

interface TreatmentsGridProps {
  treatments: Treatment[];
  onSelectTreatment: (treatmentId: string) => void;
  onOpenBooking: () => void;
}

export const TreatmentsGrid: React.FC<TreatmentsGridProps> = ({
  treatments,
  onSelectTreatment,
  onOpenBooking
}) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Hair Restoration' | 'Scalp Therapy' | 'Skin Aesthetics'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: Array<'All' | 'Hair Restoration' | 'Scalp Therapy' | 'Skin Aesthetics'> = [
    'All',
    'Hair Restoration',
    'Scalp Therapy',
    'Skin Aesthetics'
  ];

  const filtered = treatments.filter((t) => {
    const matchesCategory = activeCategory === 'All' || t.category === activeCategory;
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.technology.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.conditions.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="treatments-section" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
            Advanced Clinical Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#27448a] tracking-tight">
            Our Patented & Specialized Treatments
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3">
            Explore 15+ internationally validated clinical procedures spanning non-surgical stem cell hair regrowth, Austrian scalp drainage, and painless ICE CUBE laser therapies.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-100">
          {/* Segmented Category Buttons with Responsive Edge Blur & Fade */}
          <ScrollableFilterContainer
            className="w-full sm:w-auto min-w-0"
            contentClassName="gap-1.5 p-1 bg-[#f6f9fc] rounded-2xl border border-slate-200/70"
            bgColor="white"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-gradient-brand text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#27448a] hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </ScrollableFilterContainer>

          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments or concerns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0a6ebd] focus:ring-1 focus:ring-[#0a6ebd]"
            />
          </div>
        </div>

        {/* Treatments Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#0a6ebd]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Treatment Image Header (Consistent 4:3 Aspect Ratio) */}
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-[#27448a]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] font-bold">
                      {item.badge}
                    </span>
                  )}
                  {item.countryOfOrigin && (
                    <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-[#0a6ebd] px-2 py-0.5 rounded text-[10px] font-semibold flex items-center gap-1 shadow-xs">
                      <Globe2 className="w-3 h-3" />
                      {item.countryOfOrigin}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  {/* Category */}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0a6ebd] block mb-1">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#27448a] mb-1.5 group-hover:text-[#0a6ebd] transition-colors line-clamp-1">
                    {item.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs font-semibold text-slate-700 mb-2 line-clamp-1">
                    {item.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-900 mb-1">Key Highlights:</div>
                    {item.benefits.slice(0, 2).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-1.5 text-xs text-slate-600 line-clamp-1">
                        <Check className="w-3.5 h-3.5 text-[#0a6ebd] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-[#f8fafc] border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectTreatment(item.id)}
                  className="text-xs font-bold text-[#0a6ebd] hover:text-[#27448a] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>View Full Procedure</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenBooking}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-[#0a6ebd] hover:text-white hover:border-[#0a6ebd] transition-all cursor-pointer"
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-[#f6f9fc] rounded-3xl border border-slate-200">
            <p className="text-sm text-slate-600">No treatments matched your search criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-[#0a6ebd] underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
