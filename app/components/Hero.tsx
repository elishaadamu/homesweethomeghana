"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icons";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0A1840] flex items-center relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero_banner.png" alt="" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/[0.82]" />
      </div>

      {/* Content */}
      <div className="max-w-5xl w-full mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-hsh-cyan/12 border border-hsh-cyan/25 rounded-lg px-4 py-2 mb-7">
            <Icon.Star className="w-3.5 h-3.5" style={{ color: "#FCD116" }} />
            <span className="text-white/85 text-xs font-outline tracking-widest font-semibold uppercase">
              Ghana, Our Heritage, Our Pride
            </span>
          </div>

          <h1 className="font-outfit text-5xl md:text-6xl font-black text-white leading-tight mb-5">
            Home Sweet Home<br />
            <span className="text-hsh-gold">Ghana Network</span>
          </h1>

          <p className="text-lg text-white/72 leading-relaxed mb-3 italic">
            Where Friendship Meets Purpose
          </p>
          <p className="text-base text-white/58 leading-relaxed mb-9 max-w-2xl">
            A vibrant global community uniting Ghanaians at home and in the diaspora through
            friendship, collaboration, cultural pride, and charitable service.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href="/apply" className="inline-flex items-center gap-2 bg-gradient-to-br from-hsh-orange to-orange-400 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all text-lg">
              <Icon.UserPlus className="w-5 h-5" />
              Join the Network
            </Link>
            <Link href="/about" className="inline-flex items-center gap-2 bg-transparent text-white font-semibold py-3 px-6 rounded-full border-2 border-white/50 hover:bg-white/15 hover:border-white transition-all text-lg">
              Learn More
              <Icon.ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="flex gap-4 mt-14 flex-wrap">
          {[
            { icon: <Icon.Users className="w-5 h-5" />, value: "500+", label: "Members Worldwide" },
            { icon: <Icon.Globe className="w-5 h-5" />, value: "2+",   label: "Countries" },
            { icon: <Icon.Heart className="w-5 h-5" />, value: "2",    label: "Active Divisions" },
          ].map((s) => (
            <div key={s.label} className="bg-white/6 border border-white/10 rounded-2xl p-4 flex items-center gap-3 min-w-fit">
              <div className="text-hsh-cyan">{s.icon}</div>
              <div>
                <div className="font-outfit font-black text-2xl text-hsh-gold">{s.value}</div>
                <div className="text-xs text-white/50">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
