import React from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, AlertCircle, Sparkles, ArrowRight, Calendar, Phone, MessageSquare } from 'lucide-react';
import { ConditionCategory, Treatment } from '../../types';
import { clinicInfo } from '../../data/staticData';

interface ConditionDedicatedPageProps {
  condition: ConditionCategory;
  onBack: () => void;
  onSelectTreatment: (treatmentId: string) => void;
  onOpenBooking: () => void;
  allTreatments: Treatment[];
}

export const ConditionDedicatedPage: React.FC<ConditionDedicatedPageProps> = ({
  condition,
  onBack,
  onSelectTreatment,
  onOpenBooking,
  allTreatments
}) => {
  // Matched treatments from our portfolio
  const matchedTreatments = allTreatments.filter((t) =>
    condition.recommendedTreatmentIds.includes(t.id)
  );

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
            <span>Back to All Conditions</span>
          </button>
        </div>

        {/* Condition Hero Header (Image on top on mobile, text on bottom) */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual Image (On top on mobile, 5 cols on desktop, consistent 4:3 aspect ratio) */}
            <div className="order-1 lg:order-2 lg:col-span-5 w-full aspect-[4/3] relative overflow-hidden bg-slate-100">
              <img
                src={condition.image}
                alt={condition.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content (On bottom on mobile, 7 cols on desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                Clinical Dermatology & Trichology Guide
              </span>

              {/* Single H1 for the page */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#27448a] tracking-tight leading-tight">
                {condition.name}
              </h1>

              <p className="text-sm sm:text-base font-semibold text-[#0a6ebd]">
                {condition.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {condition.what}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="bg-gradient-brand text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Consult Vadodara Specialist</span>
                </button>
                <a
                  href={`tel:${clinicInfo.rawPhones[0]}`}
                  className="px-5 py-3.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0a6ebd]" />
                  <span>Call: {clinicInfo.phones[0]}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Condition Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Details (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Why does it happen */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block">
                01. Biological Mechanism
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#27448a]">
                Why Does {condition.name} Happen?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {condition.why}
              </p>
            </section>

            {/* 2. Clinical Types & Stages */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block">
                02. Clinical Classification
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#27448a]">
                Clinical Types & Manifestations
              </h2>
              <div className="space-y-2 pt-1">
                {condition.types.map((type, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0a6ebd] shrink-0 mt-0.5" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Causes & Triggers */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block">
                03. Etiology & Risk Factors
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#27448a]">
                Root Causes & Triggers
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {condition.causes.map((cause, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0a6ebd] shrink-0 mt-2" />
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Symptoms & Warning Signs */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block">
                04. Clinical Signs
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#27448a]">
                Symptoms & Warning Signs
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {condition.symptoms.map((sym, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5. How Richfeel Diagnoses It */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block">
                05. Diagnostic Precision
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#27448a]">
                How Richfeel Vadodara Diagnoses This Condition
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {condition.howDiagnose}
              </p>
            </section>

            {/* 6. Prevention & Management */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block">
                06. Care Protocol
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#27448a]">
                Prevention & Long-Term Management
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {condition.preventManagement.map((prev, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0a6ebd] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{prev}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 7. Treatment Options (Our Treatments) */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#0a6ebd]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd]">
                  07. Solutions at Richfeel Vadodara
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#27448a]">
                Our Clinically Prescribed Treatment Protocols
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Click on any protocol below to view its complete step-by-step clinical breakdown.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {matchedTreatments.map((treatment) => (
                  <div
                    key={treatment.id}
                    className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-[#0a6ebd]/50 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Treatment Image (Consistent 4:3 Aspect Ratio) */}
                      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-slate-200">
                        <img
                          src={treatment.image}
                          alt={treatment.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0a6ebd] block mb-1">
                        {treatment.category}
                      </span>
                      <h3 className="text-base font-bold text-[#27448a] group-hover:text-[#0a6ebd] transition-colors mb-1">
                        {treatment.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {treatment.tagline}
                      </p>
                    </div>

                    <div className="pt-4 mt-3 border-t border-slate-200/70 flex items-center justify-between">
                      <button
                        onClick={() => onSelectTreatment(treatment.id)}
                        className="text-xs font-bold text-[#0a6ebd] flex items-center gap-1 cursor-pointer"
                      >
                        <span>View Procedure</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={onOpenBooking}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 hover:bg-[#0a6ebd] hover:text-white transition-colors cursor-pointer"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Consultation Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="bg-gradient-brand text-white rounded-3xl p-6 shadow-md space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4ecdc4] block">
                Vadodara In-Clinic Assessment
              </span>
              <h3 className="text-lg font-bold text-white">
                Book Diagnostic Check for {condition.name}
              </h3>
              <p className="text-xs text-cyan-100 leading-relaxed">
                Includes Capilloscopy & Trichogram analysis at Marvel Square, Sunpharma Road, Vadodara.
              </p>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-xl bg-white text-[#27448a] font-bold text-xs shadow-sm hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </button>

              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 hover:opacity-95 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Clinical Desk</span>
              </a>

              <div className="pt-2 text-center text-xs text-cyan-100">
                Call Clinic: <a href={`tel:${clinicInfo.rawPhones[0]}`} className="font-bold underline text-white">{clinicInfo.phones[0]}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
