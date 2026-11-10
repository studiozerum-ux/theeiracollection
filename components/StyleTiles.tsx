import React from "react";
import Link from "next/link";

const STYLES = [
  {
    name: "Three-Starred Gastronomy",
    count: "67 Rooms",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&auto=format&fit=crop",
    href: "/explore?style=gastronomy",
  },
  {
    name: "Secluded Fjord & Alpine Retreats",
    count: "24 Sanctuaries",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    href: "/explore?type=stay",
  },
  {
    name: "New Nordic Terroir & Wild Fire",
    count: "19 Rooms",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
    href: "/explore?style=nordic",
  },
  {
    name: "Historic Manors & Relais Estates",
    count: "15 Estates",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
    href: "/explore?style=manor",
  },
  {
    name: "Private Townhouses & Hotels",
    count: "12 Townhouses",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop",
    href: "/explore?style=townhouse",
  },
  {
    name: "World-Class Wine Cellars",
    count: "9 Cellars",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
    href: "/explore?style=cellar",
  },
];

export default function StyleTiles() {
  return (
    <section className="py-20 md:py-28 bg-[#06080C] text-white border-b border-white/[0.08]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="block text-[11px] tracking-[0.25em] uppercase font-semibold text-slate-400 mb-2">
              Curated Collections
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white">
              How do you wish to experience?
            </h2>
          </div>
          <Link
            href="/explore"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-slate-300 hover:text-white border-b border-slate-300 pb-0.5 self-start sm:self-auto transition-colors"
          >
            All collections &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STYLES.map((style) => (
            <Link
              key={style.name}
              href={style.href}
              className="group relative aspect-[16/11] rounded-md overflow-hidden bg-slate-900 border border-white/[0.08]"
            >
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100 filter brightness-[0.88] contrast-[1.05] saturate-[0.88]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-6">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 mb-1">
                  {style.count}
                </span>
                <h3 className="font-serif text-2xl text-white font-light group-hover:text-slate-200 transition-colors">
                  {style.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
