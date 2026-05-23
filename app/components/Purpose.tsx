"use client";
import { MdAdjust, MdRocket, MdPublic } from "react-icons/md";

const purposeCards = [
  {
    Icon: MdAdjust,
    label: "Our Purpose",
    color: "#00B8D4",
    text: "To unite Ghanaians at home and abroad through friendship, collaboration, cultural pride, and charitable service that positively impacts lives and communities.",
  },
  {
    Icon: MdRocket,
    label: "Our Mission",
    color: "#F97316",
    text: "To build a caring, vibrant, and joyful Ghanaian community that promotes love, unity, empowerment, and service to humanity.",
  },
  {
    Icon: MdPublic,
    label: "Our Vision",
    color: "#FCD116",
    text: "To become the most trusted and influential Ghanaian network globally, successfully blending friendship, social engagement, and purposeful community service.",
  },
];

export default function Purpose() {
  return (
    <section id="purpose" className="relative overflow-hidden bg-hsh-navy-dark py-12 px-6">
      <div className="relative z-10 mx-auto max-w-[1100px]">
        {/* Top label */}
        <div className="mb-20 text-center relative">
          {/* Watermark text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3.5rem] md:text-[6rem] font-black text-white/[0.04] whitespace-nowrap pointer-events-none uppercase tracking-widest font-outfit z-0">
            FOUNDATION
          </div>
          <span className="font-outfit text-xs font-bold uppercase tracking-widest text-hsh-cyan relative z-10">
            Our Foundation
          </span>
          <h2 className="font-outfit mt-2 text-white font-black text-4xl md:text-5xl relative z-10">
            Purpose, Mission &{" "}
            <span className="section-title-highlight" style={{color: "#FCD116"}}>
              Vision
            </span>
          </h2>
        </div>

        {/* Three cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {purposeCards.map((card) => {
            const CardIcon = card.Icon;
            return (
              <div
                key={card.label}
                className="flex-1 bg-white rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]"
              >
                {/* Background Icon Watermark */}
                <div
                  className="absolute -bottom-8 -right-8 opacity-[0.03] pointer-events-none"
                  style={{ color: card.color }}
                >
                  <CardIcon className="w-40 h-40" />
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                    style={{ background: `${card.color}15`, color: card.color }}
                  >
                    <CardIcon className="w-7 h-7" />
                  </div>

                  <h3 className="font-outfit font-bold text-xl text-hsh-dark-text mb-3">
                    {card.label}
                  </h3>

                  <p className="text-hsh-muted text-sm leading-relaxed max-w-[280px]">{card.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
