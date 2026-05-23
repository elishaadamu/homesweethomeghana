"use client";
import { Icon } from "../components/Icons";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Topbar({ user, onMenuClick }: { user: any, onMenuClick?: () => void }) {
  return (
    <header className="h-16 bg-white border-b border-hsh-navy/5 flex items-center justify-between px-6 shrink-0 z-10">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick} 
          className="md:hidden p-2 -ml-2 text-hsh-navy focus:outline-none hover:bg-hsh-light rounded-lg transition-colors cursor-pointer"
        >
          <Icon.Menu className="w-6 h-6" />
        </button>
        <h2 className="font-outfit font-black text-hsh-navy tracking-wide hidden sm:block text-xl">Dashboard</h2>
        <div className="sm:hidden relative w-12 h-12 rounded-full overflow-hidden border-2 border-hsh-cyan/20 shrink-0 shadow-sm">
          <Image src="/logo.jpeg" alt="HSH Network" fill className="object-cover" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-bold text-hsh-navy">{user?.name}</div>
            <div className="text-xs text-hsh-muted font-semibold">{user?.memberType || "Member"}</div>
          </div>
        </div>
        
        {/* Mobile Logout Button */}
        <button 
          onClick={() => signOut({ callbackUrl: "/auth?tab=login" })}
          className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 bg-hsh-light border border-[#D8E0F0] rounded-lg text-hsh-navy font-bold text-xs hover:bg-[#EEF3FF] transition-colors cursor-pointer"
        >
          <Icon.LogOut className="w-3.5 h-3.5" />
          Logout
        </button>
      </div>
    </header>
  );
}
