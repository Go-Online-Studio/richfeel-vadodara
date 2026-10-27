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
          url: treatment.image,
          width: 1200,
          height: 630,
          alt: treatment.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${treatment.title} in Vadodara | Richfeel Trichology Clinic`,
      description: treatment.description,
      images: [treatment.image],
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

  const procedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: treatment.title,
    description: treatment.description,
    procedureType: 'NoninvasiveProcedure',
    followup: treatment.postTreatment?.join(' ') || treatment.postCare || 'Follow clinical instructions prescribed by trichologist.',
    howPerformed: treatment.duringProcedure?.join(' ') || treatment.procedureSteps?.join(' ') || treatment.description,
    provider: {
      '@type': 'MedicalClinic',
      name: 'Richfeel Trichology Centre Vadodara',
      url: 'https://richfeelvadodara.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <TreatmentDedicatedPage
        treatment={treatment}
        allTreatments={treatmentsData}
      />
    </>
  );
}
