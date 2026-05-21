"use client";
import Navbar from "../components/Navbar";
import Activities from "../components/Activities";
import Footer from "../components/Footer";

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
