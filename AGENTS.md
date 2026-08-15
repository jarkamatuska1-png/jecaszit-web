<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Obrázky u dílu — závazné rozměry

Každý díl v `obsah/*.md` má tři obrázky a každý má jiný poměr stran. **Nikdy je
nezaměňuj a nikdy nepoužij jeden obrázek na víc účelů.**

| pole v hlavičce dílu | rozměr | poměr | účel |
|---|---|---|---|
| `banner` | 1600 × 900 | 16:9 | široký obraz nad dílem na webu |
| `karta` | 1200 × 800 | 3:2 | karta dílu v přehledu |
| `og` | 1200 × 630 | 1.91:1 | náhled při sdílení na sítích (JPG!) |

- `banner`: motiv vpravo, **vlevo klidná plocha** — přes ni se sází název dílu.
- `og`: hlavy postav patří do **svislého středu** (náhled se ořezává na střed);
  vyrábí se z banneru skriptem `./scripts/og-obrazek.sh <zdroj> <výstup.jpg>`,
  ne ručně, a vždy jako **JPG**.
- Když `og` chybí, kód zaskočí bannerem — funguje to, ale ořez pak řídí Facebook.

# Obrázky Heleny

Helena je **vždy malba**, Jarka je **vždy fotka** — Jarku nikdy nekresli.
Ke každému generování Heleny se přikládají **obě reference** z `jih-core`:
`assets/helena/helena-ref-tvar.png` + `helena-ref-postava.png`. Figuru neudrží
text, drží ji reference, a popisuje se **kladně** (zápory typu „NOT slim" ženu
naopak zeštíhlí).

# Barvy

Paleta je závazné pravidlo, tokeny jsou v `app/globals.css`. Drobný text a odkazy
používají `var(--gold)`, který ukazuje na **tmavší** šalvěj kvůli čitelnosti —
světlá `var(--salvej)` patří jen na velké prvky a dekorace. Po zásahu do
`globals.css` drží Turbopack starý CSS: smazat `.next` a restartovat dev server.
