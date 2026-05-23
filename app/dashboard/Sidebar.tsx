"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { Icon } from "../components/Icons";

export default function Sidebar({ user }: { user: any }) {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Overview", icon: Icon.Home },
    { href: "/dashboard/apply", label: "Membership Application", icon: Icon.Briefcase },
    { href: "/dashboard/settings", label: "Settings", icon: Icon.Settings },
  ];

  return (
    <div className="w-64 bg-white border-r border-hsh-navy/5 hidden md:flex flex-col h-full shrink-0">
      <div className="p-6 border-b border-hsh-navy/5">
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-hsh-cyan/20 transition-transform duration-300 group-hover:scale-105 shrink-0">
            <Image 
              src="/logo.jpeg" 
              alt="HSH Network" 
              fill
              className="object-cover" 
              priority
            />
          </div>
          <div>
            <div className="font-outfit font-black text-base text-hsh-navy tracking-tight leading-none group-hover:text-hsh-cyan transition-colors">
              HSH NETWORK
            </div>
          </div>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold ${
                isActive
                  ? "bg-hsh-cyan/10 text-hsh-cyan"
                  : "text-hsh-navy/70 hover:bg-hsh-light hover:text-hsh-navy"
              }`}
            >
              <LinkIcon className="w-5 h-5" />
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-hsh-navy/5">
        <button
          onClick={() => signOut({ callbackUrl: "/auth?tab=login" })}
          className="flex items-center gap-3 px-4 py-3 rounded-xl w-full text-left text-sm font-bold text-red-500 hover:bg-red-50 transition-all"
        >
          <Icon.X className="w-5 h-5" />
          Log Out
        </button>
      </div>
    </div>
  );
}
