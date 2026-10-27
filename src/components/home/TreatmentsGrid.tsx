'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, Check, Search } from 'lucide-react';
import { Treatment } from '@/types';
import { ScrollableFilterContainer } from '@/components/common/ScrollableFilterContainer';
import { useConsultation } from '@/context/ConsultationContext';

// Swiper React Components & Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TreatmentsGridProps {
  treatments: Treatment[];
  onSelectTreatment?: (id: string) => void;
  onOpenBooking?: () => void;
}

export const TreatmentsGrid: React.FC<TreatmentsGridProps> = ({
  treatments,
  onSelectTreatment,
  onOpenBooking,
}) => {
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
    <section id="treatments-section" className="py-12 sm:py-20 bg-white border-b border-slate-200/80 treatmentHome">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
              Advanced Clinical Portfolio
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#27448a] tracking-tight">
              Our Patented &amp; Specialized Treatments
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl">
              Explore 15+ internationally validated clinical procedures spanning non-surgical stem cell hair regrowth, Austrian scalp drainage, and painless ICE CUBE laser therapies. Drag or swipe through the carousel to browse.
            </p>
          </div>

          {/* Swiper Arrow Buttons */}
          <div className="flex items-center gap-2 self-start md:self-end shrink-0">
            <button
              className="treatments-grid-prev p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-[#0a6ebd] hover:text-white hover:border-[#0a6ebd] hover:shadow-md hover:scale-105 active:scale-95 text-slate-800 shadow-xs transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-slate-800"
              aria-label="Previous treatment slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="treatments-grid-next p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-[#0a6ebd] hover:text-white hover:border-[#0a6ebd] hover:shadow-md hover:scale-105 active:scale-95 text-slate-800 shadow-xs transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-slate-800"
              aria-label="Next treatment slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-100">
          <ScrollableFilterContainer
            className="w-full sm:w-auto min-w-0"
            contentClassName="gap-2 p-1"
            bgColor="white"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${activeCategory === cat
                    ? 'bg-gradient-brand text-white shadow-md scale-[1.02]'
                    : 'bg-[#f6f9fc] text-slate-600 hover:text-[#27448a] hover:bg-white hover:border-[#0a6ebd]/50 hover:shadow-xs hover:scale-[1.02] border border-slate-200/80 active:scale-[0.98]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </ScrollableFilterContainer>

          <div className="relative w-full sm:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments or concerns..."
              className="w-full pl-10 pr-4 py-2 bg-[#f6f9fc] border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a6ebd] focus:bg-white transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Carousel or Empty State */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-[#f8fafc] rounded-3xl border border-dashed border-slate-200">
            <p className="text-sm font-semibold text-slate-600">No treatments found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-[#0a6ebd] hover:underline cursor-pointer"
            >
              Clear filters and view all
            </button>
          </div>
        ) : (
          <div className="cursor-grab active:cursor-grabbing pb-4">
            <Swiper
              key={`${activeCategory}-${searchQuery}`}
              modules={[Navigation, Pagination, A11y, Autoplay]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              onTouchEnd={(swiper) => {
                swiper.autoplay?.resume?.();
                swiper.autoplay?.start?.();
              }}
              navigation={{
                prevEl: '.treatments-grid-prev',
                nextEl: '.treatments-grid-next',
              }}
              pagination={{
                clickable: true,
              }}
              loop={filtered.length > 3}
              observer={true}
              observeParents={true}
              spaceBetween={24}
              slidesPerView={1.15}
              grabCursor={true}
              breakpoints={{
                640: {
                  slidesPerView: 2.15,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3.2,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 3.5,
                  spaceBetween: 28,
                },
              }}
              className="!pt-4 sm:!pt-5 pb-12"
            >
              {filtered.map((item) => (
                <SwiperSlide key={item.id} className="h-auto">
                  <div
                    style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                    className="h-full bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-2xl hover:border-[#0a6ebd] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative z-10"
                  >
                    <div>
                      {/* Image Display */}
                      <div
                        style={{ transform: 'translateZ(0)' }}
                        className="aspect-[4/3] rounded-3xl relative overflow-hidden bg-slate-100"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                        />
                        {item.isComingSoon ? (
                          <span className="absolute bottom-3 left-3 bg-amber-500 text-white px-2.5 py-1 rounded-md text-[10px] font-bold shadow-xs">
                            Launching Soon
                          </span>
                        ) : item.badge && (
                          <span className="absolute bottom-3 left-3 bg-[#27448a]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] font-bold">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Info */}
                      <div className="p-5 sm:p-6">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0a6ebd] block mb-1">
                          {item.category}
                        </span>

                        <h3 className="text-base sm:text-lg font-bold text-[#27448a] mb-1.5 group-hover:text-[#0a6ebd] transition-colors line-clamp-1">
                          {item.title}
                        </h3>

                        {item.isComingSoon ? (
                          <div className="my-4 py-3 px-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
                              Launching Soon
                            </span>
                          </div>
                        ) : (
                          <>
                            <p className="text-xs font-semibold text-slate-700 mb-1.5 line-clamp-1">
                              {item.tagline}
                            </p>

                            <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                              {item.description}
                            </p>

                            {/* Highlights */}
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
                          </>
                        )}
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="p-5 pt-0 mt-2 flex items-center gap-2.5 relative z-20 pointer-events-auto">
                      {item.isComingSoon ? (
                        <Link
                          href={`/treatments/${item.id}`}
                          onClick={(e) => {
                            if (onSelectTreatment) {
                              e.preventDefault();
                              onSelectTreatment(item.id);
                            }
                          }}
                          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                          className="w-full py-2.5 px-3 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 hover:bg-amber-100 hover:border-amber-300 transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer text-center pointer-events-auto"
                        >
                          <span>Launching Soon</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      ) : (
                        <>
                          <Link
                            href={`/treatments/${item.id}`}
                            onClick={(e) => {
                              if (onSelectTreatment) {
                                e.preventDefault();
                                onSelectTreatment(item.id);
                              }
                            }}
                            style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                            className="flex-1 py-2.5 px-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#0a6ebd] group-hover:bg-[#0a6ebd] group-hover:text-white group-hover:border-transparent group-hover:shadow-md transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer text-center pointer-events-auto"
                          >
                            <span>View Procedure</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (onOpenBooking) {
                                onOpenBooking();
                              } else {
                                openBooking(item.title);
                              }
                            }}
                            style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                            className="py-2.5 px-3.5 rounded-xl bg-[#f6f9fc] hover:bg-[#27448a] hover:text-white hover:border-[#27448a] hover:shadow-md hover:scale-105 active:scale-95 border border-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer shadow-xs whitespace-nowrap pointer-events-auto"
                          >
                            Book Session
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};
