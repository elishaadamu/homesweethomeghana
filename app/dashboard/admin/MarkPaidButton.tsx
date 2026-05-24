"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "../../components/Icons";

export default function MarkPaidButton({ 
  userId, 
  hasPaidDues, 
  applicationData 
}: { 
  userId: string, 
  hasPaidDues: boolean, 
  applicationData: any 
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState("");
  const router = useRouter();

  if (hasPaidDues) {
    return null; // Don't show the button if they already have valid dues
  }

  const handleMarkPaid = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirm("Are you sure you want to mark this user's dues as paid?")) return;
    
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/mark-paid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetUserId: userId, description })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to mark as paid");
      
      alert("User dues marked as paid!");
      setIsModalOpen(false);
      router.refresh();
    } catch (err: any) {
      alert("Error: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full transition-colors ml-2"
      >
        Mark Paid
      </button>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-hsh-navy/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-hsh-muted hover:text-hsh-navy transition-colors"
            >
              <Icon.X className="w-5 h-5" />
            </button>
            
            <h2 className="font-outfit text-2xl font-black text-hsh-navy mb-6">Mark Dues as Paid</h2>
            
            {/* Member Details */}
            <div className="bg-hsh-light rounded-xl p-5 mb-6 text-sm text-left">
              <h3 className="font-bold text-hsh-navy mb-3 uppercase tracking-wider text-xs">Member Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-hsh-muted">Full Name:</span>
                  <span className="font-bold text-hsh-navy">{applicationData?.fullName || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-hsh-muted">Phone:</span>
                  <span className="font-bold text-hsh-navy">{applicationData?.phoneNumber || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-hsh-muted">Category:</span>
                  <span className="font-bold text-hsh-navy">{applicationData?.membershipCategory || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-hsh-muted">Type:</span>
                  <span className="font-bold text-hsh-navy">{applicationData?.membershipType || "N/A"}</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleMarkPaid} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-hsh-navy mb-2">Description / Note (Optional)</label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. Paid via Bank Transfer on 24 May"
                  className="w-full rounded-xl border border-[#D8E0F0] px-4 py-3 bg-[#F8FAFF] focus:border-hsh-cyan focus:ring-2 focus:ring-hsh-cyan/20 outline-none transition-all resize-none text-hsh-dark-text text-sm"
                  rows={3}
                />
              </div>

              <div className="flex gap-3 justify-end pt-2">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 rounded-full font-bold text-sm text-hsh-muted hover:text-hsh-navy transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2.5 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold text-sm transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {isLoading ? "Processing..." : "Confirm Payment"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
