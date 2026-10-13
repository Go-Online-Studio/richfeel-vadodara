import React, { useState } from 'react';
import { conditionCategories } from '../../data/staticData';
import { Treatment } from '../../types';
import { CheckCircle2, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface ConditionsViewProps {
  initialConditionId?: string;
  treatments: Treatment[];
  onSelectTreatment: (treatmentId: string) => void;
  onOpenBooking: () => void;
  onSelectCondition?: (conditionId: string) => void;
}

export const ConditionsView: React.FC<ConditionsViewProps> = ({
  initialConditionId,
  treatments,
  onSelectTreatment,
  onOpenBooking,
  onSelectCondition
}) => {
  const [selectedCondition, setSelectedCondition] = useState(
    initialConditionId || conditionCategories[0].id
  );

  const activeCategory =
    conditionCategories.find((c) => c.id === selectedCondition) || conditionCategories[0];

  // Match treatments matching this condition
  const matchedTreatments = treatments.filter((t) =>
    activeCategory.recommendedTreatmentIds.includes(t.id)
  );

  return (
    <div className="py-12 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
            Targeted Diagnosis & Care
          </span>
          {/* Single H1 */}
          <h1 className="text-3xl sm:text-5xl font-black text-[#27448a] tracking-tight">
            Treatments by Condition
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
            Every hair loss and dermatological condition has a distinct biological cause. Select your symptom below to discover clinically prescribed treatment pathways.
          </p>
        </div>

        {/* Condition Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {conditionCategories.map((cond) => {
            const isSelected = selectedCondition === cond.id;
            return (
              <button
                key={cond.id}
                onClick={() => setSelectedCondition(cond.id)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-brand text-white border-transparent shadow-md'
                    : 'bg-white text-slate-800 border-slate-200/80 hover:border-[#0a6ebd]/40'
                }`}
              >
                <div className="text-xs font-bold leading-snug mb-2">{cond.name}</div>
                <div
                  className={`text-[11px] leading-tight line-clamp-2 ${
                    isSelected ? 'text-cyan-100' : 'text-slate-500'
                  }`}
                >
                  {cond.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Condition Details & Matched Treatments */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd]">
                Clinical Evaluation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#27448a] mt-1">
                {activeCategory.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                {activeCategory.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {onSelectCondition && (
                <button
                  onClick={() => onSelectCondition(activeCategory.id)}
                  className="px-4 py-3 rounded-xl bg-blue-50 text-[#0a6ebd] text-xs font-bold hover:bg-blue-100 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Full Condition Guide</span>
                </button>
              )}

              <button
                onClick={onOpenBooking}
                className="bg-gradient-brand text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md hover:opacity-95 transition-all shrink-0 cursor-pointer"
              >
                Consult Vadodara Specialist
              </button>
            </div>
          </div>

          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0a6ebd]" />
            <span>Recommended Protocols at Richfeel Vadodara ({matchedTreatments.length})</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedTreatments.map((t) => (
              <div
                key={t.id}
                className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200 flex flex-col justify-between group hover:bg-white hover:shadow-lg transition-all"
              >
                <div>
                  {/* Treatment Card Image (Consistent 4:3 Aspect Ratio) */}
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-slate-200">
                    <img
                      src={t.image}
                      alt={t.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase text-[#0a6ebd] tracking-wider block mb-1">
                    {t.category}
                  </span>
                  <h4 className="text-base font-bold text-[#27448a] mb-1 group-hover:text-[#0a6ebd] transition-colors">
                    {t.title}
                  </h4>
                  <p className="text-xs font-medium text-slate-600 mb-2">{t.tagline}</p>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                    {t.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => onSelectTreatment(t.id)}
                    className="text-xs font-bold text-[#0a6ebd] hover:text-[#27448a] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Treatment Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={onOpenBooking}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 hover:bg-[#0a6ebd] hover:text-white transition-colors cursor-pointer"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
