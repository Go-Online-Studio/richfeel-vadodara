'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, ChevronRight, BookOpen, User, Phone, Sparkles, Menu, X } from 'lucide-react';
import { BlogPost, Treatment } from '@/types';
import { BlogSidebar } from './BlogSidebar';
import { clinicInfo } from '@/data/staticData';
import { useConsultation } from '@/context/ConsultationContext';

interface BlogDetailProps {
  post: BlogPost;
  allBlogs: BlogPost[];
  treatments: Treatment[];
  onBackToHub?: () => void;
  onSelectBlog?: (slug: string) => void;
  onSelectTreatment?: (id: string) => void;
  onOpenBooking?: () => void;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({
  post,
  allBlogs,
  treatments,
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { openBooking } = useConsultation();

  // Match a related treatment by category
  const relatedTreatment =
    treatments.find((t) => t.category === post.category) || treatments[0];

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {}
    } else if (typeof window !== 'undefined') {
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
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0a6ebd] hover:text-[#27448a] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Knowledge Hub</span>
          </Link>

          {/* Mobile Table of Contents Drawer Toggle */}
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs"
          >
            <Menu className="w-4 h-4 text-[#0a6ebd]" />
            <span>Related Topics</span>
          </button>
        </div>

        {/* Article Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Article Content (8 cols) */}
          <main className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-sm space-y-8">
            {/* Meta Tags Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  {post.category}
                </span>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                  {post.topicTag}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#27448a] tracking-tight leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100 text-xs text-slate-500">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-[#0a6ebd] font-bold flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">{post.author.name}</div>
                    <div className="text-[11px] text-slate-500">
                      {post.author.role} · {post.author.title}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#0a6ebd]" />
                    <span>{post.publishDate}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#0a6ebd]" />
                    <span>{post.readTime}</span>
                  </div>
                  <button
                    onClick={handleShare}
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#0a6ebd] text-slate-600 transition-colors ml-2"
                    title="Share this guide"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Hero Image */}
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100">
              <img
                src={post.coverImage}
                alt={post.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Lead Excerpt */}
            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed bg-[#f6f9fc] p-5 rounded-2xl border-l-4 border-[#0a6ebd]">
              {post.excerpt}
            </p>

            {/* Article Markdown Body */}
            <div
              className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-[#27448a] prose-h2:text-2xl prose-h3:text-xl prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Related Treatment Highlight Box */}
            {relatedTreatment && (
              <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-soft border border-[#0a6ebd]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#0a6ebd] uppercase tracking-wider block">
                    Recommended Clinical Procedure
                  </span>
                  <h4 className="text-lg font-bold text-[#27448a]">
                    {relatedTreatment.title}
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md">
                    {relatedTreatment.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Link
                    href={`/treatments/${relatedTreatment.id}`}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#27448a] hover:bg-slate-50 transition-colors text-center cursor-pointer"
                  >
                    View Procedure
                  </Link>
                  <button
                    onClick={() => openBooking(relatedTreatment.title)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-brand text-white text-xs font-bold shadow-md hover:shadow-lg transition-all text-center cursor-pointer"
                  >
                    Book Doctor
                  </button>
                </div>
              </div>
            )}

            {/* Author Credential Bio Box */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand text-white font-black flex items-center justify-center shrink-0 text-base">
                RF
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  Medical Review by {post.author.name}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  Certified Trichologists pioneered hair & scalp medicine in India. All articles are rigorously reviewed according to international trichological standards followed at Richfeel Vadodara.
                </p>
              </div>
            </div>
          </main>

          {/* Desktop Right Sidebar (4 cols) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-8">
            <BlogSidebar
              currentPostId={post.id}
              allBlogs={allBlogs}
              treatments={treatments}
              onSelectBlog={(slug) => {
                if (typeof window !== 'undefined') window.location.href = `/blog/${slug}`;
              }}
              onSelectTreatment={(id) => {
                if (typeof window !== 'undefined') window.location.href = `/treatments/${id}`;
              }}
              onOpenBooking={() => openBooking(post.title)}
            />
          </aside>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex justify-end lg:hidden">
          <div className="w-4/5 max-w-sm bg-white h-full p-6 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-bold text-[#27448a] text-sm">Related Articles & Tests</h3>
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <BlogSidebar
              currentPostId={post.id}
              allBlogs={allBlogs}
              treatments={treatments}
              onSelectBlog={(slug) => {
                setMobileDrawerOpen(false);
                if (typeof window !== 'undefined') window.location.href = `/blog/${slug}`;
              }}
              onSelectTreatment={(id) => {
                setMobileDrawerOpen(false);
                if (typeof window !== 'undefined') window.location.href = `/treatments/${id}`;
              }}
              onOpenBooking={() => {
                setMobileDrawerOpen(false);
                openBooking(post.title);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
