import createImageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// https://www.sanity.io/docs/image-url
const imageBuilder = projectId
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

export const urlForImage = (source: any) => {
  if (!imageBuilder || !source) return null;
  return imageBuilder.image(source).auto("format").fit("max");
};
