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
      <div className="border-b border-eira-border py-4 bg-white text-xs text-eira-muted">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center gap-2">
          <Link href="/" className="hover:text-eira-black transition-colors">
            Collection
          </Link>
          <span>/</span>
          <Link href="/explore" className="hover:text-eira-black transition-colors">
            {experience.type === "restaurant" ? "Restaurants" : "Stays"}
          </Link>
          <span>/</span>
          <span className="text-eira-black font-semibold">{experience.name}</span>
        </div>
      </div>

      {/* Header Info */}
      <header className="py-12 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-eira-black text-eira-gold text-[10px] tracking-widest uppercase font-semibold px-3 py-1 rounded">
              {experience.distinction}
            </span>
            <span className="bg-eira-sand text-eira-black text-xs font-medium px-3 py-1 rounded flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-eira-gold" />
              {experience.locationString}
            </span>
            <span className="text-xs text-eira-muted font-medium">
              {experience.style}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-eira-black mb-4">
            {experience.name}
          </h1>

          <p className="text-eira-muted text-lg sm:text-xl max-w-3xl leading-relaxed">
            {experience.editorialExcerpt}
          </p>
        </div>
      </header>

      {/* Full-width Hero Visual */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
        <div className="relative aspect-[21/10] rounded overflow-hidden shadow-xl bg-black">
          <img
            src={experience.heroImage}
            alt={experience.name}
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-6 right-6 bg-eira-black/80 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded">
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
            <blockquote className="border-l-2 border-eira-gold pl-6 py-2">
              <p className="font-serif text-2xl sm:text-3xl text-eira-black italic font-normal leading-snug mb-3">
                {experience.quote}
              </p>
              <cite className="text-[11px] uppercase tracking-widest text-eira-gold font-semibold not-italic">
                &mdash; The Eira Collection Curation Notes
              </cite>
            </blockquote>

            {/* Narrative Paragraphs */}
            <div className="prose prose-neutral max-w-none text-base sm:text-lg text-neutral-800 leading-relaxed flex flex-col gap-6">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-eira-muted block">
                Editorial Review
              </span>
              {experience.editorialBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Gallery Grid */}
            {experience.gallery.length > 0 && (
              <div className="pt-8 border-t border-eira-border">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-eira-muted block mb-4">
                  Visual Archive
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {experience.gallery.map((imgUrl, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded overflow-hidden bg-black">
                      <img
                        src={imgUrl}
                        alt={`${experience.name} gallery image`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {experience.features.length > 0 && (
              <div className="pt-8 border-t border-eira-border">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-eira-muted block mb-4">
                  Distinguishing Features
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {experience.features.map((feat) => (
                    <span
                      key={feat}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-eira-sand text-eira-black text-xs font-medium rounded-full"
                    >
                      <Check className="w-3 h-3 text-eira-gold" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Curated Dossier Card */}
          <aside className="lg:col-span-4 sticky top-28">
            <div className="bg-white border border-eira-border rounded p-7 sm:p-9 shadow-sm">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-eira-gold block mb-2">
                Curated Dossier
              </span>
              <h3 className="font-serif text-3xl text-eira-black mb-6 pb-4 border-b border-eira-border">
                {experience.name}
              </h3>

              <dl className="flex flex-col gap-4 text-xs mb-8">
                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-eira-muted font-semibold mb-0.5">
                    Distinction
                  </dt>
                  <dd className="font-semibold text-eira-black">
                    {experience.distinction}
                  </dd>
                </div>

                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-eira-muted font-semibold mb-0.5">
                    Chef &middot; Host
                  </dt>
                  <dd className="text-eira-black">{experience.chefOrHost}</dd>
                </div>

                {experience.sommelierOrCellar && (
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-eira-muted font-semibold mb-0.5">
                      Cellar & Sommelier
                    </dt>
                    <dd className="text-eira-black">
                      {experience.sommelierOrCellar}
                    </dd>
                  </div>
                )}

                {experience.architect && (
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-eira-muted font-semibold mb-0.5">
                      Architect & Design
                    </dt>
                    <dd className="text-eira-black">{experience.architect}</dd>
                  </div>
                )}

                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-eira-muted font-semibold mb-0.5">
                    Pricing Indication
                  </dt>
                  <dd className="text-eira-black">
                    {experience.priceIndication}
                  </dd>
                </div>

                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-eira-muted font-semibold mb-0.5">
                    Service Hours
                  </dt>
                  <dd className="text-eira-black">{experience.openingHours}</dd>
                </div>

                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-eira-muted font-semibold mb-0.5">
                    Location
                  </dt>
                  <dd className="text-eira-black">{experience.address}</dd>
                </div>
              </dl>

              <a
                href={experience.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-eira-black hover:bg-eira-dark text-white text-xs font-semibold tracking-wider uppercase py-3.5 px-4 rounded transition-colors text-center"
              >
                <span>Direct Reservation</span>
                <ArrowUpRight className="w-4 h-4 text-eira-gold" />
              </a>

              <span className="block text-center text-[10px] text-eira-muted mt-3">
                Curated independently by The Eira Collection.
              </span>
            </div>
          </aside>
        </div>

        {/* Similar Rooms Section */}
        <div className="mt-24 pt-16 border-t border-eira-border">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-3xl text-eira-black font-light">
              Other rooms worth the journey
            </h3>
            <Link href="/explore" className="text-xs font-semibold uppercase tracking-wider text-eira-gold hover:underline">
              View all &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similar.map((s) => (
              <Link
                key={s.id}
                href={`/experiences/${s.slug}`}
                className="group flex flex-col bg-white border border-eira-border rounded overflow-hidden hover:border-neutral-400 hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={s.heroImage}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-eira-black/80 text-white text-[9px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded">
                    {s.distinction}
                  </span>
                </div>
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-eira-muted block mb-1">
                      {s.locationString}
                    </span>
                    <h4 className="font-serif text-xl text-eira-black mb-1 group-hover:text-eira-gold transition-colors">
                      {s.name}
                    </h4>
                  </div>
                  <span className="text-xs text-eira-gold font-semibold pt-3 mt-3 border-t border-eira-border">
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
