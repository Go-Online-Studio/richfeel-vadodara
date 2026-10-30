import type { Metadata } from 'next';
import { ContactSection } from '@/components/contact/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Richfeel Vadodara | Sunpharma Road Clinic & Appointments',
  description:
    'Visit FF/09/10/11, Marvel Square, Sunpharma Road, Opp. Gokulesh Complex, Vadodara - 390012. Call +91 74900 40063 / +91 74900 35002 for trichology & skin appointments.',
  alternates: {
    canonical: 'https://richfeelvadodara.com/contact',
  },
  openGraph: {
    title: 'Contact Richfeel Vadodara Clinic | Sunpharma Road',
    description:
      'Visit FF/09/10/11, Marvel Square, Sunpharma Road, Opp. Gokulesh Complex, Vadodara - 390012. Book clinical trichology and skin consultations.',
    url: 'https://richfeelvadodara.com/contact',
    images: [
      {
        url: 'https://richfeelvadodara.com/images/richfeel-vadodara-og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Richfeel Trichology Centre Vadodara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Richfeel Vadodara Clinic | Sunpharma Road',
    description:
      'Book clinical consultations at FF/09/10/11, Marvel Square, Sunpharma Road, Vadodara.',
    images: ['https://richfeelvadodara.com/images/richfeel-vadodara-og-banner.jpg'],
  },
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Richfeel Vadodara',
    description:
      'Contact details, map location, and appointment booking for Richfeel Trichology Centre Vadodara.',
    url: 'https://richfeelvadodara.com/contact',
    mainEntity: {
      '@type': 'MedicalClinic',
      name: 'Richfeel Trichology Centre Vadodara',
      telephone: '+917490040063',
      email: 'richfeelbaroda24@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'FF/09/10/11, Marvel Square, Sunpharma Road, Opp. Gokulesh Complex',
        addressLocality: 'Vadodara',
        addressRegion: 'Gujarat',
        postalCode: '390012',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 22.2858,
        longitude: 73.1492,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '10:00',
          closes: '19:30',
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactSection />
    </>
  );
}
