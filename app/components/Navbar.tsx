"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icons";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 backdrop-blur-2xl ${
        scrolled 
          ? "bg-hsh-navy-dark/97 shadow-xl py-2.5" 
          : "bg-gray-900 py-4"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-hsh-cyan/30 transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/logo.jpeg" 
              alt="HSH Network" 
              fill
              className="object-cover" 
              priority
            />
          </div>
          <div>
            <div className="font-outfit font-black text-sm md:text-lg text-white tracking-tight leading-none group-hover:text-amber-300 transition-colors">
              HSH NETWORK
            </div>
            <div className="text-[8px] md:text-[10px] text-white/50 tracking-wider font-semibold mt-1">
              HOME SWEET HOME GHANA
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-1 list-none items-center m-0 p-0">
            {navLinks.map((l) => {
              const isActive = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link 
                    href={l.href} 
                    className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 font-outfit ${
                      isActive 
                        ? "text-amber-300 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/10" 
                        : "text-white/80 hover:text-white hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="h-5 w-[1px] bg-white/10" />

          <Link 
            href="/apply" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-2.5 px-6 rounded-full hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 transition-all text-sm font-outfit"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Burger Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer text-white p-2.5 rounded-full transition-all"
        >
          {menuOpen ? <Icon.X className="w-5 h-5" /> : <Icon.Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed left-0 right-0 bg-[#070F2B]/98 backdrop-blur-2xl border-b border-white/10 z-40 transition-all duration-500 md:hidden flex flex-col px-8 py-8 ${
          menuOpen 
            ? "top-[calc(100%-1px)] opacity-100 translate-y-0" 
            : "-top-96 opacity-0 pointer-events-none -translate-y-10"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link 
                key={l.href} 
                href={l.href} 
                onClick={() => setMenuOpen(false)} 
                className={`block py-3 px-4 rounded-xl text-base font-semibold font-outfit no-underline transition-all ${
                  isActive
                    ? "text-amber-300 bg-white/5 border border-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          
          <div className="h-[1px] bg-white/10 my-2" />
          
          <Link 
            href="/apply" 
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3.5 px-6 rounded-full hover:shadow-lg transition-all text-base"
            onClick={() => setMenuOpen(false)}
          >
            Join Now <Icon.ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
