'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle, Sparkles, HeartPulse, Microscope, Activity, Droplets, Gift, Award, ArrowRight, Calendar, Phone } from 'lucide-react';

interface TstPlusBrochureSectionProps {
  onOpenBooking: (concern?: string) => void;
}

export const TstPlusBrochureSection: React.FC<TstPlusBrochureSectionProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. HERO CALLOUT: Revolutionary Patented Technique from Austria */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c203b] via-[#1c3872] to-[#0a6ebd] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-white/10">
        <div className="relative z-10 space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#4ecdc4] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Patented In Austria · Pioneer Trichology</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Richfeel TST+ : <span className="text-[#4ecdc4]">First Time In India</span>
            </h1>

            <p className="text-sm sm:text-base text-cyan-100 font-medium leading-relaxed">
              A Revolutionary Patented Technique from Austria. TST+ (Tricho Scalp Treatment Plus) is an internationally celebrated 3-step programme engineered to ensure complete control over hair loss.
            </p>

            <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold text-white/90">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4] shrink-0" />
                <span>Dr. Vodder Austrian MLD Protocol</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4] shrink-0" />
                <span>Free Home Care Kit Shaft Rx Included</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4] shrink-0" />
                <span>Complete Control Over Hair Fall</span>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenBooking('Richfeel TST+ Consultation')}
                className="px-6 py-3 rounded-xl bg-gradient-brand text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer border border-white/20"
              >
                <Calendar className="w-4 h-4 text-[#4ecdc4]" />
                <span>Book In-Clinic Consultation</span>
              </button>

              <a
                href="tel:+917490040063"
                className="px-5 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 font-bold text-xs sm:text-sm transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#4ecdc4]" />
                <span>Call Vadodara Clinic</span>
              </a>
            </div>
          </div>

          {/* Structured Dedicated Professional Biography Card for Founders */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-5 sm:p-6 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Structured Portrait Container (No clipping, no irregular floating) */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl shrink-0 bg-slate-800 relative">
                <img
                  src="/images/treatments/tst-plus/tst_founders.webp"
                  alt="Dr. Apoorva Shah and Dr. Sonal Shah"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Biography Details */}
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#4ecdc4]/20 text-[#4ecdc4] text-[11px] font-bold uppercase tracking-wider border border-[#4ecdc4]/30">
                  <Award className="w-3.5 h-3.5" />
                  <span>Pioneers of Trichology in India · 50+ Years Combined Experience</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Dr. Apoorva Shah &amp; Dr. Sonal Shah
                </h3>
                <p className="text-xs sm:text-sm text-cyan-100/90 leading-relaxed max-w-3xl">
                  Dr. Apoorva Shah and Dr. Sonal Shah are the pioneers of Trichology in India and one of the world's leading Trichologists. They are also the founders of the Richfeel Trichology Centres - India's foremost hair and scalp clinics. With their combined experience of over 50 years, Dr. Apoorva Shah and Dr. Sonal Shah have set a benchmark in the field of hair and scalp treatment making Richfeel the one stop solution for all your hair and scalp problems.
                </p>
                <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-2 text-[11px] font-semibold text-white/80">
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">Limca Book of Records</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">Austrian MLD Certified</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">Over 1.5 Million Scalps Treated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE MULTI-FACTORIAL ROOT CAUSES: Clean CSS Grid of 5 Minimalist Cards (3D Pie-Chart Removed) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0a6ebd]">
            Understanding Why Hair Falls
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
            Hair Loss Occurs Due To Multiple Factors
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Hair loss is rarely caused by a single issue. It occurs due to a complex combination of various factors, external or internal or both:
          </p>
        </div>

        {/* 5 Minimalist Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 items-stretch">
          {/* Card 1: Pollution */}
          <div className="p-5 rounded-2xl bg-[#f6f9fc] border border-slate-200/90 space-y-3 hover:bg-amber-50/40 hover:border-amber-200 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-400">01</span>
              </div>
              <h4 className="text-sm font-bold text-[#27448a]">1. Pollution</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Industrial soot, airborne particulate matter, and hard water mineral deposits that clog scalp pores, oxidize root lipids, and choke follicles.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-semibold text-amber-800">
              External Environmental Factor
            </div>
          </div>

          {/* Card 2: Improper Diet */}
          <div className="p-5 rounded-2xl bg-[#f6f9fc] border border-slate-200/90 space-y-3 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-400">02</span>
              </div>
              <h4 className="text-sm font-bold text-[#27448a]">2. Improper Diet</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deficiencies in bio-available protein, zinc shortages, essential fatty acid deficits, and crash diets depriving hair matrix cells of nutrition.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-semibold text-emerald-800">
              Internal Nutritional Factor
            </div>
          </div>

          {/* Card 3: Various Disorders */}
          <div className="p-5 rounded-2xl bg-[#f6f9fc] border border-slate-200/90 space-y-3 hover:bg-rose-50/40 hover:border-rose-200 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-400">03</span>
              </div>
              <h4 className="text-sm font-bold text-[#27448a]">3. Various Disorders</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Systemic biological conditions including Anaemia (low iron ferritin), Thyroid dysfunctions, post-pregnancy hormonal shifts, and chronic stress.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-semibold text-rose-800">
              Internal Systemic Factor
            </div>
          </div>

          {/* Card 4: Chemical Treatments */}
          <div className="p-5 rounded-2xl bg-[#f6f9fc] border border-slate-200/90 space-y-3 hover:bg-blue-50/40 hover:border-blue-200 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0a6ebd] flex items-center justify-center font-bold">
                  <Droplets className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-400">04</span>
              </div>
              <h4 className="text-sm font-bold text-[#27448a]">4. Chemical Treatments</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Frequent synthetic hair colour dyes, bleaching agents, perming solutions, and chemical rebonding breaking natural cortex disulfide bonds.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-semibold text-[#0a6ebd]">
              Chemical Processing Factor
            </div>
          </div>

          {/* Card 5: Fashion */}
          <div className="p-5 rounded-2xl bg-[#f6f9fc] border border-slate-200/90 space-y-3 hover:bg-purple-50/40 hover:border-purple-200 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-400">05</span>
              </div>
              <h4 className="text-sm font-bold text-[#27448a]">5. Fashion</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Excessive high-heat blow drying, flat straightening irons, tight hair pull styles, and traction hairstyles leading to physical hair shaft damage.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-semibold text-purple-800">
              Physical Styling Factor
            </div>
          </div>
        </div>
      </div>

      {/* 3. THE 3-STEP COMPLETE CONTROL PROGRAMME: Equal Heights with Realistic Product Mockup */}
      <div className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0a6ebd]">
            Comprehensive Clinical Protocol
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
            TST+ is a 3-Step Programme To Ensure Complete Control Over Hair Loss
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            A synergistic sequence unifying rigorous trichological diagnosis, Austrian clinical detoxification, and targeted home care:
          </p>
        </div>

        {/* 3-Step Grid with Equal Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* STEP 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-6 hover:border-blue-300 hover:shadow-md transition-all h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-blue-100 text-[#0a6ebd] text-xs font-black uppercase tracking-wider">
                  STEP 1
                </span>
                <Microscope className="w-5 h-5 text-[#0a6ebd]" />
              </div>

              {/* Realistic Clinical Diagnosis Photography Container */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100 shadow-xs bg-slate-50 group">
                <img
                  src="/images/treatments/tst-plus/tst_step1_diagnosis.jpg"
                  alt="Trichological Diagnosis with digital Capilloscope and hair follicle analysis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#27448a]">
                  Trichological Diagnosis &amp; Food Supplement
                </h4>
                <p className="text-xs text-slate-500 mt-1">Exhaustive clinical evaluation of hair &amp; scalp profile</p>
              </div>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0a6ebd] shrink-0 mt-0.5" />
                  <span><strong>Consultation with the Trichologist</strong> to analyze patient health history</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0a6ebd] shrink-0 mt-0.5" />
                  <span><strong>Tricho analysis of hair</strong> is conducted by taking a few strands of hair</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0a6ebd] shrink-0 mt-0.5" />
                  <span><strong>Scalp analysis</strong> is performed using a high-magnification Capilloscope</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0a6ebd] shrink-0 mt-0.5" />
                  <span><strong>Follicular count</strong> is taken by counting the number of hair follicles per area</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0a6ebd] shrink-0 mt-0.5" />
                  <span><strong>Internal food supplement</strong> is prescribed as per patient's health history</span>
                </li>
              </ul>
            </div>
            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-[#0a6ebd] font-semibold">
              Personalized Internal Nutritional Prescription
            </div>
          </div>

          {/* STEP 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#0a6ebd]/30 shadow-md flex flex-col justify-between space-y-6 relative h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-gradient-brand text-white text-xs font-black uppercase tracking-wider">
                  STEP 2 · Core In-Clinic
                </span>
                <ShieldCheck className="w-5 h-5 text-[#0a6ebd]" />
              </div>

              {/* Realistic Austrian MLD & Photo-Bio Therapy Photography Container */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100 shadow-xs bg-slate-50 group">
                <img
                  src="/images/treatments/tst-plus/tst_step2_mld.jpg"
                  alt="Austrian Manual Lymphatic Drainage and photo-bio follicle stimulation therapy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#27448a]">
                  Austrian MLD &amp; Clinical Active Therapy
                </h4>
                <p className="text-xs text-slate-500 mt-1">In-clinic detoxification and follicle stimulation</p>
              </div>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4ecdc4] shrink-0 mt-0.5" />
                  <span><strong>Disinfection</strong> is done using high frequency (HF) to sterilize scalp skin</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4ecdc4] shrink-0 mt-0.5" />
                  <span><strong>Photo-Bio Therapy</strong> is performed to stimulate hair follicles</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4ecdc4] shrink-0 mt-0.5" />
                  <span><strong>TST Root Rx</strong> is applied subsequently for root revitalization</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4ecdc4] shrink-0 mt-0.5" />
                  <span><strong>Hair Repair Serum</strong> is applied for protection of hair fiber</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4ecdc4] shrink-0 mt-0.5" />
                  <span><strong>Austrian technique pioneered by Dr. Vodder</strong> called Manual Lymphatic Drainage for Detoxification &amp; Rejuvenation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4ecdc4] shrink-0 mt-0.5" />
                  <span><strong>Special Hair Diet</strong> is served to aid strengthening of hair follicles and shaft</span>
                </li>
              </ul>
            </div>
            <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-100 text-xs text-teal-800 font-semibold">
              Pioneered by Dr. Vodder (Austria)
            </div>
          </div>

          {/* STEP 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-6 hover:border-emerald-300 hover:shadow-md transition-all h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider">
                  STEP 3
                </span>
                <Gift className="w-5 h-5 text-emerald-600" />
              </div>

              {/* Realistic Product Mockup Container */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100 shadow-xs bg-slate-50 group">
                <img
                  src="/images/treatments/tst-plus/tst_kit_mockup.jpg"
                  alt="Photorealistic product mockup of high-end clinical hair care kit with serum bottle and supplement box"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#27448a]">
                  Free Home Care Kit &amp; Ongoing Therapy
                </h4>
                <p className="text-xs text-slate-500 mt-1">Sustained clinical control at home</p>
              </div>

              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Free Home Care Kit Shaft Rx</strong> is provided for application at home</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>External Tricho Active Therapy</strong>, special products are made available for external application</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Special Hair Diet</strong> is suggested for further hair care and follicle nourishment</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Follow-up Trichogram checks to ensure hair loss arrest is maintained</span>
                </li>
              </ul>
            </div>
            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-800 font-semibold">
              Includes Complimentary Free Home Care Kit Shaft Rx
            </div>
          </div>
        </div>
      </div>

      {/* 4. BENEFITS OF TRICHO SCALP TREATMENT+ */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd]">
            Clinical Results
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
            Benefits Of Tricho Scalp Treatment+
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Thus, TRICHO SCALP TREATMENT+ helps control hair loss through verified trichological outcomes:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#f6f9fc] border border-slate-200/80 space-y-2 text-center">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0a6ebd] flex items-center justify-center mx-auto font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[#27448a]">Strengthens Hair Follicles</h4>
            <p className="text-xs text-slate-500">Halts progressive miniaturization and anchors hair roots firmly in the scalp dermal layer.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f6f9fc] border border-slate-200/80 space-y-2 text-center">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#087f7b] flex items-center justify-center mx-auto font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[#27448a]">Protects Hair Shaft &amp; Follicles</h4>
            <p className="text-xs text-slate-500">Builds a protective barrier against external environmental pollution and chemical styling damage.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f6f9fc] border border-slate-200/80 space-y-2 text-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto font-bold">
              <Activity className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[#27448a]">Disinfects, Detoxifies &amp; Rejuvenates</h4>
            <p className="text-xs text-slate-500">Unblocks congested lymphatic fluid and floods follicles with revitalizing nutrients.</p>
          </div>
        </div>
      </div>

      {/* 5. CTA BANNER */}
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
