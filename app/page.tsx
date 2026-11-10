import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import FeatureGrid from "@/components/FeatureGrid";
import CinemaSection from "@/components/CinemaSection";
import Spotlight from "@/components/Spotlight";
import HoverList from "@/components/HoverList";
import RegionDirectory from "@/components/RegionDirectory";
import InteractiveMapSection from "@/components/InteractiveMapSection";
import StyleTiles from "@/components/StyleTiles";
import MagazineSection from "@/components/MagazineSection";
import DispatchNewsletter from "@/components/DispatchNewsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <FeatureGrid />
      <CinemaSection />
      <Spotlight />
      <HoverList />
      <RegionDirectory />
      <InteractiveMapSection />
      <StyleTiles />
      <MagazineSection />
      <DispatchNewsletter />
    </>
  );
}
