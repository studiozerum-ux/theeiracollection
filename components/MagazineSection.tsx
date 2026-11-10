import React from "react";
import Link from "next/link";
import { STORIES } from "@/data/collection";

export default function MagazineSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-eira-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="block text-[11px] tracking-[0.25em] uppercase font-semibold text-eira-muted mb-2">
              The Journal & Magazine
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-eira-black">
              Stories from the table
            </h2>
          </div>
          <Link
            href="/magazine"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-eira-black hover:text-eira-gold border-b border-eira-black pb-0.5 self-start sm:self-auto transition-colors"
          >
            To the Magazine &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
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
              </div>

              <h3 className="font-serif text-2xl text-eira-black leading-snug mb-3 group-hover:text-eira-gold transition-colors">
                <Link href={`/magazine/${story.slug}`}>
                  {story.title}
                </Link>
              </h3>

              <p className="text-eira-muted text-sm leading-relaxed line-clamp-3">
                {story.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
