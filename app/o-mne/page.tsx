import Image from "next/image";
import BrushStroke from "@/components/BrushStroke";

export const metadata = {
  title: "O mně | Jarka Matušková",
  description: "Vím, jaké to je začínat znovu. Ne jednou — několikrát. Příběh Jarky Matuškovéé.",
};

export default function AboutPage() {
  return (
    <main className="bg-white pt-24 pb-20">

      {/* Hero sekce */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Fotka */}
          <div className="relative md:sticky md:top-24">
            <div className="w-full aspect-[3/4] relative overflow-hidden">
              <Image
                src="/images/jarka-hlavni.jpg"
                alt="Jarka Matušková"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-[var(--gold)]" />
          </div>

          {/* Nadpis + začátek */}
          <div className="md:pt-8">
            <p className="text-xs tracking-[0.5em] uppercase text-[var(--muted)] font-medium mb-6">
              O mně
            </p>
            <h1 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tight text-[var(--foreground)] leading-tight mb-8">
              Vím, jaké to je<br />začínat znovu
            </h1>

            <div className="space-y-5 text-[var(--foreground)] font-light leading-relaxed">
              <p>Nemluvím o změně života proto, že to hezky zní.</p>
              <p className="font-medium">Mluvím o ní proto, že jsem ji několikrát musela žít.</p>
              <p>Podnikám od roku 2001.</p>
              <p>
                Zažila jsem období, kdy mi zkrachoval obchod.<br />
                Dluhy.<br />
                Ponížení.<br />
                Ten zvláštní pocit, kdy se ráno probudíš a realita ti sedí na hrudníku jako betonový kvádr.
              </p>
              <p>Pak jsem vybudovala svůj salón.</p>
              <p>
                A najednou přišla akutní operace páteře.<br />
                Měsíc v nemocnici.<br />
                A moje podnikání?
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Příběh pokračuje — plná šířka */}
      <div className="max-w-2xl mx-auto px-6 space-y-6 text-[var(--foreground)] font-light leading-relaxed">

        <div className="py-8 text-center">
          <BrushStroke block className="font-sans font-black text-2xl md:text-3xl">
            Nula. Neexistovalo.
          </BrushStroke>
        </div>

        <p>Prodala jsem ho za 6 000 Kč.</p>

        <p>A víš co? V té době to pro mě bylo jako šest milionů.</p>

        <p className="text-[var(--muted)]">
          Ne kvůli částce.<br />
          Ale kvůli tomu, že jsem potřebovala přežít další krok.
        </p>

        <p>
          Pak jsem pomáhala lidem terapeuticky.<br />
          Klientela rostla.<br />
          Důvěra rostla.<br />
          A já jsem věřila.
        </p>

        <p className="font-medium">Možná až moc.</p>

        <p className="text-[var(--muted)]">
          Naučila jsem dvě ženy to, co jsem sama roky tvořila a žila.<br />
          A ony mi odvedly klienty s příběhem, že žiju z jejich energie.
        </p>

        <p>Dnes se tomu směju.</p>
        <p className="font-medium">Tenkrát jsem se nesmála vůbec.</p>

        <p className="text-[var(--muted)]">
          Tenkrát jsem ještě věřila, že když někdo mluví o světle, nemůže jednat ze tmy.
        </p>

        <p
          className="text-xl py-2"
          style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
        >
          Život má někdy smysl pro humor jak řezník s tupým nožem.
        </p>

        <p className="text-[var(--muted)]">
          Nečekala jsem podlost.<br />
          Nečekala jsem zákeřnost.<br />
          Nečekala jsem, že se důvěra může takhle otočit proti mně.
        </p>

        <p className="font-medium">A spadla jsem. Hodně hluboko.</p>

        <p className="text-[var(--muted)]">
          Půl roku jsem se z toho sbírala.<br />
          Půl roku jsem znovu hledala půdu pod nohama.<br />
          Půl roku jsem dávala dohromady víru, sílu a schopnost znovu tvořit.
        </p>

        <p>A pak jsem začala znovu.</p>

        <p className="text-[var(--muted)]">
          Ne proto, že bych byla tak strašně silná.<br />
          Ale proto, že někde uvnitř mě pořád bylo něco, co odmítlo skončit.
        </p>

        <div className="py-6">
          <BrushStroke block className="font-sans font-bold text-sm md:text-base">
            Proto dnes nemluvím k ženám jako někdo, kdo jim chce prodat hezkou představu.
          </BrushStroke>
        </div>

        <p className="text-[var(--muted)]">
          Mluvím k ženám, které už taky něco ustály.<br />
          Které vědí, jaké to je držet se, když se všechno sype.<br />
          Které už nechtějí další roky jen přežívat ve slušné kleci.<br />
          Které cítí, že v nich je víc.
        </p>

        <p
          className="text-2xl py-2"
          style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
        >
          Mnohem víc.
        </p>

        <p>A já vím, že nový život se dá postavit.</p>

        <p className="text-[var(--muted)]">
          Ne na iluzi.<br />
          Ne na přetvářce.<br />
          Ne na tom, že budeš hodná a počkáš, až ti někdo dovolí chtít víc.
        </p>

        <p className="font-medium">
          Ale na pravdě.<br />
          Na rozhodnutí.<br />
          Na odvaze zvednout hlavu.<br />
          A na tom, že si konečně začneš tvořit vlastní jistotu.
        </p>

        <p className="text-[var(--muted)]">
          V penězích.<br />
          V úctě k sobě.<br />
          V úspěchu, který nebude závislý na tom, kdo ti zrovna drží nebo nedrží dveře.
        </p>

        <div className="py-8">
          <BrushStroke block className="font-sans font-black text-sm md:text-base">
            Velký holky nechtějí jen přežít pád. Velký holky chtějí vstát tak, aby se jim otevřel úplně jiný život.
          </BrushStroke>
        </div>

        <div className="pt-4 text-center">
          <p
            className="text-3xl mb-8"
            style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
          >
            Jarka Matušková
          </p>
          <a
            href="https://wa.me/420774420251?text=Ahoj+Jarko%2C+ráda+bych+si+s+tebou+popovídala."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-white text-xs tracking-[0.3em] uppercase font-bold hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(to right, #9a7020, #e8c96e, #f5e07e, #d4af5a, #9a7020)" }}
          >
            Chci si popovídat →
          </a>
        </div>

        <div className="pt-10 border-t border-[var(--gold-light)]">
          <a href="/" className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
            ← Zpět na web
          </a>
        </div>

      </div>
    </main>
  );
}
