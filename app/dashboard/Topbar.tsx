"use client";
import { Icon } from "../components/Icons";

export default function Topbar({ user }: { user: any }) {
  return (
    <header className="h-16 bg-white border-b border-hsh-navy/5 flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-4">
        {/* Mobile menu toggle could go here */}
        <h2 className="font-outfit font-black text-hsh-navy tracking-wide hidden sm:block text-xl">Dashboard</h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-bold text-hsh-navy">{user?.name}</div>
            <div className="text-xs text-hsh-muted font-semibold">{user?.memberType || "Member"}</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-hsh-cyan/10 border border-hsh-cyan/20 flex items-center justify-center text-hsh-cyan">
            <Icon.Smile className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
