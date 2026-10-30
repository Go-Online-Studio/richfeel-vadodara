import type { Metadata } from 'next';
import { ConditionsView } from '@/components/conditions/ConditionsView';
import { treatmentsData } from '@/data/treatments';
import { conditionCategories } from '@/data/staticData';

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
    images: [
      {
        url: 'https://richfeelvadodara.com/images/richfeel-vadodara-og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Hair & Scalp Conditions Diagnosed at Richfeel Vadodara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Fall, Baldness & Scalp Diagnosis | Richfeel Vadodara',
    description:
      'Targeted clinical solutions for hair fall, baldness, dandruff, and skin concerns.',
    images: ['https://richfeelvadodara.com/images/richfeel-vadodara-og-banner.jpg'],
  },
};

export default function ConditionsPage() {
  const conditionsSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Hair Loss & Scalp Conditions Clinical Diagnostic Guide',
    description:
      'Clinical trichology diagnosis and treatments for hair loss, dandruff, baldness, and aesthetic skin conditions in Vadodara.',
    url: 'https://richfeelvadodara.com/conditions',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: conditionCategories.map((c, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'MedicalCondition',
          name: c.name,
          url: `https://richfeelvadodara.com/conditions/${c.id}`,
          description: c.what || c.tagline,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(conditionsSchema) }}
      />
      <ConditionsView treatments={treatmentsData} />
    </>
  );
}
