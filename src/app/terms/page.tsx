import type { Metadata } from 'next';
import { LegalPages } from '@/components/legal/LegalPages';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Richfeel Vadodara',
  description: 'Terms and clinical policies for Richfeel Trichology Centre Vadodara branch.',
  alternates: {
    canonical: 'https://richfeelvadodara.com/terms',
  },
};

export default function TermsPage() {
  return <LegalPages page="terms" />;
}
