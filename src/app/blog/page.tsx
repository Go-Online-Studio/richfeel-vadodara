import type { Metadata } from 'next';
import { BlogHub } from '@/components/blog/BlogHub';
import { getAllBlogPosts } from '@/lib/blogs';

export const metadata: Metadata = {
  title: 'Clinical Trichology & Aesthetics Knowledge Hub | Medical Articles',
  description:
    'Evidence-based articles on hair loss causes, Swiss apple stem cell therapy, Austrian scalp detox, and laser reduction by certified trichologists.',
  alternates: {
    canonical: 'https://richfeelvadodara.com/blog',
  },
  openGraph: {
    title: 'Clinical Trichology & Aesthetics Knowledge Hub | Richfeel Vadodara',
    description:
      'Evidence-based articles on hair loss causes, Swiss apple stem cell therapy, and Austrian scalp detox.',
    url: 'https://richfeelvadodara.com/blog',
    images: [
      {
        url: 'https://richfeelvadodara.com/images/richfeel-vadodara-og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Richfeel Vadodara Trichology Knowledge Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinical Trichology & Aesthetics Knowledge Hub | Richfeel Vadodara',
    description:
      'Evidence-based articles on hair loss, stem cells, scalp detox, and aesthetics.',
    images: ['https://richfeelvadodara.com/images/richfeel-vadodara-og-banner.jpg'],
  },
};

export default async function BlogPage() {
  const blogs = await getAllBlogPosts();

  const blogHubSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Clinical Trichology & Aesthetics Knowledge Hub',
    description:
      'Evidence-based articles on hair loss causes, Swiss apple stem cell therapy, Austrian scalp detox, and laser reduction by certified trichologists.',
    url: 'https://richfeelvadodara.com/blog',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: blogs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `https://richfeelvadodara.com/blog/${b.slug}`,
        name: b.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogHubSchema) }}
      />
      <BlogHub blogs={blogs} />
    </>
  );
}
