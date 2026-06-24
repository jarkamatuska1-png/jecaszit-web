import BrushStroke from "./BrushStroke";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full py-24">
        <div className="max-w-4xl">

          <p className="text-xs tracking-[0.5em] uppercase text-[var(--gold)] mb-8 font-medium">
            Jarka Matušková
          </p>

          <h1 className="font-heading font-semibold leading-[1.05] mb-10">
            <span className="block text-5xl md:text-6xl lg:text-7xl text-[var(--foreground)] uppercase tracking-tight mb-3">
              Velký holky
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl text-[var(--foreground)] uppercase tracking-tight mb-3">
              chtějí od života
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl italic text-[var(--gold)] tracking-tight">
              mnohem víc.
            </span>
          </h1>

          <div className="mb-10">
            <BrushStroke className="text-sm md:text-base font-medium tracking-wider">
              A ty to víš.
            </BrushStroke>
          </div>

          <p className="text-lg md:text-xl text-[var(--muted)] font-light leading-relaxed max-w-2xl mb-12">
            Přestaň čekat, až ti někdo orazítkuje život.
            Jsem tu pro ženy, které mají víc v sobě —
            a konečně s tím něco chtějí dělat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#kontakt"
              className="inline-block px-10 py-4 bg-[var(--gold)] text-white text-xs tracking-[0.3em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300"
            >
              Chci si popovídat
            </a>
            <a
              href="#pro-koho"
              className="inline-block px-10 py-4 border-2 border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-medium hover:bg-[var(--gold)] hover:text-white transition-all duration-300"
            >
              Je to pro mě?
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
