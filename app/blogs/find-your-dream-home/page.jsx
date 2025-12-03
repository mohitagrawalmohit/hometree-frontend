"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  MapPin,
  CheckCircle,
  Landmark,
  TrendingUp,
} from "lucide-react";

export default function HometreeBlogPage() {
  return (
    <main className="w-full bg-white text-black">

      {/* ======================================================
          HERO SECTION — PREMIUM BANNER
      ====================================================== */}
      <section className="relative w-full h-[420px] md:h-[620px] lg:h-[750px] overflow-hidden">
        
        {/* BACKGROUND IMAGE */}
        <Image
          src="/blogimages/bloghero.webp"
          alt="Find Your Dream Home in Noida"
          fill
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight"
          >
            Find Your Dream Home with HomeTree
          </motion.h1>

          <p className="text-white/90 text-lg md:text-xl mt-4">
            The Trusted Real Estate Experts in Noida
          </p>

          <a
            href="#content"
            className="mt-8 px-8 py-3 bg-white text-black rounded-lg font-semibold shadow-md hover:bg-[#F2F2F2]"
          >
            Explore Blog ↓
          </a>
        </div>
      </section>

      {/* ======================================================
          MAIN CONTENT AREA
      ====================================================== */}
      <section id="content" className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-24">

          {/* INTRODUCTION */}
          <section className="space-y-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00A17F] to-[#BBD694] bg-clip-text text-transparent"
            >
              Your Trusted Real Estate Partner in Noida
            </motion.h2>

            <p className="text-black/70 text-lg leading-relaxed">
              Finding the right home or investment property in Noida can feel overwhelming —
              from comparing projects to navigating endless listings. That’s where HomeTree,
              Noida’s trusted property consultant, steps in. Whether you’re searching for flats
              in Noida, premium apartments in Noida, or office space in Noida Extension,
              HomeTree simplifies every step — from discovery to booking.
            </p>

            <p className="text-black/70 text-lg leading-relaxed">
              Let’s explore how HomeTree helps homebuyers, renters, and investors find the 
              perfect property — at the best price, in the best locations across Noida.
            </p>

            
          </section>

          {/* ======================================================
              FLATS & APARTMENTS
          ====================================================== */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <Home className="text-[#00A17F]" size={32} />
              <h3 className="text-3xl font-semibold">Flats & Apartments in Noida — Designed for Every Lifestyle</h3>
            </div>

            <p className="text-black/70 text-lg leading-relaxed">
              Noida has rapidly evolved into NCR’s most desirable real estate market —
              thanks to excellent infrastructure, expressway connectivity, and world-class
              amenities. From 1 BHK flats in Noida Extension to 3 BHK luxury apartments in
              Noida, there’s something for everyone.
            </p>

            <p className="text-black/70 text-lg leading-relaxed">
              At HomeTree, we curate verified listings of:
            </p>

            <ul className="space-y-3 text-black/80 text-lg pl-6 list-disc">
              <li>2 BHK flats in Noida for sale</li>
              <li>3 BHK flats in Noida under 30 lakhs</li>
              <li>4 BHK flats in Noida under 1 crore</li>
              <li>Flats in Noida under 30 lakhs — perfect for first-time buyers</li>
            </ul>

            <p className="text-black/70 text-lg leading-relaxed">
              Every listing is pre-screened for legal clearances, builder credibility, and pricing transparency — ensuring a safe, hassle-free property purchase.
            </p>

            
          </section>

          {/* ======================================================
              PRIME LOCATIONS
          ====================================================== */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <MapPin className="text-[#00A17F]" size={32} />
              <h3 className="text-3xl font-semibold">Prime Locations We Cover</h3>
            </div>

            <p className="text-black/70 text-lg leading-relaxed">
              Our experts specialize in every key sector and micro-market, ensuring clients get
              access to the most in-demand areas:
            </p>

            <ul className="space-y-3 text-black/80 text-lg pl-6 list-disc">
              <li>Noida Expressway flats for sale — ideal for professionals & NRIs</li>
              <li>Flats in Sector 45 Noida — premium living & metro connectivity</li>
              <li>3 BHK flats in Sector 62 Noida for sale</li>
              <li>2 BHK flats in Sector 52 Noida for rent</li>
              <li>Noida Extension flats & builder floors for families</li>
            </ul>

            <p className="bg-[#F7F8F9] p-5 border border-black/10 rounded-lg text-lg text-black/80">
              <strong className="text-[#00A17F]">Hometree Recommendation:</strong>  
              Explore Noida Expressway property for superior appreciation potential.
            </p>
          </section>

          {/* ======================================================
              COMMERCIAL SPACES
          ====================================================== */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <Building2 className="text-[#00A17F]" size={32} />
              <h3 className="text-3xl font-semibold">Commercial & Office Spaces in Noida Extension</h3>
            </div>

            <p className="text-black/70 text-lg leading-relaxed">
              HomeTree also serves businesses seeking commercial properties. Our portfolio
              includes Grade-A office spaces, IT parks, and commercial towers located near 
              major corporate zones.
            </p>

            <p className="text-black/70 text-lg leading-relaxed">
              Whether you need a co-working setup or a corporate headquarters, HomeTree’s 
              consultants match you with the right property based on budget, visibility, and ROI.
            </p>

           
          </section>

          {/* ======================================================
              BUDGET OPTIONS
          ====================================================== */}
          <section className="space-y-10">
            <h3 className="text-3xl font-semibold">Affordable to Luxury Homes — Curated for Every Budget</h3>

            <p className="text-black/70 text-lg leading-relaxed">
              No matter your price range, HomeTree provides safe, verified, and value-driven 
              options across Noida.
            </p>

            <h4 className="text-2xl font-bold text-[#00A17F]">Budget-Friendly Homes</h4>
            <ul className="space-y-3 text-black/80 text-lg pl-6 list-disc">
              <li>2 BHK flat in Noida under 20 lakhs</li>
              <li>3 BHK flats in Noida under 40 lakhs</li>
              <li>Flats in Noida under 30 lakhs</li>
            </ul>

            <h4 className="text-2xl font-bold text-[#00A17F]">Mid-Segment & Premium Options</h4>
            <ul className="space-y-3 text-black/80 text-lg pl-6 list-disc">
              <li>4 BHK in Noida Extension</li>
              <li>3 BHK luxury flats in Noida</li>
              <li>3 BHK luxury apartments in Noida</li>
            </ul>

          
          </section>

          {/* ======================================================
              WHY HOMETREE
          ====================================================== */}
          <section className="space-y-8">
            <h3 className="text-3xl font-semibold">Why Choose HomeTree?</h3>

            <ul className="space-y-4 text-black/85 text-lg pl-6 list-disc">
              <li>Verified listings with complete legal screening</li>
              <li>No hidden fees — 100% transparent pricing</li>
              <li>Personalized consultation based on lifestyle</li>
              <li>Exclusive access to prelaunch & hot-selling projects</li>
              <li>Home loan & documentation support</li>
            </ul>
          </section>

          {/* ======================================================
              RENTALS
          ====================================================== */}
          <section className="space-y-8">
            <h3 className="text-3xl font-semibold">HomeTree Rental Services</h3>

            <p className="text-black/70 text-lg leading-relaxed">
              Looking for a flat for rent in Sector 34 Noida or a rental in Noida Extension?
              Our rental division offers curated homes with modern comfort and convenience.
            </p>

            <ul className="space-y-3 text-black/70 text-lg pl-6 list-disc">
              <li>Gated societies</li>
              <li>24×7 security & maintenance</li>
              <li>Proximity to metro & schools</li>
              <li>Fully-furnished & semi-furnished options</li>
            </ul>

            
          </section>

          {/* ======================================================
              INVESTOR EDGE
          ====================================================== */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-[#00A17F]" size={32} />
              <h3 className="text-3xl font-semibold">Investor Edge — High ROI Opportunities</h3>
            </div>

            <p className="text-black/70 text-lg leading-relaxed">
              Noida’s property prices are still competitive compared to Delhi & Gurgaon,
              making it ideal for investors. HomeTree tracks real-time market trends 
              to advise you.
            </p>

            <ul className="space-y-3 text-black/80 text-lg pl-6 list-disc">
              <li>High-demand sectors: 62, 93A, 150, Expressway belt</li>
              <li>Under-construction & prelaunch projects with high appreciation</li>
              <li>Commercial investments in Noida Extension</li>
            </ul>
          </section>

          {/* ======================================================
              WHY NOIDA
          ====================================================== */}
          <section className="space-y-8">
            <h3 className="text-3xl font-semibold">Why Noida?</h3>

            <ul className="space-y-3 text-black/70 text-lg pl-6 list-disc">
              <li>Metro expansion & expressway connectivity</li>
              <li>Upcoming Jewar International Airport</li>
              <li>Premium societies at affordable rates</li>
              <li>Expanding IT & corporate ecosystem</li>
            </ul>
          </section>

          {/* ======================================================
              CTA SECTION
          ====================================================== */}
          <div className="text-center bg-[#F7F8F9] border border-black/10 p-12 rounded-2xl space-y-6 shadow-sm">
            <h3 className="text-3xl font-bold text-[#00A17F]">
              Ready to Find Your Ideal Home?
            </h3>

            <p className="text-black/70 text-lg max-w-3xl mx-auto">
              Whether you’re searching for flats in Noida, apartments in Noida, or builder floors —  
              HomeTree is your trusted partner for verified listings & expert consultation.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#00A17F] to-[#6BC59D] text-white rounded-lg text-lg font-semibold hover:opacity-90 transition shadow-md"
              >
                Contact HomeTree
              </a>

              <a
                href="https://wa.me/919540830309"
                target="_blank"
                className="px-8 py-4 border border-[#00A17F] text-[#00A17F] rounded-lg text-lg font-semibold hover:bg-[#00A17F] hover:text-white transition"
              >
                Chat on WhatsApp
              </a>
            </div>

            <p className="text-black/50 text-sm">
              Your perfect home in Noida is waiting — let’s find it together.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
