import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { vsechnyDily, chystaneDily } from "@/lib/dily";

export const metadata: Metadata = {
  title: "Je čas žít — život s Helenou",
  description:
    "Příběh na pokračování. Každý díl celý, otevřený a zdarma — Helenin život a pod ním kousek mojí reality.",
  alternates: { canonical: "https://jecaszit.cz/je-cas-zit" },
};

export default function PrehledDilu() {
  const dily = vsechnyDily();
  const chystane = chystaneDily();

  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="px-6 pt-20 pb-14 md:pt-28 md:pb-16">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-[0.45em] uppercase font-medium mb-6" style={{ color: "var(--gold)" }}>
              — Příběh —
            </p>
            <h1 className="leading-[1.1] mb-8">
              <span className="block font-sans font-black text-3xl md:text-5xl uppercase tracking-tight text-[var(--heading)]">
                Je čas žít
              </span>
              <span
                className="block text-4xl md:text-5xl mt-2"
                style={{ fontFamily: "var(--font-script)", color: "var(--salvej-tmava)" }}
              >
                život s Helenou
              </span>
            </h1>
            <p className="text-lg font-light leading-relaxed text-[var(--foreground)] max-w-xl mx-auto">
              Tady se příběh odvíjí. Každý díl je celý, otevřený a zdarma — Helenin život
              a pod ním kousek mojí reality.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24 md:pb-32">
          <div className="max-w-2xl mx-auto space-y-8">
            {dily.map((dil, i) => (
              <FadeIn key={dil.slug} delay={i * 80}>
                <article className="bg-[var(--karta)] border border-[var(--linka)] overflow-hidden">
                  {dil.karta && (
                    <Link href={`/je-cas-zit/${dil.slug}`} className="block relative aspect-[3/2]">
                      <Image
                        src={dil.karta}
                        alt={`Díl ${dil.poradi} — ${dil.titul}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 672px"
                        className="object-cover"
                        priority={i === 0}
                      />
                    </Link>
                  )}
                  <div className="p-8 md:p-10">
                  <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: "var(--gold)" }}>
                    Díl {dil.poradi}
                  </p>
                  <h2 className="font-sans font-black text-2xl md:text-3xl uppercase tracking-tight text-[var(--heading)] mb-5">
                    {dil.titul}
                  </h2>
                  <p className="text-base md:text-lg font-light leading-relaxed text-[var(--foreground)] mb-7">
                    {dil.anotace}
                  </p>
                  <Link
                    href={`/je-cas-zit/${dil.slug}`}
                    className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-bold hover:opacity-70 transition-opacity"
                    style={{ color: "var(--gold-dark)" }}
                  >
                    Číst celý díl
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  </div>
                </article>
              </FadeIn>
            ))}

            {chystane.map((dil) => (
              <FadeIn key={dil.slug} delay={120}>
                <div className="border border-dashed border-[var(--linka)] px-8 py-10 md:px-10 text-center">
                  <p className="text-xs tracking-[0.35em] uppercase font-medium mb-3" style={{ color: "var(--salvej)" }}>
                    Díl {dil.poradi} — chystá se
                  </p>
                  <p className="font-sans font-black text-xl md:text-2xl uppercase tracking-tight text-[var(--text)] mb-4">
                    {dil.titul}
                  </p>
                  <p className="text-base font-light leading-relaxed text-[var(--text)] max-w-md mx-auto">
                    Brzy tady bude celý. Jestli chceš, aby ti neutekl, nech mi na sebe e-mail
                    na úvodní stránce — pošlu ti ho, jakmile vyjde.
                  </p>
                </div>
              </FadeIn>
            ))}

            {dily.length === 0 && (
              <p className="text-center text-[var(--muted)]">Zatím tu není žádný díl.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
