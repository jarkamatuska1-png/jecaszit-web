import Image from "next/image";

const WA = "https://wa.me/420774420251?text=Ahoj+Jarko%2C+ráda+bych+si+s+tebou+popovídala.";

export default function Hero() {
  return (
    <section className="bg-white pt-16 min-h-screen relative overflow-hidden">

      {/* Fotka — pravá polovina */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%]">
        <Image
          src="/images/jarka-o-mne.jpg"
          alt="Jarka Matušková"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Přechod zleva — foto splývá do bílé */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, white 0%, rgba(255,255,255,0.6) 30%, transparent 60%)" }}
        />
        {/* Přechod zdola na mobilu */}
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: "linear-gradient(to top, white 20%, transparent 70%)" }}
        />
      </div>

      {/* Text — přes fotku vlevo */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-lg py-24">

            <p className="text-xs tracking-[0.45em] uppercase font-medium mb-4" style={{ color: "var(--gold)" }}>
              — Jarka Matušková —
            </p>

            <h1 className="leading-none mb-6">
              <span className="block font-sans font-black text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[var(--foreground)]">
                Je čas
              </span>
              <span
                className="block text-5xl md:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
              >
                Žít
              </span>
            </h1>

            <p className="text-base md:text-lg font-medium mb-3" style={{ color: "var(--gold)" }}>
              Pro velké holky, které chtějí od života víc.
            </p>

            <p className="text-[var(--muted)] font-light leading-relaxed mb-10 max-w-xs">
              Jeden společný hovor může ukázat tvoje další možnosti.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-white text-xs tracking-[0.3em] uppercase font-bold hover:opacity-90 transition-opacity text-center"
                style={{ background: "linear-gradient(to right, #9a7020, #e8c96e, #f5e07e, #d4af5a, #9a7020)" }}
              >
                Chci si popovídat
              </a>
              <a
                href="#pro-koho"
                className="inline-block px-8 py-4 border-2 border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-bold hover:bg-[var(--gold)] hover:text-white transition-all duration-300 text-center"
              >
                Je to pro mě?
              </a>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
