import type { Metadata } from 'next';
import { FancyGallery } from '@/components/gallery/FancyGallery';

export const metadata: Metadata = {
  title: 'Before & After Hair Regrowth Gallery | Real Patient Transformations',
  description:
    'View real patient results and hair regrowth transformations at Marvel Square, Sunpharma Road, Vadodara. #wepledgebaldfreeindia.',
  alternates: {
    canonical: 'https://richfeelvadodara.com/gallery',
  },
  openGraph: {
    title: 'Before & After Hair Regrowth Gallery | Richfeel Vadodara',
    description:
      'View real patient results and hair regrowth transformations at Marvel Square, Sunpharma Road, Vadodara.',
    url: 'https://richfeelvadodara.com/gallery',
    images: [
      {
        url: 'https://richfeelvadodara.com/images/richfeel-vadodara-og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Before & After Results at Richfeel Vadodara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Before & After Hair Regrowth Gallery | Richfeel Vadodara',
    description:
      'View real patient results and hair regrowth transformations at Marvel Square, Sunpharma Road, Vadodara.',
    images: ['https://richfeelvadodara.com/images/richfeel-vadodara-og-banner.jpg'],
  },
};

export default function GalleryPage() {
  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Richfeel Vadodara Patient Transformation Gallery',
    description:
      'Clinical before and after photographic evidence of hair regrowth, AHI transplants, and skin treatments at Richfeel Vadodara.',
    url: 'https://richfeelvadodara.com/gallery',
    creator: {
      '@type': 'MedicalClinic',
      name: 'Richfeel Trichology Centre Vadodara',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <FancyGallery />
    </>
  );
}
