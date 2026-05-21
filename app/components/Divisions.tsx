"use client";
import { MdFavorite } from "react-icons/md";

export default function Divisions() {
  return (
    <section id="divisions" style={{ background: "var(--light)", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label">Our Structure</p>
          <h2 className="section-title" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            Two Powerful Divisions
          </h2>
          <div className="brand-divider" style={{ marginBottom: "1.25rem" }} />
          <p className="section-subtitle" style={{ maxWidth: "540px", margin: "0 auto" }}>
            The Network operates through two key divisions — each serving a distinct and vital purpose
            in our community.
          </p>
        </div>

        {/* Division cards - Square Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}>

          {/* Social Club */}
          <div
            style={{
              background: "linear-gradient(145deg, #0F2460, #1B3A8F)",
              borderRadius: "20px",
              padding: "3rem 2.5rem",
              color: "white",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(27,58,143,0.25)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 28px 70px rgba(27,58,143,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(27,58,143,0.25)";
            }}
          >
            {/* Background decoration */}
            <div style={{
              position: "absolute", top: "-40px", right: "-40px",
              width: "200px", height: "200px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,184,212,0.2) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{
              width: "70px", height: "70px",
              background: "rgba(0,184,212,0.2)",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              marginBottom: "1.5rem",
              border: "1px solid rgba(0,184,212,0.3)",
              margin: "0 auto 1.5rem",
              color: "#00B8D4",
            }}>

            </div>

            <div style={{
              display: "inline-block",
              background: "rgba(0,184,212,0.2)",
              border: "1px solid rgba(0,184,212,0.4)",
              color: "#00B8D4",
              padding: "0.35rem 1rem",
              borderRadius: "8px",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              width: "fit-content",
              margin: "0 auto 1.25rem",
            }}>Community Engagement</div>

            <h3 style={{
              fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
              fontWeight: 800,
              fontSize: "1.4rem",
              marginBottom: "0.85rem",
            }}>Social Club Division</h3>

            <p style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
              flex: 1,
            }}>
              Bringing members together through social gatherings, cultural celebrations, networking events, sports activities, and recreational outings that strengthen community bonds.
            </p>

            <button style={{
              background: "linear-gradient(135deg, #00B8D4, #00D9FF)",
              color: "#0F2460",
              border: "none",
              padding: "0.8rem 1.8rem",
              borderRadius: "8px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >Learn More</button>
          </div>

          {/* Charity & Service */}
          <div
            style={{
              background: "linear-gradient(145deg, #1B3A8F, #2A4FA8)",
              borderRadius: "20px",
              padding: "3rem 2.5rem",
              color: "white",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(27,58,143,0.25)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 28px 70px rgba(27,58,143,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(27,58,143,0.25)";
            }}
          >
            {/* Background decoration */}
            <div style={{
              position: "absolute", top: "-40px", right: "-40px",
              width: "200px", height: "200px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{
              width: "70px", height: "70px",
              background: "rgba(249,115,22,0.2)",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              marginBottom: "1.5rem",
              border: "1px solid rgba(249,115,22,0.3)",
              margin: "0 auto 1.5rem",
              color: "#F97316",
            }}>
              <MdFavorite size={32} />
            </div>

            <div style={{
              display: "inline-block",
              background: "rgba(249,115,22,0.2)",
              border: "1px solid rgba(249,115,22,0.4)",
              color: "#F97316",
              padding: "0.35rem 1rem",
              borderRadius: "8px",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              width: "fit-content",
              margin: "0 auto 1.25rem",
            }}>Humanitarian Mission</div>

            <h3 style={{
              fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
              fontWeight: 800,
              fontSize: "1.4rem",
              marginBottom: "0.85rem",
            }}>Charity & Service Division</h3>

            <p style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
              flex: 1,
            }}>
              Dedicated to meaningful charitable work including support for disabled individuals, educational scholarships, health initiatives, and spiritual empowerment programmes.
            </p>

            <button style={{
              background: "linear-gradient(135deg, #F97316, #FB923C)",
              color: "white",
              border: "none",
              padding: "0.8rem 1.8rem",
              borderRadius: "8px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
