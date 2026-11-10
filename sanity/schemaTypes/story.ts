import { defineField, defineType } from "sanity";

export const storyType = defineType({
  name: "story",
  title: "Magazine Story (Journal)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Story Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Editorial Column (e.g. Terroir & Philosophy)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Estimated Read Time (e.g. 6 min read)",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Publication Date (e.g. November 2026)",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Editorial Header Photograph",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "externalImageUrl",
      title: "Fallback External Image URL",
      type: "url",
      description: "Brukes automatisk hvis ingen Sanity-fil er lastet opp enda.",
    }),
    defineField({
      name: "excerpt",
      title: "Story Excerpt (Lead Paragraph)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "content",
      title: "Prose Narrative Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});
