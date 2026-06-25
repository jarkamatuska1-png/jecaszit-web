import BrushStroke from "./BrushStroke";
import Image from "next/image";

export default function AboutStrip() {
  return (
    <section className="py-20 bg-white border-t-2 border-[var(--gold-light)]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Fotka */}
          <div className="relative">
            <div className="w-full aspect-[3/4] relative overflow-hidden">
              <Image
                src="/images/jarka-hlavni.jpg"
                alt="Jarka Matušková"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[var(--gold)]" />
          </div>

          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.5em] uppercase text-[var(--muted)] font-medium mb-6">
              Kdo jsem
            </p>

            <div className="space-y-5 text-[var(--foreground)] font-light leading-relaxed mb-8">
              <p>
                Jsem Jarka Matušková. Mámou jsem se stala ve 20 letech.
                Prošla jsem vyhořením, dluhy a začínáním od nuly.
              </p>
              <p>
                Nezměnily mě hezké věty ani motivační plakáty.
              </p>
            </div>

            <div className="mb-8">
              <BrushStroke className="font-sans font-bold text-sm">
                Změnilo mě to, že jsem si přestala lhát.
              </BrushStroke>
            </div>

            <p className="text-[var(--muted)] font-light leading-relaxed mb-6">
              Jsem autorkou terapeutické metody JIH®. A vím, že změna nezačíná tím,
              že čekáš na zázrak — začíná tím, že se přestaneš chovat,
              jako by tvůj život měl rozhodnout někdo jiný.
            </p>

            <div className="border-l-2 border-[var(--gold)] pl-5 mb-8 space-y-2">
              <p className="text-xs tracking-[0.3em] uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>Co je JIH®</p>
              <p className="text-[var(--muted)] font-light leading-relaxed text-sm">
                Metoda práce s vnímáním, emocemi a vnitřním nastavením.
                Pomáhá uvidět, kde už nežiješ z pravdy, ale ze starých rolí, strachu nebo naučeného musím.
              </p>
              <p className="text-[var(--muted)] font-light leading-relaxed text-sm">
                Nevede k nekonečnému rozebírání. Vede k jasnosti, změně postoje
                a větší schopnosti tvořit svůj život vědomě a po svém.
              </p>
            </div>

            <p
              className="text-2xl mb-6"
              style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
            >
              Jarka Matušková
            </p>
            <a
              href="/o-mne"
              className="text-xs tracking-[0.3em] uppercase font-bold border-b-2 border-[var(--gold)] text-[var(--gold)] hover:opacity-70 transition-opacity pb-1"
            >
              Přečíst celý příběh →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
