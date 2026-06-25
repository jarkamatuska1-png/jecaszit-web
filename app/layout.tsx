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

export const metadata: Metadata = {
  verification: {
    google: "xQQSjb52K1wI76cpN1aMpW-SX-UqijfUucG53V5udw4",
  },
  title: "Je čas žít | Jarka Matušková",
  description: "Pro velké holky, které chtějí od života víc. Jeden společný hovor může ukázat tvoje další možnosti.",
  metadataBase: new URL("https://jecaszit.cz"),
  openGraph: {
    title: "Je čas žít | Jarka Matušková",
    description: "Pro velké holky, které chtějí od života víc. Jeden společný hovor může ukázat tvoje další možnosti.",
    url: "https://jecaszit.cz",
    siteName: "Je čas žít",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/images/jarka-o-mne.jpg", width: 1200, height: 630, alt: "Jarka Matušková — Je čas žít" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Je čas žít | Jarka Matušková",
    description: "Pro velké holky, které chtějí od života víc.",
    images: ["/images/jarka-o-mne.jpg"],
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
              url: "https://jecaszit.cz",
              image: "https://jecaszit.cz/images/jarka-o-mne.jpg",
              sameAs: [
                "https://www.instagram.com/j_matuskova/",
                "https://www.facebook.com/jarka.matuskova",
              ],
              jobTitle: "Koučka a autorka metody JIH®",
              description: "Pomáhám ženám, které chtějí od života víc. Jeden společný hovor může ukázat tvoje další možnosti.",
              knowsAbout: ["osobní rozvoj", "metoda JIH®", "koučink žen", "změna života"],
              offers: {
                "@type": "Offer",
                name: "Úvodní hovor",
                description: "Jeden společný hovor, kde se podíváme na tvoje další možnosti.",
                url: "https://jecaszit.cz/#spoluprace",
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
