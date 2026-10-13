import React, { useState } from 'react';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, ChevronRight, BookOpen, User, Phone, Sparkles, Menu, X } from 'lucide-react';
import { BlogPost, Treatment } from '../../types';
import { BlogSidebar } from './BlogSidebar';
import { clinicInfo } from '../../data/staticData';

interface BlogDetailProps {
  post: BlogPost;
  allBlogs: BlogPost[];
  treatments: Treatment[];
  onBackToHub: () => void;
  onSelectBlog: (slug: string) => void;
  onSelectTreatment: (treatmentId: string) => void;
  onOpenBooking: () => void;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({
  post,
  allBlogs,
  treatments,
  onBackToHub,
  onSelectBlog,
  onSelectTreatment,
  onOpenBooking
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Match a related treatment by category
  const relatedTreatment =
    treatments.find((t) => t.category === post.category) || treatments[0];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href
        });
      } catch (err) {}
    } else {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
        post.title + ' - ' + window.location.href
      )}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="py-10 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumbs & Back */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            onClick={onBackToHub}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0a6ebd] hover:text-[#27448a] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Knowledge Hub</span>
          </button>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs cursor-pointer"
          >
            <Menu className="w-3.5 h-3.5 text-[#0a6ebd]" />
            <span>Topics & Search</span>
          </button>
        </div>

        {/* 2-Column Responsive Layout (70% main, 30% sticky sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Column (8 cols = ~67-70% width) */}
          <main className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
            {/* Meta Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-4">
              <span className="font-bold text-[#0a6ebd] uppercase">{post.category}</span>
              <span>·</span>
              <span className="bg-blue-50 text-[#0a6ebd] font-semibold px-2 py-0.5 rounded">
                {post.topicTag}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishDate}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl font-black text-[#27448a] tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-8 border-l-4 border-[#0a6ebd] pl-4 py-1 italic bg-blue-50/40 rounded-r-lg">
              "{post.excerpt}"
            </p>

            {/* Feature Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-8 border border-slate-100 shadow-xs h-72 sm:h-96">
              <img
                src={post.coverImage}
                alt={post.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content Rendered Cleanly */}
            <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-5">
              {post.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3
                      key={idx}
                      className="text-xl font-bold text-[#27448a] pt-4 pb-1 border-b border-slate-100"
                    >
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n');
                  return (
                    <ul key={idx} className="space-y-1.5 list-disc pl-5 text-slate-700">
                      {items.map((it, i) => (
                        <li key={i}>{it.replace(/^(\d+\. |- )/, '')}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Social Share Strip */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Share this scientific article with someone experiencing hair or skin concerns:
              </span>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-[#0a6ebd] text-xs font-bold hover:bg-blue-100 transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>

            {/* Doctor / Author Credentials Box */}
            <div className="mt-10 p-6 rounded-2xl bg-[#f6f9fc] border border-blue-100 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-gradient-brand text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                <User className="w-7 h-7" />
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h4 className="text-base font-bold text-[#27448a]">{post.author.name}</h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#0a6ebd]">
                    Certified
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-600 mb-2">
                  {post.author.title} {post.author.role && `· ${post.author.role}`}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Pioneering clinical trichology protocols across India since 1986. Leading diagnosis, research, and patient outcomes at Richfeel Trichology Centre Vadodara.
                </p>
              </div>
            </div>

            {/* Contextual Related Treatment CTA Card */}
            {relatedTreatment && (
              <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-brand text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4ecdc4] block">
                    Recommended Vadodara Clinical Procedure
                  </span>
                  <h4 className="text-xl font-bold text-white">
                    {relatedTreatment.title}
                  </h4>
                  <p className="text-xs text-cyan-100 leading-relaxed max-w-md">
                    {relatedTreatment.tagline}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => onSelectTreatment(relatedTreatment.id)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-sm border border-white/20 transition-colors cursor-pointer"
                  >
                    View Protocol
                  </button>
                  <button
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-[#27448a] text-xs font-bold shadow-md hover:bg-cyan-50 transition-colors cursor-pointer"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            )}
          </main>

          {/* Desktop Sticky Right Sidebar (4 cols = ~30-33% width) */}
          <div className="hidden lg:block lg:col-span-4">
            <BlogSidebar
              currentBlogId={post.id}
              allBlogs={allBlogs}
              onSelectBlog={onSelectBlog}
              onOpenBooking={onOpenBooking}
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Collapsible) for Zero Friction Navigation */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-sm bg-white h-full overflow-y-auto p-6 shadow-2xl animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <h3 className="text-sm font-bold text-slate-800">Knowledge Hub & Topics</h3>
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="p-1 rounded-lg text-slate-500 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <BlogSidebar
              currentBlogId={post.id}
              allBlogs={allBlogs}
              onSelectBlog={(slug) => {
                onSelectBlog(slug);
                setMobileDrawerOpen(false);
              }}
              onOpenBooking={() => {
                setMobileDrawerOpen(false);
                onOpenBooking();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
