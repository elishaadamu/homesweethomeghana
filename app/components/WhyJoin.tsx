"use client";
import { MdHandshake, MdPeopleAlt, MdLightbulb, MdFavorite, MdStars, MdPublic } from "react-icons/md";

const benefits = [
  { Icon: MdHandshake, title: "Genuine Friendships", desc: "Build real, lasting friendships with like-minded Ghanaians across the world." },
  { Icon: MdPeopleAlt, title: "Professional Network", desc: "Connect with entrepreneurs, professionals, and industry leaders." },
  { Icon: MdLightbulb, title: "Exchange Ideas", desc: "Learn from diverse experiences and broaden your perspective." },
  { Icon: MdFavorite, title: "Charity Impact", desc: "Participate in meaningful charity projects that change lives." },
  { Icon: MdStars, title: "Cultural Events", desc: "Attend exciting social, cultural, and recreational events." },
  { Icon: MdPublic, title: "Global Community", desc: "Be part of a positive, supportive, purpose-driven Ghanaian family worldwide." },
];

const colors = ["#1B3A8F", "#00B8D4", "#F97316", "#1B3A8F", "#00B8D4", "#F97316"];

export default function WhyJoin() {
  return (
    <section id="why-join" className="bg-hsh-off-white py-12 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] md:text-[7rem] font-black text-black/[0.03] whitespace-nowrap pointer-events-none uppercase tracking-widest font-outfit z-0">
            BENEFITS
          </div>
          <p className="text-xs font-bold tracking-widest uppercase text-hsh-orange relative z-10">Benefits</p>
          <h2 className="font-outfit text-5xl md:text-6xl font-black text-hsh-dark-text mt-2 mb-4 relative z-10">
            Why Join HSH <span className="section-title-highlight">Network?</span>
          </h2>
          <p className="text-lg text-hsh-muted leading-relaxed max-w-2xl mx-auto relative z-10">
            Members enjoy a wealth of opportunities that enrich their personal, professional, and community life.
          </p>
        </div>

        {/* Square Grid */}
        <div className="mx-auto max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {benefits.map((benefit, i) => {
            const BenefitIcon = benefit.Icon;
            const color = colors[i];
            return (
              <div
                key={benefit.title}
                className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]"
              >
                {/* Background Icon Watermark */}
                <div
                  className="absolute -bottom-8 -right-8 opacity-[0.03] pointer-events-none"
                  style={{ color: color }}
                >
                  <BenefitIcon className="w-40 h-40" />
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                    style={{ background: `${color}15`, color: color }}
                  >
                    <BenefitIcon className="w-7 h-7" />
                  </div>
                  <h3 className="font-outfit font-bold text-xl text-hsh-dark-text mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-hsh-muted text-sm leading-relaxed max-w-[280px]">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
