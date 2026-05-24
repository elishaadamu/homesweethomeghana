import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Icon } from "../../components/Icons";
import PayButton from "../../components/PayButton";

export default async function PaymentsPage() {
  const session = await auth();

  if (!session || !session.user?.email) {
    redirect("/auth?tab=login");
  }

  const dbUser = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      payments: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!dbUser) redirect("/auth?tab=login");

  const hasPaidDues = dbUser.duesValidUntil && new Date(dbUser.duesValidUntil) > new Date();
  const isDiaspora = dbUser.memberType === "Diaspora Member";
  
  // Calculate validity range if applicable
  let validityStart = null;
  let validityEnd = null;
  let progressPercentage = 0;

  if (dbUser.duesValidUntil) {
    validityEnd = new Date(dbUser.duesValidUntil);
    // Approximate start date as 1 year before validity end
    validityStart = new Date(validityEnd);
    validityStart.setFullYear(validityStart.getFullYear() - 1);

    const now = new Date();
    const totalDuration = validityEnd.getTime() - validityStart.getTime();
    const elapsed = now.getTime() - validityStart.getTime();
    
    progressPercentage = Math.max(0, Math.min(100, (elapsed / totalDuration) * 100));
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white border border-hsh-navy/5 rounded-3xl p-8 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-hsh-cyan/5 rounded-full blur-[8rem] pointer-events-none" />
        
        <div className="relative z-10">
          <h1 className="font-outfit text-3xl font-black text-hsh-navy mb-2">
            Membership Dues & Payments
          </h1>
          <p className="text-hsh-muted font-inter">
            Track your payment history and membership validity.
          </p>
        </div>
        <div className="relative z-10 shrink-0">
          <Link href="/dashboard" className="bg-hsh-light hover:bg-hsh-cyan/10 transition-colors text-hsh-navy font-bold py-2.5 px-6 rounded-full text-sm inline-flex items-center gap-2">
            <Icon.ArrowRight className="w-4 h-4 rotate-180" />
            Back to Dashboard
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Validity Tracker Panel */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white border border-hsh-navy/5 rounded-3xl p-6 shadow-sm relative overflow-hidden">
            <h3 className="font-outfit text-xl font-bold text-hsh-navy mb-6">Subscription Status</h3>
            
            {hasPaidDues && validityStart && validityEnd ? (
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-50 border-4 border-green-100 mx-auto mb-2">
                  <Icon.Check className="w-8 h-8 text-green-500" />
                </div>
                <div className="text-center">
                  <div className="text-green-600 font-black text-xl font-outfit uppercase tracking-widest">Active</div>
                  <div className="text-hsh-muted text-sm mt-1">Your dues are up to date!</div>
                </div>

                <div className="pt-4 border-t border-hsh-navy/5">
                  <div className="flex justify-between text-xs font-bold text-hsh-muted mb-2 uppercase tracking-wider">
                    <span>{validityStart.toLocaleDateString()}</span>
                    <span>{validityEnd.toLocaleDateString()}</span>
                  </div>
                  <div className="w-full bg-hsh-light rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-hsh-cyan h-full rounded-full transition-all duration-1000 relative"
                      style={{ width: `${progressPercentage}%` }}
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 blur-[2px]" />
                    </div>
                  </div>
                  <div className="text-center mt-3 text-xs font-bold text-hsh-navy/60">
                    {Math.round(100 - progressPercentage)}% time remaining
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-50 border-4 border-red-100 mx-auto mb-4">
                  <Icon.AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <div className="text-red-500 font-black text-xl font-outfit uppercase tracking-widest">Unpaid</div>
                <p className="text-hsh-muted text-sm mt-3 mb-6 leading-relaxed">
                  Your membership dues are currently unpaid or expired. Please make a payment to activate your benefits.
                </p>
                <PayButton isDiaspora={isDiaspora} />
              </div>
            )}
          </div>
        </div>

        {/* Payment History Panel */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-hsh-navy/5 rounded-3xl p-8 shadow-sm overflow-hidden h-full">
            <h3 className="font-outfit text-xl font-bold text-hsh-navy mb-6">Payment History</h3>
            
            {(!dbUser.payments || dbUser.payments.length === 0) ? (
              <div className="text-center py-16 bg-hsh-light/50 rounded-2xl border border-dashed border-hsh-navy/10">
                <Icon.ClipboardList className="w-10 h-10 text-hsh-muted/30 mx-auto mb-3" />
                <div className="text-hsh-muted text-sm font-medium">
                  No payments found on your account.
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-hsh-dark-text">
                  <thead className="bg-[#F8FAFF] text-hsh-navy font-bold uppercase text-[0.65rem] tracking-widest border-b border-hsh-navy/5">
                    <tr>
                      <th className="px-5 py-4 rounded-tl-lg">Date</th>
                      <th className="px-5 py-4">Amount</th>
                      <th className="px-5 py-4">Method</th>
                      <th className="px-5 py-4">Reference</th>
                      <th className="px-5 py-4 rounded-tr-lg text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hsh-navy/5">
                    {dbUser.payments.map((payment) => (
                      <tr key={payment.id} className="hover:bg-[#F8FAFF]/50 transition-colors">
                        <td className="px-5 py-4 whitespace-nowrap text-hsh-muted font-medium">
                          {new Date(payment.createdAt).toLocaleDateString(undefined, {
                            year: 'numeric', month: 'short', day: 'numeric'
                          })}
                        </td>
                        <td className="px-5 py-4 font-black text-hsh-navy">
                          {payment.currency} {payment.amount.toFixed(2)}
                        </td>
                        <td className="px-5 py-4 text-hsh-muted">
                          {payment.provider}
                        </td>
                        <td className="px-5 py-4 font-mono text-[0.7rem] text-hsh-muted/80">
                          {payment.reference.substring(0, 10)}...
                        </td>
                        <td className="px-5 py-4 text-right">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[0.65rem] font-black uppercase tracking-widest ${
                            (payment.status === "SUCCESS" || payment.status === "PAID")
                              ? "bg-green-50 text-green-600 border border-green-200"
                              : payment.status === "FAILED"
                                ? "bg-red-50 text-red-600 border border-red-200"
                                : "bg-amber-50 text-amber-600 border border-amber-200"
                          }`}>
                            {payment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
