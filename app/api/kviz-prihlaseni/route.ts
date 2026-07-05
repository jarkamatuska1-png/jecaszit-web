import { NextResponse } from "next/server";

const ECOMAIL_LIST_ID = "25";
const VALID_RESULTS = ["1", "2", "3", "4"];

export async function POST(request: Request) {
  try {
    const { email, result } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Neplatný email." }, { status: 400 });
    }

    if (!result || !VALID_RESULTS.includes(result)) {
      return NextResponse.json(
        { error: "Neplatný výsledek kvízu." },
        { status: 400 }
      );
    }

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
            tags: [`kviz-vysledek-${result}`],
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
        { error: "Nepodařilo se uložit email do Ecomailu." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("kviz-prihlaseni chyba:", err);
    return NextResponse.json({ error: "Něco se pokazilo." }, { status: 500 });
  }
}
