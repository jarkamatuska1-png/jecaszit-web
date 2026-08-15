import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import PrahSignup from "@/components/PrahSignup";

export const metadata: Metadata = {
  title: "Vítej ve světě Heleny | Je čas žít",
  description:
    "Jen pohled dvou žen. Jedné vymyšlené a druhé reálné. Příběh na pokračování pro velké holky, které chtějí od života víc.",
  alternates: { canonical: "https://www.jecaszit.cz" },
};

export default function Domu() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* PRÁH */}
        <section className="px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-[0.45em] uppercase font-medium mb-6" style={{ color: "var(--gold)" }}>
              — Vítej —
            </p>
            <h1 className="leading-[1.05] mb-10">
              <span className="block font-sans font-black text-4xl md:text-6xl uppercase tracking-tight text-[var(--heading)]">
                Ve světě
              </span>
              <span
                className="block text-5xl md:text-7xl"
                style={{ fontFamily: "var(--font-script)", color: "var(--salvej-tmava)" }}
              >
                Heleny
              </span>
            </h1>
          </div>
        </section>

        {/* DVĚ REALITY — ty dvě ženy u jednoho stolu */}
        <section className="px-6 pb-16 md:pb-20">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/vitej-dve-reality.png"
                  alt="Jarka a Helena u jednoho stolu na zahradě — jedna skutečná, druhá vymyšlená"
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* každé slovo pod svou ženou — skutečná vlevo pod fotkou, vymyšlená vpravo pod kresbou */}
              <div className="flex mt-5 text-xs tracking-[0.25em] uppercase" style={{ color: "var(--salvej)" }}>
                <span className="w-1/2 text-center">Jedna skutečná</span>
                <span className="w-1/2 text-center">druhá vymyšlená</span>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* SEZNÁMENÍ */}
        <section className="px-6 pb-20 md:pb-28 pt-20 md:pt-24 border-t border-[var(--linka)]">
          <FadeIn>
            <div className="max-w-2xl mx-auto space-y-7 text-lg md:text-xl font-light leading-relaxed text-[var(--foreground)]">
              <p>
                Není skutečná. Vznikla v mé hlavě. A přesto prožívá situace, které
                prožíváme my — ženy z masa a kostí.
              </p>
              <p>
                Jsem autorka jejího příběhu. A jsem i průvodkyně jejími životními
                situacemi. Nejsem tu pro poučky ani soudy. Jsem tu pro každé její JO AHA —
                a pro směr, který si sama zvolí.
              </p>
              <p>
                Naše společná cesta není o výuce ani o kázání. Jen pohled dvou žen. Jedné
                vymyšlené a druhé reálné.
              </p>
              <p>
                Poznáš mě podle jména — a podle mého psa Barnyho, parťáka na dlouhé
                procházky a na cestě k sobě.
              </p>
              <p className="text-right pt-2" style={{ fontFamily: "var(--font-script)", fontSize: "1.6rem", color: "var(--salvej-tmava)" }}>
                — Jarka
              </p>
            </div>
          </FadeIn>
        </section>

        {/* TICHÉ POZVÁNÍ + E-MAIL */}
        <section className="px-6 py-20 md:py-28">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg md:text-xl font-light leading-relaxed text-[var(--foreground)] mb-10 max-w-xl mx-auto">
                Jestli chceš, aby ti žádné Helenino JO AHA neuteklo, nech mi tady svůj
                e-mail — každý další příběh ti do něj pošlu.
              </p>
              <PrahSignup zdroj="domu" />
            </div>
          </FadeIn>
        </section>

        {/* DVEŘE DO PŘÍBĚHU */}
        <section className="px-6 pb-24 md:pb-32">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center border-t border-[var(--gold-light)] pt-14">
              <Link
                href="/je-cas-zit"
                className="inline-flex items-center gap-3 text-sm tracking-[0.25em] uppercase font-bold hover:opacity-70 transition-opacity"
                style={{ color: "var(--gold-dark)" }}
              >
                Vejít do příběhu
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
