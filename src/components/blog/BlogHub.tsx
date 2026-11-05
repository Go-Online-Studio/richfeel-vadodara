'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  Share2,
  Search,
  BookOpen,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Activity,
  Layers,
} from 'lucide-react';
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

  const hasBlogs = Array.isArray(blogs) && blogs.length > 0;

  // Extract unique topic tags when blogs are present
  const topics = hasBlogs
    ? ['All', ...Array.from(new Set(blogs.map((b) => b.topicTag).filter(Boolean)))]
    : ['All'];

  const filteredBlogs = hasBlogs
    ? blogs.filter((b) => {
        const matchesTopic = selectedTopic === 'All' || b.topicTag === selectedTopic;
        const matchesSearch =
          b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          b.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTopic && matchesSearch;
      })
    : [];

  const featuredPost = hasBlogs ? blogs.find((b) => b.popular) || blogs[0] : null;
  const otherPosts = hasBlogs ? filteredBlogs.filter((b) => b.id !== featuredPost?.id) : [];

  const handleShare = async (e: React.MouseEvent, post: BlogPost) => {
    e.stopPropagation();
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: `${window.location.origin}/blog/${post.slug}`,
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
            Clinical Insights & Patient Education
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#27448a] tracking-tight">
            Trichology & Aesthetics Knowledge Hub
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
            Evidence-based medical resources authored by India’s pioneering trichologists. Learn the biology of hair loss, diagnostic Trichogram testing, and advanced regenerative stem cell science.
          </p>
        </div>

        {/* If NO BLOGS are published yet: Coming Soon State */}
        {!hasBlogs && (
          <div className="space-y-12 mb-14">
            {/* Main Coming Soon Banner Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-indigo-50/40 rounded-full blur-3xl -z-0 pointer-events-none" />

              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-[#0a6ebd] text-xs font-bold mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#0a6ebd] animate-pulse" />
                  Articles Coming Soon
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-[#27448a] tracking-tight leading-snug">
                  Medical Articles & Research Guides Under Editorial Review
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                  Our certified trichologists and aesthetic physicians at Richfeel Vadodara are currently preparing comprehensive, peer-reviewed patient education guides. Our upcoming publications will cover microscopic follicular diagnostics, non-surgical stem cell hair restoration, scalp detox protocols, and clinical skin treatments.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => openBooking('General Hair Consultation')}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#27448a] text-white text-xs font-bold hover:bg-[#0a6ebd] shadow-sm hover:shadow transition-all cursor-pointer"
                  >
                    <span>Book In-Clinic Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Link
                    href="/treatments"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all"
                  >
                    <span>Explore Clinical Treatments</span>
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all"
                  >
                    <span>Contact Clinic</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Upcoming Topics Preview Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0a6ebd] block">
                    What We're Publishing
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#27448a]">
                    Upcoming Clinical Topics & Patient Guides
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Topic 1 */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0a6ebd] flex items-center justify-center">
                      <Microscope className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#0a6ebd] uppercase tracking-wider block">
                      Diagnostic Trichology
                    </span>
                    <h4 className="text-base font-bold text-[#27448a]">
                      Trichogram & Capilloscopy: Digital Scalp Mapping
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      How microscopic follicular analysis detects early androgenetic miniaturization, root bulb health, and sebum congestion before visible hair loss occurs.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0a6ebd]" />
                      Publishing Soon
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold">
                      In Editorial Review
                    </span>
                  </div>
                </div>

                {/* Topic 2 */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                      <Activity className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-teal-600 uppercase tracking-wider block">
                      Regenerative Science
                    </span>
                    <h4 className="text-base font-bold text-[#27448a]">
                      Swiss Apple Stem Cells (Anagrow) & Follicle Rejuvenation
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The clinical mechanism of PCT Rejuve MAX combined with transdermal RF Anagain 10X delivery for needle-free follicular stimulation.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0a6ebd]" />
                      Publishing Soon
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold">
                      In Editorial Review
                    </span>
                  </div>
                </div>

                {/* Topic 3 */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block">
                      Scalp Health & Detox
                    </span>
                    <h4 className="text-base font-bold text-[#27448a]">
                      Austrian MLD & Tricho Scalp Therapy (TST+)
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      How specialized Manual Lymphatic Drainage flushes toxic follicular accumulation, controls severe dandruff, and revitalizes oxygen delivery.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0a6ebd]" />
                      Publishing Soon
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold">
                      In Editorial Review
                    </span>
                  </div>
                </div>

                {/* Topic 4 */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-cyan-600 uppercase tracking-wider block">
                      Skin Aesthetics
                    </span>
                    <h4 className="text-base font-bold text-[#27448a]">
                      Painless Laser Hair Reduction: ICE CUBE 2.0
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Continuous sapphire contact cooling and gliding beam technology ensuring 90% permanent hair reduction safely across Indian skin tones.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0a6ebd]" />
                      Publishing Soon
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold">
                      In Editorial Review
                    </span>
                  </div>
                </div>

                {/* Topic 5 */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">
                      Clinical Comparison
                    </span>
                    <h4 className="text-base font-bold text-[#27448a]">
                      GFC vs PRP: Understanding Growth Factor Therapy
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      A doctor's perspective comparing autologous Platelet-Rich Plasma with next-generation acellular Growth Factor Concentrate for androgenetic alopecia.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0a6ebd]" />
                      Publishing Soon
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold">
                      In Editorial Review
                    </span>
                  </div>
                </div>

                {/* Topic 6 */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                      Scalp Care Science
                    </span>
                    <h4 className="text-base font-bold text-[#27448a]">
                      Ana-D-Tox: Protecting Scalps from Chemical Damage
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Pre- and post-coloring clinical scalp barrier protection that prevents chemical burning, dryness, and post-color telogen effluvium.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0a6ebd]" />
                      Publishing Soon
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold">
                      In Editorial Review
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* If BLOGS EXIST: Search, Filters, and Grid */}
        {hasBlogs && (
          <>
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
                        className="p-2 rounded-lg text-slate-400 hover:text-[#0a6ebd] hover:bg-blue-50 transition-colors cursor-pointer"
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
            {filteredBlogs.length > 0 ? (
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
                          className="p-1.5 rounded-lg text-slate-400 hover:text-[#0a6ebd] hover:bg-blue-50 transition-colors cursor-pointer"
                          title="Share Article"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-800">No matching articles found</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Try adjusting your search query or topic filter.
                </p>
              </div>
            )}
          </>
        )}

        {/* In-Clinic Consultation Banner */}
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
