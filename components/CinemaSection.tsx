"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, Pause, Volume2, VolumeX, ArrowUpRight, Film, Camera } from "lucide-react";

interface CinemaReel {
  id: string;
  title: string;
  location: string;
  duration: string;
  aspect: string;
  directorNote: string;
  image: string;
  tag: string;
}

const CINEMA_REELS: CinemaReel[] = [
  {
    id: "under-film",
    title: "Symphony of the Swell",
    location: "Under & Skagerrak Waters, Norway",
    duration: "2:14",
    aspect: "2.39:1 Anamorphic",
    directorNote: "Captured at dawn during a November gale. Five meters below the tide line, watching cold subsea light wash over Snøhetta’s concrete skin.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop",
    tag: "Subsea Architecture & Marine Gastronomy",
  },
  {
    id: "falsled-film",
    title: "The Quiet Hearth",
    location: "Falsled Kro, Denmark",
    duration: "1:48",
    aspect: "35mm Vintage Spherical",
    directorNote: "Hand-held 35mm capturing early morning smoke rising from the open hearth, damp kitchen herbs, and crystal glasses clinking under 16th-century timbers.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    tag: "Historic Manor & Coastal Terroir",
  },
  {
    id: "juvet-film",
    title: "Architecture of Silence",
    location: "Juvet Landscape Hotel, Norway",
    duration: "2:36",
    aspect: "65mm Large Format",
    directorNote: "A study in glacial water, dark pine cubes, and the absence of noise. The river’s resonance recorded in binaural spatial audio.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
    tag: "Primeval Forest Sanctuary",
  },
  {
    id: "schloss-film",
    title: "Alpine Light & Harvest",
    location: "Schloss Schauenstein, Switzerland",
    duration: "3:08",
    aspect: "2.39:1 Anamorphic",
    directorNote: "Tracing Andreas Caminada’s gardeners through high-altitude cabbage patches as the first autumn snow dusts the Graubünden summits.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
    tag: "Three-Starred Castle Terroir",
  },
];

