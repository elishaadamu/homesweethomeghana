"use client";
const plans = [
  {
    name: "Local Member",
    price: "GHC 500",
    period: "per year",
    badge: "Ghana",
    color: "var(--navy)",
    highlight: false,
    features: [
      "Full social club access",
      "Charity programme participation",
      "Networking events",
      "Cultural activities",
      "Member community access",
    ],
  },
  {
    name: "Diaspora Member",
    price: "GHC 1,000",
    period: "per year",
    badge: "Worldwide",
    color: "var(--cyan)",
    highlight: true,
    features: [
      "Everything in Local",
      "International networking",
      "Diaspora-specific events",
      "Home connection initiatives",
      "Priority membership support",
    ],
  },
  {
    name: "Corporate Partner",
    price: "Custom",
    period: "partnership",
    badge: "Enterprise",
    color: "var(--orange)",
    highlight: false,
    features: [
      "Tailored partnership package",
      "Brand visibility & promotion",
      "CSR collaboration opportunities",
      "Event sponsorship access",
      "Network-wide engagement",
    ],
  },
];

export default function Membership() {
  return (
    <section id="membership" style={{ background: "var(--light)", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label">Become a Member</p>
          <h2 className="section-title" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            Membership Plans
          </h2>
          <div className="brand-divider" style={{ marginBottom: "1.25rem" }} />
          <p className="section-subtitle" style={{ maxWidth: "520px", margin: "0 auto" }}>
            Choose the membership tier that fits you. Every plan gives you access to
            a warm, purposeful Ghanaian community.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          gap: "2rem",
          alignItems: "start",
        }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                borderRadius: "24px",
                padding: plan.highlight ? "2.75rem 2rem" : "2.25rem 2rem",
                background: plan.highlight
                  ? "linear-gradient(145deg, #0F2460, #1B3A8F)"
                  : "white",
                boxShadow: plan.highlight
                  ? "0 24px 70px rgba(27,58,143,0.3)"
                  : "0 4px 20px rgba(27,58,143,0.08)",
                border: plan.highlight
                  ? "2px solid rgba(0,184,212,0.4)"
                  : "1px solid rgba(27,58,143,0.08)",
                position: "relative",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div style={{
                  position: "absolute",
                  top: "-14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "linear-gradient(135deg, #F97316, #FBA043)",
                  color: "white",
                  padding: "0.3rem 1.25rem",
                  borderRadius: "50px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}>
                  ✦ Most Popular
                </div>
              )}

              {/* Badge */}
              <div style={{
                display: "inline-block",
                background: `${plan.color}18`,
                border: `1px solid ${plan.color}44`,
                color: plan.highlight ? "#00B8D4" : plan.color,
                padding: "0.3rem 0.85rem",
                borderRadius: "50px",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}>{plan.badge}</div>

              <h3 style={{
                fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
                fontSize: "1.25rem",
                fontWeight: 800,
                color: plan.highlight ? "white" : "var(--dark-text)",
                marginBottom: "0.5rem",
              }}>{plan.name}</h3>

              {/* Price */}
              <div style={{ marginBottom: "1.75rem" }}>
                <span style={{
                  fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
                  fontSize: "2.25rem",
                  fontWeight: 900,
                  color: plan.highlight ? "#FCD116" : plan.color,
                }}>{plan.price}</span>
                <span style={{
                  color: plan.highlight ? "rgba(255,255,255,0.55)" : "var(--muted)",
                  fontSize: "0.85rem",
                  marginLeft: "0.35rem",
                }}>/ {plan.period}</span>
              </div>

              {/* Features */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "2rem" }}>
                {plan.features.map((feat) => (
                  <li key={feat} style={{
                    display: "flex",
                    gap: "0.6rem",
                    alignItems: "flex-start",
                    color: plan.highlight ? "rgba(255,255,255,0.8)" : "var(--muted)",
                    fontSize: "0.9rem",
                  }}>
                    <span style={{ color: plan.highlight ? "#00B8D4" : plan.color, flexShrink: 0 }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "0.85rem",
                  borderRadius: "50px",
                  fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  background: plan.highlight
                    ? "linear-gradient(135deg, #F97316, #FBA043)"
                    : `linear-gradient(135deg, ${plan.color}, ${plan.color}cc)`,
                  color: "white",
                  boxShadow: plan.highlight ? "0 6px 20px rgba(249,115,22,0.35)" : "none",
                }}
              >
                {plan.name === "Corporate Partner" ? "Get in Touch" : "Join Now →"}
              </a>
            </div>
          ))}
        </div>

        {/* How to join note */}
        <div style={{
          marginTop: "4rem",
          background: "white",
          borderRadius: "20px",
          padding: "2.5rem",
          boxShadow: "0 4px 20px rgba(27,58,143,0.07)",
          border: "1px solid rgba(27,58,143,0.07)",
        }}>
          <h3 style={{
            fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
            fontWeight: 800,
            fontSize: "1.25rem",
            color: "var(--dark-text)",
            textAlign: "center",
            marginBottom: "2rem",
          }}>How to Join — 3 Simple Steps</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}>
            {[
              { step: "01", title: "Request the Form", desc: "Contact us to receive the official HSH Network membership form." },
              { step: "02", title: "Pay the Annual Fee", desc: "Complete payment of your applicable annual commitment fee." },
              { step: "03", title: "Participate Actively", desc: "Engage in social and charitable programmes and become part of our family." },
            ].map((s) => (
              <div key={s.step} style={{ textAlign: "center" }}>
                <div style={{
                  width: "52px",
                  height: "52px",
                  background: "linear-gradient(135deg, #0F2460, #1B3A8F)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
                  fontWeight: 800,
                  color: "#FCD116",
                  fontSize: "0.85rem",
                }}>{s.step}</div>
                <h4 style={{
                  fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
                  fontWeight: 700,
                  color: "var(--dark-text)",
                  marginBottom: "0.4rem",
                  fontSize: "0.95rem",
                }}>{s.title}</h4>
                <p style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
