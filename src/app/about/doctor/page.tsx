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
        url: 'https://richfeelvadodara.com/images/doctorProfile.webp',
        width: 720,
        height: 1200,
        alt: 'Dr. Leena Patil, BHMS - Richfeel Hair & Skin Clinic Vadodara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Leena Patil, BHMS | Counsellor & WMTA Trichologist Vadodara',
    description:
      'Consult Dr. Leena Patil at Richfeel Hair & Skin Clinic Vadodara.',
    images: ['https://richfeelvadodara.com/images/doctorProfile.webp'],
  },
};

export default function DoctorPage() {
  const doctorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. Leena Patil',
    jobTitle: 'Resident Trichologist & Clinical Cosmetologist',
    image: 'https://richfeelvadodara.com/images/doctorProfile.webp',
    url: 'https://richfeelvadodara.com/about/doctor',
    medicalSpecialty: [
      'Trichology',
      'Dermatology',
      'Cosmetology',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'BHMS (Bachelor of Homeopathic Medicine and Surgery)',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'BHMS',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Certified Trichologist - World Medical Trichologists Association (WMTA, U.S.A)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Clinical Cosmetologist & Psychological Counsellor',
      },
    ],
    worksFor: {
      '@type': 'MedicalClinic',
      name: 'Richfeel Trichology Centre Vadodara',
      url: 'https://richfeelvadodara.com',
      telephone: '+917490040063',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'FF/09/10/11, Marvel Square, Sunpharma Road, Opp. Gokulesh Complex',
        addressLocality: 'Vadodara',
        addressRegion: 'Gujarat',
        postalCode: '390012',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />
      <DoctorPageView />
    </>
  );
}
