const testimonials = [
  {
    text: "Velké díky Jarce za správné nasměrování, za úlevu ve všech oblastech mého života. Během pár minut vyřeší vaše problémy. Velmi doporučuji všem, kdo chce svůj život obohatit o hojnost ve všech oblastech.",
    author: "Klientka",
  },
  {
    text: "Seberozvoji se věnuji už několik let, ale teprve v podání Jarušky se v tom cítím konečně dobře, přirozeně a svobodně. Miluju ji pro její přímost, jasnost a rychlou úlevu, kterou dokáže přinést.",
    author: "Klientka",
  },
  {
    text: "Jaruška má obrovský dar pomáhat lidem. Neumím spočítat kolikrát mě a celé mé rodině pomohla, ukázala cestu a přivedla nás tam, kde nám je lépe — do lásky a pravdy.",
    author: "Klientka",
  },
];

export default function Testimonials() {
  return (
    <section id="reference" className="py-28 bg-white border-t border-[var(--gold-light)]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-[var(--gold)]" />
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">Reference</p>
        </div>

        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--foreground)] leading-tight mb-16">
          Co říkají
          <br />
          <span className="italic text-[var(--gold)]">klientky</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="border-l-2 border-[var(--gold)] pl-8 py-2">
              <p className="font-heading text-3xl text-[var(--gold-light)] mb-4 leading-none">"</p>
              <p className="text-[var(--foreground)] font-light leading-relaxed mb-6 italic">
                {t.text}
              </p>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)]">{t.author}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
