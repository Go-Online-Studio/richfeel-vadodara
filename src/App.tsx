import React, { useState, useEffect } from 'react';
import { TopBar } from './components/layout/TopBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ImageBannerCarousel } from './components/home/ImageBannerCarousel';
import { Heritage } from './components/home/Heritage';
import { TreatmentsCarouselSection } from './components/home/TreatmentsCarouselSection';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { Diagnostics } from './components/home/Diagnostics';
import { AwardsSection } from './components/home/Awards';
import { TreatmentsGrid } from './components/home/TreatmentsGrid';
import { TreatmentDedicatedPage } from './components/treatments/TreatmentDedicatedPage';
import { ConditionDedicatedPage } from './components/conditions/ConditionDedicatedPage';
import { ConditionsView } from './components/conditions/ConditionsView';
import { FancyGallery } from './components/gallery/FancyGallery';
import { BlogHub } from './components/blog/BlogHub';
import { BlogDetail } from './components/blog/BlogDetail';
import { ContactSection } from './components/contact/ContactSection';
import { ConsultationModal } from './components/booking/ConsultationModal';
import { SEOHead } from './components/seo/SEOHead';
import type { BlogPost } from './types';

import { treatmentsData } from './data/treatments';
import { conditionCategories, clinicInfo } from './data/staticData';
import { getStoredBlogs, getBlogBySlug } from './data/blogsData';
import { Phone, ArrowUp } from 'lucide-react';

// Route path utilities for Next.js-style clean URL mapping
export const getPathForRoute = (view: string, extra?: string): string => {
  if (view === 'treatment-page' && extra) return `/treatments/${extra}`;
  if (view === 'treatments') return '/treatments';
  if (view === 'condition-page' && extra) return `/conditions/${extra}`;
  if (view === 'conditions') return extra ? `/conditions/${extra}` : '/conditions';
  if (view === 'blog-detail' && extra) return `/blog/${extra}`;
  if (view === 'blog') return '/blog';
  if (view === 'about') return extra ? `/about#${extra}` : '/about';
  if (view === 'gallery') return '/gallery';
  if (view === 'contact') return '/contact';
  return '/';
};

export const parsePathFromUrl = (pathname: string): { view: string; extra?: string } => {
  const cleanPath = pathname.replace(/\/+$/, '') || '/';
  if (cleanPath === '/' || cleanPath === '') return { view: 'home' };
  if (cleanPath.startsWith('/treatments/')) {
    return { view: 'treatment-page', extra: cleanPath.replace('/treatments/', '') };
  }
  if (cleanPath === '/treatments') return { view: 'treatments' };
  if (cleanPath.startsWith('/conditions/')) {
    return { view: 'condition-page', extra: cleanPath.replace('/conditions/', '') };
  }
  if (cleanPath === '/conditions') return { view: 'conditions' };
  if (cleanPath.startsWith('/blog/')) {
    return { view: 'blog-detail', extra: cleanPath.replace('/blog/', '') };
  }
  if (cleanPath === '/blog') return { view: 'blog' };
  if (cleanPath === '/about') {
    const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
    return { view: 'about', extra: hash || undefined };
  }
  if (cleanPath === '/gallery') return { view: 'gallery' };
  if (cleanPath === '/contact') return { view: 'contact' };
  return { view: 'home' };
};

