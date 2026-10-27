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
  },
};

export default function GalleryPage() {
  return <FancyGallery />;
}
