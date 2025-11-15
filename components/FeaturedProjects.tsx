"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "M3M Jacob & Co.",
    slug: "m3m-jacob-and-co",
    status: "Ongoing",
    description:
      "A global collaboration between M3M India and Jacob & Co., offering one of NCR’s most iconic luxury towers — blending opulence, exclusivity, and architectural brilliance.",
    highlights: [
      "Located in Sector 97, Noida",
      "3BHK, 4BHK, 5BHK Duplex Sky Residences",
      "Starting from ₹6.5 Cr onwards",
    ],
    image: "/homepage/projects/m3m-jacob.webp",
  },

  {
    id: 5,
    title: "Experion 151 – Noida",
    slug: "experion-151-noida",
    status: "Upcoming",
    description:
      "A low-density luxury community by Experion, offering spacious residences and strong future appreciation.",
    highlights: [
      "Located in Sector 151, Noida",
      "3BHK & 4BHK Premium Residences",
      "Premium Pricing (TBA)",
    ],
    image: "/homepage/projects/experion-151.webp",
  },

  {
    id: 4,
    title: "Ace Acreville",
    slug: "ace-acreville",
    status: "Ongoing",
    description:
      "Freehold residential plots located in the fast-growing Noida Extension corridor — offering flexibility to design and build your dream home.",
    highlights: [
      "Located in Sector 10, Greater Noida West",
      "Freehold Plots (100–250 sq. yards)",
      "Starting from ₹95 Lakhs onwards",
    ],
    image: "/homepage/projects/ace-acreville.webp",
  },
];

export default function FeaturedProjects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // PAUSE LOGIC
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeout = useRef<any>(null);

  // AUTOPLAY EVERY 3 SECONDS
  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  // WHEN USER SCROLLS MANUALLY — PAUSE AUTOPLAY & RESUME AFTER 5 SECONDS
  useEffect(() => {
    if (!emblaApi) return;

    const handleScroll = () => {
      setIsPaused(true);

      clearTimeout(pauseTimeout.current);
      pauseTimeout.current = setTimeout(() => {
        setIsPaused(false);
      }, 5000);
    };

    emblaApi.on("scroll", handleScroll);

    return () => {
      emblaApi.off("scroll", handleScroll);
    };
  }, [emblaApi]);

  // SYNC CONTENT WITH CURRENT SLIDE
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const currentProject = projects[selectedIndex] || projects[0];

  return (
    <section className="py-10 px-6 md:px-16 bg-white flex flex-col md:flex-row gap-10 items-center justify-between relative overflow-hidden">
      {/* LEFT SIDE CONTENT */}
      <div className="md:w-[40%] space-y-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Residential Projects by the Best Builder in{" "}
          <span className="bg-gradient-to-r from-[#00A17F] to-[#BBD694] text-transparent bg-clip-text">
            India
          </span>
        </h2>

        {/* Tabs */}
        <div className="flex gap-6 font-medium text-gray-500 uppercase text-sm tracking-wide">
          {["Ongoing", "Completed", "Upcoming"].map((tab) => (
            <span
              key={tab}
              className={`cursor-pointer pb-1 transition-all ${
                currentProject && tab === currentProject.status
                  ? "text-gray-900 border-b-2 border-[#00A17F]"
                  : "hover:text-gray-700"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* Description + Highlights */}
        <div className="relative min-h-[180px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="absolute top-0 left-0 w-full"
            >
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {currentProject.description}
              </p>

              <ul className="mt-4 space-y-2 text-gray-800 text-sm md:text-base">
                {currentProject.highlights.map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-[#00A17F] to-[#BBD694] rounded-full"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <Link
          href={`/property/${currentProject.slug}`}
          className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-[#00A17F] to-[#BBD694] text-white rounded-full font-medium shadow-md hover:opacity-90 transition"
        >
          Explore
        </Link>
      </div>

      {/* RIGHT SIDE CAROUSEL */}
      <div className="md:w-[55%] relative">
        <div className="overflow-hidden " ref={emblaRef}>
          <div className="flex">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/property/${project.slug}`}
                className="flex-[0_0_80%] md:flex-[0_0_60%] mr-6 relative overflow-hidden shadow-lg cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-[420px]"
                />
                <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 text-white text-sm font-medium tracking-wide">
                  {project.title}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-100 hover:bg-gradient-to-r hover:from-[#00A17F] hover:to-[#BBD694] text-gray-700 hover:text-white p-3 rounded-full shadow transition"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={() => emblaApi && emblaApi.scrollNext()}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-100 hover:bg-gradient-to-r hover:from-[#00A17F] hover:to-[#BBD694] text-gray-700 hover:text-white p-3 rounded-full shadow transition"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
