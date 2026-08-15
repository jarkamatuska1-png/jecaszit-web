import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "O autorce",
  description: "Ahoj, jsem Jarka. Helenu jsem si vymyslela — ale to, co prožívá, vymyšlené není.",
  alternates: { canonical: "https://jecaszit.cz/o-autorce" },
};

export default function OAutorce() {
  return (
    <>
      <Nav />
      <main className="pt-16 min-h-[70vh] flex items-center">
        <section className="px-6 py-24 md:py-32 w-full">
          <FadeIn>
            <div className="max-w-xl mx-auto text-center">
              <p className="text-xs tracking-[0.45em] uppercase font-medium mb-8" style={{ color: "var(--gold)" }}>
                — O autorce —
              </p>
              <p className="text-lg md:text-xl font-light leading-relaxed text-[var(--foreground)]">
                Ahoj, jsem Jarka. Helenu jsem si vymyslela — ale to, co prožívá, vymyšlené
                není. Víc o mně najdeš tady →{" "}
                <a
                  href="https://jarkamatuskova.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium border-b transition-colors hover:opacity-70"
                  style={{ color: "var(--gold-dark)", borderColor: "var(--gold-light)" }}
                >
                  jarkamatuskova.cz
                </a>
              </p>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
