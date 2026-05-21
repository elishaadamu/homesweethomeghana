"use client";
import { MdLocationOn, MdPublic, MdNotifications, MdEmail, MdPhone } from "react-icons/md";

const offices = [
  {
    Icon: MdLocationOn,
    country: "Ghana Office",
    name: "Mrs. Leticia Twum-Antwi",
    role: "Operations Coordinator",
    phone: "+233 241 617 899",
    href: "tel:+233241617899",
    accent: "#1B3A8F",
  },
  {
    Icon: MdPublic,
    country: "United Kingdom Office",
    name: "Cyndi Owusu",
    role: "President",
    phone: "+44 7713 136911",
    href: "tel:+447713136911",
    accent: "#00B8D4",
  },
  {
    Icon: MdNotifications,
    country: "Public Relations & Media",
    name: "Nana Ama Asantewaa",
    role: "PR & Media Affairs",
    phone: "+233 24 493 3893",
    href: "tel:+233244933893",
    accent: "#F97316",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-hsh-off-white py-24 px-6 scroll-mt-20">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] md:text-[7rem] font-black text-black/[0.03] whitespace-nowrap pointer-events-none uppercase tracking-widest font-outfit z-0">
            CONTACT
          </div>
          <p className="text-xs font-bold tracking-widest uppercase text-hsh-orange relative z-10">Get in Touch</p>
          <h2 className="font-outfit text-5xl md:text-6xl font-black text-hsh-dark-text mt-2 mb-4 relative z-10">
            Contact <span className="section-title-highlight">Us</span>
          </h2>
          <p className="text-lg text-hsh-muted leading-relaxed max-w-xl mx-auto relative z-10">
            Reach out to our team — we would love to welcome you into the HSH Network family.
          </p>
        </div>

        {/* Email banner */}
        <a
          href="mailto:homesweethomeghana2@gmail.com"
          className="mb-16 flex flex-col md:flex-row items-center justify-between gap-6 rounded-[2rem] bg-white p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 border border-hsh-navy/5 relative overflow-hidden group"
        >
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-hsh-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
            <div className="w-16 h-16 rounded-full bg-hsh-cyan/10 flex items-center justify-center text-hsh-cyan shrink-0 transition-transform duration-300 group-hover:scale-110">
              <MdEmail size={32} />
            </div>
            <div className="text-left overflow-hidden">
              <div className="font-outfit text-sm font-bold uppercase tracking-wider text-hsh-muted mb-1">Email Us</div>
              <div className="font-outfit text-xl md:text-2xl font-black text-hsh-dark-text truncate">homesweethomeghana2@gmail.com</div>
            </div>
          </div>
          
          <div className="relative z-10 flex items-center justify-center w-full md:w-auto gap-2 rounded-full bg-hsh-navy px-8 py-4 text-sm font-bold text-white transition-all duration-300 group-hover:bg-hsh-cyan shadow-md">
            Send Email <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </a>

        {/* Office cards */}
        <div className="mb-10 flex flex-col lg:flex-row justify-center gap-8">
          {offices.map((office) => {
            const OfficeIcon = office.Icon;
            return (
              <div
                key={office.country}
                className="flex-1 w-full bg-white rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]"
              >
                {/* Background Icon Watermark */}
                <div
                  className="absolute -bottom-8 -right-8 opacity-[0.03] pointer-events-none"
                  style={{ color: office.accent }}
                >
                  <OfficeIcon className="w-40 h-40" />
                </div>

                <div className="relative z-10 flex flex-col items-center h-full w-full">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                    style={{ background: `${office.accent}15`, color: office.accent }}
                  >
                    <OfficeIcon className="w-7 h-7" />
                  </div>
                  
                  <div
                    className="font-outfit mb-4 text-xs font-bold uppercase tracking-wider"
                    style={{ color: office.accent }}
                  >
                    {office.country}
                  </div>
                  
                  <h3 className="font-outfit font-bold text-xl text-hsh-dark-text mb-1">
                    {office.name}
                  </h3>
                  
                  <p className="mb-6 text-sm text-hsh-muted flex-1">{office.role}</p>
                  
                  <a
                    href={office.href}
                    className="font-outfit inline-flex items-center justify-center gap-2 text-sm font-bold no-underline w-full py-3 rounded-xl transition-all hover:opacity-80"
                    style={{ background: `${office.accent}15`, color: office.accent }}
                  >
                    <MdPhone size={18} /> {office.phone}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Facebook Call To Action */}
        <div className="relative overflow-hidden bg-[#1877F2] rounded-[2rem] p-10 md:p-14 text-center text-white shadow-[0_20px_50px_rgba(24,119,242,0.3)] mt-16 flex flex-col items-center">
          {/* Square Grid Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }} 
          />
          
          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#1877F2] mb-6 shadow-md">
              <svg width="36" height="36" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            
            <h3 className="font-outfit text-3xl md:text-4xl font-black mb-4">
              Join Our Facebook Community
            </h3>
            
            <p className="text-white/85 text-lg mb-8 leading-relaxed">
              Stay updated with the latest news, events, and initiatives from the Home Sweet Home Ghana Network. Connect with members worldwide!
            </p>
            
            <a
              href="https://www.facebook.com/HomeSweetHomeGhanaNetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#1877F2] font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              Follow Us on Facebook <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
