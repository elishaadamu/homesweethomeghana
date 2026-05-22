"use client";
import { Icon } from "../components/Icons";

export default function Topbar({ user }: { user: any }) {
  return (
    <header className="h-16 bg-[#0A1840] border-b border-white/10 flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-4">
        {/* Mobile menu toggle could go here */}
        <h2 className="font-outfit font-bold text-white tracking-wide hidden sm:block">Dashboard</h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-bold text-white">{user?.name}</div>
            <div className="text-xs text-white/50">{user?.memberType || "Member"}</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-hsh-cyan/20 border border-hsh-cyan/30 flex items-center justify-center text-hsh-cyan">
            <Icon.Smile className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
