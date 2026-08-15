import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import PrahSignup from "@/components/PrahSignup";
import PoslatDal from "@/components/PoslatDal";
import { vsechnyDily, dilPodleSlugu, LINKA, rozmeryObrazku } from "@/lib/dily";
import { OG_OBRAZ } from "@/app/layout";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return vsechnyDily().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dil = dilPodleSlugu(slug);
  if (!dil) return {};

  const nazev = dil.titul;
  const url = `https://www.jecaszit.cz/je-cas-zit/${dil.slug}`;
  // Ke sdílení jde banner dílu; když ho díl nemá, zaskočí obraz „dvě reality“.
  // Do náhledu na sítích jde přednostně obrázek 1200×630 (poměr, který chce
  // Facebook). Když ho díl nemá, zaskočí banner 16:9 a po něm obraz „dvě reality“.
  const rozmeryBanneru = dil.banner ? rozmeryObrazku(dil.banner) : null;
  const popisObrazu = `Díl ${dil.poradi} — ${dil.titul}`;
  const obraz = dil.og
    ? { url: dil.og, alt: popisObrazu, width: 1200, height: 630 }
    : dil.banner
      ? {
          url: dil.banner,
          alt: popisObrazu,
          ...(rozmeryBanneru ? { width: rozmeryBanneru.sirka, height: rozmeryBanneru.vyska } : {}),
        }
      : { url: OG_OBRAZ.url, alt: OG_OBRAZ.alt, width: OG_OBRAZ.width, height: OG_OBRAZ.height };

  return {
    title: nazev,
    description: dil.anotace,
    alternates: { canonical: url },
    openGraph: {
      title: `${dil.titul} | Je čas žít`,
      description: dil.anotace,
      url,
      siteName: "Je čas žít",
      locale: "cs_CZ",
      type: "article",
      publishedTime: dil.datum || undefined,
      authors: ["Jarka Matušková"],
      images: [obraz],
    },
    twitter: {
      card: "summary_large_image",
      title: `${dil.titul} | Je čas žít`,
      description: dil.anotace,
      images: [obraz.url],
    },
  };
}

