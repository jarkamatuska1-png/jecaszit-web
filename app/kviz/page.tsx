import KvizClient from "./KvizClient";

export const metadata = {
  // stará stránka mimo svět Heleny — živá, ale mimo vyhledávání
  robots: { index: false, follow: false },
  title: "Kvíz: Jsi hodná, nebo jen moc dostupná? | Jarka Matušková",
  description:
    "8 krátkých otázek, které ti ukážou, kde jsi možná sama sebe odložila. Krátký, upřímný kvíz od Jarky Matuškové.",
};

export default function KvizPage() {
  return <KvizClient />;
}
