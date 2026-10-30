'use client';

import React from 'react';
import Link from 'next/link';
import {
  Award,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Calendar,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Stethoscope,
  GraduationCap,
  ChevronRight
} from 'lucide-react';
import { clinicInfo, vadodaraDoctorInfo } from '@/data/staticData';
import { useConsultation } from '@/context/ConsultationContext';
import { useWhatsAppUrl } from '@/lib/whatsapp';

export const DoctorPageView: React.FC = () => {
  const { openBooking } = useConsultation();

  const handleBookConsultation = () => {
    openBooking(`Doctor Consultation with ${vadodaraDoctorInfo.title} (Vadodara Branch)`);
  };

  const doctorWhatsAppUrl = useWhatsAppUrl(
    clinicInfo.rawPhones[0],
    'Hello Dr. Leena Patil, I would like to book a consultation at Richfeel Vadodara Branch.'
  );

  const credentials = [
    {
      code: 'BHMS',
      title: 'Bachelor of Homeopathic Medicine & Surgery',
      role: 'Qualified BHMS Practitioner',
      description: 'Foundational medical education providing a holistic approach to patient health and individual care.',
      icon: GraduationCap,
    },
    {
      code: 'WMTA',
      title: 'World Medical Trichologists Association (U.S.A)',
      role: 'WMTA-Certified Trichologist',
      description: 'Certified under international trichological standards for hair and scalp evaluation.',
      icon: Award,
    },
    {
      code: 'Cosmetology',
      title: 'Clinical Cosmetologist',
      role: 'Clinical Cosmetologist',
      description: 'Cosmetology care and personalized aesthetic solutions for skin health.',
      icon: Sparkles,
    },
    {
      code: 'Counselling',
      title: 'Professional Counsellor',
      role: 'Counsellor',
      description: 'Professional guidance and client-focused support throughout the hair and skin care journey.',
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="bg-[#f6f9fc] min-h-screen">
      {/* 1. Hero Section - Doctor Profile */}
      <section className="relative bg-[#101e3d] text-white pt-12 pb-16 sm:pb-20 overflow-hidden border-b border-slate-800">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0a6ebd]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4ecdc4]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#4ecdc4] font-semibold">About Doctor (Vadodara Branch)</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Doctor Identity & Exact Bio */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-200 text-xs font-semibold backdrop-blur-sm">
                <Stethoscope className="w-4 h-4 text-[#4ecdc4]" />
                <span>Richfeel Hair &amp; Skin Clinic · Vadodara Branch</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                  Dr. Leena Patil, <span className="text-[#4ecdc4]">BHMS</span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-cyan-100/95 tracking-wide">
                  Counsellor | Clinical Cosmetologist | WMTA-Certified Trichologist
                </p>
              </div>

              {/* Exact Doctor Details */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
                <p>
                  Dr. Leena Patil is a qualified BHMS practitioner, Counsellor, Clinical Cosmetologist, and WMTA-certified Trichologist with two years of professional experience in hair and skin care. Currently associated with Richfeel Hair &amp; Skin Clinic, she is committed to providing personalized consultations and client-focused care for hair, scalp, and skin concerns.
                </p>
                <p className="text-cyan-100/90 font-normal">
                  With a holistic approach and a focus on individual needs, Dr. Patil strives to guide clients toward suitable treatment solutions and support their journey toward healthier hair and skin through professional counselling and cosmetology care.
                </p>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleBookConsultation}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0a6ebd] to-[#084f8a] hover:from-[#095ca0] hover:to-[#073f6f] text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-900/40 hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book In-Clinic Consultation</span>
                </button>

                <a
                  href={doctorWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-whatsapp="true"
                  className="set-url-target px-5 py-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] text-xs sm:text-sm font-bold transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${clinicInfo.rawPhones[0]}`}
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#4ecdc4]" />
                  <span>Call {clinicInfo.phones[0]}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Doctor Portrait */}
            <div className="order-first lg:order-last lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a6ebd]/30 via-transparent to-[#4ecdc4]/20 rounded-3xl blur-2xl transform scale-95" />

                <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl bg-slate-900">
                  <div className="aspect-[3/5] relative overflow-hidden bg-slate-800">
                    <img
                      src="/images/doctorProfile.webp"
                      alt="Dr. Leena Patil, BHMS - Counsellor, Clinical Cosmetologist, and WMTA-Certified Trichologist at Richfeel Vadodara"
                      className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101e3d] via-transparent to-transparent opacity-80" />

                    {/* Bottom overlay badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md text-slate-900 shadow-xl border border-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-extrabold text-[#27448a]">
                            Dr. Leena Patil, BHMS
                          </div>
                          <div className="text-[11px] font-medium text-slate-600">
                            WMTA-Certified Trichologist &amp; Cosmetologist
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0a6ebd] flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-5 h-5 text-[#0a6ebd]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Credential Chip */}
                <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-slate-800 shadow-xl border border-slate-100 text-xs font-bold">
                  <Award className="w-4 h-4 text-[#0a6ebd]" />
                  <span>WMTA Certified (USA)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Credentials & Qualifications */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-1">
              Professional Qualifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#27448a]">
              Credentials &amp; Roles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {credentials.map((cred, idx) => {
              const Icon = cred.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200/80 hover:border-[#0a6ebd]/40 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-200/60 flex items-center justify-center text-[#0a6ebd]">
                        <Icon className="w-5 h-5 text-[#0a6ebd]" />
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-[#0a6ebd]">
                        {cred.code}
                      </span>
                    </div>

                    <div>
                      <div className="text-sm font-bold text-[#27448a]">
                        {cred.role}
                      </div>
                      <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                        {cred.title}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {cred.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. In-Clinic Visit & Location Card */}
      <section className="py-14 sm:py-16 bg-[#f6f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#101e3d] to-[#1f3768] rounded-3xl text-white p-6 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#4ecdc4]">
                  In-Clinic Consultation · Vadodara Branch
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Consult With Dr. Leena Patil at Richfeel Vadodara
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  Personalized consultations for hair, scalp, and skin concerns at Marvel Square, Sunpharma Road, Vadodara.
                </p>

                <div className="space-y-2 pt-1 text-xs text-slate-200">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#4ecdc4] shrink-0 mt-0.5" />
                    <span>{clinicInfo.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#4ecdc4] shrink-0" />
                    <span>Hours: {clinicInfo.workingHours}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#4ecdc4] shrink-0" />
                    <span>Contact: {clinicInfo.phones[0]} / {clinicInfo.phones[1]}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center space-y-3">
                <h3 className="text-base font-bold text-white">
                  Schedule Your Consultation
                </h3>
                <p className="text-xs text-slate-300">
                  Connect with Dr. Leena Patil for a personalized hair or skin consultation.
                </p>

                <div className="pt-2 space-y-2">
                  <button
                    onClick={handleBookConsultation}
                    className="w-full py-2.5 rounded-xl bg-[#0a6ebd] hover:bg-[#095ca0] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                  >
                    Book Appointment
                  </button>

                  <a
                    href={doctorWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-whatsapp="true"
                    className="set-url-target w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
