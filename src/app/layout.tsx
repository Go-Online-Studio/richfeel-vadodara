import type { Metadata } from 'next';
import './globals.css';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ConsultationProvider } from '@/context/ConsultationContext';
import { GlobalConsultationModal } from '@/components/booking/GlobalConsultationModal';
import { FloatingActionButtons } from '@/components/common/FloatingActionButtons';
import { treatmentsData } from '@/data/treatments';

export const metadata: Metadata = {
  metadataBase: new URL('https://richfeelvadodara.com'),
  title: {
    default: 'Richfeel Vadodara - Hair Restoration & Skin Aesthetics Clinic',
    template: '%s | Richfeel Vadodara',
  },
  description:
    'Premier hair restoration, trichology treatments, and skin aesthetics clinic in Vadodara, Gujarat. Pioneered by Dr. Apoorva Shah & Dr. Sonal Shah.',
  openGraph: {
    title: 'Richfeel Vadodara - Hair Restoration & Skin Aesthetics Clinic',
    description:
      'Premier hair restoration, trichology treatments, and skin aesthetics clinic in Vadodara, Gujarat. Pioneered by Dr. Apoorva Shah & Dr. Sonal Shah.',
    url: 'https://richfeelvadodara.com',
    siteName: 'Richfeel Vadodara',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Richfeel Vadodara Hair & Scalp Clinic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richfeel Vadodara - Hair Restoration & Skin Aesthetics Clinic',
    description:
      'Premier hair restoration, trichology treatments, and skin aesthetics clinic in Vadodara, Gujarat.',
    images: ['https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80'],
  },
  alternates: {
    canonical: 'https://richfeelvadodara.com',
  },
  icons: {
    icon: [
      { url: '/images/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/images/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/favicon.ico' },
    ],
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/images/site.webmanifest',
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Vadodara, Gujarat, India',
    'geo.position': '22.2858;73.1492',
    'ICBM': '22.2858, 73.1492',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Richfeel Trichology Centre Vadodara',
    image: 'https://richfeelvadodara.com/images/RichfeelsLogo.webp',
    '@id': 'https://richfeelvadodara.com/#clinic',
    url: 'https://richfeelvadodara.com',
    telephone: '+917490040063',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '101, Marvel Square, Sunpharma Road, Opp. Gokulesh Complex',
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
    medicalSpecialty: [
      'Dermatology',
      'PlasticSurgery',
      'Trichology',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..800;1,9..40,300..800&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="bg-[#f6f9fc] text-[#1e293b] antialiased selection:bg-[#4ecdc4]/20 selection:text-[#27448a]"
        suppressHydrationWarning
      >
        <ConsultationProvider>
          <TopBar />
          <Navbar treatments={treatmentsData} />
          <main>{children}</main>
          <Footer treatments={treatmentsData} />
          <GlobalConsultationModal />
          <FloatingActionButtons />
        </ConsultationProvider>
      </body>
    </html>
  );
}
