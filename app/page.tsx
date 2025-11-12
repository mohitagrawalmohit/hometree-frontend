import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import FirmIntro from "@/components/FirmIntro";
import VisionMissionValues from "@/components/VisionMissionValues";
import OurServices from "@/components/OurServices";
import WhyChooseHometree from "@/components/WhyChooseHometree";
import FounderSection from "@/components/FounderSection";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main
      className="
        min-h-screen text-gray-900 
        bg-fixed bg-cover bg-center 
        bg-[url('/main-bg-mobile.webp')]   /* 📱 Mobile background */
        md:bg-[url('/main-bg.webp')]       /* 💻 Desktop background */
        md:bg-cover md:bg-center md:bg-fixed
      "
      style={{
        // ✅ Fine-tuned background behavior for mobile
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // fills height & width
        backgroundPosition: "center top", // better for vertical mobile layout
        minHeight: "100vh",
        width: "100%",
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
        <Testimonials />
        
        
      </div>
    </main>
  );
}
