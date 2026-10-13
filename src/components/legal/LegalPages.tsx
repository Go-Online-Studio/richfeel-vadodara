import React from 'react';
import { ArrowLeft, ShieldCheck, FileText, Lock } from 'lucide-react';
import { clinicInfo } from '../../data/staticData';

interface LegalPagesProps {
  page: 'terms' | 'privacy';
  onBack: () => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ page, onBack }) => {
  return (
    <div className="py-12 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#0a6ebd] hover:text-[#27448a] transition-colors cursor-pointer mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs space-y-8 text-slate-700">
          {page === 'terms' ? (
            <>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
                  Legal Agreement
                </span>
                {/* Single H1 */}
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
                  Treatment sessions and packages are valid for the designated clinical treatment period agreed upon at enrollment. Patients requesting rescheduling are requested to provide at least 24 hours prior notice to facilitate scheduling adjustments.
                </p>
              </section>
            </>
          ) : (
            <>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
                  Patient Confidentiality
                </span>
                {/* Single H1 */}
                <h1 className="text-2xl sm:text-4xl font-black text-[#27448a] tracking-tight">
                  Privacy Policy
                </h1>
                <p className="text-xs text-slate-500 mt-2">
                  Last Updated: October 2026 · Committed to Patient Health Information Privacy
                </p>
              </div>

              <section className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <h2 className="text-lg font-bold text-[#27448a]">1. Patient Information Confidentiality</h2>
                <p>
                  Richfeel Vadodara places supreme importance on patient medical confidentiality. Any diagnostic imagery, Trichogram records, Capilloscopy data, contact phone numbers, or clinical notes collected are stored securely and accessed exclusively by our treating clinical team.
                </p>
              </section>

              <section className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <h2 className="text-lg font-bold text-[#27448a]">2. Information We Collect</h2>
                <p>
                  When you submit appointment requests, inquire via WhatsApp, or undergo diagnostic tests, we collect:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Full name, telephone contact number, and email address</li>
                  <li>Primary hair or skin clinical symptoms and health history</li>
                  <li>Diagnostic microscopic scalp photographs taken during clinic visits</li>
                </ul>
              </section>

              <section className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <h2 className="text-lg font-bold text-[#27448a]">3. Third-Party Sharing Prohibition</h2>
                <p>
                  We strictly never sell, trade, or rent patient personal or medical contact details to commercial third-party marketing companies. Patient data is utilized solely for clinical treatment scheduling, progress tracking, and emergency clinical contact.
                </p>
              </section>

              <section className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <h2 className="text-lg font-bold text-[#27448a]">4. Contact Our Privacy Officer</h2>
                <p>
                  For any inquiries regarding your health records or data protection, please contact our Vadodara clinic at <a href={`mailto:${clinicInfo.email}`} className="text-[#0a6ebd] underline">{clinicInfo.email}</a> or call <a href={`tel:${clinicInfo.rawPhones[0]}`} className="text-[#0a6ebd] underline">{clinicInfo.phones[0]}</a>.
                </p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
