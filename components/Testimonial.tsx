const testimonials = [
  {
    text: [
      "Je skvělé mít Jarku v zádech.",
      "Život je i ve složitých situacích mnohem jednodušší.",
      "Najednou máš pocit, že věci začínají jít víc na ruku — protože se v tom nepereš sama.",
    ],
    author: "Alex",
  },
  {
    text: [
      "Když se ocitnu v nejistotě a nevím, jak dál, Jarka mi pomůže znovu vidět cestu.",
      "Moje situace se pak velmi rychle začne měnit.",
      "Je pro mě jistotou, že na život nejsem sama.",
    ],
    author: "Veronika",
  },
];

export default function Testimonial() {
  return (
    <section className="py-20 bg-white border-t-2 border-[var(--gold-light)]">
      <div className="max-w-5xl mx-auto px-6">

        <p className="text-xs tracking-[0.5em] uppercase text-[var(--muted)] font-medium mb-16 text-center">
          Reference
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col">
              <p
                className="text-4xl mb-6 leading-none"
                style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
              >
                &ldquo;
              </p>
              <blockquote className="space-y-3 text-[var(--foreground)] font-light leading-relaxed flex-1 mb-8">
                {t.text.map((line, j) => <p key={j}>{line}</p>)}
              </blockquote>
              <p
                className="text-xl"
                style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
              >
                {t.author}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
