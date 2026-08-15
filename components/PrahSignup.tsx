"use client";
import { useState } from "react";

type Props = {
  /** odkud přišel zápis — jen pro rozlišení v Ecomailu */
  zdroj?: "domu" | "dil";
  tlacitko?: string;
  poznamka?: string;
};

export default function PrahSignup({
  zdroj = "domu",
  tlacitko = "Chci příběh",
  poznamka = "Žádný spam, jen Helenin svět. Odhlásit se můžeš kdykoli.",
}: Props) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/prah-prihlaseni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website, zdroj }),
      });
      if (res.ok) {
        setStatus("ok");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(data.error || "Něco se pokazilo. Zkus to prosím znovu.");
      }
    } catch {
      setStatus("error");
      setMessage("Něco se pokazilo. Zkus to prosím znovu.");
    }
  }

  if (status === "ok") {
    return (
      <div className="text-center py-4">
        <p className="text-lg font-medium text-[var(--heading)]">
          Díky. Ozvu se ti Heleniným příběhem.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md mx-auto">
      {/* Honeypot — skryté pole proti robotům */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor={`email-${zdroj}`} className="sr-only">
          Tvůj e-mail
        </label>
        <input
          id={`email-${zdroj}`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tvůj@e-mail.cz"
          className="flex-1 px-5 py-4 bg-white border border-[var(--gold-light)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-8 py-4 text-white text-xs tracking-[0.3em] uppercase font-bold hover:opacity-90 transition-opacity disabled:opacity-60 whitespace-nowrap"
          style={{ background: "var(--terakota)" }}
        >
          {status === "loading" ? "Posílám…" : tlacitko}
        </button>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 mt-3 text-center">{message}</p>
      )}

      <p className="text-xs text-[var(--muted)] mt-4 text-center">{poznamka}</p>
    </form>
  );
}
