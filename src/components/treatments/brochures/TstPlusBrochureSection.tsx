'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle, Sparkles, HeartPulse, Microscope, Activity, Droplets, Gift, Award, ArrowRight } from 'lucide-react';

interface TstPlusBrochureSectionProps {
  onOpenBooking: (concern?: string) => void;
}

export const TstPlusBrochureSection: React.FC<TstPlusBrochureSectionProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 1. HERO CALLOUT: Revolutionary Patented Technique from Austria */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c2340] via-[#27448a] to-[#0a6ebd] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-white/10">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#4ecdc4] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Patented In Austria · Pioneer Trichology</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Richfeel TST+ : <span className="text-[#4ecdc4]">First Time In India</span>
            </h2>

            <p className="text-sm sm:text-base text-cyan-100 font-medium leading-relaxed max-w-2xl">
              A Revolutionary Patented Technique from Austria. TST+ (Tricho Scalp Treatment Plus) is an internationally celebrated 3-step programme engineered to ensure complete control over active hair loss.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-white/90">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4]" />
                <span>Dr. Vodder Austrian MLD Protocol</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4]" />
                <span>Free Home Care Kit Shaft Rx Included</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4]" />
                <span>Complete Control Over Hair Fall</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center gap-3">
            <div className="p-3 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md max-w-[210px] text-center space-y-2 shadow-lg">
              <div className="relative rounded-xl overflow-hidden border border-white/20">
                <img
                  src="/images/treatments/tst-plus/tst_founders.webp"
                  alt="Dr. Apoorva Shah and Dr. Sonal Shah founders"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Dr. Apoorva & Dr. Sonal Shah</span>
                <span className="text-[11px] text-cyan-200">50+ Years Trichology Pioneers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE MULTI-FACTORIAL ROOT CAUSES OF HAIR LOSS */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0a6ebd]">
            Understanding Why Hair Falls
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
            Hair Loss Occurs Due To Multiple Factors
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Hair loss is rarely caused by a single issue. It occurs due to a complex combination of external environmental and internal biological triggers:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Radial Causes Reference Image (4 cols) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-[280px] text-center space-y-2 shadow-xs">
              <img
                src="/images/treatments/tst-plus/tst_causes_chart.webp"
                alt="Hair loss multi-factorial causes chart"
                className="w-full h-auto object-contain rounded-xl"
              />
              <span className="text-[11px] text-slate-500 font-semibold block">
                Multi-Factorial Etiology
              </span>
            </div>
          </div>

          {/* 5 Cause Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Factor 1 */}
            <div className="p-4 rounded-2xl bg-[#f6f9fc] border border-slate-200/80 space-y-2 hover:bg-blue-50/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#27448a]">1. Pollution</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Industrial soot, particulate toxins, and hard water minerals that clog scalp pores and choke roots.
              </p>
            </div>

            {/* Factor 2 */}
            <div className="p-4 rounded-2xl bg-[#f6f9fc] border border-slate-200/80 space-y-2 hover:bg-blue-50/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#27448a]">2. Fashion & Heat</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Blow dryers, flat straightening irons, and tight traction hairstyles causing physical shaft trauma.
              </p>
            </div>

            {/* Factor 3 */}
            <div className="p-4 rounded-2xl bg-[#f6f9fc] border border-slate-200/80 space-y-2 hover:bg-blue-50/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-cyan-100 text-[#0a6ebd] flex items-center justify-center font-bold">
                <Droplets className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#27448a]">3. Chemical Damage</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Synthetic hair dyes, bleaching, perming, and rebonding breaking natural keratin bonds.
              </p>
            </div>

            {/* Factor 4 */}
            <div className="p-4 rounded-2xl bg-[#f6f9fc] border border-slate-200/80 space-y-2 hover:bg-blue-50/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#27448a]">4. Internal Disorders</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Anaemia (low iron), thyroid imbalances, post-pregnancy shifts, and hormonal fluctuations.
              </p>
            </div>

            {/* Factor 5 */}
            <div className="p-4 rounded-2xl bg-[#f6f9fc] border border-slate-200/80 space-y-2 hover:bg-blue-50/50 transition-colors sm:col-span-2 lg:col-span-1">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#27448a]">5. Improper Diet</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Inadequate bio-available protein, zinc shortages, and crash diets starving hair follicles of nutrition.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. THE 3-STEP COMPLETE CONTROL PROGRAMME */}
      <div className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0a6ebd]">
            Comprehensive Clinical Protocol
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
            TST+ 3-Step Programme For Complete Control
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            A synergistic sequence that unifies rigorous trichological diagnosis, Austrian clinical detoxification, and targeted home care:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* STEP 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-6 hover:border-blue-300 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-blue-100 text-[#0a6ebd] text-xs font-black uppercase tracking-wider">
                  Step 01
                </span>
                <Microscope className="w-5 h-5 text-[#0a6ebd]" />
              </div>
              <h4 className="text-xl font-bold text-[#27448a]">
                Diagnosis & Internal Food Supplement
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Before any topical therapy begins, the patient undergoes exhaustive clinical examination:
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0a6ebd] shrink-0 mt-0.5" />
                  <span>Consultation with certified Trichologist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0a6ebd] shrink-0 mt-0.5" />
                  <span><strong>Tricho Analysis</strong>: Microscopic hair strand examination to measure Anagen/Telogen ratio</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0a6ebd] shrink-0 mt-0.5" />
                  <span><strong>Capilloscopy</strong>: High-magnification scalp evaluation of capillary blood flow and ostia</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0a6ebd] shrink-0 mt-0.5" />
                  <span><strong>Follicular Count</strong>: Quantifies follicular units per square centimeter</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0a6ebd] shrink-0 mt-0.5" />
                  <span>Personalized <strong>internal food supplement</strong> prescribed according to health history</span>
                </li>
              </ul>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#0a6ebd]/30 shadow-md flex flex-col justify-between space-y-6 relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-gradient-brand text-white text-xs font-black uppercase tracking-wider">
                  Step 02 · Core In-Clinic
                </span>
                <ShieldCheck className="w-5 h-5 text-[#0a6ebd]" />
              </div>
              <h4 className="text-xl font-bold text-[#27448a]">
                In-Clinic Austrian MLD & Active Therapy
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                The therapeutic heart of TST+ combining advanced scalp technology with Austrian detoxification:
              </p>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-blue-50/60 border border-blue-100">
                <img
                  src="/images/treatments/tst-plus/tst_mld_head.webp"
                  alt="Dr Vodder Austrian MLD head diagram"
                  className="w-14 h-16 object-contain rounded-lg bg-white p-1 border border-blue-200 shrink-0"
                />
                <p className="text-[11px] text-[#27448a] font-medium leading-tight">
                  <strong>Dr. Emil Vodder Technique:</strong> Unblocks lymphatic stagnation and flushes cellular metabolic waste from roots.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4ecdc4] shrink-0 mt-0.5" />
                  <span>High-frequency (HF) scalp sterilization & disinfection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4ecdc4] shrink-0 mt-0.5" />
                  <span><strong>Photo-Bio Therapy</strong>: Cold laser stimulating follicle mitochondria</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4ecdc4] shrink-0 mt-0.5" />
                  <span>Application of <strong>TST Root Rx</strong> & Hair Repair Serum</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4ecdc4] shrink-0 mt-0.5" />
                  <span>Nutritional <strong>Hair Diet</strong> served in clinic to nourish follicles</span>
                </li>
              </ul>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-6 hover:border-blue-300 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider">
                  Step 03
                </span>
                <Gift className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-[#27448a]">
                Free Home Care Kit & Continuous Therapy
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ensuring therapeutic momentum continues between clinical sessions:
              </p>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                <img
                  src="/images/treatments/tst-plus/tst_model.webp"
                  alt="Healthy hair model"
                  className="w-14 h-14 object-cover rounded-lg border border-emerald-200 shrink-0"
                />
                <p className="text-[11px] text-emerald-950 font-medium leading-tight">
                  <strong>Complete Protection:</strong> Continuous home care anchors root strength and stops relapse.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Free Home Care Kit Shaft Rx</strong> provided for home use</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>External Tricho Active Therapy</strong>: Formulated therapeutic products</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Specialized <strong>Hair Diet guidance</strong> for sustained follicle nutrition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Periodic follow-up Trichogram checks to track hair loss arrest</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 4. FOUNDERS BENCHMARK NOTE & CTA */}
      <div className="bg-[#f0f7ff] rounded-3xl p-6 sm:p-8 border border-blue-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0a6ebd] uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Pioneered in 1986 · Limca Book of Records</span>
          </div>
          <h4 className="text-xl font-black text-[#27448a]">
            Experience India's Most Trusted Scalp Therapy
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            With over 50 years of combined experience, Dr. Apoorva Shah and Dr. Sonal Shah created TST+ to provide a definitive, non-surgical clinical answer to uncontrolled hair fall.
          </p>
        </div>
        <button
          onClick={() => onOpenBooking('TST+ Consultation')}
          className="px-8 py-3.5 rounded-xl bg-gradient-brand text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
        >
          Book In-Clinic TST+ Assessment
        </button>
      </div>
    </div>
  );
};
