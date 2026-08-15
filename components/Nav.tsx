"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

// Hlavička má tři položky. Nic víc.
// „Cesta s Barnym" nemá vlastní záložku — je vevnitř každého dílu.
const links = [
  { href: "/", label: "Kdo je Helena" },
  { href: "/je-cas-zit", label: "Život s Helenou" },
  { href: "/o-autorce", label: "O autorce" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[var(--pozadi)] shadow-sm" : "bg-[var(--pozadi)]/95"}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="font-sans text-sm font-black tracking-[0.3em] uppercase shrink-0"
            style={{
              background: "var(--gold)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Je čas žít
          </Link>

          {/* Desktop linky */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs tracking-[0.14em] lg:tracking-[0.2em] uppercase font-medium text-[var(--foreground)] hover:text-[var(--gold)] transition-colors whitespace-nowrap"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Hamburger — jen mobil */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <span
              className="block h-[2px] w-full transition-all duration-300 origin-center"
              style={{ background: "var(--gold)", transform: open ? "translateY(7px) rotate(45deg)" : "none" }}
            />
            <span
              className="block h-[2px] w-full transition-all duration-300"
              style={{ background: "var(--gold)", opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-[2px] w-full transition-all duration-300 origin-center"
              style={{ background: "var(--gold)", transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }}
            />
          </button>

        </div>
      </nav>

      {/* Mobilní menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--pozadi)] flex flex-col items-center justify-center gap-10 px-8 text-center transition-all duration-300 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={close}
            className="text-xl tracking-[0.2em] uppercase font-black text-[var(--foreground)] hover:text-[var(--gold)] transition-colors leading-relaxed"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
