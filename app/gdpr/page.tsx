export const metadata = {
  title: "Ochrana osobních údajů | Jarka Matušková",
  description: "Informace o zpracování osobních údajů na webu jecaszit.cz",
};

export default function GDPRPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-6">

        <p className="text-xs tracking-[0.5em] uppercase text-[var(--muted)] font-medium mb-6">
          Právní informace
        </p>
        <h1 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-[var(--foreground)] mb-12">
          Ochrana osobních údajů
        </h1>

        <div className="space-y-8 text-[var(--foreground)] font-light leading-relaxed">

          <section>
            <h2 className="font-sans font-bold text-sm tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Správce osobních údajů</h2>
            <p>Jaroslava Matušková<br />
            E-mail: jarka@jecaszit.cz<br />
            Tel: +420 774 420 251</p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-sm tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Jaká data zpracovávám</h2>
            <p>Tento web nezpracovává žádná osobní data automaticky. Pokud mi napíšete e-mail nebo zprávu přes WhatsApp, zpracovávám pouze informace, které mi sami poskytnete (jméno, e-mail, telefonní číslo, obsah zprávy).</p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-sm tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Účel zpracování</h2>
            <p>Vaše údaje používám výhradně pro odpověď na váš dotaz a případnou spolupráci. Nepředávám je třetím stranám, nevyužívám je k marketingu bez vašeho souhlasu.</p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-sm tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Jak dlouho data uchovávám</h2>
            <p>Pouze po dobu nezbytně nutnou — zpravidla po dobu trvání spolupráce a maximálně 3 roky poté.</p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-sm tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Vaše práva</h2>
            <p>Máte právo na přístup ke svým údajům, jejich opravu, výmaz nebo omezení zpracování. Stačí mi napsat na <a href="mailto:jarka@jecaszit.cz" className="text-[var(--gold)] hover:underline">jarka@jecaszit.cz</a>.</p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-sm tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Cookies</h2>
            <p>Web nepoužívá analytické ani marketingové cookies. Používá pouze technické cookies nezbytné pro provoz stránky.</p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-sm tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Dozorový orgán</h2>
            <p>Máte právo podat stížnost u Úřadu pro ochranu osobních údajů (<a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline">uoou.cz</a>).</p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-[var(--gold-light)]">
          <a href="/" className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] hover:opacity-70 transition-opacity">
            ← Zpět na web
          </a>
        </div>

      </div>
    </main>
  );
}
