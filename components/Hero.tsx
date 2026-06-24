export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-12 bg-[var(--gold)]" />
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">Jarka Matušková</p>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-[var(--foreground)] leading-[1.1] mb-8">
            Velký holky
            <br />
            chtějí od života víc.
            <br />
            <span className="italic text-[var(--gold)]">Mnohem víc.</span>
          </h1>

          <div className="w-16 h-px bg-[var(--gold)] mb-8" />

          <p className="text-xl text-[var(--muted)] font-light leading-relaxed max-w-xl mb-12">
            Přestaň čekat, až ti někdo orazítkuje život.
            Jsem tu pro ženy, které vědí, že mají víc —
            a konečně s tím něco chtějí dělat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#kontakt"
              className="inline-block px-10 py-4 bg-[var(--gold)] text-white text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300"
            >
              Chci si popovídat
            </a>
            <a
              href="#pro-koho"
              className="inline-block px-10 py-4 border border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[var(--gold)] hover:text-white transition-all duration-300"
            >
              Je to pro mě?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
