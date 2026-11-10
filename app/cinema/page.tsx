"use client";

import React, { useState } from "react";
import { ArrowUpRight, Film, Check, Sparkles, Shield } from "lucide-react";

export default function CinemaPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    property: "",
    location: "",
    contact: "",
    email: "",
    tier: "vignette",
    timing: "2026",
    vision: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#06080C] text-white min-h-screen pb-32">
      {/* Editorial Cinema Header */}
      <header className="py-24 sm:py-32 border-b border-white/[0.08] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-slate-400/[0.03] blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-slate-400 text-xs">✦</span>
            <span className="text-[10px] tracking-wideest uppercase font-semibold text-slate-400">
              Eira Visual Direction &middot; Cinema Atelier
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white leading-[1] max-w-4xl mb-6">
            Cinematic Direction &amp; Film Atelier for World-Class Rooms
          </h1>

          <p className="text-slate-300 text-base sm:text-xl font-light max-w-3xl leading-relaxed">
            We collaborate with Michelin-starred dining rooms, Relais &amp; Châteaux estates, and remote sanctuaries to craft bespoke, contemplative 4K cinema films that honor the quiet choreography of exceptional hospitality.
          </p>
        </div>
      </header>

      {/* Philosophy Statement */}
      <section className="py-20 md:py-24 border-b border-white/[0.08] bg-[#0D1117]/50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <span className="text-[10px] tracking-wideest uppercase font-semibold text-slate-400 block mb-2">
                Our Cine Manifesto
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
                Why Cinema, not Content.
              </h2>
            </div>

            <div className="md:col-span-8 flex flex-col gap-6 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              <p>
                The luxury hospitality world has been saturated with breathless, fast-cut social media videos that demean the quiet reverence of a master chef’s work or the architectural silence of a mountain sanctuary.
              </p>
              <p>
                At Eira Cinema, our cameras move at the speed of human observation. We utilize cinema-grade anamorphic lenses, natural window light, and custom spatial soundscapes to evoke the emotional texture of being in the room: the whisper of steam rising from a dashi reduction, the heavy linen curtains swaying in the coastal breeze, the tactile grain of hand-thrown ceramics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Film Works Gallery */}
      <section className="py-24 border-b border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[10px] tracking-wideest uppercase font-semibold text-slate-400 block mb-2">
                Selected Film Archive
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
                Recent Works &amp; Residencies
              </h2>
            </div>
            <span className="text-xs text-slate-400 tracking-wider hidden sm:block">
              Recorded in 4K DCI &middot; 35mm Master
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Under: Subsea Light & Memory",
                location: "Lindesnes, Norway",
                duration: "2:14",
                category: "Marine Monolith",
                image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1400&auto=format&fit=crop",
              },
              {
                title: "Falsled Kro: Dawn at the Pass",
                location: "Funen, Denmark",
                duration: "1:48",
                category: "Relais & Châteaux Heritage",
                image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop",
              },
              {
                title: "Juvet: The Architecture of Wind and Pine",
                location: "Valldal, Norway",
                duration: "2:36",
                category: "Landscape Sanctuary",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1400&auto=format&fit=crop",
              },
              {
                title: "Schloss Schauenstein: Graubünden Autumn",
                location: "Fürstenau, Switzerland",
                duration: "3:08",
                category: "Three-Starred Castle",
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop",
              },
            ].map((film) => (
              <div
                key={film.title}
                className="group relative aspect-[16/10] rounded-md overflow-hidden bg-slate-900 border border-white/[0.08]"
              >
                <img
                  src={film.image}
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100 filter brightness-[0.88] contrast-[1.05] saturate-[0.88]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 flex flex-col justify-between p-6 sm:p-8">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] tracking-widest uppercase font-semibold text-slate-300 border border-white/10">
                      {film.category}
                    </span>
                    <span className="text-[11px] text-white/70 font-mono font-medium">
                      {film.duration}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] tracking-wideest uppercase text-slate-400 font-semibold block mb-1">
                      {film.location}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
                      {film.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Inquiry Form & Package Grid */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <span className="text-[10px] tracking-wideest uppercase font-semibold text-slate-400 block mb-3">
                Commissions &middot; Booking Inquiries
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-light mb-4">
                Commission a Film for Your Property
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8 font-light">
                To preserve artistic integrity, our atelier accepts a strictly limited calendar of twelve film commissions per calendar year. Please provide brief details regarding your venue and preferred production window.
              </p>

              {submitted ? (
                <div className="p-8 sm:p-12 bg-white/[0.03] border border-white/15 rounded-md text-center">
                  <span className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6" />
                  </span>
                  <h3 className="font-serif text-3xl text-white mb-2 font-light">
                    Inquiry Received
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-6 font-light">
                    Our Creative Director will review your property details and contact you within 48 hours to schedule a private video consultation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-wider text-slate-300 hover:text-white hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Property or Restaurant Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.property}
                      onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                      placeholder="e.g. Domaine des Cèdres"
                      className="w-full bg-white/[0.04] border border-white/15 px-4 py-3 rounded-md text-sm text-white placeholder-white/30 focus:outline-none focus:border-slate-400 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-semibold mb-2">
                        Location (City &amp; Country) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Provence, France"
                        className="w-full bg-white/[0.04] border border-white/15 px-4 py-3 rounded-md text-sm text-white placeholder-white/30 focus:outline-none focus:border-slate-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-semibold mb-2">
                        Commission Tier *
                      </label>
                      <select
                        value={formData.tier}
                        onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                        className="w-full bg-[#121720] border border-white/15 px-4 py-3 rounded-md text-sm text-white focus:outline-none focus:border-slate-400 transition-colors"
                      >
                        <option value="vignette">The Sensory Vignette (90-120s)</option>
                        <option value="documentary">The Terroir Documentary (5-8m)</option>
                        <option value="archive">The Four Seasons Residency (Annual)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-semibold mb-2">
                        Contact Person &middot; Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="General Manager / Owner"
                        className="w-full bg-white/[0.04] border border-white/15 px-4 py-3 rounded-md text-sm text-white placeholder-white/30 focus:outline-none focus:border-slate-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-semibold mb-2">
                        Direct Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="direction@property.com"
                        className="w-full bg-white/[0.04] border border-white/15 px-4 py-3 rounded-md text-sm text-white placeholder-white/30 focus:outline-none focus:border-slate-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Atmospheric Notes &middot; The Soul of the Property
                    </label>
                    <textarea
                      rows={4}
                      value={formData.vision}
                      onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                      placeholder="Share what makes your room, kitchen, or landscape extraordinary..."
                      className="w-full bg-white/[0.04] border border-white/15 px-4 py-3 rounded-md text-sm text-white placeholder-white/30 focus:outline-none focus:border-slate-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#06080C] font-semibold text-xs uppercase tracking-wider py-4 rounded-full transition-colors"
                  >
                    <span>Submit Private Commission Inquiry</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Production Standards Column */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="p-8 bg-white/[0.03] border border-white/[0.08] rounded-md flex flex-col gap-6">
                <span className="text-[10px] tracking-wideest uppercase font-semibold text-slate-400 block">
                  Production Standards
                </span>

                <div className="flex gap-4 items-start">
                  <Film className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-white mb-1">
                      Cinema Optics &amp; Large Format
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      Filmed using RED / ARRI large-format digital sensors paired with vintage prime and anamorphic lenses for organic glass distortion and delicate highlight roll-off.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Sparkles className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-white mb-1">
                      Available Light Discipline
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      We avoid harsh artificial studio fixtures in guest areas, relying instead on dawn and dusk natural light, candlelight, and hearth glow to preserve the real atmosphere.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Shield className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-white mb-1">
                      Unobtrusive Choreography
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      Two-person stealth cinematography crew trained to work in harmony with active dinner services and private guests without disruption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