export const scrollToAnchor = (anchorId: string) => {
  const tryScroll = (attempts = 0) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (attempts < 12) {
      setTimeout(() => tryScroll(attempts + 1), 60);
    }
  };
  setTimeout(() => tryScroll(), 50);
};

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [activeTreatmentId, setActiveTreatmentId] = useState<string>('tst-plus');
  const [activeConditionId, setActiveConditionId] = useState<string>('hair-fall');
  const [activeBlogSlug, setActiveBlogSlug] = useState<string>('');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Stored blogs from /data/blogs.json (with migration notes)
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    // MONGO_DB_MIGRATION_NOTE: Replace with fetch('/api/blogs') when Next.js / Express backend is connected
    setBlogs(getStoredBlogs());
  }, []);

  // Synchronize browser history and path routing with React view state
  useEffect(() => {
    const applyRoute = (pathname: string) => {
      const parsed = parsePathFromUrl(pathname);
      if (parsed.view === 'treatment-page' && parsed.extra) {
        setActiveTreatmentId(parsed.extra);
      } else if (parsed.view === 'condition-page' && parsed.extra) {
        setActiveConditionId(parsed.extra);
      } else if (parsed.view === 'blog-detail' && parsed.extra) {
        setActiveBlogSlug(parsed.extra);
      }
      setCurrentView(parsed.view);
      if (parsed.view === 'about' && parsed.extra) {
        scrollToAnchor(parsed.extra);
      }
    };

    // Initialize from URL pathname
    applyRoute(window.location.pathname);

    // Browser back/forward navigation support
    const handlePopState = () => {
      applyRoute(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (view: string, extra?: string) => {
    if (view === 'about' && extra) {
      setCurrentView('about');
      const targetPath = `/about#${extra}`;
      if (window.location.pathname + window.location.hash !== targetPath) {
        window.history.pushState({}, '', targetPath);
      }
      scrollToAnchor(extra);
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update browser URL without page reload
    const targetPath = getPathForRoute(view, extra);
    const currentFull = window.location.pathname + window.location.hash;
    if (currentFull !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }

    if (view === 'treatment-page' && extra) {
      setActiveTreatmentId(extra);
      setCurrentView('treatment-page');
      return;
    }
    if (view === 'condition-page' && extra) {
      setActiveConditionId(extra);
      setCurrentView('condition-page');
      return;
    }
    if (view === 'blog-detail' && extra) {
      setActiveBlogSlug(extra);
      setCurrentView('blog-detail');
      return;
    }
    if (view === 'conditions') {
      if (extra) setActiveConditionId(extra);
      setCurrentView('conditions');
      return;
    }
    setCurrentView(view);
  };

  const currentTreatment =
    treatmentsData.find(
      (t) =>
        t.id === activeTreatmentId ||
        t.slug === activeTreatmentId ||
        (activeTreatmentId === 'advance-hydra-facial' && t.id === 'hydra-facial') ||
        (activeTreatmentId === 'derma-korean-treatment' && t.id === 'darma-korean-treatment')
    ) || treatmentsData[0];
  const currentCondition = conditionCategories.find((c) => c.id === activeConditionId) || conditionCategories[0];
  const currentBlogPost = activeBlogSlug ? getBlogBySlug(activeBlogSlug) : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f9fc] text-[#1e293b]">
      {/* Dynamic SEO, Canonical & JSON-LD Injection */}
      <SEOHead
        currentView={currentView}
        treatment={currentTreatment}
        condition={currentCondition}
        blogPost={currentBlogPost || undefined}
      />

      {/* 1. Top Bar */}
      <TopBar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 2. Main Sticky Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
        treatments={treatmentsData}
      />

      {/* 3. Main View Router */}
      <div className="flex-1">
        {/* HOMEPAGE: Exactly ordered as requested */}
        {currentView === 'home' && (
          <main>
            {/* 1. Image-based Banner (Clear image foreground, minimal text, fast load, autoplay with pause/resume, 1 H1) */}
            <ImageBannerCarousel
              onNavigate={handleNavigate}
              onOpenBooking={() => setIsBookingOpen(true)}
            />

            {/* 2. Pioneering History Section (Heritage) */}
            <Heritage />

            {/* 3. All Treatments Section with Filter and Carousel */}
            <TreatmentsCarouselSection
              treatments={treatmentsData}
              onSelectTreatment={(id: string) => handleNavigate('treatment-page', id)}
              onOpenBooking={() => setIsBookingOpen(true)}
            />

            {/* 4. Why Choose Us Section */}
            <WhyChooseUs />

            {/* 5. Unique Diagnostic Tests (Matching exact screenshot aesthetic) */}
            <Diagnostics onOpenBooking={() => setIsBookingOpen(true)} />

            {/* 6. Awards & Accolades Showcase */}
            <AwardsSection />

            {/* 7. In-Clinic Consultation Banner */}
            <section className="py-16 bg-gradient-brand text-white text-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#4ecdc4]">
                  Richfeel Vadodara
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Invest In Your Hair, It's The Crown You Never Take Off
                </h2>
                <p className="text-xs sm:text-sm text-cyan-100 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of satisfied patients across India who restored their hair density with India's most trusted trichology team.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="px-6 py-3.5 rounded-xl bg-white text-[#27448a] font-bold text-xs sm:text-sm shadow-xl hover:bg-cyan-50 transition-all cursor-pointer"
                  >
                    Book In-Clinic Assessment
                  </button>
                  <a
                    href={`tel:${clinicInfo.rawPhones[0]}`}
                    className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all"
                  >
                    Call: {clinicInfo.phones[0]}
                  </a>
                </div>
              </div>
            </section>
          </main>
        )}

        {/* DEDICATED TREATMENT PAGE (Proper Page, Not Popup) */}
        {currentView === 'treatment-page' && currentTreatment && (
          <main>
            <TreatmentDedicatedPage
              treatment={currentTreatment}
              allTreatments={treatmentsData}
              onBack={() => handleNavigate('treatments')}
              onSelectTreatment={(id: string) => handleNavigate('treatment-page', id)}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          </main>
        )}

        {/* ALL TREATMENTS CATALOG */}
        {currentView === 'treatments' && (
          <main>
            <div className="pt-6">
              <TreatmentsGrid
                treatments={treatmentsData}
                onSelectTreatment={(id: string) => handleNavigate('treatment-page', id)}
                onOpenBooking={() => setIsBookingOpen(true)}
              />
            </div>
          </main>
        )}

        {/* DEDICATED CONDITION PAGE (Proper Page, Not Popup) */}
        {currentView === 'condition-page' && currentCondition && (
          <main>
            <ConditionDedicatedPage
              condition={currentCondition}
              allTreatments={treatmentsData}
              onBack={() => handleNavigate('conditions')}
              onSelectTreatment={(id: string) => handleNavigate('treatment-page', id)}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          </main>
        )}

        {/* CONDITIONS HUB */}
        {currentView === 'conditions' && (
          <main>
            <ConditionsView
              initialConditionId={activeConditionId}
              treatments={treatmentsData}
              onSelectTreatment={(id: string) => handleNavigate('treatment-page', id)}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          </main>
        )}

        {/* ABOUT VIEW */}
        {currentView === 'about' && (
          <main>
            <Heritage />
            <Diagnostics onOpenBooking={() => setIsBookingOpen(true)} />
            <AwardsSection />
            <WhyChooseUs />
          </main>
        )}

        {/* FANCYBOX GALLERY VIEW */}
        {currentView === 'gallery' && (
          <main>
            <FancyGallery onOpenBooking={() => setIsBookingOpen(true)} />
          </main>
        )}

        {/* BLOG HUB */}
        {currentView === 'blog' && (
          <main>
            <BlogHub
              blogs={blogs}
              onSelectBlog={(slug: string) => {
                setActiveBlogSlug(slug);
                setCurrentView('blog-detail');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          </main>
        )}

        {/* BLOG DETAIL */}
        {currentView === 'blog-detail' && currentBlogPost && (
          <main>
            <BlogDetail
              post={currentBlogPost}
              allBlogs={blogs}
              treatments={treatmentsData}
              onBackToHub={() => setCurrentView('blog')}
              onSelectBlog={(slug: string) => {
                setActiveBlogSlug(slug);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectTreatment={(id: string) => handleNavigate('treatment-page', id)}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          </main>
        )}

        {/* CONTACT VIEW */}
        {currentView === 'contact' && (
          <main>
            <ContactSection />
          </main>
        )}
      </div>

      {/* Booking Consultation Dialog */}
      <ConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} treatments={treatmentsData} />

      {/* Floating Action Buttons (FAB): WhatsApp FAB AND Call FAB with Safe Area Spacing */}
      <div
        className="fixed z-40 flex flex-col items-end gap-3 fab-safe-bottom"
        style={{
          bottom: 'max(72px, calc(env(safe-area-inset-bottom, 0px) + 38px))',
          right: 'max(20px, calc(env(safe-area-inset-right, 0px) + 16px))'
        }}
      >
        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-white text-slate-700 shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Direct Call FAB: Circle button, icon only */}
        <a
          href={`tel:${clinicInfo.rawPhones[0]}`}
          className="w-12 h-12 rounded-full bg-[#0a6ebd] hover:bg-[#084f8a] text-white shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          aria-label="Call clinic directly (+91 74900 40063)"
          title="Call Vadodara Clinic"
        >
          <Phone className="w-5 h-5 text-white" />
        </a>

        {/* WhatsApp FAB: Circle button with official WhatsApp SVG */}
        <a
          href={clinicInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          aria-label="Chat on WhatsApp"
          title="WhatsApp Vadodara Clinic"
        >
          <svg
            viewBox="0 0 31 30"
            className="w-6 h-6 text-white"
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
        </a>
      </div>
    </div>
  );
}
