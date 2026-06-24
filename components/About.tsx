import BrushStroke from "./BrushStroke";

export default function About() {
  return (
    <section id="o-mne" className="py-28 bg-white border-t-2 border-[var(--gold-light)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="relative order-2 md:order-1">
            <div className="w-full aspect-[3/4] bg-[#f0ede8] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-[var(--gold-light)]">
                <span className="text-xs tracking-widest uppercase">foto</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[var(--gold)]" />
          </div>

          <div className="order-1 md:order-2">
            <p className="text-xs tracking-[0.5em] uppercase text-[var(--gold)] font-medium mb-6">
              O mně
            </p>

            <h2 className="font-heading text-4xl md:text-5xl font-semibold uppercase tracking-tight text-[var(--foreground)] leading-tight mb-4">
              Nemluvím z knih.
            </h2>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold italic text-[var(--gold)] leading-tight mb-10">
              Mluvím ze života.
            </h2>

            <div className="space-y-5 text-[var(--muted)] font-light leading-relaxed mb-10">
              <p>
                Jsem Jarka Matušková. Mámou jsem se stala v 21. Prošla jsem
                vyhořením, dluhy i začínáním od nuly — a pak jsem přišla
                na to, že celou dobu hraju špatnou hru.
              </p>
              <p className="text-[var(--foreground)] font-medium">
                Dnes vím co funguje. A chci, aby to věděly i ostatní ženy.
              </p>
              <p>
                Od roku 2015 pracuji s metodou JIH® — přístup, který pomáhá
                ženám napřímit vztahy, zdraví, finance i pocit vlastní hodnoty.
                Najednou. Propojené.
              </p>
            </div>

            <BrushStroke className="font-medium text-sm">
              Nejsem terapeut. Jsem žena, která ti řekne pravdu.
            </BrushStroke>
          </div>

        </div>
      </div>
    </section>
  );
}
