import { clinicInfo } from '@/data/staticData';

export const DEFAULT_GOOGLE_SHEET_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwTy6Rvwad8qNl_tXLV5LbZR0bToVG8r7sqMoI5tzk_J-o8Iw1TrY8eyJGIWh34F0UsEg/exec';

export interface LeadFormData {
  name: string;
  phone: string;
  email?: string;
  treatment: string;
  preferredDate?: string;
  timeSlot?: string;
  message?: string;
  source: string;
  submittedAt?: string;
}

/**
 * Submit lead form data to Google Sheet via Google Apps Script Web App
 */
export async function submitLeadToGoogleSheet(
  data: LeadFormData
): Promise<{ success: boolean; error?: string }> {
  const scriptUrl =
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_GOOGLE_SHEET_SCRIPT_URL) ||
    clinicInfo.googleSheetScriptUrl ||
    DEFAULT_GOOGLE_SHEET_SCRIPT_URL;

  const payload: LeadFormData = {
    ...data,
    email: data.email?.trim() || 'Not Provided',
    preferredDate: data.preferredDate || 'Flexible / Earliest Available',
    timeSlot: data.timeSlot || 'Flexible',
    message: data.message?.trim() || 'No specific notes',
    submittedAt: data.submittedAt || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };

  // If URL not configured yet, don't fail or block WhatsApp flow
  if (!scriptUrl || scriptUrl.includes('YOUR_SCRIPT_ID') || scriptUrl.includes('REPLACE_WITH')) {
    console.warn(
      '[Google Sheets] Google Apps Script URL not configured yet. Leads are opening in WhatsApp directly.'
    );
    return { success: true };
  }

  try {
    // Timeout controller so user is never stuck if Google Script takes long
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4500);

    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors', // Standard Google Apps Script Web App CORS requirement
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return { success: true };
  } catch (err: any) {
    console.error('[Google Sheets] Submission error:', err);
    // Return gracefully so the user flow can still proceed to WhatsApp
    return { success: false, error: err?.message || 'Network error' };
  }
}

/**
 * Generates formatted WhatsApp message for clinic coordinators
 */
export function formatWhatsAppBookingMessage(data: LeadFormData): string {
  const lines = [
    `*NEW APPOINTMENT INQUIRY - RICHFEEL VADODARA*`,
    ``,
    `*Patient Name:* ${data.name.trim()}`,
    `*Contact Phone:* ${data.phone.trim()}`,
    data.email && data.email !== 'Not Provided' ? `*Email:* ${data.email.trim()}` : null,
    `*Treatment / Concern:* ${data.treatment}`,
    `*Preferred Date:* ${data.preferredDate || 'Earliest available'}`,
    `*Preferred Time Slot:* ${data.timeSlot || 'Flexible'}`,
    data.message && data.message !== 'No specific notes' ? `*Notes / Condition:* ${data.message.trim()}` : null,
    ``,
    `_Source: ${data.source}_`,
  ].filter(Boolean);

  return lines.join('\n');
}

