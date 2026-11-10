import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function InteractiveMapSection() {
  return (
    <section className="py-24 md:py-32 bg-[#06080C] text-white border-b border-white/[0.08]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-slate-400 block mb-3">
              The Interactive Directory
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-white mb-6">
              Find your next table across Europe and beyond.
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg font-light">
              Every dining room and architectural retreat in the collection is plotted with precision coordinates. Filter by Michelin stars, terroir, secluded nature, or metropolitan elegance.
            </p>

            <Link
              href="/explore"
              className="inline-flex items-center gap-2 bg-white text-[#06080C] hover:bg-slate-100 text-xs font-semibold tracking-wider uppercase px-7 py-3.5 rounded-full w-fit transition-all hover:scale-[1.02] mb-12"
            >
              <span>Open the map</span>
              <ArrowUpRight className="w-4 h-4 text-[#06080C]" />
            </Link>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/[0.08]">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-white block font-light">
                  101
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-400 block mt-1">
                  Rooms &amp; Tables
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-white block font-light">
                  14
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-400 block mt-1">
                  Countries
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-white block font-light">
                  58
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-400 block mt-1">
                  Destinations
                </span>
              </div>
            </div>
          </div>

          {/* Visual Map Mockup / Graphic */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/11] rounded-md overflow-hidden shadow-2xl bg-slate-900 border border-white/[0.08] group">
              <img
                src="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1400&auto=format&fit=crop"
                alt="European Fjord Territory"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.85] contrast-[1.06] saturate-[0.88]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-8">
                <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs tracking-wider uppercase text-white font-medium">
                    58 Active Pins Across Europe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
