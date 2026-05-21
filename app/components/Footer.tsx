"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(145deg, #0A1840 0%, #0F2460 60%, #00617D 100%)",
      color: "white",
      padding: "4rem 1.5rem 2rem",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "3rem",
          paddingBottom: "3rem",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <Image
                src="/logo.jpeg"
                alt="HSH Network"
                width={52}
                height={52}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <div>
                <div style={{
                  fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
                  fontWeight: 800,
                  fontSize: "1rem",
                  lineHeight: 1.1,
                }}>HSH NETWORK</div>
                <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em" }}>
                  HOME SWEET HOME GHANA
                </div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", lineHeight: 1.7, maxWidth: "240px" }}>
              Ghana, Our Heritage, Our Pride.{" "}
              <em style={{ color: "#FCD116" }}>Where Friendship Meets Purpose.</em>
            </p>
            {/* Gold stars */}
            <div style={{ marginTop: "1rem", color: "#FCD116", letterSpacing: "0.3em" }}>✦ ✦ ✦</div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{
              fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
              fontWeight: 700,
              marginBottom: "1.25rem",
              color: "#00B8D4",
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}>Quick Links</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {[
                { label: "About Us",      href: "#about" },
                { label: "Our Divisions", href: "#divisions" },
                { label: "Activities",    href: "#activities" },
                { label: "Membership",    href: "#membership" },
                { label: "Contact",       href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.2s",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F97316")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)")}
                  >
                    <span style={{ color: "#F97316", fontSize: "0.65rem" }}>▶</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
              fontWeight: 700,
              marginBottom: "1.25rem",
              color: "#00B8D4",
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", marginBottom: "0.2rem" }}>Ghana HQ</div>
                <a href="tel:+233241617899" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "0.88rem" }}>+233 241 617 899</a>
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", marginBottom: "0.2rem" }}>UK Office</div>
                <a href="tel:+447713136911" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "0.88rem" }}>+44 7713 136911</a>
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", marginBottom: "0.2rem" }}>Email</div>
                <a href="mailto:homesweethomeghana2@gmail.com" style={{ color: "#FCD116", textDecoration: "none", fontSize: "0.85rem", wordBreak: "break-all" }}>
                  homesweethomeghana2@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem" }}>
            © {new Date().getFullYear()} Home Sweet Home Ghana Network. All rights reserved.
          </p>
          <a
            href="https://www.facebook.com/HomeSweetHomeGhanaNetwork"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "rgba(255,255,255,0.55)",
              textDecoration: "none",
              fontSize: "0.82rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
