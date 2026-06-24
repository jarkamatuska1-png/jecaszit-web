import BrushStroke from "./BrushStroke";

export default function AboutStrip() {
  return (
    <section className="py-20 bg-white border-t-2 border-[var(--gold-light)]">
      <div className="max-w-2xl mx-auto px-6 text-center">

        <p className="text-xs tracking-[0.5em] uppercase text-[var(--muted)] font-medium mb-8">
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

        <p className="text-[var(--muted)] font-light leading-relaxed mb-8">
          Jsem autorkou terapeutické metody JIH®. A vím, že změna nezačíná tím,
          že čekáš na zázrak — začíná tím, že se přestaneš chovat,
          jako by tvůj život měl rozhodnout někdo jiný.
        </p>

        <p
          className="text-2xl"
          style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
        >
          Jarka Matušková
        </p>

      </div>
    </section>
  );
}
