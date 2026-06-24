import Image from "next/image";

const WA = "https://wa.me/420774420251?text=Ahoj+Jarko%2C+ráda+bych+si+s+tebou+popovídala.";

export default function Hero() {
  return (
    <section className="bg-white pt-16">

      {/* DESKTOP */}
      <div className="hidden md:grid md:grid-cols-2 min-h-[calc(100vh-4rem)]">

        {/* Text vlevo */}
        <div className="flex flex-col justify-center px-12 lg:px-20 py-20">
          <p className="text-xs tracking-[0.45em] uppercase font-medium mb-4" style={{ color: "var(--gold)" }}>
            — Jarka Matušková —
          </p>
          <h1 className="leading-none mb-6">
            <span className="block font-sans font-black text-6xl lg:text-7xl uppercase tracking-tight text-[var(--foreground)]">
              Je čas
            </span>
            <span className="block text-6xl lg:text-7xl" style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}>
              Žít
            </span>
          </h1>
          <p className="text-lg font-medium mb-3" style={{ color: "var(--gold)" }}>
            Pro velké holky, které chtějí od života víc.
          </p>
          <p className="text-[var(--muted)] font-light leading-relaxed mb-10 max-w-xs">
            Jeden společný hovor může ukázat tvoje další možnosti.
          </p>
          <div className="flex flex-col gap-3 items-start">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 text-white text-xs tracking-[0.3em] uppercase font-bold hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(to right, #9a7020, #e8c96e, #f5e07e, #d4af5a, #9a7020)" }}
            >
              Chci si popovídat
            </a>
            <a
              href="#pro-koho"
              className="px-10 py-4 border-2 border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-bold hover:bg-[var(--gold)] hover:text-white transition-all duration-300"
            >
              Je to pro mě?
            </a>
          </div>
        </div>

        {/* Fotka vpravo */}
        <div className="relative">
          <Image
            src="/images/jarka-o-mne.jpg"
            alt="Jarka Matušková"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, white 0%, transparent 12%)" }} />
        </div>

      </div>

      {/* MOBIL */}
      <div className="md:hidden">

        {/* Fotka */}
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <Image
            src="/images/jarka-o-mne.jpg"
            alt="Jarka Matušková"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, white 5%, transparent 50%)" }} />
        </div>

        {/* Text */}
        <div className="px-6 pb-10 -mt-8 relative">
          <p className="text-xs tracking-[0.4em] uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>
            — Jarka Matušková —
          </p>
          <h1 className="leading-none mb-4">
            <span className="block font-sans font-black text-5xl uppercase tracking-tight text-[var(--foreground)]">
              Je čas
            </span>
            <span className="block text-5xl" style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}>
              Žít
            </span>
          </h1>
          <p className="text-base font-medium mb-2" style={{ color: "var(--gold)" }}>
            Pro velké holky, které chtějí od života víc.
          </p>
          <p className="text-[var(--muted)] font-light leading-relaxed mb-8 text-sm">
            Jeden společný hovor může ukázat tvoje další možnosti.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-white text-xs tracking-[0.3em] uppercase font-bold text-center hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(to right, #9a7020, #e8c96e, #f5e07e, #d4af5a, #9a7020)" }}
            >
              Chci si popovídat
            </a>
            <a
              href="#pro-koho"
              className="px-8 py-4 border-2 border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-bold text-center hover:bg-[var(--gold)] hover:text-white transition-all duration-300"
            >
              Je to pro mě?
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
