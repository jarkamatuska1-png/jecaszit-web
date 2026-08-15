import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Dancing_Script } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const dancing = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

/**
 * Obraz pro sdílení na sítích — schválený vizuál „dvě reality" (Jarka fotograficky,
 * Helena malovaně). Na šířku, jak si Facebook a spol. přejí; portrét si ořezávaly.
 */
export const OG_OBRAZ = {
  url: "/images/vitej-dve-reality.png",
  width: 1376,
  height: 768,
  alt: "Jarka a Helena u jednoho stolu — Je čas žít",
} as const;

/**
 * Ověřovací kódy webmasterských nástrojů. Nejsou to tajemství — ve stránce stojí
 * veřejně, proto sedí rovnou v kódu vedle Googlu. Env proměnná (`SEZNAM_WMT_KOD`,
 * `BING_WMT_KOD`) kód přebije, kdyby bylo potřeba ho vyměnit bez zásahu do kódu.
 */
const overeniOstatni: Record<string, string> = {
  // Seznam.cz Webmaster — reporter.seznam.cz/wm (ověřeno 15. 8. 2026)
  "seznam-wmt": process.env.SEZNAM_WMT_KOD || "jasPDNwik0JeRba8RRAdpj6FZ5uAbJ6k",
};
if (process.env.BING_WMT_KOD) overeniOstatni["msvalidate.01"] = process.env.BING_WMT_KOD;

export const metadata: Metadata = {
  verification: {
    google: "xQQSjb52K1wI76cpN1aMpW-SX-UqijfUucG53V5udw4",
    ...(Object.keys(overeniOstatni).length > 0 ? { other: overeniOstatni } : {}),
  },
  title: { default: "Je čas žít | Svět Heleny", template: "%s | Je čas žít" },
  description: "Jen pohled dvou žen. Jedné vymyšlené a druhé reálné. Příběh na pokračování pro velké holky, které chtějí od života víc.",
  metadataBase: new URL("https://www.jecaszit.cz"),
  openGraph: {
    title: "Je čas žít | Svět Heleny",
    description: "Jen pohled dvou žen. Jedné vymyšlené a druhé reálné.",
    url: "https://www.jecaszit.cz",
    siteName: "Je čas žít",
    locale: "cs_CZ",
    type: "website",
    images: [OG_OBRAZ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Je čas žít | Svět Heleny",
    description: "Jen pohled dvou žen. Jedné vymyšlené a druhé reálné.",
    images: [OG_OBRAZ.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${dmSans.variable} ${playfair.variable} ${dancing.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jarka Matušková",
              url: "https://www.jecaszit.cz",
              image: "https://www.jecaszit.cz/images/jarka-o-mne.jpg",
              sameAs: [
                "https://www.instagram.com/j_matuskova/",
                "https://www.facebook.com/jarka.matuskova",
              ],
              jobTitle: "Autorka příběhu JE ČAS ŽÍT",
              description: "Autorka a průvodkyně světem Heleny — příběhu na pokračování pro velké holky.",
              knowsAbout: ["příběh na pokračování", "osobní rozvoj", "metoda JIH®"],
            }),
          }}
        />
        {/* Značka webu — aby vyhledávače spojily adresu s názvem „Je čas žít" */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Je čas žít",
              alternateName: "Svět Heleny",
              url: "https://www.jecaszit.cz",
              inLanguage: "cs-CZ",
              description:
                "Příběh na pokračování pro velké holky, které chtějí od života víc. Jen pohled dvou žen — jedné vymyšlené a druhé reálné.",
              publisher: {
                "@type": "Person",
                name: "Jarka Matušková",
                url: "https://www.jecaszit.cz/o-autorce",
              },
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
