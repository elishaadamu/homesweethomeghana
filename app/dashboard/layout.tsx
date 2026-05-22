import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/auth?tab=login");
  }

  const user = session.user;

  return (
    <div className="flex h-screen bg-[#06102b] text-white overflow-hidden">
      <Sidebar user={user} />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar user={user} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
