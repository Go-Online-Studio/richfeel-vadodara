import type { Metadata } from 'next';
import { BlogHub } from '@/components/blog/BlogHub';
import { getAllBlogPosts } from '@/lib/blogs';

export const metadata: Metadata = {
  title: 'Trichology & Aesthetics Blog | Richfeel Vadodara',
  description:
    'Expert clinical articles on hair transplant, PRP, GFC, stem cell therapy, dandruff control, hydra facials, and laser reduction by certified specialists at Richfeel Vadodara.',
  alternates: {
    canonical: 'https://richfeelvadodara.com/blog',
  },
  openGraph: {
    title: 'Trichology & Aesthetics Blog | Richfeel Vadodara',
    description:
      'Expert clinical articles on hair transplant, PRP, GFC, stem cell therapy, dandruff control, hydra facials, and laser reduction.',
    url: 'https://richfeelvadodara.com/blog',
    images: [
      {
        url: 'https://richfeelvadodara.com/images/richfeel-vadodara-og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Richfeel Vadodara Trichology Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trichology & Aesthetics Blog | Richfeel Vadodara',
    description:
      'Expert clinical articles on hair transplant, PRP, GFC, stem cell therapy, and aesthetic treatments.',
    images: ['https://richfeelvadodara.com/images/richfeel-vadodara-og-banner.jpg'],
  },
};

export default async function BlogPage() {
  const blogs = await getAllBlogPosts();

  const blogHubSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Trichology & Aesthetics Blog | Richfeel Vadodara',
    description:
      'Expert clinical articles on hair transplant, PRP, GFC, stem cell therapy, dandruff control, hydra facials, and laser reduction by certified specialists at Richfeel Vadodara.',
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
