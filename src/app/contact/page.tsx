import type { Metadata } from 'next';
import { ContactSection } from '@/components/contact/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Richfeel Vadodara | Sunpharma Road Clinic & Appointments',
  description:
    'Visit 101, Marvel Square, Sunpharma Road, Opp. Gokulesh Complex, Vadodara. Call 074900 40063 / 074900 40064 for consultations.',
  alternates: {
    canonical: 'https://richfeelvadodara.com/contact',
  },
  openGraph: {
    title: 'Contact Richfeel Vadodara Clinic',
    description:
      'Visit 101, Marvel Square, Sunpharma Road, Opp. Gokulesh Complex, Vadodara. Book clinical consultations.',
    url: 'https://richfeelvadodara.com/contact',
  },
};

export default function ContactPage() {
  return <ContactSection />;
}
