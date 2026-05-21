import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Divisions  from "./components/Divisions";
import Purpose    from "./components/Purpose";
import WhyJoin    from "./components/WhyJoin";
import Activities from "./components/Activities";
import Membership from "./components/Membership";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Divisions />
        <Purpose />
        <WhyJoin />
        <Activities />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
