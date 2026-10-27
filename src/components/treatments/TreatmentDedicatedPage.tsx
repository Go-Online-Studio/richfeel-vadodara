'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Calendar, Phone, MessageSquare, Sparkles, AlertCircle } from 'lucide-react';
import { Treatment } from '@/types';
import { clinicInfo } from '@/data/staticData';
import { useConsultation } from '@/context/ConsultationContext';
import { AnagrowBrochureSection } from './brochures/AnagrowBrochureSection';
import { TstPlusBrochureSection } from './brochures/TstPlusBrochureSection';
import { AnadtoxBrochureSection } from './brochures/AnadtoxBrochureSection';

interface TreatmentDedicatedPageProps {
  treatment: Treatment;
  allTreatments: Treatment[];
  onBack?: () => void;
  onSelectTreatment?: (id: string) => void;
  onOpenBooking?: () => void;
}

export const TreatmentDedicatedPage: React.FC<TreatmentDedicatedPageProps> = ({
  treatment,
  allTreatments,
}) => {
  const { openBooking } = useConsultation();

  const relatedTreatments = allTreatments
    .filter((t) => t.category === treatment.category && t.id !== treatment.id)
    .slice(0, 3);

  return (
    <div className="py-4 sm:py-8 lg:py-10 pb-20 sm:pb-12 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Breadcrumb & Back */}
        <div className="mb-4 sm:mb-6">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0a6ebd] hover:text-[#27448a] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Treatments Catalog</span>
          </Link>
        </div>

        {/* Treatment Coming Soon View */}
        {treatment.isComingSoon ? (
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="order-2 lg:order-1 lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {treatment.category}
                  </span>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                    Launching Soon
                  </span>
                </div>

                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#27448a] tracking-tight leading-tight">
                    {treatment.title}
                  </h1>
                </div>

                <div className="py-4 px-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 max-w-lg">
                  <p className="text-2xl font-black text-amber-900 tracking-tight">
                    Launching Soon
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => openBooking(`${treatment.title} - Launching Soon Enquiry`)}
                    className="px-6 py-3 rounded-xl bg-gradient-brand text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#4ecdc4]" />
                    <span>Enquire for {treatment.title}</span>
                  </button>

                  <a
                    href={`tel:${clinicInfo.rawPhones[0]}`}
                    className="px-5 py-3 rounded-xl border border-blue-200 text-[#0a6ebd] hover:bg-blue-50/50 font-bold text-xs sm:text-sm transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#0a6ebd]" />
                    <span>Call Vadodara Clinic</span>
                  </a>
                </div>
              </div>

              <div className="order-1 lg:order-2 lg:col-span-5 w-full flex items-center justify-center">
                <div className="w-full aspect-[4/3] relative rounded-2xl lg:rounded-3xl overflow-hidden bg-slate-100 shadow-md border border-slate-100">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] flex items-center justify-center">
                    <span className="px-5 py-2.5 rounded-2xl bg-amber-500 text-white font-black text-sm uppercase tracking-widest shadow-xl border border-amber-300">
                      Launching Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
        {/* Treatment Hero Card - Rendered for non-brochure treatments */}
        {!['anagrow', 'tst-plus', 'ana-d-tox'].includes(treatment.id) && (
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm p-3 sm:p-8 lg:p-10 mb-6 sm:mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Content (7 cols on desktop) */}
              <div className="order-2 lg:order-1 lg:col-span-7 space-y-4 sm:space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {treatment.category}
                  </span>
                  {treatment.badge && (
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#4ecdc4]/20 text-[#27448a] border border-[#4ecdc4]/40">
                      {treatment.badge}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#27448a] tracking-tight leading-tight">
                    {treatment.title}
                  </h1>
                  <p className="text-sm sm:text-base font-semibold text-[#0a6ebd]">
                    {treatment.tagline}
                  </p>
                </div>

                {/* Description with proper spacing */}
                <div className="pt-1 pb-1">
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-2xl">
                    {treatment.description}
                  </p>
                </div>

                {/* Quick Spec Pills */}
                <div className="pt-1 flex flex-wrap gap-3 text-xs">
                  {treatment.duration && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-[#0a6ebd]" />
                      <span>Duration: {treatment.duration}</span>
                    </div>
                  )}
                  {treatment.idealFor && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                      <Sparkles className="w-3.5 h-3.5 text-[#0a6ebd]" />
                      <span>Ideal for: {treatment.idealFor}</span>
                    </div>
                  )}
                </div>

                {/* Call to Actions */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => openBooking(treatment.title)}
                    className="px-6 py-3 rounded-xl bg-gradient-brand text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#4ecdc4]" />
                    <span>Book Consultation for {treatment.title}</span>
                  </button>

                  <a
                    href={`tel:${clinicInfo.rawPhones[0]}`}
                    className="px-5 py-3 rounded-xl border border-blue-200 text-[#0a6ebd] hover:bg-blue-50/50 font-bold text-xs sm:text-sm transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#0a6ebd]" />
                    <span>Call Vadodara Clinic</span>
                  </a>
                </div>
              </div>

              {/* Visual Image (single image with 4/3 aspect ratio) */}
              <div className="order-1 lg:order-2 lg:col-span-5 w-full flex items-center justify-center">
                <div className="w-full aspect-[4/3] relative rounded-2xl lg:rounded-3xl overflow-hidden bg-slate-100 shadow-md border border-slate-100">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Signature Clinical Technology Sections for Anagrow, TST+, and Ana-d-tox */}
        {treatment.id === 'anagrow' && (
          <div className="mb-6 sm:mb-12">
            <AnagrowBrochureSection onOpenBooking={openBooking} />
          </div>
        )}

        {treatment.id === 'tst-plus' && (
          <div className="mb-6 sm:mb-12">
            <TstPlusBrochureSection onOpenBooking={openBooking} />
          </div>
        )}

        {treatment.id === 'ana-d-tox' && (
          <div className="mb-6 sm:mb-12">
            <AnadtoxBrochureSection onOpenBooking={openBooking} />
          </div>
        )}

        {/* Detailed Procedure Sections - Rendered for non-brochure treatments to avoid content duplication */}
        {!['anagrow', 'tst-plus', 'ana-d-tox'].includes(treatment.id) ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Left Column: Procedure Steps & Benefits (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Procedure Steps */}
              {((treatment.duringProcedure && treatment.duringProcedure.length > 0) || (treatment.procedureSteps && treatment.procedureSteps.length > 0)) && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#27448a] mb-6 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#0a6ebd]" />
                    <span>Clinical Procedure Workflow</span>
                  </h2>
                  <div className="space-y-4">
                    {(treatment.duringProcedure || treatment.procedureSteps || []).map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-[#f6f9fc] border border-slate-100">
                        <div className="w-7 h-7 rounded-full bg-gradient-brand text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Benefits */}
              {treatment.benefits && treatment.benefits.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#27448a] mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0a6ebd]" />
                    <span>Key Clinical Benefits</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {treatment.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-blue-50/40 border border-blue-100/60">
                        <CheckCircle2 className="w-4 h-4 text-[#0a6ebd] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pre & Post Care Instructions */}
              {((treatment.preTreatment && treatment.preTreatment.length > 0) || treatment.preCare || (treatment.postTreatment && treatment.postTreatment.length > 0) || treatment.postCare) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {(treatment.preTreatment || treatment.preCare) && (
                    <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
                      <h3 className="text-base font-bold text-[#27448a] mb-3 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-[#0a6ebd]" />
                        <span>Pre-Treatment Care</span>
                      </h3>
                      <div className="text-xs text-slate-600 leading-relaxed space-y-1.5">
                        {Array.isArray(treatment.preTreatment)
                          ? treatment.preTreatment.map((p, i) => <p key={i}>• {p}</p>)
                          : <p>{treatment.preCare}</p>}
                      </div>
                    </div>
                  )}
                  {(treatment.postTreatment || treatment.postCare) && (
                    <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
                      <h3 className="text-base font-bold text-[#27448a] mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#4ecdc4]" />
                        <span>Post-Treatment Care</span>
                      </h3>
                      <div className="text-xs text-slate-600 leading-relaxed space-y-1.5">
                        {Array.isArray(treatment.postTreatment)
                          ? treatment.postTreatment.map((p, i) => <p key={i}>• {p}</p>)
                          : <p>{treatment.postCare}</p>}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Column: Conditions, Diagnostics & FAQs (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Target Conditions */}
              {treatment.conditions && treatment.conditions.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
                  <h3 className="text-base font-bold text-[#27448a] mb-3">
                    Conditions Addressed
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {treatment.conditions.map((cond, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-[#0a6ebd] border border-blue-100"
                      >
                        {cond}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Clinic Info Box */}
              <div className="bg-gradient-brand text-white rounded-3xl p-6 shadow-md space-y-3">
                <span className="text-[11px] font-bold text-[#4ecdc4] uppercase tracking-wider block">
                  Vadodara Centre
                </span>
                <h4 className="text-lg font-bold">
                  Consult With A Certified Trichologist
                </h4>
                <p className="text-xs text-cyan-100 leading-relaxed">
                  Visit our Marvel Square clinic on Sunpharma Road for video-microscopic scalp assessment before beginning this treatment.
                </p>
                <button
                  onClick={() => openBooking(treatment.title)}
                  className="w-full py-2.5 rounded-xl bg-white text-[#27448a] text-xs font-black shadow-md hover:bg-slate-50 transition-colors mt-2 cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>

              {/* Related Treatments in same category */}
              {relatedTreatments.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
                  <h3 className="text-base font-bold text-[#27448a]">
                    Related {treatment.category}
                  </h3>
                  <div className="space-y-2">
                    {relatedTreatments.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/treatments/${rel.id}`}
                        className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-100 block transition-all group"
                      >
                        <div className="text-xs font-bold text-slate-800 group-hover:text-[#0a6ebd]">
                          {rel.title}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {rel.tagline}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Complementary footer for Brochure Treatments: Clinic Info & Related Treatments without duplicate workflow */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Target Conditions */}
            {treatment.conditions && treatment.conditions.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
                <h3 className="text-base font-bold text-[#27448a]">
                  Conditions Addressed
                </h3>
                <div className="flex flex-wrap gap-2">
                  {treatment.conditions.map((cond, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-[#0a6ebd] border border-blue-100"
                    >
                      {cond}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Clinic Info Box */}
            <div className="bg-gradient-brand text-white rounded-3xl p-6 shadow-md space-y-3">
              <span className="text-[11px] font-bold text-[#4ecdc4] uppercase tracking-wider block">
                Vadodara Centre · Marvel Square
              </span>
              <h4 className="text-lg font-bold">
                Consult With A Certified Trichologist
              </h4>
              <p className="text-xs text-cyan-100 leading-relaxed">
                Visit our clinic on Sunpharma Road for video-microscopic scalp assessment before beginning this treatment.
              </p>
              <button
                onClick={() => openBooking(treatment.title)}
                className="w-full py-2.5 rounded-xl bg-white text-[#27448a] text-xs font-black shadow-md hover:bg-slate-50 transition-colors mt-2 cursor-pointer"
              >
                Book Appointment
              </button>
            </div>

            {/* Related Treatments in same category */}
            {relatedTreatments.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
                <h3 className="text-base font-bold text-[#27448a]">
                  Related {treatment.category}
                </h3>
                <div className="space-y-2">
                  {relatedTreatments.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/treatments/${rel.id}`}
                      className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-100 block transition-all group"
                    >
                      <div className="text-xs font-bold text-slate-800 group-hover:text-[#0a6ebd]">
                        {rel.title}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {rel.tagline}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
          </>
        )}
      </div>
    </div>
  );
};
