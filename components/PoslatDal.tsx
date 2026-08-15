"use client";
import { useState } from "react";

type Props = {
  /** titulek dílu — jde do zprávy, kterou čtenářka odesílá */
  titul: string;
  /** plná adresa dílu */
  url: string;
};

/**
 * Pozvání poslat díl dál. Stojí až pod Cestou s Barnym a oddělené tichem —
 * nikdy ne hned po nejsilnějším místě dílu.
 *
 * Na mobilu otevře systémové sdílení (WhatsApp, Messenger, SMS, e-mail — co má
 * čtenářka v telefonu). Když prohlížeč nativní sdílení neumí (většina počítačů),
 * nabídne WhatsApp, e-mail a zkopírování odkazu.
 */
export default function PoslatDal({ titul, url }: Props) {
  const [rozbaleno, setRozbaleno] = useState(false);
  const [zkopirovano, setZkopirovano] = useState(false);

  const zprava = `${titul} — příběh, co mi zůstal v hlavě.`;

  async function poslat() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: titul, text: zprava, url });
        return;
      } catch {
        // čtenářka sdílení zavřela — nic se neděje, jen ukážeme ostatní cesty
      }
    }
    setRozbaleno(true);
  }

  async function zkopirovat() {
    try {
      await navigator.clipboard.writeText(url);
      setZkopirovano(true);
      setTimeout(() => setZkopirovano(false), 2500);
    } catch {
      setZkopirovano(false);
    }
  }

  const odkazTridy =
    "text-xs tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors";

  return (
    <div className="text-center">
      <p className="text-lg md:text-xl text-[var(--foreground)] mb-2">
        Pro tu, co ti přišla na mysl
      </p>
      <p className="text-sm text-[var(--muted)] mb-6">
        Někdy je poslaný příběh víc než rada.
      </p>

      <button
        type="button"
        onClick={poslat}
        className="px-8 py-4 text-white text-xs tracking-[0.3em] uppercase font-bold hover:opacity-90 transition-opacity"
        style={{ background: "var(--terakota)" }}
      >
        Poslat kamarádce
      </button>

      {rozbaleno && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`${zprava} ${url}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={odkazTridy}
          >
            WhatsApp
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(titul)}&body=${encodeURIComponent(`${zprava}\n\n${url}`)}`}
            className={odkazTridy}
          >
            E-mailem
          </a>
          <button type="button" onClick={zkopirovat} className={odkazTridy}>
            {zkopirovano ? "Odkaz zkopírován" : "Zkopírovat odkaz"}
          </button>
        </div>
      )}
    </div>
  );
}
