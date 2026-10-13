import React, { useState } from 'react';
import { Search, Flame, Clock, Calendar, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { BlogPost } from '../../types';
import { clinicInfo } from '../../data/staticData';

interface BlogSidebarProps {
  currentBlogId: string;
  allBlogs: BlogPost[];
  onSelectBlog: (slug: string) => void;
  onOpenBooking: () => void;
}

export const BlogSidebar: React.FC<BlogSidebarProps> = ({
  currentBlogId,
  allBlogs,
  onSelectBlog,
  onOpenBooking
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const popularPosts = allBlogs.filter((b) => b.popular && b.id !== currentBlogId).slice(0, 3);
  const recentPosts = allBlogs.filter((b) => b.recent && b.id !== currentBlogId).slice(0, 3);
  const uniqueTopics = Array.from(new Set(allBlogs.map((b) => b.topicTag)));

  const searchResults = searchTerm.trim()
    ? allBlogs.filter(
        (b) =>
          b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          b.topicTag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <aside className="space-y-8 sticky top-28">
      {/* 1. Search Bar Widget */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
          Search Clinical Topics
        </h4>
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search treatments, symptoms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-[#f8fafc] rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0a6ebd]"
          />
        </div>

        {searchTerm.trim() && (
          <div className="mt-3 space-y-2 border-t border-slate-100 pt-3">
            {searchResults.length > 0 ? (
              searchResults.slice(0, 4).map((res) => (
                <button
                  key={res.id}
                  onClick={() => {
                    onSelectBlog(res.slug);
                    setSearchTerm('');
                  }}
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition-colors block text-xs cursor-pointer"
                >
                  <div className="font-semibold text-[#0a6ebd] line-clamp-1">{res.title}</div>
                  <div className="text-[11px] text-slate-500">{res.category}</div>
                </button>
              ))
            ) : (
              <p className="text-[11px] text-slate-500 py-1">No articles found.</p>
            )}
          </div>
        )}
      </div>

      {/* 2. Quick Book In-Clinic Consultation Sticky Widget */}
      <div className="bg-gradient-brand text-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-[#4ecdc4]" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#4ecdc4]">
            Sunpharma Rd Clinic
          </span>
        </div>
        <h4 className="text-base font-bold text-white mb-2 leading-snug">
          Free Scalp Diagnostic at Marvel Square, Vadodara
        </h4>
        <p className="text-xs text-cyan-100 mb-5 leading-relaxed">
          Get your Trichogram & Capilloscopy test done with our certified trichologists.
        </p>

        <button
          onClick={onOpenBooking}
          className="w-full py-2.5 rounded-xl bg-white text-[#27448a] font-bold text-xs shadow-sm hover:bg-cyan-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Free Consultation</span>
        </button>

        <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-white/80">
          <MapPin className="w-3 h-3 text-[#4ecdc4]" />
          <span>Sunpharma Road, Vadodara</span>
        </div>
      </div>

      {/* 3. Popular Articles Mini-List Widget */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
          <Flame className="w-4 h-4 text-[#0a6ebd]" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Most Read Articles
          </h4>
        </div>

        <div className="space-y-3">
          {popularPosts.map((post) => (
            <button
              key={post.id}
              onClick={() => onSelectBlog(post.slug)}
              className="w-full text-left group flex items-start gap-3 p-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <img
                src={post.coverImage}
                alt={post.title}
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-lg object-cover shrink-0 bg-slate-100"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold text-[#0a6ebd] uppercase block">
                  {post.topicTag}
                </span>
                <h5 className="text-xs font-semibold text-slate-800 line-clamp-2 group-hover:text-[#0a6ebd] transition-colors">
                  {post.title}
                </h5>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  {post.readTime}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 4. Topic Chips Widget */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
          Explore Topics
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {uniqueTopics.map((topic, i) => (
            <span
              key={i}
              className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-[#0a6ebd] transition-colors cursor-default"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* 5. Recent Articles Mini-List */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
          <Clock className="w-4 h-4 text-[#0a6ebd]" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Recent Publications
          </h4>
        </div>

        <div className="space-y-3">
          {recentPosts.map((post) => (
            <button
              key={post.id}
              onClick={() => onSelectBlog(post.slug)}
              className="w-full text-left group block p-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <h5 className="text-xs font-semibold text-slate-800 line-clamp-2 group-hover:text-[#0a6ebd] transition-colors mb-1">
                {post.title}
              </h5>
              <div className="flex items-center gap-2 text-[10px] text-slate-400">
                <span>{post.publishDate}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};
