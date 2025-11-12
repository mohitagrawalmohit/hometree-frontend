import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import FirmIntro from "@/components/FirmIntro";
import VisionMissionValues from "@/components/VisionMissionValues";
import OurServices from "@/components/OurServices";
import WhyChooseHometree from "@/components/WhyChooseHometree";
import FounderSection from "@/components/FounderSection";


export default function HomePage() {
  return (
    <main
      className="min-h-screen bg-fixed bg-cover bg-center text-gray-900"
      style={{
        backgroundImage: "url('/main-bg.webp')", // ✅ replace with your real path
      }}
    >
      {/* Semi-transparent overlay for depth & readability */}
      <div className="bg-black/50">
        <Hero />
        <FeaturedProjects />
        <FirmIntro />
        <OurServices />
        <VisionMissionValues /> 
        <WhyChooseHometree />
        <FounderSection />
      </div>
    </main>
  );
}
