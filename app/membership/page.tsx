"use client";
import Navbar from "../components/Navbar";
import Membership from "../components/Membership";
import Footer from "../components/Footer";

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
