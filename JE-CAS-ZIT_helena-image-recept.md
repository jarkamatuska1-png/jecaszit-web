# JE ČAS ŽÍT — recept na obrázky Heleny

Jedno místo. Horní část (HLAVA) se **nemění**. Ty dole jen dodáš, k čemu obrázek je
(scéna, nebo text dílu) — zbytek se složí sám.

Na Macu stačí Claude Code říct:
> „Podle `helena-image-recept.md` udělej obrázek ke scéně z Dílu 3" (nebo vlož text /
> popis). Slož finální prompt = STYLE (+ MASTER, jen když v obraze je Helena) +
> odvozená scéna + NEGATIVE a ulož do `public/images/`.

---

## HLAVA — neměnit

### STYLE (vždy)
```
Semi-realistic stylized digital painting, soft cinematic side light, refined
brushwork, warm intimate mood, premium editorial, subtle canvas texture.
Warm palette: cream, terracotta, soft gold, a whisper of sage.
```

### MASTER — Helena (přidej, jen když v obraze JE Helena)
```
Helena — a warm, graceful woman around 50. BODY: full curvy figure, European
dress size 44 — rounded hips, soft midsection, fuller bust, real mature
proportions, dignified and at ease. FACE: warm chestnut shoulder-length wavy
hair, soft intelligent eyes, gentle confident expression, subtle smile lines,
minimal makeup. STYLE: elegant, understated, high-quality — the taste of an
interior designer. Outfit chosen PER SCENE, changes every episode (see WARDROBE).
(Face AND body are LOCKED by the two reference images. The OUTFIT is NOT locked —
describe a new outfit in each prompt.)
```


### VEDLEJŠÍ POSTAVY — Martin (Helenin muž)

