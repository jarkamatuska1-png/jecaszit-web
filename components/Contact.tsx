import BrushStroke from "./BrushStroke";

const WA = "https://wa.me/420774420251?text=Ahoj+Jarko%2C+ráda+bych+si+s+tebou+popovídala.";

export default function Contact() {
  return (
    <section id="kontakt" className="py-28 bg-white border-t-2 border-[var(--gold-light)]">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <p className="text-xs tracking-[0.5em] uppercase text-[var(--gold)] font-medium mb-8">
          Kontakt
        </p>

        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold uppercase tracking-tight text-[var(--foreground)] leading-tight mb-4">
          Přestaň čekat.
        </h2>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold italic text-[var(--gold)] leading-tight mb-10">
          Napiš mi.
        </h2>

        <p className="text-[var(--muted)] font-light leading-relaxed text-lg max-w-xl mx-auto mb-6">
          Jedna zpráva. Žádný závazek.
          Jen popovídáme — a uvidíme jestli si rozumíme.
        </p>

        <div className="mb-12">
          <BrushStroke className="font-heading text-sm font-medium italic">
            Protože život ti ujíždí autobusem každý den, co čekáš.
          </BrushStroke>
        </div>

        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-5 bg-[var(--gold)] text-white text-xs tracking-[0.35em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300 mb-16"
        >
          Napsat Jarce na WhatsApp →
        </a>

        <div className="grid md:grid-cols-3 gap-8 border-t border-[var(--gold-light)] pt-12">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] font-medium mb-3">Email</p>
            <a href="mailto:matuskova@freli.cz" className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors font-light">
              matuskova@freli.cz
            </a>
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] font-medium mb-3">Telefon</p>
            <a href="tel:+420774420251" className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors font-light">
              +420 774 420 251
            </a>
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] font-medium mb-3">Sleduj mě</p>
            <div className="flex justify-center gap-5">
              {[
                { label: "Instagram", href: "https://www.instagram.com/j_matuskova/" },
                { label: "Facebook", href: "https://www.facebook.com/jarka.matuskova" },
                { label: "YouTube", href: "https://www.youtube.com/channel/UCMi-vMNkT_TkU1LBcmLRqzw?view_as=subscriber" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
