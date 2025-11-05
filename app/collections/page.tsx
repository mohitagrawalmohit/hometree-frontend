"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

const PRIMARY = "#00A17F";
const ACCENT = "#BBD694";

const projects = [
  {
    id: 1,
    title: "The Right Life",
    type: "Residential Apartments",
    location: "On Sarjapur-Varthur Road",
    config: "3 & 3.5 BHK Residential Apartments",
    price: "₹1.5 Cr onwards*",
    image: "/project1.webp",
    status: "Ongoing",
    slug: "the-right-life",
  },
  {
    id: 2,
    title: "HomeTree Skanda",
    type: "Luxury Residences",
    location: "Sector 150, Noida",
    config: "2, 3 & 4 BHK Premium Residences",
    price: "₹2.1 Cr onwards*",
    image: "/project2.jpg",
    status: "Completed",
    slug: "hometree-skanda",
  },
];

export default function CollectionsPage() {
  const [activeTab, setActiveTab] = useState<"Ongoing" | "Completed">("Ongoing");

  const filteredProjects = projects.filter((p) => p.status === activeTab);

  // 👇 You can set hero background here (image or video)
  const heroBackground = "/collectionherobg.mp4"; // can be .mp4 or .jpg/.webp
  const isVideo = heroBackground.endsWith(".mp4");

  return (
    <div className="w-full">
      {/* 1️⃣ Hero Section (auto detects video/image) */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        {isVideo ? (
          <video
            src={heroBackground}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Image
            src={heroBackground}
            alt="Residential Projects Hero"
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        
      </section>

      {/* 2️⃣ Filter Section */}
      <section className="py-12 border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            RESIDENTIAL PROJECTS
          </h2>
          <div className="flex gap-4">
            {["Ongoing", "Completed"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "Ongoing" | "Completed")}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[#BBD694] text-white"
                    : "text-black hover:text-[#00A17F]"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* LEFT: Details */}
              <div className="text-gray-800">
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-6">{project.type}</p>

                <div className="divide-y divide-gray-200 border-y border-gray-200 mb-8">
                  <div className="flex items-center gap-4 py-4">
                    <span className="text-2xl">📍</span>
                    <p>{project.location}</p>
                  </div>
                  <div className="flex items-center gap-4 py-4">
                    <span className="text-2xl">🛏️</span>
                    <p>{project.config}</p>
                  </div>
                  <div className="flex items-center gap-4 py-4">
                    <span className="text-2xl">💰</span>
                    <p>{project.price}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    href={`/property/${project.slug}`}
                    style={{
                      background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})`,
                    }}
                    className="px-6 py-2 text-white font-medium rounded-md hover:opacity-90 transition"
                  >
                    Explore
                  </Link>

                  <button className="px-6 py-2 border border-black text-black font-medium rounded-md hover:bg-black hover:text-white transition">
                    Brochure
                  </button>
                </div>
              </div>

              {/* RIGHT: Image */}
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4️⃣ Footer */}
      <Footer />
    </div>
  );
}
