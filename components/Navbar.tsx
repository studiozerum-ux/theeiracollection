"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, ArrowUpRight } from "lucide-react";
import { EXPERIENCES, STORIES } from "@/data/collection";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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

  const filteredResults = searchQuery.trim() === "" ? [] : EXPERIENCES.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.distinction.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.chefOrHost.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <nav
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-eira-border shadow-sm py-3.5"
            : "bg-white/90 backdrop-blur-sm border-b border-eira-border py-4"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Left: Menu & Quick links */}
          <div className="flex items-center gap-7 flex-1">
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2.5 text-eira-black hover:opacity-70 transition-opacity group"
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-1 w-4">
                <span className="block h-[1.5px] w-full bg-current transition-all group-hover:w-3" />
                <span className="block h-[1.5px] w-full bg-current" />
              </div>
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase">
                Menu
              </span>
            </button>

            <Link
              href="/explore"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-eira-black hover:text-eira-gold transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              The Map
            </Link>

            <Link
              href="/explore?type=stay"
              className="hidden md:inline-flex text-xs font-medium text-eira-black hover:text-eira-gold transition-colors"
            >
              Stays & Retreats
            </Link>
          </div>

          {/* Center: Monogram Brand Logo */}
          <div className="flex-shrink-0 text-center">
            <Link href="/" className="flex flex-col items-center group">
              <span className="font-serif text-2xl md:text-3xl tracking-[0.18em] font-normal text-eira-black group-hover:opacity-80 transition-opacity">
                THE EIRA
              </span>
              <span className="text-[8px] md:text-[9px] tracking-[0.45em] text-eira-muted uppercase font-medium -mt-1">
                COLLECTION
              </span>
            </Link>
          </div>

          {/* Right: Magazine, Search, CTA */}
          <div className="flex items-center justify-end gap-6 flex-1">
            <Link
              href="/magazine"
              className="hidden lg:inline-flex text-xs font-medium text-eira-black hover:text-eira-gold transition-colors"
            >
              Magazine
            </Link>

            <button
              onClick={() => setSearchOpen(true)}
              className="text-eira-black hover:text-eira-gold transition-colors p-1"
              aria-label="Search collection"
              title="Search (⌘K)"
            >
              <Search className="w-4 h-4 stroke-[1.8]" />
            </button>

            <Link
              href="/get-listed"
              className="inline-flex items-center text-[11px] font-semibold tracking-wider uppercase bg-eira-black hover:bg-eira-dark text-white px-4 py-2 rounded-full transition-all hover:scale-[1.02]"
            >
              Get Listed
            </Link>
          </div>
        </div>
      </nav>

      {/* Fullscreen Minimalist Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-eira-black text-white flex flex-col p-8 md:p-14 overflow-y-auto animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-8">
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-eira-gold">
              The Eira Collection &mdash; Curated Index
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white hover:text-eira-gold transition-colors"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-10 items-center my-12">
            <div className="md:col-span-8 flex flex-col gap-4 md:gap-6">
              {[
                { num: "01", label: "The Map & Directory", href: "/explore" },
                { num: "02", label: "Exceptional Restaurants", href: "/explore?type=restaurant" },
                { num: "03", label: "Secluded Stays & Retreats", href: "/explore?type=stay" },
                { num: "04", label: "Nordic Heritage & Terroir", href: "/explore?country=Norway" },
                { num: "05", label: "Editorial Magazine", href: "/magazine" },
                { num: "06", label: "Membership & Inclusion", href: "/get-listed" },
              ].map((item) => (
                <Link
                  key={item.num}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-baseline gap-4 md:gap-6"
                >
                  <span className="font-sans text-xs md:text-sm text-eira-gold font-medium">
                    {item.num}
                  </span>
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white group-hover:text-eira-gold group-hover:translate-x-3 transition-all">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12 flex flex-col gap-8 text-sm">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-white/50 block mb-2">
                  Editorial Philosophy
                </span>
                <p className="text-white/70 text-xs leading-relaxed">
                  Selective by design and kept deliberately small. Every kitchen, room, and sanctuary earns its place purely through craft, terroir, and consistency.
                </p>
              </div>

              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-white/50 block mb-2">
                  Curators & Enquiries
                </span>
                <a
                  href="mailto:curation@eiracollection.com"
                  className="text-xs text-white hover:text-eira-gold underline block mb-3"
                >
                  curation@eiracollection.com
                </a>
                <div className="flex gap-4 text-xs text-eira-gold">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">
                    Instagram
                  </a>
                  <span>&middot;</span>
                  <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white">
                    X (Twitter)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Minimalist Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-eira-black/90 backdrop-blur-md flex items-start justify-center pt-24 px-6"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-eira-dark border border-white/10 rounded-lg p-6 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3 flex-1">
                <Search className="w-5 h-5 text-eira-gold" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search restaurants, sanctuaries, chefs, or cities..."
                  className="w-full bg-transparent border-none text-xl md:text-2xl font-serif text-white placeholder-white/30 focus:outline-none"
                  autoFocus
                />
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-xs uppercase tracking-wider text-white/50 hover:text-white"
              >
                Esc
              </button>
            </div>

            {searchQuery.trim() !== "" && (
              <div className="mt-6 max-h-96 overflow-y-auto flex flex-col gap-2">
                {filteredResults.length === 0 ? (
                  <p className="text-white/40 text-xs py-8 text-center font-sans">
                    No results found for “{searchQuery}”.
                  </p>
                ) : (
                  filteredResults.map((item) => (
                    <Link
                      key={item.id}
                      href={`/experiences/${item.slug}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center justify-between p-3 rounded hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.heroImage}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-serif text-lg text-white group-hover:text-eira-gold transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-[11px] text-white/50">
                            {item.locationString} &middot; {item.distinction}
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-eira-gold transition-colors" />
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
