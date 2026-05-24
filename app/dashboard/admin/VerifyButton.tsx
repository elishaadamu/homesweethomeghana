"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VerifyButton({ userId, isVerified }: { userId: string, isVerified: boolean }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  if (isVerified) {
    return (
      <span className="text-green-600 font-bold text-xs uppercase tracking-wider bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
        Verified
      </span>
    );
  }

  const handleVerify = async () => {
    if (!confirm("Are you sure you want to manually verify this user?")) return;
    
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetUserId: userId })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to verify");
      
      alert("User verified successfully!");
      router.refresh(); // Refresh the page to reflect the new state
    } catch (err: any) {
      alert("Error: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handleVerify}
      disabled={isLoading}
      className="bg-hsh-cyan hover:bg-hsh-cyan-dark text-hsh-navy font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full transition-colors disabled:opacity-50"
    >
      {isLoading ? "Verifying..." : "Verify User"}
    </button>
  );
}
