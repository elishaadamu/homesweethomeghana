"use client";
export default function About() {
  return (
    <section id="about" style={{ background: "var(--off-white)", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label">Who We Are</p>
          <h2 className="section-title" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            About HSH Network
          </h2>
          <div className="brand-divider" style={{ marginBottom: "1.25rem" }} />
          <p className="section-subtitle" style={{ maxWidth: "640px", margin: "0 auto" }}>
            Home Sweet Home Ghana Network is a vibrant and inclusive community of Ghanaians
            and individuals of Ghanaian heritage living both in Ghana and across the diaspora.
          </p>
        </div>

        {/* Two column layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
          alignItems: "center",
        }}>
          {/* Left: text */}
          <div>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "1.0625rem" }}>
              Established to foster meaningful relationships, promote unity, create
              opportunities, and support impactful charitable causes, HSH Network believes
              in the power of togetherness, cultural pride, and community service.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "1.0625rem" }}>
              We provide a welcoming platform where members can connect socially, collaborate
              professionally, inspire one another, and contribute positively to society. Our
              Head Office is in Accra, Ghana, with members and representatives across the world.
            </p>

            {/* Core values pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {["Kindness", "Togetherness", "Integrity", "Love", "Service"].map((v) => (
                <span
                  key={v}
                  style={{
                    background: "linear-gradient(135deg, #1B3A8F, #0F2460)",
                    color: "white",
                    padding: "0.4rem 1.1rem",
                    borderRadius: "50px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Right: feature cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                icon: "🏠",
                title: "Community First",
                desc: "A home away from home for every Ghanaian and friend of Ghana, wherever they are.",
                accent: "var(--navy)",
              },
              {
                icon: "🤝",
                title: "Unity & Collaboration",
                desc: "Bridging the gap between Ghanaians at home and in the diaspora through shared purpose.",
                accent: "var(--cyan)",
              },
              {
                icon: "❤️",
                title: "Charity & Service",
                desc: "Actively giving back through outreach, education, health, and humanitarian efforts.",
                accent: "var(--orange)",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="glass-card"
                style={{
                  borderRadius: "16px",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  cursor: "default",
                  borderLeft: `4px solid ${card.accent}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(27,58,143,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                <div style={{ fontSize: "1.75rem", flexShrink: 0, marginTop: "0.1rem" }}>{card.icon}</div>
                <div>
                  <h3 style={{
                    fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--dark-text)",
                    marginBottom: "0.35rem",
                  }}>{card.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
