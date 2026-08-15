# jecaszit.cz — brána do světa Heleny

Web k příběhu na pokračování **JE ČAS ŽÍT**. Next.js 16 (App Router, Turbopack),
nasazuje se přes GitHub → Vercel.

> Kánon projektu (co se píše, proč a pro koho) žije v repu `jih-core` —
> hlavně `stav.md` a `JE-CAS-ZIT-ZAKLAD.md`. Tady je jen technika.

## Spuštění

```bash
npm run dev
```

Pozor: **poběží-li dva dev servery nad touto složkou naráz, perou se o `.next`**
a Turbopack začne hlásit nesmysly (typicky „Can't resolve … font"). Pak stačí
nechat běžet jediný. Po zásahu do `app/globals.css` navíc Turbopack drží starý
CSS — smazat `.next` a server restartovat.

Produkční build se dá zkusit lokálně přes `npm run build && npm start`.

## Díly

Díly se čtou z markdownu ve složce `obsah/`. **Nový díl = nový `.md` soubor**,
do kódu se kvůli tomu nesahá. V hlavičce souboru:

| pole | co dělá |
|---|---|
| `titul`, `poradi`, `slug`, `datum` | základ; `slug` je adresa dílu |
| `anotace` | teaser na kartu a popisek při sdílení |
| `banner`, `karta` | obrázky 16:9 a 3:2 |
| `banner`, `karta`, `og` | obrázky — rozměry viz níže |
| `skryto: true` | díl ještě nejde ven — 404, mimo přehled i sitemapu |

Zveřejnit díl = smazat řádek `skryto: true`.

## Rozměry obrázků u dílu — závazné

Každý díl má tři obrázky a **každý má jiný účel i jiný poměr stran**. Když se
rozměr netrefí, něco se ořízne: na webu motiv, na Facebooku hlavy.

| pole | rozměr | poměr | k čemu |
|---|---|---|---|
| `banner` | **1600 × 900** | 16:9 | široký obraz nad dílem na webu |
| `karta` | **1200 × 800** | 3:2 | karta dílu v přehledu |
| `og` | **1200 × 630** | 1.91:1 | náhled při sdílení na sítích |

Pravidla, která platí u všech tří:

- **`banner`: motiv patří vpravo, vlevo se nechává klidná plocha** — přes ni se
  na webu vysází název dílu. Když je vlevo rušno, název není čitelný.
- **`og`: hlavy postav patří do svislého středu.** Náhled se ořezává na střed,
  takže co je u horního nebo dolního okraje, může zmizet.
- **`og` se vyrábí z banneru skriptem**, ne ručně:

```bash
./scripts/og-obrazek.sh public/images/dil-02-banner-16x9.png public/images/og-dil-02.jpg
```

  Skript ořízne na 1200×630 a uloží jako JPG (kolem 200 kB). Cestu pak zapíšeš
  do hlavičky dílu jako `og: /images/og-dil-02.jpg`.
- **Formát:** `banner` a `karta` mohou být PNG (ilustrace), `og` vždycky **JPG** —
  Facebook ho stahuje při každém sdílení a PNG bývá pětkrát těžší.
- Když `og` chybí, použije se `banner` a sítě si ho oříznou samy. Funguje to,
  ale výsledek nemáš pod kontrolou.

## Proměnné prostředí

Vkládají se na Vercelu (Project → Settings → Environment Variables).
Nic z toho nepatří do gitu.

| proměnná | k čemu | povinná |
|---|---|---|
| `ECOMAIL_API_KEY` | odesílání kontaktů do Ecomailu | ano |
| `ECOMAIL_LIST_ID_JECASZIT` | seznam JE ČAS ŽÍT (**29**) | ano (jinak fallback 29) |
| `SEZNAM_WMT_KOD` | přebije ověřovací kód Seznamu z kódu | ne |
| `BING_WMT_KOD` | ověření webu v Bing Webmaster Tools | ne |

Ověřovací kódy vyhledávačů nejsou tajemství — ve stránce stojí veřejně, proto
kódy Googlu a Seznamu sedí rovnou v `app/layout.tsx`. Env proměnná je tu pro
případ, že by se kód měnil bez zásahu do kódu; dokud není vyplněná u Bingu,
žádná prázdná značka se nevypíše.

Webmasterské nástroje:
[Seznam](https://reporter.seznam.cz/wm/) · [Bing](https://www.bing.com/webmasters) ·
[Google](https://search.google.com/search-console)

## Adresy a vyhledávače

Kanonická podoba je **`https://www.jecaszit.cz`** — doména přesměrovává
`jecaszit.cz` → `www` (308). Na www musí ukazovat `metadataBase`, kanonické
odkazy, `app/sitemap.ts` i `app/robots.ts`.

Staré stránky mimo svět Heleny (`/kviz`, `/blog`, `/o-mne`, `/svet`,
`/dalsi-kapitola`) zůstávají živé kvůli starým odkazům, ale mají `noindex`
a jsou v `robots.txt` zakázané.

## Zabezpečení

Bezpečnostní hlavičky (CSP, HSTS, `nosniff`, `X-Frame-Options`,
`Referrer-Policy`, `Permissions-Policy`) sedí v `next.config.ts`.

CSP je psaná **bez nonce** záměrně — nonce vyžaduje dynamické renderování
každé stránky, čímž by web přišel o statickou prerenderaci a odbavování z CDN.
Web nenačítá nic zvenčí: písma jsou self-hostovaná přes `next/font`,
Vercel Analytics jede ze same-origin.

Formulář k odběru má honeypot a brzdu 5 pokusů z jedné adresy za 10 minut
(`app/api/prah-prihlaseni/route.ts`). Ta drží v paměti instance — tvrdší,
distribuovaný limit patří na úroveň Vercel WAF.
