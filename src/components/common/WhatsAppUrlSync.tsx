'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { syncWhatsAppLinks } from '@/lib/whatsapp';

export const WhatsAppUrlSync: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    let debounceTimer: NodeJS.Timeout;

    const handleUpdate = () => {
      syncWhatsAppLinks();
    };

    const handleDebouncedResize = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(handleUpdate, 150);
    };

    // Run on initial mount and route change
    handleUpdate();

    window.addEventListener('resize', handleDebouncedResize);
    window.addEventListener('load', handleUpdate);
    window.addEventListener('orientationchange', handleDebouncedResize);

    return () => {
      clearTimeout(debounceTimer);
      window.removeEventListener('resize', handleDebouncedResize);
      window.removeEventListener('load', handleUpdate);
      window.removeEventListener('orientationchange', handleDebouncedResize);
    };
  }, [pathname]);

  return null;
};

