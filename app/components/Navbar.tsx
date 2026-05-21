"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icons";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-hsh-navy-dark/97 shadow-lg" 
        : "bg-black/55"
    } backdrop-blur-2xl`}>
      <nav className="max-w-5xl mx-auto px-6 h-28 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image src="/logo.jpeg" alt="HSH Network" width={100} height={100}
            className="w-[100px] h-[100px] rounded-full object-cover border-2 border-hsh-cyan/30" />
          <div>
            <div className="font-outfit font-black text-xl text-white leading-tight">HSH NETWORK</div>
            <div className="text-xs text-white/60 tracking-wider">HOME SWEET HOME GHANA</div>
          </div>
        </Link>

        {/* Desktop */}
        <ul className="desktop-nav hidden md:flex gap-1 list-none items-center">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-white/82 no-underline text-base font-medium px-2 py-1 rounded-lg transition-all duration-200 block font-outfit hover:text-white hover:bg-white/10">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/apply" className="inline-flex items-center gap-2 bg-gradient-to-br from-hsh-orange to-orange-400 text-white font-bold py-2 px-4 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all text-base ml-1">
              Join Now
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden bg-transparent border-0 cursor-pointer text-white p-2">
          {menuOpen ? <Icon.X className="w-6 h-6" /> : <Icon.Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-2xl px-6 py-8 border-t border-white/8">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block text-white/85 no-underline font-outfit text-base font-medium py-3 border-b border-white/7 hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link href="/apply" className="inline-flex items-center gap-2 bg-gradient-to-br from-hsh-orange to-orange-400 text-white font-bold py-2 px-4 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm mt-5" onClick={() => setMenuOpen(false)}>
            Join Now <Icon.ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
