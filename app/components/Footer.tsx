"use client";
import Image from "next/image";
import { Icon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b1736] pt-20 pb-10 px-6 text-white overflow-hidden border-t-4 border-hsh-orange">
      {/* Subtle Square Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} 
      />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Top row */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/logo.jpeg"
                alt="HSH Network"
                width={70}
                height={70}
                className="w-[70px] h-[70px] rounded-full object-cover border-2 border-white/20 shadow-lg"
              />
              <div>
                <div className="font-outfit text-xl font-black leading-snug tracking-wide">HSH NETWORK</div>
                <div className="text-xs text-hsh-gold font-bold uppercase tracking-widest mt-1">
                  Home Sweet Home Ghana
                </div>
              </div>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/70">
              A vibrant community dedicated to fostering friendship, professional collaboration, and charitable service among Ghanaians locally and in the diaspora.
            </p>
            {/* Gold stars */}
            <div className="text-hsh-gold tracking-[0.5em] text-lg">✦ ✦ ✦</div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="font-outfit mb-6 text-sm font-bold uppercase tracking-widest text-hsh-cyan">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4">
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
                    className="group flex items-center gap-2 text-sm text-white/70 transition-colors duration-200 no-underline hover:text-white"
                  >
                    <span className="text-hsh-orange opacity-0 -ml-2 transition-all group-hover:opacity-100 group-hover:ml-0">▶</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-outfit mb-6 text-sm font-bold uppercase tracking-widest text-hsh-cyan">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-hsh-orange flex items-center justify-center">
                  <Icon.MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-bold mb-1">Ghana HQ</div>
                  <a href="tel:+233241617899" className="text-sm text-white/80 no-underline hover:text-white transition-colors">+233 241 617 899</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-hsh-cyan flex items-center justify-center">
                  <Icon.MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-bold mb-1">UK Office</div>
                  <a href="tel:+447713136911" className="text-sm text-white/80 no-underline hover:text-white transition-colors">+44 7713 136911</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-hsh-gold flex items-center justify-center">
                  <Icon.Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-bold mb-1">Email</div>
                  <a href="mailto:support@homesweethomeghana.com" className="text-sm text-white/80 no-underline hover:text-white transition-colors break-all">support@homesweethomeghana.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} Home Sweet Home Ghana Network. All rights reserved.
          </p>
          <a
            href="https://www.facebook.com/HomeSweetHomeGhanaNetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm text-white bg-[#1877F2]/20 hover:bg-[#1877F2] transition-colors duration-300 px-5 py-2.5 rounded-xl border border-[#1877F2]/30 font-bold"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Follow on Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
