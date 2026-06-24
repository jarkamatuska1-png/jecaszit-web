import BrushStroke from "./BrushStroke";

const WA = "https://wa.me/420774420251?text=Ahoj+Jarko%2C+ráda+bych+si+s+tebou+popovídala.";

const offers = [
  {
    number: "01",
    title: "Jeden společný hovor",
    duration: "30 minut / Zoom",
    desc: "Pro chvíli, kdy cítíš, že nechceš další roky stát jen na tom, co ti kdo dovolí, nabídne nebo zaplatí.\n\nMožná už nechceš být závislá jen na jedné výplatě, jedné roli nebo jednom systému.\n\nChceš si začít budovat vlastní prostor, větší stabilitu a zázemí, které stojí víc na tvém rozhodnutí.\n\nBez tlaku. Bez přetvářky. Bez hraní si na někoho, kým nejsi.\n\nZ hovoru odejdeš s jasnější představou, jak můžeš jít dál — a kde začít tvořit něco svého.",
  },
];

export default function Services() {
  return (
    <section id="spoluprace" className="py-28 bg-white border-t-2 border-[var(--gold-light)]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-xs tracking-[0.5em] uppercase text-[var(--muted)] font-medium mb-6">
              Spolupráce
            </p>
            <h2 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tight text-[var(--foreground)] leading-tight">
              Jak budeme
            </h2>
            <p
              className="text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
            >
              pracovat spolu
            </p>
          </div>
          <p className="text-[var(--muted)] font-light leading-relaxed max-w-xs">
            Žádné kurzy do šuplíku.
            Jen ty, já a pravda na stůl.
          </p>
        </div>

        <div className="max-w-2xl">
          {offers.map((o, i) => (
            <div
              key={o.number}
              className="p-10 border border-[var(--gold-light)] hover:border-[var(--gold)] transition-colors duration-300 group"
            >
              <div className="mb-6">
                <BrushStroke className="font-sans text-sm font-bold">
                  {o.number}
                </BrushStroke>
              </div>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{o.duration}</p>
              <h3 className="font-sans font-black text-lg uppercase tracking-tight text-[var(--foreground)] mb-4">{o.title}</h3>
              <div className="text-[var(--muted)] font-light leading-relaxed mb-8 space-y-3">
                {o.desc.split("\n\n").map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[var(--gold)] border-b-2 border-[var(--gold)] pb-0.5 hover:text-[var(--gold-dark)] hover:border-[var(--gold-dark)] transition-colors"
              >
                Mám zájem →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-[var(--muted)] font-light leading-relaxed">
            Žádné kurzy do šuplíku. Žádné čekání na povolení.
            <br />
            Jen jeden společný hovor o tom, jak si můžeš začít budovat vlastní zázemí, stabilitu a novou kapitolu života.
          </p>
          <div className="pt-4">
            <BrushStroke className="font-sans font-bold text-sm md:text-base">
              Velký holky už nečekají, až jim někdo postaví zázemí. Začnou si ho tvořit samy.
            </BrushStroke>
          </div>
        </div>

      </div>
    </section>
  );
}
