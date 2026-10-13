'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface LegalPagesProps {
  page: 'terms' | 'privacy';
}

export const LegalPages: React.FC<LegalPagesProps> = ({ page }) => {
  return (
    <div className="py-12 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#0a6ebd] hover:text-[#27448a] transition-colors cursor-pointer mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs space-y-8 text-slate-700">
          {page === 'terms' ? (
            <>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
                  Legal Agreement
                </span>
                <h1 className="text-2xl sm:text-4xl font-black text-[#27448a] tracking-tight">
                  Terms & Conditions
                </h1>
                <p className="text-xs text-slate-500 mt-2">
                  Last Updated: October 2026 · Richfeel Trichology Centre Vadodara Branch
                </p>
              </div>

              <section className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <h2 className="text-lg font-bold text-[#27448a]">1. In-Clinic Appointments & Consultations</h2>
                <p>
                  Appointments booked at Richfeel Vadodara (Marvel Square, Sunpharma Road) are subject to clinical availability. While our staff strives to adhere strictly to appointment timings, medical consultations may occasionally encounter slight delays due to individualized diagnostic test requirements (e.g., Trichogram, Digital Capilloscopy).
                </p>
              </section>

              <section className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <h2 className="text-lg font-bold text-[#27448a]">2. Clinical Assessment & Individual Results</h2>
                <p>
                  Trichological treatments (including TST+, Anagrow, PRP, GFC, and Aesthetic Hair Transplants) yield results that vary depending on individual patient biological factors, genetic predisposition, stage of follicular miniaturization, systemic health, and adherence to prescribed internal tricho-active supplements. No medical procedure can guarantee 100% universal identical results.
                </p>
              </section>

              <section className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <h2 className="text-lg font-bold text-[#27448a]">3. Medical Disclaimers</h2>
                <p>
                  The educational information on this website does not constitute direct medical advice or formal physician diagnosis without an in-person physical clinical consultation. Please consult certified trichologists and cosmetologists at our clinic prior to starting or discontinuing any dermatological or trichological regimen.
                </p>
              </section>

              <section className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <h2 className="text-lg font-bold text-[#27448a]">4. Package Validity & Rescheduling</h2>
                <p>
                  Clinical treatment packages purchased for laser reduction or stem cell maintenance sessions remain valid for the stipulated clinical duration from the date of first enrollment. Patients may reschedule sessions with a minimum 24-hour advance intimation to the front desk team.
                </p>
              </section>
            </>
          ) : (
            <>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
                  Patient Data Security
                </span>
                <h1 className="text-2xl sm:text-4xl font-black text-[#27448a] tracking-tight">
                  Privacy Policy & Confidentiality
                </h1>
                <p className="text-xs text-slate-500 mt-2">
                  Last Updated: October 2026 · Committed to Patient Health Information (PHI) Protection
                </p>
              </div>

              <section className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <h2 className="text-lg font-bold text-[#27448a]">1. Patient Information Confidentiality</h2>
                <p>
                  Richfeel Vadodara collects patient demographic information, medical histories, video-capilloscopy microscopic captures, and contact details exclusively for diagnosing hair, scalp, and skin disorders, customizing trichology plans, and communicating appointment notifications.
                </p>
              </section>

              <section className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <h2 className="text-lg font-bold text-[#27448a]">2. Medical Imagery Privacy</h2>
                <p>
                  Diagnostic Trichogram imaging, baseline clinical photographs, and follicular counts recorded during your consultations are stored on encrypted internal clinic systems. Photographic records are never published in marketing or clinical literature without explicit, signed informed consent.
                </p>
              </section>

              <section className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <h2 className="text-lg font-bold text-[#27448a]">3. Third-Party Sharing</h2>
                <p>
                  We strictly do not sell, rent, or lease patient contact directories to third-party telemarketers or external entities. Contact details are strictly used for in-clinic appointment confirmations, prescription reminders, and WhatsApp support.
                </p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
