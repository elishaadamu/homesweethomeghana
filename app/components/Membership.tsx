"use client";
import { MdLocationOn, MdPublic, MdBusiness, MdCheck, MdArrowForward } from "react-icons/md";

const plans = [
  {
    name: "Local Member",
    price: "GHC 500",
    period: "per year",
    badge: "Ghana",
    color: "#1B3A8F",
    highlight: false,
    Icon: MdLocationOn,
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
    color: "#00B8D4",
    highlight: true,
    Icon: MdPublic,
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
    color: "#F97316",
    highlight: false,
    Icon: MdBusiness,
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
    <section id="membership" className="bg-hsh-off-white py-24 px-6 relative overflow-hidden">
      {/* Background soft glowing accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-hsh-light/40 rounded-full blur-[8rem] pointer-events-none" />

      <div className="mx-auto max-w-[1100px] relative z-10">

        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] md:text-[7rem] font-black text-black/[0.03] whitespace-nowrap pointer-events-none uppercase tracking-widest font-outfit z-0">
            MEMBERSHIP
          </div>
          <p className="text-xs font-bold tracking-widest uppercase text-hsh-orange relative z-10">Become a Member</p>
          <h2 className="font-outfit text-5xl md:text-6xl font-black text-hsh-dark-text mt-2 mb-4 relative z-10">
            Membership <span className="section-title-highlight">Plans</span>
          </h2>
          <p className="text-lg text-hsh-muted leading-relaxed max-w-2xl mx-auto relative z-10">
            Choose the membership tier that fits you. Every plan gives you access to
            a warm, purposeful Ghanaian community.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 items-stretch lg:items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex-1 w-full relative rounded-[2.5rem] p-8 md:p-10 flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 group overflow-hidden ${
                plan.highlight
                  ? "bg-gradient-to-br from-hsh-navy-dark via-[#0c1c48] to-[#091538] text-white border border-hsh-cyan/30 shadow-[0_15px_45px_rgba(15,36,96,0.25)] hover:shadow-[0_25px_60px_rgba(0,184,212,0.3)] hover:border-hsh-cyan/60"
                  : "bg-white border border-hsh-navy/5 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              }`}
            >
              {/* Soft blur light blobs */}
              {plan.highlight ? (
                <>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-hsh-cyan/15 rounded-full blur-[3rem] pointer-events-none transition-all duration-500 group-hover:bg-hsh-cyan/25" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-hsh-gold/5 rounded-full blur-[3rem] pointer-events-none transition-all duration-500 group-hover:bg-hsh-gold/15" />
                </>
              ) : (
                <div 
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[2.5rem] pointer-events-none transition-all duration-500 group-hover:opacity-100" 
                  style={{ background: `${plan.color}08` }}
                />
              )}

              {/* Faint Background Watermark Icon */}
              <div
                className={`absolute -bottom-10 -right-10 pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                  plan.highlight ? "text-hsh-cyan/[0.03]" : "text-black/[0.02]"
                }`}
              >
                <plan.Icon className="w-48 h-48" />
              </div>

              {/* Popular top banner */}
              {plan.highlight && (
                <div className="absolute -top-0 left-1/2 -translate-x-1/2 transform rounded-b-2xl bg-gradient-to-r from-hsh-orange to-hsh-orange-dark px-6 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-[0_4px_15px_rgba(249,115,22,0.35)] whitespace-nowrap">
                  ✦ Most Popular
                </div>
              )}

              {/* Badge & Featured indicator */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div
                  className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
                  style={{
                    background: plan.highlight ? "rgba(0, 184, 212, 0.15)" : `${plan.color}12`,
                    border: `1px solid ${plan.highlight ? "rgba(0, 184, 212, 0.3)" : `${plan.color}30`}`,
                    color: plan.highlight ? "#00B8D4" : plan.color,
                  }}
                >
                  <plan.Icon className="w-3.5 h-3.5" />
                  {plan.badge}
                </div>
                
                {plan.highlight && (
                  <span className="text-[10px] font-black uppercase tracking-widest text-hsh-gold animate-pulse">
                    ★ Featured
                  </span>
                )}
              </div>

              <h3 className={`font-outfit mb-3 text-2xl font-black relative z-10 ${
                plan.highlight ? "text-white" : "text-hsh-dark-text"
              }`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-8 relative z-10">
                <div className="flex items-baseline">
                  <span
                    className={`font-outfit text-5xl font-black tracking-tight ${
                      plan.highlight ? "text-hsh-gold" : "text-hsh-dark-text"
                    }`}
                    style={!plan.highlight ? { color: plan.color } : {}}
                  >
                    {plan.price}
                  </span>
                  <span className={`ml-2 text-sm font-semibold uppercase tracking-wider ${plan.highlight ? "text-white/60" : "text-hsh-muted"}`}>
                    / {plan.period}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className={`w-full h-[1px] mb-8 ${plan.highlight ? "bg-white/10" : "bg-hsh-navy/5"}`} />

              {/* Features */}
              <ul className="mb-10 flex flex-col gap-4 relative z-10">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className={`flex items-center gap-3 text-sm font-semibold ${
                      plan.highlight ? "text-white/90" : "text-hsh-dark-text/80"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlight 
                          ? "bg-hsh-cyan/20 text-hsh-cyan" 
                          : plan.name === "Corporate Partner"
                            ? "bg-hsh-orange/15 text-hsh-orange"
                            : "bg-hsh-navy/10 text-hsh-navy"
                      }`}
                    >
                      <MdCheck className="w-3.5 h-3.5 stroke-[2]" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto pt-4 relative z-10">
                <a
                  href="#contact"
                  className={`font-outfit group flex items-center justify-center gap-2 w-full rounded-full py-4 text-center text-sm font-extrabold uppercase tracking-widest transition-all duration-300 ${
                    plan.highlight 
                      ? "bg-gradient-to-r from-hsh-cyan to-hsh-cyan-light text-white shadow-[0_8px_25px_rgba(0,184,212,0.35)] hover:shadow-[0_12px_35px_rgba(0,184,212,0.55)] hover:-translate-y-0.5 hover:scale-[1.01]" 
                      : plan.name === "Corporate Partner"
                        ? "border-2 border-hsh-orange text-hsh-orange hover:bg-hsh-orange hover:text-white hover:shadow-[0_8px_25px_rgba(249,115,22,0.2)] hover:-translate-y-0.5"
                        : "border-2 border-hsh-navy text-hsh-navy hover:bg-hsh-navy hover:text-white hover:shadow-[0_8px_25px_rgba(27,58,143,0.15)] hover:-translate-y-0.5"
                  }`}
                >
                  <span>{plan.name === "Corporate Partner" ? "Get in Touch" : "Join Now"}</span>
                  <MdArrowForward className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* How to join note */}
        <div className="mt-20 relative overflow-hidden bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 md:p-12 border border-hsh-navy/5 shadow-[0_15px_50px_rgba(0,0,0,0.02)]">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#1B3A8F_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none" />
          
          <h3 className="font-outfit font-black text-2xl md:text-3xl text-hsh-dark-text text-center mb-10 relative z-10">
            How to Join — <span className="text-hsh-cyan">3 Simple Steps</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
            {[
              { 
                step: "01", 
                title: "Request the Form", 
                desc: "Contact us to receive the official HSH Network membership form.", 
                color: "from-hsh-navy to-hsh-navy-light", 
                glow: "rgba(27, 58, 143, 0.25)" 
              },
              { 
                step: "02", 
                title: "Pay the Annual Fee", 
                desc: "Complete payment of your applicable annual commitment fee.", 
                color: "from-hsh-cyan to-hsh-cyan-light", 
                glow: "rgba(0, 184, 212, 0.25)" 
              },
              { 
                step: "03", 
                title: "Participate Actively", 
                desc: "Engage in social and charitable programmes and become part of our family.", 
                color: "from-hsh-orange to-hsh-orange-dark", 
                glow: "rgba(249, 115, 22, 0.25)" 
              },
            ].map((s, index) => (
              <div key={s.step} className="flex flex-col items-center text-center relative px-4 group">
                {/* Connector Line for Desktop */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-7 left-[65%] w-[70%] h-[2px] bg-gradient-to-r from-hsh-navy/10 to-transparent pointer-events-none" />
                )}
                
                <div 
                  className={`w-14 h-14 bg-gradient-to-r ${s.color} rounded-2xl flex items-center justify-center mb-5 font-outfit font-black text-white text-base shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  style={{ boxShadow: `0 8px 20px ${s.glow}` }}
                >
                  {s.step}
                </div>
                
                <h4 className="font-outfit font-bold text-hsh-dark-text mb-2.5 text-lg group-hover:text-hsh-navy transition-colors duration-300">
                  {s.title}
                </h4>
                <p className="text-hsh-muted text-sm leading-relaxed max-w-[260px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

