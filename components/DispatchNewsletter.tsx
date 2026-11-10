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
      <section className="py-20 md:py-28 bg-eira-subtle border-b border-eira-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="block text-[11px] tracking-[0.25em] uppercase font-semibold text-eira-muted mb-3">
                For Rooms & Sanctuaries
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-eira-black mb-4">
                Open your doors to the right guests.
              </h2>
              <p className="text-eira-muted text-base leading-relaxed max-w-2xl mb-8">
                Present your restaurant or boutique hotel to a dedicated audience of travelers who plan entire journeys around the table. Inclusion is selective and by editorial review only.
              </p>
              <Link
                href="/get-listed"
                className="inline-flex items-center gap-2 bg-eira-black hover:bg-eira-dark text-white text-xs font-semibold tracking-wider uppercase px-7 py-3.5 rounded-full transition-all"
              >
                <span>Apply for inclusion</span>
                <ArrowUpRight className="w-4 h-4 text-eira-gold" />
              </Link>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end gap-8 pt-6 lg:pt-0 border-t lg:border-t-0 border-eira-border">
              <div>
                <span className="font-serif text-4xl text-eira-black block font-normal">
                  14
                </span>
                <span className="text-[10px] tracking-widest uppercase text-eira-muted block mt-1">
                  Countries Covered
                </span>
              </div>
              <div>
                <span className="font-serif text-4xl text-eira-black block font-normal">
                  48h
                </span>
                <span className="text-[10px] tracking-widest uppercase text-eira-muted block mt-1">
                  Review Cycle
                </span>
              </div>
              <div>
                <span className="font-serif text-4xl text-eira-black block font-normal">
                  1&times;
                </span>
                <span className="text-[10px] tracking-widest uppercase text-eira-muted block mt-1">
                  Editorial Review
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Eira Dispatch */}
      <section id="dispatch" className="py-20 md:py-28 bg-white border-b border-eira-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-eira-black mb-4">
                The Eira Dispatch.
              </h2>
              <p className="text-eira-muted text-base leading-relaxed mb-8 max-w-xl">
                Once a month: newly unveiled dining rooms, private sanctuaries, and travel stories from the road. Deliberately brief, strictly substantive.
              </p>

              {subscribed ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-4 rounded text-sm">
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
                    className="flex-1 bg-white border border-eira-border px-5 py-3 rounded text-sm text-eira-black focus:outline-none focus:border-eira-black transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-eira-black hover:bg-eira-dark text-white text-xs font-semibold tracking-wider uppercase px-7 py-3 rounded transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
              <span className="text-[11px] text-eira-muted block mt-3">
                By subscribing you agree to our privacy policy. No spam, ever.
              </span>
            </div>

            <div className="lg:col-span-5 flex flex-wrap gap-2.5">
              <span className="w-full text-[10px] tracking-widest uppercase font-semibold text-eira-muted block mb-1">
                Featured Geography
              </span>
              {["Norway", "Denmark", "Sweden", "France", "Switzerland", "Japan"].map((country) => (
                <Link
                  key={country}
                  href={`/explore?country=${country}`}
                  className="px-4 py-2 bg-white border border-eira-border rounded-full text-xs font-medium text-eira-black hover:border-eira-black transition-colors"
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
