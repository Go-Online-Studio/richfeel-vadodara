# How to Add a New Blog Post

Simply create a new `.md` markdown file in this folder (`content/blogs/your-blog-slug.md`).
The filename (without `.md`) or the `slug` field in the frontmatter will become the live URL (`/blog/your-blog-slug`).

### Template / Schema Example:

```markdown
---
id: "blog-7"
slug: "your-custom-slug"
title: "Your Catchy Blog Post Title"
category: "Hair Restoration"
topicTag: "Stem Cell Therapy"
excerpt: "A concise 1-2 sentence preview summary of what this article covers for Google and social previews."
publishDate: "November 2026"
readTime: "5 min read"
authorName: "Dr. Apoorva Shah"
authorTitle: "Pioneers of Trichology in India"
authorRole: "Chief Trichologist"
popular: false
recent: true
coverImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
---

### Introduction

Write your content here using standard markdown syntax.

- Supports bullet points
- Supports **bold text** and *italics*
- Supports subheadings with `###` or `####`

### Clinical Insights

Add further paragraphs here. Next.js will automatically parse this markdown file and render the blog page with full SEO metadata, Schema markup, and Open Graph tags!
```
