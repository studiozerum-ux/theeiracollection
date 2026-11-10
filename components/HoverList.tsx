"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "@/data/collection";

export default function HoverList() {
  const [activeImage, setActiveImage] = useState<string>(EXPERIENCES[0].heroImage);
  const [activeName, setActiveName] = useState<string>(EXPERIENCES[0].name);

  return (
    <section className="py-24 md:py-32 bg-eira-black text-white border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <span className="block text-[11px] tracking-[0.25em] uppercase font-semibold text-eira-gold mb-3">
              Recently Curated
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white">
              New on the collection
            </h2>
          </div>
          <Link
            href="/explore"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white hover:text-eira-gold border-b border-white pb-0.5 self-start sm:self-auto transition-colors"
          >
            Browse all entries &rarr;
          </Link>
        </div>

        {/* Hover Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* List Rows */}
          <div className="lg:col-span-7 flex flex-col border-b border-white/10">
            {EXPERIENCES.slice(0, 6).map((item, index) => {
              const numStr = `0${index + 1}`;
              return (
                <Link
                  key={item.id}
                  href={`/experiences/${item.slug}`}
                  onMouseEnter={() => {
                    setActiveImage(item.heroImage);
                    setActiveName(item.name);
                  }}
                  className="group grid grid-cols-12 items-center py-6 px-2 border-t border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <span className="col-span-1 text-xs text-eira-gold font-mono font-medium">
                    {numStr}
                  </span>
                  <div className="col-span-5 sm:col-span-6">
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white group-hover:text-eira-gold group-hover:translate-x-2 transition-all">
                      {item.name}
                    </h3>
                  </div>
                  <div className="hidden sm:block col-span-3 text-[11px] tracking-wider uppercase text-white/50">
                    {item.distinction}
                  </div>
                  <div className="col-span-5 sm:col-span-2 text-xs text-white/50 text-right sm:text-left">
                    {item.city}
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-eira-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Sticky Image Preview Frame (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-2xl bg-black border border-white/10">
              <img
                src={activeImage}
                alt={activeName}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-eira-gold block mb-1">
                    Preview
                  </span>
                  <p className="font-serif text-2xl text-white font-normal">
                    {activeName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
