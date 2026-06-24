import Image from "next/image";

const WA = "https://wa.me/420774420251?text=Ahoj+Jarko%2C+ráda+bych+si+s+tebou+popovídala.";

export default function Hero() {
  return (
    <section className="bg-white pt-16 min-h-screen flex items-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-0 items-center min-h-[calc(100vh-4rem)]">

          {/* Levý sloupec — text */}
          <div className="relative py-16 md:py-24 z-10">

            {/* Dekorativní kruh */}
            <div
              className="absolute -left-16 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none hidden md:block"
              style={{ border: "1.5px solid var(--gold)", opacity: 0.25 }}
            />

            <p
              className="text-xs tracking-[0.45em] uppercase font-medium mb-3 relative"
              style={{ color: "var(--gold)" }}
            >
              — Jarka Matušková —
            </p>

            <h1 className="relative mb-4 leading-none">
              <span className="block font-sans font-black text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[var(--foreground)]">
                Je čas
              </span>
              <span
                className="block text-5xl md:text-6xl lg:text-7xl leading-none"
                style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
              >
                Žít
              </span>
            </h1>

            <p
              className="text-base md:text-lg font-medium mb-3 relative"
              style={{ color: "var(--gold)" }}
            >
              Pro velké holky, které chtějí od života víc.
            </p>

            <p className="text-[var(--muted)] font-light leading-relaxed mb-10 max-w-sm relative text-sm md:text-base">
              Jeden společný hovor může ukázat tvoje další možnosti.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 relative">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 text-white text-xs tracking-[0.3em] uppercase font-bold hover:opacity-90 transition-opacity duration-300 text-center"
                style={{ background: "linear-gradient(to right, #9a7020, #e8c96e, #f5e07e, #d4af5a, #9a7020)" }}
              >
                Chci si popovídat
              </a>
              <a
                href="#pro-koho"
                className="inline-block px-10 py-4 border-2 border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-bold hover:bg-[var(--gold)] hover:text-white transition-all duration-300 text-center"
              >
                Je to pro mě?
              </a>
            </div>

          </div>

          {/* Pravý sloupec — fotka */}
          <div className="relative h-[60vw] md:h-[calc(100vh-4rem)] max-h-[800px]">
            <Image
              src="/images/jarka-o-mne.jpg"
              alt="Jarka Matušková"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Přechod zleva */}
            <div
              className="absolute inset-0 hidden md:block"
              style={{ background: "linear-gradient(to right, white 0%, transparent 15%)" }}
            />
            {/* Přechod zdola na mobilu */}
            <div
              className="absolute inset-0 md:hidden"
              style={{ background: "linear-gradient(to top, white 0%, transparent 30%)" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
