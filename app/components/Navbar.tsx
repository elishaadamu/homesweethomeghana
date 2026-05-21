"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icons";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Membership", href: "/membership" },
  { label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      transition: "all 0.3s ease",
      background: scrolled ? "rgba(15,36,96,0.97)" : "rgba(10,24,64,0.55)",
      backdropFilter: "blur(16px)",
      boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.2)" : "none",
    }}>
      <nav style={{
        maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem",
        height: "76px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          <Image src="/logo.jpeg" alt="HSH Network" width={52} height={52}
            style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(0,184,212,0.5)" }} />
          <div>
            <div style={{ fontFamily: "var(--font-outfit,'Outfit',Arial,sans-serif)", fontWeight: 800, fontSize: "1rem", color: "white", lineHeight: 1.1 }}>HSH NETWORK</div>
            <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.08em" }}>HOME SWEET HOME GHANA</div>
          </div>
        </Link>

        {/* Desktop */}
        <ul style={{ display: "flex", gap: "0.15rem", listStyle: "none", alignItems: "center" }} className="desktop-nav">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} style={{
                color: "rgba(255,255,255,0.82)", textDecoration: "none",
                fontSize: "0.9rem", fontWeight: 500, padding: "0.4rem 0.9rem",
                borderRadius: "8px", transition: "all 0.2s ease", display: "block",
                fontFamily: "var(--font-outfit,'Outfit',Arial,sans-serif)",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.82)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >{l.label}</Link>
            </li>
          ))}
          <li>
            <Link href="/membership" className="btn-orange" style={{ padding: "0.55rem 1.4rem", fontSize: "0.88rem" }}>
              Join Now
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "white", padding: "0.5rem" }}>
          {menuOpen ? <Icon.X style={{ width: 24, height: 24 }} /> : <Icon.Menu style={{ width: 24, height: 24 }} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "rgba(10,24,64,0.98)", backdropFilter: "blur(16px)", padding: "1rem 1.5rem 2rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: "block", color: "rgba(255,255,255,0.85)", textDecoration: "none",
              fontFamily: "var(--font-outfit,'Outfit',Arial,sans-serif)", fontSize: "1rem",
              fontWeight: 500, padding: "0.85rem 0", borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}>{l.label}</Link>
          ))}
          <Link href="/membership" className="btn-orange" onClick={() => setMenuOpen(false)}
            style={{ marginTop: "1.25rem", display: "inline-flex", fontSize: "0.95rem" }}>
            Join Now <Icon.ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
