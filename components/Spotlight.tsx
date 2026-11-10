import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "@/data/collection";

export default function Spotlight() {
  const spotlight = EXPERIENCES.find((e) => e.isSpotlight) || EXPERIENCES[1];

  return (
    <section className="py-20 md:py-28 bg-eira-sand border-b border-eira-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-eira-border rounded overflow-hidden shadow-sm">
          {/* Visual Column */}
          <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[580px] bg-black">
            <img
              src={spotlight.heroImage}
              alt={spotlight.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-5 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-eira-gold block mb-3">
              Destination of the Month &mdash; 2026 Selection
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-eira-black font-light mb-3">
              {spotlight.name}
            </h2>
            <p className="text-xs tracking-wider uppercase text-eira-muted mb-6">
              {spotlight.style} &middot; {spotlight.locationString}
            </p>
            <p className="text-eira-muted text-sm sm:text-base leading-relaxed mb-8">
              {spotlight.quote}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href={`/experiences/${spotlight.slug}`}
                className="inline-flex items-center gap-2 bg-eira-black hover:bg-eira-dark text-white text-xs font-semibold tracking-wider uppercase px-7 py-3.5 rounded-full transition-all"
              >
                <span>Explore the room</span>
                <ArrowUpRight className="w-4 h-4 text-eira-gold" />
              </Link>
              <span className="text-xs text-eira-muted italic">
                Reservations recommended 90 days in advance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
