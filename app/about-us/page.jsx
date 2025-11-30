"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function AboutPage() {
  return (
    <main className="w-full">

      {/* ============================
          HERO SECTION
      ============================ */}
      <section className="relative w-full h-[100vh] overflow-hidden z-[1]">

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/about-bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-start h-full pt-[25vh] px-6 text-center">

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-14
                       bg-gradient-to-r from-[#00A17F] to-[#BBD694] bg-clip-text text-transparent"
          >
            Where Noida’s Smartest<br />Investments Begin
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl text-white/90 text-[15px] md:text-[20px] leading-[1.7] space-y-6"
          >
            <p>
              Hometree was born from a simple belief — when people invest in real
              estate, they deserve clarity, honesty and someone who truly
              understands the ground reality of Noida’s market.
            </p>

            <p>
              This belief comes from our founder{" "}
              <span style={{ color: "#00A17F" }} className="font-semibold">
                Amit Gaba
              </span>
              , a real estate specialist with 22+ years navigating Noida’s evolution.
            </p>

            <p>
              He built Hometree to ensure homebuyers & investors never navigate
              Noida alone again.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================
          TRACK RECORD
      ============================ */}
      <section className="relative w-full py-[12vh] bg-black">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/big-buildings.webp')" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="flex flex-col md:flex-row md:gap-20 gap-10">

            {/* LEFT — Sticky Title */}
            <div className="md:w-1/2 w-full md:pr-12">
              <div className="hidden md:block sticky top-[40vh]">
                <div className="flex items-start gap-6">
                  <div className="w-[6px] h-[200px] bg-gradient-to-b from-[#00A17F] to-[#BBD694]" />
                  <h2 className="font-extrabold uppercase leading-[0.9] text-7xl text-white">
                    <span className="block bg-gradient-to-r from-[#00A17F] to-[#BBD694] text-transparent bg-clip-text">Our</span>
                    <span className="block bg-gradient-to-r from-[#00A17F] to-[#BBD694] text-transparent bg-clip-text">Track</span>
                    <span className="block bg-gradient-to-r from-[#00A17F] to-[#BBD694] text-transparent bg-clip-text">Record</span>
                  </h2>
                </div>
              </div>

              {/* MOBILE TITLE */}
              <div className="md:hidden">
                <h2 className="text-4xl font-bold text-white">
                  Our Track Record
                </h2>
              </div>
            </div>

            {/* RIGHT — Content */}
            <div className="md:w-1/2 w-full space-y-20">
              <p className="bg-gradient-to-r from-[#00A17F] to-[#BBD694] bg-clip-text text-transparent text-[20px] leading-relaxed">
                These are outcomes we’ve created over the years:
              </p>

              {[
                { t: "450+<br/>Clients<br/>Guided", d: "Across Noida’s fastest-growing corridors." },
                { t: "110+<br/>Investments<br/>Vetted", d: "Mapped with appreciation potential & risk checks." },
                { t: "300+<br/>Families<br/>Placed", d: "Into future-ready, lifestyle-aligned homes." },
                { t: "₹210+<br/>Crore<br/>Guided", d: "In cumulative real estate advisory decisions." },
                { t: "70%<br/>Referrals", d: "Trust-based relationships, not marketing claims." },
                { t: "Zero<br/>Mismatched<br/>Commitments", d: "Zero forced selling. Zero hidden motives." }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <h3
                    className="uppercase font-extrabold text-4xl bg-gradient-to-r from-[#00A17F] to-[#BBD694] bg-clip-text text-transparent"
                    dangerouslySetInnerHTML={{ __html: item.t }}
                  />
                  <p className="text-white/80 text-[18px]">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          WHAT MAKES HOMETREE DIFFERENT
      ============================ */}
      <section className="relative w-full py-[15vh]">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/aboutus-bg2.webp')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* TITLE */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-center 
                         bg-gradient-to-r from-[#00A17F] to-[#BBD694] text-transparent bg-clip-text mb-12">
            What Makes Hometree Different
          </h2>

          <p className="text-white/80 text-lg md:text-2xl text-center max-w-3xl mx-auto mb-16">
            Smart investing isn’t about knowing everything —
            it’s about knowing one region better than anyone.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Micro-Market Forecasting",
                desc: "We know exactly which pockets will appreciate based on infra, metro & commercial growth."
              },
              {
                title: "Developer Credibility Analysis",
                desc: "22 years of trusted developer relationships help us evaluate track record instantly."
              },
              {
                title: "Pricing Intelligence",
                desc: "Launch pricing, resale value, negotiation windows — we calculate the true opportunity."
              },
              {
                title: "Under-Construction Risk Checks",
                desc: "Legal, technical & timeline analysis ensures your investment remains safe."
              },
              {
                title: "Long-Term Rental Yield Mapping",
                desc: "High-yield pockets for stable investor returns — mapped scientifically."
              },
              {
                title: "Ground-Level Verification",
                desc: "We physically check every project before recommending it."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="border border-white/20 bg-white/5 p-8 backdrop-blur-lg"
              >
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4
                               bg-gradient-to-r from-[#00A17F] to-[#BBD694]
                               text-transparent bg-clip-text">
                  {item.title}
                </h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* FINAL STATEMENT */}
          <div className="text-center max-w-3xl mx-auto mt-20">
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">
              We don’t “sell property”.
              <br />
              We engineer wealth-building decisions.
            </h3>
          </div>
        </div>
      </section>

      {/* ============================
          WHY HOMETREE EXISTS
      ============================ */}
      <section className="relative w-full py-[16vh] overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/aboutus-bg2.webp')" }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          <h2 className="text-4xl md:text-6xl font-extrabold text-center
                         bg-gradient-to-r from-[#00A17F] to-[#BBD694]
                         bg-clip-text text-transparent mb-10">
            Why Hometree Exists
          </h2>

          <p className="text-white/80 text-lg md:text-2xl text-center mb-14 max-w-3xl mx-auto">
            Noida is evolving at unprecedented speed — we simplify the noise into clarity.
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {[
              "Noida International Airport",
              "Film City Development",
              "Multi-Modal Logistics Hub",
              "Expressway Growth Corridor",
              "Fortune 500 Corporate Shift",
              "Luxury Township Boom",
              "NRI Investment Surge"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-white/15 bg-white/5 p-6"
              >
                <h3 className="text-white text-xl md:text-2xl">{item}</h3>
              </motion.div>
            ))}
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
            But with great opportunity comes confusion.
          </h3>

          <p className="text-white/80 text-lg md:text-2xl text-center max-w-4xl mx-auto">
            <span className="text-[#BBD694] font-semibold">Hometree exists to simplify everything.</span><br />
            Decisions based on <span className="text-[#00A17F] font-semibold">data</span>,
            <span className="text-[#BBD694] font-semibold"> ground insights</span>,
            and <span className="font-semibold text-white"> long-term wealth creation.</span>
          </p>
        </div>
      </section>

      {/* ============================
          FOUNDER — AMIT GABA
      ============================ */}
      <section className="relative w-full py-[10vh] bg-white">

  <div className="relative max-w-7xl mx-auto px-6">

    <h2
      className="text-4xl md:text-6xl font-extrabold text-center
                 bg-gradient-to-r from-[#00A17F] to-[#BBD694]
                 bg-clip-text text-transparent mb-16"
    >
      Amit Gaba’s Promise
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

      {/* LEFT IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex justify-center"
      >
        <img
          src="/Founder.webp"
          className="w-full max-w-md rounded-xl border border-black/10 shadow-xl"
        />
      </motion.div>

      {/* RIGHT TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <p className="text-black/80 text-lg md:text-2xl leading-relaxed">
          With over <span className="text-[#00A17F] font-semibold">22 years</span> in Noida real estate,
          Amit has personally guided countless successful investors.
        </p>

        <blockquote className="border-l-4 border-[#00A17F] pl-5">
          <p className="text-black text-2xl md:text-3xl italic">
            “If I won’t invest my own money,  
            I will never recommend it to you.”
          </p>
        </blockquote>

        <ul className="space-y-2 text-black/80 text-lg md:text-xl">
          {[
            "Deep understanding of shifting development patterns",
            "Direct relationships with trusted developers",
            "Expertise across premium & investor projects",
            "Involvement in every major client decision",
            "Clear judgement on safe under-construction projects",
            "Unbiased, transparent guidance"
          ].map((point, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[#00A17F]">•</span> {point}
            </li>
          ))}
        </ul>

        <p className="text-black/80 text-lg md:text-2xl">
          People don’t come for choices — they come for clarity, safety & perspective.
        </p>
      </motion.div>

    </div>
  </div>

  {/*  🔥 GRADIENT BREAK LINE  */}
  <div className="w-full h-[3px] mt-20 bg-gradient-to-r from-[#00A17F] via-[#00C298] to-[#BBD694]" />

</section>

      {/* ============================
          CLIENT TESTIMONIALS LOOP
      ============================ */}
      <section className="relative w-full  bg-white overflow-hidden">

       

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-6xl font-extrabold uppercase
                         bg-gradient-to-r from-[#00A17F] to-[#BBD694]
                         bg-clip-text text-transparent mb-8">
            Our Clients Say It Best
          </h2>

          <ClientStatements />
        </div>
      </section>
  {/* ============================
   THE HOMETREE APPROACH — CLEAN TIMELINE (NO DOTS)
============================ */}
<section className="relative w-full py-[15vh] bg-[#F7F8FA]">

  <div className="relative max-w-6xl mx-auto px-6">

    {/* TITLE */}
    <h2 className="text-4xl md:text-6xl font-extrabold text-center
                   bg-gradient-to-r from-[#00A17F] to-[#BBD694]
                   bg-clip-text text-transparent mb-12">
      The Hometree Approach
    </h2>

    {/* SUB TEXT */}
    <p className="text-black/70 text-lg md:text-2xl text-center 
                 max-w-3xl mx-auto leading-relaxed mb-20">
      We keep it personal. You don’t meet “sales executives”.  
      You meet people who treat real estate the way Amit does —  
      <span className="font-semibold text-black">as a long-term responsibility.</span>
    </p>

    {/* TIMELINE WRAPPER */}
    <div className="relative max-w-4xl mx-auto">

      {/* CENTER LINE */}
      <div className="absolute left-1/2 transform -translate-x-1/2 
                      h-full w-[3px] bg-black/10" />

      {[
        "Investment Strategy",
        "Property Shortlisting",
        "Legal & Builder Checks",
        "Site Visits",
        "Negotiations",
        "Documentation",
        "Post-Purchase Support"
      ].map((item, i) => (
        <div
          key={i}
          className={`relative w-full md:w-1/2 mb-16
                      ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}
        >
          {/* CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-xl bg-white shadow-md 
                       border border-black/10"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-black">
              {item}
            </h3>
          </motion.div>
        </div>
      ))}

    </div>

    {/* FINAL STATEMENT */}
    <p className="text-black/70 text-center text-xl md:text-2xl mt-20 
                 leading-relaxed max-w-3xl mx-auto">
      We stay with you long after the deal is done.
      <br />
      Because you're not a transaction —  
      <span className="text-[#00A17F] font-semibold">you're a relationship </span>  
      that deserves honesty, clarity, and long-term commitment.
    </p>

  </div>
</section>


    </main>
  );
}

/* ============================
   CLIENT STATEMENTS — LOOP LOGIC
============================ */
function ClientStatements() {
  const testimonials = [
    "A corporate professional from Bengaluru secured 32% appreciation in 18 months on a Noida Expressway investment.",
    "A first-time buyer in Sector 150 found a risk-free under-construction project delivered exactly as promised.",
    "A Delhi family secured a pre-launch opportunity that appreciated within six months.",
    "NRIs in Dubai & Singapore trust Hometree for remote verification, planning & documentation.",
    "Investors in Noida Extension achieved 5.5–7.2% rental yields, outperforming traditional returns.",
    "Smart investments aren’t luck — they’re the result of guidance you trust."
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[100px] mb-16 flex items-center justify-center">

      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="text-[#00A17F] text-xl md:text-2xl max-w-3xl leading-relaxed"
        >
          {testimonials[index]}
        </motion.p>
      </AnimatePresence>

    </div>
  );
}
