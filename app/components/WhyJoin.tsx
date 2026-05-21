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

export default function WhyJoin() {
  return (
    <section id="why-join" style={{ background: "var(--off-white)", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label">Benefits</p>
          <h2 className="section-title" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            Why Join HSH Network?
          </h2>
          <div className="brand-divider" style={{ marginBottom: "1.25rem" }} />
          <p className="section-subtitle" style={{ maxWidth: "500px", margin: "0 auto" }}>
            Members enjoy a wealth of opportunities that enrich their personal, professional, and community life.
          </p>
        </div>

        {/* Square Grid - 2x3 or 3x2 layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.75rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}>
          {benefits.map((benefit, i) => {
            const BenefitIcon = benefit.Icon;
            return (
              <div
                key={benefit.title}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid rgba(27,58,143,0.08)",
                  boxShadow: "0 2px 12px rgba(27,58,143,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(27,58,143,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(27,58,143,0.05)";
                }}
              >
                <div style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  background: i % 3 === 0 ? "rgba(27,58,143,0.12)"
                             : i % 3 === 1 ? "rgba(0,184,212,0.12)"
                             : "rgba(249,115,22,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  flexShrink: 0,
                  marginBottom: "1rem",
                  color: i % 3 === 0 ? "var(--navy-light)"
                       : i % 3 === 1 ? "#00B8D4"
                       : "#F97316",
                }}>
                  <BenefitIcon size={28} />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
                  fontWeight: 700,
                  color: "var(--dark-text)",
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                  lineHeight: 1.3,
                }}>{benefit.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
