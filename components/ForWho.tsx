const signs = [
  "Máš pocit, že celý život hraješ roli, kterou jsi nikdy nepsal/a.",
  "Ráno vstáváš a říkáš si: to je všechno?",
  "Zvládáš všechno — ale za cenu sebe sama.",
  "Víš, že máš víc. Jen nevíš jak na to.",
  "Čekáš na správný čas. A ten správný čas nikdy nepřijde.",
  "Unavuje tě být silná pro všechny ostatní.",
];

export default function ForWho() {
  return (
    <section id="pro-koho" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[var(--gold)]" />
              <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">Je to pro tebe?</p>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--foreground)] leading-tight mb-6">
              Poznáváš se
              <br />
              <span className="italic text-[var(--gold)]">v tomhle?</span>
            </h2>
            <p className="text-[var(--muted)] font-light leading-relaxed text-lg">
              Nejsi rozbitá. Jen jsi dlouho jela podle manuálu,
              který jsi nikdy nepsala.
              <br /><br />
              <strong className="text-[var(--foreground)] font-medium">A teď víš, že je čas na jiný příběh.</strong>
            </p>
          </div>

          <div className="space-y-0">
            {signs.map((sign, i) => (
              <div key={i} className="flex gap-5 py-5 border-b border-[var(--gold-light)] last:border-0">
                <span className="font-heading text-lg font-semibold text-[var(--gold)] shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[var(--foreground)] font-light leading-relaxed">{sign}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-[var(--gold-light)] pt-12">
          <p className="font-heading text-2xl md:text-3xl font-semibold text-[var(--foreground)] text-center leading-relaxed">
            Jestli ses alespoň v jednom poznala —
            <br />
            <span className="italic text-[var(--gold)]">tady začíná tvoje další kapitola.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
