'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, AlertCircle, Sparkles, ArrowRight, Calendar, Phone, MessageSquare } from 'lucide-react';
import { ConditionCategory, Treatment } from '@/types';
import { clinicInfo } from '@/data/staticData';
import { useConsultation } from '@/context/ConsultationContext';

interface ConditionDedicatedPageProps {
  condition: ConditionCategory;
  allTreatments: Treatment[];
  onBack?: () => void;
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

export const ConditionDedicatedPage: React.FC<ConditionDedicatedPageProps> = ({
  condition,
  allTreatments,
}) => {
  const { openBooking } = useConsultation();
  const responsiveImages = getResponsiveConditionImages(condition.image);

  // Matched treatments from our portfolio
  const matchedTreatments = allTreatments.filter((t) =>
    condition.recommendedTreatmentIds.includes(t.id)
  );

  return (
    <div className="py-10 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Back */}
        <div className="mb-6">
          <Link
            href="/conditions"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0a6ebd] hover:text-[#27448a] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Conditions</span>
          </Link>
        </div>

        {/* Condition Hero Header */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Content (7 cols on desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                Clinical Dermatology & Trichology Guide
              </span>

              {/* Title */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#27448a] tracking-tight leading-tight">
                  {condition.name} Treatment & Causes
                </h1>
              </div>

              {/* Description with proper spacing */}
              <div className="pt-1 pb-1">
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-2xl">
                  {condition.what || condition.tagline}
                </p>
              </div>

              {/* Biological Causes */}
              {condition.causes && (
                <div className="pt-1">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Primary Biological Triggers:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {condition.causes.map((cause, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {cause}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openBooking(`Evaluation for ${condition.name}`)}
                  className="px-6 py-3 rounded-xl bg-gradient-brand text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#4ecdc4]" />
                  <span>Book Diagnostic Evaluation</span>
                </button>

                <a
                  href={`tel:${clinicInfo.rawPhones[0]}`}
                  className="px-5 py-3 rounded-xl border border-blue-200 text-[#0a6ebd] hover:bg-blue-50/50 font-bold text-xs sm:text-sm transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#0a6ebd]" />
                  <span>Call {clinicInfo.phones[0]}</span>
                </a>
              </div>
            </div>

            {/* Visual Image (Consistent 4:3 Aspect Ratio for zero subject cropping across all devices) */}
            <div className="order-1 lg:order-2 lg:col-span-5 w-full flex items-center justify-center">
              <div className="w-full aspect-[4/3] relative rounded-2xl lg:rounded-3xl overflow-hidden bg-slate-100 shadow-md border border-slate-100">
                <img
                  src={condition.image}
                  alt={condition.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Symptoms & Trichology Diagnostic Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Key Symptoms & Clinical Indicators (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#27448a] flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#0a6ebd]" />
              <span>Recognize the Warning Signs</span>
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Early detection prevents irreversible miniaturization. Look for these key diagnostic indicators of {condition.name}:
            </p>
            <div className="space-y-3 pt-2">
              {condition.symptoms?.map((symptom, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#f6f9fc] border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#0a6ebd] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    {symptom}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostic Methodology at Vadodara (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#27448a] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#4ecdc4]" />
              <span>How We Diagnose at Vadodara Centre</span>
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Unlike generic clinics that guess, Richfeel utilizes clinical hardware to identify root causes:
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1">
                <div className="text-xs font-bold text-[#0a6ebd]">
                  1. Digital Capilloscopy Analysis
                </div>
                <p className="text-xs text-slate-600">
                  High-magnification dermatoscope examining micro-circulation, sebum plugs, and scalp erythema.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1">
                <div className="text-xs font-bold text-[#0a6ebd]">
                  2. Trichogram A/T Ratio Test
                </div>
                <p className="text-xs text-slate-600">
                  Scientific measurement calculating anagen to telogen follicle proportions.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1">
                <div className="text-xs font-bold text-[#0a6ebd]">
                  3. Internal Tricho-Nutritional Profiling
                </div>
                <p className="text-xs text-slate-600">
                  Screening for systemic hormonal imbalances, vitamin D/B12 deficiencies, and ferritin levels.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Clinical Treatments */}
        <div className="mb-14">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-1">
              Targeted Medical Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#27448a]">
              Recommended Procedures for {condition.name}
            </h2>
            <p className="text-xs text-slate-600 mt-2">
              These procedures are scientifically indicated for this condition based on international trichology guidelines:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#0a6ebd] text-xs font-bold shadow-xs">
                        {treatment.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold text-[#27448a] group-hover:text-[#0a6ebd] transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-xs font-medium text-[#0a6ebd]">
                      {treatment.tagline}
                    </p>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/treatments/${treatment.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a6ebd] group-hover:translate-x-1 transition-all"
                    >
                      <span>Explore Procedure</span>
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
