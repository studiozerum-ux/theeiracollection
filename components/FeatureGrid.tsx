import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "@/data/collection";

export default function FeatureGrid() {
  const featured = EXPERIENCES.filter((e) => e.isFeatured);
  const mainCard = featured[0] || EXPERIENCES[0];
  const sideCards = featured.slice(1, 3);

  return (
    <section className="py-24 md:py-32 bg-[#F8F9FA] border-b border-black/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-slate-400 text-xs">✦</span>
              <span className="text-[10px] tracking-wideest uppercase font-semibold text-slate-500">
                Selected Rooms &amp; Stays
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#06080C]">
              This week on the pass
            </h2>
          </div>
          <Link
            href="/explore"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-slate-900 hover:text-slate-600 border-b border-slate-900 hover:border-slate-600 pb-0.5 self-start sm:self-auto transition-colors"
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
              className="group flex flex-col h-full bg-white border border-slate-200/70 rounded-md hover:border-slate-400/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={mainCard.heroImage}
                  alt={mainCard.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 nordic-img"
                />
                <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-[9.5px] tracking-wideest uppercase font-medium px-3.5 py-1.5 rounded-full border border-white/10">
                  {mainCard.distinction}
                </span>
                <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/65 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:scale-105 transition-all">
                  <ArrowUpRight className="w-4 h-4 stroke-[1.8]" />
                </span>
              </div>

              <div className="p-7 md:p-10 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <span className="text-[10px] tracking-wideest uppercase font-semibold text-slate-400 block mb-2">
                    {mainCard.locationString}
                  </span>
                  <h3 className="font-serif text-3xl md:text-[38px] font-light leading-tight text-[#06080C] mb-3 group-hover:text-slate-600 transition-colors">
                    {mainCard.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                    {mainCard.editorialExcerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-slate-100 text-xs">
                  <span className="font-medium text-slate-900">
                    {mainCard.priceIndication}
                  </span>
                  <span className="font-semibold text-slate-900 group-hover:translate-x-1 transition-transform tracking-wider uppercase text-[11px]">
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
                className="group flex flex-col sm:flex-row flex-1 bg-white border border-slate-200/70 rounded-md hover:border-slate-400/80 hover:shadow-[0_16px_30px_rgba(0,0,0,0.04)] transition-all duration-500 overflow-hidden"
              >
                <div className="relative w-full sm:w-2/5 aspect-[16/10] sm:aspect-auto overflow-hidden bg-slate-900">
                  <img
                    src={item.heroImage}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 nordic-img"
                  />
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[9px] tracking-wider uppercase font-medium px-2.5 py-1 rounded-full border border-white/10">
                    {item.type === "restaurant" ? "Dining" : "Sanctuary"}
                  </span>
                </div>

                <div className="p-6 w-full sm:w-3/5 flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-[9.5px] tracking-wideest uppercase font-semibold text-slate-400 block mb-1">
                      {item.locationString}
                    </span>
                    <h3 className="font-serif text-2xl font-light text-[#06080C] mb-2 group-hover:text-slate-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 mb-4 font-light">
                      {item.editorialExcerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                    <span className="font-medium text-slate-900 text-[11px]">
                      {item.priceIndication}
                    </span>
                    <span className="font-semibold text-slate-900 group-hover:translate-x-1 transition-transform text-[10px] tracking-wider uppercase">
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
