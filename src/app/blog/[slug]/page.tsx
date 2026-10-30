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
  const absoluteCoverImage = post.coverImage?.startsWith('http')
    ? post.coverImage
    : `https://richfeelvadodara.com${post.coverImage?.startsWith('/') ? '' : '/'}${post.coverImage || 'images/richfeel-vadodara-og-banner.jpg'}`;

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
          url: absoluteCoverImage,
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
    description: post.excerpt,
    image: absoluteCoverImage,
    datePublished: '2026-10-12',
    dateModified: '2026-10-30',
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
