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
    return (fallbackBlogs as BlogPost[]).map((b) => b.slug);
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

  return slugs.length > 0 ? slugs : (fallbackBlogs as BlogPost[]).map((b) => b.slug);
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(blogsDirectory)) {
    return fallbackBlogs as BlogPost[];
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
        coverImage: data.coverImage || 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
      });
    }
  }

  if (posts.length === 0) {
    return fallbackBlogs as BlogPost[];
  }

  return posts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const allPosts = await getAllBlogPosts();
  return allPosts.find((p) => p.slug === slug);
}
