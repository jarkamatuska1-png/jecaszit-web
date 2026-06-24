const WA = "https://wa.me/420774420251?text=Ahoj+Jarko%2C+ráda+bych+si+s+tebou+popovídala.";

export default function Contact() {
  return (
    <section id="kontakt" className="py-28 bg-white border-t border-[var(--gold-light)]">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-[var(--gold)]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[var(--gold)]" />
          <div className="h-px w-12 bg-[var(--gold)]" />
        </div>

        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--foreground)] leading-tight mb-6">
          Přestaň čekat.
          <br />
          <span className="italic text-[var(--gold)]">Napiš mi.</span>
        </h2>

        <p className="text-[var(--muted)] font-light leading-relaxed text-lg max-w-xl mx-auto mb-4">
          Jedna zpráva. Žádný závazek.
          Jen popovídáme — a uvidíme jestli si rozumíme.
        </p>

        <p className="font-heading text-sm italic text-[var(--gold)] mb-12">
          Protože život ti ujíždí autobusem každý den, co čekáš.
        </p>

        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-5 bg-[var(--gold)] text-white text-xs tracking-[0.3em] uppercase font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300 mb-16"
        >
          Napsat Jarce na WhatsApp →
        </a>

        <div className="grid md:grid-cols-3 gap-8 border-t border-[var(--gold-light)] pt-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-2">Email</p>
            <a href="mailto:matuskova@freli.cz" className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors font-light">
              matuskova@freli.cz
            </a>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-2">Telefon</p>
            <a href="tel:+420774420251" className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors font-light">
              +420 774 420 251
            </a>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-2">Sleduj mě</p>
            <div className="flex justify-center gap-4">
              {[
                { label: "IG", href: "https://www.instagram.com/j_matuskova/" },
                { label: "FB", href: "https://www.facebook.com/jarka.matuskova" },
                { label: "YT", href: "https://www.youtube.com/channel/UCMi-vMNkT_TkU1LBcmLRqzw?view_as=subscriber" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="text-xs tracking-widest text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
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
