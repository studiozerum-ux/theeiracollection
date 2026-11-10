import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#06080C] text-white pt-24 pb-12 border-t border-white/[0.08]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand & Ethos */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex flex-col mb-6 group">
                <span className="font-serif text-3xl tracking-[0.2em] font-light text-white">
                  THE EIRA
                </span>
                <span className="text-[8px] tracking-[0.45em] text-slate-400 uppercase font-normal -mt-1">
                  COLLECTION
                </span>
              </Link>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm mb-6 font-light">
                A selective guide to Europe and the world&apos;s most compelling kitchens, dining rooms, and secluded sanctuaries. Kept deliberately small, and chosen with uncompromising consistency.
              </p>
            </div>

            <div className="flex items-center gap-5 text-xs text-slate-400 font-light">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Instagram
              </a>
              <span>&middot;</span>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                X (Twitter)
              </a>
              <span>&middot;</span>
              <a href="mailto:curation@eiracollection.com" className="hover:text-white transition-colors">
                curation@eiracollection.com
              </a>
            </div>
          </div>

          {/* Links 1: Discover */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] tracking-wideest uppercase font-semibold text-slate-400 mb-5">
              Discover
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-slate-400 font-light">
              <li>
                <Link href="/explore" className="hover:text-white transition-colors">
                  The Map &amp; Guide
                </Link>
              </li>
              <li>
                <Link href="/explore?type=restaurant" className="hover:text-white transition-colors">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link href="/explore?type=stay" className="hover:text-white transition-colors">
                  Stays &amp; Sanctuaries
                </Link>
              </li>
              <li>
                <Link href="/cinema" className="text-slate-200 hover:text-white transition-colors flex items-center gap-1 font-medium">
                  <span>✦ Cinema Atelier</span>
                </Link>
              </li>
              <li>
                <Link href="/explore?country=Norway" className="hover:text-white transition-colors">
                  Nordic Heritage
                </Link>
              </li>
              <li>
                <Link href="/magazine" className="hover:text-white transition-colors">
                  Magazine Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Links 2: For Hoteliers & Filmmaking */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] tracking-wideest uppercase font-semibold text-slate-400 mb-5">
              For Hoteliers
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-slate-400 font-light">
              <li>
                <Link href="/get-listed" className="hover:text-white transition-colors">
                  Get Listed
                </Link>
              </li>
              <li>
                <Link href="/cinema" className="hover:text-white transition-colors">
                  Film Commissions
                </Link>
              </li>
              <li>
                <Link href="#dispatch" className="hover:text-white transition-colors">
                  The Dispatch
                </Link>
              </li>
              <li>
                <a href="mailto:curation@eiracollection.com" className="hover:text-white transition-colors">
                  Partnerships
                </a>
              </li>
            </ul>
          </div>

          {/* Links 3: Ethos */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] tracking-wideest uppercase font-semibold text-slate-400 mb-5">
              Ethos
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-slate-400 font-light">
              <li>
                <Link href="/magazine/the-art-of-deliberate-scarcity" className="hover:text-white transition-colors">
                  The Art of Scarcity
                </Link>
              </li>
              <li>
                <Link href="/cinema" className="hover:text-white transition-colors">
                  Visual Direction Notes
                </Link>
              </li>
              <li>
                <Link href="/get-listed" className="hover:text-white transition-colors">
                  Curation Standards
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-slate-500 font-light">
          <span>
            &copy; {new Date().getFullYear()} The Eira Collection. Curated with Scandinavian clarity.
          </span>
          <div className="flex gap-6">
            <Link href="/explore" className="hover:text-white">The Map</Link>
            <Link href="/cinema" className="hover:text-white">Cinema</Link>
            <Link href="/magazine" className="hover:text-white">Journal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
