'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, CheckCircle2, ShieldCheck, Loader2, ArrowRight } from 'lucide-react';
import { clinicInfo } from '@/data/staticData';
import { buildWhatsAppUrl, isMobileDevice } from '@/lib/whatsapp';
import { submitLeadToGoogleSheet, formatWhatsAppBookingMessage, LeadFormData } from '@/lib/googleSheet';
import { treatmentOptionsGroups, defaultTreatmentOption, allTreatmentOptions } from '@/data/treatmentOptions';

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
    email: '',
    treatment: '',
    preferredDate: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  // Update treatment when defaultConcern changes or modal opens
  useEffect(() => {
    if (defaultConcern) {
      // Check if defaultConcern matches a specific clinical treatment
      const isGenericTrigger = [
        'hero',
        'banner',
        'consultation',
        'mobile',
        'drawer',
        'footer',
        'navbar',
        'header',
        'assessment'
      ].some(
        (term) =>
          defaultConcern.toLowerCase().includes(term) &&
          !allTreatmentOptions.some((t) => t.toLowerCase() === defaultConcern.toLowerCase())
      );

      if (!isGenericTrigger) {
        const matched = allTreatmentOptions.find(
          (t) =>
            t.toLowerCase().includes(defaultConcern.toLowerCase()) ||
            defaultConcern.toLowerCase().includes(t.toLowerCase())
        );
        if (matched) {
          setFormData((prev) => ({
            ...prev,
            treatment: matched
          }));
          return;
        }
      }
    }
    // If generic trigger or no match, user must select their treatment
    setFormData((prev) => ({ ...prev, treatment: '' }));

    if (isOpen) {
      setSubmitted(false);
      setIsSubmitting(false);
    }
  }, [defaultConcern, isOpen]);

  if (!isOpen) return null;

  const handleResetAndClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      treatment: '',
      preferredDate: '',
      timeSlot: 'Morning (10:00 AM - 1:00 PM)',
      message: ''
    });
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.treatment.trim()) return;

    setIsSubmitting(true);

    const leadData: LeadFormData = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      treatment: formData.treatment,
      preferredDate: formData.preferredDate || 'Earliest available',
      timeSlot: formData.timeSlot,
      message: formData.message.trim(),
      source: `Popup Modal (${defaultConcern || 'Header / Banner'})`,
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    // 1. Send data to Google Sheet first
    await submitLeadToGoogleSheet(leadData);

    // 2. Format WhatsApp prefilled message & dynamic URL
    const waMsg = formatWhatsAppBookingMessage(leadData);
    const waUrl = buildWhatsAppUrl('917490040063', waMsg);
    setGeneratedWhatsAppUrl(waUrl);

    // 3. Mark success
    setIsSubmitting(false);
    setSubmitted(true);

    // 4. Redirect or open WhatsApp
    if (typeof window !== 'undefined') {
      const isMobile = isMobileDevice();
      if (isMobile) {
        window.location.href = waUrl;
      } else {
        window.open(waUrl, '_blank');
      }
    }

    // 5. Reset form inputs after sending data to Sheet and WhatsApp
    setFormData({
      name: '',
      phone: '',
      email: '',
      treatment: '',
      preferredDate: '',
      timeSlot: 'Morning (10:00 AM - 1:00 PM)',
      message: ''
    });
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/75 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-consultation-title"
    >
      {/* Dialog box with mobile constraint and inner scroll */}
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto max-h-[92vh] sm:max-h-[88vh]">
        {/* Header - Fixed at top of modal */}
        <div className="p-5 sm:p-6 bg-gradient-brand text-white flex items-start justify-between shrink-0">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#4ecdc4] uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4 text-[#4ecdc4]" />
              <span>Richfeel Vadodara Clinic</span>
            </div>
            <h3 id="modal-consultation-title" className="text-xl sm:text-2xl font-extrabold text-white">
              Book Doctor Consultation
            </h3>
            <p className="text-xs text-cyan-100 mt-0.5">
              Visit our clinic · Marvel Square, Vadodara
            </p>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body - Inner Scroll for small devices */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 overscroll-contain">
          {submitted ? (
            <div className="text-center py-4 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Saved In Clinic System
                </span>
                <h4 className="text-xl font-black text-[#27448a]">
                  Appointment Request Sent!
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed max-w-sm mx-auto">
                  Your appointment details have been successfully recorded in our clinic sheet. Opening WhatsApp now for direct slot confirmation with our Vadodara team.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                {generatedWhatsAppUrl && (
                  <a
                    href={generatedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="set-url-target w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Continue to WhatsApp Chat</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}

                <a
                  href={`tel:${clinicInfo.rawPhones[0]}`}
                  className="w-full py-3 px-4 rounded-xl border border-blue-200 text-[#0a6ebd] hover:bg-blue-50 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Vadodara Doctor: {clinicInfo.phones[0]}</span>
                </a>

                <button
                  onClick={handleResetAndClose}
                  className="w-full py-2.5 text-xs text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  Done & Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Full Name */}
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

              {/* Phone Number */}
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

              {/* Email Address (Optional) */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0a6ebd]"
                />
              </div>

              {/* Primary Treatment or Concern (With EVERY treatment) */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Primary Treatment or Concern *
                </label>
                <select
                  required
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0a6ebd] bg-white cursor-pointer"
                >
                  <option value="" disabled>-- Select Your Treatment or Concern * --</option>
                  {/* If custom concern not in groups, show it first */}
                  {formData.treatment && !allTreatmentOptions.includes(formData.treatment) && (
                    <option value={formData.treatment}>{formData.treatment}</option>
                  )}
                  {treatmentOptionsGroups.map((group) => (
                    <optgroup key={group.category} label={group.category}>
                      {group.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              {/* Preferred Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    min={todayStr}
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
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0a6ebd] bg-white cursor-pointer"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Notes / Message */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Describe Your Condition or Query (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Share any specific hair or skin concerns..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0a6ebd]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-brand text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-cyan-500/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Saving to Clinic System...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4 text-[#4ecdc4]" />
                    <span>Confirm & Open WhatsApp Booking</span>
                  </>
                )}
              </button>

              {/* Footer Call Link */}
              <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-500">
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
