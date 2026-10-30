import { MetadataRoute } from 'next';
import { treatmentsData } from '@/data/treatments';
import { conditionCategories } from '@/data/staticData';
import { getAllBlogSlugs } from '@/lib/blogs';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://richfeelvadodara.com';
  const currentDate = new Date().toISOString().split('T')[0];

  // Core Static Pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/treatments`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/conditions`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/doctor`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // 19 Dedicated Treatments
  const treatmentPages: MetadataRoute.Sitemap = treatmentsData.map((t) => ({
    url: `${baseUrl}/treatments/${t.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Treatment Aliases
  const aliasPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/treatments/advance-hydra-facial`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/treatments/derma-korean-treatment`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // 6 Clinical Conditions
  const conditionPages: MetadataRoute.Sitemap = conditionCategories.map((c) => ({
    url: `${baseUrl}/conditions/${c.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 6 Medical Blog Articles
  const blogSlugs = getAllBlogSlugs();
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [
    ...corePages,
    ...treatmentPages,
    ...aliasPages,
    ...conditionPages,
    ...blogPages,
  ];
}

