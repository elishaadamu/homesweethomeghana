"use client";

import { useState } from "react";
import { Icon } from "./Icons";

export default function PayButton({ isDiaspora }: { isDiaspora: boolean }) {
  const [isPaying, setIsPaying] = useState(false);

  const handlePayment = async () => {
    setIsPaying(true);
    try {
      const res = await fetch("/api/payments/initialize", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Payment init failed");
      
      // Redirect to provider
      window.location.href = data.checkoutUrl;
    } catch (err: any) {
      alert("Error initializing payment: " + err.message);
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <button 
      onClick={handlePayment}
      disabled={isPaying}
      className={`inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-xl transition-all shadow-md text-sm text-center disabled:opacity-50 ${
        isDiaspora 
          ? "bg-hsh-cyan hover:bg-hsh-cyan/90 text-hsh-navy shadow-hsh-cyan/10" 
          : "bg-hsh-gold hover:bg-hsh-gold/90 text-hsh-navy shadow-hsh-gold/10"
      }`}
    >
      <Icon.Send className="w-4 h-4" />
      {isPaying ? "Initializing..." : "Pay Annual Dues Now"}
    </button>
  );
}
