import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tahle stránka tu není",
  robots: { index: false, follow: true },
};

/**
 * Stránka pro adresy, které neexistují. Chodí sem hlavně ženy ze starých odkazů
 * (web se předělával) a čtenářky, které trefily díl, co ještě nejde ven.
 * Proto odsud vede cesta dál, ne omluva.
 */
export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="pt-16 min-h-[70vh] flex items-center">
        <section className="px-6 py-20 w-full">
          <div className="max-w-xl mx-auto text-center">
            <p
              className="text-xs tracking-[0.45em] uppercase font-medium mb-6"
              style={{ color: "var(--gold)" }}
            >
              — Tady nic není —
            </p>

            <h1 className="leading-[1.1] mb-8">
              <span className="block font-sans font-black text-3xl md:text-5xl uppercase tracking-tight text-[var(--heading)]">
                Tahle stránka
              </span>
              <span
                className="block text-4xl md:text-6xl"
                style={{ fontFamily: "var(--font-script)", color: "var(--salvej-tmava)" }}
              >
                se ztratila
              </span>
            </h1>

            <p className="text-base md:text-lg text-[var(--foreground)] leading-relaxed mb-4">
              Buď jsi přišla po starém odkazu, nebo je díl, který hledáš, ještě
              schovaný. Obojí se spraví stejně — vrátíš se k Heleně.
            </p>

            <p className="text-sm text-[var(--muted)] leading-relaxed mb-10">
              Nic jsi nerozbila. To se tady stává jen Heleně.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/je-cas-zit"
                className="px-8 py-4 text-white text-xs tracking-[0.3em] uppercase font-bold hover:opacity-90 transition-opacity"
                style={{ background: "var(--terakota)" }}
              >
                Číst díly
              </Link>
              <Link
                href="/"
                className="px-8 py-4 text-xs tracking-[0.3em] uppercase font-bold border border-[var(--linka)] text-[var(--foreground)] hover:border-[var(--gold)] transition-colors"
              >
                Kdo je Helena
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
