import { createClient } from "@sanity/client";
import { EXPERIENCES, STORIES } from "../data/collection.js";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "oc9e7l2q",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

async function seed() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.log("ℹ️  To seed your Sanity dataset automatically:");
    console.log("   1. Go to https://sanity.io/manage/project/oc9e7l2q/api");
    console.log("   2. Generate an API token with 'Editor' or 'Write' permissions.");
    console.log("   3. Run: SANITY_API_WRITE_TOKEN=your_token node sanity/seed.mjs");
    return;
  }

  console.log("🌱 Seeding The Eira Collection to Sanity project oc9e7l2q...");

  // Seed experiences
  for (const exp of EXPERIENCES) {
    const doc = {
      _id: `experience-${exp.id}`,
      _type: "experience",
      name: exp.name,
      slug: { _type: "slug", current: exp.slug },
      type: exp.type,
      country: exp.country,
      countryCode: exp.countryCode,
      city: exp.city,
      locationString: exp.locationString,
      distinction: exp.distinction,
      style: exp.style,
      priceLevel: exp.priceLevel,
      priceIndication: exp.priceIndication,
      chefOrHost: exp.chefOrHost,
      sommelierOrCellar: exp.sommelierOrCellar,
      architect: exp.architect,
      bookingUrl: exp.bookingUrl,
      openingHours: exp.openingHours,
      address: exp.address,
      quote: exp.quote,
      editorialExcerpt: exp.editorialExcerpt,
      editorialBody: exp.editorialBody,
      features: exp.features,
      isFeatured: exp.isFeatured || false,
      isSpotlight: exp.isSpotlight || false,
      coordinates: exp.coordinates,
    };

    await client.createOrReplace(doc);
    console.log(`✓ Seeded experience: ${exp.name}`);
  }

  // Seed stories
  for (const story of STORIES) {
    const doc = {
      _id: `story-${story.id}`,
      _type: "story",
      title: story.title,
      slug: { _type: "slug", current: story.slug },
      category: story.category,
      readTime: story.readTime,
      date: story.date,
      excerpt: story.excerpt,
      content: story.content,
    };

    await client.createOrReplace(doc);
    console.log(`✓ Seeded story: ${story.title}`);
  }

  console.log("🎉 Seeding complete! All data is now live in Sanity.");
}

seed().catch(console.error);
