import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "the-eira-collection",
  title: "The Eira Collection Atelier",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "oc9e7l2q",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
