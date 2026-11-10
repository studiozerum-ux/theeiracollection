"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "@/data/collection";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredResults =
    searchQuery.trim() === ""
      ? []
      : EXPERIENCES.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.distinction.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.chefOrHost.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <>
      <nav
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 bg-[#06080C] text-white ${
          scrolled
            ? "bg-[#06080C]/95 backdrop-blur-xl border-b border-white/[0.1] shadow-[0_12px_32px_rgba(0,0,0,0.4)] py-3"
            : "bg-[#06080C]/85 backdrop-blur-md border-b border-white/[0.08] py-4"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Left: Menu & Key Links */}
          <div className="flex items-center gap-7 flex-1">
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2.5 text-white hover:text-slate-300 transition-colors group"
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-[3.5px] w-4">
                <span className="block h-[1px] w-full bg-white transition-all group-hover:w-3" />
                <span className="block h-[1px] w-full bg-white" />
              </div>
              <span className="text-[10px] font-medium tracking-wideest uppercase text-slate-200 group-hover:text-white transition-colors">
                Menu
              </span>
            </button>

            <Link
              href="/explore"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-normal text-slate-300 hover:text-white transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              The Map
            </Link>

            <Link
              href="/explore?type=stay"
              className="hidden md:inline-flex text-xs font-normal text-slate-300 hover:text-white transition-colors"
            >
              Stays &amp; Sanctuaries
            </Link>

            {/* Cinema Link */}
            <Link
              href="/cinema"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-normal text-slate-200 hover:text-white transition-colors"
            >
              <span className="text-[9px] text-slate-400">✦</span>
              Cinema Atelier
            </Link>
          </div>

          {/* Center: Slender Modern Sans-Serif Brand Mark */}
          <div className="flex-shrink-0 text-center">
            <Link href="/" className="flex flex-col items-center group py-0.5">
              <span className="font-sans font-[200] text-[15px] sm:text-[17px] tracking-[0.32em] text-white uppercase group-hover:text-slate-300 transition-colors leading-none">
                THE EIRA
              </span>
              <span className="font-sans font-[300] text-[7.5px] sm:text-[8px] tracking-[0.52em] text-slate-400 uppercase mt-1 leading-none">
                COLLECTION
              </span>
            </Link>
          </div>

          {/* Right: Magazine, Search, CTA */}
          <div className="flex items-center justify-end gap-5 flex-1">
            <Link
              href="/magazine"
              className="hidden lg:inline-flex text-xs font-normal text-slate-300 hover:text-white transition-colors"
            >
              Magazine
            </Link>

            <button
              onClick={() => setSearchOpen(true)}
              className="text-slate-300 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/[0.06]"
              aria-label="Search collection"
              title="Search (⌘K)"
            >
              <Search className="w-3.5 h-3.5 stroke-[1.5]" />
            </button>

            <Link
              href="/get-listed"
              className="inline-flex items-center text-[10px] font-semibold tracking-wideest uppercase bg-white hover:bg-slate-200 text-[#06080C] px-4 py-2 rounded-full transition-all hover:scale-[1.02] shadow-sm"
            >
              Get Listed
            </Link>
          </div>
        </div>
      </nav>

      {/* Fullscreen Minimalist Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#06080C] text-white flex flex-col p-8 md:p-14 overflow-y-auto animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-8">
            <div className="flex items-center gap-2 text-[10px] tracking-wideest uppercase font-semibold text-slate-400">
              <span>✦</span>
              <span>The Eira Collection &mdash; Curated Index</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-300 hover:text-white transition-colors"
            >
              <span>Close</span>
              <X className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-10 items-center my-10">
            <div className="md:col-span-8 flex flex-col gap-4 md:gap-5">
              {[
                { num: "01", label: "The Map & Directory", href: "/explore" },
                { num: "02", label: "Exceptional Dining Rooms", href: "/explore?type=restaurant" },
                { num: "03", label: "Secluded Sanctuaries & Stays", href: "/explore?type=stay" },
                { num: "04", label: "Cinema & Video Production", href: "/cinema", highlight: true },
                { num: "05", label: "Nordic Terroir & Heritage", href: "/explore?country=Norway" },
                { num: "06", label: "Editorial Magazine", href: "/magazine" },
                { num: "07", label: "Membership & Inclusion", href: "/get-listed" },
              ].map((item) => (
                <Link
                  key={item.num}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-baseline gap-4 md:gap-6"
                >
                  <span className="font-sans text-xs md:text-sm text-slate-400 font-mono">
                    {item.num}
                  </span>
                  <span
                    className={`font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white group-hover:text-slate-200 group-hover:translate-x-3 transition-all ${
                      item.highlight ? "italic text-slate-200" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-white/[0.08] pt-8 md:pt-0 md:pl-12 flex flex-col gap-8 text-sm">
              <div>
                <span className="text-[10px] tracking-wideest uppercase font-semibold text-slate-400 block mb-2">
                  Atelier Philosophy
                </span>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  Selective by design and kept deliberately small. We curate and document the rooms where gastronomy and hospitality achieve the status of art.
                </p>
              </div>

              <div>
                <span className="text-[10px] tracking-wideest uppercase font-semibold text-slate-400 block mb-2">
                  Cinema &amp; Commissions
                </span>
                <p className="text-slate-400 text-xs leading-relaxed font-light mb-3">
                  Film direction and visual archive production for elite Michelin kitchens and Relais retreats worldwide.
                </p>
                <Link
                  href="/cinema"
                  onClick={() => setMenuOpen(false)}
                  className="text-xs text-slate-300 hover:text-white underline inline-flex items-center gap-1"
                >
                  <span>Explore cinema atelier</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <span className="text-[10px] tracking-wideest uppercase font-semibold text-slate-500 block mb-1">
                  Direct Inquiries
                </span>
                <a
                  href="mailto:curation@eiracollection.com"
                  className="text-xs text-slate-300 hover:text-white underline block mb-3 font-light"
                >
                  curation@eiracollection.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Minimalist Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start justify-center pt-24 px-6 animate-fadeIn"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-[#0D1117] border border-white/[0.08] rounded-md p-6 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-3 flex-1">
                <Search className="w-4 h-4 text-slate-400 stroke-[1.5]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search restaurants, sanctuaries, cinema, chefs..."
                  className="w-full bg-transparent border-none text-xl md:text-2xl font-serif text-white placeholder-white/30 focus:outline-none font-light"
                  autoFocus
                />
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-[10px] uppercase tracking-wider text-slate-400 hover:text-white"
              >
                Esc
              </button>
            </div>

            {searchQuery.trim() !== "" && (
              <div className="mt-6 max-h-96 overflow-y-auto flex flex-col gap-2">
                {filteredResults.length === 0 ? (
                  <p className="text-slate-400 text-xs py-8 text-center font-sans font-light">
                    No results found for “{searchQuery}”.
                  </p>
                ) : (
                  filteredResults.map((item) => (
                    <Link
                      key={item.id}
                      href={`/experiences/${item.slug}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center justify-between p-3 rounded-md hover:bg-white/[0.04] transition-colors group"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.heroImage}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-md filter brightness-[0.9] contrast-[1.05]"
                        />
                        <div>
                          <h4 className="font-serif text-lg text-white font-light group-hover:text-slate-200 transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-[10px] text-slate-400 tracking-wider uppercase">
                            {item.locationString} &middot; {item.distinction}
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
