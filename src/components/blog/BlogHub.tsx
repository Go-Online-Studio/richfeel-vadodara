import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar, Sparkles, Share2, Search, BookOpen, ChevronRight } from 'lucide-react';
import { BlogPost, Treatment } from '../../types';
import { ScrollableFilterContainer } from '../common/ScrollableFilterContainer';

interface BlogHubProps {
  blogs: BlogPost[];
  onSelectBlog: (slug: string) => void;
  onOpenBooking: () => void;
}

export const BlogHub: React.FC<BlogHubProps> = ({
  blogs,
  onSelectBlog,
  onOpenBooking
}) => {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href
        });
      } catch (err) {
        // Ignored or cancelled
      }
    } else {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
        post.title + ' - Richfeel Vadodara Clinical Article: ' + window.location.href
      )}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="py-12 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hub Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block mb-2">
            Clinical Trichology & Aesthetics Knowledge Hub
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#27448a] tracking-tight leading-tight">
            Evidence-Based Hair & Skin Science
          </h1>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Written and vetted by certified Trichologists and aesthetic physicians at Richfeel Vadodara. Practical guidance, clinical trial insights, and treatment breakdowns.
          </p>
        </div>

        {/* Sticky / Scrollable Topic Filter Bar & Search */}
        <div className="sticky top-20 z-20 bg-[#f6f9fc]/95 backdrop-blur-md py-4 mb-10 border-y border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <ScrollableFilterContainer
            className="w-full md:w-auto flex-1 min-w-0"
            bgColor="slate-tint"
          >
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTopic(t)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  selectedTopic === t
                    ? 'bg-gradient-brand text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-[#27448a] border border-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </ScrollableFilterContainer>

          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search clinical topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0a6ebd]"
            />
          </div>
        </div>

        {/* Featured Hero Article */}
        {featuredPost && selectedTopic === 'All' && !searchQuery && (
          <div
            onClick={() => onSelectBlog(featuredPost.slug)}
            className="mb-14 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-12 group"
          >
            {/* Featured Blog Image (Consistent 4:3 Aspect Ratio) */}
            <div className="lg:col-span-7 w-full aspect-[4/3] relative overflow-hidden bg-slate-100">
              <img
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0a6ebd] text-xs font-bold px-3 py-1 rounded-lg border border-slate-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#0a6ebd]" />
                <span>Featured Clinical Insight</span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="font-bold text-[#0a6ebd] uppercase">{featuredPost.category}</span>
                  <span>·</span>
                  <span>{featuredPost.readTime}</span>
                  <span>·</span>
                  <span>{featuredPost.publishDate}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#27448a] leading-tight mb-4 group-hover:text-[#0a6ebd] transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">{featuredPost.author.name}</div>
                  <div className="text-[11px] text-slate-500">{featuredPost.author.title}</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleShare(e, featuredPost)}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                    title="Share this article"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0a6ebd] group-hover:translate-x-1 transition-transform">
                    Read Article <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedTopic === 'All' && !searchQuery ? otherPosts : filteredBlogs).map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectBlog(post.slug)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#0a6ebd]/30 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Blog Card Image (Consistent 4:3 Aspect Ratio) */}
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-slate-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded text-[11px] font-bold text-[#0a6ebd]">
                    {post.topicTag}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2">
                    <span className="font-semibold text-[#0a6ebd]">{post.category}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>{post.publishDate}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#27448a] mb-2.5 leading-snug group-hover:text-[#0a6ebd] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-[#f8fafc] border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500 truncate max-w-[160px]">
                  By {post.author.name}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleShare(e, post)}
                    className="p-1.5 rounded-md hover:bg-slate-200 text-slate-500 transition-colors"
                    title="Share article"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-bold text-[#0a6ebd] flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                    Read <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Free Consultation Banner */}
        <div className="mt-16 bg-gradient-brand text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4ecdc4] block mb-2">
              Vadodara In-Clinic Assessment
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Have Specific Questions About Your Scalp or Skin?
            </h3>
            <p className="text-xs sm:text-sm text-cyan-100 mt-2 leading-relaxed">
              Book a personal consultation with certified trichologists at our Marvel Square, Sunpharma Road clinic in Vadodara.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="bg-white text-[#27448a] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:bg-cyan-50 transition-all shrink-0 cursor-pointer"
          >
            Schedule Assessment
          </button>
        </div>
      </div>
    </div>
  );
};
