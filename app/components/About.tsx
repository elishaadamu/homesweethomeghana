"use client";
import { Icon } from "./Icons";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-hsh-off-white py-24 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] md:text-[7rem] font-black text-black/[0.03] whitespace-nowrap pointer-events-none uppercase tracking-widest font-outfit z-0">
            ABOUT US
          </div>
          <p className="text-xs font-bold tracking-widest uppercase text-hsh-orange relative z-10">Who We Are</p>
          <h2 className="font-outfit text-5xl md:text-6xl font-black text-hsh-dark-text mt-2 mb-4 relative z-10">
            About HSH <span className="section-title-highlight">Network</span>
          </h2>
          <p className="text-lg text-hsh-muted leading-relaxed max-w-2xl mx-auto relative z-10">
            Home Sweet Home Ghana Network is a vibrant and inclusive community of Ghanaians
            and individuals of Ghanaian heritage living both in Ghana and across the diaspora.
          </p>
        </div>

        {/* Row 1: Two column layout with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-hsh-navy/5">
            <Image src="/about_community.png" alt="Ghanaian Community" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-hsh-navy-dark/40 to-transparent" />
          </div>

          {/* Right: Text and Core Pillars */}
          <div className="flex flex-col justify-center">
            <h3 className="font-outfit text-3xl font-black text-hsh-navy-dark mb-5">Empowering Our Global Community</h3>
            <p className="text-hsh-muted leading-relaxed text-lg mb-8">
              HSH Network is built on the power of togetherness. We provide a welcoming platform for Ghanaians worldwide to connect socially, collaborate professionally, and contribute positively to society through meaningful charitable causes.
            </p>

            {/* Core Values */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white to-hsh-off-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white mt-8 overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-hsh-orange/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-hsh-orange to-amber-400 flex items-center justify-center text-white shadow-lg shadow-hsh-orange/20">
                    <Icon.Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-black text-2xl text-hsh-navy-dark tracking-tight">
                      Our Core Pillars
                    </h4>
                  </div>
                </div>
                
                <p className="text-hsh-muted text-base leading-relaxed mb-6">
                  Guiding principles that define our relationships within the global network.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {["Kindness", "Togetherness", "Integrity", "Love", "Service"].map((v) => (
                    <div
                      key={v}
                      className="group relative px-6 py-2.5 rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-hsh-orange to-amber-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      <span className="relative font-outfit font-bold text-hsh-navy-dark group-hover:text-hsh-orange transition-colors">
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Core value cards in a horizontal grid */}
        <div className="about-cards-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              IconComp: Icon.Home,
              title: "Community First",
              desc: "A home away from home for every Ghanaian and friend of Ghana, wherever they are.",
              accent: "#1B3A8F",
            },
            {
              IconComp: Icon.Users,
              title: "Unity & Collaboration",
              desc: "Bridging the gap between Ghanaians at home and in the diaspora through shared purpose.",
              accent: "#00B8D4",
            },
            {
              IconComp: Icon.Heart,
              title: "Charity & Service",
              desc: "Actively giving back through outreach, education, health, and humanitarian efforts.",
              accent: "#F97316",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]"
            >
              {/* Background Icon Watermark */}
              <div
                className="absolute -bottom-8 -right-8 opacity-[0.03] pointer-events-none"
                style={{ color: card.accent }}
              >
                <card.IconComp className="w-48 h-48" />
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                  style={{ background: `${card.accent}15`, color: card.accent }}
                >
                  <card.IconComp className="w-7 h-7" />
                </div>
                <h3 className="font-outfit font-bold text-xl text-hsh-dark-text mb-3">
                  {card.title}
                </h3>
                <p className="text-hsh-muted text-sm leading-relaxed max-w-[280px]">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
