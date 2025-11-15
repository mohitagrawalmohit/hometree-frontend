// data/projects.ts
export type PropertyIn = {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  logo?: string;
  heroImage?: string;
  overviewBg?: string;
  section3Bg?: string;
  possession?: string;
  galleryBg?: string;
  unitType?: string;
  map?: string;

  gallery: string[];
  amenities: string[];
  description: string;
  locationText: string;

  whyInvest?: string[];

  configurations?: {
    type: string;
    size: string;
    residences: string;
  }[];
};


export const projects: PropertyIn[] = [
  {
    id: 1,
    slug: "the-modern-moreland-house",
    name: "The Modern Moreland House",
    tagline: "Luxury living reimagined",
    unitType: "2, 3, 4 BHK Apartments",
    possession: "Expected: 2026 Onwards",
    logo: "/project/project-logo.svg",
    heroImage: "/project/hero.jpg",
    overviewBg: "/project/overview-bg.webp",
    section3Bg: "/project/section3-bg.jpg",
    galleryBg: "/project/gallery-bg.jpg",

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
      "A luxurious modern villa development with spacious layouts, abundant natural light, premium finishes and sustainable design.",

    locationText: "Sector 150, Noida — Near City Center",
  },

  {
    id: 2,
    slug: "riverside-haven",
    name: "Riverside Haven",
    tagline: "Peaceful living by the river",
    unitType: "2, 3, 4 BHK Apartments",
    possession: "Expected: 2026 Onwards",
    logo: "/project2/logo.svg",
    heroImage: "/homepage/projects/m3m-jacob.webp",
    overviewBg: "/project2/overview-bg.jpg",

    gallery: [
      "/project2/gallery1.jpg",
      "/project2/gallery2.jpg",
    ],

    amenities: ["River View", "Jogging Track", "Community Hall"],

    description: "Coastal inspired community living by the riverside.",

    locationText: "Sector 45, Riverside City",
  },

  {
    id: 3,
    slug: "m3m-jacob-and-co",
    name: "M3M Jacob & Co",
    tagline: "The Epitome of Bespoke Luxury, Now in Noida",
    possession: "Expected: 2026 Onwards",
    unitType: "3, 4, 5 BHK Apartments",

    logo: "/logos/m3m-jacob.webp",
    heroImage: "/homepage/projects/m3m-jacob.webp",
    overviewBg: "/project/overview-bg.webp",
    section3Bg: "/project/section3-bg.jpg",
    galleryBg: "/project/gallery-bg.jpg",
    map: "/maps/m3m-jacob.webp",

    gallery: [
      "/gallery-images/m3m-jacob-gallery1.webp",
      "/gallery-images/m3m-jacob-gallery2.webp",
      "/gallery-images/m3m-jacob-gallery3.webp",
      "/gallery-images/m3m-jacob-gallery4.webp",
    ],

    amenities: [
      "Swimming Pool",
      "Basket Ball",
      "GYM",
      "Kids Play Area",
    ],

    description:
      "Welcome to Jacob & Co Branded Residences, a limited-edition address that redefines sophistication and exclusivity in the heart of Noida. Crafted in collaboration with the global luxury house Jacob & Co, this development is more than a residence — it is a masterpiece where architecture, artistry and aspiration come together.",

    locationText: "Sector 97, Noida — Premium Luxury District",

    whyInvest: [
      "Global luxury collaboration — first-of-its-kind in NCR",
      "Ultra-limited inventory ensuring privacy and exclusivity",
      "Iconic design & bespoke interiors for elite living",
      "High capital appreciation potential in Noida’s premium zone",
    ],
    configurations: [
  {
    type: "3 BHK",
    size: "2,500 sq. ft.",
    residences: "4 per core",
  },
  {
    type: "4 BHK",
    size: "4,500 sq. ft.",
    residences: "2 per core",
  },
  {
    type: "5 BHK",
    size: "6,400 sq. ft.",
    residences: "1 per floor",
  },
],

  },

  {
  id: 4,
  slug: "gaur-yamuna",
  name: "Gaur Chrysalis",
  tagline: "Luxury, Reimagined — By One of India’s Most Trusted Builders",
  logo: "/logos/gaur-yamuna1.png",
  possession: "EOI Open — Launch Soon",
  unitType: "3 & 4 BHK Residences",

  heroImage: "/homepage/projects/gaur-yamuna.webp",   // update with your actual image
  overviewBg: "/project/overview-bg.webp",
    section3Bg: "/project/section3-bg.jpg",
    galleryBg: "/project/gallery-bg.jpg",

  gallery: [
      "/gallery-images/gaur-yamuna-gallery1.webp",
      "/gallery-images/gaur-yamuna-gallery2.webp",
      "/gallery-images/gaur-yamuna-gallery3.webp"

  ],
  map: "/maps/gaur-yamuna.webp",

  description:
    "Gaurs Group introduces a landmark luxury residential development in Sector 22D, Yamuna Expressway. Spread across 12 acres with podium greens, high-rise towers, premium amenities, and future-ready architecture, this project offers an elevated lifestyle next to Noida International Airport.",

  locationText: "Sector 22D, Yamuna Expressway — Near Noida International Airport",

  amenities: [
    "Art & Culture Zone",
    "Kids Play Area",
    "Swimming Pool",
    "Relaxation & Meditation Zone",
    "Active Recreation & Sports Zone"
  ],

  whyInvest: [
    "Next to Noida International Airport — India's Largest Upcoming Airport",
    "Developed by Gaurs Group — One of India’s Most Trusted Developers",
    "Massive Future Appreciation Potential in Yamuna Expressway Belt",
    "Podium-Based Green Living Spread Across 8 Acres",
    "Ultra-Spacious Low-Density Premium Towers"
  ],

  configurations: [
    {
      type: "3 BHK",
      size: "1,800 sq. ft.",
      residences: "Premium Tower Layout"
    },
    {
      type: "4 BHK",
      size: "2,400 sq. ft.",
      residences: "Limited Inventory"
    }
  ]
},

];
