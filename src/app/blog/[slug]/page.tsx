import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogDetail } from '@/components/blog/BlogDetail';
import { getAllBlogSlugs, getAllBlogPosts, getBlogPostBySlug } from '@/lib/blogs';
import { treatmentsData } from '@/data/treatments';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  const canonicalUrl = `https://richfeelvadodara.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Richfeel Vadodara Knowledge Hub`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title} | Richfeel Vadodara`,
      description: post.excerpt,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allBlogs = await getAllBlogPosts();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.title,
    },
    publisher: {
      '@type': 'MedicalOrganization',
      name: 'Richfeel Trichology Centre Vadodara',
      url: 'https://richfeelvadodara.com',
    },
    mainEntityOfPage: `https://richfeelvadodara.com/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogDetail
        post={post}
        allBlogs={allBlogs}
        treatments={treatmentsData}
      />
    </>
  );
}
