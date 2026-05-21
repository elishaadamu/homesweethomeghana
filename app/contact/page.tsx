"use client";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "76px" }}>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
