import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
});

const playfair = Playfair_Display({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Je čas žít | Jarka Matušková",
  description: "Velký holky chtějí od života víc. Mnohem víc. Jarka Matušková — koučink, mentoring, spolupráce.",
  metadataBase: new URL("https://jecaszit.cz"),
  openGraph: {
    title: "Je čas žít | Jarka Matušková",
    description: "Velký holky chtějí od života víc. Mnohem víc.",
    url: "https://jecaszit.cz",
    siteName: "Je čas žít",
    locale: "cs_CZ",
    type: "website",
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
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
