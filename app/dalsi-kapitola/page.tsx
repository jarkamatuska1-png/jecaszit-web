import Image from "next/image";

export const metadata = {
  title: "Tvoje další kapitola | Jarka Matušková",
  description: "Postav se znovu na své nohy. Ne sama. Se zázemím, které tě podpoří.",
  robots: "noindex",
};

const WA = "https://wa.me/420774420251?text=Ahoj+Jarko%2C+přišla+jsem+z+reklamy+a+ráda+bych+si+s+tebou+popovídala.";

const cards = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9" strokeLinecap="round"/>
      </svg>
    ),
    title: "Skvělé pracovní zázemí",
    text: "Prostor, ve kterém najdeš veškeré informace a také mentální podporu, možnost se ukotvit ve své víře v sebe a svůj úspěch. Zázemí, které najdeš jen v podpoře se mnou.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 3c-1.5 3-5 4-7 4 0 6 2.5 10 7 13 4.5-3 7-7 7-13-2 0-5.5-1-7-4z" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Moji podporu",
    text: "Nebudu tě vést za ručičku ani tě nechávat tápit. Dostaneš mou přímou, lidskou a laskavou drsnou podporu. Zkušenost ženy, která ví, jaké to je začínat znovu.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l3 3" strokeLinecap="round"/>
      </svg>
    ),
    title: "Jasnost a směr",
    text: "Jeden hovor ti může ukázat víc, než roky přemýšlení v kruhu. Podíváme se kde jsi, co chceš a co je pro tebe skutečně možné.",
  },
];

const proKoho = [
  "Pro ženu, která už něco dokázala, ale nechce dál žít v cizím systému.",
  "Pro ženu, která chce vlastní směr, vlastní peníze a větší svobodu.",
  "Pro ženu, která už nechce čekat, až jí někdo dovolí chtít víc.",
];

