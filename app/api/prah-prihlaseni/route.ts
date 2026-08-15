import { NextResponse } from "next/server";

// Ecomail seznam světa JE ČAS ŽÍT — sběr kontaktů pro jecaszit.cz.
// ID se bere z env ECOMAIL_LIST_ID_JECASZIT (Vercel i .env.local).
// Fallback 29 = seznam potvrzený Jarkou 15. 8. 2026 (freli.ecomailapp.cz/contacts/29).
const ECOMAIL_LIST_ID = process.env.ECOMAIL_LIST_ID_JECASZIT || "29";

const POVOLENE_ZDROJE = ["domu", "dil"] as const;
type Zdroj = (typeof POVOLENE_ZDROJE)[number];

export async function POST(request: Request) {
  try {
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
