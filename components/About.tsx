import BrushStroke from "./BrushStroke";
import Image from "next/image";

export default function About() {
  return (
    <section id="o-mne" className="py-28 bg-white border-t-2 border-[var(--gold-light)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div className="relative order-2 md:order-1 md:sticky md:top-24">
            <div className="w-full aspect-[3/4] relative overflow-hidden">
              <Image
                src="/images/jarka-o-mne.jpg"
                alt="Jarka Matušková"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[var(--gold)]" />
          </div>

          <div className="order-1 md:order-2">
            <p className="text-xs tracking-[0.5em] uppercase text-[var(--muted)] font-medium mb-6">
              O mně
            </p>

            <h2 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tight text-[var(--foreground)] leading-tight mb-3">
              Nemluvím z knih.
            </h2>
            <p
              className="text-3xl md:text-4xl mb-10"
              style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
            >
              Mluvím ze života.
            </p>

            <div className="space-y-5 text-[var(--foreground)] font-light leading-relaxed">
              <p className="font-medium">Jsem Jarka Matušková.</p>

              <p>
                Mámou jsem se stala ve 20 letech.
                Prošla jsem vyhořením, dluhy, pády i začínáním od nuly.
              </p>

              <p>
                A jednoho dne mi došlo, že celý život nevyhraješ tím, že jsi neviditelná.
              </p>

              <p className="text-[var(--muted)]">
                Že být hodná, silná a přizpůsobivá není životní strategie.
                To je spíš pomalý způsob, jak se sama sobě ztratit z dohledu.
              </p>

              <p className="text-[var(--muted)]">
                Nezměnily mě hezké věty. Ani motivační plakáty.
                Ani další teorie, kterou si přečteš, odkýveš… a za týden zase jedeš po staru.
              </p>

              <div className="py-4">
                <BrushStroke className="font-sans font-bold text-sm tracking-wide">
                  Změnilo mě to, že jsem si přestala lhát.
                </BrushStroke>
              </div>

              <p className="text-[var(--muted)]">
                Kde se ohýbám. Kde čekám. Kde hraju roli.
                Kde si říkám, že to ještě vydržím, i když už dávno nechci.
              </p>

              <p className="text-[var(--muted)]">
                Jsem autorkou terapeutické metody JIH®.
                A vím, že změna nezačíná tím, že čekáš na zázrak.
              </p>

              <p className="font-medium text-[var(--foreground)]">
                Začíná tím, že se přestaneš chovat, jako by tvůj život
                měl rozhodnout někdo jiný.
              </p>
            </div>

            <div className="mt-10">
              <p
                className="text-2xl"
                style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
              >
                Jarka Matušková
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
