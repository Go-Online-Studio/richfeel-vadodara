import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { BlogPost } from '@/types';
import fallbackBlogs from '../../data/blogs.json';

const blogsDirectory = path.join(process.cwd(), 'content', 'blogs');

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(blogsDirectory)) {
    return Array.isArray(fallbackBlogs) ? (fallbackBlogs as BlogPost[]).map((b) => b.slug) : [];
  }
  const fileNames = fs.readdirSync(blogsDirectory);
  const slugs: string[] = [];

  for (const fileName of fileNames) {
    if (fileName.endsWith('.md') && fileName.toLowerCase() !== 'readme.md') {
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      const slug = data.slug || fileName.replace(/\.md$/, '');
      slugs.push(slug);
    }
  }

  if (slugs.length > 0) {
    return slugs;
  }

  return Array.isArray(fallbackBlogs) ? (fallbackBlogs as BlogPost[]).map((b) => b.slug) : [];
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(blogsDirectory)) {
    return Array.isArray(fallbackBlogs) ? (fallbackBlogs as BlogPost[]) : [];
  }

  const fileNames = fs.readdirSync(blogsDirectory);
  const posts: BlogPost[] = [];

  for (const fileName of fileNames) {
    if (fileName.endsWith('.md') && fileName.toLowerCase() !== 'readme.md') {
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const processedContent = await remark().use(html).process(content);
      const contentHtml = processedContent.toString();

      const slug = data.slug || fileName.replace(/\.md$/, '');

      posts.push({
        id: data.id || `blog-${slug}`,
        slug: slug,
        title: data.title || '',
        seoTitle: data.seoTitle || data.title || '',
        metaDescription: data.metaDescription || data.excerpt || '',
        category: data.category || 'Hair Restoration',
        topicTag: data.topicTag || 'Clinical Care',
        excerpt: data.excerpt || '',
        content: contentHtml,
        publishDate: data.publishDate || 'Recent',
        readTime: data.readTime || '5 min read',
        author: {
          name: data.authorName || (data.author && data.author.name) || 'Richfeel Clinical Team',
          title: data.authorTitle || (data.author && data.author.title) || 'Trichology Specialist',
          role: data.authorRole || (data.author && data.author.role) || 'Certified Trichologist',
        },
        popular: Boolean(data.popular),
        recent: Boolean(data.recent),
        coverImage: data.coverImage || '/images/richfeel-vadodara-og-banner.jpg',
      });
    }
  }

  if (posts.length > 0) {
    return posts;
  }

  return Array.isArray(fallbackBlogs) ? (fallbackBlogs as BlogPost[]) : [];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const allPosts = await getAllBlogPosts();
  return allPosts.find((p) => p.slug === slug);
}
