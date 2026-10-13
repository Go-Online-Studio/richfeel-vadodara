'use client';

import React, { useState } from 'react';
import { X, Calendar, Phone, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';
import { clinicInfo } from '../../data/staticData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultConcern?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultConcern
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    concern: defaultConcern || 'Hair Fall & Scalp Health',
    preferredDate: '',
    timeSlot: 'Morning (10 AM - 1 PM)'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitted(true);
    // WhatsApp auto link
    const msg = `Hello Richfeel Vadodara, I would like to book a consultation at Marvel Square. Name: ${formData.name}, Phone: ${formData.phone}, Concern: ${formData.concern}, Date: ${formData.preferredDate || 'Earliest available'}, Slot: ${formData.timeSlot}`;
    const waUrl = `https://wa.me/917490040063?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gradient-brand text-white flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#4ecdc4] uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4 text-[#4ecdc4]" />
              <span>Richfeel Vadodara Clinic</span>
            </div>
            <h3 className="text-xl font-extrabold text-white">
              Book Doctor Consultation
            </h3>
            <p className="text-xs text-cyan-100 mt-0.5">
              Marvel Square, Sunpharma Road, Vadodara
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#0a6ebd] mx-auto" />
              <h4 className="text-lg font-bold text-[#27448a]">Booking Request Prepared!</h4>
              <p className="text-xs text-slate-600">
                Your request has opened in WhatsApp for instant direct confirmation with our clinic staff. You can also call us directly below.
              </p>
              <div className="pt-4 flex flex-col gap-2">
                <a
                  href={`tel:${clinicInfo.rawPhones[0]}`}
                  className="py-2.5 px-4 rounded-xl bg-blue-50 text-[#0a6ebd] font-bold text-xs"
                >
                  Call Clinic: {clinicInfo.phones[0]}
                </a>
                <button
                  onClick={onClose}
                  className="text-xs text-slate-500 hover:text-slate-800"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyesh Shah"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0a6ebd]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0a6ebd]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Primary Treatment or Concern
                </label>
                <select
                  value={formData.concern}
                  onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0a6ebd]"
                >
                  <option value="Hair Fall & Thinning (TST+ / Anagrow)">
                    Hair Fall & Thinning (TST+ / Anagrow)
                  </option>
                  <option value="Trichogram & Capilloscopy Diagnostic">
                    Trichogram & Capilloscopy Diagnostic
                  </option>
                  <option value="Advanced PRP / GFC Therapy">Advanced PRP / GFC Therapy</option>
                  <option value="Aesthetic Hair Transplant (UK Tech)">
                    Aesthetic Hair Transplant (UK Tech)
                  </option>
                  <option value="Laser Hair Reduction 2.0 (ICE CUBE)">
                    Laser Hair Reduction 2.0 (ICE CUBE)
                  </option>
                  <option value="Hydra Facial / Medi-Facial">Hydra Facial / Medi-Facial</option>
                  <option value="Anti-Dandruff Ultrasound Therapy">
                    Anti-Dandruff Ultrasound Therapy
                  </option>
                  <option value="Non-Surgical Hair System (Swiss Lace)">
                    Non-Surgical Hair System (Swiss Lace)
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0a6ebd]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0a6ebd]"
                  >
                    <option value="Morning (10 AM - 1 PM)">10 AM - 1 PM</option>
                    <option value="Afternoon (1 PM - 5 PM)">1 PM - 5 PM</option>
                    <option value="Evening (5 PM - 8 PM)">5 PM - 8 PM</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-brand text-white font-bold text-xs shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm & Open WhatsApp Booking</span>
              </button>

              <div className="pt-2 flex items-center justify-center gap-4 text-xs text-slate-500">
                <span>Or Call:</span>
                <a
                  href={`tel:${clinicInfo.rawPhones[0]}`}
                  className="font-bold text-[#0a6ebd] hover:underline"
                >
                  {clinicInfo.phones[0]}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
