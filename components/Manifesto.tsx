import React from "react";

export default function Manifesto() {
  return (
    <section className="py-28 sm:py-36 bg-[#F8F9FA] border-b border-black/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-slate-400 text-xs">✦</span>
          <span className="text-[10px] tracking-wideest uppercase font-semibold text-slate-400">
            The Eira Manifesto
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-light leading-[1.12] tracking-tight text-[#06080C] max-w-4xl mb-10">
          Not another restaurant directory. A selective guide to the rooms that leave an enduring impression.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-slate-600 text-base sm:text-lg leading-relaxed max-w-5xl font-light">
          <p>
            The Eira Collection unites inquisitive travelers with Europe’s and the world’s most compelling kitchens, wine estates, and secluded sanctuaries. Selected entirely on reputation, terroir, technique, and uncompromising consistency, the portfolio is kept deliberately small.
          </p>
          <p>
            Here you will find no automated rankings or pay-for-placement listings. Every dining room, table, and bedroom has earned its place through authentic dedication to the art of hospitality.
          </p>
        </div>
      </div>
    </section>
  );
}
