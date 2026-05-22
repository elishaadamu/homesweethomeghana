"use client";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Icon } from "../components/Icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAlert } from "../context/AlertContext";

function AuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { showAlert } = useAlert();
  const activeTab = searchParams.get("tab") === "signup" ? "signup" : "login";

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Login State
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup State
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [memberType, setMemberType] = useState("Local Member"); // Default to Local

  const switchTab = (tab: "login" | "signup") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.replace(`/auth?${params.toString()}`, { scroll: false });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: loginEmail,
        password: loginPassword,
      });

      if (res?.error) {
        showAlert("Invalid email or password.", "error");
      } else {
        showAlert("Welcome back!", "success");
        const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
        router.push(callbackUrl);
        router.refresh();
      }
    } catch (err) {
      showAlert("An unexpected error occurred.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: signupName,
          email: signupEmail,
          password: signupPassword,
          memberType,
        }),
      });

      if (res.ok) {
        showAlert("Account created! Please sign in.", "success");
        switchTab("login");
      } else {
        const data = await res.json();
        showAlert(data.message || "Registration failed.", "error");
      }
    } catch (err) {
      showAlert("An unexpected error occurred.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md flex flex-col justify-center h-full">
      {/* Tab Switcher */}
      <div className="flex bg-hsh-light border border-slate-100 rounded-2xl p-1 mb-8 w-full">
        <button
          type="button"
          onClick={() => switchTab("login")}
          className={`flex-1 py-2 text-xs lg:text-sm font-bold rounded-xl transition-all ${
            activeTab === "login"
              ? "bg-white text-hsh-navy-dark shadow-md shadow-hsh-navy/5"
              : "text-hsh-muted hover:text-hsh-navy-dark"
          }`}
        >
          Log In
        </button>
        <button
          type="button"
          onClick={() => switchTab("signup")}
          className={`flex-1 py-2 text-xs lg:text-sm font-bold rounded-xl transition-all ${
            activeTab === "signup"
              ? "bg-white text-hsh-navy-dark shadow-md shadow-hsh-navy/5"
              : "text-hsh-muted hover:text-hsh-navy-dark"
          }`}
        >
          Create Account
        </button>
      </div>

      {activeTab === "login" ? (
        <form onSubmit={handleLogin} className="flex flex-col gap-5 w-full animate-fade-in">
          <div>
            <h1 className="font-outfit text-3xl font-black text-hsh-navy-dark mb-1 tracking-tight">
              Welcome back
            </h1>
            <p className="text-hsh-muted text-sm font-medium">
              Sign in to your HSH Network account.
            </p>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-hsh-navy-dark/70 font-bold text-xs tracking-wider mb-2 uppercase">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Icon.Mail className="text-slate-400 absolute left-4 w-5 h-5" />
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full bg-hsh-light/35 border border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-hsh-navy focus:bg-white focus:ring-4 focus:ring-hsh-navy/5 transition-all text-sm font-medium"
                placeholder="elishaadamu97@gmail.com"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-hsh-navy-dark/70 font-bold text-xs tracking-wider uppercase">
                Password
              </label>
              <Link 
                href="/auth?tab=login" 
                onClick={() => showAlert("Password reset feature coming soon!", "info")}
                className="text-hsh-navy hover:text-hsh-navy-light text-xs font-bold transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative flex items-center">
              {/* Custom Lock SVG Icon */}
              <svg 
                className="text-slate-400 absolute left-4 w-5 h-5"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full bg-hsh-light/35 border border-slate-200 rounded-2xl pl-12 pr-12 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-hsh-navy focus:bg-white focus:ring-4 focus:ring-hsh-navy/5 transition-all text-sm font-medium"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
              >
                <Icon.Eye className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full bg-hsh-navy-dark hover:bg-hsh-navy text-white font-bold rounded-2xl px-4 py-4 transition-all duration-300 shadow-[0_8px_25px_rgba(15,36,96,0.12)] hover:shadow-[0_12px_35px_rgba(15,36,96,0.25)] disabled:opacity-70 flex items-center justify-center gap-2 text-sm"
          >
            {loading ? "Signing In..." : "Sign In"}
            {!loading && <Icon.ArrowRight className="w-4 h-4" />}
          </button>

          {/* Switch Tab Link */}
          <p className="text-slate-500 text-sm font-medium mt-4">
            New to HSH Network?{" "}
            <button
              type="button"
              onClick={() => switchTab("signup")}
              className="text-hsh-navy font-bold hover:underline transition-all focus:outline-none"
            >
              Create an account
            </button>
          </p>
        </form>
      ) : (
        <form onSubmit={handleSignup} className="flex flex-col gap-4.5 w-full animate-fade-in">
          <div>
            <h1 className="font-outfit text-3xl font-black text-hsh-navy-dark mb-1 tracking-tight">
              Create an account
            </h1>
            <p className="text-hsh-muted text-sm font-medium">
              Join the HSH Network today.
            </p>
          </div>

          {/* Name Input */}
          <div>
            <label className="block text-hsh-navy-dark/70 font-bold text-xs tracking-wider mb-2 uppercase">
              Full Name
            </label>
            <div className="relative flex items-center">
              <Icon.Users className="text-slate-400 absolute left-4 w-5 h-5" />
              <input
                type="text"
                required
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                className="w-full bg-hsh-light/35 border border-slate-200 rounded-2xl pl-12 pr-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-hsh-navy focus:bg-white focus:ring-4 focus:ring-hsh-navy/5 transition-all text-sm font-medium"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Member Type Selector */}
          <div>
            <label className="block text-hsh-navy-dark/70 font-bold text-xs tracking-wider mb-2 uppercase">
              Member Type
            </label>
            <div className="flex bg-hsh-light rounded-2xl border border-slate-100 p-1 w-full">
              <button
                type="button"
                onClick={() => setMemberType("Local Member")}
                className={`flex-1 py-2.5 text-xs lg:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                  memberType === "Local Member" 
                    ? "bg-white text-hsh-navy-dark shadow-md shadow-hsh-navy/5" 
                    : "text-hsh-muted hover:text-hsh-navy-dark"
                }`}
              >
                <Icon.Home className="w-4 h-4" />
                Local Member
              </button>
              <button
                type="button"
                onClick={() => setMemberType("Diaspora Member")}
                className={`flex-1 py-2.5 text-xs lg:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                  memberType === "Diaspora Member" 
                    ? "bg-white text-hsh-navy-dark shadow-md shadow-hsh-navy/5" 
                    : "text-hsh-muted hover:text-hsh-navy-dark"
                }`}
              >
                <Icon.Globe className="w-4 h-4" />
                Diaspora Member
              </button>
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-hsh-navy-dark/70 font-bold text-xs tracking-wider mb-2 uppercase">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Icon.Mail className="text-slate-400 absolute left-4 w-5 h-5" />
              <input
                type="email"
                required
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="w-full bg-hsh-light/35 border border-slate-200 rounded-2xl pl-12 pr-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-hsh-navy focus:bg-white focus:ring-4 focus:ring-hsh-navy/5 transition-all text-sm font-medium"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-hsh-navy-dark/70 font-bold text-xs tracking-wider mb-2 uppercase">
              Password
            </label>
            <div className="relative flex items-center">
              {/* Custom Lock SVG Icon */}
              <svg 
                className="text-slate-400 absolute left-4 w-5 h-5"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                className="w-full bg-hsh-light/35 border border-slate-200 rounded-2xl pl-12 pr-12 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-hsh-navy focus:bg-white focus:ring-4 focus:ring-hsh-navy/5 transition-all text-sm font-medium"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
              >
                <Icon.Eye className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full bg-hsh-navy-dark hover:bg-hsh-navy text-white font-bold rounded-2xl px-4 py-4 transition-all duration-300 shadow-[0_8px_25px_rgba(15,36,96,0.12)] hover:shadow-[0_12px_35px_rgba(15,36,96,0.25)] disabled:opacity-70 flex items-center justify-center gap-2 text-sm"
          >
            {loading ? "Creating Account..." : "Create Account"}
            {!loading && <Icon.ArrowRight className="w-4 h-4" />}
          </button>

          {/* Switch Tab Link */}
          <p className="text-slate-500 text-sm font-medium mt-4">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => switchTab("login")}
              className="text-hsh-navy font-bold hover:underline transition-all focus:outline-none"
            >
              Sign In
            </button>
          </p>
        </form>
      )}
    </div>
  );
}

