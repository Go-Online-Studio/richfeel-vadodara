'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Award, ArrowRight } from 'lucide-react';
import { clinicInfo } from '@/data/staticData';
import { Treatment } from '@/types';

interface FooterProps {
  treatments: Treatment[];
}

export const Footer: React.FC<FooterProps> = ({ treatments }) => {
  const hairTreatments = treatments.filter((t) => t.category === 'Hair Restoration');
  const scalpTreatments = treatments.filter((t) => t.category === 'Scalp Therapy');
  const skinTreatments = treatments.filter((t) => t.category === 'Skin Aesthetics');

  return (
    <footer className="bg-[#101e3d] text-white pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1 & 2: Brand Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="block cursor-pointer text-left focus:outline-none group"
              aria-label="Richfeel Vadodara Home"
            >
              <img
                src="/images/RichfeelsLogo.webp"
                alt="Richfeel Vadodara"
                className="h-12 sm:h-14 w-auto object-contain rounded-md shadow-md group-hover:opacity-95 transition-opacity"
              />
            </Link>

            <p className="text-slate-300 text-xs leading-relaxed max-w-md">
              "Invest in your hair, it's the crown you never take off." Pioneered in 1986 by Dr. Apoorva Shah and Dr. Sonal Shah — India's first certified Trichologists featured in the Limca Book of Records. Richfeel Vadodara delivers world-class hair restoration, Austrian scalp detox, and advanced laser aesthetics.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#4ecdc4] shrink-0 mt-0.5" />
                <a
                  href={clinicInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed"
                  title="View Richfeel Vadodara on Google Maps"
                >
                  {clinicInfo.address}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#4ecdc4] shrink-0" />
                <div className="flex gap-2">
                  <a href={`tel:${clinicInfo.rawPhones[0]}`} className="hover:text-white transition-colors">
                    {clinicInfo.phones[0]}
                  </a>
                  <span>/</span>
                  <a href={`tel:${clinicInfo.rawPhones[1]}`} className="hover:text-white transition-colors">
                    {clinicInfo.phones[1]}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#4ecdc4] shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="hover:text-white transition-colors">
                  {clinicInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Hair Restoration */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4ecdc4] mb-4 pb-2 border-b border-white/10">
              Hair Restoration
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {hairTreatments.slice(0, 5).map((t) => (
                <li key={t.id}>
                  <Link
                    href={`/treatments/${t.id}`}
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/treatments"
                  className="text-[#4ecdc4] font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                >
                  <span>All Hair Treatments</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Scalp & Skin Aesthetics */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4ecdc4] mb-4 pb-2 border-b border-white/10">
              Scalp & Aesthetics
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {scalpTreatments.concat(skinTreatments).slice(0, 5).map((t) => (
                <li key={t.id}>
                  <Link
                    href={`/treatments/${t.id}`}
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/conditions"
                  className="text-[#4ecdc4] font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                >
                  <span>Treatments by Condition</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Clinic Hours & Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4ecdc4] mb-4 pb-2 border-b border-white/10">
              Clinic & Information
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Before & After Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Trichology Knowledge Hub
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Clinic Location & Parking
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Clinical Policies
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[11px] text-slate-400 block mb-2">WhatsApp Direct Connect:</span>
              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/30 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © <span className="year">{new Date().getFullYear()}</span> All Rights Reserved by Richfeel Vadodara | Developed by{' '}
            <a
              href="https://shriiitrackingsolution.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-[#4ecdc4] transition-colors underline decoration-slate-600 hover:decoration-[#4ecdc4] underline-offset-2 whitespace-nowrap"
            >
              <b>Shriii&nbsp;Tracking&nbsp;Solution</b>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span>·</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <span>Limca Book of Records Pioneers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
