"use client";
import { MdLocationOn, MdPublic, MdNotifications, MdEmail, MdPhone } from "react-icons/md";

const offices = [
  {
    Icon: MdLocationOn,
    country: "Ghana Office",
    name: "Mrs. Leticia Twum-Antwi",
    role: "Operations Coordinator",
    phone: "+233 241 617 899",
    href: "tel:+233241617899",
    accent: "var(--navy)",
  },
  {
    Icon: MdPublic,
    country: "United Kingdom Office",
    name: "Cyndi Owusu",
    role: "President",
    phone: "+44 7713 136911",
    href: "tel:+447713136911",
    accent: "var(--cyan)",
  },
  {
    Icon: MdNotifications,
    country: "Public Relations & Media",
    name: "Nana Ama Asantewaa",
    role: "PR & Media Affairs",
    phone: "+233 24 493 3893",
    href: "tel:+233244933893",
    accent: "var(--orange)",
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--light)", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            Contact Us
          </h2>
          <div className="brand-divider" style={{ marginBottom: "1.25rem" }} />
          <p className="section-subtitle" style={{ maxWidth: "460px", margin: "0 auto" }}>
            Reach out to our team — we would love to welcome you into the HSH Network family.
          </p>
        </div>

        {/* Email banner */}
        <a
          href="mailto:homesweethomeghana2@gmail.com"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            background: "linear-gradient(135deg, #0F2460, #1B3A8F)",
            color: "white",
            borderRadius: "16px",
            padding: "1.75rem 2rem",
            marginBottom: "3rem",
            textDecoration: "none",
            boxShadow: "0 12px 40px rgba(27,58,143,0.25)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            flexWrap: "wrap",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(27,58,143,0.35)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(27,58,143,0.25)";
          }}
        >
          <div style={{ fontSize: "1.5rem", color: "#FCD116" }}>
            <MdEmail size={28} />
          </div>
          <div>
            <div style={{
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.1em",
              fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
              textTransform: "uppercase",
              marginBottom: "0.15rem",
            }}>Email Us</div>
            <div style={{
              fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "#FCD116",
            }}>homesweethomeghana2@gmail.com</div>
          </div>
          <span style={{
            marginLeft: "auto",
            background: "rgba(249,115,22,0.25)",
            color: "#F97316",
            padding: "0.5rem 1.2rem",
            borderRadius: "8px",
            fontSize: "0.8rem",
            fontWeight: 700,
            border: "1px solid rgba(249,115,22,0.3)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}>Send Email <span>→</span></span>
        </a>

        {/* Office cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          marginBottom: "2.5rem",
        }}>
          {offices.map((office) => {
            const OfficeIcon = office.Icon;
            return (
              <div
                key={office.country}
                className="glass-card"
                style={{
                  borderRadius: "16px",
                  padding: "2.25rem",
                  borderLeft: `4px solid ${office.accent}`,
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(27,58,143,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                <div style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                  background: `linear-gradient(135deg, ${office.accent}22, ${office.accent}11)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  color: office.accent,
                }}>
                  <OfficeIcon size={24} />
                </div>
                <div style={{
                  fontSize: "0.72rem",
                  color: office.accent,
                  fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}>{office.country}</div>
                <h3 style={{
                  fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
                  fontWeight: 800,
                  color: "var(--dark-text)",
                  fontSize: "1.1rem",
                  marginBottom: "0.25rem",
                }}>{office.name}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: "1.25rem" }}>{office.role}</p>
                <a
                  href={office.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: office.accent,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    textDecoration: "none",
                    fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
                  }}
                >
                  <MdPhone size={16} /> {office.phone}
                </a>
              </div>
            );
          })}
        </div>

        {/* Facebook */}
        <div style={{
          background: "white",
          borderRadius: "16px",
          padding: "1.75rem 2rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          boxShadow: "0 4px 20px rgba(27,58,143,0.08)",
          border: "1px solid rgba(27,58,143,0.08)",
          flexWrap: "wrap",
        }}>
          <div style={{
            width: "50px",
            height: "50px",
            background: "linear-gradient(135deg, #1877F2, #0A66C2)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <svg width="26" height="26" fill="white" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: "0.72rem", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.15rem", fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)", fontWeight: 700 }}>Follow us on Facebook</div>
            <a
              href="https://www.facebook.com/HomeSweetHomeGhanaNetwork"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
                fontWeight: 700,
                color: "#1877F2",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Home Sweet Home Ghana Network
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
