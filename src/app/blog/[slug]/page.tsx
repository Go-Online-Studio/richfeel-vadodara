import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogDetail } from '@/components/blog/BlogDetail';
import { getAllBlogSlugs, getAllBlogPosts, getBlogPostBySlug } from '@/lib/blogs';
import { treatmentsData } from '@/data/treatments';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

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
  const pageTitle = post.seoTitle || `${post.title} | Richfeel Vadodara`;
  const pageDescription = post.metaDescription || post.excerpt;
  const absoluteCoverImage = post.coverImage?.startsWith('http')
    ? post.coverImage
    : `https://richfeelvadodara.com${post.coverImage?.startsWith('/') ? '' : '/'}${post.coverImage || 'images/richfeel-vadodara-og-banner.jpg'}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: absoluteCoverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [absoluteCoverImage],
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
  const absoluteCoverImage = post.coverImage?.startsWith('http')
    ? post.coverImage
    : `https://richfeelvadodara.com${post.coverImage?.startsWith('/') ? '' : '/'}${post.coverImage || 'images/richfeel-vadodara-og-banner.jpg'}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': ['MedicalWebPage', 'BlogPosting'],
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: absoluteCoverImage,
    datePublished: '2026-11-01',
    dateModified: '2026-11-05',
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.title,
    },
    publisher: {
      '@type': 'MedicalClinic',
      name: 'Richfeel Trichology Centre Vadodara',
      url: 'https://richfeelvadodara.com',
      logo: 'https://richfeelvadodara.com/images/RichfeelsLogo.webp',
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
