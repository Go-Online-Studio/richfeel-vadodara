'use client';

import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { clinicInfo } from '@/data/staticData';

export const FloatingActionButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed z-40 flex flex-col items-end gap-3 fab-safe-bottom"
      style={{
        bottom: 'max(72px, calc(env(safe-area-inset-bottom, 0px) + 38px))',
        right: 'max(20px, calc(env(safe-area-inset-right, 0px) + 16px))',
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
  );
};
