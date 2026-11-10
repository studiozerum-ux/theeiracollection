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
      <header className="py-20 md:py-24 bg-eira-sand border-b border-eira-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <span className="block text-[11px] tracking-[0.25em] uppercase font-semibold text-eira-muted mb-3">
            The Journal &middot; Editorial Notes
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-eira-black mb-4">
            Stories from the Table
          </h1>
          <p className="text-eira-muted text-base md:text-lg max-w-2xl leading-relaxed">
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
                className="relative aspect-[16/11] rounded overflow-hidden bg-black mb-5 block"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Link>

              <div className="flex items-center gap-2 text-xs text-eira-muted mb-2">
                <span className="font-semibold uppercase tracking-wider text-eira-black">
                  {story.category}
                </span>
                <span>&middot;</span>
                <span>{story.readTime}</span>
                <span>&middot;</span>
                <span>{story.date}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-eira-black leading-snug mb-3 group-hover:text-eira-gold transition-colors">
                <Link href={`/magazine/${story.slug}`}>
                  {story.title}
                </Link>
              </h2>

              <p className="text-eira-muted text-sm leading-relaxed mb-4">
                {story.excerpt}
              </p>

              <Link
                href={`/magazine/${story.slug}`}
                className="text-xs font-semibold text-eira-gold uppercase tracking-wider group-hover:underline"
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
