import { BlogPost } from '../types';
import initialBlogs from '../../data/blogs.json';

// MONGO_DB_MIGRATION_NOTE: Replace JSON import with 'await db.collection("blogs").find({}).toArray()' when MongoDB backend is integrated.
// In the current architecture, blogs are seeded from /data/blogs.json and persisted in localStorage so any future dashboard or user edit maintains real-time state.

const STORAGE_KEY = 'richfeel_vadodara_blogs_v1';

export function getStoredBlogs(): BlogPost[] {
  // MONGO_DB_MIGRATION_NOTE: Replace with MongoDB query: await db.collection("blogs").find({}).sort({ publishDate: -1 }).toArray();
  try {
    const local = localStorage.getItem(STORAGE_KEY);
    if (local) {
      const parsed = JSON.parse(local);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('LocalStorage read error, falling back to static blogs.json', e);
  }
  return initialBlogs as BlogPost[];
}

export function saveBlogs(blogs: BlogPost[]): void {
  // MONGO_DB_MIGRATION_NOTE: Replace with MongoDB bulkWrite or update/delete API calls e.g., await db.collection("blogs").updateOne({ _id }, { $set: post });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
  } catch (e) {
    console.error('Failed to save blogs to localStorage', e);
  }
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  // MONGO_DB_MIGRATION_NOTE: Replace with await db.collection("blogs").findOne({ slug });
  const blogs = getStoredBlogs();
  return blogs.find((b) => b.slug === slug);
}

export function getPopularBlogs(): BlogPost[] {
  // MONGO_DB_MIGRATION_NOTE: Replace with await db.collection("blogs").find({ popular: true }).limit(5).toArray();
  const blogs = getStoredBlogs();
  return blogs.filter((b) => b.popular);
}

export function getRecentBlogs(): BlogPost[] {
  // MONGO_DB_MIGRATION_NOTE: Replace with await db.collection("blogs").find({ recent: true }).limit(5).toArray();
  const blogs = getStoredBlogs();
  return blogs.filter((b) => b.recent);
}
