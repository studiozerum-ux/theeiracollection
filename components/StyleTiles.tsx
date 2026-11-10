import React from "react";
import Link from "next/link";

const STYLES = [
  {
    name: "Three-Starred Gastronomy",
    count: "67 Rooms",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    href: "/explore?style=gastronomy",
  },
  {
    name: "Secluded Fjord & Alpine Retreats",
    count: "24 Sanctuaries",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
    href: "/explore?type=stay",
  },
  {
    name: "New Nordic Terroir & Wild Fire",
    count: "19 Rooms",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop",
    href: "/explore?style=nordic",
  },
  {
    name: "Historic Manors & Relais Estates",
    count: "15 Estates",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    href: "/explore?style=manor",
  },
  {
    name: "Private Townhouses & Hotels",
    count: "12 Townhouses",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    href: "/explore?style=townhouse",
  },
  {
    name: "World-Class Wine Cellars",
    count: "9 Cellars",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop",
    href: "/explore?style=cellar",
  },
];

export default function StyleTiles() {
  return (
    <section className="py-20 md:py-28 bg-eira-black text-white border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="block text-[11px] tracking-[0.25em] uppercase font-semibold text-eira-gold mb-2">
              Curated Collections
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white">
              How do you wish to experience?
            </h2>
          </div>
          <Link
            href="/explore"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white hover:text-eira-gold border-b border-white pb-0.5 self-start sm:self-auto transition-colors"
          >
            All collections &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STYLES.map((style) => (
            <Link
              key={style.name}
              href={style.href}
              className="group relative aspect-[16/11] rounded overflow-hidden bg-black border border-white/10"
            >
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-eira-gold mb-1">
                  {style.count}
                </span>
                <h3 className="font-serif text-2xl text-white font-normal group-hover:text-eira-gold-light transition-colors">
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
