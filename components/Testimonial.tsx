export default function Testimonial() {
  return (
    <section className="py-20 bg-white border-t-2 border-[var(--gold-light)]">
      <div className="max-w-2xl mx-auto px-6 text-center">

        <p className="text-xs tracking-[0.5em] uppercase text-[var(--muted)] font-medium mb-12">
          Reference
        </p>

        <p
          className="text-4xl md:text-5xl mb-10 leading-tight"
          style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
        >
          &ldquo;
        </p>

        <blockquote className="space-y-4 text-[var(--foreground)] font-light leading-relaxed text-lg mb-10 -mt-6">
          <p>Je skvělé mít Jarku v zádech.</p>
          <p>Život je i ve složitých situacích mnohem jednodušší.</p>
          <p>
            Najednou máš pocit, že věci začínají jít víc na ruku —
            protože se v tom nepereš sama.
          </p>
        </blockquote>

        <p
          className="text-xl"
          style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
        >
          Alex
        </p>

      </div>
    </section>
  );
}
