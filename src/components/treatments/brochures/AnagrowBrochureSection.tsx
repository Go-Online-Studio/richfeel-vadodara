'use client';

import React from 'react';
import { Sparkles, Dna, Activity, ShieldCheck, CheckCircle2, Zap, ArrowRight, Layers, Eye, RefreshCw, Award } from 'lucide-react';

interface AnagrowBrochureSectionProps {
  onOpenBooking: (concern?: string) => void;
}

export const AnagrowBrochureSection: React.FC<AnagrowBrochureSectionProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 1. HERO CALLOUT: World's First Plant Stem Cell Treatment */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#102a5c] via-[#27448a] to-[#0a6ebd] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-white/10">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#4ecdc4] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Clinical Innovation · PCT Rejuve MAX</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Fight Hair Thinning With <span className="text-[#4ecdc4]">Richfeel Anagrow</span>
            </h2>

            <p className="text-sm sm:text-base text-cyan-100 font-medium leading-relaxed max-w-2xl">
              World's First Hair Thinning Treatment With Plant Stem Cell Extracts (PCT Rejuve MAX). Developed in scientific collaboration with Swiss scientist <strong>Dr. Fred Zülli</strong> (Mibelle Group Biochemistry, Switzerland) and Italian biomedical engineers <strong>Dr. Ferrari & Dr. Beatrix Ferrari</strong> (Milan, Italy).
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-white/90">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4]" />
                <span>Zero Needles · 100% Painless</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4]" />
                <span>Swiss Stem Cell Science</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4]" />
                <span>+80% Stem Cell Colony Growth</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-3">
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/40 max-w-xs w-full aspect-[4/5]">
              <img
                src="/images/treatments/anagrow/anagrow_hero.webp"
                alt="Richfeel Anagrow plant stem cell breakthrough"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-4">
                <div className="text-center w-full">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#4ecdc4] block">+80%</span>
                  <p className="text-[11px] text-white/90 leading-tight">
                    Increase in human hair follicle stem cell colony-forming efficiency
                  </p>
                </div>
              </div>
            </div>
            <span className="text-[11px] text-cyan-200/80 font-medium tracking-wide">
              Swiss & Italian Biomedical Collaboration
            </span>
          </div>
        </div>
      </div>

      {/* 2. THE 4 POWERFUL BIO-ACTIVES & STEM CELL EXTRACTS (Exact Clinical Table) */}
      <div className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0a6ebd]">
            Nature Meets Biotechnology
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
            The 4 Powerful Bio-Actives & Stem Cell Extracts
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            PCT Rejuve MAX combines internationally researched plant stem cell extracts and nano-emulsions to awaken dormant follicles, reverse regression, and rebuild thinning hair density:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Extract 1: Swiss Apple */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-5 hover:border-blue-200 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <Dna className="w-6 h-6" />
                </div>
                <img
                  src="/images/treatments/anagrow/anagrow_apple.webp"
                  alt="Swiss Apple"
                  className="w-10 h-8 object-contain rounded-md bg-emerald-50 p-0.5 border border-emerald-100"
                />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block">
                Switzerland · Mibelle Biochemistry
              </span>
              <h4 className="text-lg font-bold text-[#27448a]">
                Swiss Apple Stem Cells <span className="text-xs font-normal text-slate-500 block">(Uttwiler Spätlauber)</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Extracted from the rare 18th-century Swiss apple tree celebrated for extraordinary cellular longevity and resistance to decay.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-xs space-y-2.5">
              <div>
                <strong className="text-emerald-950 block font-bold text-[11px] uppercase tracking-wide">Findings:</strong>
                <span className="text-slate-700 leading-relaxed">Helps the epidermal stem cells to maintain their characteristics and replenish dying cells.</span>
              </div>
              <div className="pt-2 border-t border-emerald-200/60">
                <strong className="text-emerald-950 block font-bold text-[11px] uppercase tracking-wide">Results:</strong>
                <ul className="text-emerald-800 font-semibold space-y-1 mt-1">
                  <li>• Delays ageing by 50%</li>
                  <li>• Lowers down hair follicle regression by 50%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extract 2: Argan Tree */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-5 hover:border-blue-200 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <img
                  src="/images/treatments/anagrow/anagrow_argan.webp"
                  alt="Argan tree fruit"
                  className="w-10 h-8 object-contain rounded-md bg-amber-50 p-0.5 border border-amber-100"
                />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block">
                Morocco · Ancient Flora
              </span>
              <h4 className="text-lg font-bold text-[#27448a]">
                Argan Tree Stem Cells <span className="text-xs font-normal text-slate-500 block">(Argania Spinosa)</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Extracted from the drought-resistant Moroccan Argan tree, one of the oldest surviving plant species in the world.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 text-xs space-y-2.5">
              <div>
                <strong className="text-amber-950 block font-bold text-[11px] uppercase tracking-wide">Findings:</strong>
                <span className="text-slate-700 leading-relaxed">Induces the formation of new hair follicles.</span>
              </div>
              <div className="pt-2 border-t border-amber-200/60">
                <strong className="text-amber-950 block font-bold text-[11px] uppercase tracking-wide">Results:</strong>
                <ul className="text-amber-900 font-semibold space-y-1 mt-1">
                  <li>• Increases hair follicle proliferation</li>
                  <li>• Vitalizes and protects dermal hair papilla</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extract 3: Pea Sprout */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-5 hover:border-blue-200 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#0a6ebd]">
                  <Activity className="w-6 h-6" />
                </div>
                <img
                  src="/images/treatments/anagrow/anagrow_pea.webp"
                  alt="Pea sprout extract"
                  className="w-10 h-8 object-contain rounded-md bg-cyan-50 p-0.5 border border-cyan-100"
                />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0a6ebd] block">
                Organic Phytonutrients
              </span>
              <h4 className="text-lg font-bold text-[#27448a]">
                Pea Sprout Extracts <span className="text-xs font-normal text-slate-500 block">(Pisum Sativum)</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Contains concentrated secondary plant metabolites and natural growth activators that reactivate hair signaling.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-100 text-xs space-y-2.5">
              <div>
                <strong className="text-cyan-950 block font-bold text-[11px] uppercase tracking-wide">Findings:</strong>
                <ul className="text-slate-700 space-y-1 mt-1">
                  <li>• Stimulates dermal papilla to induce new hair</li>
                  <li>• Reduces telogen shedding & stimulates anagen</li>
                </ul>
              </div>
              <div className="pt-2 border-t border-cyan-200/60">
                <strong className="text-cyan-950 block font-bold text-[11px] uppercase tracking-wide">Results (Prolongs Life Cycle):</strong>
                <ul className="text-[#0a6ebd] font-semibold space-y-1 mt-1">
                  <li>• Increases growth by 85%</li>
                  <li>• Reduces hair fall by 56%</li>
                  <li>• Restores hair regeneration by 78%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extract 4: Nano-Lipobelle Q10 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-5 hover:border-purple-200 transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-2">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 block">
                Biomedical Nano-Emulsion
              </span>
              <h4 className="text-lg font-bold text-[#27448a]">
                Nano - Lipobelle Q 10 <span className="text-xs font-normal text-slate-500 block">(Using Nano Emulsions)</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Advanced antioxidant co-enzyme Q10 encapsulated in nano-lipid carriers for ultra-deep cellular penetration into the dermal papilla.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 text-xs space-y-2.5">
              <div>
                <strong className="text-purple-950 block font-bold text-[11px] uppercase tracking-wide">Findings:</strong>
                <ul className="text-slate-700 space-y-1 mt-1">
                  <li>• Growth of dermal papilla cells</li>
                  <li>• Stimulates hair follicle growth in vitro</li>
                </ul>
              </div>
              <div className="pt-2 border-t border-purple-200/60">
                <strong className="text-purple-950 block font-bold text-[11px] uppercase tracking-wide">Results:</strong>
                <ul className="text-purple-900 font-semibold space-y-1 mt-1">
                  <li>• Re-energises hair follicle cells to boost growth, volume & density</li>
                  <li>• Clinically prevents premature greying of hair</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. STEM CELL SCIENCE: Epidermal vs Dermal Stem Cells */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd]">
              Trichological Biology
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
              How Hair Follicle Stem Cells Work
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The true biological key to hair thinning lies inside the hair follicle's two distinct stem cell populations:
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="p-2 bg-slate-50 rounded-2xl border border-slate-200">
              <img
                src="/images/treatments/anagrow/anagrow_follicle_layers.webp"
                alt="Hair follicle layers stem cell niches"
                className="w-28 h-20 object-contain rounded-xl bg-white p-1"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#f6f9fc] border border-slate-200 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-100 text-[#0a6ebd] font-black text-sm flex items-center justify-center">
                A
              </span>
              <h4 className="text-base font-bold text-[#27448a]">
                Epidermal Stem Cells
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Located in the outer root sheath of the hair follicle. Epidermal stem cells are responsible for constantly stimulating new shaft keratinization and defending against follicular aging and premature atrophy.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0a6ebd]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Targeted by Swiss Apple (Uttwiler Spätlauber)</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#f6f9fc] border border-slate-200 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-teal-100 text-[#087f7b] font-black text-sm flex items-center justify-center">
                B
              </span>
              <h4 className="text-base font-bold text-[#27448a]">
                Dermal Stem Cells
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Located in two key niches: the <strong>dermal papilla</strong> and the <strong>hair bulge</strong>. These cells instruct the follicle to form new hair and regenerate micro-capillaries to feed the root bulb.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087f7b]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Targeted by Argan Tree, Pea Sprout & Nano-Lipobelle Q10</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. RF ANAGAIN 10X: THE TRANSDERMAL PENETRATION MACHINE */}
      <div className="bg-[#101e3d] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-800 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4ecdc4]">
              Italian Biomedical Engineering
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              RF Anagain 10X: World's First Transdermal Penetration Machine
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              The real clinical breakthrough was introducing high-potency plant stem cell peptides deep into the human scalp in a 100% non-invasive, needle-free manner. Developed in Milan, Italy with Dr. Ferrari & Dr. Beatrix Ferrari, the RF Anagain 10X achieves deep transdermal delivery across 3 distinct processes:
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 border border-white/20">
              <img
                src="/images/treatments/anagrow/anagrow_machine.webp"
                alt="RF Anagain 10X Transdermal Machine"
                className="w-20 h-14 object-contain rounded-lg bg-white/10 p-1"
              />
              <div className="text-left">
                <span className="text-[11px] uppercase tracking-wider text-[#4ecdc4] font-bold block">RF Anagain 10X</span>
                <span className="text-xs text-white font-medium">Patented Needle-Free</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Processes Visual Diagram & Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
          <div className="lg:col-span-3 flex justify-center">
            <div className="p-3 bg-white/10 rounded-2xl border border-white/15 max-w-[140px] text-center space-y-1">
              <img
                src="/images/treatments/anagrow/anagrow_machine_processes.webp"
                alt="Machine 3 processes schematic"
                className="w-full h-auto object-contain rounded-lg max-h-36 mx-auto"
              />
              <span className="text-[10px] text-cyan-200 block">3-Phase Action</span>
            </div>
          </div>

          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Process 1: Detoxification */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-[#4ecdc4] flex items-center justify-center font-black text-xs">
                01
              </div>
              <h4 className="text-sm font-bold text-white">Detoxification</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Gentle vacuum-assisted lymphatic drainage purges clogged sebum, dead cells, and scalp micro-toxins, preparing the follicle entry points.
              </p>
            </div>

            {/* Process 2: Rejuvenation */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-[#4ecdc4] flex items-center justify-center font-black text-xs">
                02
              </div>
              <h4 className="text-sm font-bold text-white">Rejuvenation</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Radiofrequency electroporation temporarily opens nano-aqueous micro-channels to deliver PCT Rejuve MAX directly into the follicular stem cell niche.
              </p>
            </div>

            {/* Process 3: Vascularization */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-[#4ecdc4] flex items-center justify-center font-black text-xs">
                03
              </div>
              <h4 className="text-sm font-bold text-white">Vascularization</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Stimulates micro-capillary vasodilation, flooding re-awakened follicle bulbs with oxygen, amino acids, and vital nutrients for sustained growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. THE 5 SIGNS OF HAIR THINNING TARGETED */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd]">
            Comprehensive Clinical Target
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
            Fights The 5 Signs Of Hair Thinning
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Richfeel Anagrow is specifically engineered to target every primary indicator of thinning hair identified in trichological practice:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Reference Column Graphic (3 cols) */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 max-w-[180px] text-center space-y-1">
              <img
                src="/images/treatments/anagrow/anagrow_5signs.webp"
                alt="5 signs of hair thinning reference"
                className="w-full h-auto object-contain rounded-xl max-h-64 mx-auto"
              />
              <span className="text-[10px] text-slate-500 font-medium block">Clinical Evaluation</span>
            </div>
          </div>

          {/* 5 Cards (9 cols) */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: '1', title: 'Scanty Hair', desc: 'Widening part line & visible white scalp' },
              { num: '2', title: 'Decreased Volume', desc: 'Thinner ponytail & flat crown structure' },
              { num: '3', title: 'Lack Of Growth', desc: 'Stunted cycle & delayed follicle regrowth' },
              { num: '4', title: 'Decreased Density', desc: 'Progressive miniaturization of follicles' },
              { num: '5', title: 'Active Hair Loss', desc: 'Excessive daily root bulb shedding' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#f6f9fc] border border-slate-200/80 space-y-1.5 hover:bg-blue-50/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-brand text-white font-black text-xs flex items-center justify-center shrink-0">
                    {item.num}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#27448a]">
                    {item.title}
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 leading-tight pl-8">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            onClick={() => onOpenBooking('Richfeel Anagrow Consultation')}
            className="px-8 py-3.5 rounded-xl bg-gradient-brand text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#4ecdc4]" />
            <span>Book In-Clinic Assessment for Anagrow</span>
          </button>
        </div>
      </div>
    </div>
  );
};
