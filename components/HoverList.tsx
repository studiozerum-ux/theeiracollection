"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "@/data/collection";

export default function HoverList() {
  const [activeImage, setActiveImage] = useState<string>(EXPERIENCES[0].heroImage);
  const [activeName, setActiveName] = useState<string>(EXPERIENCES[0].name);

  return (
    <section className="py-24 md:py-32 bg-[#06080C] text-white border-b border-white/[0.08]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-slate-400 text-xs">✦</span>
              <span className="text-[10px] tracking-wideest uppercase font-semibold text-slate-400">
                Recently Added
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
              New on the collection
            </h2>
          </div>
          <Link
            href="/explore"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-slate-300 hover:text-white border-b border-slate-300 pb-0.5 self-start sm:self-auto transition-colors"
          >
            Browse all entries &rarr;
          </Link>
        </div>

        {/* Hover Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* List Rows */}
          <div className="lg:col-span-7 flex flex-col border-b border-white/[0.08]">
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
                  className="group grid grid-cols-12 items-center py-6 px-2 border-t border-white/[0.08] hover:bg-white/[0.03] transition-all duration-300"
                >
                  <span className="col-span-1 text-[11px] text-slate-400 font-mono">
                    {numStr}
                  </span>
                  <div className="col-span-5 sm:col-span-6">
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-white group-hover:text-slate-200 group-hover:translate-x-2 transition-all">
                      {item.name}
                    </h3>
                  </div>
                  <div className="hidden sm:block col-span-3 text-[10px] tracking-wideest uppercase text-slate-400 font-light">
                    {item.distinction}
                  </div>
                  <div className="col-span-5 sm:col-span-2 text-xs text-slate-400 text-right sm:text-left font-light">
                    {item.city}
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Sticky Image Preview Frame (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-2xl bg-black border border-white/[0.08]">
              <img
                src={activeImage}
                alt={activeName}
                className="w-full h-full object-cover transition-opacity duration-300 filter brightness-[0.9] contrast-[1.06] saturate-[0.88]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent flex items-end p-8">
                <div>
                  <span className="text-[9px] tracking-wideest uppercase font-semibold text-slate-400 block mb-1">
                    Live Preview
                  </span>
                  <p className="font-serif text-3xl text-white font-light">
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
