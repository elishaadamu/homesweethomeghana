import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Activities from "../components/Activities";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Activities & Programs | Events & Community Outreach",
  description:
    "Explore upcoming and past events, community service projects, networking gatherings, and cultural celebrations hosted by Home Sweet Home Ghana Network.",
  alternates: {
    canonical: "/activities",
  },
  openGraph: {
    title: "Activities & Programs | Home Sweet Home Ghana Network",
    description:
      "Charity drives, networking meetups, youth mentorship, and cultural celebrations connecting Ghanaians worldwide.",
    url: "/activities",
  },
};

export default function ActivitiesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "76px" }}>
        <Activities />
      </main>
      <Footer />
    </>
  );
}
