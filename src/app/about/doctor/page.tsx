import type { Metadata } from 'next';
import { DoctorPageView } from '@/components/about/DoctorPageView';

export const metadata: Metadata = {
  title: 'About Dr. Leena Patil (BHMS, WMTA) | In-Clinic Doctor Richfeel Vadodara',
  description:
    'Consult Dr. Leena Patil at Richfeel Hair & Skin Clinic Vadodara (Marvel Square). BHMS practitioner, Counsellor, Clinical Cosmetologist, and WMTA-Certified Trichologist specializing in personalized hair, scalp & skin care.',
  alternates: {
    canonical: 'https://richfeelvadodara.com/about/doctor',
  },
  openGraph: {
    title: 'Dr. Leena Patil, BHMS | Counsellor & WMTA Trichologist Vadodara',
    description:
      'Meet Dr. Leena Patil at Richfeel Hair & Skin Clinic Vadodara. Client-focused care and scientific diagnostics for hair thinning, scalp health, and clinical cosmetology.',
    url: 'https://richfeelvadodara.com/about/doctor',
    images: [
      {
        url: '/images/doctorProfile.webp',
        width: 720,
        height: 1200,
        alt: 'Dr. Leena Patil, BHMS - Richfeel Hair & Skin Clinic Vadodara',
      },
    ],
  },
};

export default function DoctorPage() {
  return <DoctorPageView />;
}
