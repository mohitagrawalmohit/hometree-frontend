    "use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PRIMARY = "#00A17F";
const ACCENT = "#BBD694";

export default function VisionMissionValues() {
  const items = [
    {
      title: "Our Vision",
      description:
        "To redefine how India invests, owns, and experiences real estate — with insight, innovation, and integrity at every step.",
      image: "/vision.webp",
    },
    {
      title: "Our Mission",
      description:
        "To be the bridge between aspiration and action — by simplifying property buying, unlocking smart investment opportunities, and building lasting relationships with our clients.",
      image: "/mission.webp",
    },
    {
      title: "Our Values",
      description:
        "Trust & Transparency – Every transaction rooted in honesty and clarity.\nExpertise – 22+ years of on-ground experience and market understanding.\nGrowth – Helping our clients and partners grow their portfolio sustainably.\nInnovation – Always evolving with new technologies, marketing, and ideas.",
      image: "/values.webp",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full md:w-1/2 h-[350px]  overflow-hidden shadow-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
              className="w-full md:w-1/2"
            >
              <h3
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {item.title}
              </h3>
              <p className="text-white text-base md:text-xl leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
