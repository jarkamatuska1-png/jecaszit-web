"use client";

import { useState, type FormEvent } from "react";
import BrushStroke from "@/components/BrushStroke";

type Letter = "A" | "B" | "C" | "D";

const QUESTIONS: { question: string; options: Record<Letter, string> }[] = [
  {
    question: "Když tě někdo o něco požádá a ty už nemáš sílu…",
    options: {
      A: "Řeknu ano, protože nechci zklamat.",
      B: "Začnu vysvětlovat, proč nemůžu.",
      C: "Cítím vinu, i když odmítnu.",
      D: "Umím říct ne, ale stojí mě to hodně energie.",
    },
  },
  {
    question: "Když si máš odpočinout…",
    options: {
      A: "Mám pocit, že si to musím nejdřív zasloužit.",
      B: "Hned vidím, co všechno ještě není hotové.",
      C: "Sednu si, ale hlava jede dál.",
      D: "Odpočinu si, až když mě tělo zastaví.",
    },
  },
  {
    question: "Co tě nejvíc vyčerpává?",
    options: {
      A: "Pořád být k dispozici.",
      B: "Neustále všechno vysvětlovat.",
      C: "Pocit, že si mě nikdo neváží.",
      D: "To, že jsem na všechno sama.",
    },
  },
  {
    question: "Když doma nebo v práci něco neuděláš ty…",
    options: {
      A: "Většinou to zůstane ležet.",
      B: "Někdo se diví, proč to není hotové.",
      C: "Mám pocit, že selhávám.",
      D: "Nakonec to stejně udělám, aby byl klid.",
    },
  },
  {
    question: "Co si nejčastěji říkáš?",
    options: {
      A: "Ještě to vydržím.",
      B: "Nechci dělat dusno.",
      C: "To přece zvládnu.",
      D: "Až bude čas, budu řešit sebe.",
    },
  },
  {
    question: "Když někdo překročí tvoje hranice…",
    options: {
      A: "Dělám, že se nic nestalo.",
      B: "Vysvětlím to, ale stejně se nic nezmění.",
      C: "Cítím vztek, ale spolknu ho.",
      D: "Ozvu se až ve chvíli, kdy už jsem úplně vyčerpaná.",
    },
  },
  {
    question: "Co ti nejvíc chybí?",
    options: {
      A: "Klid.",
      B: "Ocenění.",
      C: "Prostor pro sebe.",
      D: "Pocit, že nemusím všechno držet.",
    },
  },
  {
    question: "Kdybys dnes měla říct jednu pravdu, byla by to:",
    options: {
      A: "Už nemám z čeho brát.",
      B: "Nechci být pořád poslední.",
      C: "Chci zpátky sebe.",
      D: "Chci konečně začít žít.",
    },
  },
];

const RESULTS: Record<
  Letter,
  { key: string; title: string; popis: string; veta: string }
> = {
  A: {
    key: "1",
    title: "Ta, která drží všechno",
    popis:
      "Jsi žena, která dlouho fungovala jako pilíř. Držela jsi rodinu, práci, nálady, povinnosti i druhé lidi. Jenže i pilíř se jednou unaví, když ho nikdo neopře.",
    veta: "Tvoje síla není v tom, že všechno vydržíš. Tvoje síla začíná ve chvíli, kdy dovolíš, aby někdo podržel i tebe.",
  },
  B: {
    key: "2",
    title: "Ta, která se rozdává",
    popis:
      "Máš velké srdce. Dáváš přirozeně. Jenže někde se z lásky stala dostupnost. A z dostupnosti samozřejmost.",
    veta: "Nemusíš se rozdat do posledního kousku, aby bylo jasné, že miluješ.",
  },
  C: {
    key: "3",
    title: "Ta, která čeká na ocenění",
    popis:
      "Část tebe možná pořád doufá, že si někdo všimne. Že poděkuje. Že řekne: „Teď už si odpočiň.“ Jenže někdy ten okamžik nepřijde zvenku. Musí přijít zevnitř.",
    veta: "Tvoje hodnota nezačíná až ve chvíli, kdy ji někdo uzná.",
  },
  D: {
    key: "4",
    title: "Ta, která se vrací k sobě",
    popis:
      "Už cítíš, že takhle dál nechceš. Možná ještě nevíš přesně jak. Ale něco v tobě už řeklo: dost. A to není konec. To je začátek návratu.",
    veta: "Nezměnila ses k horšímu. Jen se přestáváš ztrácet.",
  },
};

