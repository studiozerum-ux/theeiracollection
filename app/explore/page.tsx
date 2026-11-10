"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, MapPin } from "lucide-react";
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
      <header className="py-20 md:py-24 bg-[#F1F4F8] border-b border-black/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <span className="block text-[11px] tracking-[0.25em] uppercase font-semibold text-slate-400 mb-3">
            The Complete Index
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#06080C] mb-4">
            The Curated Directory
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed font-light">
            Every table, suite, and retreat across Europe and the globe. Filter by geography, architectural distinction, or culinary style.
          </p>
        </div>
      </header>

      {/* Filter and Search Bar */}
      <div className="sticky top-[68px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-4">
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
                    ? "bg-[#06080C] text-white"
                    : "bg-[#F1F4F8] text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}

            <span className="h-4 w-[1px] bg-slate-200 mx-1" />

            {["all", "Norway", "Denmark", "Sweden", "France", "Switzerland", "Japan"].map(
              (country) => (
                <button
                  key={country}
                  onClick={() => setActiveCountry(country)}
                  className={`text-xs font-medium px-3.5 py-2 rounded-full whitespace-nowrap transition-colors ${
                    activeCountry === country
                      ? "bg-[#06080C] text-white font-semibold"
                      : "bg-transparent text-slate-500 hover:text-[#06080C]"
                  }`}
                >
                  {country === "all" ? "All Countries" : country}
                </button>
              )
            )}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, chef, city..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#F1F4F8] rounded-full border border-slate-200/80 focus:border-slate-800 focus:bg-white focus:outline-none transition-colors text-[#06080C]"
            />
          </div>
        </div>
      </div>

      {/* Directory Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-12">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-8">
          <span>
            Showing <strong className="text-[#06080C]">{filteredExperiences.length}</strong> of{" "}
            {EXPERIENCES.length} curated places
          </span>
          {(activeType !== "all" || activeCountry !== "all" || search !== "") && (
            <button
              onClick={() => {
                setActiveType("all");
                setActiveCountry("all");
                setSearch("");
              }}
              className="text-slate-900 hover:underline font-semibold"
            >
              Reset filters
            </button>
          )}
        </div>

        {filteredExperiences.length === 0 ? (
          <div className="py-24 text-center">
            <h3 className="font-serif text-3xl text-[#06080C] mb-3 font-light">
              No matching entries found
            </h3>
            <p className="text-slate-500 text-sm mb-6 font-light">
              Try adjusting your search terms or filters to discover other rooms in the collection.
            </p>
            <button
              onClick={() => {
                setActiveType("all");
                setActiveCountry("all");
                setSearch("");
              }}
              className="px-6 py-2.5 bg-[#06080C] text-white text-xs font-semibold rounded-full uppercase tracking-wider"
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
                className="group flex flex-col bg-white border border-slate-200/80 rounded-md hover:border-slate-400 hover:shadow-[0_16px_36px_rgba(0,0,0,0.04)] transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                  <img
                    src={item.heroImage}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.92] contrast-[1.05] saturate-[0.88]"
                  />
                  <span className="absolute top-3.5 left-3.5 bg-black/70 backdrop-blur-md text-white text-[10px] tracking-widest uppercase font-medium px-3 py-1 rounded-full border border-white/10">
                    {item.distinction}
                  </span>
                  <span className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/65 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-semibold text-slate-400 mb-2">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{item.locationString}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#06080C] mb-2 group-hover:text-slate-600 transition-colors font-light">
                      {item.name}
                    </h3>

                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-6 font-light">
                      {item.editorialExcerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-medium text-[#06080C]">
                      {item.priceIndication}
                    </span>
                    <span className="font-semibold text-slate-900 group-hover:translate-x-1 transition-transform tracking-wider uppercase text-[11px]">
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
