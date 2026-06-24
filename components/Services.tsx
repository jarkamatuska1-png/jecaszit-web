const WA = "https://wa.me/420774420251?text=Ahoj+Jarko%2C+ráda+bych+si+s+tebou+popovídala.";

const offers = [
  {
    number: "01",
    title: "Rychlé vyladění",
    duration: "30 minut",
    desc: "Píchne tě něco konkrétního. Zoom sezení — rychlá úleva tam, kde to nejvíc bolí. Bez omáčky, rovnou k věci.",
  },
  {
    number: "02",
    title: "Koučink JIH®",
    duration: "60 minut",
    desc: "Kompletní nastavení všech oblastí života. Online, přes Zoom nebo Messenger. Jedno sezení udělá víc než rok přemýšlení.",
  },
  {
    number: "03",
    title: "6týdenní mentoring",
    duration: "6 týdnů",
    desc: "Pro tebe, pokud chceš změnu opravdovou. Každý týden jedno setkání — nový pohled na sebe, práci, vztahy. Trvalá změna.",
  },
];

export default function Services() {
  return (
    <section id="spoluprace" className="py-28 bg-white border-t border-[var(--gold-light)]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-[var(--gold)]" />
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">Spolupráce</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--foreground)] leading-tight">
            Jak budeme
            <br />
            <span className="italic text-[var(--gold)]">pracovat spolu</span>
          </h2>
          <p className="text-[var(--muted)] font-light leading-relaxed">
            Žádné kurzy do šuplíku. Žádné teorie bez praxe.
            Jen ty, já a pravda na stůl. Vyber si co ti sedí.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((o) => (
            <div key={o.number} className="border border-[var(--gold-light)] p-10 hover:border-[var(--gold)] transition-colors duration-300 group">
              <p className="font-heading text-5xl font-semibold text-[var(--gold-light)] mb-6 group-hover:text-[var(--gold)] transition-colors">
                {o.number}
              </p>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{o.duration}</p>
              <h3 className="font-heading text-xl font-semibold text-[var(--foreground)] mb-4">{o.title}</h3>
              <p className="text-[var(--muted)] font-light leading-relaxed mb-8">{o.desc}</p>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] border-b border-[var(--gold)] pb-0.5 hover:text-[var(--gold-dark)] hover:border-[var(--gold-dark)] transition-colors"
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
