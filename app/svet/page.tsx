import type { Metadata } from "next";
import PrahSignup from "@/components/PrahSignup";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  // stará stránka mimo svět Heleny — živá, ale mimo vyhledávání
  robots: { index: false, follow: false },
  title: "Vítej ve světě Heleny | Je čas žít",
  description:
    "Příběh na pokračování pro velké holky, kterým už jednou proletělo hlavou: tohle přece nemůže být všechno.",
};

export default function SvetPage() {
  return (
    <main className="bg-[#FAF6EF]">
      {/* PRÁH — vstupní brána */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.45em] uppercase font-medium mb-6" style={{ color: "var(--gold)" }}>
            — Vítej —
          </p>
          <h1 className="leading-[1.05] mb-8">
            <span className="block font-sans font-black text-4xl md:text-6xl uppercase tracking-tight text-[var(--heading)]">
              Ve světě
            </span>
            <span
              className="block text-5xl md:text-7xl"
              style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
            >
              Heleny
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed text-[var(--foreground)] max-w-xl mx-auto">
            Příběh na pokračování pro velké holky, kterým už jednou proletělo hlavou:{" "}
            <em className="text-[var(--gold-dark)]">tohle přece nemůže být všechno.</em>
          </p>
          <div className="mt-14 flex justify-center">
            <a
              href="#prah"
              aria-label="Pojď dál"
              className="flex flex-col items-center gap-2 text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
            >
              <span className="text-xs tracking-[0.3em] uppercase">Pojď dál</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* MANIFEST — dvě reality */}
      <section id="prah" className="py-24 md:py-32 px-6 bg-white">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-[var(--foreground)]">
              <p>Než vejdeš, buďme na rovinu.</p>
              <p>
                <strong className="font-semibold text-[var(--heading)]">Helena není skutečná.</strong>{" "}
                Vymyslela jsem ji. Je jí něco přes padesát, zařizuje lidem krásné domovy,
                drží všechno na svých bedrech — a nedávno jí došlo, že takhle si to úplně
                nepředstavovala.
              </p>
              <p>
                <strong className="font-semibold text-[var(--heading)]">Já skutečná jsem.</strong>{" "}
                Jmenuju se Jarka. A i když je Helena vymyšlená, ptá se přesně na to, na co
                jsem se kdysi ptala já. A na co se dodneška ptají ženy kolem mě.
              </p>
              <p>
                Tak vznikl tenhle svět. Není to kurz. Není to návod. Nikam tě netlačím.
                Je to příběh — a možná se v jednu chvíli přistihneš, že čteš o sobě.
              </p>
              <p>
                Vcházíš{" "}
                <span className="text-[var(--gold-dark)] font-medium">
                  dveřmi zvědavosti, ne bolesti.
                </span>{" "}
                Ne že by s tebou bylo něco špatně. Spíš že je v tobě víc života, než se za
                ta léta vešlo do jednoho dne. A ty jsi zvědavá, kolik ho ještě je.
              </p>
              <p className="text-[var(--heading)] font-medium">
                Tak pojď. Je čas žít.
              </p>
              <p className="text-right" style={{ fontFamily: "var(--font-script)", fontSize: "1.5rem", color: "var(--gold)" }}>
                — Jarka (a Helena)
              </p>
            </div>

            <div className="mt-12 border-l-2 pl-6 text-base text-[var(--muted)] italic leading-relaxed" style={{ borderColor: "var(--gold-light)" }}>
              Malá poznámka na cestu: většinu času budeš Helenou. Jen občas mě potkáš
              doopravdy — poznáš to podle mého psa Barnyho. To si spolu na chvíli sedneme
              mimo příběh.
            </div>
          </div>
        </FadeIn>
      </section>

      {/* OCHUTNÁVKA — teaser Dílu 1 */}
      <section className="py-24 md:py-32 px-6">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-[0.4em] uppercase font-medium mb-8" style={{ color: "var(--gold)" }}>
              — Ochutnávka —
            </p>
            <p
              className="text-3xl md:text-4xl leading-snug mb-8 text-[var(--heading)]"
              style={{ fontFamily: "var(--font-script)" }}
            >
              „Sakra! Nebudu to slavit!"
            </p>
            <p className="text-lg font-light leading-relaxed text-[var(--foreground)] max-w-xl mx-auto">
              Takhle začíná Helena svoje padesátiny. Katering pro čtyřicet, tři druhy
              chlebíčků, altán na zahradě. A pak jí do toho začnou chodit omluvné
              esemesky…
            </p>
            <p className="mt-10 text-sm tracking-[0.25em] uppercase font-bold" style={{ color: "var(--gold-dark)" }}>
              Brzy první díl — „Zůstaly tři"
            </p>
          </div>
        </FadeIn>
      </section>

      {/* SBĚR E-MAILŮ */}
      <section id="sber" className="py-24 md:py-32 px-6 bg-white border-t border-[var(--gold-light)]">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-[var(--heading)] mb-4">
              Chceš být u toho od začátku?
            </h2>
            <p className="text-lg font-light leading-relaxed text-[var(--foreground)] max-w-xl mx-auto mb-10">
              Nech mi na sebe e-mail. První díl a každý další ti přijdou rovnou do
              schránky — a tady na webu si je pak přečteš celé, v kráse.
            </p>
            <PrahSignup />
          </div>
        </FadeIn>
      </section>

      {/* patička — lehká, samostatná (mimo hlavní web) */}
      <footer className="py-10 px-6 bg-[#FAF6EF] text-center">
        <p className="font-sans font-black text-sm tracking-[0.2em] uppercase text-[var(--gold)]">
          Je čas žít
        </p>
        <p className="text-xs text-[var(--muted)] mt-3">
          © {new Date().getFullYear()} Jarka Matušková ·{" "}
          <a href="/gdpr" className="hover:text-[var(--gold)] transition-colors">
            Ochrana osobních údajů
          </a>
        </p>
      </footer>
    </main>
  );
}
