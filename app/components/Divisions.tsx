"use client";
import { Icon } from "./Icons";

export default function Divisions() {
  return (
    <section id="divisions" className="bg-hsh-off-white py-24 px-6">
      <div className="mx-auto max-w-[1200px]">

        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] md:text-[7rem] font-black text-black/[0.03] whitespace-nowrap pointer-events-none uppercase tracking-widest font-outfit z-0">
            DIVISIONS
          </div>
          <p className="text-xs font-bold tracking-widest uppercase text-hsh-orange relative z-10">Our Structure</p>
          <h2 className="font-outfit text-5xl md:text-6xl font-black text-hsh-dark-text mt-2 mb-4 relative z-10">
            Two Powerful <span className="section-title-highlight">Divisions</span>
          </h2>
          <p className="text-lg text-hsh-muted leading-relaxed max-w-2xl mx-auto relative z-10">
            The Network operates through two key divisions, each serving a distinct and vital purpose
            in our community.
          </p>
        </div>

        {/* Division cards */}
        <div className="mx-auto max-w-[900px] flex flex-col md:flex-row justify-center gap-10">

          {/* Social Club */}
          <div
            className="flex-1 w-full bg-white rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]"
          >
            {/* Background Icon Watermark */}
            <div className="absolute -bottom-8 -right-8 opacity-[0.03] pointer-events-none text-hsh-cyan">
              <Icon.Users className="w-48 h-48" />
            </div>

            <div className="relative z-10 flex flex-col items-center h-full">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm bg-hsh-cyan/10 text-hsh-cyan">
                <Icon.Users className="w-7 h-7" />
              </div>

              <div className="mb-4 inline-block rounded-lg border border-hsh-cyan/20 bg-hsh-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-hsh-cyan">
                Community Engagement
              </div>

              <h3 className="font-outfit font-bold text-2xl text-hsh-dark-text mb-3">Social Club Division</h3>

              <p className="flex-1 text-hsh-muted text-sm leading-relaxed max-w-[280px] mb-8">
                Bringing members together through social gatherings, cultural celebrations, networking events, sports activities, and recreational outings that strengthen community bonds.
              </p>

              <button className="rounded-full bg-hsh-cyan px-6 py-2.5 font-bold text-hsh-navy-dark shadow-md transition-transform duration-200 hover:-translate-y-0.5 active:scale-95 text-sm mt-auto">
                Learn More
              </button>
            </div>
          </div>

          {/* Charity & Service */}
          <div
            className="flex-1 w-full bg-white rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]"
          >
            {/* Background Icon Watermark */}
            <div className="absolute -bottom-8 -right-8 opacity-[0.03] pointer-events-none text-hsh-orange">
              <Icon.Heart className="w-48 h-48" />
            </div>

            <div className="relative z-10 flex flex-col items-center h-full">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm bg-hsh-orange/10 text-hsh-orange">
                <Icon.Heart className="w-7 h-7" />
              </div>

              <div className="mb-4 inline-block rounded-lg border border-hsh-orange/20 bg-hsh-orange/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-hsh-orange">
                Humanitarian Mission
              </div>

              <h3 className="font-outfit font-bold text-2xl text-hsh-dark-text mb-3">Charity & Service Division</h3>

              <p className="flex-1 text-hsh-muted text-sm leading-relaxed max-w-[280px] mb-8">
                Dedicated to meaningful charitable work including support for disabled individuals, educational scholarships, health initiatives, and spiritual empowerment programmes.
              </p>

              <button className="rounded-full bg-hsh-orange px-6 py-2.5 font-bold text-white shadow-md transition-transform duration-200 hover:-translate-y-0.5 active:scale-95 text-sm mt-auto">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
