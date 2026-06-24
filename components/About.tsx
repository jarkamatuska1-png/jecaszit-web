export default function About() {
  return (
    <section id="o-mne" className="py-28 bg-white border-t border-[var(--gold-light)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-[var(--gold-light)]" />
            <div className="w-full aspect-[3/4] bg-[#f5f5f5] relative overflow-hidden">
              {/* foto sem přijde */}
              <div className="absolute inset-0 flex items-center justify-center text-[var(--gold-light)]">
                <span className="text-xs tracking-widest uppercase">foto</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[var(--gold)]" />
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[var(--gold)]" />
              <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">O mně</p>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--foreground)] leading-tight mb-8">
              Nemluvím z knih.
              <br />
              <span className="italic text-[var(--gold)]">Mluvím ze života.</span>
            </h2>

            <div className="space-y-5 text-[var(--muted)] font-light leading-relaxed">
              <p>
                Jsem Jarka Matušková. Mámou jsem se stala v 21. Prošla jsem
                vyhořením, dluhy i začínáním od nuly — a pak jsem přišla
                na to, že celou dobu hraju špatnou hru.
              </p>
              <p>
                Dnes vím co funguje. A chci, aby to věděly i ostatní ženy.
              </p>
              <p className="text-[var(--foreground)] font-medium">
                Od roku 2015 pracuji s metodou JIH® — unikátní přístup,
                který pomáhá ženám napřímit vztahy, zdraví, finance i pocit
                vlastní hodnoty. Najednou, propojené.
              </p>
              <p>
                Nejsem terapeut, který ti bude hladit hlavu.
                Jsem žena, která ti řekne pravdu — s láskou, ale bez mašličky.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-[var(--gold-light)]" />
              <p className="font-heading text-sm italic text-[var(--gold)]">Jarka Matušková</p>
              <div className="h-px flex-1 bg-[var(--gold-light)]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
