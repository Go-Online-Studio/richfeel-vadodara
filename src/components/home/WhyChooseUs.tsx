import React from 'react';
import { ShieldCheck, Cpu, Globe, FlaskConical, Award, HeartPulse } from 'lucide-react';
import { whyChooseUsReasons } from '../../data/staticData';

export const WhyChooseUs: React.FC = () => {
  const icons = [Globe, ShieldCheck, HeartPulse, Cpu, FlaskConical, Award];

  return (
    <section className="py-20 bg-[#f6f9fc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
            Why Choose Richfeel Vadodara
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#27448a] tracking-tight">
            Scientific Precision Meets Patient Compassion
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            Trusted by over a million patients across India and leading the standard of hair restoration and clinical skin aesthetics in Vadodara.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsReasons.map((reason, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0a6ebd]/10 text-[#0a6ebd] flex items-center justify-center mb-5 group-hover:bg-[#0a6ebd] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base font-bold text-[#27448a] group-hover:text-[#0a6ebd] transition-colors mb-2.5">
                  {reason.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
