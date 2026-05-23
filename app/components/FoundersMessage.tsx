import React from 'react';

export default function FoundersMessage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative bg-hsh-light rounded-[2.5rem] p-8 md:p-16 border border-hsh-navy/5 shadow-[0_15px_40px_rgba(0,37,118,0.03)] overflow-hidden">
          
          {/* Subtle design details */}
          <div className="absolute top-0 left-0 w-3 h-full bg-hsh-cyan" />
          
          {/* Decorative Quote Icon */}
          <div className="absolute top-8 left-8 text-hsh-cyan/15 text-9xl font-serif pointer-events-none select-none leading-none">
            “
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Tag */}
            <span className="text-xs uppercase tracking-widest text-hsh-cyan font-black mb-6 px-4 py-1.5 rounded-full bg-hsh-cyan/10 font-outfit">
              A Message From Our Founder
            </span>
            
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-black text-hsh-navy font-outfit mb-8 tracking-tight">
              Friendship Meets Purpose
            </h2>
            
            {/* Main message text */}
            <div className="space-y-6 text-hsh-navy/85 text-lg md:text-xl font-medium leading-relaxed max-w-2xl font-inter italic">
              <p>
                "Welcome to Home Sweet Home Ghana Network - a community built on love, unity, friendship, and service. Our vision is to bring Ghanaians and friends of Ghana together from all walks of life, both at home and across the diaspora, to create meaningful connections and make a positive impact in our communities."
              </p>
              <p>
                "At HSH Network, we believe that together we are stronger. Through social engagement, professional collaboration, and charitable service, we aim to inspire hope, support one another, and celebrate our rich Ghanaian heritage with pride."
              </p>
              <p>
                "I warmly invite you to join us as we build a caring and purpose-driven family where friendship truly meets purpose."
              </p>
            </div>
            
            {/* Solid accent bar */}
            <div className="w-16 h-1 bg-hsh-gold my-8 rounded-full" />
            
            {/* Founder details */}
            <div className="flex flex-col items-center">
              <h3 className="font-outfit font-black text-3xl md:text-4xl text-hsh-navy">
                Cyndi Owusu
              </h3>
              <p className="font-outfit font-bold text-sm tracking-wider uppercase text-hsh-cyan mt-2">
                Founder & President
              </p>
              <p className="font-outfit text-xs font-bold text-hsh-muted uppercase tracking-widest mt-1">
                Home Sweet Home Ghana Network
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
