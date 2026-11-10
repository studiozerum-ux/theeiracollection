"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function DispatchNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      {/* For Hoteliers & Restaurateurs CTA */}
      <section className="py-20 md:py-28 bg-[#F1F4F8] border-b border-black/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="block text-[11px] tracking-[0.25em] uppercase font-semibold text-slate-400 mb-3">
                For Rooms &amp; Sanctuaries
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#06080C] mb-4">
                Open your doors to the right guests.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed max-w-2xl mb-8 font-light">
                Present your restaurant or boutique hotel to a dedicated audience of travelers who plan entire journeys around the table. Inclusion is selective and by editorial review only.
              </p>
              <Link
                href="/get-listed"
                className="inline-flex items-center gap-2 bg-[#06080C] hover:bg-slate-800 text-white text-xs font-semibold tracking-wider uppercase px-7 py-3.5 rounded-full transition-all group"
              >
                <span>Apply for inclusion</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end gap-8 pt-6 lg:pt-0 border-t lg:border-t-0 border-slate-200">
              <div>
                <span className="font-serif text-4xl text-[#06080C] block font-light">
                  14
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-400 block mt-1">
                  Countries Covered
                </span>
              </div>
              <div>
                <span className="font-serif text-4xl text-[#06080C] block font-light">
                  48h
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-400 block mt-1">
                  Review Cycle
                </span>
              </div>
              <div>
                <span className="font-serif text-4xl text-[#06080C] block font-light">
                  1&times;
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-400 block mt-1">
                  Editorial Review
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Eira Dispatch */}
      <section id="dispatch" className="py-20 md:py-28 bg-white border-b border-black/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#06080C] mb-4">
                The Eira Dispatch.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-xl font-light">
                Once a month: newly unveiled dining rooms, private sanctuaries, and travel stories from the road. Deliberately brief, strictly substantive.
              </p>

              {subscribed ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-4 rounded-md text-sm">
                  Thank you for subscribing. You will receive our next monthly dispatch.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    required
                    className="flex-1 bg-[#F8F9FA] border border-slate-200 px-5 py-3 rounded-full text-sm text-[#06080C] focus:outline-none focus:border-slate-800 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-[#06080C] hover:bg-slate-800 text-white text-xs font-semibold tracking-wider uppercase px-7 py-3 rounded-full transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
              <span className="text-[11px] text-slate-400 block mt-3">
                By subscribing you agree to our privacy policy. No spam, ever.
              </span>
            </div>

            <div className="lg:col-span-5 flex flex-wrap gap-2.5">
              <span className="w-full text-[10px] tracking-widest uppercase font-semibold text-slate-400 block mb-1">
                Featured Geography
              </span>
              {["Norway", "Denmark", "Sweden", "France", "Switzerland", "Japan"].map((country) => (
                <Link
                  key={country}
                  href={`/explore?country=${country}`}
                  className="px-4 py-2 bg-white border border-slate-200/80 rounded-full text-xs font-medium text-slate-700 hover:border-slate-800 transition-colors"
                >
                  {country}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
