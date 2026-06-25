import Image from "next/image";

export const metadata = {
  title: "Tvoje další kapitola | Jarka Matušková",
  description: "Po padesátce ti život nekončí. Někdy ti teprve dojde, že ho chceš konečně žít po svém.",
  robots: "noindex",
};

const WA = "https://wa.me/420774420251?text=Ahoj+Jarko%2C+přišla+jsem+z+reklamy+a+ráda+bych+si+s+tebou+popovídala.";

export default function LandingPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Minimální hlavička — jen logo */}
      <header className="px-6 py-5 border-b border-[var(--gold-light)]">
        <div className="max-w-3xl mx-auto">
          <span
            className="font-sans text-sm font-black tracking-[0.3em] uppercase"
            style={{
              background: "linear-gradient(to right, #9a7020, #e8c96e, #f5e07e, #d4af5a, #9a7020)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Je čas žít
          </span>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Hero nadpis */}
        <div className="mb-14">
          <h1 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--foreground)] leading-tight mb-6">
            Po padesátce ti život nekončí.
          </h1>
          <p
            className="text-3xl md:text-4xl leading-snug"
            style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
          >
            Někdy ti teprve dojde, že ho chceš konečně žít po svém.
          </p>
        </div>

        {/* Foto + úvodní text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="w-full aspect-[3/4] relative overflow-hidden">
              <Image
                src="/images/jarka-ja.jpg"
                alt="Jarka Matušková"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-2 border-[var(--gold)]" />
          </div>
          <div className="space-y-5 text-[var(--foreground)] font-light leading-relaxed">
            <p>
              Vybudovala jsi si pozici. Ustála sis ledacos.
            </p>
            <p>
              Jenže už tě nebaví poslouchat řeči o loajalitě, čekat na uznání a dál žít život, který je menší, než cítíš uvnitř sebe.
            </p>
            <p className="font-medium">
              Já vím, jaké to je začínat znovu. Po pádech, dluzích, zradě i chvílích, kdy se všechno sesype.
            </p>
            <p>
              A právě proto vím, že nový směr existuje. Ne pohádka. Skutečný život, ve kterém můžeš znovu postavit jistotu, peníze, úctu k sobě i úspěch.
            </p>
          </div>
        </div>

        {/* Co hovor přinese */}
        <div className="border-l-4 border-[var(--gold)] pl-8 mb-16 space-y-6">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] font-medium">Co se stane na tom hovoru</p>
          {[
            "Podíváme se na to, kde teď jsi — bez hodnocení, bez rad, které ti nikdo nežádal.",
            "Uvidíš možnosti, které jsou konkrétně pro tebe — ne obecný návod, ale tvoje situace.",
            "Rozhodneš se sama. Žádný tlak, žádné přesvědčování.",
          ].map((item, i) => (
            <div key={i} className="flex gap-5 items-start">
              <span
                className="font-sans font-black text-2xl shrink-0 leading-none mt-1"
                style={{ color: "var(--gold-light)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[var(--foreground)] font-light leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* Reference */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { text: "Bylo to úplně obyčejné povídání, a přitom mi přineslo velmi silná uvědomění.", author: "Magda" },
            { text: "Je pro mě jistotou, že na život nejsem sama. Moje situace se pak velmi rychle začne měnit.", author: "Veronika" },
          ].map((t, i) => (
            <div key={i} className="bg-[#faf8f4] p-8">
              <p
                className="text-3xl mb-4 leading-none"
                style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
              >
                &ldquo;
              </p>
              <p className="text-[var(--foreground)] font-light leading-relaxed mb-6 italic">{t.text}</p>
              <p style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }} className="text-xl">
                {t.author}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center py-12 border-t-2 border-b-2 border-[var(--gold-light)] mb-12">
          <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-[var(--foreground)] mb-3">
            Pojď zjistit,
          </h2>
          <p className="text-2xl md:text-3xl mb-8" style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}>
            co by mohlo být tvoje další kapitola.
          </p>
          <p className="text-[var(--muted)] font-light mb-8 max-w-md mx-auto">
            Jedna zpráva. Jeden hovor. Bez závazku.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 text-white text-sm tracking-[0.25em] uppercase font-bold hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(to right, #9a7020, #e8c96e, #f5e07e, #d4af5a, #9a7020)" }}
          >
            Napsat Jarce na WhatsApp →
          </a>
          <p className="text-xs text-[var(--muted)] mt-4 tracking-wide">
            Osobní hovor s Jarkou Matuškovéé · jecaszit.cz
          </p>
        </div>

      </div>
    </main>
  );
}
