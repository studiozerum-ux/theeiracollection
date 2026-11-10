import { defineField, defineType } from "sanity";

export const cinemaReelType = defineType({
  name: "cinemaReel",
  title: "Cinema Reel (Film Direction)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Film Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location / Property",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Runtime (e.g. 2:14)",
      type: "string",
    }),
    defineField({
      name: "aspect",
      title: "Optical Format (e.g. 2.39:1 Anamorphic, 65mm)",
      type: "string",
    }),
    defineField({
      name: "tag",
      title: "Category / Genre Tag",
      type: "string",
    }),
    defineField({
      name: "directorNote",
      title: "Director's Atmospheric Note",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Keyframe Master (Still Image)",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "videoUrl",
      title: "Video Stream URL (MP4 / HLS / Vimeo Pro)",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "image",
    },
  },
});
