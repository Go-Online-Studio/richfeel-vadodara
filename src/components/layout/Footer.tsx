import React from 'react';
import { MapPin, Phone, Mail, Award, ArrowRight } from 'lucide-react';
import { clinicInfo } from '../../data/staticData';
import { Treatment } from '../../types';

interface FooterProps {
  onNavigate: (view: string, extra?: string) => void;
  treatments: Treatment[];
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, treatments }) => {
  const hairTreatments = treatments.filter((t) => t.category === 'Hair Restoration');
  const scalpTreatments = treatments.filter((t) => t.category === 'Scalp Therapy');
  const skinTreatments = treatments.filter((t) => t.category === 'Skin Aesthetics');

  return (
    <footer className="bg-[#101e3d] text-white pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1 & 2: Brand Overview */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="block cursor-pointer text-left focus:outline-none group"
              aria-label="Richfeel Vadodara Home"
            >
              <img
                src="/images/RichfeelsLogo.webp"
                alt="Richfeel Vadodara"
                className="h-12 sm:h-14 w-auto object-contain rounded-md shadow-md group-hover:opacity-95 transition-opacity"
              />
            </a>

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

            {/* Accreditations Badge */}
            <div className="pt-2 flex items-center gap-3 text-xs text-white/80">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 border border-white/10">
                <Award className="w-3.5 h-3.5 text-[#4ecdc4]" />
                Frost & Sullivan 2014 Award Winner
              </span>
            </div>
          </div>

          {/* Column 3: Hair Restoration */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4ecdc4] mb-4">
              Hair Restoration
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {hairTreatments.map((t) => (
                <li key={t.id}>
                  <a
                    href={`/treatments/${t.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('treatment-page', t.id);
                    }}
                    className="hover:text-[#4ecdc4] transition-colors text-left cursor-pointer flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-2.5 h-2.5 text-slate-500 group-hover:text-[#4ecdc4] transition-colors" />
                    <span>{t.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Scalp & Skin Care */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4ecdc4] mb-4">
              Scalp & Skin Care
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {scalpTreatments.map((t) => (
                <li key={t.id}>
                  <a
                    href={`/treatments/${t.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('treatment-page', t.id);
                    }}
                    className="hover:text-[#4ecdc4] transition-colors text-left cursor-pointer flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-2.5 h-2.5 text-slate-500 group-hover:text-[#4ecdc4] transition-colors" />
                    <span>{t.title}</span>
                  </a>
                </li>
              ))}
              {skinTreatments.map((t) => (
                <li key={t.id}>
                  <a
                    href={`/treatments/${t.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('treatment-page', t.id);
                    }}
                    className="hover:text-[#4ecdc4] transition-colors text-left cursor-pointer flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-2.5 h-2.5 text-slate-500 group-hover:text-[#4ecdc4] transition-colors" />
                    <span>{t.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Quick Navigation & Legal Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4ecdc4] mb-4">
              Quick Links & Legal
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('about');
                  }}
                  className="hover:text-[#4ecdc4] transition-colors cursor-pointer block"
                >
                  Founders & History (1986)
                </a>
              </li>
              <li>
                <a
                  href="/conditions"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('conditions');
                  }}
                  className="hover:text-[#4ecdc4] transition-colors cursor-pointer block"
                >
                  Treatments by Condition
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('gallery');
                  }}
                  className="hover:text-[#4ecdc4] transition-colors cursor-pointer block"
                >
                  Clinical Gallery
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('blog');
                  }}
                  className="hover:text-[#4ecdc4] transition-colors cursor-pointer block"
                >
                  Trichology Blog & Articles
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="hover:text-[#4ecdc4] transition-colors cursor-pointer block"
                >
                  Contact Vadodara Centre
                </a>
              </li>
              <li className="pt-2 border-t border-white/10">
                <a
                  href="/terms"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('terms');
                  }}
                  className="hover:text-[#4ecdc4] transition-colors cursor-pointer text-slate-400 block"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('privacy');
                  }}
                  className="hover:text-[#4ecdc4] transition-colors cursor-pointer text-slate-400 block"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10">
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
            <a
              href="/terms"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('terms');
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Use
            </a>
            <span>·</span>
            <a
              href="/privacy"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('privacy');
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <span>·</span>
            <span>Limca Book of Records Pioneers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