export default function AuthPage() {
  return (
    <>
      <Navbar />
      
      {/* Full-width container split background */}
      <section className="relative min-h-screen w-full bg-white flex flex-col justify-between overflow-x-hidden">
        
        {/* Full-Width Background Split Panels */}
        <div className="absolute inset-0 w-full h-full z-0 flex">
          {/* Left background: 60% screen width */}
          <div className="w-full md:w-[60%] bg-white h-full" />
          
          {/* Right background: 40% screen width */}
          <div className="hidden md:block md:w-[40%] bg-hsh-navy-dark h-full relative overflow-hidden">
            {/* Background photo & overlay */}
            <div 
              className="absolute inset-0 select-none pointer-events-none scale-105 animate-float" 
              style={{ 
                backgroundImage: "url('/auth_bg.png')", 
                backgroundSize: "cover", 
                backgroundPosition: "center",
                animationDuration: "20s"
              }} 
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c142b]/97 via-[#0f2460]/85 to-[#00B8D4]/55 mix-blend-multiply z-[1]" />
            
            {/* Subtle glowing element */}
            <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] bg-hsh-cyan/15 rounded-full blur-[5rem] pointer-events-none z-[1]" />
          </div>
        </div>

        {/* Centered Content Grid: exact same margin & padding system as the Navbar */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row min-h-screen pt-28 pb-12 md:pt-36">
          
          {/* Left Column: Form Content (occupies left 60% of the centered grid) */}
          <div className="w-full md:w-[60%] md:pr-16 lg:pr-24 flex flex-col justify-center bg-white min-h-[500px]">
            <Suspense fallback={<div className="text-slate-500 font-semibold text-center w-full">Loading Form...</div>}>
              <AuthForm />
            </Suspense>
          </div>

          {/* Right Column: Slogan Content (occupies right 40% of the centered grid, sitting on top of the 40% bg split) */}
          <div className="hidden md:flex md:w-[40%] md:pl-10 lg:pl-16 flex flex-col justify-center text-white relative z-20">
            <div className="flex flex-col gap-5 max-w-md">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-widest text-hsh-cyan uppercase border border-white/15 self-start shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-hsh-cyan animate-pulse" />
                Housing Registry
              </span>
              <h2 className="font-outfit font-black text-3xl lg:text-4xl text-white leading-tight tracking-tight">
                Access housing programs with <span className="text-transparent bg-clip-text bg-gradient-to-r from-hsh-cyan to-hsh-cyan-light">absolute confidence</span>.
              </h2>
              <p className="text-white/80 text-xs lg:text-sm font-medium leading-relaxed">
                Empowering local residents and the global diaspora to securely access modern, transparent, and direct-ownership housing projects in Ghana.
              </p>

              {/* Assistance WhatsApp link */}
              <a 
                href="https://wa.me/447713136911" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-hsh-cyan hover:text-white transition-colors text-xs font-black self-start no-underline cursor-pointer group mt-4 uppercase tracking-widest"
              >
                Need assistance? Chat on WhatsApp
                <Icon.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
