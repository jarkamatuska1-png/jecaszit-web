import Image from "next/image";

const WA = "https://wa.me/420774420251?text=Ahoj+Jarko%2C+ráda+bych+si+s+tebou+popovídala.";

export default function Hero() {
  return (
    <section className="bg-white pt-16">

      {/* DESKTOP — celý mockup banner */}
      <div className="hidden md:block w-full">
        <Image
          src="/images/jarka-mockup.jpg"
          alt="Jarka Matušková — Je čas žít"
          width={1920}
          height={720}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* MOBIL — portrétní fotka + text v kódu */}
      <div className="md:hidden">
        <div className="relative w-full aspect-[3/4] overflow-hidden">
          <Image
            src="/images/jarka-o-mne.jpg"
            alt="Jarka Matušková"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Gradient přes spodní část pro čitelnost textu */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.3) 50%, transparent 100%)" }}
          />
          {/* Text přes fotku dole */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
            <p className="text-xs tracking-[0.4em] uppercase font-medium mb-2" style={{ color: "var(--gold)" }}>
              — Jarka Matušková —
            </p>
            <h1 className="leading-none mb-3">
              <span className="block font-sans font-black text-4xl uppercase tracking-tight text-[var(--foreground)]">
                Je čas
              </span>
              <span className="block text-4xl" style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}>
                Žít
              </span>
            </h1>
            <p className="text-sm font-medium mb-1" style={{ color: "var(--gold)" }}>
              Pro velké holky, které chtějí od života víc.
            </p>
            <p className="text-xs text-[var(--muted)] font-light leading-relaxed">
              Jeden společný hovor může ukázat tvoje další možnosti.
            </p>
          </div>
        </div>
      </div>

      {/* CTA tlačítka — obě verze */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 py-8 px-6 bg-white">
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

    </section>
  );
}
