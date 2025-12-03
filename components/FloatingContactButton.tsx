"use client";

export default function FloatingContactButton({ openForm }: { openForm: () => void }) {
  return (
    <button
      onClick={openForm}
     className="
        fixed
        top-1/2
        right-0
        -translate-y-1/2
        bg-gradient-to-b from-[#00A17F] to-[#6BC59D]
        text-white
        font-semibold
        h-[140px]
        w-[46px]
        flex
        items-center
        justify-center
        rounded-l-xl
        shadow-lg
        hover:opacity-90
        tracking-wider
        z-[999999]
      "
       style={{
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        padding: 0,
        margin: 0,
      }}
    >
      CONTACT&nbsp;US
    </button>
  );
}
