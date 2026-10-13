import React from 'react';
import { Award, BookOpen, CheckCircle, ShieldCheck } from 'lucide-react';
import { foundersInfo } from '../../data/staticData';

export const Heritage: React.FC = () => {
  return (
    <section id="heritage" className="py-20 bg-white border-b border-slate-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Portrait & Heritage Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                alt="Clinical Trichology Consultation"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] object-cover object-center filter saturate-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101e3d] from-0% via-[#101e3d]/80 via-20% to-transparent to-40% opacity-85" />
              
              <div className="absolute bottom-12 left-6 right-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#4ecdc4] block mb-1">
                  Limca Book of Records Entry
                </span>
                <h3 className="text-xl font-bold text-white leading-tight">
                  Dr. Apoorva Shah & Dr. Sonal Shah
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  "The Shahs of Trichology" · Certified London Institute of Trichology Protocols
                </p>
              </div>
            </div>

            {/* Float Card */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-xl shadow-xl p-4 border border-slate-100 max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0a6ebd] shrink-0">
                  <Award className="w-5 h-5 text-[#0a6ebd]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Brand Trust Report #1</div>
                  <div className="text-[11px] text-slate-500">India's Most Trusted Haircare Brand</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Historical Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
                Pioneering History · Since 1986
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#27448a] tracking-tight leading-tight">
                India's First Certified Trichologists & Chain of Hair Clinics
              </h2>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {foundersInfo.bio}
            </p>

            {/* What is Trichology Explainer Box */}
            <div className="p-5 rounded-xl bg-[#f6f9fc] border border-blue-100/70 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0a6ebd]">
                <BookOpen className="w-4 h-4 text-[#0a6ebd]" />
                <span>What is Trichology?</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trichology is the specialized medical science of hair and scalp in health and disease. It originated in London in 1902 at the Institute of Trichology, UK. Unlike generic beauty salons, certified trichologists diagnose the root cellular, hormonal, and micro-vascular triggers of alopecia and scalp conditions.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#0a6ebd] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 font-medium">
                  Limca Book of Records recognition as India's 1st Trichologists
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#0a6ebd] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 font-medium">
                  Official hair care experts for Femina Miss India Pageant (10+ Yrs)
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#0a6ebd] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 font-medium">
                  Frost & Sullivan Best Hair Restoration Service Provider
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#0a6ebd] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 font-medium">
                  Vadodara clinic equipped with patented diagnostic machinery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
