"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1920&auto=format&fit=crop",
    name: "Maaemo",
    region: "Oslo, Norway",
    slug: "maaemo",
    category: "3 Michelin Stars",
  },
  {
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1920&auto=format&fit=crop",
    name: "Under",
    region: "Lindesnes, Norway",
    slug: "under",
    category: "Marine Gastronomy",
  },
  {
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1920&auto=format&fit=crop",
    name: "Juvet Landscape Hotel",
    region: "Valldal, Norway",
    slug: "juvet-landscape-hotel",
    category: "Forest Sanctuary",
  },
  {
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1920&auto=format&fit=crop",
    name: "Schloss Schauenstein",
    region: "Fürstenau, Switzerland",
    slug: "schloss-schauenstein",
    category: "Alpine Grand Cru",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const active = HERO_SLIDES[currentSlide];

  return (
    <header className="relative w-full h-[calc(100vh-68px)] min-h-[660px] bg-eira-black text-white flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.name}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out transform ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        {/* Soft Film Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-eira-black/95 z-10" />
      </div>

      {/* Top Floating Pill Meta */}
      <div className="relative z-20 w-fit">
        <div className="inline-flex items-center gap-3 bg-eira-black/70 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs text-white shadow-lg">
          <span className="text-[9px] tracking-wideest uppercase font-semibold text-eira-gold flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-emerald-400" />
            Curated Destination
          </span>
          <span className="w-[1px] h-3 bg-white/20" />
          <Link
            href={`/experiences/${active.slug}`}
            className="font-light tracking-wide hover:text-eira-gold transition-colors flex items-center gap-1.5"
          >
            <span>{active.name}</span>
            <span className="text-white/50 text-[11px]">&middot; {active.region}</span>
            <ArrowUpRight className="w-3 h-3 text-eira-gold" />
          </Link>
        </div>
      </div>

      {/* Bottom Typography & Headline */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-2">
        <div>
          <span className="block text-[10px] tracking-wideest uppercase font-semibold text-eira-gold mb-4">
            ✦ Gastronomy &middot; Sanctuaries &middot; Cinema Direction
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-light leading-[0.93] tracking-tight text-white max-w-4xl">
            The rooms and tables <br />
            <em className="font-serif italic font-normal text-eira-gold-light/95">
              worth the journey.
            </em>
          </h1>
        </div>

        <div className="hidden md:flex flex-col items-end text-right text-[11px] tracking-wideest uppercase text-white/50 font-light">
          <span className="text-eira-gold font-mono text-[10px] mb-1">
            0{currentSlide + 1} &mdash; 0{HERO_SLIDES.length}
          </span>
          <span>(Scroll to discover)</span>
        </div>
      </div>
    </header>
  );
}
