import React from 'react';
import { X, CheckCircle2, ShieldCheck, Phone, Calendar, ArrowLeft } from 'lucide-react';
import { Treatment } from '../../types';
import { clinicInfo } from '../../data/staticData';

interface TreatmentDetailProps {
  treatment: Treatment;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailProps> = ({
  treatment,
  onClose,
  onOpenBooking
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-brand text-white flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4ecdc4]">
                {treatment.category}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              {treatment.title}
            </h2>
            <p className="text-sm text-cyan-100 font-medium mt-1">
              {treatment.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700">
          {/* Technology Highlight */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#0a6ebd] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#27448a] uppercase tracking-wide">
                Patented Technology / Equipment
              </div>
              <div className="text-xs font-semibold text-slate-800 mt-0.5">
                {treatment.technology}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Clinical Overview
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {treatment.description}
            </p>
          </div>

          {/* Key Clinical Benefits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Comprehensive Clinical Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatment.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#0a6ebd] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conditions Treated */}
          {treatment.conditions.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                Recommended For Following Concerns
              </h4>
              <div className="flex flex-wrap gap-2">
                {treatment.conditions.map((cond, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {cond}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Vadodara Clinic Availability */}
          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs text-slate-600">
            <span className="font-bold text-slate-900 block mb-1">
              Available at Richfeel Vadodara Clinic:
            </span>
            <span>{clinicInfo.address} · Call: {clinicInfo.phones[0]}</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={`tel:${clinicInfo.rawPhones[0]}`}
            className="flex items-center gap-2 text-xs font-bold text-[#27448a] hover:text-[#0a6ebd]"
          >
            <Phone className="w-4 h-4 text-[#0a6ebd]" />
            <span>Call Vadodara Doctor: {clinicInfo.phones[0]}</span>
          </a>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-white transition-colors cursor-pointer w-full sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="bg-gradient-brand text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment For This</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
