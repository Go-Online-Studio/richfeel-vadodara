/**
 * Dynamic WhatsApp URL Generator & Device Detection
 * Adapts between native WhatsApp app (api.whatsapp.com) on mobile devices
 * and WhatsApp Web (web.whatsapp.com) on desktop computers with debounced resize detection.
 */

import { useState, useEffect } from 'react';
import { clinicInfo } from '@/data/staticData';

export const DEFAULT_WHATSAPP_PHONE = '917490040063';
export const DEFAULT_WHATSAPP_TEXT = 'Hello Richfeel Vadodara, I would like to book a consultation.';

/**
 * Detect whether the current environment is a mobile device or screen
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || '';
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;
  const isMobileUA = mobileRegex.test(userAgent);
  const isSmallScreen = window.innerWidth < 768;

  return isMobileUA || isSmallScreen;
}

/**
 * Builds the appropriate WhatsApp URL based on device type
 */
export function buildWhatsAppUrl(
  phone: string = DEFAULT_WHATSAPP_PHONE,
  text: string = DEFAULT_WHATSAPP_TEXT
): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const baseUrl = isMobileDevice()
    ? 'https://api.whatsapp.com/send'
    : 'https://web.whatsapp.com/send';

  const params = new URLSearchParams();
  if (cleanPhone) params.set('phone', cleanPhone);
  if (text) params.set('text', text);

  const query = params.toString();
  return `${baseUrl}${query ? `?${query}` : ''}`;
}

/**
 * Parses an existing WhatsApp URL (wa.me, api.whatsapp.com, web.whatsapp.com)
 * and recreates it with the appropriate host based on device
 */
export function convertWhatsAppUrl(currentUrl: string): string {
  try {
    let phone = DEFAULT_WHATSAPP_PHONE;
    let text = DEFAULT_WHATSAPP_TEXT;

    if (currentUrl.includes('wa.me/')) {
      const parts = currentUrl.split('wa.me/')[1] || '';
      const [rawPhone, rawQuery] = parts.split('?');
      if (rawPhone) phone = rawPhone.replace(/\D/g, '');
      if (rawQuery) {
        const urlParams = new URLSearchParams(rawQuery);
        text = urlParams.get('text') || text;
      }
    } else if (currentUrl.includes('whatsapp.com/send')) {
      const queryIndex = currentUrl.indexOf('?');
      if (queryIndex !== -1) {
        const urlParams = new URLSearchParams(currentUrl.slice(queryIndex));
        phone = urlParams.get('phone') || phone;
        text = urlParams.get('text') || text;
      }
    }

    return buildWhatsAppUrl(phone, text);
  } catch {
    return buildWhatsAppUrl();
  }
}

/**
 * React hook that returns a dynamically updated WhatsApp URL
 * reacting to device detection, window resize, and debouncing.
 */
export function useWhatsAppUrl(
  phone: string = DEFAULT_WHATSAPP_PHONE,
  text: string = DEFAULT_WHATSAPP_TEXT
): string {
  const [url, setUrl] = useState<string>(() => buildWhatsAppUrl(phone, text));

  useEffect(() => {
    let debounceTimer: NodeJS.Timeout;

    const update = () => {
      setUrl(buildWhatsAppUrl(phone, text));
    };

    const handleResize = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(update, 150);
    };

    // Initial update on mount in case SSR differed
    update();

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      clearTimeout(debounceTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [phone, text]);

  return url;
}

/**
 * DOM sync utility to update all elements with .set-url-target or WhatsApp links
 */
export function syncWhatsAppLinks(): void {
  if (typeof window === 'undefined') return;

  const selectors = [
    '.set-url-target',
    'a[data-whatsapp="true"]',
    'a[href*="whatsapp.com/send"]',
    'a[href*="wa.me"]'
  ];

  const elements = document.querySelectorAll<HTMLAnchorElement>(selectors.join(', '));
  elements.forEach((el) => {
    const currentHref = el.getAttribute('href') || '';
    if (currentHref) {
      const newHref = convertWhatsAppUrl(currentHref);
      if (currentHref !== newHref) {
        el.setAttribute('href', newHref);
      }
    } else {
      el.setAttribute('href', buildWhatsAppUrl());
    }
  });
}

