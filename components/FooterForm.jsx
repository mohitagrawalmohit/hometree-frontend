"use client";

export default function FooterForm() {
  return (
    <div
      className="
        bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl 
        p-6 md:p-8 shadow-xl 
      "
    >
      <h3
        className="
          text-center text-[12px] md:text-[13px] 
          tracking-[2px] md:tracking-[3px] 
          font-semibold text-white/90 uppercase 
          mb-6 md:mb-8
        "
      >
        Register Your Interest
      </h3>

      <form className="space-y-4 md:space-y-5">

        {/* Full Name */}
        <div className="space-y-1 md:space-y-2">
          <label className="text-white/80 text-[11px] md:text-xs tracking-wide">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="
              w-full bg-transparent border border-white/40 
              text-white placeholder-white/60 
              px-3 py-2.5 md:px-4 md:py-3 
              rounded-md text-sm
              focus:outline-none focus:border-[#BBD694] transition-all
            "
          />
        </div>

        {/* Phone Input */}
        <div className="space-y-1 md:space-y-2">
          <label className="text-white/80 text-[11px] md:text-xs tracking-wide">
            Phone Number
          </label>
          <div
            className="
              flex items-center border border-white/40 rounded-md 
              px-3 py-2.5 md:px-4 md:py-3 
              bg-transparent focus-within:border-[#BBD694] 
              transition-all
            "
          >
            <span className="mr-2 md:mr-3 text-white/80 text-sm">🇮🇳 +91</span>
            <input
              type="tel"
              placeholder="98765 43210"
              className="
                bg-transparent w-full outline-none text-white 
                placeholder-white/60 text-sm
              "
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1 md:space-y-2">
          <label className="text-white/80 text-[11px] md:text-xs tracking-wide">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="
              w-full bg-transparent border border-white/40 
              text-white placeholder-white/60 
              px-3 py-2.5 md:px-4 md:py-3 
              rounded-md text-sm
              focus:outline-none focus:border-[#BBD694] transition-all
            "
          />
        </div>

        {/* Message */}
        <div className="space-y-1 md:space-y-2">
          <label className="text-white/80 text-[11px] md:text-xs tracking-wide">
            Your Message
          </label>
          <textarea
            rows={3}
            placeholder="Write your message..."
            className="
              w-full bg-transparent border border-white/40 
              text-white placeholder-white/60 
              px-3 py-2.5 md:px-4 md:py-3 
              rounded-md text-sm resize-none
              focus:outline-none focus:border-[#BBD694] transition-all
            "
          />
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] md:text-[11px] text-white/70 leading-relaxed">
          By submitting, you agree to allow HomeTree to process and contact you
          regarding this enquiry. Read our{" "}
          <span className="underline cursor-pointer hover:text-[#BBD694]">
            Terms & Conditions
          </span>.
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="
            w-full border border-white text-white uppercase 
            tracking-[1px] md:tracking-[2px] 
            py-2.5 md:py-3 text-sm font-semibold rounded-md 
            hover:bg-white hover:text-black transition-all duration-300
          "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
