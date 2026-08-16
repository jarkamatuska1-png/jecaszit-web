import fs from "node:fs";
import path from "node:path";

/**
 * Díly čteme z markdownu ve složce `obsah/`.
 * Přidat další díl = přidat další .md soubor s hlavičkou (frontmatter):
 *   titul, poradi, slug, datum, anotace, banner, karta, nazev_v_banneru, og
 * `skryto: true` = díl je hotový, ale ještě nejde ven (není v přehledu, na vlastní
 * adrese vrací 404 a není v sitemapě). Zveřejní se smazáním toho jednoho řádku.
 * `anotace` = krátký teaser na kartu dílu; s textem dílu nemá nic společného.
 * Do kódu se kvůli tomu nesahá.
 */

export type Dil = {
  slug: string;
  titul: string;
  poradi: number;
  datum: string;
  /** krátký teaser na kartu dílu a do popisku pro sdílení — píše se zvlášť, netahá se z textu */
  anotace: string;
  /** široký obrázek 16:9 nad dílem (subjekt vpravo, vlevo klid na název); prázdné = bez banneru */
  banner: string;
  /** obrázek 3:2 na kartu v přehledu (plný motiv); prázdné = karta bez obrázku */
  karta: string;
  /**
   * Obrázek 1200×630 pro náhled na sítích (Facebook chce poměr 1.91:1).
   * Prázdné = použije se banner, který má 16:9 a sítě si ho oříznou po svém.
   * Vyrobí se z banneru skriptem `scripts/og-obrazek.sh`.
   */
  og: string;
  /** true = díl ještě nejde ven (nikde se nezobrazí ani nedohledá) */
  skryto: boolean;
  /** true = název dílu je vypálený přímo v banneru, stránka ho už nepíše */
  nazevVBanneru: boolean;
  /** Helenina scéna — odstavce */
  scena: string[];
  /** Autorská dohra Jarky (Cesta s Barnym) — odstavce; může být prázdná */
  dohra: string[];
};

const SLOZKA_OBSAHU = path.join(process.cwd(), "obsah");

/**
 * Rozměry PNG obrázku z jeho hlavičky (chunk IHDR).
 * Slouží k `og:image:width/height` — s uvedenými rozměry ukážou sítě náhled
 * hned při prvním sdílení, místo aby si obrázek musely nejdřív stáhnout a změřit.
 * Když se rozměry zjistit nedaří, vrací null a značky se prostě nevypíšou.
 */
export function rozmeryObrazku(verejnaCesta: string): { sirka: number; vyska: number } | null {
  if (!verejnaCesta.toLowerCase().endsWith(".png")) return null;
  try {
    const soubor = path.join(process.cwd(), "public", verejnaCesta.replace(/^\//, ""));
    const hlavicka = fs.readFileSync(soubor).subarray(0, 24);
    if (hlavicka.length < 24 || hlavicka.toString("ascii", 12, 16) !== "IHDR") return null;
    return { sirka: hlavicka.readUInt32BE(16), vyska: hlavicka.readUInt32BE(20) };
  } catch {
    return null;
  }
}
const ZNACKA_DOHRY = "### Cesta s Barnym";

type Hlavicka = Record<string, string>;

function rozdelHlavicku(soubor: string): { hlavicka: Hlavicka; telo: string } {
  const shoda = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(soubor);
  if (!shoda) return { hlavicka: {}, telo: soubor };

  const hlavicka: Hlavicka = {};
  for (const radek of shoda[1].split(/\r?\n/)) {
    const dvojtecka = radek.indexOf(":");
    if (dvojtecka === -1) continue;
    const klic = radek.slice(0, dvojtecka).trim();
    const hodnota = radek
      .slice(dvojtecka + 1)
      .trim()
      .replace(/^"([\s\S]*)"$/, "$1");
    if (klic) hlavicka[klic] = hodnota;
  }
  return { hlavicka, telo: soubor.slice(shoda[0].length) };
}

/** Značka pro vodorovnou linku uvnitř textu (v markdownu `---`). */
export const LINKA = "---";

/**
 * Rozdělí text na odstavce. `---` uprostřed textu NEUKONČUJE text — zůstává
 * v poli jako značka LINKA a stránka ho vykreslí jako vodorovnou linku.
 * Zahodí se jen linky na úplném konci bloku (tam ji kreslí sama stránka).
 */
function naOdstavce(text: string): string[] {
  const odstavce = text
    .split(/\r?\n\s*\r?\n/)
    .map((o) => o.trim())
    .filter((o) => o.length > 0)
    .map((o) => (/^-{3,}$/.test(o) ? LINKA : o));

  while (odstavce.length > 0 && odstavce[odstavce.length - 1] === LINKA) {
    odstavce.pop();
  }
  while (odstavce.length > 0 && odstavce[0] === LINKA) {
    odstavce.shift();
  }
  return odstavce;
}

function precti(nazevSouboru: string): Dil {
  const soubor = fs.readFileSync(path.join(SLOZKA_OBSAHU, nazevSouboru), "utf-8");
  const { hlavicka, telo } = rozdelHlavicku(soubor);

  // titulek dílu bereme z hlavičky, nadpis "# ..." v markdownu proto zahodíme
  const bezNadpisu = telo.replace(/^\s*#\s+.*(\r?\n)+/, "");

  const kde = bezNadpisu.indexOf(ZNACKA_DOHRY);
  const scenaText = kde === -1 ? bezNadpisu : bezNadpisu.slice(0, kde);
  const dohraText = kde === -1 ? "" : bezNadpisu.slice(kde + ZNACKA_DOHRY.length);

  const slug =
    hlavicka.slug ||
    nazevSouboru.replace(/\.md$/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return {
    slug,
    titul: hlavicka.titul || slug,
    poradi: Number(hlavicka.poradi ?? 0),
    datum: hlavicka.datum || "",
    anotace: hlavicka.anotace || "",
    banner: hlavicka.banner || "",
    karta: hlavicka.karta || "",
    og: hlavicka.og || "",
    skryto: (hlavicka.skryto || "").toLowerCase() === "true",
    nazevVBanneru: (hlavicka.nazev_v_banneru || "").toLowerCase() === "true",
    scena: naOdstavce(scenaText),
    dohra: naOdstavce(dohraText),
  };
}

/** Zveřejněné díly, seřazené podle pořadí. Skryté se nikde neobjeví. */
export function vsechnyDily(): Dil[] {
  if (!fs.existsSync(SLOZKA_OBSAHU)) return [];
  return fs
    .readdirSync(SLOZKA_OBSAHU)
    .filter((f) => f.endsWith(".md"))
    .map(precti)
    .filter((d) => !d.skryto)
    .sort((a, b) => a.poradi - b.poradi);
}

/** Díly, které jsou hotové, ale ještě nejsou venku — jen se ohlásí, číst nejdou. */
export function chystaneDily(): Dil[] {
  if (!fs.existsSync(SLOZKA_OBSAHU)) return [];
  return fs
    .readdirSync(SLOZKA_OBSAHU)
    .filter((f) => f.endsWith(".md"))
    .map(precti)
    .filter((d) => d.skryto)
    .sort((a, b) => a.poradi - b.poradi);
}

export function dilPodleSlugu(slug: string): Dil | undefined {
  return vsechnyDily().find((d) => d.slug === slug);
}

export function formatujDatum(datum: string): string {
  if (!datum) return "";
  return new Date(datum).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
