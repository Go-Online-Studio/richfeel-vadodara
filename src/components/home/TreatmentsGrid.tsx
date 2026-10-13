'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Search } from 'lucide-react';
import { Treatment } from '@/types';
import { ScrollableFilterContainer } from '@/components/common/ScrollableFilterContainer';
import { useConsultation } from '@/context/ConsultationContext';

interface TreatmentsGridProps {
  treatments: Treatment[];
}

export const TreatmentsGrid: React.FC<TreatmentsGridProps> = ({ treatments }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Hair Restoration' | 'Scalp Therapy' | 'Skin Aesthetics'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { openBooking } = useConsultation();

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
          <ScrollableFilterContainer
            className="w-full sm:w-auto min-w-0"
            contentClassName="gap-1.5 p-1 bg-[#f6f9fc] rounded-2xl border border-slate-200/70"
            bgColor="white"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#27448a] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </ScrollableFilterContainer>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments or concerns..."
              className="w-full pl-10 pr-4 py-2 bg-[#f6f9fc] border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a6ebd] focus:bg-white transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Grid matching old structure without country of origin and with clean typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#0a6ebd]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span className="absolute bottom-3 left-3 bg-[#27448a]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] font-bold">
                      {item.badge}
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

                  {/* Key Highlights */}
                  {item.benefits && item.benefits.length > 0 && (
                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-slate-900 mb-1">Key Highlights:</div>
                      {item.benefits.slice(0, 2).map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-1.5 text-xs text-slate-600 line-clamp-1">
                          <Check className="w-3.5 h-3.5 text-[#0a6ebd] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-[#f8fafc] border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  href={`/treatments/${item.id}`}
                  className="text-xs font-bold text-[#0a6ebd] hover:text-[#27448a] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>View Full Procedure</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => openBooking(item.title)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-[#0a6ebd] hover:text-white hover:border-[#0a6ebd] transition-all cursor-pointer"
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
