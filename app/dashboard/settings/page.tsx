"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useAlert } from "../../context/AlertContext";
import { Icon } from "../../components/Icons";

export default function SettingsPage() {
  const { data: session, update } = useSession();
  const { showAlert } = useAlert();
  
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.user?.name) {
      setName(session.user.name);
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password && password !== confirmPassword) {
      showAlert("Passwords do not match.", "error");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/user/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          password: password || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update profile");
      }

      await update({ name }); // Update next-auth session
      showAlert("Profile updated successfully!", "success");
      setPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      showAlert(err.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="font-outfit text-3xl font-black text-hsh-navy">Account Settings</h1>
        <p className="text-hsh-muted text-sm font-semibold mt-2">Update your personal information and security credentials.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-hsh-navy/5 rounded-3xl p-8 shadow-sm space-y-6">
        
        {/* Name Field */}
        <div>
          <label className="block text-hsh-navy/80 text-sm font-bold mb-2">Full Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Icon.Users className="w-5 h-5 text-hsh-navy/35" />
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-hsh-light border border-hsh-navy/10 rounded-xl py-3 pl-12 pr-4 text-hsh-navy placeholder-hsh-navy/30 focus:outline-none focus:border-hsh-cyan focus:ring-1 focus:ring-hsh-cyan transition-all font-semibold"
            />
          </div>
        </div>

        {/* Email Field (Disabled) */}
        <div>
          <label className="block text-hsh-navy/80 text-sm font-bold mb-2">Email Address (Cannot be changed)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Icon.Mail className="w-5 h-5 text-hsh-navy/25" />
            </div>
            <input
              type="email"
              value={session?.user?.email || ""}
              disabled
              className="w-full bg-hsh-light/50 border border-hsh-navy/5 rounded-xl py-3 pl-12 pr-4 text-hsh-navy/40 cursor-not-allowed font-semibold"
            />
          </div>
        </div>

        <div className="w-full h-px bg-hsh-navy/5 my-8" />

        <div className="mb-4">
          <h3 className="font-outfit text-lg font-bold text-hsh-navy">Change Password</h3>
          <p className="text-hsh-muted text-xs font-semibold">Leave blank if you don't want to change it.</p>
        </div>

        {/* Password Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-hsh-navy/80 text-sm font-bold mb-2">New Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon.Eye className="w-5 h-5 text-hsh-navy/35" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-hsh-light border border-hsh-navy/10 rounded-xl py-3 pl-12 pr-4 text-hsh-navy placeholder-hsh-navy/30 focus:outline-none focus:border-hsh-cyan focus:ring-1 focus:ring-hsh-cyan transition-all font-semibold"
              />
            </div>
          </div>

          <div>
            <label className="block text-hsh-navy/80 text-sm font-bold mb-2">Confirm New Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon.Shield className="w-5 h-5 text-hsh-navy/35" />
              </div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-hsh-light border border-hsh-navy/10 rounded-xl py-3 pl-12 pr-4 text-hsh-navy placeholder-hsh-navy/30 focus:outline-none focus:border-hsh-cyan focus:ring-1 focus:ring-hsh-cyan transition-all font-semibold"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-hsh-cyan hover:bg-hsh-cyan/90 text-hsh-navy font-bold py-3 px-8 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-50 flex items-center gap-2 cursor-pointer"
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
