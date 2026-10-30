import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TreatmentDedicatedPage } from '@/components/treatments/TreatmentDedicatedPage';
import { treatmentsData } from '@/data/treatments';

interface TreatmentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    ...treatmentsData.map((t) => ({ slug: t.id })),
    { slug: 'advance-hydra-facial' },
    { slug: 'derma-korean-treatment' },
  ];
}

export async function generateMetadata({ params }: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatmentsData.find(
    (t) =>
      t.id === slug ||
      t.slug === slug ||
      (slug === 'advance-hydra-facial' && t.id === 'hydra-facial') ||
      (slug === 'derma-korean-treatment' && t.id === 'darma-korean-treatment')
  );

  if (!treatment) {
    return {
      title: 'Treatment Not Found',
    };
  }

  const canonicalUrl = `https://richfeelvadodara.com/treatments/${treatment.id}`;
  const absoluteImageUrl = treatment.image?.startsWith('http')
    ? treatment.image
    : `https://richfeelvadodara.com${treatment.image?.startsWith('/') ? '' : '/'}${treatment.image || 'images/richfeel-vadodara-og-banner.jpg'}`;

  return {
    title: `${treatment.title} in Vadodara | Richfeel Trichology Clinic`,
    description: `${treatment.description} Learn about procedure steps, before & after expectations, and pre-care at our Vadodara clinic.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${treatment.title} in Vadodara | Richfeel Trichology Clinic`,
      description: treatment.description,
      url: canonicalUrl,
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: `${treatment.title} at Richfeel Vadodara`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${treatment.title} in Vadodara | Richfeel Trichology Clinic`,
      description: treatment.description,
      images: [absoluteImageUrl],
    },
  };
}

export default async function TreatmentDetailPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = treatmentsData.find(
    (t) =>
      t.id === slug ||
      t.slug === slug ||
      (slug === 'advance-hydra-facial' && t.id === 'hydra-facial') ||
      (slug === 'derma-korean-treatment' && t.id === 'darma-korean-treatment')
  );

  if (!treatment) {
    notFound();
  }

  const absoluteImageUrl = treatment.image?.startsWith('http')
    ? treatment.image
    : `https://richfeelvadodara.com${treatment.image?.startsWith('/') ? '' : '/'}${treatment.image || 'images/richfeel-vadodara-og-banner.jpg'}`;

  const procedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: treatment.title,
    description: treatment.description,
    image: absoluteImageUrl,
    procedureType: 'NoninvasiveProcedure',
    followup: treatment.postTreatment?.join(' ') || treatment.postCare || 'Follow clinical instructions prescribed by trichologist.',
    howPerformed: treatment.duringProcedure?.join(' ') || treatment.procedureSteps?.join(' ') || treatment.description,
    provider: {
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is ${treatment.title} and how does it work?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: treatment.what || treatment.description,
        },
      },
      {
        '@type': 'Question',
        name: `What are the pre-treatment instructions for ${treatment.title}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: treatment.preTreatment?.join(' ') || 'Consult with our trichologist at Marvel Square, Vadodara for clinical preparation instructions.',
        },
      },
      {
        '@type': 'Question',
        name: `What results can I expect after ${treatment.title} at Richfeel Vadodara?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: treatment.beforeAfter || treatment.benefits?.join('. ') || 'Significant clinical improvement in hair density and scalp health observed across scheduled sessions.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TreatmentDedicatedPage
        treatment={treatment}
        allTreatments={treatmentsData}
      />
    </>
  );
}
