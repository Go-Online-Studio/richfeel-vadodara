import type { Metadata } from 'next';
import { TreatmentsGrid } from '@/components/home/TreatmentsGrid';
import { treatmentsData } from '@/data/treatments';

export const metadata: Metadata = {
  title: '19 Dedicated Hair Restoration & Skin Aesthetics Procedures',
  description:
    'Explore 19 dedicated procedures: Swiss Anagrow stem cell, Austrian TST+ scalp detox, UK AHI hair transplants, and ICE CUBE 2.0 laser reduction at Richfeel Vadodara.',
  alternates: {
    canonical: 'https://richfeelvadodara.com/treatments',
  },
  openGraph: {
    title: '19 Dedicated Hair Restoration & Skin Aesthetics Procedures | Richfeel Vadodara',
    description:
      'Explore patented stem cell hair rejuvenation, scalp detox, and laser reduction therapies at Marvel Square, Vadodara.',
    url: 'https://richfeelvadodara.com/treatments',
    images: [
      {
        url: 'https://richfeelvadodara.com/images/richfeel-vadodara-og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Richfeel Vadodara Treatments Catalog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '19 Dedicated Hair Restoration & Skin Aesthetics Procedures | Richfeel Vadodara',
    description:
      'Explore 19 dedicated procedures at Richfeel Trichology Centre Vadodara.',
    images: ['https://richfeelvadodara.com/images/richfeel-vadodara-og-banner.jpg'],
  },
};

export default function TreatmentsPage() {
  const treatmentsSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: '19 Dedicated Hair Restoration & Skin Aesthetics Procedures',
    description:
      'Explore 19 dedicated procedures: Swiss Anagrow stem cell, Austrian TST+ scalp detox, UK AHI hair transplants, and ICE CUBE 2.0 laser reduction at Richfeel Vadodara.',
    url: 'https://richfeelvadodara.com/treatments',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Richfeel Trichology Centre Vadodara',
      url: 'https://richfeelvadodara.com',
      telephone: '+917490040063',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Clinical Trichology & Aesthetics Treatments',
      itemListElement: treatmentsData.map((t, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: t.title,
          description: t.description,
          url: `https://richfeelvadodara.com/treatments/${t.id}`,
        },
        position: idx + 1,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(treatmentsSchema) }}
      />
      <div className="bg-white min-h-screen">
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4 border-b border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
            Clinical Treatment Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#101e3d] tracking-tight">
            19 Dedicated Hair Restoration &amp; Skin Aesthetics Procedures
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl">
            Explore our complete portfolio of scientifically validated, trichologist-administered treatments at Marvel Square, Sunpharma Road, Vadodara.
          </p>
        </header>
        <div className="py-4">
          <TreatmentsGrid treatments={treatmentsData} />
        </div>
      </div>
    </>
  );
}
