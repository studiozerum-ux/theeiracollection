import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function InteractiveMapSection() {
  return (
    <section className="py-24 md:py-32 bg-eira-black text-white border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-eira-gold block mb-3">
              The Interactive Directory
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-white mb-6">
              Find your next table across Europe and beyond.
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-lg">
              Every dining room and architectural retreat in the collection is plotted with precision coordinates. Filter by Michelin stars, terroir, secluded nature, or metropolitan elegance.
            </p>

            <Link
              href="/explore"
              className="inline-flex items-center gap-2 bg-white text-eira-black hover:bg-neutral-200 text-xs font-semibold tracking-wider uppercase px-7 py-3.5 rounded-full w-fit transition-all hover:scale-[1.02] mb-12"
            >
              <span>Open the map</span>
              <ArrowUpRight className="w-4 h-4 text-eira-black" />
            </Link>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-eira-gold block font-light">
                  101
                </span>
                <span className="text-[10px] tracking-widest uppercase text-white/50 block mt-1">
                  Rooms & Tables
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-eira-gold block font-light">
                  14
                </span>
                <span className="text-[10px] tracking-widest uppercase text-white/50 block mt-1">
                  Countries
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-eira-gold block font-light">
                  58
                </span>
                <span className="text-[10px] tracking-widest uppercase text-white/50 block mt-1">
                  Destinations
                </span>
              </div>
            </div>
          </div>

          {/* Visual Map Mockup / Graphic */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/11] rounded overflow-hidden shadow-2xl bg-black border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop"
                alt="European Locus"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
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
