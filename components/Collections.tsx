"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Collections() {
  const collections = [
    {
      id: 1,
      title: "Luxury Apartments",
      img: "/collection1.jpg",
      link: "/collections/luxury-apartments",
    },
    {
      id: 2,
      title: "Premium Villas",
      img: "/collection2.jpg",
      link: "/collections/premium-villas",
    },
    {
      id: 3,
      title: "Commercial Spaces",
      img: "/collection3.jpg",
      link: "/collections/commercial",
    },
    {
      id: 4,
      title: "Affordable Housing",
      img: "/collection4.jpg",
      link: "/collections/affordable-homes",
    },
  ];

  return (
    <section className="relative py-20 px-6 md:px-16 bg-white overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Discover Our{" "}
          <span className="bg-gradient-to-r from-[#9ac65b] to-[#0296d6] bg-clip-text text-transparent">
            Collections
          </span>
        </h2>
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Explore the finest properties curated across different lifestyles
        </p>
      </motion.div>

      {/* Collection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {collections.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <Link href={item.link}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                {/* Image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={400}
                  className="object-cover w-full h-72 md:h-80 transition-transform duration-[1200ms] group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700"></div>

                {/* Text & Underline */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#9ac65b] group-hover:to-[#0296d6]">
                    {item.title}
                  </h3>

                  <div className="h-[3px] w-0 bg-gradient-to-r from-[#9ac65b] to-[#0296d6] rounded-full group-hover:w-24 transition-all duration-500 ease-out"></div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-center mt-16"
      >
        <Link
          href="/collections"
          className="inline-block px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#9ac65b] to-[#0296d6] hover:opacity-90 transition-all shadow-lg"
        >
          View All Collections
        </Link>
      </motion.div>
    </section>
  );
}