export default async function DilPage({ params }: Props) {
  const { slug } = await params;
  const dil = dilPodleSlugu(slug);
  if (!dil) notFound();

  const dily = vsechnyDily();
  const dalsi = dily.find((d) => d.poradi > dil.poradi);

  const url = `https://www.jecaszit.cz/je-cas-zit/${dil.slug}`;
  // Aby vyhledávače četly díl jako část seriálu, ne jako běžnou stránku.
  const schemaDilu = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: dil.titul,
    description: dil.anotace,
    inLanguage: "cs-CZ",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(dil.datum ? { datePublished: dil.datum, dateModified: dil.datum } : {}),
    ...(dil.banner ? { image: [`https://www.jecaszit.cz${dil.banner}`] } : {}),
    author: {
      "@type": "Person",
      name: "Jarka Matušková",
      url: "https://www.jecaszit.cz/o-autorce",
    },
    publisher: { "@type": "Person", name: "Jarka Matušková" },
    isPartOf: {
      "@type": "CreativeWorkSeries",
      name: "Je čas žít — život s Helenou",
      url: "https://www.jecaszit.cz/je-cas-zit",
    },
    position: dil.poradi,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDilu) }}
      />
      <Nav />
      <main className="pt-16">
        {/* Hlavička dílu — s bannerem 16:9 (název sedí v klidné ploše vlevo) */}
        {dil.banner ? (
          <section className="px-6 pt-8 md:pt-12 pb-10 md:pb-14">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[16/9]">
                <Image
                  src={dil.banner}
                  alt={`Díl ${dil.poradi} — ${dil.titul}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                  priority
                />
                {/* Titulek v obraze až od md — na mobilu by se do klidné plochy nevešel */}
                <div className="hidden md:flex absolute inset-y-0 left-0 w-[46%] flex-col justify-center pl-8 lg:pl-12 pr-4">
                  <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: "var(--gold-dark)" }}>
                    Díl {dil.poradi}
                  </p>
                  <h1 className="font-sans font-black text-3xl lg:text-4xl uppercase tracking-tight text-[var(--heading)] leading-[1.1]">
                    {dil.titul}
                  </h1>
                </div>
              </div>

              {/* Mobil — název pod obrazem */}
              <div className="md:hidden text-center mt-8">
                <p className="text-xs tracking-[0.35em] uppercase font-medium mb-4" style={{ color: "var(--gold)" }}>
                  Díl {dil.poradi}
                </p>
                <h1 className="font-sans font-black text-3xl uppercase tracking-tight text-[var(--heading)] leading-[1.1]">
                  {dil.titul}
                </h1>
              </div>
            </div>
          </section>
        ) : (
          <section className="px-6 pt-16 pb-10 md:pt-24 md:pb-14">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs tracking-[0.35em] uppercase font-medium mb-5" style={{ color: "var(--gold)" }}>
                Díl {dil.poradi}
              </p>
              <h1 className="font-sans font-black text-3xl md:text-5xl uppercase tracking-tight text-[var(--heading)] leading-[1.1]">
                {dil.titul}
              </h1>
            </div>
          </section>
        )}

        {/* Helenina scéna */}
        <article className="px-6 pb-4">
          <div className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl font-light leading-[1.85] text-[var(--foreground)]">
            {dil.scena.map((odstavec, i) =>
              odstavec === LINKA ? (
                <hr key={i} className="w-16 mx-auto my-12 border-0 h-px" style={{ background: "var(--linka)" }} />
              ) : (
                <p key={i}>{odstavec}</p>
              )
            )}
          </div>

          {/* Dohra — Cesta s Barnym: součást téhož dílu, jen tišeji */}
          {dil.dohra.length > 0 && (
            <div className="max-w-2xl mx-auto mt-16 md:mt-20">
              <div className="h-px w-full" style={{ background: "var(--linka)" }} />
              <p
                className="text-center text-xs tracking-[0.35em] uppercase font-medium mt-8 mb-10"
                style={{ color: "var(--gold)" }}
              >
                Cesta s Barnym
              </p>
              <div className="space-y-6 text-lg font-light italic leading-[1.85] text-[var(--muted)]">
                {dil.dohra.map((odstavec, i) =>
                  odstavec === LINKA ? (
                    <hr key={i} className="w-16 mx-auto my-10 border-0 h-px" style={{ background: "var(--linka)" }} />
                  ) : (
                    <p key={i}>{odstavec}</p>
                  )
                )}
              </div>
            </div>
          )}
        </article>

        {/* Ticho po posledním úderu — a teprve pak pozvání */}
        <section className="px-6 pt-24 pb-20 md:pt-32 md:pb-24 mt-16 border-t border-[var(--linka)]">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg font-light leading-relaxed text-[var(--foreground)] mb-9 max-w-xl mx-auto">
                Nech mi tady svůj e-mail, ať ti další Helenin díl neuteče.
              </p>
              <PrahSignup zdroj="dil" />
            </div>
          </FadeIn>
        </section>

        {/* Poslat dál — až za pozváním k e-mailu, ať se dvě prosby nepřekřikují */}
        <section className="px-6 pb-20 md:pb-24">
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <PoslatDal titul={dil.titul} url={url} />
            </div>
          </FadeIn>
        </section>

        {/* Kudy dál */}
        <section className="px-6 py-14 md:py-16">
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href="/je-cas-zit"
              className="text-xs tracking-[0.25em] uppercase font-medium text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
            >
              ← Všechny díly
            </Link>
            {dalsi && (
              <Link
                href={`/je-cas-zit/${dalsi.slug}`}
                className="text-xs tracking-[0.25em] uppercase font-bold hover:opacity-70 transition-opacity text-center sm:text-right"
                style={{ color: "var(--gold-dark)" }}
              >
                Díl {dalsi.poradi} — {dalsi.titul} →
              </Link>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
