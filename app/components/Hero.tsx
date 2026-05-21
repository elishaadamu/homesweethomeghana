"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icons";

const stats = [
  { icon: <Icon.Users className="w-6 h-6" />, value: "500+", label: "Members Worldwide" },
  { icon: <Icon.Globe className="w-6 h-6" />, value: "12+", label: "Countries" },
  { icon: <Icon.Heart className="w-6 h-6" />, value: "24", label: "Community Projects" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen md:mt-10 bg-[#070F2B] flex items-center overflow-hidden py-28 md:py-32">

      {/* Background decorations container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Background glow */}
        <div className="absolute top-10 left-10 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-cyan-500/10 rounded-full blur-[5rem] sm:blur-[7rem]" />
        <div className="absolute bottom-10 right-10 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-orange-500/10 rounded-full blur-[6rem] sm:blur-[9rem]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:34px_34px]" />
      </div>

      {/* Background image */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-0">
        <Image
          src="/hero_banner.png"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070F2B] via-[#070F2B]/80 to-[#070F2B]/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full px-6 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <Icon.Star className="w-4 h-4 text-amber-300" />
          <span className="text-xs uppercase tracking-widest text-white/80 font-medium">
            Ghana • Heritage • Unity
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tight">
          Home Sweet Home{" "}
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-cyan-300 bg-clip-text text-transparent">
            Ghana Network
          </span>
        </h1>

        {/* Tagline */}
        <div className="mt-6 flex justify-center items-center gap-2 text-cyan-300 font-semibold text-base sm:text-lg md:text-xl">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-300 animate-pulse" />
          Where Friendship Meets Purpose
        </div>

        {/* Description */}
        <p className="mt-6 text-white/70 max-w-2xl text-lg md:text-xl leading-relaxed mx-auto">
          A global community uniting Ghanaians at home and abroad through culture,
          collaboration, service, and shared identity.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Link
            href="/apply"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold shadow-lg hover:scale-[1.03] transition text-lg"
          >
            Join the Network
          </Link>

          <Link
            href="/about"
            className="px-8 py-4 rounded-full border border-white/15 text-white hover:bg-white hover:text-black transition text-lg font-medium"
          >
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex flex-col items-center text-center transition hover:bg-white/10"
            >
              <div className="text-cyan-300 bg-cyan-500/10 p-4 rounded-full mb-4">
                {s.icon}
              </div>
              <div className="text-4xl font-black text-amber-300">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-white/60 mt-2 font-bold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}