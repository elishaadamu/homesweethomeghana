"use client";
import { useState } from "react";
import Image from "next/image";
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

const cardColors = ["#1B3A8F", "#00B8D4", "#F97316", "#1B3A8F", "#00B8D4"];

export default function Activities() {
  const [active, setActive] = useState("social");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section id="activities" className="bg-hsh-off-white py-6 px-6 scroll-mt-20 overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] md:text-[7rem] font-black text-black/[0.03] whitespace-nowrap pointer-events-none uppercase tracking-widest font-outfit z-0">
            ACTIVITIES
          </div>
          <p className="text-xs font-bold tracking-widest uppercase text-hsh-orange relative z-10">What We Do</p>
          <h2 className="font-outfit text-5xl md:text-6xl font-black text-hsh-dark-text mt-2 mb-4 relative z-10">
            Our <span className="section-title-highlight">Activities</span>
          </h2>
          <p className="text-lg text-hsh-muted leading-relaxed max-w-2xl mx-auto relative z-10">
            From social gatherings to humanitarian outreach, there is something meaningful for every member.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((t) => {
            const TabIcon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex items-center gap-2.5 px-8 py-3 rounded-xl border-0 cursor-pointer font-outfit font-bold text-base transition-all duration-300 ${
                  active === t.id
                    ? "bg-hsh-navy text-white shadow-lg"
                    : "bg-white text-hsh-muted shadow-sm hover:shadow-md"
                }`}
              >
                <TabIcon size={20} />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Banner Image */}
        <div className="w-full h-64 md:h-[400px] relative rounded-[2rem] overflow-hidden mb-16 shadow-lg border border-black/5 max-w-5xl mx-auto">
          <Image
            src={active === "social" ? "/social_club.png" : "/charity_service.png"}
            alt={tab.label}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-6 left-8 md:bottom-10 md:left-12">
            <h3 className="text-white font-outfit font-black text-3xl md:text-4xl">{tab.label}</h3>
          </div>
        </div>

        {/* Activity cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tab.activities.map((act, i) => {
            const IconComponent = act.Icon;
            const color = cardColors[i];
            return (
              <div
                key={act.title}
                className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]"
              >
                {/* Background Icon Watermark */}
                <div
                  className="absolute -bottom-8 -right-8 opacity-[0.03] pointer-events-none"
                  style={{ color }}
                >
                  <IconComponent className="w-40 h-40" />
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                    style={{ background: `${color}15`, color: color }}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="font-outfit font-bold text-xl text-hsh-dark-text mb-3">
                    {act.title}
                  </h3>
                  <p className="text-hsh-muted text-sm leading-relaxed max-w-[280px]">
                    {act.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
