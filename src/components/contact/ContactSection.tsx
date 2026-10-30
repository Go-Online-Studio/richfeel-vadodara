'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  Navigation,
  Building2,
  Car,
  Sparkles,
  Compass,
  Calendar,
  Loader2,
  ArrowRight
} from 'lucide-react';
import { clinicInfo } from '../../data/staticData';
import { useWhatsAppUrl, buildWhatsAppUrl, isMobileDevice } from '@/lib/whatsapp';
import { submitLeadToGoogleSheet, formatWhatsAppBookingMessage, LeadFormData } from '@/lib/googleSheet';
import { treatmentOptionsGroups, defaultTreatmentOption } from '@/data/treatmentOptions';

export const ContactSection: React.FC = () => {
  const directWhatsAppUrl = useWhatsAppUrl();
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
      source: 'Contact Page Form',
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    // 1. Submit lead to Google Sheet first
    await submitLeadToGoogleSheet(leadData);

    // 2. Format prefilled WhatsApp message & dynamic URL
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
    <div className="py-16 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
            Visit Our Clinic
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#27448a] tracking-tight">
            Contact Richfeel Vadodara
          </h1>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Conveniently located on Sunpharma Road opposite Gokulesh Complex. Dedicated parking, private consultation rooms, and advanced diagnostic suites.
          </p>
        </div>

        {/* Top Row: Balanced 2-Card Layout (Info Card & Appointment Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* 1. Clinic Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-100">
                <h3 className="text-xl font-bold text-[#27448a]">
                  Vadodara Centre Info
                </h3>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                  Open Today · 10 AM - 7:30 PM
                </span>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                {/* Clinic Address with Direct Link to Google Maps */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0a6ebd] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Clinic Address:</span>
                    <a
                      href={clinicInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/addr block leading-relaxed text-slate-600 hover:text-[#0a6ebd] transition-colors"
                      title="Open in Google Maps"
                    >
                      <span>{clinicInfo.address}</span>
                      <span className="text-[11px] text-[#0a6ebd] font-semibold flex items-center gap-1 mt-1">
                        <span>(Opp. Gokulesh Complex, Marvel Square)</span>
                        <ExternalLink className="w-3 h-3 group-hover/addr:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                  </div>
                </div>

                {/* Phone Lines */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0a6ebd] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Phone Lines:</span>
                    <div className="space-y-0.5 text-slate-600">
                      <div>
                        <a href={`tel:${clinicInfo.rawPhones[0]}`} className="hover:text-[#0a6ebd] transition-colors">
                          {clinicInfo.phones[0]}
                        </a>
                      </div>
                      <div>
                        <a href={`tel:${clinicInfo.rawPhones[1]}`} className="hover:text-[#0a6ebd] transition-colors">
                          {clinicInfo.phones[1]}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Inquiries */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0a6ebd] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Email Inquiries:</span>
                    <a href={`mailto:${clinicInfo.email}`} className="text-[#0a6ebd] hover:underline">
                      {clinicInfo.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0a6ebd] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Working Hours:</span>
                    <p className="text-slate-600">{clinicInfo.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-whatsapp="true"
                className="set-url-target w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <svg
                  viewBox="0 0 31 30"
                  className="w-5 h-5 text-white shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                >
                  <title>wa-logo</title>
                  <path
                    fill="currentColor"
                    d="M30.31 14.32A14.87 14.87 0 0 0 15.54 0h-.07A14.87 14.87 0 0 0 2.41 22L1.1 29.87a.11.11 0 0 0 .11.13h.02l7.79-1.73c2 .96 4.2 1.47 6.44 1.46h.42a14.86 14.86 0 0 0 14.43-15.4Zm-14.5 12.83h-.35a12.3 12.3 0 0 1-5.67-1.38l-.4-.2-5.27 1.24.97-5.34-.22-.38a12.3 12.3 0 0 1 10.25-18.5h.36a12.29 12.29 0 0 1 .34 24.56h-.01Z"
                  />
                  <path
                    fill="currentColor"
                    d="M10.29 7.69a1.37 1.37 0 0 0-.98.44c-.35.36-1.34 1.23-1.4 3.07-.06 1.84 1.23 3.65 1.4 3.9.18.26 2.46 4.23 6.2 5.84 2.2.95 3.17 1.11 3.8 1.11.25 0 .45-.03.65-.04.69-.04 2.24-.83 2.57-1.7.34-.86.36-1.61.28-1.76-.1-.15-.34-.26-.7-.46-.37-.19-2.18-1.15-2.52-1.29a.91.91 0 0 0-.4-.1.55.55 0 0 0-.44.26c-.3.38-1 1.2-1.23 1.43a.55.55 0 0 1-.4.19.97.97 0 0 1-.41-.11 9.52 9.52 0 0 1-2.94-1.96c-.8-.78-1.47-1.68-2-2.66-.2-.38 0-.57.19-.75.19-.18.39-.42.58-.64.16-.18.29-.38.4-.6a.69.69 0 0 0-.02-.66c-.09-.19-.75-2.05-1.07-2.8-.25-.64-.55-.66-.81-.68a8.15 8.15 0 0 0-.72-.03h-.03"
                  />
                </svg>
                <span>Instant Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 2. Consultation Request Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#27448a] mb-1">
                  Book Your Appointment or Ask a Question
                </h3>
                <p className="text-xs text-slate-500">
                  Our clinical coordinator will contact you promptly to schedule your trichology assessment.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                      Saved In Clinic System
                    </span>
                    <h4 className="text-xl font-black text-[#27448a]">
                      Thank You, {formData.name}!
                    </h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
                      Your appointment details have been successfully recorded in our clinic sheet. Opening WhatsApp now for direct slot confirmation with our Vadodara team.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                    {generatedWhatsAppUrl && (
                      <a
                        href={generatedWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="set-url-target w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                      >
                        <span>Continue to WhatsApp Chat</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={`tel:${clinicInfo.rawPhones[0]}`}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl border border-blue-200 text-[#0a6ebd] hover:bg-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call {clinicInfo.phones[0]}</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        treatment: '',
                        preferredDate: '',
                        timeSlot: 'Morning (10:00 AM - 1:00 PM)',
                        message: ''
                      });
                    }}
                    className="pt-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer block mx-auto"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0a6ebd]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Phone Number *
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
                  </div>

                  {/* Row 2: Email and Treatment */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  </div>

                  {/* Row 3: Preferred Date and Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        min={todayStr}
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0a6ebd]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0a6ebd] bg-white cursor-pointer"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                        <option value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Condition or Preferred Day/Time Notes */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Describe Your Condition or Query (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about how long you've experienced hair loss or your skin goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0a6ebd]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-brand text-white font-bold text-xs sm:text-sm shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Saving to Clinic System...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Appointment Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <p className="text-[11px] text-slate-400 text-center pt-4">
              We respect your privacy. Your clinical details are strictly confidential.
            </p>
          </div>
        </div>

        {/* Full-Width Interactive Google Maps Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs">
          {/* Map Card Header with Location Details & Directions Button */}
          <div className="p-6 sm:p-8 border-b border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-1">
                Clinical Location & Navigation
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#27448a] tracking-tight">
                Find Richfeel Vadodara on Google Maps
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                FF/09/10/11, Marvel Square, Sunpharma road, Opp. Gokulesh Complex, Vadodara - 390012, Gujarat
              </p>
            </div>

            <a
              href={clinicInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-white text-xs font-bold shadow-md hover:brightness-110 transition-all shrink-0 cursor-pointer self-start md:self-center"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Driving Directions</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>
          </div>

          {/* Full-Width Responsive Map Iframe */}
          <div className="w-full h-[380px] sm:h-[460px] lg:h-[500px] relative bg-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9277314622577!2d73.14906277589677!3d22.28072724360347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc73f015da5a5%3A0x56cf133912c675fb!2sRichFeel%20Hair%20Clinic!5e0!3m2!1sen!2sin!4v1791802562255!5m2!1sen!2sin"
              className="w-full h-full border-0"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="RichFeel Hair Clinic Vadodara Location Map"
            />
          </div>

          {/* Map Info Highlights Bar */}
          <div className="p-6 bg-[#f6f9fc] border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0a6ebd] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block mb-0.5">Prime Landmark:</span>
                <p className="text-slate-600 leading-relaxed">
                  Located directly opposite Gokulesh Complex in Marvel Square on Sunpharma Road.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0a6ebd] flex items-center justify-center shrink-0">
                <Car className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block mb-0.5">Hassle-Free Parking:</span>
                <p className="text-slate-600 leading-relaxed">
                  Dedicated on-premise ground & basement parking available for clinic visitors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0a6ebd] flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block mb-0.5">City Connectivity:</span>
                <p className="text-slate-600 leading-relaxed">
                  Within 5 to 10 minutes drive from Akota, Alkapuri, Gotri, and Atladara.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
