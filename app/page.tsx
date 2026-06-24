import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ForWho from "@/components/ForWho";
import AboutStrip from "@/components/AboutStrip";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ForWho />
        <AboutStrip />
        <Services />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
