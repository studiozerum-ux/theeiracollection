"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, MapPin, SlidersHorizontal } from "lucide-react";
import { EXPERIENCES } from "@/data/collection";

export default function ExplorePage() {
  const [activeType, setActiveType] = useState<string>("all");
  const [activeCountry, setActiveCountry] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  const filteredExperiences = useMemo(() => {
    return EXPERIENCES.filter((item) => {
      if (activeType !== "all" && item.type !== activeType) return false;
      if (activeCountry !== "all" && item.country !== activeCountry) return false;
      if (search.trim() !== "") {
        const query = search.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCity = item.city.toLowerCase().includes(query);
        const matchesCountry = item.country.toLowerCase().includes(query);
        const matchesDistinction = item.distinction.toLowerCase().includes(query);
        const matchesChef = item.chefOrHost.toLowerCase().includes(query);
        if (!matchesName && !matchesCity && !matchesCountry && !matchesDistinction && !matchesChef) {
          return false;
        }
      }
      return true;
    });
  }, [activeType, activeCountry, search]);

  return (
    <div className="bg-white min-h-screen pb-28">
      {/* Header */}
      <header className="py-20 md:py-24 bg-eira-sand border-b border-eira-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <span className="block text-[11px] tracking-[0.25em] uppercase font-semibold text-eira-muted mb-3">
            The Complete Index
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-eira-black mb-4">
            The Curated Directory
          </h1>
          <p className="text-eira-muted text-base md:text-lg max-w-2xl leading-relaxed">
            Every table, suite, and retreat across Europe and the globe. Filter by geography, architectural distinction, or culinary style.
          </p>
        </div>
      </header>

      {/* Filter and Search Bar */}
      <div className="sticky top-[68px] z-30 bg-white/95 backdrop-blur-md border-b border-eira-border py-4">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {[
              { id: "all", label: "All Entries" },
              { id: "restaurant", label: "Restaurants" },
              { id: "stay", label: "Stays & Retreats" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveType(tab.id)}
                className={`text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeType === tab.id
                    ? "bg-eira-black text-white"
                    : "bg-eira-sand text-eira-black hover:bg-neutral-200"
                }`}
              >
                {tab.label}
              </button>
            ))}

            <span className="h-4 w-[1px] bg-eira-border mx-1" />

            {["all", "Norway", "Denmark", "Sweden", "France", "Switzerland", "Japan"].map(
              (country) => (
                <button
                  key={country}
                  onClick={() => setActiveCountry(country)}
                  className={`text-xs font-medium px-3.5 py-2 rounded-full whitespace-nowrap transition-colors ${
                    activeCountry === country
                      ? "bg-eira-gold text-white font-semibold"
                      : "bg-transparent text-eira-muted hover:text-eira-black"
                  }`}
                >
                  {country === "all" ? "All Countries" : country}
                </button>
              )
            )}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 text-eira-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, chef, city..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-eira-sand rounded-full border border-transparent focus:border-eira-border focus:bg-white focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Directory Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-12">
        <div className="flex items-center justify-between text-xs text-eira-muted mb-8">
          <span>
            Showing <strong className="text-eira-black">{filteredExperiences.length}</strong> of{" "}
            {EXPERIENCES.length} curated places
          </span>
          {(activeType !== "all" || activeCountry !== "all" || search !== "") && (
            <button
              onClick={() => {
                setActiveType("all");
                setActiveCountry("all");
                setSearch("");
              }}
              className="text-eira-gold hover:underline font-semibold"
            >
              Reset filters
            </button>
          )}
        </div>

        {filteredExperiences.length === 0 ? (
          <div className="py-24 text-center">
            <h3 className="font-serif text-3xl text-eira-black mb-3 font-light">
              No matching entries found
            </h3>
            <p className="text-eira-muted text-sm mb-6">
              Try adjusting your search terms or filters to discover other rooms in the collection.
            </p>
            <button
              onClick={() => {
                setActiveType("all");
                setActiveCountry("all");
                setSearch("");
              }}
              className="px-6 py-2.5 bg-eira-black text-white text-xs font-semibold rounded-full uppercase tracking-wider"
            >
              View entire collection
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map((item) => (
              <Link
                key={item.id}
                href={`/experiences/${item.slug}`}
                className="group flex flex-col bg-white border border-eira-border rounded hover:border-neutral-400 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-black">
                  <img
                    src={item.heroImage}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3.5 left-3.5 bg-eira-black/80 backdrop-blur-md text-white text-[10px] tracking-widest uppercase font-semibold px-3 py-1 rounded">
                    {item.distinction}
                  </span>
                  <span className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-eira-black/70 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-semibold text-eira-muted mb-2">
                      <MapPin className="w-3 h-3 text-eira-gold" />
                      <span>{item.locationString}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-eira-black mb-2 group-hover:text-eira-gold transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-eira-muted text-xs leading-relaxed line-clamp-2 mb-6">
                      {item.editorialExcerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-eira-border flex items-center justify-between text-xs">
                    <span className="font-semibold text-eira-black">
                      {item.priceIndication}
                    </span>
                    <span className="font-semibold text-eira-gold group-hover:translate-x-1 transition-transform">
                      View room &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
