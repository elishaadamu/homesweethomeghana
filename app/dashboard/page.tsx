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
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white border border-hsh-navy/5 rounded-3xl p-8 shadow-sm relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-hsh-cyan/5 rounded-full blur-[8rem] pointer-events-none" />
        
        <div className="relative z-10">
          <h1 className="font-outfit text-3xl font-black text-hsh-navy mb-2">
            Welcome back, <span className="text-hsh-cyan">{session.user?.name?.split(" ")[0]}</span>!
          </h1>
          <div className="flex items-center gap-3 mt-4">
            <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase ${
              isDiaspora 
                ? "bg-hsh-cyan/10 text-hsh-cyan border border-hsh-cyan/20" 
                : "bg-hsh-navy/10 text-hsh-navy border border-hsh-navy/15"
            }`}>
              {isDiaspora ? <Icon.Globe className="w-4 h-4" /> : <Icon.MapPin className="w-4 h-4" />}
              {memberType}
            </span>
            <span className="text-hsh-muted text-sm font-bold">Verified Profile</span>
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
              ? "bg-hsh-cyan/5 border-hsh-cyan/20" 
              : "bg-hsh-navy/5 border-hsh-navy/15"
          }`}>
            <h2 className="font-outfit text-2xl font-black text-hsh-navy mb-3">
              {isDiaspora ? "Global Connect Initiative" : "Local Impact Drive"}
            </h2>
            <p className="text-hsh-navy/80 leading-relaxed mb-6 font-medium font-inter">
              {isDiaspora 
                ? "Join our upcoming virtual town hall to connect with fellow diaspora members worldwide and discuss investments back home in Ghana."
                : "Participate in this weekend's charity drive in Accra. We are gathering resources for the local community outreach program."}
            </p>
            <button className={`font-bold py-3 px-6 rounded-xl transition-all shadow-md text-sm ${
              isDiaspora 
                ? "bg-hsh-cyan hover:bg-hsh-cyan/90 text-hsh-navy shadow-hsh-cyan/10" 
                : "bg-hsh-gold hover:bg-hsh-gold/90 text-hsh-navy shadow-hsh-gold/10"
            }`}>
              {isDiaspora ? "Register for Town Hall" : "Volunteer Now"}
            </button>
          </div>

          {/* General Stats / Progress */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-hsh-navy/5 rounded-2xl p-6 shadow-sm">
              <div className="text-hsh-muted text-sm font-bold uppercase tracking-wider mb-2">Network Rank</div>
              <div className="font-outfit text-4xl font-black text-hsh-navy">Initiate</div>
              <div className="mt-4 w-full bg-hsh-light rounded-full h-2">
                <div className="bg-hsh-cyan h-2 rounded-full w-[35%]"></div>
              </div>
              <div className="mt-2 text-xs text-hsh-muted font-bold text-right">35% to next rank</div>
            </div>

            <div className="bg-white border border-hsh-navy/5 rounded-2xl p-6 shadow-sm">
              <div className="text-hsh-muted text-sm font-bold uppercase tracking-wider mb-2">Upcoming Events</div>
              <div className="font-outfit text-4xl font-black text-hsh-navy">2 <span className="text-xl text-hsh-muted/50 font-bold">RSVP'd</span></div>
              <div className="mt-4 flex gap-2">
                <div className="w-8 h-8 rounded-full bg-hsh-light flex items-center justify-center text-xs font-bold text-hsh-navy">MAY</div>
                <div className="w-8 h-8 rounded-full bg-hsh-light flex items-center justify-center text-xs font-bold text-hsh-navy">JUN</div>
              </div>
            </div>
          </div>

        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
          
          {/* Quick Actions */}
          <div className="bg-white border border-hsh-navy/5 rounded-[2rem] p-6 shadow-sm">
            <h3 className="font-outfit text-lg font-bold text-hsh-navy mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <button className="w-full text-left px-4 py-3 rounded-xl bg-hsh-light hover:bg-hsh-cyan/10 text-hsh-navy/80 hover:text-hsh-navy transition-all text-sm font-bold flex items-center justify-between">
                Membership Dues <Icon.ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full text-left px-4 py-3 rounded-xl bg-hsh-light hover:bg-hsh-cyan/10 text-hsh-navy/80 hover:text-hsh-navy transition-all text-sm font-bold flex items-center justify-between">
                Member Directory <Icon.ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full text-left px-4 py-3 rounded-xl bg-hsh-light hover:bg-hsh-cyan/10 text-hsh-navy/80 hover:text-hsh-navy transition-all text-sm font-bold flex items-center justify-between">
                Help & Support <Icon.ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
