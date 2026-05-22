import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Icon } from "../components/Icons";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/auth?tab=login");
  }

  const memberType = (session.user as any).memberType || "Local Member";
  const isDiaspora = memberType === "Diaspora Member";

  return (
    <div className="space-y-8">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-hsh-cyan/10 rounded-full blur-[8rem] pointer-events-none" />
        
        <div className="relative z-10">
          <h1 className="font-outfit text-3xl font-black text-white mb-2">
            Welcome back, <span className={isDiaspora ? "text-hsh-cyan" : "text-hsh-orange"}>{session.user?.name?.split(" ")[0]}</span>!
          </h1>
          <div className="flex items-center gap-3 mt-4">
            <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase ${
              isDiaspora 
                ? "bg-hsh-cyan/20 text-hsh-cyan border border-hsh-cyan/30" 
                : "bg-hsh-orange/20 text-hsh-orange border border-hsh-orange/30"
            }`}>
              {isDiaspora ? <Icon.Globe className="w-4 h-4" /> : <Icon.MapPin className="w-4 h-4" />}
              {memberType}
            </span>
            <span className="text-white/60 text-sm font-medium">Verified Profile</span>
          </div>
        </div>
      </div>

      {/* Dynamic Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Panel */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Role-Based Announcement */}
          <div className={`p-8 rounded-[2rem] border relative overflow-hidden ${
            isDiaspora 
              ? "bg-gradient-to-br from-hsh-cyan/20 to-transparent border-hsh-cyan/30" 
              : "bg-gradient-to-br from-hsh-orange/20 to-transparent border-hsh-orange/30"
          }`}>
            <h2 className="font-outfit text-2xl font-black text-white mb-3">
              {isDiaspora ? "Global Connect Initiative" : "Local Impact Drive"}
            </h2>
            <p className="text-white/80 leading-relaxed mb-6 font-medium">
              {isDiaspora 
                ? "Join our upcoming virtual town hall to connect with fellow diaspora members worldwide and discuss investments back home in Ghana."
                : "Participate in this weekend's charity drive in Accra. We are gathering resources for the local community outreach program."}
            </p>
            <button className={`font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm ${
              isDiaspora 
                ? "bg-hsh-cyan hover:bg-hsh-cyan-light text-hsh-navy-dark shadow-hsh-cyan/20" 
                : "bg-hsh-orange hover:bg-hsh-orange-light text-white shadow-hsh-orange/20"
            }`}>
              {isDiaspora ? "Register for Town Hall" : "Volunteer Now"}
            </button>
          </div>

          {/* General Stats / Progress */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-[1.5rem] p-6 backdrop-blur-md">
              <div className="text-white/50 text-sm font-semibold uppercase tracking-wider mb-2">Network Rank</div>
              <div className="font-outfit text-4xl font-black text-white">Initiate</div>
              <div className="mt-4 w-full bg-white/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full w-[35%]"></div>
              </div>
              <div className="mt-2 text-xs text-white/50 font-medium text-right">35% to next rank</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[1.5rem] p-6 backdrop-blur-md">
              <div className="text-white/50 text-sm font-semibold uppercase tracking-wider mb-2">Upcoming Events</div>
              <div className="font-outfit text-4xl font-black text-white">2 <span className="text-xl text-white/40">RSVP'd</span></div>
              <div className="mt-4 flex gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">MAY</div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">JUN</div>
              </div>
            </div>
          </div>

        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
          
          {/* Quick Actions */}
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 backdrop-blur-md">
            <h3 className="font-outfit text-lg font-bold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <button className="w-full text-left px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all text-sm font-semibold flex items-center justify-between">
                Membership Dues <Icon.ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full text-left px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all text-sm font-semibold flex items-center justify-between">
                Member Directory <Icon.ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full text-left px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all text-sm font-semibold flex items-center justify-between">
                Help & Support <Icon.ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
