// app/property/[slug]/page.tsx
import ProjectDetail from "@/components/ProjectDetail";
import type { Metadata } from "next";

interface Props {
  params: { slug?: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params?.slug || "project";
  const titleSlug = slug.replace(/-/g, " ");
  return {
    title: `Project • ${titleSlug} | HomeTree`,
    description:
      "Premium project detail by HomeTree — discover amenities, gallery, location and contact options.",
  };
}

export default function Page({ params }: Props) {
  // Static sample data (replace with API data later)
  const property = {
    id: 1,
    slug: params?.slug || "the-modern-moreland-house",
    name: "The Modern Moreland House",
    tagline: "Luxury living reimagined",
    logo: "/project/project-logo.svg",
    heroImage: "/project/hero.jpg", // full width hero image or video poster
    overviewBg: "/project/overview-bg.webp",
    section3Bg: "/project/section3-bg.jpg",
    galleryBg: "/project/gallery-bg.jpg",
    features: [
      { title: "Kids Play Area", image: "/project/feature-kids.jpg" },
      { title: "Club House", image: "/project/feature-club.jpg" },
      { title: "Park & Greens", image: "/project/feature-park.jpg" },
    ],
    gallery: [
      "/project/gallery1.jpg",
      "/project/gallery2.jpg",
      "/project/gallery3.jpg",
      "/project/gallery4.jpg",
    ],
    amenities: [
      "24/7 Security",
      "Swimming Pool",
      "Gymnasium",
      "Jogging Track",
      "Power Backup",
      "Covered Parking",
    ],
    description:
      "A luxurious modern villa development with spacious layouts, abundant natural light, premium finishes and sustainable design. Prime location with excellent connectivity.",
    locationText: "Sector 150, Noida — Near City Center",
  };

  return <ProjectDetail property={property} />;
}
