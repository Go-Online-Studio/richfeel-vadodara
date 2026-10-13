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
    title: 'Clinical Trichology & Aesthetics Knowledge Hub | Richfeel',
    description:
      'Evidence-based articles on hair loss causes, Swiss apple stem cell therapy, and Austrian scalp detox.',
    url: 'https://richfeelvadodara.com/blog',
  },
};

export default async function BlogPage() {
  const blogs = await getAllBlogPosts();
  return <BlogHub blogs={blogs} />;
}
