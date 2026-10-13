import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ConditionDedicatedPage } from '@/components/conditions/ConditionDedicatedPage';
import { conditionCategories } from '@/data/staticData';
import { treatmentsData } from '@/data/treatments';

interface ConditionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return conditionCategories.map((c) => ({
    slug: c.id,
  }));
}

export async function generateMetadata({ params }: ConditionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const condition = conditionCategories.find((c) => c.id === slug);

  if (!condition) {
    return {
      title: 'Condition Not Found',
    };
  }

  const canonicalUrl = `https://richfeelvadodara.com/conditions/${condition.id}`;

  return {
    title: `${condition.name} Treatment & Causes in Vadodara | Richfeel`,
    description: `Understand the causes, symptoms, and clinical treatments for ${condition.name} at Richfeel Vadodara. Trichogram & Capilloscopy diagnosis.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${condition.name} Treatment & Causes in Vadodara | Richfeel`,
      description: condition.what || condition.tagline || condition.name,
      url: canonicalUrl,
      images: [
        {
          url: condition.image,
          width: 1200,
          height: 630,
          alt: condition.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${condition.name} Treatment in Vadodara | Richfeel`,
      description: condition.what || condition.tagline || condition.name,
      images: [condition.image],
    },
  };
}

export default async function ConditionDetailPage({ params }: ConditionPageProps) {
  const { slug } = await params;
  const condition = conditionCategories.find((c) => c.id === slug);

  if (!condition) {
    notFound();
  }

  const conditionSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: condition.name,
    description: condition.what || condition.tagline,
    possibleTreatment: treatmentsData
      .filter((t) => condition.recommendedTreatmentIds.includes(t.id))
      .map((t) => ({
        '@type': 'MedicalProcedure',
        name: t.title,
        url: `https://richfeelvadodara.com/treatments/${t.id}`,
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(conditionSchema) }}
      />
      <ConditionDedicatedPage
        condition={condition}
        allTreatments={treatmentsData}
      />
    </>
  );
}
