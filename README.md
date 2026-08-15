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
| `skryto: true` | díl ještě nejde ven — 404, mimo přehled i sitemapu |

Zveřejnit díl = smazat řádek `skryto: true`.

## Proměnné prostředí

Vkládají se na Vercelu (Project → Settings → Environment Variables).
Nic z toho nepatří do gitu.

| proměnná | k čemu | povinná |
|---|---|---|
| `ECOMAIL_API_KEY` | odesílání kontaktů do Ecomailu | ano |
| `ECOMAIL_LIST_ID_JECASZIT` | seznam JE ČAS ŽÍT (**29**) | ano (jinak fallback 29) |
| `SEZNAM_WMT_KOD` | ověření webu v Seznam.cz Webmaster | ne |
| `BING_WMT_KOD` | ověření webu v Bing Webmaster Tools | ne |

Ověřovací kódy jsou schválně v env: doplní se na Vercelu bez zásahu do kódu
a dokud nejsou vyplněné, žádná prázdná značka se do stránky nevypíše.

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
