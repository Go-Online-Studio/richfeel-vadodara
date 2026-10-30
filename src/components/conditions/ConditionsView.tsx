'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { conditionCategories } from '@/data/staticData';
import { Treatment } from '@/types';
import { CheckCircle2, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { useConsultation } from '@/context/ConsultationContext';

interface ConditionsViewProps {
  initialConditionId?: string;
  treatments: Treatment[];
  onSelectTreatment?: (id: string) => void;
  onOpenBooking?: () => void;
}

// Generate responsive 3/4 vertical (desktop) and 4/3 horizontal (mobile) image sizes
const getResponsiveConditionImages = (imageUrl: string) => {
  if (imageUrl && imageUrl.includes('images.unsplash.com')) {
    const baseUrl = imageUrl.split('?')[0];
    return {
      desktop: `${baseUrl}?auto=format&fit=crop&w=900&h=1200&q=85`, // Vertical 3:4 for lg to xl
      mobile: `${baseUrl}?auto=format&fit=crop&w=800&h=600&q=85`,   // Horizontal 4:3 for small devices
    };
  }
  return {
    desktop: imageUrl,
    mobile: imageUrl,
  };
};

export const ConditionsView: React.FC<ConditionsViewProps> = ({
  initialConditionId,
  treatments,
}) => {
  const [selectedCondition, setSelectedCondition] = useState(
    initialConditionId || conditionCategories[0].id
  );
  const { openBooking } = useConsultation();

  const activeCategory =
    conditionCategories.find((c) => c.id === selectedCondition) || conditionCategories[0];

  const responsiveActiveImage = getResponsiveConditionImages(activeCategory.image);

  const matchedTreatments = treatments.filter((t) =>
    activeCategory.recommendedTreatmentIds.includes(t.id)
  );

  return (
    <div className="py-12 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
            Targeted Diagnosis & Care
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#27448a] tracking-tight">
            Treatments by Condition
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
            Every hair loss and dermatological condition has a distinct biological cause. Select your symptom below to discover clinically prescribed treatment pathways.
          </p>
        </div>

        {/* Condition Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {conditionCategories.map((cond) => {
            const isSelected = selectedCondition === cond.id;
            return (
              <button
                key={cond.id}
                onClick={() => setSelectedCondition(cond.id)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-brand text-white border-transparent shadow-md'
                    : 'bg-white text-slate-800 border-slate-200/80 hover:border-[#0a6ebd]/40'
                }`}
              >
                <div>
                  <div className={`text-xs font-bold ${isSelected ? 'text-cyan-200' : 'text-[#0a6ebd]'}`}>
                    Concern #{cond.id}
                  </div>
                  <div className="font-bold text-sm mt-1">{cond.name}</div>
                </div>
                <div className={`text-[11px] mt-4 font-semibold ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                  {cond.recommendedTreatmentIds.length} Treatments
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Condition Overview Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Text description: bottom on small devices, left on desktop */}
            <div className="order-2 lg:order-1 lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  Targeted Analysis
                </span>
                <span className="text-xs text-slate-500">
                  Clinical Diagnosis at Vadodara Centre
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#27448a] tracking-tight">
                  Understanding {activeCategory.name}
                </h2>
              </div>

              <div className="pt-1 pb-1">
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-2xl">
                  {activeCategory.what || activeCategory.tagline}
                </p>
              </div>

              {activeCategory.causes && (
                <div className="pt-1">
                  <span className="text-xs font-bold text-slate-800 block mb-2 uppercase tracking-wider">
                    Underlying Biological Triggers:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.causes.map((cause, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {cause}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Visual Image: top on small devices, right on desktop */}
            <div className="order-1 lg:order-2 lg:col-span-5 w-full flex items-center justify-center">
              <div className="w-full aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden bg-slate-100 shadow-md border border-slate-100">
                <img
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Need a personalized clinical assessment?
            </div>
            <div className="flex w-full sm:w-auto flex-col sm:flex-row justify-center items-center gap-3">
              <Link
                href={`/conditions/${activeCategory.id}`}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Read Dedicated Guide
              </Link>
              <button
                onClick={() => openBooking(`Concern: ${activeCategory.name}`)}
                className="px-5 py-2 rounded-xl bg-[#0a6ebd] hover:bg-[#084f8a] text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
              >
                Book Trichogram Test
              </button>
            </div>
          </div>
        </div>

        {/* Prescribed Treatments for this Condition */}
        <div className="mb-12">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#27448a]">
              Prescribed Medical Pathways for {activeCategory.name}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Select any procedure below to view clinical steps and before/after details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-bold shadow-xs ${
                        treatment.isComingSoon
                          ? 'bg-amber-500 text-white'
                          : 'bg-white/95 backdrop-blur-md text-[#0a6ebd]'
                      }`}>
                        {treatment.isComingSoon ? 'Launching Soon' : treatment.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h4 className="text-base font-bold text-[#27448a] group-hover:text-[#0a6ebd] transition-colors">
                      {treatment.title}
                    </h4>
                    {treatment.isComingSoon ? (
                      <p className="text-xs font-bold text-amber-800">
                        Launching Soon
                      </p>
                    ) : (
                      <>
                        <p className="text-xs font-medium text-[#0a6ebd]">
                          {treatment.tagline}
                        </p>
                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                          {treatment.description}
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/treatments/${treatment.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a6ebd] group-hover:translate-x-1 transition-all"
                    >
                      <span>{treatment.isComingSoon ? 'Launching Soon' : 'Explore Procedure'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => openBooking(treatment.title)}
                      className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-[#0a6ebd] hover:text-white text-xs font-bold text-[#0a6ebd] transition-all cursor-pointer"
                    >
                      Consult Doctor
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
