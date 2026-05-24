import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import VerifyButton from "./VerifyButton";
import MarkPaidButton from "./MarkPaidButton";
import Link from "next/link";
import { Icon } from "../../components/Icons";

export default async function AdminDashboardPage() {
  const session = await auth();

  if (!session || !session.user?.email) {
    redirect("/auth?tab=login");
  }

  const currentUser = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!currentUser || currentUser.role !== "ADMIN") {
    // If not an admin, redirect back to the normal dashboard
    redirect("/dashboard");
  }

  // Fetch all users
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      membershipApplication: true,
      payments: true,
    }
  });

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-hsh-navy text-white rounded-3xl p-8 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-hsh-cyan/10 rounded-full blur-[8rem] pointer-events-none" />
        
        <div className="relative z-10">
          <h1 className="font-outfit text-3xl font-black mb-2">
            Admin Dashboard
          </h1>
          <p className="text-white/80 font-inter">
            Manage users, applications, and manual verifications.
          </p>
        </div>
        <div className="relative z-10 shrink-0">
          <Link href="/dashboard" className="bg-white/10 hover:bg-white/20 transition-colors text-white font-bold py-2.5 px-6 rounded-full text-sm inline-flex items-center gap-2">
            <Icon.ArrowRight className="w-4 h-4 rotate-180" />
            Back to My Dashboard
          </Link>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white border border-hsh-navy/5 rounded-3xl p-8 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-outfit text-2xl font-black text-hsh-navy">Registered Users</h2>
          <div className="text-sm font-bold text-hsh-muted uppercase tracking-wider">
            Total: {users.length}
          </div>
        </div>
        
        <div className="overflow-x-auto rounded-xl border border-hsh-navy/5">
          <table className="w-full text-left text-sm text-hsh-dark-text whitespace-nowrap">
            <thead className="bg-[#F8FAFF] text-hsh-navy font-bold uppercase text-xs tracking-wider border-b border-hsh-navy/5">
              <tr>
                <th className="px-6 py-4">Name / Email</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Application Status</th>
                <th className="px-6 py-4">Dues Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hsh-navy/5">
              {users.map((user) => {
                const hasPaidDues = user.duesValidUntil && new Date(user.duesValidUntil) > new Date();
                const appStatus = user.membershipApplication?.status || "No Application";

                return (
                  <tr key={user.id} className="hover:bg-[#F8FAFF]/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-hsh-navy">{user.name || "Unknown"}</div>
                      <div className="text-xs text-hsh-muted mt-0.5">{user.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-md text-[0.65rem] font-bold uppercase tracking-wider ${
                        user.role === "ADMIN" ? "bg-hsh-cyan/10 text-hsh-cyan border border-hsh-cyan/20" : "bg-hsh-navy/5 text-hsh-navy"
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-hsh-muted font-medium">{appStatus}</span>
                    </td>
                    <td className="px-6 py-4">
                      {hasPaidDues ? (
                        <span className="text-green-600 font-medium text-xs">Paid Valid</span>
                      ) : (
                        <span className="text-red-500 font-medium text-xs">Unpaid / Expired</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end">
                        <VerifyButton userId={user.id} isVerified={user.isVerified} />
                        <MarkPaidButton 
                          userId={user.id} 
                          hasPaidDues={hasPaidDues} 
                          applicationData={user.membershipApplication} 
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
