import type { Metadata } from 'next';
import { ConditionsView } from '@/components/conditions/ConditionsView';
import { treatmentsData } from '@/data/treatments';

export const metadata: Metadata = {
  title: 'Hair Fall, Baldness & Scalp Diagnosis | Treatments by Condition',
  description:
    'Find targeted medical solutions for active hair fall, male/female pattern thinning, stubborn dandruff, and facial acne at Richfeel Vadodara.',
  alternates: {
    canonical: 'https://richfeelvadodara.com/conditions',
  },
  openGraph: {
    title: 'Hair Fall, Baldness & Scalp Diagnosis | Richfeel Vadodara',
    description:
      'Find targeted medical solutions for active hair fall, male/female pattern thinning, stubborn dandruff, and facial acne.',
    url: 'https://richfeelvadodara.com/conditions',
  },
};

export default function ConditionsPage() {
  return <ConditionsView treatments={treatmentsData} />;
}
