'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Treatment } from '@/types';
import { ScrollableFilterContainer } from '@/components/common/ScrollableFilterContainer';

// Swiper React Components & Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TreatmentsCarouselSectionProps {
  treatments: Treatment[];
}

export const TreatmentsCarouselSection: React.FC<TreatmentsCarouselSectionProps> = ({
  treatments,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Hair Restoration', 'Scalp Therapy', 'Skin Aesthetics'];

  const filtered = treatments.filter((t) =>
    selectedCategory === 'All' ? true : t.category === selectedCategory
  );

  return (
    <section className="py-20 bg-white border-b border-slate-200 treatmentHome">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
              Patented Clinical Portfolio
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#27448a] tracking-tight">
              Our Advanced Treatments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl">
              15+ internationally validated clinical procedures. Drag or swipe through the cards below to explore each procedure.
            </p>
          </div>

          {/* Swiper Arrow Buttons */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              className="treatments-swiper-prev p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 shadow-xs transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous treatment slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="treatments-swiper-next p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 shadow-xs transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next treatment slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mb-10">
          <ScrollableFilterContainer
            className="w-full sm:w-auto min-w-0"
            contentClassName="gap-2 p-1"
            bgColor="white"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-gradient-brand text-white shadow-xs'
                    : 'bg-[#f6f9fc] text-slate-600 hover:text-[#27448a] border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </ScrollableFilterContainer>
        </div>

        {/* Swiper Carousel with Touch Drag & Clean Minimal Cards */}
        <div className="cursor-grab active:cursor-grabbing pb-4">
          <Swiper
            key={selectedCategory}
            modules={[Navigation, Pagination, A11y]}
            navigation={{
              prevEl: '.treatments-swiper-prev',
              nextEl: '.treatments-swiper-next',
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
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
            className="pb-12"
          >
            {filtered.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="h-full bg-[#f6f9fc] rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#0a6ebd]/40 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Treatment Image Display (Clean 4:3 Aspect Ratio) */}
                    <div className="w-full aspect-[4/3] relative overflow-hidden bg-slate-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                      />
                      {item.badge && (
                        <span className="absolute bottom-3 left-3 bg-[#27448a]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Card Minimal Info */}
                    <div className="p-5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0a6ebd] block mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-base font-bold text-[#27448a] mb-1.5 group-hover:text-[#0a6ebd] transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Minimal Action Footer */}
                  <div className="p-5 pt-0 mt-2">
                    <Link
                      href={`/treatments/${item.id}`}
                      className="w-full py-2.5 px-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#0a6ebd] group-hover:bg-[#0a6ebd] group-hover:text-white group-hover:border-transparent transition-all flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                    >
                      <span>View Treatment Page</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