export default function LandingPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Minimální hlavička */}
      <header className="px-6 py-5 border-b border-[var(--gold-light)]">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a
            href="/"
            className="font-sans text-sm font-black tracking-[0.3em] uppercase"
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "1.25rem",
              background: "linear-gradient(to right, #9a7020, #e8c96e, #f5e07e, #d4af5a, #9a7020)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Je čas žít
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block px-6 py-3 text-white text-xs tracking-[0.2em] uppercase font-bold hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(to right, #9a7020, #e8c96e, #f5e07e, #d4af5a, #9a7020)" }}
          >
            Domluvit hovor
          </a>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-xs tracking-[0.4em] uppercase font-medium mb-5" style={{ color: "var(--gold)" }}>
              Je čas žít
            </p>
            <h1 className="font-sans font-black text-4xl md:text-5xl tracking-tight text-[var(--foreground)] leading-tight mb-4">
              Postav se znovu<br />na své nohy.
            </h1>
            <p className="text-2xl md:text-3xl mb-8 leading-snug" style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}>
              Ne sama. Se zázemím,<br />které tě podpoří.
            </p>
            <p className="text-[var(--muted)] font-light leading-relaxed mb-8 max-w-md">
              Možná už víš, že nechceš další roky jen fungovat pro cizí systém. Chceš vlastní jistotu. Vlastní směr. Vlastní peníze. A také místo, kde můžeš růst s klidem, úrovní a podporou. Právě pro tebe vznikla tahle nová možnost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-white text-xs tracking-[0.2em] uppercase font-bold hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(to right, #9a7020, #e8c96e, #f5e07e, #d4af5a, #9a7020)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.065-1.112l-.291-.174-3.018.897.897-3.018-.174-.291A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.406-5.845c-.242-.121-1.432-.707-1.654-.787-.222-.08-.384-.121-.545.121-.162.242-.626.787-.768.949-.141.162-.283.182-.525.06-.242-.121-1.022-.376-1.947-1.197-.719-.641-1.204-1.432-1.346-1.674-.141-.242-.015-.373.106-.494.109-.109.242-.283.363-.424.121-.141.162-.242.242-.404.08-.162.04-.303-.02-.424-.06-.121-.545-1.315-.747-1.8-.196-.472-.397-.408-.545-.415h-.464c-.162 0-.424.06-.646.303-.222.242-.848.828-.848 2.021 0 1.193.868 2.346.989 2.508.121.162 1.71 2.609 4.144 3.659.579.25 1.031.399 1.383.511.581.185 1.11.159 1.528.096.466-.069 1.432-.585 1.633-1.15.202-.564.202-1.048.141-1.15-.06-.1-.222-.16-.464-.282z"/></svg>
                Chci si s Jarkou popovídat
              </a>
              <a href="#pro-koho" className="text-sm font-medium text-[var(--gold)] hover:opacity-70 transition-opacity self-center">
                Zjistit svou další možnost →
              </a>
            </div>
          </div>

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

        </div>
      </div>

      {/* Co u mě můžeš získat */}
      <div className="bg-[#faf8f4] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs tracking-[0.5em] uppercase text-[var(--muted)] font-medium mb-3">Co u mě můžeš získat</p>
          <div
            className="text-center text-2xl mb-12"
            style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
          >
            &ldquo;
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, i) => (
              <div key={i} className="bg-white p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-full border border-[var(--gold-light)]" style={{ color: "var(--gold)" }}>
                  {card.icon}
                </div>
                <h3 className="font-sans font-black text-sm uppercase tracking-wide text-[var(--foreground)] mb-4">
                  {card.title}
                </h3>
                <p className="text-[var(--muted)] font-light leading-relaxed text-sm">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pro koho */}
      <div id="pro-koho" className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="w-full aspect-square relative overflow-hidden">
              <Image
                src="/images/jarka-o-mne.jpg"
                alt="Jarka Matušková"
                fill
                className="object-cover object-top"
              />
            </div>
            <p
              className="absolute bottom-4 left-4 text-2xl text-white"
              style={{ fontFamily: "var(--font-script)", textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
            >
              Je čas žít
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.5em] uppercase text-[var(--muted)] font-medium mb-6">Pro koho je tahle možnost</p>
            <div className="space-y-5">
              {proKoho.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center" style={{ background: "linear-gradient(to right, #9a7020, #d4af5a)" }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[var(--foreground)] font-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Reference */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-center text-xs tracking-[0.5em] uppercase text-[var(--muted)] font-medium mb-12">Co říkají ženy</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { text: "Bylo to úplně obyčejné povídání, a přitom mi přineslo velmi silná uvědomění.", author: "Magda" },
            { text: "Když se ocitnu v nejistotě a nevím, jak dál, Jarka mi pomůže znovu vidět cestu. Moje situace se pak velmi rychle začne měnit.", author: "Veronika" },
            { text: "Je skvělé mít Jarku v zádech. Život je i ve složitých situacích mnohem jednodušší.", author: "Alex" },
          ].map((t, i) => (
            <div key={i} className="flex flex-col">
              <p className="text-4xl mb-4 leading-none" style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}>
                &ldquo;
              </p>
              <p className="text-[var(--foreground)] font-light leading-relaxed flex-1 mb-6 italic">{t.text}</p>
              <p className="text-xl" style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}>{t.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Spodní CTA */}
      <div className="bg-[#faf8f4] py-16">
        <div className="max-w-3xl mx-auto px-6 md:flex items-center justify-between gap-12">
          <div className="mb-8 md:mb-0">
            <h2 className="font-sans font-black text-3xl md:text-4xl text-[var(--foreground)] leading-tight mb-2">
              Velký holky chtějí od života víc.
            </h2>
            <p className="text-2xl" style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}>
              Mnohem víc.
            </p>
            <p className="text-[var(--muted)] font-light mt-4 leading-relaxed max-w-sm">
              Jestli cítíš, že je čas postavit se znovu na své nohy a otevřít novou kapitolu s oporou a mou podporou, pojďme si promluvit.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-white text-xs tracking-[0.2em] uppercase font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
              style={{ background: "linear-gradient(to right, #9a7020, #e8c96e, #f5e07e, #d4af5a, #9a7020)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.065-1.112l-.291-.174-3.018.897.897-3.018-.174-.291A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.406-5.845c-.242-.121-1.432-.707-1.654-.787-.222-.08-.384-.121-.545.121-.162.242-.626.787-.768.949-.141.162-.283.182-.525.06-.242-.121-1.022-.376-1.947-1.197-.719-.641-1.204-1.432-1.346-1.674-.141-.242-.015-.373.106-.494.109-.109.242-.283.363-.424.121-.141.162-.242.242-.404.08-.162.04-.303-.02-.424-.06-.121-.545-1.315-.747-1.8-.196-.472-.397-.408-.545-.415h-.464c-.162 0-.424.06-.646.303-.222.242-.848.828-.848 2.021 0 1.193.868 2.346.989 2.508.121.162 1.71 2.609 4.144 3.659.579.25 1.031.399 1.383.511.581.185 1.11.159 1.528.096.466-.069 1.432-.585 1.633-1.15.202-.564.202-1.048.141-1.15-.06-.1-.222-.16-.464-.282z"/></svg>
              Domluvit osobní hovor
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 border-t border-[var(--gold-light)]">
        <p className="text-xs text-[var(--muted)] tracking-widest">
          Je čas žít · osobní hovor s Jarkou · <a href="/" className="hover:text-[var(--gold)] transition-colors">jecaszit.cz</a>
        </p>
      </div>

    </main>
  );
}
