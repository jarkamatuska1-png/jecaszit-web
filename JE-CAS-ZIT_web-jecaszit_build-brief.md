# Build brief — web jecaszit.cz (JE ČAS ŽÍT)

*Zadání pro Claude Code na Mac mini, repo `jecaszit-web`. Aktualizace: 15. 8. 2026.*

---

## 0) Než začneš

- Web se staví do podoby **ilustrovaného světa** podle vizuálu níže (styl F, paleta 1). Není to holá textová stránka.
- **Nic nepublikuj živě bez výslovného „ano" od Jarky.** Stav v pracovní kopii, ukaž přes `npm run dev`. Deploy až na pokyn.
- Jazyk celého webu: **intimní „ty", jedné ženě.** Nikdy „vy, ženy".

## 1) Co je jecaszit.cz

Brána do příběhového světa **JE ČAS ŽÍT**, ne stránka o službách. Hrdinka **Helena** je přiznaná fikce; **Jarka Matušková** je reálná průvodkyně. Manifest: *„Jen pohled dvou žen. Jedné vymyšlené a druhé reálné."* Tón = dveře zvědavosti, ne bolesti. Žádný marketing, žádné prodejní CTA.

## 2) Vizuál — PRAVIDLO webu

**Ilustrace:** styl F (semi-realistický malovaný), teplá paleta, Helena velikost 44. Obrázky přicházejí z receptu `helena-image-recept.md` a leží v `public/images/`.

**Barvy (paleta 1, teplá) — role:**
- Pozadí: krém `#FAF5EC` (karty/plochy světlejší `#FFFDF8`)
- **Text stránek (nadpisy i běžný text): teplá skoro-černá `#241F1C`**
- **Akcenty v kartě** (popisek „DÍL X" + odkaz „Číst celý díl →") a jemné linky: **šalvěj `#7C8A6F`**
- **Hlavní tlačítko** (sběr e-mailu „Chci další příběh"): **terakota `#B06B4C`** — jeden teplý akční bod
- Oddělovače/linky: `#E7DECB`; zlatá `#9A7B3F` jen decentně (např. značka „Cesta s Barnym")
- **Název dílu a teaser v kartě zůstávají tmavé** (skoro-černá) kvůli čitelnosti — šalvěj jen na akcenty, ne na celý text.

**Typografie:** serif na nadpisy (elegantní, „knižní"), čistý čitelný font na text. Hodně vzduchu.

## 3) Hlavička / navigace — 3 položky

1. **Kdo je Helena** — vstupní strana (root `/`), seznámení s Helenou. Klik na logo vede sem. **Žádná položka „Domů".**
2. **Je čas žít — život s Helenou** — díly
3. **O autorce** — kraťoučký pozdrav + odkaz na jarkamatuskova.cz

Žádná záložka „Cesta s Barnym" — Barnyho rovina je vložená dovnitř každého dílu.

## 4) Stránka „Kdo je Helena" (vstup)

Hero přes celou šířku: **ilustrace Heleny (široká), a manifest napsaný do klidné plochy v obraze** (varianta A) — text v obraze černou (`#241F1C`). **Nadpis se neopakuje nad obrázkem.** Úvodní obraz = dvojobraz (Jarčina foto + Helena malovaná) **nebo** Helenin portrét v obýváku.

Pod hero krátké představení (text níže, Jarka doladí) a **pole pro e-mail**.

> **Kdo je Helena**
> Není skutečná. Vznikla v mé hlavě. A přesto prožívá to, co my — ženy z masa a kostí.
> Jsem autorka jejího příběhu i průvodkyně jejími situacemi. Nejsem tu pro poučky ani soudy. Jsem tu pro každé její JO AHA — a pro směr, který si sama zvolí.
> Naše cesta není o výuce ani o kázání. Jen pohled dvou žen. Mou realitu vždycky poznáš i podle toho, že je se mnou na cestě můj pes Barny.

## 5) Stránka „Je čas žít — život s Helenou" (díly)

Přehled dílů, každý má **vlastní stránku** (kvůli prolinku z FB).

- **Karta v seznamu:** ilustrace **nahoře přes celou šířku karty, formát 3:2, BEZ textu v obraze**. Pod ní: „DÍL X" (šalvěj), název (tmavý), teaser (tmavý), odkaz „Číst celý díl →" (šalvěj).
- **Otevřená stránka dílu:** **široký banner 16:9** nahoře (název dílu položený do klidné plochy obrazu), pod ním plný text.
- Uvnitř dílu: **Helenina scéna** a za ní **dohra „Cesta s Barnym"** — jeden text, oddělený jemnou linkou a nenápadnou značkou (kurzíva / zlatá). Ne zvláštní blok.
- **Každý díl celý a zdarma.** Nic se nezamyká. **Žádný kvíz.**
- Na konci dílu **pole pro e-mail** s tichou větou. Žádné „odemkni pokračování".

**Zdroj textů (1:1 z repa):**
- Díl 1 — **„Prostřeno pro čtyřicet"** → `JE-CAS-ZIT-DIL-01-Prostreno-pro-ctyricet.md`, URL `/je-cas-zit/prostreno-pro-ctyricet`
- Díl 2 — „Nejtěžší host" → `JE-CAS-ZIT-DIL-02-Nejtezsi-host.md`, URL `/je-cas-zit/nejtezsi-host`
- Přehled → `JE-CAS-ZIT-DILY-PREHLED.md`
- Postav to tak, aby další díl = přidání dalšího `.md` (číst z markdownu).

## 6) Stránka O autorce

Jen kraťoučký pozdrav a odkaz. Žádný životopis.

> **O autorce**
> Ahoj, jsem Jarka. Helenu jsem si vymyslela — ale to, co prožívá, vymyšlené není. Víc o mně najdeš tady → [jarkamatuskova.cz](https://jarkamatuskova.cz)

## 7) Sběr e-mailu

- Pole **na vstupu i na stránce každého dílu**.
- Napojení na **Ecomail, seznam „Helena"** (ověř/založ). Vzor jako na jarkamatuskova.cz: `/api/contact` → Ecomail.
- Po odeslání jemné poděkování v tónu webu (*„Díky. Ozvu se ti Heleniným příběhem."*). Jen e-mail, žádné pole navíc.
- Tlačítko terakotové (`#B06B4C`).

## 8) Doručování dílů e-mailem (kontext)

Každý díl chodí čtenářkám i e-mailem **v plném znění** (dopis), přes Ecomail — ne nástřel. Dosah řeší sítě (Barnyho posty s odkazem na web), ne tlačení mailových čtenářek ke klikání.

## 9) Co NEDĚLAT

- Žádný kvíz. Žádné prodejní CTA, odemykání za e-mail, countdowny, funnel jazyk.
- Nezamykat díly. Nepublikovat živě bez Jarčina „ano".
- Šalvěj nepoužívat na celý text (jen akcenty) — kvůli čitelnosti.

## 10) Shrnutí

Ilustrovaný svět (styl F, paleta 1). Hlavička: Kdo je Helena · Je čas žít · O autorce. Text černý, akcenty šalvěj, tlačítko terakota. Každý díl celý, karta 3:2 bez textu + banner 16:9 s názvem, Barny uvnitř dílu, e-mail na vstupu i u dílu. Díl 1 = „Prostřeno pro čtyřicet". Nikde žádný tlak.
