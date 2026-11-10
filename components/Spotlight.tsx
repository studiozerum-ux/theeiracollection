import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "@/data/collection";

export default function Spotlight() {
  const spotlight = EXPERIENCES.find((e) => e.isSpotlight) || EXPERIENCES[1];

  return (
    <section className="py-20 md:py-28 bg-[#F1F4F8] border-b border-black/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-slate-200/80 rounded-md overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.03)]">
          {/* Visual Column */}
          <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[580px] bg-slate-900 overflow-hidden">
            <img
              src={spotlight.heroImage}
              alt={spotlight.name}
              className="w-full h-full object-cover nordic-img filter brightness-[0.92] contrast-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-5 p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-white">
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-slate-400 block mb-3">
              Destination of the Month &mdash; 2026 Selection
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#06080C] font-light mb-3">
              {spotlight.name}
            </h2>
            <p className="text-xs tracking-wider uppercase text-slate-400 mb-6 font-medium">
              {spotlight.style} &middot; {spotlight.locationString}
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-light">
              {spotlight.quote}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href={`/experiences/${spotlight.slug}`}
                className="inline-flex items-center gap-2 bg-[#06080C] hover:bg-slate-800 text-white text-xs font-semibold tracking-wider uppercase px-7 py-3.5 rounded-full transition-all group"
              >
                <span>Explore the room</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
              <span className="text-xs text-slate-400 italic">
                Reservations recommended 90 days in advance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
