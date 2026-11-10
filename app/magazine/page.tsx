import React from "react";
import Link from "next/link";
import { STORIES } from "@/data/collection";

export const metadata = {
  title: "Magazine — The Eira Collection",
  description: "Essays, interviews, and travel notes on culinary terroir, architecture, and luxury hospitality.",
};

export default function MagazineArchivePage() {
  return (
    <div className="bg-white min-h-screen pb-28">
      {/* Header */}
      <header className="py-20 md:py-24 bg-[#F1F4F8] border-b border-black/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <span className="block text-[11px] tracking-[0.25em] uppercase font-semibold text-slate-400 mb-3">
            The Journal &middot; Editorial Notes
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#06080C] mb-4">
            Stories from the Table
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed font-light">
            In-depth discussions on regional terroir, interviews with visionary chefs, and architectural travel reflections from across the continent.
          </p>
        </div>
      </header>

      {/* Stories Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {STORIES.map((story) => (
            <article key={story.id} className="group flex flex-col">
              <Link
                href={`/magazine/${story.slug}`}
                className="relative aspect-[16/11] rounded-md overflow-hidden bg-slate-900 mb-5 block border border-slate-200/60"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.92] contrast-[1.05] saturate-[0.88]"
                />
              </Link>

              <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                <span className="font-semibold uppercase tracking-wider text-[#06080C] text-[10px]">
                  {story.category}
                </span>
                <span>&middot;</span>
                <span>{story.readTime}</span>
                <span>&middot;</span>
                <span>{story.date}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#06080C] leading-snug mb-3 group-hover:text-slate-600 transition-colors font-light">
                <Link href={`/magazine/${story.slug}`}>
                  {story.title}
                </Link>
              </h2>

              <p className="text-slate-500 text-sm leading-relaxed mb-4 font-light">
                {story.excerpt}
              </p>

              <Link
                href={`/magazine/${story.slug}`}
                className="text-xs font-semibold text-slate-900 uppercase tracking-wider group-hover:underline"
              >
                Read story &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
