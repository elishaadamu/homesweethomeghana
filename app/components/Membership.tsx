"use client";
const plans = [
  {
    name: "Local Member",
    price: "GHC 500",
    period: "per year",
    badge: "Ghana",
    color: "#1B3A8F",
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
    color: "#00B8D4",
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
    color: "#F97316",
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
    <section id="membership" className="bg-hsh-off-white py-24 px-6">
      <div className="mx-auto max-w-[1100px]">

        {/* Header */}
        <div className="text-center mb-16 relative">
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
              className={`flex-1 w-full relative rounded-[2rem] p-8 md:p-10 flex flex-col transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                plan.highlight
                  ? "bg-hsh-navy-dark shadow-[0_12px_40px_rgba(15,36,96,0.25)] hover:shadow-[0_16px_50px_rgba(15,36,96,0.35)]"
                  : "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]"
              }`}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 transform rounded-full bg-hsh-orange px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-white whitespace-nowrap">
                  ✦ Most Popular
                </div>
              )}

              {/* Badge */}
              <div
                className="mb-5 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
                style={{
                  background: `${plan.color}18`,
                  border: `1px solid ${plan.color}44`,
                  color: plan.highlight ? "#00B8D4" : plan.color,
                }}
              >
                {plan.badge}
              </div>

              <h3 className={`font-outfit mb-2 text-xl font-black ${
                plan.highlight ? "text-white" : "text-hsh-dark-text"
              }`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-7">
                <span
                  className="font-outfit text-4xl font-black"
                  style={{ color: plan.highlight ? "#FCD116" : plan.color }}
                >
                  {plan.price}
                </span>
                <span className={`ml-2 text-sm ${plan.highlight ? "text-white/55" : "text-hsh-muted"}`}>
                  / {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="mb-8 flex flex-col gap-2.5">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className={`flex items-start gap-2.5 text-sm ${
                      plan.highlight ? "text-white/80" : "text-hsh-muted"
                    }`}
                  >
                    <span
                      style={{ color: plan.highlight ? "#00B8D4" : plan.color }}
                      className="flex-shrink-0"
                    >
                      ✓
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto pt-8">
                <a
                  href="#contact"
                  className={`font-outfit block w-full rounded-full py-4 text-center text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                    plan.highlight 
                      ? "bg-hsh-cyan text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5" 
                      : "bg-[#F4F7FC] text-hsh-navy hover:bg-[#E8EEF8]"
                  }`}
                >
                  {plan.name === "Corporate Partner" ? "Get in Touch" : "Join Now →"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* How to join note */}
        <div className="mt-16 bg-white rounded-3xl p-10 shadow-sm border border-hsh-navy/7">
          <h3 className="font-outfit font-black text-2xl text-hsh-dark-text text-center mb-8">
            How to Join — 3 Simple Steps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Request the Form", desc: "Contact us to receive the official HSH Network membership form." },
              { step: "02", title: "Pay the Annual Fee", desc: "Complete payment of your applicable annual commitment fee." },
              { step: "03", title: "Participate Actively", desc: "Engage in social and charitable programmes and become part of our family." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 bg-hsh-navy-dark rounded-full flex items-center justify-center mx-auto mb-4 font-outfit font-black text-hsh-gold text-sm">
                  {s.step}
                </div>
                <h4 className="font-outfit font-bold text-hsh-dark-text mb-2 text-base">
                  {s.title}
                </h4>
                <p className="text-hsh-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
