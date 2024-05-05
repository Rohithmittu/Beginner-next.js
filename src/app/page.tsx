import Cards from "@/components/Cards";
import Chooseus from "@/components/Chooseus";
import Creators from "@/components/Creators";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Webinar from "@/components/Webinar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <Chooseus />
      <Cards />
      <Webinar />
      <Creators />
    </main>
  );
}
