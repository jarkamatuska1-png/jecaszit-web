import BrushStroke from "./BrushStroke";

const WA = "https://wa.me/420774420251?text=Ahoj+Jarko%2C+ráda+bych+si+s+tebou+popovídala.";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full py-24">
        <div className="max-w-4xl">

          <p className="text-xs tracking-[0.5em] uppercase text-[var(--muted)] mb-10 font-medium">
            Jarka Matušková
          </p>

          <div className="mb-6">
            <BrushStroke className="font-sans text-sm md:text-base font-bold tracking-[0.3em] uppercase">
              Je čas žít
            </BrushStroke>
          </div>

          <h1 className="font-sans font-black leading-[1.0] mb-8 uppercase tracking-tight">
            <span className="block text-5xl md:text-6xl lg:text-7xl text-[var(--foreground)] mb-1">
              Velký holky
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl text-[var(--foreground)] mb-1">
              chtějí od života
            </span>
            <span
              className="block text-5xl md:text-6xl lg:text-7xl"
              style={{
                background: "linear-gradient(to right, #9a7020 0%, #e8c96e 25%, #f5e07e 48%, #d4af5a 65%, #9a7020 85%, #e0c060 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              mnohem víc.
            </span>
          </h1>

          <p
            className="mb-10 text-2xl md:text-3xl"
            style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
          >
            A ty to víš.
          </p>

          <p className="text-lg text-[var(--muted)] font-light leading-relaxed max-w-2xl mb-12">
            Přestaň čekat, až ti někdo orazítkuje život.
            Jsem tu pro ženy, které mají víc v sobě —
            a konečně s tím něco chtějí dělat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 text-white text-xs tracking-[0.3em] uppercase font-bold hover:opacity-90 transition-opacity duration-300"
              style={{ background: "linear-gradient(to right, #9a7020, #e8c96e, #f5e07e, #d4af5a, #9a7020)" }}
            >
              Chci si popovídat
            </a>
            <a
              href="#pro-koho"
              className="inline-block px-10 py-4 border-2 border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-bold hover:bg-[var(--gold)] hover:text-white hover:border-[var(--gold)] transition-all duration-300"
            >
              Je to pro mě?
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
