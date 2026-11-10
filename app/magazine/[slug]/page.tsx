import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { STORIES } from "@/data/collection";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return STORIES.map((s) => ({
    slug: s.slug,
  }));
}

export default async function StoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const story = STORIES.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen pb-28">
      {/* Top Breadcrumb */}
      <div className="border-b border-slate-200/80 py-4 bg-[#F8F9FA] text-xs text-slate-400">
        <div className="max-w-[860px] mx-auto px-6 flex items-center justify-between">
          <Link
            href="/magazine"
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[#06080C] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Magazine</span>
          </Link>
          <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
            {story.category}
          </span>
        </div>
      </div>

      {/* Story Header */}
      <header className="py-16 md:py-24 bg-white text-center">
        <div className="max-w-[860px] mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-4">
            <span>{story.date}</span>
            <span>&middot;</span>
            <span>{story.readTime}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#06080C] leading-tight mb-6">
            {story.title}
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            {story.excerpt}
          </p>
        </div>
      </header>

      {/* Feature Image */}
      <div className="max-w-[1100px] mx-auto px-6 mb-16">
        <div className="relative aspect-[21/10] rounded-md overflow-hidden shadow-lg bg-slate-900 border border-slate-200/80">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05] saturate-[0.88]"
          />
        </div>
      </div>

      {/* Narrative Prose */}
      <div className="max-w-[760px] mx-auto px-6">
        <div className="prose prose-neutral text-lg sm:text-xl text-slate-800 leading-relaxed flex flex-col gap-8 font-serif font-light">
          {story.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Share & Back */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-400 font-sans">
          <span>The Eira Collection &mdash; Editorial Desk</span>
          <Link
            href="/magazine"
            className="text-[#06080C] font-semibold hover:text-slate-600 transition-colors"
          >
            &larr; More stories
          </Link>
        </div>
      </div>
    </article>
  );
}
