"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#pro-koho", label: "Pro koho" },
  { href: "#spoluprace", label: "Spolupráce" },
  { href: "#kontakt", label: "Kontakt" },
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-white/95"}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            className="font-sans text-sm font-black tracking-[0.3em] uppercase"
            style={{
              background: "linear-gradient(to right, #9a7020, #e8c96e, #f5e07e, #d4af5a, #9a7020)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Je čas žít
          </a>

          {/* Desktop linky */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs tracking-[0.2em] uppercase font-medium text-[var(--foreground)] hover:text-[var(--gold)] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/j_matuskova/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>

          {/* Hamburger — jen mobil */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <span
              className="block h-[2px] w-full transition-all duration-300 origin-center"
              style={{
                background: "var(--gold)",
                transform: open ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-[2px] w-full transition-all duration-300"
              style={{
                background: "var(--gold)",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block h-[2px] w-full transition-all duration-300 origin-center"
              style={{
                background: "var(--gold)",
                transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>

        </div>
      </nav>

      {/* Mobilní menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10 transition-all duration-300 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={close}
            className="text-2xl tracking-[0.3em] uppercase font-black text-[var(--foreground)] hover:text-[var(--gold)] transition-colors"
          >
            {l.label}
          </a>
        ))}

        <a
          href="https://www.instagram.com/j_matuskova/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="text-sm tracking-[0.3em] uppercase font-medium text-[var(--muted)] hover:text-[var(--gold)] transition-colors flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
          </svg>
          Instagram
        </a>

        <a
          href="https://wa.me/420774420251?text=Ahoj+Jarko%2C+ráda+bych+si+s+tebou+popovídala."
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="mt-4 inline-block px-10 py-4 text-white text-xs tracking-[0.3em] uppercase font-bold"
          style={{ background: "linear-gradient(to right, #9a7020, #e8c96e, #f5e07e, #d4af5a, #9a7020)" }}
        >
          Chci si popovídat
        </a>
      </div>
    </>
  );
}
