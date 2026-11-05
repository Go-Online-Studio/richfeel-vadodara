import type { Metadata } from 'next';
import { BlogHub } from '@/components/blog/BlogHub';
import { getAllBlogPosts } from '@/lib/blogs';

export const metadata: Metadata = {
  title: 'Blogs Coming Soon | Richfeel Vadodara',
  description: 'We are working on informative blogs and articles. Stay tuned!',
  alternates: {
    canonical: 'https://richfeelvadodara.com/blog',
  },
  openGraph: {
    title: 'Blogs Coming Soon | Richfeel Vadodara',
    description: 'We are working on informative blogs and articles. Stay tuned!',
    url: 'https://richfeelvadodara.com/blog',
    images: [
      {
        url: 'https://richfeelvadodara.com/images/richfeel-vadodara-og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Richfeel Vadodara Knowledge Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogs Coming Soon | Richfeel Vadodara',
    description: 'We are working on informative blogs and articles. Stay tuned!',
    images: ['https://richfeelvadodara.com/images/richfeel-vadodara-og-banner.jpg'],
  },
};

export default async function BlogPage() {
  const blogs = await getAllBlogPosts();

  return <BlogHub blogs={blogs} />;
}
