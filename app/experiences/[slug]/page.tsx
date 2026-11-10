import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, MapPin, Check } from "lucide-react";
import { EXPERIENCES } from "@/data/collection";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return EXPERIENCES.map((exp) => ({
    slug: exp.slug,
  }));
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const experience = EXPERIENCES.find((e) => e.slug === slug);

  if (!experience) {
    notFound();
  }

  const similar = EXPERIENCES.filter((e) => e.slug !== slug).slice(0, 3);

  return (
    <article className="bg-white min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-slate-200/80 py-4 bg-[#F8F9FA] text-xs text-slate-400">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center gap-2">
          <Link href="/" className="hover:text-[#06080C] transition-colors">
            Collection
          </Link>
          <span>/</span>
          <Link href="/explore" className="hover:text-[#06080C] transition-colors">
            {experience.type === "restaurant" ? "Restaurants" : "Stays"}
          </Link>
          <span>/</span>
          <span className="text-[#06080C] font-semibold">{experience.name}</span>
        </div>
      </div>

      {/* Header Info */}
      <header className="py-12 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#06080C] text-slate-100 text-[10px] tracking-widest uppercase font-semibold px-3 py-1 rounded-full">
              {experience.distinction}
            </span>
            <span className="bg-[#F1F4F8] text-[#06080C] text-xs font-medium px-3.5 py-1 rounded-full flex items-center gap-1.5 border border-slate-200/60">
              <MapPin className="w-3 h-3 text-slate-400" />
              {experience.locationString}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {experience.style}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#06080C] mb-4">
            {experience.name}
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl max-w-3xl leading-relaxed font-light">
            {experience.editorialExcerpt}
          </p>
        </div>
      </header>

      {/* Full-width Hero Visual */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
        <div className="relative aspect-[21/10] rounded-md overflow-hidden shadow-xl bg-slate-900 border border-slate-200/80">
          <img
            src={experience.heroImage}
            alt={experience.name}
            className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05] saturate-[0.88]"
          />
          <span className="absolute bottom-6 right-6 bg-black/75 backdrop-blur-md text-white text-xs font-medium px-4 py-2 rounded-full border border-white/10">
            {experience.priceLevel} &middot; {experience.priceIndication}
          </span>
        </div>
      </div>

      {/* Editorial Body & Dossier Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative, Quote, Gallery */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {/* Editorial Quote */}
            <blockquote className="border-l-2 border-[#06080C] pl-6 py-2">
              <p className="font-serif text-2xl sm:text-3xl text-[#06080C] italic font-light leading-snug mb-3">
                {experience.quote}
              </p>
              <cite className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold not-italic">
                &mdash; The Eira Collection Curation Notes
              </cite>
            </blockquote>

            {/* Narrative Paragraphs */}
            <div className="prose prose-neutral max-w-none text-base sm:text-lg text-slate-700 leading-relaxed flex flex-col gap-6 font-light">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-slate-400 block">
                Editorial Review
              </span>
              {experience.editorialBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Gallery Grid */}
            {experience.gallery.length > 0 && (
              <div className="pt-8 border-t border-slate-200/80">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-slate-400 block mb-4">
                  Visual Archive
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {experience.gallery.map((imgUrl, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded-md overflow-hidden bg-slate-900 border border-slate-200/80">
                      <img
                        src={imgUrl}
                        alt={`${experience.name} gallery image`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 filter brightness-[0.92] contrast-[1.05] saturate-[0.88]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {experience.features.length > 0 && (
              <div className="pt-8 border-t border-slate-200/80">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-slate-400 block mb-4">
                  Distinguishing Features
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {experience.features.map((feat) => (
                    <span
                      key={feat}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F1F4F8] text-slate-800 text-xs font-medium rounded-full border border-slate-200/60"
                    >
                      <Check className="w-3 h-3 text-slate-900" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Curated Dossier Card */}
          <aside className="lg:col-span-4 sticky top-28">
            <div className="bg-white border border-slate-200/80 rounded-md p-7 sm:p-9 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 block mb-2">
                Curated Dossier
              </span>
              <h3 className="font-serif text-3xl text-[#06080C] mb-6 pb-4 border-b border-slate-200/80 font-light">
                {experience.name}
              </h3>

              <dl className="flex flex-col gap-4 text-xs mb-8">
                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-0.5">
                    Distinction
                  </dt>
                  <dd className="font-semibold text-[#06080C]">
                    {experience.distinction}
                  </dd>
                </div>

                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-0.5">
                    Chef &middot; Host
                  </dt>
                  <dd className="text-slate-800">{experience.chefOrHost}</dd>
                </div>

                {experience.sommelierOrCellar && (
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-0.5">
                      Cellar &amp; Sommelier
                    </dt>
                    <dd className="text-slate-800">
                      {experience.sommelierOrCellar}
                    </dd>
                  </div>
                )}

                {experience.architect && (
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-0.5">
                      Architect &amp; Design
                    </dt>
                    <dd className="text-slate-800">{experience.architect}</dd>
                  </div>
                )}

                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-0.5">
                    Pricing Indication
                  </dt>
                  <dd className="text-slate-800">
                    {experience.priceIndication}
                  </dd>
                </div>

                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-0.5">
                    Service Hours
                  </dt>
                  <dd className="text-slate-800">{experience.openingHours}</dd>
                </div>

                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-0.5">
                    Location
                  </dt>
                  <dd className="text-slate-800">{experience.address}</dd>
                </div>
              </dl>

              <a
                href={experience.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#06080C] hover:bg-slate-800 text-white text-xs font-semibold tracking-wider uppercase py-3.5 px-4 rounded-full transition-colors text-center group"
              >
                <span>Direct Reservation</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <span className="block text-center text-[10px] text-slate-400 mt-3 font-light">
                Curated independently by The Eira Collection.
              </span>
            </div>
          </aside>
        </div>

        {/* Similar Rooms Section */}
        <div className="mt-24 pt-16 border-t border-slate-200/80">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-3xl text-[#06080C] font-light">
              Other rooms worth the journey
            </h3>
            <Link href="/explore" className="text-xs font-semibold uppercase tracking-wider text-slate-900 hover:underline">
              View all &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similar.map((s) => (
              <Link
                key={s.id}
                href={`/experiences/${s.slug}`}
                className="group flex flex-col bg-white border border-slate-200/80 rounded-md overflow-hidden hover:border-slate-400 hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={s.heroImage}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.92] contrast-[1.05] saturate-[0.88]"
                  />
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[9px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full border border-white/10">
                    {s.distinction}
                  </span>
                </div>
                <div className="p-5 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                      {s.locationString}
                    </span>
                    <h4 className="font-serif text-xl text-[#06080C] mb-1 group-hover:text-slate-600 transition-colors font-light">
                      {s.name}
                    </h4>
                  </div>
                  <span className="text-xs text-slate-900 font-semibold pt-3 mt-3 border-t border-slate-100 uppercase tracking-wider text-[11px]">
                    View room &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
