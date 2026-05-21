"use client";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Purpose from "../components/Purpose";
import WhyJoin from "../components/WhyJoin";
import Footer from "../components/Footer";

import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "76px" }}>
        <About />

        {/* Visual Impact Banner */}
        <section style={{ background: "white", padding: "5rem 1.5rem" }}>
          <div style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center"
          }}>
            <div>
              <Image
                src="/charity_outreach.png"
                alt="HSH Network Charity Outreach"
                width={500}
                height={500}
                style={{
                  borderRadius: "20px",
                  boxShadow: "0 12px 32px rgba(27,58,143,0.1)",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover"
                }}
              />
            </div>
            <div>
              <p className="section-label">Humanitarian Mission</p>
              <h2 className="section-title" style={{ marginTop: "0.5rem", marginBottom: "1.25rem", fontSize: "2rem" }}>
                Making a Real <span className="section-title-highlight">Difference</span>
              </h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "0.98rem" }}>
                Through our Charity & Service Division, we actively invest in school supplies, visit and support persons living with disabilities, and organize community health and wellness screenings across Ghana.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.98rem" }}>
                Every membership contribution helps fuel these missions of love, service, and hope—bringing tangible relief and joy to children and families in need.
              </p>
            </div>
          </div>
        </section>

        <Purpose />
        <WhyJoin />
      </main>
      <Footer />
    </>
  );
}
