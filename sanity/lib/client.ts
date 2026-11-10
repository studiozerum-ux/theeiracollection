import { createClient } from "next-sanity";
import { EXPERIENCES, STORIES, Experience, MagazineStory } from "@/data/collection";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

// Create client only if projectId is present
export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false, // Set to false for fresh on-demand content
    })
  : null;

/**
 * Fetch all curated experiences.
 * If Sanity is configured and holds data, returns live Sanity documents.
 * Otherwise, falls back smoothly to the local verified dataset.
 */
export async function getExperiences(): Promise<Experience[]> {
  if (!client) return EXPERIENCES;

  try {
    const data = await client.fetch<Experience[]>(
      `*[_type == "experience"] | order(_createdAt desc) {
        "id": _id,
        "slug": slug.current,
        name,
        type,
        country,
        countryCode,
        city,
        locationString,
        distinction,
        style,
        priceLevel,
        priceIndication,
        "heroImage": heroImage.asset->url,
        "gallery": gallery[].asset->url,
        chefOrHost,
        sommelierOrCellar,
        architect,
        bookingUrl,
        openingHours,
        address,
        quote,
        editorialExcerpt,
        editorialBody,
        features,
        isFeatured,
        isSpotlight,
        coordinates
      }`
    );
    return data && data.length > 0 ? data : EXPERIENCES;
  } catch (error) {
    console.warn("Could not fetch experiences from Sanity, falling back to local dataset:", error);
    return EXPERIENCES;
  }
}

/**
 * Fetch a single experience by slug.
 */
export async function getExperienceBySlug(slug: string): Promise<Experience | undefined> {
  if (!client) return EXPERIENCES.find((e) => e.slug === slug);

  try {
    const item = await client.fetch<Experience>(
      `*[_type == "experience" && slug.current == $slug][0] {
        "id": _id,
        "slug": slug.current,
        name,
        type,
        country,
        countryCode,
        city,
        locationString,
        distinction,
        style,
        priceLevel,
        priceIndication,
        "heroImage": heroImage.asset->url,
        "gallery": gallery[].asset->url,
        chefOrHost,
        sommelierOrCellar,
        architect,
        bookingUrl,
        openingHours,
        address,
        quote,
        editorialExcerpt,
        editorialBody,
        features,
        isFeatured,
        isSpotlight,
        coordinates
      }`,
      { slug }
    );
    return item || EXPERIENCES.find((e) => e.slug === slug);
  } catch (error) {
    return EXPERIENCES.find((e) => e.slug === slug);
  }
}

/**
 * Fetch all magazine stories.
 */
export async function getStories(): Promise<MagazineStory[]> {
  if (!client) return STORIES;

  try {
    const data = await client.fetch<MagazineStory[]>(
      `*[_type == "story"] | order(_createdAt desc) {
        "id": _id,
        "slug": slug.current,
        title,
        category,
        readTime,
        date,
        "image": image.asset->url,
        excerpt,
        content
      }`
    );
    return data && data.length > 0 ? data : STORIES;
  } catch (error) {
    return STORIES;
  }
}
