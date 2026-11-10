import { defineField, defineType } from "sanity";

export const experienceType = defineType({
  name: "experience",
  title: "Experience (Dining & Stays)",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name of Property / Restaurant",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Fine Dining Restaurant", value: "restaurant" },
          { title: "Boutique Hotel & Sanctuary", value: "stay" },
        ],
        layout: "radio",
      },
      initialValue: "restaurant",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "distinction",
      title: "Distinction (e.g. 3 Michelin Stars, Snøhetta Landmark)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "style",
      title: "Atmospheric & Culinary Style",
      type: "string",
      description: "e.g. New Nordic Haute Cuisine, Subsea Marine Gastronomy",
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "countryCode",
      title: "Country Code (ISO 2-letter, e.g. NO, DK, SE)",
      type: "string",
    }),
    defineField({
      name: "city",
      title: "City / District",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "locationString",
      title: "Display Location (e.g. Oslo, Norway)",
      type: "string",
    }),
    defineField({
      name: "priceLevel",
      title: "Price Tier",
      type: "string",
      options: {
        list: ["€€€€", "€€€", "€€"],
      },
      initialValue: "€€€€",
    }),
    defineField({
      name: "priceIndication",
      title: "Price Indication",
      type: "string",
      description: "e.g. Tasting Menu from 4,900 NOK",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Photograph",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Visual Archive (Gallery)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "chefOrHost",
      title: "Head Chef or Host",
      type: "string",
    }),
    defineField({
      name: "sommelierOrCellar",
      title: "Sommelier or Cellar Highlights",
      type: "string",
    }),
    defineField({
      name: "architect",
      title: "Architect & Spatial Design",
      type: "string",
    }),
    defineField({
      name: "bookingUrl",
      title: "Direct Booking / Reservation URL",
      type: "url",
    }),
    defineField({
      name: "openingHours",
      title: "Service / Opening Hours",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Physical Address",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Curator's Quote",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "editorialExcerpt",
      title: "Short Editorial Excerpt (Card Summary)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "editorialBody",
      title: "Full Editorial Narrative",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "features",
      title: "Distinguishing Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "isFeatured",
      title: "Featured on Pass (Homepage Asymmetrical Grid)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isSpotlight",
      title: "Destination of the Month Spotlight",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "coordinates",
      title: "Geographical Coordinates",
      type: "object",
      fields: [
        { name: "lat", title: "Latitude", type: "number" },
        { name: "lng", title: "Longitude", type: "number" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "locationString",
      media: "heroImage",
    },
  },
});
