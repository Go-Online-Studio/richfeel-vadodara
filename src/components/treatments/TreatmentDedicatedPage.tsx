import React from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Globe2, Clock, Calendar, Phone, MessageSquare, Sparkles, AlertCircle } from 'lucide-react';
import { Treatment } from '../../types';
import { clinicInfo } from '../../data/staticData';

interface TreatmentDedicatedPageProps {
  treatment: Treatment;
  onBack: () => void;
  onOpenBooking: () => void;
  onSelectTreatment: (treatmentId: string) => void;
  allTreatments: Treatment[];
}

export const TreatmentDedicatedPage: React.FC<TreatmentDedicatedPageProps> = ({
  treatment,
  onBack,
  onOpenBooking,
  onSelectTreatment,
  allTreatments
}) => {
  const relatedTreatments = allTreatments
    .filter((t) => t.category === treatment.category && t.id !== treatment.id)
    .slice(0, 3);

  return (
    <div className="py-10 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Back */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0a6ebd] hover:text-[#27448a] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Treatments Catalog</span>
          </button>
        </div>

        {/* Treatment Hero Card (Image on top on mobile, text on bottom) */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual Image (On top on mobile, 5 cols on desktop, consistent 4:3 aspect ratio) */}
            <div className="order-1 lg:order-2 lg:col-span-5 w-full aspect-[4/3] relative overflow-hidden bg-slate-100">
              <img
                src={treatment.image}
                alt={treatment.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"  
              />
            </div>

            {/* Content (On bottom on mobile, 7 cols on desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  {treatment.category}
                </span>
                {treatment.countryOfOrigin && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                    <Globe2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>Origin: {treatment.countryOfOrigin}</span>
                  </span>
                )}
                {treatment.badge && (
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#4ecdc4]/20 text-[#27448a] border border-[#4ecdc4]/40">
                    {treatment.badge}
                  </span>
                )}
              </div>

              {/* Single H1 for the page */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#27448a] tracking-tight leading-tight">
                {treatment.title}
              </h1>

              <p className="text-sm sm:text-base font-semibold text-[#0a6ebd]">
                {treatment.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {treatment.description}
              </p>

              {/* Tech Highlight */}
              <div className="p-3.5 rounded-xl bg-[#f6f9fc] border border-blue-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#0a6ebd] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold text-slate-900 uppercase block">
                    Specialized Technology / Machine
                  </span>
                  <span className="text-xs text-slate-700 font-medium">
                    {treatment.technology}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="bg-gradient-brand text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation for {treatment.title}</span>
                </button>
                <a
                  href={`tel:${clinicInfo.rawPhones[0]}`}
                  className="px-5 py-3.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0a6ebd]" />
                  <span>Call Vadodara: {clinicInfo.phones[0]}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Clinical Details Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. What is it */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block">
                01. Treatment Science
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#27448a]">
                What is {treatment.title}?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {treatment.what}
              </p>
            </section>

            {/* 2. Why choose it */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block">
                02. Clinical Rationale
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#27448a]">
                Why Choose This Procedure?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {treatment.why}
              </p>
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {treatment.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#0a6ebd] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Before & After Timeline */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block">
                03. Expected Milestones
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#27448a]">
                Before & After Expectations
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {treatment.beforeAfter}
              </p>
            </section>

            {/* 4. How We Diagnose Suitability */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block">
                04. Clinical Suitability
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#27448a]">
                How We Diagnose If This Is Right For You
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {treatment.howDiagnose}
              </p>
            </section>

            {/* 5. Pre-Treatment Care */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block">
                05. Patient Preparation
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#27448a]">
                Pre-Treatment Guidelines
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {treatment.preTreatment.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0a6ebd] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 6. During Procedure Breakdown */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block">
                06. In-Clinic Protocol
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#27448a]">
                Step-by-Step: During the Procedure
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                {treatment.duringProcedure.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#0a6ebd] shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 7. Post-Treatment Aftercare */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block">
                07. Aftercare & Recovery
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#27448a]">
                Post-Treatment Guidelines
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {treatment.postTreatment.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0a6ebd] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sticky Right Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Quick Clinic Booking Card */}
            <div className="bg-gradient-brand text-white rounded-3xl p-6 shadow-md space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4ecdc4] block">
                Vadodara In-Clinic Appointment
              </span>
              <h3 className="text-lg font-bold text-white">
                Book {treatment.title} Consultation
              </h3>
              <p className="text-xs text-cyan-100 leading-relaxed">
                Consult with certified trichologists at Marvel Square, Sunpharma Road, Vadodara.
              </p>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-xl bg-white text-[#27448a] font-bold text-xs shadow-sm hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Consultation</span>
              </button>

              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 hover:opacity-95 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Clinic Staff</span>
              </a>

              <div className="pt-2 text-center text-xs text-cyan-100">
                Hotline: <a href={`tel:${clinicInfo.rawPhones[0]}`} className="font-bold underline text-white">{clinicInfo.phones[0]}</a>
              </div>
            </div>

            {/* Related Treatments in Same Category */}
            {relatedTreatments.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Related {treatment.category} Procedures
                </h4>
                <div className="space-y-3 pt-2">
                  {relatedTreatments.map((rel) => (
                    <button
                      key={rel.id}
                      onClick={() => onSelectTreatment(rel.id)}
                      className="w-full text-left p-3 rounded-2xl bg-[#f8fafc] hover:bg-blue-50/70 border border-slate-100 transition-colors block cursor-pointer group"
                    >
                      <div className="text-xs font-bold text-[#27448a] group-hover:text-[#0a6ebd] transition-colors">
                        {rel.title}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {rel.tagline}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
