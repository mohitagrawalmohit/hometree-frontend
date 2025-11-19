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
{
  id: 5,
  slug: "experion-151-noida",
  name: "Experion Sector 151",
  tagline: "Premium, Low-Density Living by Experion Group",
  logo: "/logos/experion-151.webp",   // update with actual logo
  map: "/maps/experion-151.webp",

  possession: "EOI Open — Launch Soon",
  unitType: "3 & 4 BHK Spacious Residences",

  heroImage: "/homepage/projects/experion-151.webp",     // update with your actual image
  overviewBg: "/project/overview-bg.webp",
  section3Bg: "/project/section3-bg.jpg",
  galleryBg: "/project/gallery-bg.jpg",

  gallery: [
    "/gallery-images/experion-151-gallery1.webp",
    "/gallery-images/experion-151-gallery3.webp",
    "/gallery-images/experion-151-gallery4.webp",
    "/gallery-images/experion-151-gallery5.webp"
  ],

 

  description:
    "Experion introduces a premium, low-density residential community in Sector 151, Noida. Spread across an expected 15–20 acres with podium greens, premium clubhouse, expansive open spaces, and thoughtfully designed 3 & 4 BHK residences, this development is crafted for families seeking luxury, privacy, and long-term value near the Noida Expressway.",

  locationText: "Sector 151, Noida — Near Noida-Greater Noida Expressway",

  amenities: [
    "Game",
    "Mini Theatre",
    "Sports",
    "Gym",
    "Swimming Pool",
    "SPA"
    
  ],

  whyInvest: [
    "Developed by Experion — Known for High-Quality Delivery",
    "Rare Low-Density Living in Noida’s New Sectors",
    "Strong Appreciation Potential with Upcoming Mega Infra",
    "Close to Noida Expressway, Metro Stations & Jewar Airport",
    "Premium Clubhouse with Luxury Amenities"
  ],

  configurations: [
    {
      type: "3 BHK Premium",
      size: "1,600 – 2,000 sq. ft.",
      residences: "Spacious Sunlit Layouts"
    },
    {
      type: "4 BHK Luxury",
      size: "2,300 – 2,800 sq. ft.",
      residences: "Large Premium Residences"
    }
  ]
},
{
  id: 6,
  slug: "ace-acreville",
  name: "ACE Acreville",
  tagline: "Premium Residential Plotted Development by ACE Group",
  logo: "/logos/ace-acreville.webp",   // update with actual logo

  possession: "EOI Open — Pre-Launch Phase",
  unitType: "100 – 300 sq. yds Freehold Plots",

  heroImage: "/homepage/projects/ace-acreville.webp",
  overviewBg: "/project/overview-bg.webp",
  section3Bg: "/project/section3-bg.jpg",
  galleryBg: "/project/gallery-bg.jpg",

  gallery: [
    "/gallery-images/ace-acreville-gallery1.webp",
    "/gallery-images/ace-acreville-gallery2.webp",
    "/gallery-images/ace-acreville-gallery3.webp"
  ],

  map: "/maps/ace-acreville.jpg",

  description:
    "ACE Acreville is a premium freehold plotted township by ACE Group along the Yamuna Expressway. Spread across 35+ acres with wide roads, green belts, secured entry, and modern township amenities, Acreville offers residential plots ranging from 100 to 300 sq. yds — ideal for families planning to build their dream homes or investors seeking high-growth land in India’s fastest-developing airport corridor.",

  locationText: "Sector 22A, Yamuna Expressway — Near Noida International Airport",

  amenities: [
    "KID PLAY AREA",
    "BASKETBALL",
    "BADMINTON",
    "BANQUET",
    "JOGGING TRACK",
    "GYM"
    
  ],

  whyInvest: [
    "Freehold Plots with Complete Construction Freedom",
    "Located in India’s Fastest-Growing Airport & Film City Corridor",
    "Developed by ACE Group — Trusted Premium Developer",
    "High Appreciation Potential in YEIDA Region",
    "Ideal for Self-Use as well as Long-Term Investment"
  ],

  configurations: [
    {
      type: "Small Plot",
      size: "100 – 150 sq. yds.",
      residences: "Freehold Plotted Parcel"
    },
    {
      type: "Medium Plot",
      size: "160 – 200 sq. yds.",
      residences: "Freehold Plotted Parcel"
    },
    {
      type: "Large Plot",
      size: "250 – 300 sq. yds.",
      residences: "Freehold Plotted Parcel"
    }
  ]
}


];
