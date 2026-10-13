'use client';

import React from 'react';
import Link from 'next/link';
import { clinicInfo } from '@/data/staticData';
import { useConsultation } from '@/context/ConsultationContext';

export const ConsultationCtaBanner: React.FC = () => {
  const { openBooking } = useConsultation();

  return (
    <section className="py-16 bg-gradient-brand text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#4ecdc4]">
          Sunpharma Road, Vadodara
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Invest In Your Hair, It's The Crown You Never Take Off
        </h2>
        <p className="text-xs sm:text-sm text-cyan-100 max-w-2xl mx-auto leading-relaxed">
          Join thousands of satisfied patients across Gujarat who restored their hair density with India's most trusted trichology team.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => openBooking('In-Clinic Assessment Banner')}
            className="px-6 py-3.5 rounded-xl bg-white text-[#27448a] font-bold text-xs sm:text-sm shadow-xl hover:bg-cyan-50 transition-all cursor-pointer"
          >
            Book In-Clinic Assessment
          </button>
          <a
            href={`tel:${clinicInfo.rawPhones[0]}`}
            className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all"
          >
            Call: {clinicInfo.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
};