const MEDITATION_URL = "https://youtu.be/-SqfCzfVeow";
const JARKA_EMAIL = "jarka@jecaszit.cz";

function computeResultLetter(answers: Letter[]): Letter {
  const counts: Record<Letter, number> = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((a) => {
    counts[a] += 1;
  });
  let best: Letter = "A";
  (["A", "B", "C", "D"] as Letter[]).forEach((letter) => {
    if (counts[letter] > counts[best]) best = letter;
  });
  return best;
}

export default function KvizClient() {
  const totalQuestions = QUESTIONS.length;

  // -1 = úvod, 0..totalQuestions-1 = otázky, totalQuestions = email, totalQuestions+1 = výsledek
  const [step, setStep] = useState<number>(-1);
  const [answers, setAnswers] = useState<Letter[]>([]);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const EMAIL_STEP = totalQuestions;
  const RESULT_STEP = totalQuestions + 1;

  function selectAnswer(letter: Letter) {
    setAnswers((prev) => [...prev, letter]);
    setStep((s) => s + 1);
  }

  function goBack() {
    if (step <= 0) return;
    setAnswers((a) => a.slice(0, -1));
    setStep((s) => s - 1);
  }

  async function handleEmailSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Zadej prosím platný email.");
      return;
    }
    setErrorMsg("");
    setStatus("loading");

    const letter = computeResultLetter(answers);

    try {
      const res = await fetch("/api/kviz-prihlaseni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, result: RESULTS[letter].key }),
      });
      if (!res.ok) {
        console.error("Kviz signup failed:", await res.text());
      }
    } catch (err) {
      console.error("Kviz signup network error:", err);
    } finally {
      // Výsledek ukážeme rovnou i kdyby se nepovedlo zapsat e-mail do Ecomailu —
      // to hlavní pro návštěvnici je vidět svůj výsledek hned.
      setStatus("done");
      setStep(RESULT_STEP);
    }
  }

  const resultLetter =
    answers.length === totalQuestions ? computeResultLetter(answers) : null;
  const result = resultLetter ? RESULTS[resultLetter] : null;

  return (
    <main className="bg-[#FAF6EF] min-h-screen pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        {/* Úvod */}
        {step === -1 && (
          <div className="text-center py-12">
            <p className="text-xs tracking-[0.5em] uppercase text-[var(--muted)] font-medium mb-6">
              Kvíz
            </p>
            <h1 className="font-sans font-black text-3xl md:text-5xl uppercase tracking-tight text-[var(--heading)] leading-tight mb-6">
              Jsi hodná…
            </h1>
            <p
              className="text-3xl md:text-4xl mb-10"
              style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
            >
              nebo už jen moc dostupná?
            </p>
            <p className="text-[var(--muted)] font-light leading-relaxed mb-10 max-w-md mx-auto">
              8 krátkých otázek. Žádná složitá psychologie — jen chvilka na
              to, zjistit, kde jsi sama sebe možná odložila.
            </p>
            <button
              onClick={() => setStep(0)}
              className="inline-block px-10 py-4 text-white text-xs tracking-[0.3em] uppercase font-bold hover:opacity-90 transition-opacity"
              style={{ background: "var(--gold)" }}
            >
              Začít kvíz
            </button>
          </div>
        )}

        {/* Otázky */}
        {step >= 0 && step < totalQuestions && (
          <div className="py-12">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--muted)] font-medium mb-3 text-center">
              Otázka {step + 1} z {totalQuestions}
            </p>
            <div className="w-full h-1 bg-[var(--gold-light)] mb-10">
              <div
                className="h-1 transition-all duration-300"
                style={{
                  width: `${((step + 1) / totalQuestions) * 100}%`,
                  background: "var(--gold)",
                }}
              />
            </div>

            <h2 className="font-sans font-bold text-xl md:text-2xl text-[var(--heading)] leading-snug mb-8 text-center">
              {QUESTIONS[step].question}
            </h2>

            <div className="space-y-3">
              {(["A", "B", "C", "D"] as Letter[]).map((letter) => (
                <button
                  key={letter}
                  onClick={() => selectAnswer(letter)}
                  className="w-full text-left px-6 py-4 border-2 border-[var(--gold-light)] hover:border-[var(--gold)] hover:bg-white transition-colors text-[var(--foreground)] font-light"
                >
                  <span className="font-bold text-[var(--gold)] mr-3">
                    {letter})
                  </span>
                  {QUESTIONS[step].options[letter]}
                </button>
              ))}
            </div>

            {step > 0 && (
              <button
                onClick={goBack}
                className="mt-8 text-xs tracking-[0.3em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
              >
                ← Zpět
              </button>
            )}
          </div>
        )}

        {/* Email */}
        {step === EMAIL_STEP && (
          <div className="py-12 text-center">
            <h2 className="font-sans font-black text-2xl md:text-3xl uppercase tracking-tight text-[var(--heading)] leading-tight mb-4">
              Skoro hotovo
            </h2>
            <p className="text-[var(--muted)] font-light leading-relaxed mb-8 max-w-md mx-auto">
              Napiš mi email a hned uvidíš svůj výsledek — pošlu ti ho
              zároveň i do schránky, ať se k němu můžeš kdykoliv vrátit.
            </p>

            <form onSubmit={handleEmailSubmit} className="max-w-sm mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tvuj@email.cz"
                className="w-full px-5 py-4 border-2 border-[var(--gold-light)] focus:border-[var(--gold)] outline-none text-[var(--foreground)] mb-4"
              />
              {errorMsg && (
                <p className="text-sm mb-4 text-red-600">{errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-8 py-4 text-white text-xs tracking-[0.3em] uppercase font-bold hover:opacity-90 transition-opacity disabled:opacity-60"
                style={{ background: "var(--gold)" }}
              >
                {status === "loading" ? "Odesílám…" : "Zobrazit můj výsledek"}
              </button>
            </form>

            <button
              onClick={goBack}
              className="mt-8 text-xs tracking-[0.3em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
            >
              ← Zpět na otázky
            </button>
          </div>
        )}

        {/* Výsledek */}
        {step === RESULT_STEP && result && (
          <div className="py-12">
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--muted)] font-medium mb-4 text-center">
              Tvůj výsledek
            </p>
            <h1 className="font-sans font-black text-2xl md:text-4xl uppercase tracking-tight text-[var(--heading)] leading-tight mb-2 text-center">
              Kde jsi sama sebe odložila
            </h1>
            <p
              className="text-3xl md:text-4xl mb-10 text-center"
              style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
            >
              {result.title}
            </p>

            <p className="text-[var(--foreground)] font-light leading-relaxed text-lg mb-8">
              {result.popis}
            </p>

            <div className="mb-10">
              <BrushStroke block className="font-sans font-bold text-sm md:text-base">
                {result.veta}
              </BrushStroke>
            </div>

            <div className="text-center mb-12">
              <a
                href={MEDITATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border-2 border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-bold hover:bg-[var(--gold)] hover:text-white transition-all duration-300"
              >
                🎧 Pustit meditaci
              </a>
            </div>

            <div className="border-t border-[var(--gold-light)] pt-10 text-center">
              <p className="text-[var(--muted)] font-light leading-relaxed max-w-md mx-auto mb-6">
                Jestli cítíš, že je čas jít víc do hloubky, můžeš mi
                odpovědět jednou větou:
              </p>
              <p
                className="text-2xl mb-6"
                style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}
              >
                „Chci se vrátit k sobě.“
              </p>
              <a
                href={`mailto:${JARKA_EMAIL}?subject=Chci%20se%20vr%C3%A1tit%20k%20sob%C4%9B`}
                className="inline-block px-10 py-4 text-white text-xs tracking-[0.3em] uppercase font-bold hover:opacity-90 transition-opacity"
                style={{ background: "var(--gold)" }}
              >
                Napsat Jarce →
              </a>
            </div>

            <div className="pt-12 text-center">
              <a
                href="/"
                className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
              >
                ← Zpět na web
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