Když je v obraze Martin, **místo MASTER Helena** přidej tenhle blok — a **jiný NEGATIVE**
(Martin JE štíhlý, „thin/slim" se u něj nesmí negovat!).

```
Martin — a calm, kind CZECH man of 55, CENTRAL EUROPEAN with fair light skin and
Slavic features, Helena's husband, a carpenter. BODY: tall (about 190 cm), lean
slim build. HAIR: short black hair; only LIGHT DARK STUBBLE on his face — a few
days of growth, a mere shadow of a beard and moustache; NOT a full beard, NOT a
thick moustache. FACE: weathered gentle face, quiet steady eyes, unassuming.
STYLE: simple work clothes — a work shirt with rolled sleeves, sturdy trousers;
a craftsman's hands. Understated, grounded.
(Face and body are LOCKED by Martin's two reference images.)
```

**Reference Martina — přikládej obě:**
```
jih-core/assets/martin/martin-ref-tvar.png      — tvář
jih-core/assets/martin/martin-ref-postava.png   — celá postava (vysoký, štíhlý)
```

**NEGATIVE — Martin (jiný než u Heleny):**
```
young, 20s, 30s, clean-shaven, bald, overweight, muscular bodybuilder, heavy
retouch, plastic skin, distorted hands, extra fingers, text, watermark, logo,
asian features, east asian, japanese, chinese, korean, dark skin
```

⚠️ **Dvě věci naučené při jeho vzniku (16. 8. 2026):**
1. „black moustache and a short beard" vyrobí hustý knír — Jarka chtěla **jen náznak**,
   proto se píše `LIGHT DARK STUBBLE … a mere shadow of a beard and moustache`.
2. Kombinace černých vlasů a strniště vyrobila **asijského muže**. Proto se do zadání
   i do NEGATIVE výslovně píše, že je **Čech / Central European** — jinak to model neuhodne.

---

### NEGATIVE — Helena a scény bez postav

```
thin, skinny, underweight, very slim, young, 20s, glamour model, heavy makeup,
plastic skin, distorted hands, extra fingers, text, watermark, logo
```

### REFERENCE — zamkni tvář I FIGURU (udělej JEDNOU)
Text velikost 44 neudrží — model ji stahuje do štíhlé. Rozhoduje **referenční obrázek**.
Vygeneruj proto jednou **dvě** reference Heleny a **obě přikládej ke každému obrázku**
(silná váha reference):
1. **Tvář** — hlava a ramena (výraz, portréty).
2. **Celá postava** — full body, aby se zamkla i figura (velikost 44).

Reference jsou uložené v kánonu: `jih-core/assets/helena/helena-ref-tvar.png` a
`jih-core/assets/helena/helena-ref-postava.png`.

Prompt na referenci celé postavy (kdyby bylo potřeba přegenerovat):
```
[STYLE] Full-length character reference of Helena — full body, head to feet,
standing relaxed, front view, neutral pose, arms natural. BODY: full curvy figure,
European dress size 44 — rounded hips, soft midsection, fuller bust, real mature
proportions, dignified, clearly NOT slim. Warm chestnut wavy shoulder-length hair.
Neutral outfit (simple blouse and skirt). Plain soft cream studio background, even
light, sharp full figure for a character reference. Vertical.
```
+ [NEGATIVE]

- Když to generátor umí, dej referenci **vyšší váhu** (IP-Adapter / reference strength) a figuru popiš i textem jako pojistku.
- Záložní cesta, když ani reference nestačí: uprav hotový obrázek přes **img2img / inpaint** na postavě, nebo použij **ovládání pózy (ControlNet)** z reference velikosti 44.

### GARDEROBA — oblečení se mění KAŽDÝ díl
Reference zamyká **tvář a figuru, ne kostým.** Helena se obléká pokaždé jinak — elegantně,
s vkusem, na velikost 44 a přiměřeně scéně. **V promptu vždy popiš konkrétní outfit.** Když
generátor kopíruje šaty z reference, dodej: `keep her face and body identical, change the
outfit to: …`.

Šatník (teplá, elegantní paleta — dle Jarčiných náhledů): hedvábné halenky, dobře střižené
kalhoty, midi sukně, kašmírové svetry, cardigany, saka/blejzry, elegantní šaty, kabáty,
šátky, jemné šperky a perly; lodičky nebo elegantní baleríny. Barvy: krém, camel, šedá,
terakota, tmavě modrá, šalvěj, s decentními akcenty. **Střídej mezi díly.**

### Jak odvodit scénu z textu dílu
- Vyber **jeden konkrétní obraz** z děje (předmět, místo, světlo) — ne celý příběh.
- **Neprozrazuj pointu.** Bez lidí, pokud to nemá být portrét. Nálada, ne popis.
- Vždy: teplé světlo, klidná kompozice, **na šířku**, žádná písmena v obraze.

### Formáty — každou ilustraci ve DVOU výřezech
- **Banner (otevřená stránka dílu) — S TEXTEM:** široký, **16:9** (klidně 2:1), ~1920×1080. Hlavní motiv **mimo střed**, aby zbyla klidná plocha, kam se **do obrazu** položí název dílu (text je na banneru).
- **Karta (náhled v seznamu) — BEZ TEXTU:** těsnější, **3:2**, ~1200×800. **Plná kompozice, žádné místo na text a žádný text v obraze** — číslo, název i teaser jsou v kartě POD obrázkem.
- Postup: vygeneruj **širokou verzi** (s klidnou plochou na název) a z ní **ořízni kartu** na plný motiv — nebo požádej generátor rovnou o oba poměry.

### Které obrázky web potřebuje
- **Kdo je Helena (úvod):** vlastní obraz — dvojobraz (tvoje foto + Helena malovaná) **nebo** Helenin portrét v obýváku. Široký, s klidnou plochou vlevo na manifest (varianta A).
- **Každý díl:** vlastní scéna ve dvou formátech (banner 16:9 s textem + karta 3:2 bez textu). Helena u stolku s chlebíčky = **ilustrace k Dílu 1 „Prostřeno pro čtyřicet"**, ne úvod webu.

---

## PATA — sem dodáš jen TOHLE

**Scéna / text:** _(napiš, co má obrázek zachytit — nebo vlož odstavec z dílu; nezapomeň outfit)_

Příklady, jak to vypadá hotové:

- „Vstup, Helena v obýváku" → STYLE + MASTER + `seated on a cream sofa in an elegant warm-modern living room she designed, marble table, brass accents, white flowers, afternoon light; wearing a camel knit and tailored trousers; three-quarter view, calm space on the left for text` + NEGATIVE
- „Díl 1, banner" → STYLE + MASTER + `Helena in her warm living room arranging canapés and a glass of wine on a side table; wearing a cream silk blouse and terracotta midi skirt; cream sofa, brass lamp, flowers, afternoon light; composed to the RIGHT with calm empty space on the LEFT for a title; landscape 16:9` + NEGATIVE
- „Díl 1, karta" → STYLE + MASTER + `Helena arranging canapés and a glass of wine on a side table in her warm living room; cream silk blouse, terracotta midi skirt; tighter framing filling the frame, no empty text space; landscape 3:2` + NEGATIVE
- „Díl 2, kuchyň" → STYLE + `a calm modern kitchen in soft morning light, a single glass catching the sun on a shelf, a tea towel over the counter, tender unspoken tension, no people` + NEGATIVE
- „Cesta s Barnym" → STYLE + `a woman seen from behind walking her dog on a quiet morning path, gentle low light, intimate` + NEGATIVE
- „Díl 3, banner (Martin)" → STYLE + MASTER Martin + `in a warm carpentry workshop, running his hand along a piece of wood on the bench, tools and shavings, soft late-afternoon light; composed to the RIGHT, calm space on the LEFT for a title; landscape 16:9` + NEGATIVE Martin
- „Díl 3, karta (Martin)" → STYLE + MASTER Martin + `kneeling on a bathroom floor, fixing the pipe under the sink with a wrench, open toolbox beside him, warm light, quiet focused tenderness; tighter framing, no empty text space; landscape 3:2` + NEGATIVE Martin

> Tip na konzistenci: u postav s referencí (**Helena, Martin**) přikládej stále **stejné dvě
> reference** (tvář + celá postava) — ať jsou pořád titíž lidé i táž figura, jen v jiném
> oblečení a póze.

---

## DVA SVĚTY V JEDNOM OBRAZE (občasná technika)

Použij, když chceš ukázat, že **dva světy existují vedle sebe** — Jarčina realita a
Helenin příběh v jednom záběru. Ne pravidelně; má to sílu právě tím, že je to vzácné.

**Jak to funguje:** nedělá se diptych ze dvou hotových obrázků (to vždycky vypadá
slepeně — stoly ani oči nikdy nesednou). Fotka se **rozšíří** a do vzniklého místa se
přisadí Helena.

Modelu se přiloží **fotka Jarky + obě reference Heleny** a zadá se:
```
IMAGE 1 = photograph of JARKA. IMAGE 2 + 3 = FACE and BODY references of HELENA.
Extend (outpaint) the photograph to the RIGHT into a wide 16:9 image.
Keep the left part identical to the original photograph.
CONTINUE the table to the right so it becomes ONE table shared by both women —
same surface, same edge, same perspective, same shadows, seamless.
Seat HELENA at that same table on the right, her head the SAME SIZE and her eyes at
the SAME HEIGHT as Jarka's.
Render HELENA as a soft PAINTED ILLUSTRATION while the left woman stays an untouched
PHOTOGRAPH — a deliberate 'two realities' effect inside one continuous scene.
No seam, no border, no collage, no split screen.
```

**Dvě věci, bez kterých to nevyjde (ověřeno 15. 8. 2026):**
1. **Helena musí zůstat malovaná.** Když se zadá fotograficky, model obraz pokaždé
   rozdělí na dvě poloviny se švem uprostřed. Rozdíl technik je zřejmě to, co mu drží
   scénu pohromadě.
2. **Generátor přepočítá celý obraz** — původní pixely fotky nezachová. Jarčina půlka
   je velmi věrné převyprávění, ne originál. Když je potřeba zachovat fotku doslova,
   musí se rozšíření udělat v **Canva Magic Expand** nebo Photoshop Generative Fill a
   Helena se přisadí až potom.

Hotový příklad: `jih-core/assets/jecaszit-vitej/vitej-dve-reality_FINAL.png`
(na webu jako úvodní obraz stránky „Kdo je Helena").
