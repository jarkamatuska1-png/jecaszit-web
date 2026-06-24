import Image from "next/image";

const WA = "https://wa.me/420774420251?text=Ahoj+Jarko%2C+ráda+bych+si+s+tebou+popovídala.";

export default function Hero() {
  return (
    <section className="bg-white pt-16">

      {/* Hero banner — plná šířka */}
      <div className="w-full relative">
        <Image
          src="/images/jarka-mockup.jpg"
          alt="Jarka Matušková — Je čas žít"
          width={1920}
          height={720}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* CTA tlačítka pod bannerem */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 py-10 px-6 bg-white">
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
