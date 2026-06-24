import BrushStroke from "./BrushStroke";

const signs = [
  "Ráno vstaneš a už dopředu víš, že dneska zase budeš hlavně fungovat.",
  "Máš za sebou kus života. Ale někde uvnitř cítíš, že tohle ještě není konečná.",
  "Celý život jsi byla spolehlivá. A teď zjišťuješ, že spolehlivost bez radosti je drahý sport.",
  "Čekáš na správný čas. Jenže život ti mezitím ujíždí autobusem.",
  "Víš, že máš na víc. Jen nevíš, kde začít, aby ses zase neztratila v dalším „musím".",
  "Už nechceš být silná za cenu toho, že sama sebe potkáš až večer v koupelně.",
];

export default function ForWho() {
  return (
    <section id="pro-koho" className="py-28 bg-white border-t-2 border-[var(--gold-light)]">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.5em] uppercase text-[var(--gold)] font-medium mb-6">
            Je to pro tebe?
          </p>
          <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-[var(--foreground)] leading-tight mb-4">
            Poznáváš se
          </h2>
          <p
            className="text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
          >
            v tomhle?
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {signs.map((sign, i) => (
            <div key={i} className="flex gap-8 items-start group">
              <span
                className="font-sans font-black text-3xl md:text-4xl shrink-0 leading-none mt-1"
                style={{ color: "var(--gold-light)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg md:text-xl text-[var(--foreground)] font-light leading-relaxed pt-1">
                {sign}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <BrushStroke block className="font-sans font-bold text-sm md:text-base">
            Jestli ses aspoň v jednom poznala — tady začíná tvoje další kapitola.
          </BrushStroke>
        </div>

      </div>
    </section>
  );
}
