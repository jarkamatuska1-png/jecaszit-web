export default function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--gold-light)] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-sans font-black text-sm tracking-[0.2em] uppercase text-[var(--gold)]">
          Je čas žít
        </p>
        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Jarka Matušková. Všechna práva vyhrazena.
        </p>
        <div className="flex items-center gap-6">
          <a href="mailto:jarka@jecaszit.cz" className="text-xs text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
            jarka@jecaszit.cz
          </a>
          <a href="/gdpr" className="text-xs text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
            Ochrana osobních údajů
          </a>
        </div>
      </div>
    </footer>
  );
}
