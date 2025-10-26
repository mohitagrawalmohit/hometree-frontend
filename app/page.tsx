import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import FirmIntro from "@/components/FirmIntro";


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FirmIntro />
       <FeaturedProjects />
     
    </main>
  );
}
