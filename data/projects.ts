// data/projects.ts

export const projectsData = [
  {
    id: 1,
    slug: "the-modern-moreland-house",
    name: "The Modern Moreland House",
    tagline: "Luxury living reimagined",
    logo: "/project/project-logo.svg",
    heroImage: "/project/hero.jpg",
    overviewBg: "/project/overview-bg.webp",
    section3Bg: "/project/section3-bg.jpg",
    galleryBg: "/project/gallery-bg.jpg",
    features: [
      { title: "Kids Play Area", image: "/project/feature-kids.jpg" },
      { title: "Club House", image: "/project/feature-club.jpg" },
      { title: "Park & Greens", image: "/project/feature-park.jpg" }
    ],
    gallery: [
      "/project/gallery1.jpg",
      "/project/gallery2.jpg",
      "/project/gallery3.jpg",
      "/project/gallery4.jpg"
    ],
    amenities: [
      "24/7 Security",
      "Swimming Pool",
      "Gymnasium",
      "Jogging Track",
      "Power Backup",
      "Covered Parking"
    ],
    description:
      "A luxurious modern villa development with spacious layouts, abundant natural light, premium finishes and sustainable design.",
    locationText: "Sector 150, Noida — Near City Center"
  },

  {
    id: 2,
    slug: "jacob-and-co-branded-residences",
    name: "Jacob & Co Branded Residences",
    tagline: "The Epitome of Bespoke Luxury",
    logo: "/projects/jacob/logo.webp",
    heroImage: "/projects/jacob/hero.webp",
    overviewBg: "/projects/jacob/overview-bg.webp",
    section3Bg: "/projects/jacob/section3-bg.webp",
    galleryBg: "/projects/jacob/gallery-bg.webp",
    features: [
      { title: "Private Core Layouts", image: "/projects/jacob/feature1.webp" },
      { title: "Skyline Views", image: "/projects/jacob/feature2.webp" }
    ],
    gallery: [
      "/projects/jacob/gallery1.webp",
      "/projects/jacob/gallery2.webp"
    ],
    amenities: [
      "Private Concierge",
      "Luxury Clubhouse",
      "Sky Gardens",
      "High-end Retail"
    ],
    description:
      "Ultra-luxury branded residences crafted with international collaboration.",
    locationText: "Sector 97, Noida"
  }
];
