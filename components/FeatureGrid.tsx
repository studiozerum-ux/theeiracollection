import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "@/data/collection";

export default function FeatureGrid() {
  const featured = EXPERIENCES.filter((e) => e.isFeatured);
  const mainCard = featured[0] || EXPERIENCES[0];
  const sideCards = featured.slice(1, 3);

  return (
    <section className="py-24 md:py-32 bg-[#FCFCFA] border-b border-black/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-eira-gold text-xs">✦</span>
              <span className="text-[10px] tracking-wideest uppercase font-semibold text-eira-muted">
                Selected Rooms &amp; Stays
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-eira-black">
              This week on the pass
            </h2>
          </div>
          <Link
            href="/explore"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-eira-black hover:text-eira-gold border-b border-eira-black pb-0.5 self-start sm:self-auto transition-colors"
          >
            All 101 places &rarr;
          </Link>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Large Card (Left) */}
          <div className="lg:col-span-7">
            <Link
              href={`/experiences/${mainCard.slug}`}
              className="group flex flex-col h-full bg-white border border-black/[0.06] rounded-sm hover:border-black/[0.16] hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black rounded-t-sm">
                <img
                  src={mainCard.heroImage}
                  alt={mainCard.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-eira-black/75 backdrop-blur-md text-white text-[9.5px] tracking-wideest uppercase font-semibold px-3 py-1.5 rounded-sm">
                  {mainCard.distinction}
                </span>
                <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-eira-black/70 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all">
                  <ArrowUpRight className="w-4 h-4 stroke-[1.8]" />
                </span>
              </div>

              <div className="p-7 md:p-10 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[10px] tracking-wideest uppercase font-semibold text-eira-muted block mb-2">
                    {mainCard.locationString}
                  </span>
                  <h3 className="font-serif text-3xl md:text-[38px] font-light leading-tight text-eira-black mb-3 group-hover:text-eira-gold transition-colors">
                    {mainCard.name}
                  </h3>
                  <p className="text-eira-muted text-sm leading-relaxed mb-6 font-light">
                    {mainCard.editorialExcerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-black/[0.06] text-xs">
                  <span className="font-medium text-eira-black">
                    {mainCard.priceIndication}
                  </span>
                  <span className="font-semibold text-eira-gold group-hover:translate-x-1 transition-transform tracking-wider uppercase text-[11px]">
                    View room &rarr;
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Stacked Side Cards (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {sideCards.map((item) => (
              <Link
                key={item.id}
                href={`/experiences/${item.slug}`}
                className="group flex flex-col sm:flex-row flex-1 bg-white border border-black/[0.06] rounded-sm hover:border-black/[0.16] hover:shadow-[0_16px_30px_rgba(0,0,0,0.03)] transition-all duration-500 overflow-hidden"
              >
                <div className="relative w-full sm:w-2/5 aspect-[16/10] sm:aspect-auto overflow-hidden bg-black">
                  <img
                    src={item.heroImage}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-eira-black/75 backdrop-blur-md text-white text-[9px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-sm">
                    {item.type === "restaurant" ? "Dining" : "Sanctuary"}
                  </span>
                </div>

                <div className="p-6 w-full sm:w-3/5 flex flex-col justify-between">
                  <div>
                    <span className="text-[9.5px] tracking-wideest uppercase font-semibold text-eira-muted block mb-1">
                      {item.locationString}
                    </span>
                    <h3 className="font-serif text-2xl font-light text-eira-black mb-2 group-hover:text-eira-gold transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-eira-muted text-xs leading-relaxed line-clamp-2 mb-4 font-light">
                      {item.editorialExcerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-black/[0.06] text-xs">
                    <span className="font-medium text-eira-black text-[11px]">
                      {item.priceIndication}
                    </span>
                    <span className="font-semibold text-eira-gold group-hover:translate-x-1 transition-transform text-[10px] tracking-wider uppercase">
                      View &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
