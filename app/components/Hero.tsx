"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icons";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      background: "linear-gradient(145deg, #0A1840 0%, #0F2460 40%, #0D3F7F 70%, #00617D 100%)",
      display: "flex", alignItems: "center", position: "relative", overflow: "hidden",
    }}>
      {/* Background image overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image src="/flyer2.jpeg" alt="" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, rgba(10,24,64,0.90) 0%, rgba(15,36,96,0.85) 40%, rgba(0,97,125,0.82) 100%)" }} />
      </div>

      {/* Dot grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px", zIndex: 1, pointerEvents: "none" }} />

      {/* Content */}
      <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto", padding: "0 1.5rem", paddingTop: "100px", paddingBottom: "5rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "680px" }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(0,184,212,0.15)", border: "1px solid rgba(0,184,212,0.35)", borderRadius: "50px", padding: "0.4rem 1rem", marginBottom: "1.75rem" }}>
            <Icon.Star style={{ width: 14, height: 14, color: "#FCD116" }} />
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.78rem", fontFamily: "var(--font-outfit,'Outfit',Arial,sans-serif)", letterSpacing: "0.12em", fontWeight: 600, textTransform: "uppercase" }}>
              Ghana, Our Heritage, Our Pride
            </span>
            <Icon.Star style={{ width: 14, height: 14, color: "#FCD116" }} />
          </div>

          <h1 style={{ fontFamily: "var(--font-outfit,'Outfit',Arial,sans-serif)", fontSize: "clamp(2.4rem,6vw,4.2rem)", fontWeight: 900, color: "white", lineHeight: 1.08, marginBottom: "1.25rem" }}>
            Home Sweet Home<br />
            <span style={{ background: "linear-gradient(135deg, #00B8D4, #FCD116)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Ghana Network
            </span>
          </h1>

          <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, marginBottom: "0.75rem", fontStyle: "italic" }}>
            Where Friendship Meets Purpose
          </p>
          <p style={{ fontSize: "0.98rem", color: "rgba(255,255,255,0.58)", lineHeight: 1.75, marginBottom: "2.25rem", maxWidth: "520px" }}>
            A vibrant global community uniting Ghanaians at home and in the diaspora through
            friendship, collaboration, cultural pride, and charitable service.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/membership" className="btn-orange" style={{ fontSize: "1rem", padding: "0.9rem 2.25rem" }}>
              <Icon.UserPlus style={{ width: 18, height: 18 }} />
              Join the Network
            </Link>
            <Link href="/about" className="btn-outline-white" style={{ fontSize: "1rem", padding: "0.9rem 2.25rem" }}>
              Learn More
              <Icon.ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          </div>
        </div>

        {/* Floating stat cards */}
        <div style={{ display: "flex", gap: "1rem", marginTop: "3.5rem", flexWrap: "wrap" }}>
          {[
            { icon: <Icon.Users style={{ width: 20, height: 20 }} />, value: "500+", label: "Members Worldwide" },
            { icon: <Icon.Globe style={{ width: 20, height: 20 }} />, value: "2+",   label: "Countries" },
            { icon: <Icon.Heart style={{ width: 20, height: 20 }} />, value: "2",    label: "Active Divisions" },
          ].map((s) => (
            <div key={s.label} style={{
              background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.12)", borderRadius: "16px",
              padding: "1rem 1.5rem", display: "flex", alignItems: "center", gap: "0.85rem",
              minWidth: "160px",
            }}>
              <div style={{ color: "#00B8D4" }}>{s.icon}</div>
              <div>
                <div style={{ fontFamily: "var(--font-outfit,'Outfit',Arial,sans-serif)", fontWeight: 800, fontSize: "1.4rem", color: "#FCD116" }}>{s.value}</div>
                <div style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave into page */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "72px", background: "var(--off-white)", clipPath: "ellipse(55% 100% at 50% 100%)" }} />
    </section>
  );
}
