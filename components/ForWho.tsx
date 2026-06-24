import BrushStroke from "./BrushStroke";

const signs = [
  "Ráno vstaneš a už dopředu víš, že dneska zase budeš hlavně fungovat.",
  "Máš za sebou kus života. Ale někde uvnitř cítíš, že tohle ještě není konečná.",
  "Celý život jsi byla spolehlivá. A teď zjišťuješ, že spolehlivost bez radosti je drahý sport.",
  "Čekáš na správný čas. Jenže život ti mezitím ujíždí autobusem.",
  "Víš, že máš na víc. Jen nevíš, kde začít, aby ses zase neztratila v dalším „musím“.",
  "Už nechceš být silná za cenu toho, že sama sebe potkáš až večer v koupelně.",
];

export default function ForWho() {
  return (
    <section id="pro-koho" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.5em] uppercase text-[var(--gold)] font-medium mb-6">
            Je to pro tebe?
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--foreground)] uppercase tracking-tight leading-tight mb-8">
            Poznáváš se
            <br />
            <span className="italic normal-case text-[var(--gold)]">v tomhle?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-0 mb-20">
          {signs.map((sign, i) => (
            <div key={i} className="flex gap-6 p-8 border border-[var(--gold-light)] -mt-px -ml-px hover:border-[var(--gold)] hover:z-10 relative transition-colors duration-300 group">
              <span className="font-heading text-2xl font-semibold text-[var(--gold-light)] group-hover:text-[var(--gold)] transition-colors shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[var(--foreground)] font-light leading-relaxed self-center">{sign}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <BrushStroke className="font-heading text-lg md:text-xl font-semibold">
            Jestli ses aspoň v jednom poznala — tady začíná tvoje další kapitola.
          </BrushStroke>
        </div>

      </div>
    </section>
  );
}
