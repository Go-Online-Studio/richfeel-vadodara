'use client';

import React from 'react';
import { Sparkles, ShieldCheck, CheckCircle2, AlertOctagon, Flame, Droplets, Zap, Award, ArrowRight, Layers, Eye, RefreshCw, Scissors, Sparkle } from 'lucide-react';

interface AnadtoxBrochureSectionProps {
  onOpenBooking: (concern?: string) => void;
}

export const AnadtoxBrochureSection: React.FC<AnadtoxBrochureSectionProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 1. HERO CALLOUT: Break-Free from the Guilt of Hair Colour Damage */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#121324] via-[#1f2942] to-[#27448a] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-white/10">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#4ecdc4] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Advanced Hair Detoxification · Power THP from USA</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Break-Free From The Guilt Of <span className="text-[#4ecdc4]">Hair Colour Damage</span>
            </h2>

            <div className="inline-block p-3.5 px-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xs">
              <p className="text-base sm:text-lg font-black text-amber-300 italic tracking-wide">
                "ana-d-tox chaar baar, colour karo baar baar"
              </p>
            </div>

            <p className="text-xs sm:text-sm text-cyan-100 font-medium leading-relaxed max-w-2xl">
              Introducing <strong>Richfeel Ana-d-tox</strong> for coloured hair powered by <strong>Power THP from USA</strong>. Protects and repairs hair and scalp damage, locks in vibrant colour, and increases color retention by 20%.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-white/90">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4]" />
                <span>+20% Colour Retention</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4]" />
                <span>+25% Colour Uptake</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4]" />
                <span>Zero Chemical Irritation</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-3">
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/40 max-w-xs w-full aspect-[4/5]">
              <img
                src="/images/treatments/ana-d-tox/anadtox_cover.webp"
                alt="Hair colour damage comparison"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <p className="text-xs text-white/90 font-medium leading-snug">
                  Chemical colour breaks the cuticle mantle. Ana-d-tox restores integrity.
                </p>
              </div>
            </div>
            <span className="text-[11px] text-cyan-200/80 font-medium tracking-wide">
              Power THP Technology · Developed in USA
            </span>
          </div>
        </div>
      </div>

      {/* 2. WHAT IS HAIR COLOURING & THE CHEMICAL PROCESS */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0a6ebd]">
            Chemical Understanding
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
            What Is Hair Colouring & The Chemical Process
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Hair colouring is the practice of changing the natural colour of hair using chemical formulations. While it provides aesthetic transformation, understanding the chemical process is vital:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Reasons for Colouring (6 cols) */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-[#f6f9fc] border border-slate-200 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block">
                The 3 Primary Motives
              </span>
              <h4 className="text-lg font-bold text-[#27448a]">Why People Colour Their Hair</h4>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0a6ebd] font-black flex items-center justify-center shrink-0 text-[11px]">1</span>
                  <span><strong>Grey Hair Coverage</strong>: Concealing white or silver strands to maintain a youthful, natural appearance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0a6ebd] font-black flex items-center justify-center shrink-0 text-[11px]">2</span>
                  <span><strong>Fashion & Creative Expression</strong>: Trendy highlights, balayage, ombré, and bold global hair shades.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0a6ebd] font-black flex items-center justify-center shrink-0 text-[11px]">3</span>
                  <span><strong>Restoring Original Lustre</strong>: Reclaiming hair shade faded by intense UV exposure, pollution, illness, or prior bleaching.</span>
                </li>
              </ul>
            </div>
            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-slate-600">
              <strong className="text-[#0a6ebd]">Clinical Note:</strong> Regular chemical application without proper dermal shielding causes cumulative shaft fragility and chronic scalp irritation.
            </div>
          </div>

          {/* Chemical Process Diagram Card (6 cols) */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-[#f6f9fc] border border-slate-200 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block">
                  The Chemical Reaction
                </span>
                <span className="text-[11px] font-semibold text-slate-500">Alkaline Swelling & Oxidation</span>
              </div>
              <h4 className="text-lg font-bold text-[#27448a]">The Hair Colour Mechanism</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standard hair coloring requires mixing two active chemical components:
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-center space-y-1">
                  <span className="text-xs font-bold text-slate-800 block">Hair Dye / Bleach</span>
                  <span className="text-[11px] text-slate-500">Ammonia / Alkalizers force open cuticle scales</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-center space-y-1">
                  <span className="text-xs font-bold text-slate-800 block">Developer</span>
                  <span className="text-[11px] text-slate-500">Hydrogen Peroxide oxidizes natural melanin</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 py-2">
                <ArrowRight className="w-4 h-4 text-rose-500" />
                <span className="text-xs font-bold text-rose-700">Applied directly to hair shaft & scalp skin</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl bg-rose-50/70 border border-rose-100">
              <img
                src="/images/treatments/ana-d-tox/anadtox_colour_process.webp"
                alt="Hair colour process reference"
                className="w-16 h-16 object-contain rounded-lg bg-white p-1 border border-rose-200 shrink-0"
              />
              <p className="text-xs text-rose-900 leading-snug">
                This aggressive chemical opening breaks the 18-MEA lipid protective layer, exposing inner cortex keratin to irreparable moisture loss.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. EFFECTS OF HAIR COLOURING ON HAIR & SCALP */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600">
            Clinical Pathology
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
            Effects Of Hair Colouring On Hair & Scalp
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Chemical damage leads to severe dryness, loss of natural lustre, and altered shaft texture:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Hair Damage Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <Scissors className="w-5 h-5 text-rose-600" />
              <h4 className="text-base sm:text-lg font-bold text-[#27448a]">1. Hair Shaft Damage</h4>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#f6f9fc] border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs sm:text-sm font-bold text-slate-800">Dryness & Brittleness</h5>
                  <span className="text-[10px] uppercase font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">Moisture Loss</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Chemical dyes strip the hydrophobic epicuticle lipid shield. With cuticle scales left wide open, moisture evaporates quickly, turning hair brittle and rough to the touch.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f6f9fc] border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs sm:text-sm font-bold text-slate-800">Loss of Lustre & Shine</h5>
                  <span className="text-[10px] uppercase font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">Light Scattering</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Damaged, jagged cuticle scales cannot lie flat. Instead of reflecting light in a unified glossy sheen, light scatters irregularly, leaving coloured hair flat, frizzy, and lifeless.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f6f9fc] border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs sm:text-sm font-bold text-slate-800">Hair Thinning & Severe Breakage</h5>
                  <span className="text-[10px] uppercase font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full">Structural Decay</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Repeated oxidation dissolves internal cysteine disulfide bonds in the cortex. The structural backbone degrades, causing mid-shaft snapping, trichoptilosis (split ends), and rapid thinning.
                </p>
              </div>
            </div>
          </div>

          {/* Skin & Scalp Damage Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <AlertOctagon className="w-5 h-5 text-amber-600" />
              <h4 className="text-base sm:text-lg font-bold text-[#27448a]">2. Scalp Skin Damage</h4>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src="/images/treatments/ana-d-tox/anadtox_damage_types.webp"
                  alt="Scalp damage and hair breakage"
                  className="w-16 h-24 object-cover rounded-xl border border-amber-300 shadow-xs shrink-0"
                />
                <div className="space-y-1">
                  <h5 className="text-xs sm:text-sm font-bold text-amber-950">Scalp Irritation & Contact Dermatitis</h5>
                  <p className="text-[11px] text-amber-800 leading-tight">
                    Severe itching, burning sensations, redness, and scalp follicular micro-inflammation.
                  </p>
                </div>
              </div>
              <p className="text-xs text-amber-900 leading-relaxed">
                Chemical dyes seep into the scalp ostia and pores. Without immediate post-colour neutralization, chemical residues persist for weeks, suffocating root bulbs and triggering reactive telogen shedding.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
              <strong className="text-[#27448a] block font-bold">Why Ana-d-tox is Essential:</strong>
              <span>It provides the clinical antidote: neutralizing toxic deposits, resealing cuticles, and restoring scalp equilibrium before long-term damage sets in.</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CHEMICAL TOXICITY: HAZARDOUS INGREDIENTS NEUTRALIZED */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600">
            Toxicological Analysis
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
            Hazardous Chemical Ingredients Neutralized By Ana-d-tox
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Conventional hair dyes rely on strong chemical agents that leave persistent residues. Ana-d-tox purges these compounds:
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200 bg-[#f6f9fc] text-[#27448a]">
                <th className="p-3.5 sm:p-4 font-bold rounded-l-xl">Ingredient</th>
                <th className="p-3.5 sm:p-4 font-bold">Chemical Mechanism</th>
                <th className="p-3.5 sm:p-4 font-bold">Potential Adverse Effects</th>
                <th className="p-3.5 sm:p-4 font-bold rounded-r-xl">Ana-d-tox Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-bold text-rose-900 whitespace-nowrap">PPD (p-Phenylenediamine)</td>
                <td className="p-3.5 sm:p-4">Color coupling agent oxidized inside the hair cortex</td>
                <td className="p-3.5 sm:p-4 text-rose-700">Severe allergic reactions, eczema, eyelid & facial swelling, acute dermatitis</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">Completely purged from scalp pores & follicles</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-bold text-slate-900 whitespace-nowrap">Ammonia</td>
                <td className="p-3.5 sm:p-4">Alkaline agent to swell cuticle and alter pH balance</td>
                <td className="p-3.5 sm:p-4 text-amber-800">Severe cuticle lift, burning sensation, scalp moisture stripping</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">Restores acidic pH balance & flattens cuticles</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-bold text-slate-900 whitespace-nowrap">Hydrogen Peroxide</td>
                <td className="p-3.5 sm:p-4">Powerful oxidizing agent that bleaches natural melanin</td>
                <td className="p-3.5 sm:p-4 text-amber-800">Extreme oxidative stress, disulfide bond breakage, shaft snapping</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">Antioxidant bio-quench stops post-process oxidation</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-bold text-slate-900 whitespace-nowrap">Resorcinol</td>
                <td className="p-3.5 sm:p-4">Color modifier interacting with developers</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Skin sensitization, severe peeling, potential endocrine disruption</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">Neutralized via deep vacuum-assisted detox</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-bold text-slate-900 whitespace-nowrap">Coal Tar & Heavy Metals</td>
                <td className="p-3.5 sm:p-4">Pigment bases in dark/metallic synthetic dyes</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Cumulative chemical load and systemic toxic residue</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">Thorough dermal cleansing & ostia evacuation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. MICROSCOPIC CUTICLE COMPARISON */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0a6ebd]">
            Electron Microscopy
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
            Microscopic Cuticle Analysis
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Comparing the hair shaft across three states: virgin hair, damaged coloured hair, and Ana-d-tox resurfaced hair:
          </p>
        </div>

        {/* Comparison Reference Banner */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 p-2 sm:p-4">
          <img
            src="/images/treatments/ana-d-tox/anadtox_cuticle_compare.webp"
            alt="Virgin Hair vs Coloured Hair vs Ana-d-tox Cuticle"
            className="w-full h-auto object-contain rounded-xl max-h-48 mx-auto"
          />
        </div>

        {/* 3-State Cuticle Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* State 1: Virgin Hair */}
          <div className="p-6 rounded-2xl bg-[#f6f9fc] border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-[11px] font-bold uppercase">
                Virgin Hair
              </span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <h4 className="text-base font-bold text-[#27448a]">Smooth, Sealed Cuticle</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Healthy overlapping cuticle shingles lying flat and tight. Moisture and natural melanin pigments are locked securely inside. Reflects bright natural shine.
            </p>
          </div>

          {/* State 2: Coloured Hair */}
          <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-rose-200 text-rose-800 text-[11px] font-bold uppercase">
                Coloured Hair (Damaged)
              </span>
              <AlertOctagon className="w-4 h-4 text-rose-600" />
            </div>
            <h4 className="text-base font-bold text-rose-950">Chipped, Swollen Cuticle</h4>
            <p className="text-xs text-rose-900 leading-relaxed">
              Cuticle scales are forced open, chipped, and porous. Artificial dye pigments wash out rapidly; moisture escapes, creating frizzy, dry, brittle straw-like hair.
            </p>
          </div>

          {/* State 3: Ana-d-tox Protected Hair */}
          <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-900 text-[11px] font-bold uppercase">
                Ana-d-tox Treated Hair
              </span>
              <Sparkles className="w-4 h-4 text-emerald-600" />
            </div>
            <h4 className="text-base font-bold text-emerald-950">Resurfaced & Colour-Locked</h4>
            <p className="text-xs text-emerald-900 leading-relaxed">
              Power THP micro-proteins seal cuticles completely flat. Locks in colour molecules, eliminates brittleness, and delivers dazzling high-definition gloss.
            </p>
          </div>
        </div>
      </div>

      {/* 6. THE 4-STEP ANA-D-TOX CLINICAL PROTOCOL (With Machine & Reference Diagram) */}
      <div className="bg-[#101e3d] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-800 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4ecdc4]">
              Clinical Protocol
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              4-Step Clinical Protocol With RF Anagain 10X Machine
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Utilizing the "Miracle Machine" developed in Milan, Italy, Ana-d-tox provides needle-free transdermal penetration of Power THP directly to the scalp and hair fiber:
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 border border-white/20">
              <img
                src="/images/treatments/ana-d-tox/anadtox_machine.webp"
                alt="RF Anagain 10X Miracle Machine"
                className="w-16 h-12 object-contain rounded-lg bg-white/10 p-1"
              />
              <div className="text-left">
                <span className="text-[11px] uppercase tracking-wider text-[#4ecdc4] font-bold block">RF Anagain 10X</span>
                <span className="text-xs text-white font-medium">The Miracle Machine</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Steps Visual Reference Box */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-3 sm:p-4">
          <img
            src="/images/treatments/ana-d-tox/anadtox_steps_diagram.webp"
            alt="4-Step clinical protocol diagram"
            className="w-full h-auto object-contain rounded-xl max-h-56 mx-auto"
          />
        </div>

        {/* Detailed 4 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Step 1 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
            <span className="text-xs font-black text-[#4ecdc4] block">STEP 01</span>
            <h4 className="text-sm font-bold text-white">Cuticle Prep & Scalp Shield</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Specialized bio-barrier application to insulate scalp skin against direct chemical dye burns, irritation, and pore infiltration.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
            <span className="text-xs font-black text-[#4ecdc4] block">STEP 02</span>
            <h4 className="text-sm font-bold text-white">RF Anagain 10X Infusion</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Electroporation transdermal delivery drives hydrolyzed Power THP proteins deep into the inner cortex without needle trauma.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
            <span className="text-xs font-black text-[#4ecdc4] block">STEP 03</span>
            <h4 className="text-sm font-bold text-white">Scalp Detox & Neutralization</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Vacuum drainage actively neutralizes residual PPD, peroxide, and ammonia molecules trapped in the scalp ostia and roots.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
            <span className="text-xs font-black text-[#4ecdc4] block">STEP 04</span>
            <h4 className="text-sm font-bold text-white">Power THP Gloss Sealing</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Final cuticle smoothing seal that locks in rich hair color molecules, prevents fading, and imparts exceptional silkiness.
            </p>
          </div>
        </div>
      </div>

      {/* 7. THE POWER THP ACTION: TRIPLE PLANT PROTEINS FROM USA */}
      <div className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0a6ebd]">
            USA Advanced Formulation
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
            The Power THP Action (Triple Protein Complex)
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Richfeel Ana-d-tox features three hydrolyzed plant proteins that operate in targeted synergy across the hair shaft:
          </p>
        </div>

        {/* THP Table Reference Graphic */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-3 shadow-xs max-w-xl mx-auto">
          <img
            src="/images/treatments/ana-d-tox/anadtox_thp_table.webp"
            alt="Power THP formulation table reference"
            className="w-full h-auto object-contain rounded-lg max-h-40 mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Protein 1: Quinoa */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4 hover:border-purple-200 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider block">
                  Hydrolyzed Quinoa Protein
                </span>
                <h4 className="text-lg font-bold text-[#27448a]">Colour Sealing & Repair</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Contains all 8 essential amino acids. Binds tenaciously to the negative charges on damaged keratin, sealing split ends and locking artificial pigment inside the cortex.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 text-xs font-semibold text-purple-900 space-y-1">
              <div>• Increases colour retention by <strong>+20%</strong></div>
              <div>• Enhances colour uptake by <strong>+25%</strong></div>
            </div>
          </div>

          {/* Protein 2: Barley */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4 hover:border-amber-200 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">
                  Hydrolyzed Barley Protein
                </span>
                <h4 className="text-lg font-bold text-[#27448a]">Thermal & UV Shield</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Forms a durable, breathable biopolymer film along the hair shaft. Protects against sun photo-bleaching, heat-styling flat irons, and daily environmental oxidation.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-100 text-xs font-semibold text-amber-900 space-y-1">
              <div>• High heat resilience protection</div>
              <div>• Defends against UV pigment fading</div>
            </div>
          </div>

          {/* Protein 3: Wheat */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4 hover:border-cyan-200 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#0a6ebd] flex items-center justify-center font-bold">
                <Droplets className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#0a6ebd] uppercase tracking-wider block">
                  Hydrolyzed Wheat Protein
                </span>
                <h4 className="text-lg font-bold text-[#27448a]">Deep Cortex Hydration</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ultra-low molecular weight proteins that penetrate through the cuticle into the inner cortex, restoring natural moisture equilibrium, softness, and elastic bounce.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-cyan-50/60 border border-cyan-100 text-xs font-semibold text-[#0a6ebd] space-y-1">
              <div>• Restores elastic flexibility</div>
              <div>• Prevents brittle mid-shaft snapping</div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. SUMMARY BANNER & CTA */}
      <div className="bg-gradient-to-r from-[#27448a] to-[#0a6ebd] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-bold text-[#4ecdc4] uppercase tracking-wider block">
            Colour Without Consequences
          </span>
          <h4 className="text-xl sm:text-2xl font-black text-white">
            "ana-d-tox chaar baar, colour karo baar baar"
          </h4>
          <p className="text-xs sm:text-sm text-cyan-100 leading-relaxed">
            Ana-d-tox Treatment protects and repairs hair and scalp damage and enhances the beauty of your hair. Now colour your hair without the guilt of hair and scalp damage!
          </p>
        </div>
        <button
          onClick={() => onOpenBooking('Richfeel Ana-d-tox Consultation')}
          className="px-8 py-3.5 rounded-xl bg-white text-[#27448a] font-black text-xs sm:text-sm shadow-md hover:bg-cyan-50 hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-[#0a6ebd]" />
          <span>Book In-Clinic Ana-d-tox Assessment</span>
        </button>
      </div>
    </div>
  );
};
