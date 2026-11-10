import React from "react";

export default function Manifesto() {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-eira-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <span className="block text-[11px] tracking-[0.25em] uppercase font-semibold text-eira-muted mb-4">
          Editorial Philosophy
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-eira-black max-w-4xl mb-8">
          Not another restaurant directory. A selective guide to the rooms that leave an enduring impression.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-eira-muted text-base md:text-lg leading-relaxed max-w-5xl">
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
