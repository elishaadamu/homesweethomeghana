import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Membership from "../components/Membership";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Membership | Join the Global Ghanaian Community",
  description:
    "Become a member of Home Sweet Home Ghana Network. Connect with Ghanaians worldwide, access exclusive networking events, and support impactful charity initiatives.",
  alternates: {
    canonical: "/membership",
  },
  openGraph: {
    title: "Join Home Sweet Home Ghana Network | Membership Benefits",
    description:
      "Become part of a global family dedicated to empowerment, Ghanaian cultural pride, and community upliftment.",
    url: "/membership",
  },
};

export default function MembershipPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "76px" }}>
        <Membership />
      </main>
      <Footer />
    </>
  );
}
