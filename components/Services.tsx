import BrushStroke from "./BrushStroke";

const WA = "https://wa.me/420774420251?text=Ahoj+Jarko%2C+ráda+bych+si+s+tebou+popovídala.";

export default function Services() {
  return (
    <section id="spoluprace" className="py-28 bg-white border-t-2 border-[var(--gold-light)]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div>
            <p className="text-xs tracking-[0.5em] uppercase text-[var(--muted)] font-medium mb-6">
              Spolupráce
            </p>
            <h2 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tight text-[var(--foreground)] leading-tight mb-2">
              Podíváme se,
            </h2>
            <p
              className="text-3xl md:text-4xl mb-0"
              style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
            >
              co je pro tebe možné
            </p>
          </div>

          <div className="space-y-5 text-[var(--foreground)] font-light leading-relaxed md:pt-16">
            <p>
              Nejdu tě lámat.<br />
              Nejdu tě přesvědčovat.<br />
              A už vůbec ti nejdu prodávat další zázračný návod na život.
            </p>

            <p>Jeden společný hovor.</p>

            <p>
              Podíváme se, jak si můžeš začít tvořit vlastní zázemí,
              stabilitu a prostor pro další kapitolu.
            </p>

            <p>A pak?</p>

            <p className="font-medium text-[var(--foreground)]">Pak se rozhodneš sama.</p>

            <div className="pt-4">
              <BrushStroke className="font-sans font-bold text-sm">
                Protože velký holky nepotřebují tlak. Potřebují vidět, že mají možnosti.
              </BrushStroke>
            </div>

            <div className="pt-6">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 text-white text-xs tracking-[0.3em] uppercase font-bold hover:opacity-90 transition-opacity duration-300"
                style={{ background: "linear-gradient(to right, #9a7020, #e8c96e, #f5e07e, #d4af5a, #9a7020)" }}
              >
                Chci ten hovor →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
