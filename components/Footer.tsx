export default function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--gold-light)] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-sm font-semibold tracking-[0.2em] uppercase text-[var(--gold)]">
          Je čas žít
        </p>
        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Jarka Matušková. Všechna práva vyhrazena.
        </p>
        <a href="mailto:matuskova@freli.cz" className="text-xs text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
          matuskova@freli.cz
        </a>
      </div>
    </footer>
  );
}
