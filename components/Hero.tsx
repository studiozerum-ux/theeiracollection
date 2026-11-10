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
    }, 6000);
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
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-eira-black/95 z-10" />
      </div>

      {/* Top Floating Pill Meta */}
      <div className="relative z-20 w-fit">
        <div className="inline-flex items-center gap-3 bg-eira-black/75 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full text-xs text-white">
          <span className="text-[10px] tracking-widest uppercase font-semibold text-eira-gold">
            Featured Destination
          </span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <Link
            href={`/experiences/${active.slug}`}
            className="font-medium hover:text-eira-gold transition-colors flex items-center gap-1.5"
          >
            <span>{active.name}</span>
            <span className="text-white/60 text-[11px]">({active.region})</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-eira-gold" />
          </Link>
        </div>
      </div>

      {/* Bottom Typography & Headline */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <span className="block text-[11px] tracking-[0.25em] uppercase font-semibold text-eira-gold mb-4">
            Gastronomy &middot; Sanctuaries &middot; Europe &middot; Global
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-white max-w-4xl">
            The rooms and tables <br />
            <em className="font-serif italic font-normal text-eira-gold-light">
              worth the journey.
            </em>
          </h1>
        </div>

        <div className="hidden md:flex flex-col items-end text-right text-xs tracking-widest uppercase text-white/60">
          <span>(Scroll down)</span>
          <span className="text-[10px] text-eira-gold mt-1 tracking-widest">
            0{currentSlide + 1} / 0{HERO_SLIDES.length}
          </span>
        </div>
      </div>
    </header>
  );
}
