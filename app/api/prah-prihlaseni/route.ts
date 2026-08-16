import { NextResponse } from "next/server";

// Ecomail seznam světa JE ČAS ŽÍT — sběr kontaktů pro jecaszit.cz.
// ID se bere z env ECOMAIL_LIST_ID_JECASZIT (Vercel i .env.local).
// Fallback 29 = seznam potvrzený Jarkou 15. 8. 2026 (freli.ecomailapp.cz/contacts/29).
const ECOMAIL_LIST_ID = process.env.ECOMAIL_LIST_ID_JECASZIT || "29";

const POVOLENE_ZDROJE = ["domu", "dil", "prehled"] as const;
type Zdroj = (typeof POVOLENE_ZDROJE)[number];

/**
 * Jednoduchá brzda proti zahlcení — nejvýš 5 pokusů z jedné adresy za 10 minut.
 * Drží se v paměti běžící instance, takže to není neprůstřelná hradba (instancí
 * může běžet víc); je to levná první vrstva, která odfiltruje hrubé bušení do
 * formuláře. Tvrdší limit patří na úroveň Vercel WAF.
 */
const OKNO_MS = 10 * 60 * 1000;
const MAX_POKUSU = 5;
const pokusy = new Map<string, { pocet: number; do: number }>();

function prekrocilLimit(ip: string): boolean {
  const ted = Date.now();
  const zaznam = pokusy.get(ip);

  if (!zaznam || ted > zaznam.do) {
    pokusy.set(ip, { pocet: 1, do: ted + OKNO_MS });
    // ať mapa neroste donekonečna — vyhazujeme prošlé záznamy
    if (pokusy.size > 5000) {
      for (const [klic, hodnota] of pokusy) {
        if (ted > hodnota.do) pokusy.delete(klic);
      }
    }
    return false;
  }

  zaznam.pocet += 1;
  return zaznam.pocet > MAX_POKUSU;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "neznama";

    if (prekrocilLimit(ip)) {
      return NextResponse.json(
        { error: "Zkoušíš to moc často. Dej tomu chvilku a zkus to znovu." },
        { status: 429, headers: { "Retry-After": "600" } }
      );
    }

    const { email, website, zdroj } = await request.json();

    // Honeypot — roboti vyplní skryté pole "website"; člověk ne.
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    if (
      !email ||
      typeof email !== "string" ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json({ error: "Neplatný e-mail." }, { status: 400 });
    }

    const zdrojTag: Zdroj = POVOLENE_ZDROJE.includes(zdroj) ? zdroj : "domu";

    const apiKey = process.env.ECOMAIL_API_KEY;
    if (!apiKey) {
      console.error("ECOMAIL_API_KEY není nastavený.");
      return NextResponse.json(
        { error: "Server není správně nastaven." },
        { status: 500 }
      );
    }

    const ecomailResponse = await fetch(
      `https://api2.ecomailapp.cz/lists/${ECOMAIL_LIST_ID}/subscribe`,
      {
        method: "POST",
        headers: {
          key: apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subscriber_data: {
            email,
            tags: ["jecaszit-helena", `jecaszit-${zdrojTag}`],
          },
          trigger_autoresponders: true,
          update_existing: true,
        }),
      }
    );

    if (!ecomailResponse.ok) {
      const errText = await ecomailResponse.text();
      console.error("Ecomail chyba:", ecomailResponse.status, errText);
      return NextResponse.json(
        { error: "Nepodařilo se uložit e-mail." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("prah-prihlaseni chyba:", err);
    return NextResponse.json({ error: "Něco se pokazilo." }, { status: 500 });
  }
}
