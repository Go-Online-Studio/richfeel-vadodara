import React from 'react';
import { Trophy, Star, Award, Shield, Sparkles } from 'lucide-react';
import { awardsData } from '../../data/staticData';

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-20 bg-white border-b border-slate-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
            Industry Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#27448a] tracking-tight">
            Awards & Accolades
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            Honored with prestigious global and national recognitions for revolutionary clinical breakthroughs in trichology, non-surgical hair restoration, and patient trust.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardsData.map((award, index) => (
            <div
              key={award.id}
              className="bg-[#f6f9fc] rounded-2xl p-6 border border-slate-200/70 hover:border-[#0a6ebd]/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center text-[#27448a]">
                    <Trophy className="w-5 h-5 text-[#0a6ebd]" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 text-[#0a6ebd] border border-blue-100">
                    {award.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#27448a] mb-2 leading-snug">
                  {award.title}
                </h3>

                <div className="text-xs font-semibold text-slate-700 mb-2">
                  {award.organization} {award.location && `· ${award.location}`}
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {award.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-[#0a6ebd] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified National & Global Honor</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
