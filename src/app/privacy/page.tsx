import type { Metadata } from 'next';
import { LegalPages } from '@/components/legal/LegalPages';

export const metadata: Metadata = {
  title: 'Privacy Policy | Richfeel Vadodara',
  description: 'Patient health information and confidentiality policies at Richfeel Vadodara.',
  alternates: {
    canonical: 'https://richfeelvadodara.com/privacy',
  },
};

export default function PrivacyPage() {
  return <LegalPages page="privacy" />;
}
