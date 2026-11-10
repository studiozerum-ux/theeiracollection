"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const REGIONS = [
  {
    country: "Norway",
    count: "14 Rooms",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    href: "/explore?country=Norway",
  },
  {
    country: "Denmark",
    count: "20 Rooms",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1200&auto=format&fit=crop",
    href: "/explore?country=Denmark",
  },
  {
    country: "Sweden",
    count: "16 Rooms",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop",
    href: "/explore?country=Sweden",
  },
  {
    country: "France",
    count: "28 Rooms",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1200&auto=format&fit=crop",
    href: "/explore?country=France",
  },
  {
    country: "Switzerland",
    count: "12 Rooms",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    href: "/explore?country=Switzerland",
  },
  {
    country: "Japan & Global",
    count: "8 Sanctuaries",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    href: "/explore?country=Japan",
  },
];

export default function RegionDirectory() {
  const [activeImage, setActiveImage] = useState(REGIONS[0].image);
  const [activeCountry, setActiveCountry] = useState(REGIONS[0].country);

  return (
    <section className="py-20 md:py-28 bg-white border-b border-black/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="block text-[11px] tracking-[0.25em] uppercase font-semibold text-slate-400 mb-2">
              By Geography &amp; Terroir
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#06080C]">
              One continent, many tables
            </h2>
          </div>
          <Link
            href="/explore"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-slate-900 hover:text-slate-600 border-b border-slate-900 hover:border-slate-600 pb-0.5 self-start sm:self-auto transition-colors"
          >
            All countries &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Country Lines */}
          <div className="lg:col-span-7 flex flex-col border-b border-slate-200/80">
            {REGIONS.map((r) => (
              <Link
                key={r.country}
                href={r.href}
                onMouseEnter={() => {
                  setActiveImage(r.image);
                  setActiveCountry(r.country);
                }}
                className="group flex items-center justify-between py-6 px-3 border-t border-slate-200/80 hover:bg-slate-50 hover:pl-6 transition-all duration-300"
              >
                <span className="font-serif text-2xl sm:text-3xl text-[#06080C] group-hover:text-slate-600 transition-colors">
                  {r.country}
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-xs tracking-wider uppercase font-medium text-slate-400">
                    {r.count}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          {/* Visual Preview */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative aspect-[16/11] rounded-md overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.06)] bg-slate-900 border border-slate-200/80">
              <img
                src={activeImage}
                alt={activeCountry}
                className="w-full h-full object-cover transition-opacity duration-300 filter brightness-[0.92] contrast-[1.05] saturate-[0.88]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <span className="font-serif text-2xl text-white font-light">
                  {activeCountry}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
