"use client";
import { useState } from "react";
import { MdLocalBar, MdMessage, MdEmojiEvents, MdLocationOn, MdPeople, MdHandshake, MdMenuBook, MdFavoriteBorder, MdLocalHospital } from "react-icons/md";

const tabs = [
  {
    id: "social",
    label: "Social Club",
    icon: MdLocalBar,
    activities: [
      { Icon: MdLocalBar, title: "Fun Friday Gatherings", desc: "Monthly social mixers and cultural celebrations with food, music, and fun." },
      { Icon: MdMessage, title: "Chill & Chat Sessions", desc: "Relaxed networking events for members to connect and share ideas." },
      { Icon: MdEmojiEvents, title: "Sports & Fitness", desc: "Group sports activities, fitness challenges, and wellness programmes." },
      { Icon: MdLocationOn, title: "Family Leisure Excursions", desc: "Cultural outings, trips, and family-friendly leisure activities." },
      { Icon: MdPeople, title: "Pop-Up Networking Centres", desc: "Spontaneous networking hubs that spark new connections and collaborations." },
    ],
  },
  {
    id: "charity",
    label: "Charity & Service",
    icon: MdHandshake,
    activities: [
      { Icon: MdHandshake, title: "Time with Disabled", desc: "Outreach programmes visiting and supporting persons living with disabilities." },
      { Icon: MdMenuBook, title: "School & Hospital Support", desc: "Visits and donations to schools, hospitals, and orphanages across Ghana." },
      { Icon: MdLocalHospital, title: "Health Initiatives", desc: "Community health drives, screenings, and medical support programmes." },
      { Icon: MdMenuBook, title: "Educational Support", desc: "Scholarships, supplies, and mentorship for underprivileged students." },
      { Icon: MdFavoriteBorder, title: "Spiritual Hour", desc: "Sessions of prayer, encouragement, and emotional support for the community." },
    ],
  },
];

export default function Activities() {
  const [active, setActive] = useState("social");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section id="activities" style={{ background: "var(--off-white)", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label">What We Do</p>
          <h2 className="section-title" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            Our Activities
          </h2>
          <div className="brand-divider" style={{ marginBottom: "1.25rem" }} />
          <p className="section-subtitle" style={{ maxWidth: "500px", margin: "0 auto" }}>
            From social gatherings to humanitarian outreach — there is something meaningful for every member.
          </p>
        </div>

        {/* Tab switcher */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "3rem",
          flexWrap: "wrap",
        }}>
          {tabs.map((t) => {
            const TabIcon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.8rem 2rem",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  background: active === t.id
                    ? "linear-gradient(135deg, #1B3A8F, #0F2460)"
                    : "white",
                  color: active === t.id ? "white" : "var(--muted)",
                  boxShadow: active === t.id
                    ? "0 8px 24px rgba(27,58,143,0.3)"
                    : "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <TabIcon size={20} />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Activity cards - Square Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}>
          {tab.activities.map((act, i) => {
            const IconComponent = act.Icon;
            return (
              <div
                key={act.title}
                className="glass-card"
                style={{
                  borderRadius: "16px",
                  padding: "2rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "all 0.3s ease",
                  animationDelay: `${i * 0.07}s`,
                  cursor: "default",
                  aspectRatio: "1",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
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
                {/* Icon container */}
                <div style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  background: `linear-gradient(135deg, rgba(27,58,143,0.12), rgba(0,184,212,0.12))`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                  fontSize: "1.8rem",
                  color: "var(--navy-light)",
                }}>
                  <IconComponent size={28} />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-outfit, 'Outfit', Arial, sans-serif)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "var(--dark-text)",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}>{act.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.8rem", lineHeight: 1.5 }}>{act.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
