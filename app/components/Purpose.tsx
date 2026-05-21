"use client";
import { MdFlag, MdRocket, MdPublic } from "react-icons/md";

const purposeCards = [
  {
    Icon: MdFlag,
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
    <section
      id="purpose"
      style={{
        background: "linear-gradient(145deg, #0A1840 0%, #0F2460 50%, #00617D 100%)",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div style={{
        position: "absolute", top: "10%", left: "5%",
        width: "400px", height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,184,212,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%",
        width: "300px", height: "300px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Top label */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ color: "#FCD116", fontSize: "1rem" }}>✦</span>
            <span style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.75rem",
              fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
              letterSpacing: "0.15em",
              fontWeight: 700,
              textTransform: "uppercase",
            }}>Our Foundation</span>
            <span style={{ color: "#FCD116", fontSize: "1rem" }}>✦</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 800,
            color: "white",
          }}>Purpose, Mission & Vision</h2>
        </div>

        {/* Three cards - Square Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2.5rem",
        }}>
          {purposeCards.map((card) => {
            const CardIcon = card.Icon;
            return (
              <div
                key={card.label}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "16px",
                  padding: "2.5rem 2rem",
                  color: "white",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                }}
              >
                <div style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "12px",
                  background: `rgba(${card.color === "#00B8D4" ? "0,184,212" : card.color === "#F97316" ? "249,115,22" : "252,209,22"},0.2)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  fontSize: "2rem",
                  color: card.color,
                  border: `1px solid ${card.color}33`,
                }}>
                  <CardIcon size={32} />
                </div>

                <h3 style={{
                  fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  marginBottom: "1rem",
                  color: card.color,
                }}>{card.label}</h3>

                <p style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.8)",
                }}>{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
