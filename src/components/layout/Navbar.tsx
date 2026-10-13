import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { clinicInfo, conditionCategories } from '../../data/staticData';
import { Treatment } from '../../types';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, extra?: string) => void;
  onOpenBooking: () => void;
  treatments: Treatment[];
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenBooking,
  treatments
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop dropdown hover states
  const [treatmentsDropdown, setTreatmentsDropdown] = useState(false);
  const [conditionsDropdown, setConditionsDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  // Mobile single active accordion states (closing previous when one opens)
  const [activeMobileSection, setActiveMobileSection] = useState<'none' | 'treatments' | 'conditions' | 'about'>('none');
  const [activeMobileTreatmentSub, setActiveMobileTreatmentSub] = useState<'none' | 'hair' | 'scalp' | 'skin'>('none');

  const hairTreatments = treatments.filter((t) => t.category === 'Hair Restoration');
  const scalpTreatments = treatments.filter((t) => t.category === 'Scalp Therapy');
  const skinTreatments = treatments.filter((t) => t.category === 'Skin Aesthetics');

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (view: string, extra?: string) => {
    onNavigate(view, extra);
    setMobileMenuOpen(false);
    setTreatmentsDropdown(false);
    setConditionsDropdown(false);
    setAboutDropdown(false);
    setActiveMobileSection('none');
    setActiveMobileTreatmentSub('none');
  };

  const toggleMobileSection = (section: 'treatments' | 'conditions' | 'about') => {
    setActiveMobileSection((prev) => (prev === section ? 'none' : section));
  };

  const toggleTreatmentSub = (sub: 'hair' | 'scalp' | 'skin') => {
    setActiveMobileTreatmentSub((prev) => (prev === sub ? 'none' : sub));
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Image Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center text-left group cursor-pointer focus:outline-none"
            aria-label="Richfeel Vadodara Home"
          >
            <img
              src="/images/RichfeelsLogo.webp"
              alt="Richfeel Vadodara"
              className="h-10 sm:h-12 w-auto object-contain rounded-md group-hover:opacity-95 transition-all"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* 1. Treatments Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setTreatmentsDropdown(true)}
              onMouseLeave={() => setTreatmentsDropdown(false)}
            >
              <a
                href="/treatments"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('treatments');
                }}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 cursor-pointer ${
                  currentView === 'treatments' || currentView === 'treatment-page'
                    ? 'text-[#0a6ebd]'
                    : 'text-slate-700 hover:text-[#0a6ebd]'
                }`}
              >
                Treatments
                <ChevronDown className="w-3.5 h-3.5" />
              </a>

              {treatmentsDropdown && (
                <div className="absolute top-full left-0 w-[680px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-150">
                  {/* Column 1: Hair Restoration */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] pb-2 border-b border-slate-100 mb-3">
                      Hair Restoration
                    </h4>
                    <div className="space-y-2">
                      {hairTreatments.map((t) => (
                        <a
                          key={t.id}
                          href={`/treatments/${t.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('treatment-page', t.id);
                          }}
                          className="w-full text-left text-xs font-medium text-slate-700 hover:text-[#0a6ebd] hover:translate-x-1 transition-all block cursor-pointer"
                        >
                          {t.title}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Scalp Therapy */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] pb-2 border-b border-slate-100 mb-3">
                      Scalp Therapy
                    </h4>
                    <div className="space-y-2">
                      {scalpTreatments.map((t) => (
                        <a
                          key={t.id}
                          href={`/treatments/${t.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('treatment-page', t.id);
                          }}
                          className="w-full text-left text-xs font-medium text-slate-700 hover:text-[#0a6ebd] hover:translate-x-1 transition-all block cursor-pointer"
                        >
                          {t.title}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Skin Aesthetics */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] pb-2 border-b border-slate-100 mb-3">
                      Skin Aesthetics
                    </h4>
                    <div className="space-y-2">
                      {skinTreatments.map((t) => (
                        <a
                          key={t.id}
                          href={`/treatments/${t.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('treatment-page', t.id);
                          }}
                          className="w-full text-left text-xs font-medium text-slate-700 hover:text-[#0a6ebd] hover:translate-x-1 transition-all block cursor-pointer"
                        >
                          {t.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Condition Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setConditionsDropdown(true)}
              onMouseLeave={() => setConditionsDropdown(false)}
            >
              <a
                href="/conditions"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('conditions');
                }}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 cursor-pointer ${
                  currentView === 'conditions' || currentView === 'condition-page'
                    ? 'text-[#0a6ebd]'
                    : 'text-slate-700 hover:text-[#0a6ebd]'
                }`}
              >
                Condition
                <ChevronDown className="w-3.5 h-3.5" />
              </a>

              {conditionsDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  {conditionCategories.map((cond) => (
                    <a
                      key={cond.id}
                      href={`/conditions/${cond.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('condition-page', cond.id);
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0a6ebd] transition-colors block cursor-pointer"
                    >
                      <div className="font-semibold text-slate-900">{cond.name}</div>
                      <div className="text-[11px] text-slate-500 truncate">{cond.tagline}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* 3. About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about');
                }}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 cursor-pointer ${
                  currentView === 'about' ? 'text-[#0a6ebd]' : 'text-slate-700 hover:text-[#0a6ebd]'
                }`}
              >
                About
                <ChevronDown className="w-3.5 h-3.5" />
              </a>

              {aboutDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <a
                    href="/about#heritage"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('about', 'heritage');
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0a6ebd] cursor-pointer block"
                  >
                    Founders (Dr. Apoorva & Sonal Shah)
                  </a>
                  <a
                    href="/about#diagnostics"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('about', 'diagnostics');
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0a6ebd] cursor-pointer block"
                  >
                    Diagnostic Tests (Trichogram & Capilloscopy)
                  </a>
                  <a
                    href="/about#awards"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('about', 'awards');
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0a6ebd] cursor-pointer block"
                  >
                    Awards & Accolades
                  </a>
                </div>
              )}
            </div>

            {/* 4. Gallery */}
            <a
              href="/gallery"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('gallery');
              }}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                currentView === 'gallery' ? 'text-[#0a6ebd]' : 'text-slate-700 hover:text-[#0a6ebd]'
              }`}
            >
              Gallery
            </a>

            {/* 5. Blog */}
            <a
              href="/blog"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('blog');
              }}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                currentView === 'blog' || currentView === 'blog-detail'
                  ? 'text-[#0a6ebd]'
                  : 'text-slate-700 hover:text-[#0a6ebd]'
              }`}
            >
              Blog
            </a>

            {/* 6. Contact */}
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                currentView === 'contact' ? 'text-[#0a6ebd]' : 'text-slate-700 hover:text-[#0a6ebd]'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right Header CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${clinicInfo.rawPhones[0]}`}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-[#27448a] hover:bg-blue-50/80 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0a6ebd]" />
              <span>Call Clinic</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="bg-gradient-brand text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-xs hover:opacity-95 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="bg-gradient-brand text-white text-xs font-semibold px-3 py-1.5 rounded-lg"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* OFF-SCREEN SLIDE NAV DRAWER FOR MOBILE */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Dim Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-over Drawer with Dynamic 100dvh / actual-vh Height */}
          <div className="relative z-10 w-full max-w-[340px] sm:max-w-sm bg-white mobile-full-height shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
            {/* Top Fixed Header with Brand & Close */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center text-left cursor-pointer focus:outline-none"
                aria-label="Richfeel Vadodara Home"
              >
                <img
                  src="/images/RichfeelsLogo.webp"
                  alt="Richfeel Vadodara"
                  className="h-9 w-auto object-contain rounded-lg"
                />
              </button>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Middle Scrollable Nav List: Clean, Left-Aligned with Mutual-Exclusion Accordions */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
              {/* 1. Home */}
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
                className={`w-full text-left py-3 px-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer block ${
                  currentView === 'home' ? 'text-[#0a6ebd] bg-blue-50/70 font-bold' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                Home
              </a>

              {/* 2. TREATMENTS (Clean label, closes other open sections) */}
              <div className="border-b border-slate-100 pb-1">
                <button
                  onClick={() => toggleMobileSection('treatments')}
                  className={`w-full flex items-center justify-between text-left py-3 px-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    activeMobileSection === 'treatments'
                      ? 'text-[#0a6ebd] bg-blue-50/50'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>Treatments</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      activeMobileSection === 'treatments' ? 'rotate-180 text-[#0a6ebd]' : ''
                    }`}
                  />
                </button>

                {/* Level 1 Sub-categories */}
                {activeMobileSection === 'treatments' && (
                  <div className="pl-3 pr-2 py-2 space-y-1.5 bg-[#f8fafc] rounded-xl my-1 text-xs animate-in fade-in slide-in-from-top-1 duration-150">
                    {/* View All catalog trigger */}
                    <a
                      href="/treatments"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('treatments');
                      }}
                      className="w-full text-left py-2 px-2.5 text-[#0a6ebd] font-bold flex items-center justify-between cursor-pointer hover:underline block"
                    >
                      <span>Explore All Treatments Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    {/* Sub-Category A: Hair Restoration (Mutual Exclusive Level 2) */}
                    <div>
                      <button
                        onClick={() => toggleTreatmentSub('hair')}
                        className={`w-full flex items-center justify-between text-left py-2 px-2.5 rounded-lg font-bold transition-colors cursor-pointer ${
                          activeMobileTreatmentSub === 'hair' ? 'bg-white text-[#0a6ebd] shadow-2xs' : 'text-slate-700 hover:bg-white'
                        }`}
                      >
                        <span>Hair Restoration</span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                            activeMobileTreatmentSub === 'hair' ? 'rotate-90 text-[#0a6ebd]' : ''
                          }`}
                        />
                      </button>

                      {activeMobileTreatmentSub === 'hair' && (
                        <div className="pl-3 pr-1 py-1.5 space-y-1 bg-white rounded-lg border border-slate-100 mt-1">
                          {hairTreatments.map((t) => (
                            <a
                              key={t.id}
                              href={`/treatments/${t.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('treatment-page', t.id);
                              }}
                              className="w-full text-left py-1.5 px-2 text-[11px] font-medium text-slate-700 hover:text-[#0a6ebd] block cursor-pointer"
                            >
                              {t.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Sub-Category B: Scalp Therapy (Mutual Exclusive Level 2) */}
                    <div>
                      <button
                        onClick={() => toggleTreatmentSub('scalp')}
                        className={`w-full flex items-center justify-between text-left py-2 px-2.5 rounded-lg font-bold transition-colors cursor-pointer ${
                          activeMobileTreatmentSub === 'scalp' ? 'bg-white text-[#0a6ebd] shadow-2xs' : 'text-slate-700 hover:bg-white'
                        }`}
                      >
                        <span>Scalp Therapy</span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                            activeMobileTreatmentSub === 'scalp' ? 'rotate-90 text-[#0a6ebd]' : ''
                          }`}
                        />
                      </button>

                      {activeMobileTreatmentSub === 'scalp' && (
                        <div className="pl-3 pr-1 py-1.5 space-y-1 bg-white rounded-lg border border-slate-100 mt-1">
                          {scalpTreatments.map((t) => (
                            <a
                              key={t.id}
                              href={`/treatments/${t.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('treatment-page', t.id);
                              }}
                              className="w-full text-left py-1.5 px-2 text-[11px] font-medium text-slate-700 hover:text-[#0a6ebd] block cursor-pointer"
                            >
                              {t.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Sub-Category C: Skin Aesthetics (Mutual Exclusive Level 2) */}
                    <div>
                      <button
                        onClick={() => toggleTreatmentSub('skin')}
                        className={`w-full flex items-center justify-between text-left py-2 px-2.5 rounded-lg font-bold transition-colors cursor-pointer ${
                          activeMobileTreatmentSub === 'skin' ? 'bg-white text-[#0a6ebd] shadow-2xs' : 'text-slate-700 hover:bg-white'
                        }`}
                      >
                        <span>Skin Aesthetics</span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                            activeMobileTreatmentSub === 'skin' ? 'rotate-90 text-[#0a6ebd]' : ''
                          }`}
                        />
                      </button>

                      {activeMobileTreatmentSub === 'skin' && (
                        <div className="pl-3 pr-1 py-1.5 space-y-1 bg-white rounded-lg border border-slate-100 mt-1">
                          {skinTreatments.map((t) => (
                            <a
                              key={t.id}
                              href={`/treatments/${t.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('treatment-page', t.id);
                              }}
                              className="w-full text-left py-1.5 px-2 text-[11px] font-medium text-slate-700 hover:text-[#0a6ebd] block cursor-pointer"
                            >
                              {t.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* 3. CONDITIONS (Clean label, closes other open sections) */}
              <div className="border-b border-slate-100 pb-1">
                <button
                  onClick={() => toggleMobileSection('conditions')}
                  className={`w-full flex items-center justify-between text-left py-3 px-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    activeMobileSection === 'conditions'
                      ? 'text-[#0a6ebd] bg-blue-50/50'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>Conditions</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      activeMobileSection === 'conditions' ? 'rotate-180 text-[#0a6ebd]' : ''
                    }`}
                  />
                </button>

                {activeMobileSection === 'conditions' && (
                  <div className="pl-3 pr-2 py-2 space-y-1 bg-[#f8fafc] rounded-xl my-1 text-xs animate-in fade-in slide-in-from-top-1 duration-150">
                    <a
                      href="/conditions"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('conditions');
                      }}
                      className="w-full text-left py-2 px-2.5 text-[#0a6ebd] font-bold flex items-center justify-between cursor-pointer hover:underline block"
                    >
                      <span>Explore All Condition Guides</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    {conditionCategories.map((cond) => (
                      <a
                        key={cond.id}
                        href={`/conditions/${cond.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick('condition-page', cond.id);
                        }}
                        className="w-full text-left py-2 px-2.5 text-[11px] font-medium text-slate-700 hover:text-[#0a6ebd] hover:bg-white rounded-md transition-colors block cursor-pointer"
                      >
                        {cond.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* 4. ABOUT (Clean label, closes other open sections) */}
              <div className="border-b border-slate-100 pb-1">
                <button
                  onClick={() => toggleMobileSection('about')}
                  className={`w-full flex items-center justify-between text-left py-3 px-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    activeMobileSection === 'about'
                      ? 'text-[#0a6ebd] bg-blue-50/50'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>About</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      activeMobileSection === 'about' ? 'rotate-180 text-[#0a6ebd]' : ''
                    }`}
                  />
                </button>

                {activeMobileSection === 'about' && (
                  <div className="pl-3 pr-2 py-2 space-y-1 bg-[#f8fafc] rounded-xl my-1 text-xs animate-in fade-in slide-in-from-top-1 duration-150">
                    <a
                      href="/about#heritage"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('about', 'heritage');
                      }}
                      className="w-full text-left py-2 px-2.5 text-[11px] font-medium text-slate-700 hover:text-[#0a6ebd] hover:bg-white rounded-md transition-colors block cursor-pointer"
                    >
                      Founders (Dr. Apoorva & Sonal Shah)
                    </a>
                    <a
                      href="/about#diagnostics"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('about', 'diagnostics');
                      }}
                      className="w-full text-left py-2 px-2.5 text-[11px] font-medium text-slate-700 hover:text-[#0a6ebd] hover:bg-white rounded-md transition-colors block cursor-pointer"
                    >
                      Diagnostic Triad (Trichogram & Capilloscopy)
                    </a>
                    <a
                      href="/about#awards"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('about', 'awards');
                      }}
                      className="w-full text-left py-2 px-2.5 text-[11px] font-medium text-slate-700 hover:text-[#0a6ebd] hover:bg-white rounded-md transition-colors block cursor-pointer"
                    >
                      Awards & Accolades
                    </a>
                  </div>
                )}
              </div>

              {/* 5. Clinical Gallery */}
              <a
                href="/gallery"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('gallery');
                }}
                className={`w-full text-left py-3 px-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer block ${
                  currentView === 'gallery' ? 'text-[#0a6ebd] bg-blue-50/70 font-bold' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                Clinical Gallery
              </a>

              {/* 6. Blog Knowledge Hub */}
              <a
                href="/blog"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('blog');
                }}
                className={`w-full text-left py-3 px-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer block ${
                  currentView === 'blog' || currentView === 'blog-detail'
                    ? 'text-[#0a6ebd] bg-blue-50/70 font-bold'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                Blog Knowledge Hub
              </a>

              {/* 7. Contact Vadodara Clinic */}
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
                className={`w-full text-left py-3 px-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer block ${
                  currentView === 'contact' ? 'text-[#0a6ebd] bg-blue-50/70 font-bold' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                Contact Vadodara Clinic
              </a>
            </div>

            {/* Bottom Actions Bar Matching Uploaded Screenshot */}
            <div className="p-5 border-t border-slate-100 bg-white shrink-0 space-y-3">
              {/* Button 1: White pill button with blue border */}
              <a
                href={`tel:${clinicInfo.rawPhones[0]}`}
                className="w-full py-3 px-4 rounded-full border border-blue-200 text-[#0a6ebd] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-blue-50/50 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0a6ebd]" />
                <span>Call: {clinicInfo.phones[0]}</span>
              </a>

              {/* Button 2: Solid blue pill button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 rounded-full bg-[#0a6ebd] hover:bg-[#084f8a] text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
