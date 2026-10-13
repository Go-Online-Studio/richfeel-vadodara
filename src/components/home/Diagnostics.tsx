'use client';

import React from 'react';
import { Microscope, Scan, Activity, ArrowRight } from 'lucide-react';
import { diagnosticTests } from '@/data/staticData';
import { useConsultation } from '@/context/ConsultationContext';

export const Diagnostics: React.FC = () => {
  const { openBooking } = useConsultation();
  const icons = [Microscope, Scan, Activity];

  return (
    <section id="diagnostics" className="py-20 bg-[#f6f9fc] border-b border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
            The Richfeel Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#27448a] tracking-tight">
            Unique Diagnostic Tests
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3">
            At Richfeel every patient undergoes a unique and extensive hair & scalp analysis. These state of the art diagnostic processes at Richfeel help differentiate and diagnose correctly between the various types of hair loss, scalp disorders, and reversible baldness.
          </p>
        </div>

        {/* 3 Diagnostic Cards matching OldCodeFiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diagnosticTests.map((test, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={test.id}
                className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Icon inside rounded soft blue square */}
                  <div className="w-14 h-14 rounded-2xl bg-blue-50/80 text-[#0a6ebd] flex items-center justify-center mb-6 group-hover:bg-[#0a6ebd] group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Kicker */}
                  <span className="text-[11px] font-bold text-[#0a6ebd] tracking-wider uppercase block mb-2 leading-relaxed">
                    {test.subtitle}
                  </span>

                  {/* Main Title */}
                  <h3 className="text-2xl font-bold text-[#27448a] mb-4">
                    {test.title}
                  </h3>

                  {/* Clinical Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6">
                    {test.clinicalDetail}
                  </p>
                </div>

                {/* Bottom Clinical Outcome */}
                <div className="pt-6 border-t border-slate-100 mt-2">
                  <div className="text-xs font-bold text-slate-900 mb-1">
                    Clinical Outcome:
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    {test.outcome}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnostic Action Bar */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-[#27448a]">
              Schedule Your Scalp Capilloscopy & Trichogram in Vadodara
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Direct microscopic diagnosis at Marvel Square, Sunpharma Road.
            </p>
          </div>
          <button
            onClick={() => openBooking('Scalp Diagnostic Tests')}
            className="bg-gradient-brand text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md hover:opacity-95 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Book Scalp Diagnostic</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
