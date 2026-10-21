'use client';

import React from 'react';
import { Sparkles, Dna, Activity, CheckCircle2, Zap, ArrowRight, ShieldCheck, Cpu, Calendar, Phone } from 'lucide-react';

interface AnagrowBrochureSectionProps {
  onOpenBooking: (concern?: string) => void;
}

export const AnagrowBrochureSection: React.FC<AnagrowBrochureSectionProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. HERO CALLOUT: 50/50 Flexbox Split with Macro Hair Image */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c1f44] via-[#1c3872] to-[#0a6ebd] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-white/10">
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Column (50% on Desktop): order-2 on mobile so image is on top, order-1 on desktop */}
          <div className="w-full lg:w-1/2 space-y-5 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#4ecdc4] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Clinical Innovation · PCT Rejuve MAX</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Fight Hair Thinning With <span className="text-[#4ecdc4]">Richfeel Anagrow</span>
            </h1>

            <p className="text-sm sm:text-base text-cyan-100 font-medium leading-relaxed">
              World's First Hair Thinning Treatment With Plant Stem Cell Extracts (PCT Rejuve MAX). Developed in scientific collaboration with Swiss scientist <strong>Dr. Fred Zülli</strong> (Mibelle Group Biochemistry, Switzerland) and Italian biomedical engineers <strong>Dr. Ferrari &amp; Dr. Beatrix Ferrari</strong> (Milan, Italy).
            </p>

            <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold text-white/90">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4] shrink-0" />
                <span>Zero Needles · 100% Painless</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4] shrink-0" />
                <span>Swiss Stem Cell Science</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-[#4ecdc4] shrink-0" />
                <span>+80% Stem Cell Colony Growth</span>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenBooking('Richfeel Anagrow Consultation')}
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

          {/* Right Column (50% on Desktop): order-1 on mobile so image is on top, order-2 on desktop */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900 group">
              <img
                src="/images/treatments/anagrow/anagrow_macro_hair.webp"
                alt="Photorealistic macro photography of a healthy, thick hair strand against a clean clinical white background"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="text-xs text-cyan-200/90 font-medium tracking-wide mt-3 text-center">
              Dr. Fred Zülli (Switzerland) &amp; Dr. Ferrari (Milan, Italy) Collaboration
            </span>
          </div>
        </div>
      </div>

      {/* 2. THE 4 POWERFUL BIO-ACTIVES: CSS Grid (repeat(4, 1fr)) with Uniform Studio Images */}
      <div className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0a6ebd]">
            Nature Meets Biotechnology
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
            The 4 Powerful Bio-Actives &amp; Stem Cell Extracts
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            PCT Rejuve MAX combines internationally researched plant stem cell extracts and nano-emulsions to awaken dormant follicles, reverse regression, and rebuild thinning hair density:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Extract 1: Swiss Apple */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-5 hover:border-emerald-300 hover:shadow-md transition-all">
            <div className="space-y-4">
              {/* Standard Uniform Image Container */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-white border border-slate-100 p-2 overflow-hidden shadow-xs flex items-center justify-center">
                <img
                  src="/images/treatments/anagrow/anagrow_apple.webp"
                  alt="Swiss Apple Stem Cells (Uttwiler Spätlauber)"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block">
                  Switzerland · Mibelle Biochemistry
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#27448a] mt-0.5">
                  Swiss Apple Stem Cells <span className="text-xs font-normal text-slate-500 block">(Uttwiler Spätlauber)</span>
                </h4>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Extracted from the rare 18th-century Swiss apple tree celebrated for extraordinary cellular longevity and resistance to decay.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-xs space-y-2.5">
              <div>
                <strong className="text-emerald-950 block font-bold text-[11px] uppercase tracking-wide">Findings:</strong>
                <span className="text-slate-700 leading-relaxed">Helps epidermal stem cells maintain characteristics and replenish dying cells.</span>
              </div>
              <div className="pt-2 border-t border-emerald-200/60">
                <strong className="text-emerald-950 block font-bold text-[11px] uppercase tracking-wide">Results:</strong>
                <ul className="text-emerald-800 font-semibold space-y-1 mt-1">
                  <li>• Delays ageing by 50%</li>
                  <li>• Lowers hair follicle regression by 50%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extract 2: Argan Tree */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-5 hover:border-amber-300 hover:shadow-md transition-all">
            <div className="space-y-4">
              {/* Standard Uniform Image Container */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-white border border-slate-100 p-2 overflow-hidden shadow-xs flex items-center justify-center">
                <img
                  src="/images/treatments/anagrow/anagrow_argan.webp"
                  alt="Argan Tree Stem Cells (Argania Spinosa)"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block">
                  Morocco · Ancient Flora
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#27448a] mt-0.5">
                  Argan Tree Stem Cells <span className="text-xs font-normal text-slate-500 block">(Argania Spinosa)</span>
                </h4>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Extracted from the drought-resistant Moroccan Argan tree, one of the oldest surviving plant species in the world.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100 text-xs space-y-2.5">
              <div>
                <strong className="text-amber-950 block font-bold text-[11px] uppercase tracking-wide">Findings:</strong>
                <span className="text-slate-700 leading-relaxed">Induces the biological formation of new hair follicles.</span>
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
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-5 hover:border-cyan-300 hover:shadow-md transition-all">
            <div className="space-y-4">
              {/* Standard Uniform Image Container */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-white border border-slate-100 p-2 overflow-hidden shadow-xs flex items-center justify-center">
                <img
                  src="/images/treatments/anagrow/anagrow_pea.webp"
                  alt="Pea Sprout Extracts (Pisum Sativum)"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0a6ebd] block">
                  Organic Phytonutrients
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#27448a] mt-0.5">
                  Pea Sprout Extracts <span className="text-xs font-normal text-slate-500 block">(Pisum Sativum)</span>
                </h4>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Contains concentrated secondary plant metabolites and natural growth activators that reactivate hair signaling.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-100 text-xs space-y-2.5">
              <div>
                <strong className="text-cyan-950 block font-bold text-[11px] uppercase tracking-wide">Findings:</strong>
                <ul className="text-slate-700 space-y-1 mt-1">
                  <li>• Stimulates dermal papilla to induce new hair</li>
                  <li>• Reduces telogen shedding &amp; stimulates anagen</li>
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

          {/* Extract 4: Generic Plant Stem Cells & Nano-Lipobelle Q10 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-5 hover:border-purple-300 hover:shadow-md transition-all">
            <div className="space-y-4">
              {/* Standard Uniform Image Container */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-white border border-slate-100 p-2 overflow-hidden shadow-xs flex items-center justify-center">
                <img
                  src="/images/treatments/anagrow/anagrow_stemcells.webp"
                  alt="Generic Plant Stem Cells & Nano-Lipobelle Q10"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 block">
                  Biomedical Nano-Emulsion
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#27448a] mt-0.5">
                  Nano - Lipobelle Q 10 <span className="text-xs font-normal text-slate-500 block">(Using Nano Emulsions)</span>
                </h4>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Advanced antioxidant co-enzyme Q10 encapsulated in nano-lipid carriers for ultra-deep cellular penetration into the dermal papilla.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 text-xs space-y-2.5">
              <div>
                <strong className="text-purple-950 block font-bold text-[11px] uppercase tracking-wide">Findings:</strong>
                <ul className="text-slate-700 space-y-1 mt-1">
                  <li>• Stimulates growth of dermal papilla cells</li>
                  <li>• Stimulates hair follicle proliferation in vitro</li>
                </ul>
              </div>
              <div className="pt-2 border-t border-purple-200/60">
                <strong className="text-purple-950 block font-bold text-[11px] uppercase tracking-wide">Results:</strong>
                <ul className="text-purple-900 font-semibold space-y-1 mt-1">
                  <li>• Re-energises follicle cells to boost volume &amp; density</li>
                  <li>• Clinically prevents premature greying of hair</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. STEM CELL SCIENCE: Epidermal vs Dermal Stem Cells */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xs space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd]">
            Trichological Biology
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#27448a] tracking-tight">
            How Hair Follicle Stem Cells Work
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            The biological secret to combating hair thinning lies inside the follicle's two distinct stem cell populations:
          </p>
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
              <span>Targeted by Argan Tree, Pea Sprout &amp; Nano-Lipobelle Q10</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. TRANSDERMAL MACHINE SECTION: Technical Showcase Layout */}
      <div className="bg-[#0b172e] text-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-slate-800 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-[#4ecdc4] text-xs font-bold uppercase tracking-wider border border-cyan-500/30">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Showcase · Milan, Italy</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            RF Anagain 10X: World's First Transdermal Penetration Machine
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            The clinical breakthrough of Richfeel Anagrow was introducing high-potency plant stem cell peptides deep into the human scalp in a 100% needle-free, non-invasive manner. Developed in Milan, Italy by biomedical engineers Dr. Ferrari &amp; Dr. Beatrix Ferrari, the RF Anagain 10X achieves cellular delivery through 3 synchronized processes:
          </p>
        </div>

        {/* Technical Showcase: Machine Render + 3-Process Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          {/* Machine Product Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/60 group">
              <img
                src="/images/treatments/anagrow/anagrow_machine.webp"
                alt="High-end 3D industrial product render of clinical transdermal hair treatment machine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[11px] font-bold text-[#4ecdc4]">
                Patented RF Electroporation
              </div>
            </div>
            <div className="w-full mt-3 flex items-center justify-between text-[11px] text-cyan-200/80 px-1">
              <span>Non-Invasive · Zero Downtime</span>
              <span>100% Needle-Free Scalp Delivery</span>
            </div>
          </div>

          {/* 3 Synchronized Processes (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Process 1 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-[#4ecdc4] flex items-center justify-center font-black text-sm shrink-0 mt-0.5 border border-blue-400/30">
                01
              </div>
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold text-white">Process 1: Detoxification</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Gentle vacuum-assisted lymphatic drainage purges clogged sebum, dead cellular debris, and scalp micro-toxins, preparing unobstructed follicle entry points.
                </p>
              </div>
            </div>

            {/* Process 2 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-[#4ecdc4] flex items-center justify-center font-black text-sm shrink-0 mt-0.5 border border-teal-400/30">
                02
              </div>
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold text-white">Process 2: Rejuvenation</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Radiofrequency electroporation temporarily opens nano-aqueous micro-channels to deliver PCT Rejuve MAX directly into the follicular stem cell niche without pain.
                </p>
              </div>
            </div>

            {/* Process 3 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-[#4ecdc4] flex items-center justify-center font-black text-sm shrink-0 mt-0.5 border border-indigo-400/30">
                03
              </div>
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold text-white">Process 3: Vascularization</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Stimulates micro-capillary vasodilation, flooding re-awakened follicle bulbs with oxygen, amino acids, and vital nutrients for sustained accelerated growth.
                </p>
              </div>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { num: '1', title: 'Scanty Hair', desc: 'Widening part line & visible scalp skin', img: '/images/treatments/anagrow/sign1.webp' },
            { num: '2', title: 'Decreased Volume', desc: 'Thinner ponytail & flat crown structure', img: '/images/treatments/anagrow/sign2.webp' },
            { num: '3', title: 'Lack Of Growth', desc: 'Stunted cycle & delayed follicle regrowth', img: '/images/treatments/anagrow/sign3.webp' },
            { num: '4', title: 'Decreased Density', desc: 'Progressive miniaturization of follicles', img: '/images/treatments/anagrow/sign4.webp' },
            { num: '5', title: 'Active Hair Loss', desc: 'Excessive daily root bulb shedding', img: '/images/treatments/anagrow/sign5.webp' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#f6f9fc] border border-slate-200/80 space-y-3 hover:bg-blue-50/50 hover:border-blue-200 hover:shadow-sm transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Visual Image Container */}
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-brand text-white font-black text-xs flex items-center justify-center shrink-0">
                    {item.num}
                  </div>
                  <div className="text-sm font-bold text-[#27448a]">
                    {item.title}
                  </div>
                </div>
              </div>
              <div className="text-xs text-slate-500 leading-snug">
                {item.desc}
              </div>
            </div>
          ))}
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