export default function CinemaSection() {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const activeReel = CINEMA_REELS[activeReelIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#06080C] text-white border-b border-white/[0.08] relative overflow-hidden">
      {/* Delicate background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-slate-400/[0.04] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-slate-400 text-xs">✦</span>
              <span className="text-[10px] tracking-wideest uppercase font-semibold text-slate-400">
                Eira Visual Direction &middot; Cinema Atelier
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-tight">
              Film direction for rooms <br />
              <em className="font-serif italic text-slate-200/90 font-normal">
                in a class of their own.
              </em>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 font-light">
              We do not produce disposable social media reels. We direct poetic, contemplative cinema films that capture the grain of morning light, the quiet choreography of the pass, and the soul of singular hospitality.
            </p>
            <Link
              href="/cinema"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-slate-200 hover:text-white border-b border-slate-300 pb-0.5 transition-colors"
            >
              Explore cinema commissions &rarr;
            </Link>
          </div>
        </div>

        {/* Interactive Cinema Player Showcase */}
        <div className="bg-[#0D1117] border border-white/[0.08] rounded-md overflow-hidden mb-16 shadow-2xl">
          {/* Reel Display Canvas */}
          <div className="relative aspect-[21/10] sm:aspect-[2.2/1] w-full bg-black overflow-hidden group">
            <img
              src={activeReel.image}
              alt={activeReel.title}
              className={`w-full h-full object-cover transition-all duration-1000 filter brightness-[0.88] contrast-[1.06] saturate-[0.88] ${
                isPlaying ? "scale-105 opacity-90" : "scale-100 opacity-70"
              }`}
            />

            {/* Subtle Cine Letterbox Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />

            {/* Top Bar inside Player */}
            <div className="absolute top-5 left-6 right-6 flex items-center justify-between text-xs text-white/80 z-20">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] tracking-widest uppercase font-semibold text-slate-300 border border-white/10">
                  <Film className="w-3 h-3 text-slate-300" />
                  {activeReel.aspect}
                </span>
                <span className="hidden sm:inline text-[11px] text-slate-400">
                  {activeReel.tag}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:border-white/30 transition-all"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-slate-300" />}
                </button>
              </div>
            </div>

            {/* Center Play Indicator */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:scale-105 hover:bg-white hover:text-black hover:border-white transition-all shadow-2xl"
                aria-label={isPlaying ? "Pause reel" : "Play reel"}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 stroke-[1.8]" />
                ) : (
                  <Play className="w-6 h-6 stroke-[1.8] ml-1" />
                )}
              </button>
            </div>

            {/* Bottom Meta Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-20">
              <div className="max-w-xl">
                <span className="text-[10px] tracking-wideest uppercase text-slate-400 font-semibold block mb-1">
                  {activeReel.location} &middot; {activeReel.duration}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-light">
                  {activeReel.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mt-1 hidden sm:block">
                  {activeReel.directorNote}
                </p>
              </div>

              <Link
                href="/cinema"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white hover:text-black backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full transition-all self-start sm:self-auto"
              >
                <span>View film folio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Film Selection Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/[0.08] divide-x divide-white/[0.08]">
            {CINEMA_REELS.map((reel, index) => {
              const isSelected = index === activeReelIndex;
              return (
                <button
                  key={reel.id}
                  onClick={() => setActiveReelIndex(index)}
                  className={`p-4 sm:p-5 text-left transition-all ${
                    isSelected
                      ? "bg-white/[0.07] border-b-2 border-b-slate-200"
                      : "hover:bg-white/[0.02]"
                  }`}
                >
                  <span className="text-[10px] tracking-widest text-slate-400 font-mono block mb-1">
                    0{index + 1} &middot; {reel.duration}
                  </span>
                  <h4 className="font-serif text-base sm:text-lg text-white font-light truncate">
                    {reel.title}
                  </h4>
                  <span className="text-[11px] text-slate-400 block truncate mt-0.5">
                    {reel.location.split(",")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* The Three Curated Commissions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="p-8 bg-white/[0.02] border border-white/[0.08] rounded-md hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <span className="text-[10px] tracking-wideest uppercase text-slate-400 font-semibold block mb-3">
                Commission 01
              </span>
              <h4 className="font-serif text-2xl text-white font-light mb-3">
                The Sensory Vignette
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                A 90 to 120-second cinematic poem created as the digital centerpiece for your flagship presence. Focused on tactile atmosphere, textures, and the emotional resonance of arrival.
              </p>
            </div>
            <ul className="text-xs text-slate-400 flex flex-col gap-2 pt-4 border-t border-white/[0.08] font-light">
              <li>&middot; 4K DCI Anamorphic Cinema Master</li>
              <li>&middot; Bespoke Spatial Sound Composition</li>
              <li>&middot; Licensed for Global Digital Rights</li>
            </ul>
          </div>

          <div className="p-8 bg-white/[0.02] border border-white/[0.08] rounded-md hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <span className="text-[10px] tracking-wideest uppercase text-slate-400 font-semibold block mb-3">
                Commission 02
              </span>
              <h4 className="font-serif text-2xl text-white font-light mb-3">
                The Terroir Documentary
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                A 5 to 8-minute editorial documentary film tracing the human narrative: following the head chef with divers at dawn, the historic vineyard harvest, or the architectural restoration.
              </p>
            </div>
            <ul className="text-xs text-slate-400 flex flex-col gap-2 pt-4 border-t border-white/[0.08] font-light">
              <li>&middot; In-depth Director &amp; Sound Crew</li>
              <li>&middot; Editorial Archival Grade Cut</li>
              <li>&middot; Featured in The Eira Collection Cinema</li>
            </ul>
          </div>

          <div className="p-8 bg-white/[0.02] border border-white/[0.08] rounded-md hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <span className="text-[10px] tracking-wideest uppercase text-slate-400 font-semibold block mb-3">
                Commission 03
              </span>
              <h4 className="font-serif text-2xl text-white font-light mb-3">
                The Four Seasons Archive
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                An annual residency documenting the metamorphosis of your sanctuary across winter snow, spring awakening, summer harvest, and autumn calm.
              </p>
            </div>
            <ul className="text-xs text-slate-400 flex flex-col gap-2 pt-4 border-t border-white/[0.08] font-light">
              <li>&middot; Four Quarterly Production Visits</li>
              <li>&middot; Complete Year-Round Visual Suite</li>
              <li>&middot; Private Archival Book &amp; Film Box</li>
            </ul>
          </div>
        </div>

        {/* Footer Commission Action */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <Camera className="w-4 h-4 text-slate-300" />
            <span>Commissions are limited to twelve properties annually worldwide.</span>
          </div>
          <Link
            href="/cinema"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#06080C] text-xs font-semibold tracking-wider uppercase px-7 py-3 rounded-full transition-all"
          >
            <span>Request Cinema Portfolio &middot; Bookings 2026/2027</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
