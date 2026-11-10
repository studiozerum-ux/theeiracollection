"use client";

import React, { useState } from "react";
import { Check, Shield, Clock, Compass } from "lucide-react";

export default function GetListedPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    venueName: "",
    type: "restaurant",
    cityCountry: "",
    websiteUrl: "",
    contactName: "",
    email: "",
    concept: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen pb-28">
      {/* Header */}
      <header className="py-20 md:py-28 bg-[#F1F4F8] border-b border-black/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <span className="block text-[11px] tracking-[0.25em] uppercase font-semibold text-slate-400 mb-3">
            Inclusion &amp; Curated Standards
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#06080C] mb-4">
            Apply for Inclusion
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed font-light">
            The Eira Collection is an independent, selective guide. We present your room to a refined global audience of diners and travelers who value craft above all.
          </p>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-[#F1F4F8] border border-slate-200/80 p-10 rounded-md text-center">
                <span className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </span>
                <h3 className="font-serif text-3xl text-[#06080C] mb-3 font-light">
                  Application Received
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto mb-6 font-light">
                  Thank you for submitting {formData.venueName || "your property"}. Our editorial desk conducts independent reviews within 48 hours and will contact you directly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-wider font-semibold text-slate-900 hover:underline"
                >
                  Submit another property
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#06080C] mb-2">
                    Property or Restaurant Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.venueName}
                    onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                    placeholder="e.g. Restaurant Alabaster"
                    className="w-full bg-[#F8F9FA] border border-slate-200/80 px-4 py-3 rounded-md text-sm text-[#06080C] focus:outline-none focus:border-slate-800 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#06080C] mb-2">
                      Type of Experience *
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full bg-[#F8F9FA] border border-slate-200/80 px-4 py-3 rounded-md text-sm text-[#06080C] focus:outline-none focus:border-slate-800 transition-colors"
                    >
                      <option value="restaurant">Fine Dining Restaurant</option>
                      <option value="stay">Boutique Hotel &amp; Sanctuary</option>
                      <option value="estate">Wine Estate &amp; Relais</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#06080C] mb-2">
                      City, Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cityCountry}
                      onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
                      placeholder="e.g. Bergen, Norway"
                      className="w-full bg-[#F8F9FA] border border-slate-200/80 px-4 py-3 rounded-md text-sm text-[#06080C] focus:outline-none focus:border-slate-800 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#06080C] mb-2">
                      Official Website / Booking URL *
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      placeholder="https://..."
                      className="w-full bg-[#F8F9FA] border border-slate-200/80 px-4 py-3 rounded-md text-sm text-[#06080C] focus:outline-none focus:border-slate-800 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#06080C] mb-2">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="curation@domain.com"
                      className="w-full bg-[#F8F9FA] border border-slate-200/80 px-4 py-3 rounded-md text-sm text-[#06080C] focus:outline-none focus:border-slate-800 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#06080C] mb-2">
                    Culinary / Architectural Statement
                  </label>
                  <textarea
                    rows={4}
                    value={formData.concept}
                    onChange={(e) => setFormData({ ...formData, concept: e.target.value })}
                    placeholder="Briefly describe your culinary philosophy, terroir focus, or architectural concept..."
                    className="w-full bg-[#F8F9FA] border border-slate-200/80 px-4 py-3 rounded-md text-sm text-[#06080C] focus:outline-none focus:border-slate-800 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#06080C] hover:bg-slate-800 text-white text-xs font-semibold tracking-wider uppercase py-4 rounded-full transition-colors mt-2"
                >
                  Submit for Editorial Review
                </button>
              </form>
            )}
          </div>

          {/* Standards & Criteria */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-[#F1F4F8] border border-slate-200/80 rounded-md p-8 flex flex-col gap-6">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 block">
                The Curation Pillars
              </span>

              <div className="flex gap-4 items-start">
                <Shield className="w-5 h-5 text-[#06080C] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#06080C] mb-1">
                    Authentic Consistency
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    We value unwavering technical standard and kitchen execution over short-lived culinary trends.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Compass className="w-5 h-5 text-[#06080C] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#06080C] mb-1">
                    Terroir &amp; Sourcing
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    An honest dialogue between the dish or suite and the natural ecosystem from which it originates.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="w-5 h-5 text-[#06080C] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#06080C] mb-1">
                    48-Hour Assessment
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    Our team reviews submissions discreetly with consideration of culinary guides and architect pedigree.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
