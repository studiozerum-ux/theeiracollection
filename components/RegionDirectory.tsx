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
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    href: "/explore?country=Denmark",
  },
  {
    country: "Sweden",
    count: "16 Rooms",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    href: "/explore?country=Sweden",
  },
  {
    country: "France",
    count: "28 Rooms",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
    href: "/explore?country=France",
  },
  {
    country: "Switzerland",
    count: "12 Rooms",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1200&auto=format&fit=crop",
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
    <section className="py-20 md:py-28 bg-white border-b border-eira-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="block text-[11px] tracking-[0.25em] uppercase font-semibold text-eira-muted mb-2">
              By Geography & Terroir
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-eira-black">
              One continent, many tables
            </h2>
          </div>
          <Link
            href="/explore"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-eira-black hover:text-eira-gold border-b border-eira-black pb-0.5 self-start sm:self-auto transition-colors"
          >
            All countries &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Country Lines */}
          <div className="lg:col-span-7 flex flex-col border-b border-eira-border">
            {REGIONS.map((r) => (
              <Link
                key={r.country}
                href={r.href}
                onMouseEnter={() => {
                  setActiveImage(r.image);
                  setActiveCountry(r.country);
                }}
                className="group flex items-center justify-between py-6 px-3 border-t border-eira-border hover:bg-eira-sand hover:pl-6 transition-all duration-300"
              >
                <span className="font-serif text-2xl sm:text-3xl text-eira-black group-hover:text-eira-gold transition-colors">
                  {r.country}
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-xs tracking-wider uppercase font-medium text-eira-muted">
                    {r.count}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-eira-muted group-hover:text-eira-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          {/* Visual Preview */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative aspect-[16/11] rounded overflow-hidden shadow-lg bg-black border border-eira-border">
              <img
                src={activeImage}
                alt={activeCountry}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
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
