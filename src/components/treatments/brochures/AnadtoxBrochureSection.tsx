'use client';

import React from 'react';
import { Sparkles, ShieldCheck, CheckCircle2, AlertOctagon, Droplets, Zap, ArrowRight, Layers, Eye, RefreshCw, Scissors, Cpu, Flame, Calendar, Phone } from 'lucide-react';

interface AnadtoxBrochureSectionProps {
  onOpenBooking: (concern?: string) => void;
}

export const AnadtoxBrochureSection: React.FC<AnadtoxBrochureSectionProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. HERO CALLOUT: Sleek Wide Header Banner (Distorted AI face container removed) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c1322] via-[#1a2942] to-[#0a6ebd] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-white/10">
        <div className="relative z-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#4ecdc4] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Advanced Hair Detoxification · Power THP from USA</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Break-Free From The Guilt Of <span className="text-[#4ecdc4]">Hair Colour Damage</span>
            </h1>

            <div className="inline-block p-3 px-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xs">
              <p className="text-base sm:text-xl font-black text-amber-300 italic tracking-wide">
                "ana-d-tox chaar baar, colour karo baar baar"
              </p>
            </div>

            <p className="text-sm sm:text-base text-cyan-100 font-medium leading-relaxed max-w-3xl">
              Introducing <strong>Richfeel Ana-d-tox</strong> for coloured hair powered by <strong>Power THP from USA</strong>. Protects and repairs hair and scalp damage, locks in vibrant colour, and increases color retention by 20%. Now colour your hair without the guilt of hair and scalp damage!
            </p>

            <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold text-white/90">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4] shrink-0" />
                <span>+20% Colour Retention</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4] shrink-0" />
                <span>+25% Colour Uptake</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4] shrink-0" />
                <span>Zero Chemical Irritation</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4] shrink-0" />
                <span>Needle-Free Transdermal Delivery</span>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenBooking('Richfeel Ana-d-tox Consultation')}
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

          {/* Sleek Wide Banner Image: 3D Microscopic Render of Damaged Cuticle Repaired by Golden Clinical Serum */}
          <div className="relative w-full aspect-[1.79/1] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-slate-950 group">
            <img
              src="/images/treatments/ana-d-tox/anadtox_hero_cover.jpg"
              alt="Abstract, premium 3D microscopic render of a damaged hair cuticle being repaired and smoothed by a glowing golden clinical serum"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent hidden  md:flex items-end p-4 sm:p-6">
              <div className="w-xs md:w-sm xl:w-md">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-[#4ecdc4] block">
                    Microscopic Scientific Visualization
                  </span>
                  <p className="text-xs text-white/90">
                    Power THP golden serum active infusion: repairing damaged cuticle shingles and restoring 18-MEA lipid mantle
                  </p>
                </div>
                
              </div>
            </div>
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
            What Is Hair Colouring &amp; The Chemical Process
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Hair colouring is the practice of changing the natural colour of your hair using various chemicals. While it provides aesthetic transformation, understanding the chemical process is vital:
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
                  <span><strong>Fashion &amp; Creative Expression</strong>: Trendy highlights, balayage, ombré, and bold global hair shades.</span>
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

          {/* Chemical Process Card (6 cols) */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-[#f6f9fc] border border-slate-200 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block">
                  The Chemical Reaction
                </span>
                <span className="text-[11px] font-semibold text-slate-500">Alkaline Swelling &amp; Oxidation</span>
              </div>
              <h4 className="text-lg font-bold text-[#27448a]">The Hair Colour Mechanism</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standard hair coloring requires mixing two active chemical components:
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center space-y-1">
                  <span className="text-xs font-bold text-slate-800 block">Hair Dye / Bleach</span>
                  <span className="text-[11px] text-slate-500">Ammonia / Alkalizers force open cuticle scales</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center space-y-1">
                  <span className="text-xs font-bold text-slate-800 block">Developer</span>
                  <span className="text-[11px] text-slate-500">Hydrogen Peroxide oxidizes natural melanin</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 py-1">
                <ArrowRight className="w-4 h-4 text-rose-500" />
                <span className="text-xs font-bold text-rose-700">Applied directly to hair shaft &amp; scalp skin</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-100 text-xs text-rose-900 leading-relaxed">
              <strong>The Structural Impact:</strong> This aggressive chemical opening breaks the 18-MEA lipid protective layer, exposing inner cortex keratin to irreparable moisture loss and brittleness.
            </div>
          </div>
        </div>
      </div>

      {/* 3. CHEMICAL DAMAGE COMPARISON: Side-by-Side Flex Layout (Hair Damage vs Skin Damage) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600">
            Clinical Pathology Contrast
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
            Effects Of Hair Colouring On Hair &amp; Scalp
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Chemical damage leads to dryness, loss of lustre and even a change of texture in your hair:
          </p>
        </div>

        {/* Side-by-Side Flex/Grid Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Column A: Hair Shaft Damage */}
          <div className="p-6 rounded-3xl bg-[#fcfdfe] border-2 border-slate-200/90 shadow-xs space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#27448a]">1. Hair Shaft Damage</h4>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-100">
                  Fiber Trauma
                </span>
              </div>

              {/* Point 1 */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">Dryness &amp; Brittleness</h5>
                  <span className="text-[10px] uppercase font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">Lipid Stripping</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Chemical dyes strip the hydrophobic epicuticle lipid shield (18-MEA). With cuticle scales left wide open, moisture evaporates quickly, turning hair brittle and rough to the touch.
                </p>
              </div>

              {/* Point 2 */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">Loss of Lustre &amp; Shine</h5>
                  <span className="text-[10px] uppercase font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">Light Scattering</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Damaged, jagged cuticle scales cannot lie flat. Instead of reflecting light in a unified glossy sheen, light scatters irregularly, leaving coloured hair flat, frizzy, and lifeless.
                </p>
              </div>

              {/* Point 3 */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">Hair Thinning &amp; Severe Breakage</h5>
                  <span className="text-[10px] uppercase font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full">Disulfide Loss</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Repeated oxidation dissolves internal cysteine disulfide bonds in the cortex. The structural backbone degrades, causing mid-shaft snapping, trichoptilosis (split ends), and rapid thinning.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-100 text-xs text-rose-900 font-medium">
              <strong>Ana-d-tox Action:</strong> Hydrolyzed Quinoa &amp; Wheat micro-proteins bind to negative ionic charges, sealing cuticles flat and increasing color retention by +20%.
            </div>
          </div>

          {/* Column B: Scalp Skin Damage */}
          <div className="p-6 rounded-3xl bg-[#fcfdfe] border-2 border-slate-200/90 shadow-xs space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <AlertOctagon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#27448a]">2. Scalp Skin Damage</h4>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">
                  Dermal Sensitivity
                </span>
              </div>

              {/* Point 1 */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">Chemical Scalp Irritation &amp; Itching</h5>
                  <span className="text-[10px] uppercase font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">Ostia Blockage</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Synthetic colour compounds seep directly into open follicular ostia and pores. Chemical residues linger for weeks, triggering persistent burning sensations and stubborn pruritus (itching).
                </p>
              </div>

              {/* Point 2 */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">Contact Dermatitis &amp; Micro-Inflammation</h5>
                  <span className="text-[10px] uppercase font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">Immune Response</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Strong chemical couplers (PPD, Resorcinol) elicit allergic contact dermatitis. The scalp becomes erythematous (red), tender, and prone to flaking and epidermal shedding.
                </p>
              </div>

              {/* Point 3 */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">Root Suffocation &amp; Accelerated Shedding</h5>
                  <span className="text-[10px] uppercase font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full">Reactive Telogen</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Persistent chemical residue in the follicle neck suffocates the dermal papilla, preventing normal oxygenation and prompting healthy growing follicles to shift prematurely into telogen loss.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-100 text-xs text-amber-900 font-medium">
              <strong>Ana-d-tox Action:</strong> Vacuum-assisted detox evacuation purges trapped PPD, ammonia, and peroxide residues, restoring physiological scalp pH and follicular respiration.
            </div>
          </div>
        </div>
      </div>

      {/* 4. CHEMICAL TOXICITY: HAZARDOUS INGREDIENTS NEUTRALIZED TABLE */}
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
                <td className="p-3.5 sm:p-4 text-rose-700">Severe allergic reactions, eczema, eyelid &amp; facial swelling, acute dermatitis</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">Completely purged from scalp pores &amp; follicles</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 sm:p-4 font-bold text-slate-900 whitespace-nowrap">Ammonia</td>
                <td className="p-3.5 sm:p-4">Alkaline agent to swell cuticle and alter pH balance</td>
                <td className="p-3.5 sm:p-4 text-amber-800">Severe cuticle lift, burning sensation, scalp moisture stripping</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">Restores acidic pH balance &amp; flattens cuticles</td>
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
                <td className="p-3.5 sm:p-4 font-bold text-slate-900 whitespace-nowrap">Coal Tar &amp; Heavy Metals</td>
                <td className="p-3.5 sm:p-4">Pigment bases in dark/metallic synthetic dyes</td>
                <td className="p-3.5 sm:p-4 text-slate-600">Cumulative chemical load and systemic toxic residue</td>
                <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">Thorough dermal cleansing &amp; ostia evacuation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. MICROSCOPIC CUTICLE COMPARISON: 3-State Cuticle Comparison Cards */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0a6ebd]">
            Electron Microscopy
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
            Microscopic Cuticle Analysis &amp; Comparison
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Comparing the hair shaft across three states: virgin hair, damaged coloured hair, and Richfeel Hair Detox Therapy repaired hair:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* State 1: Virgin Hair */}
          <div className="p-6 rounded-2xl bg-[#f6f9fc] border border-slate-200 space-y-3 flex flex-col justify-between">
            <img
            src="/images/treatments/ana-d-tox/MicroscopicCuticle.webp"
            alt="Virgin Hair"
            className="w-full h-full object-cover rounded-[16px] group-hover:scale-105 transition-transform duration-500"
          />
            <div className="space-y-3">
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
            <div className="p-3 rounded-xl bg-slate-100 text-[11px] text-slate-700 font-medium">
              Balanced Lipid Layer, Selected Cuticle, Natural Strength.
            </div>
          </div>

          {/* State 2: Coloured Hair */}
          <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3 flex flex-col justify-between">
          <img
            src="/images/treatments/ana-d-tox/MicroscopicCuticle2.webp"
            alt="Coloured Hair (Damaged)"
            className="w-full h-full object-cover rounded-[16px] group-hover:scale-105 transition-transform duration-500"
          />
            <div className="space-y-3">
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
            <div className="p-3 rounded-xl bg-rose-100 text-[11px] text-rose-900 font-medium">
              Lipid Layer is Destroyed, Highly Compromised or Lost Cuticle, Damaged Internal Structure.
            </div>
          </div>

          {/* State 3: Ana-d-tox Protected Hair */}
          <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3 flex flex-col justify-between">
          <img
            src="/images/treatments/ana-d-tox/MicroscopicCuticle3.webp"
            alt="Ana-d-tox Treated Hair"
            className="w-full h-full object-cover rounded-[16px] group-hover:scale-105 transition-transform duration-500"
          />
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-900 text-[11px] font-bold uppercase">
                  Ana-d-tox Treated Hair
                </span>
                <Sparkles className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="text-base font-bold text-emerald-950">Resurfaced &amp; Colour-Locked</h4>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Power THP micro-proteins seal cuticles completely flat. Locks in colour molecules, eliminates brittleness, and delivers dazzling high-definition gloss.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-emerald-100 text-[11px] text-emerald-950 font-medium">
              Lipid Layer is Nourished, Repaired Cuticle, Enhances Natural Strength.
            </div>
          </div>
        </div>
      </div>

      {/* 6. THE 4-STEP ANA-D-TOX CLINICAL PROTOCOL (With Machine Technical Showcase) */}
      <div className="bg-[#0b172e] text-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-slate-800 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-[#4ecdc4] text-xs font-bold uppercase tracking-wider border border-cyan-500/30">
            <Cpu className="w-3.5 h-3.5" />
            <span>Clinical Protocol · Milan, Italy</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            4-Step Clinical Protocol With RF Anagain 10X Machine
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Utilizing the "Miracle Machine" developed in Milan, Italy, Ana-d-tox provides needle-free transdermal penetration of Power THP directly to the scalp and hair fiber:
          </p>
        </div>

        {/* RF Anagain 10X Machine Showcase (Milan, Italy) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-slate-900 shadow-xl group">
              <img
                src="/images/treatments/anagrow/anagrow_machine.jpg"
                alt="RF Anagain 10X Miracle Machine from Milan Italy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="text-[11px] text-cyan-200 font-semibold mt-2.5">
              RF Anagain 10X "The Miracle Machine" · Milan, Italy
            </span>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#4ecdc4] uppercase tracking-wider block">Advanced Electroporation &amp; Vacuum Technology</span>
              <h4 className="text-lg sm:text-xl font-bold text-white">Needle-Free Transdermal Delivery System</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Designed by Italian biomedical engineers Dr. Ferrari &amp; Dr. Beatrix Ferrari in Milan, the RF Anagain 10X machine synchronizes 3 clinical actions: gentle vacuum evacuation to purge trapped chemical residues, painless radiofrequency electroporation driving Power THP deep into the cortex, and capillary vascularization.
            </p>
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-[#4ecdc4] block">Detox</span>
                <span className="text-[10px] text-slate-300">Pores Purged</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-[#4ecdc4] block">Rejuvenation</span>
                <span className="text-[10px] text-slate-300">Transdermal THP</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-[#4ecdc4] block">Vascular</span>
                <span className="text-[10px] text-slate-300">Micro-Oxygenation</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Steps Equal-Width Grid With Brochure Step Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {/* Step 1 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between hover:border-cyan-400/40 transition-all group">
            <div className="space-y-3">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-white/10 border border-white/10 p-2 flex items-center justify-center">
                <img
                  src="/images/treatments/ana-d-tox/tox_step1.webp"
                  alt="Step 1 Cuticle Prep and Scalp Shield"
                  className="w-full h-full rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xs font-black text-[#4ecdc4] block">STEP 01</span>
              <h4 className="text-sm font-bold text-white">Cuticle Prep &amp; Scalp Shield</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Specialized bio-barrier application to insulate scalp skin against direct chemical dye burns, irritation, and pore infiltration.
              </p>
            </div>
            <div className="text-[11px] text-cyan-200/80 font-medium">Pre-Colour Protection</div>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between hover:border-cyan-400/40 transition-all group">
            <div className="space-y-3">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-white/10 border border-white/10 p-2 flex items-center justify-center">
                <img
                  src="/images/treatments/ana-d-tox/tox_step2.webp"
                  alt="Step 2 RF Anagain 10X Infusion"
                  className="w-full h-full rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xs font-black text-[#4ecdc4] block">STEP 02</span>
              <h4 className="text-sm font-bold text-white">RF Anagain 10X Infusion</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Electroporation transdermal delivery drives hydrolyzed Power THP proteins deep into the inner cortex without needle trauma.
              </p>
            </div>
            <div className="text-[11px] text-cyan-200/80 font-medium">Needle-Free Transdermal</div>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between hover:border-cyan-400/40 transition-all group">
            <div className="space-y-3">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-white/10 border border-white/10 p-2 flex items-center justify-center">
                <img
                  src="/images/treatments/ana-d-tox/tox_step3.webp"
                  alt="Step 3 Scalp Detox & Neutralization"
                  className="w-full h-full rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xs font-black text-[#4ecdc4] block">STEP 03</span>
              <h4 className="text-sm font-bold text-white">Scalp Detox &amp; Neutralization</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Vacuum drainage actively neutralizes residual PPD, peroxide, and ammonia molecules trapped in the scalp ostia and roots.
              </p>
            </div>
            <div className="text-[11px] text-cyan-200/80 font-medium">Complete Toxic Evacuation</div>
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between hover:border-cyan-400/40 transition-all group">
            <div className="space-y-3">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-white/10 border border-white/10 p-2 flex items-center justify-center">
                <img
                  src="/images/treatments/ana-d-tox/tox_step4.webp"
                  alt="Step 4 Power THP Gloss Sealing"
                  className="w-full h-full rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xs font-black text-[#4ecdc4] block">STEP 04</span>
              <h4 className="text-sm font-bold text-white">Power THP Gloss Sealing</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Final cuticle smoothing seal that locks in rich hair color molecules, prevents fading, and imparts exceptional silkiness.
              </p>
            </div>
            <div className="text-[11px] text-cyan-200/80 font-medium">+20% Long-Lasting Lock</div>
          </div>
        </div>
      </div>

      {/* 7. THE POWER THP ACTION: Restructured Equal-Width Grid Columns with Hyper-Realistic Botanical Photography */}
      <div className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0a6ebd]">
            USA Advanced Formulation
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
            The Power THP Action (Triple Protein Complex)
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Richfeel Ana-d-tox features three hydrolyzed botanical proteins from the USA that operate in targeted synergy across the hair shaft:
          </p>
        </div>

        {/* Equal-Width Grid Columns (repeat(3, 1fr) on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Column 1: Quinoa (Equal-width) */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-5 hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100 uppercase">
                  Protein 01
                </span>
              </div>
              <div className="w-full aspect-[1/1] rounded-2xl overflow-hidden border border-slate-100 shadow-xs bg-slate-50 group">
                <img
                  src="/images/treatments/ana-d-tox/thp_quinoa.jpg"
                  alt="Hydrolyzed Quinoa Protein natural grains and clinical extract"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider block">
                  Hydrolyzed Quinoa Protein
                </span>
                <h4 className="text-lg font-bold text-[#27448a]">Colour Sealing &amp; Repair</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Contains all 8 essential amino acids. Binds tenaciously to the negative charges on damaged keratin, sealing split ends and locking artificial pigment inside the cortex.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-100 text-xs font-semibold text-purple-900 space-y-1">
              <div>• Increases colour retention by <strong>+20%</strong></div>
              <div>• Enhances colour uptake by <strong>+25%</strong></div>
            </div>
          </div>

          {/* Column 2: Barley (Equal-width) */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-5 hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100 uppercase">
                  Protein 02
                </span>
              </div>
              <div className="w-full aspect-[1/1] rounded-2xl overflow-hidden border border-slate-100 shadow-xs bg-slate-50 group">
                <img
                  src="/images/treatments/ana-d-tox/thp_barley.jpg"
                  alt="Hydrolyzed Barley Protein thermal UV protective film extract"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">
                  Hydrolyzed Barley Protein
                </span>
                <h4 className="text-lg font-bold text-[#27448a]">Thermal &amp; UV Shield</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Forms a durable, breathable biopolymer film along the hair shaft. Protects against sun photo-bleaching, heat-styling flat irons, and daily environmental oxidation.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-100 text-xs font-semibold text-amber-900 space-y-1">
              <div>• High heat resilience protection</div>
              <div>• Defends against UV pigment fading</div>
            </div>
          </div>

          {/* Column 3: Wheat (Equal-width) */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-5 hover:border-cyan-300 hover:shadow-md transition-all flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#0a6ebd] flex items-center justify-center font-bold">
                  <Droplets className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-[#0a6ebd] bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-100 uppercase">
                  Protein 03
                </span>
              </div>
              <div className="w-full aspect-[1/1] rounded-2xl overflow-hidden border border-slate-100 shadow-xs bg-slate-50 group">
                <img
                  src="/images/treatments/ana-d-tox/thp_wheat.jpg"
                  alt="Hydrolyzed Wheat Protein inner cortex moisture equilibrium"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
            <div className="p-3.5 rounded-xl bg-cyan-50/70 border border-cyan-100 text-xs font-semibold text-[#0a6ebd] space-y-1">
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

