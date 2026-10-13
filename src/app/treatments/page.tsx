import type { Metadata } from 'next';
import { TreatmentsGrid } from '@/components/home/TreatmentsGrid';
import { treatmentsData } from '@/data/treatments';

export const metadata: Metadata = {
  title: '15+ Patented Hair Restoration & Skin Aesthetics Procedures',
  description:
    'Explore 15+ patented procedures: Anagrow stem cell, Austrian TST+ scalp detox, Ailesbury UK hair transplants, and ICE CUBE 2.0 laser reduction at Richfeel Vadodara.',
  alternates: {
    canonical: 'https://richfeelvadodara.com/treatments',
  },
  openGraph: {
    title: '15+ Hair & Skin Treatments | Richfeel Vadodara',
    description:
      'Explore patented stem cell hair rejuvenation, scalp detox, and laser reduction therapies at Marvel Square, Sunpharma Road, Vadodara.',
    url: 'https://richfeelvadodara.com/treatments',
  },
};

export default function TreatmentsPage() {
  return (
    <div className="py-8 bg-white min-h-screen">
      <TreatmentsGrid treatments={treatmentsData} />
    </div>
  );
}
