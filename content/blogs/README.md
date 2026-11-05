# How to Add Clinical Blog Posts in the Future

When you are ready to publish articles on the Knowledge Hub:

1. **Add Markdown Files**:
   Create `.md` markdown files in this directory (`content/blogs/your-blog-slug.md`).
   The filename (or `slug` in the frontmatter) defines the URL (`/blog/your-blog-slug`).

2. **Re-enable the Dynamic Post Route**:
   Copy `src/components/blog/BlogPostPageTemplate.txt` to:
   `src/app/blog/[slug]/page.tsx`
   *(Next.js with `output: 'export'` requires at least one post to generate `/blog/[slug]`. Since all sample blogs were removed, this route is temporarily archived until your first real blog is added).*

---

### Template / Schema Example:

```markdown
---
id: "blog-1"
slug: "your-custom-slug"
title: "Your Catchy Medical Guide Title"
category: "Hair Restoration"
topicTag: "Stem Cell Therapy"
excerpt: "A concise 1-2 sentence preview summary of what this article covers for Google search and social share cards."
publishDate: "November 2026"
readTime: "5 min read"
authorName: "Dr. Apoorva Shah"
authorTitle: "Pioneers of Trichology in India"
authorRole: "Chief Trichologist"
popular: true
recent: true
coverImage: "/images/richfeel-vadodara-og-banner.jpg"
---

### Introduction

Write your content here using standard markdown syntax.

- Supports bullet points
- Supports **bold text** and *italics*
- Supports subheadings with `###` or `####`

### Clinical Insights

Add further paragraphs here. Next.js will automatically parse this markdown file and render the blog page with full SEO metadata, Schema markup, and Open Graph tags!
```
