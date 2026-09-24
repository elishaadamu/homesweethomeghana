import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with HSH Network",
  description:
    "Get in touch with Home Sweet Home Ghana Network. Inquire about membership, partnerships, donations, or community initiatives in Accra, Ghana and globally.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Home Sweet Home Ghana Network",
    description:
      "Reach out to our leadership and support team in Accra, Ghana and join the conversation.",
    url: "/contact",
  },
};

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
