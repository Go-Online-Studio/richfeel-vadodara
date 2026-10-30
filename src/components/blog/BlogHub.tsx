'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, Sparkles, Share2, Search, BookOpen, ChevronRight } from 'lucide-react';
import { BlogPost } from '@/types';
import { ScrollableFilterContainer } from '@/components/common/ScrollableFilterContainer';
import { useConsultation } from '@/context/ConsultationContext';
import { isMobileDevice } from '@/lib/whatsapp';

interface BlogHubProps {
  blogs: BlogPost[];
  onSelectBlog?: (slug: string) => void;
  onOpenBooking?: () => void;
}

export const BlogHub: React.FC<BlogHubProps> = ({ blogs }) => {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { openBooking } = useConsultation();

  // Extract unique topic tags
  const topics = ['All', ...Array.from(new Set(blogs.map((b) => b.topicTag)))];

  const filteredBlogs = blogs.filter((b) => {
    const matchesTopic = selectedTopic === 'All' || b.topicTag === selectedTopic;
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  const featuredPost = blogs.find((b) => b.popular) || blogs[0];
  const otherPosts = filteredBlogs.filter((b) => b.id !== featuredPost?.id);

  const handleShare = async (e: React.MouseEvent, post: BlogPost) => {
    e.stopPropagation();
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: `${window.location.origin}/blog/${post.slug}`
        });
      } catch (err) {}
    } else if (typeof window !== 'undefined') {
      const baseUrl = isMobileDevice()
        ? 'https://api.whatsapp.com/send'
        : 'https://web.whatsapp.com/send';
      const shareUrl = `${baseUrl}?text=${encodeURIComponent(
        post.title + ' - Richfeel Vadodara Clinical Article: ' + window.location.origin + '/blog/' + post.slug
      )}`;
      window.open(shareUrl, '_blank');
    }
  };

  return (
    <div className="py-12 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hub Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
            Clinical Insights & Education
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#27448a] tracking-tight">
            Trichology & Aesthetics Knowledge Hub
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
            Evidence-based medical articles authored by India’s pioneering trichologists. Learn the biology of hair loss, diagnostic Trichogram testing, and advanced regenerative stem cell science.
          </p>
        </div>

        {/* Search & Topic Filters */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
          <ScrollableFilterContainer
            className="w-full md:w-auto min-w-0"
            contentClassName="gap-2 p-1"
            bgColor="slate-tint"
          >
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedTopic === topic
                    ? 'bg-[#27448a] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {topic}
              </button>
            ))}
          </ScrollableFilterContainer>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search medical articles..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200/90 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a6ebd] focus:border-transparent transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Featured Editorial Article */}
        {featuredPost && selectedTopic === 'All' && !searchQuery && (
          <div className="mb-14">
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 items-stretch group">
              <div className="lg:col-span-7 aspect-[16/10] relative overflow-hidden bg-slate-100">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-md bg-[#27448a] text-white text-xs font-bold shadow-md">
                    Featured Medical Guide
                  </span>
                  <span className="px-3 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#0a6ebd] text-xs font-bold shadow-md">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#0a6ebd]" />
                      {featuredPost.publishDate}
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0a6ebd]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#27448a] leading-tight group-hover:text-[#0a6ebd] transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="pt-2 flex items-center gap-3 text-xs">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-[#0a6ebd] font-bold flex items-center justify-center shrink-0">
                      {featuredPost.author.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">{featuredPost.author.name}</div>
                      <div className="text-slate-500 text-[11px]">{featuredPost.author.role}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0a6ebd] group-hover:translate-x-1 transition-all"
                  >
                    <span>Read Complete Clinical Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={(e) => handleShare(e, featuredPost)}
                    className="p-2 rounded-lg text-slate-400 hover:text-[#0a6ebd] hover:bg-blue-50 transition-colors"
                    title="Share Article"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedTopic === 'All' && !searchQuery ? otherPosts : filteredBlogs).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#0a6ebd] text-xs font-bold shadow-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500">
                    <span>{post.publishDate}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#27448a] group-hover:text-[#0a6ebd] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a6ebd] group-hover:translate-x-1 transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={(e) => handleShare(e, post)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-[#0a6ebd] hover:bg-blue-50 transition-colors"
                    title="Share Article"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Free Consultation Banner at the Bottom */}
        <div className="mt-16 bg-gradient-brand rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4ecdc4]">
              Personalized Clinical Diagnosis
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Experiencing Persistent Hair Fall or Scalp Issues?
            </h3>
            <p className="text-xs sm:text-sm text-cyan-100 leading-relaxed">
              Book a microscopic diagnostic evaluation (Trichogram & Capilloscopy) with our certified trichologists at Marvel Square, Sunpharma Road, Vadodara.
            </p>
          </div>

          <button
            onClick={() => openBooking('General Hair Consultation')}
            className="px-6 py-3.5 rounded-2xl bg-white text-[#27448a] font-black text-xs sm:text-sm shadow-lg hover:bg-cyan-50 hover:scale-105 active:scale-95 transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            Book In-Clinic Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
