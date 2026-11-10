import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@sanity/client";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// Auto-read .env.local if present
const envLocalPath = path.join(rootDir, ".env.local");
if (fs.existsSync(envLocalPath)) {
  const content = fs.readFileSync(envLocalPath, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const idx = trimmed.indexOf("=");
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

// Check CLI arguments for token (e.g. `npm run seed -- sk...` or `node sanity/seed.mjs sk...`)
const cliToken = process.argv.slice(2).find((arg) => arg.startsWith("sk") || arg.length > 20);
const token = cliToken || process.env.SANITY_API_WRITE_TOKEN;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "oc9e7l2q";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

console.log("\n=======================================================");
console.log("  THE EIRA COLLECTION — SANITY SEEDING TOOL");
console.log("=======================================================\n");

if (!token) {
  console.log("⚠️  Mangler Sanity API Write Token (sk...)\n");
  console.log("For at skriptet skal få lov til å skrive til prosjektet ditt i Sanity:");
  console.log("1. Åpne denne lenken i nettleseren:");
  console.log(`   👉 https://sanity.io/manage/project/${projectId}/api#tokens\n`);
  console.log("2. Klikk på 'Add API token':");
  console.log("   - Gi den navnet f.eks: 'Eira Seeder'");
  console.log("   - Velg Permissions: 'Editor' (eller 'Administrator')");
  console.log("   - Klikk 'Save' og kopier nøkkelen (starter med sk...)\n");
  console.log("3. Kjør deretter seedingen på én av to måter:\n");
  console.log("   Alternativ A (Direkte med nøkkel som argument):");
  console.log("   npm run seed -- skDIN_NØKKEL_HER\n");
  console.log("   Alternativ B (Legg i .env.local):");
  console.log("   Legg til denne linjen i .env.local:");
  console.log("   SANITY_API_WRITE_TOKEN=skDIN_NØKKEL_HER");
  console.log("   og kjør deretter: npm run seed\n");
  console.log("=======================================================\n");
  process.exit(0);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

async function runSeed() {
  console.log(`📡 Kobler til Sanity prosjekt '${projectId}' (dataset: '${dataset}')...\n`);

  const seedDataPath = path.join(__dirname, "seed-data.json");
  if (!fs.existsSync(seedDataPath)) {
    throw new Error(`Fant ikke ${seedDataPath}. Sjekk at filen eksisterer.`);
  }

  const { EXPERIENCES, STORIES } = JSON.parse(fs.readFileSync(seedDataPath, "utf-8"));

  console.log(`🌿 Laster opp ${EXPERIENCES.length} curated experiences...`);

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
      externalImageUrl: exp.heroImage,
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
      isFeatured: Boolean(exp.isFeatured),
      isSpotlight: Boolean(exp.isSpotlight),
      coordinates: exp.coordinates,
    };

    await client.createOrReplace(doc);
    console.log(`   ✓ [Experience] ${exp.name} (${exp.locationString})`);
  }

  console.log(`\n📰 Laster opp ${STORIES.length} magasin-artikler...`);

  for (const story of STORIES) {
    const doc = {
      _id: `story-${story.id}`,
      _type: "story",
      title: story.title,
      slug: { _type: "slug", current: story.slug },
      category: story.category,
      readTime: story.readTime,
      date: story.date,
      externalImageUrl: story.image,
      excerpt: story.excerpt,
      content: story.content,
    };

    await client.createOrReplace(doc);
    console.log(`   ✓ [Story] ${story.title}`);
  }

  console.log("\n=======================================================");
  console.log("🎉 Seeding fullført! Alle oppføringer er nå publisert i Sanity.");
  console.log(`   Se dokumentene dine på: https://sanity.io/manage/project/${projectId}`);
  console.log("   Eller åpne Sanity Studio med: npm run studio");
  console.log("=======================================================\n");
}

runSeed().catch((err) => {
  console.error("\n❌ Feil under seeding til Sanity:", err.message);
  if (err.statusCode === 401 || err.statusCode === 403) {
    console.error("   Tokenet ditt har ikke tilstrekkelige skriverettigheter. Husk å velge 'Editor' rettighet.");
  }
  process.exit(1);
});
