import BrushStroke from "./BrushStroke";

const WA = "https://wa.me/420774420251?text=Ahoj+Jarko%2C+ráda+bych+si+s+tebou+popovídala.";

const offers = [
  {
    number: "01",
    title: "Rychlé vyladění",
    duration: "30 minut / Zoom",
    desc: "Píchne tě něco konkrétního. Rychlá úleva tam, kde to nejvíc bolí. Bez omáčky, rovnou k věci.",
  },
  {
    number: "02",
    title: "Koučink JIH®",
    duration: "60 minut / Zoom",
    desc: "Kompletní nastavení všech oblastí života online. Jedno sezení udělá víc než rok přemýšlení.",
  },
  {
    number: "03",
    title: "6týdenní mentoring",
    duration: "6 týdnů",
    desc: "Pro tebe, pokud chceš změnu opravdovou. Každý týden jedno setkání. Trvalá změna.",
  },
];

export default function Services() {
  return (
    <section id="spoluprace" className="py-28 bg-white border-t-2 border-[var(--gold-light)]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-xs tracking-[0.5em] uppercase text-[var(--gold)] font-medium mb-6">
              Spolupráce
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold uppercase tracking-tight text-[var(--foreground)] leading-tight">
              Jak budeme
              <br />
              <span className="italic normal-case text-[var(--gold)]">pracovat spolu</span>
            </h2>
          </div>
          <p className="text-[var(--muted)] font-light leading-relaxed max-w-xs">
            Žádné kurzy do šuplíku. Jen ty, já a pravda na stůl.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {offers.map((o, i) => (
            <div key={o.number} className={`p-10 border border-[var(--gold-light)] ${i > 0 ? "-ml-px" : ""} hover:border-[var(--gold)] hover:z-10 relative transition-colors duration-300 group`}>
              <div className="mb-6">
                <BrushStroke className="font-heading text-base font-semibold">
                  {o.number}
                </BrushStroke>
              </div>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{o.duration}</p>
              <h3 className="font-heading text-xl font-semibold uppercase tracking-tight text-[var(--foreground)] mb-4">{o.title}</h3>
              <p className="text-[var(--muted)] font-light leading-relaxed mb-8">{o.desc}</p>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs tracking-[0.25em] uppercase font-medium text-[var(--gold)] border-b-2 border-[var(--gold)] pb-0.5 hover:text-[var(--gold-dark)] hover:border-[var(--gold-dark)] transition-colors"
              >
                Mám zájem →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
