import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ForWho from "@/components/ForWho";
import AboutStrip from "@/components/AboutStrip";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FadeIn><ForWho /></FadeIn>
        <FadeIn delay={100}><AboutStrip /></FadeIn>
        <FadeIn delay={100}><Services /></FadeIn>
        <FadeIn delay={100}><Testimonial /></FadeIn>
        <FadeIn delay={100}><Contact /></FadeIn>
      </main>
      <Footer />
    </>
  );
}
