import type { NextConfig } from "next";

/**
 * Bezpečnostní hlavičky pro celý web.
 *
 * CSP je psaná bez nonce záměrně: nonce vyžaduje dynamické renderování každé
 * stránky, čímž by web přišel o statickou prerenderaci a odbavování z CDN.
 * U obsahového webu bez přihlašování je to špatný obchod. `'unsafe-inline'`
 * proto zůstává kvůli hydratačním skriptům Next.js, inline JSON-LD a stylům
 * Tailwindu — všechno ostatní je zamčené na vlastní doménu.
 *
 * Web nenačítá nic zvenčí: písma jsou self-hostovaná přes `next/font`
 * a Vercel Analytics jede ze same-origin (`/_vercel/insights`).
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const bezpecnostniHlavicky = [
  { key: "Content-Security-Policy", value: csp },
  // dva roky, včetně subdomén a připraveno na zápis do preload listu prohlížečů
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  // ať web neprozrazuje, na čem běží
  poweredByHeader: false,
  images: {
    // moderní formáty místo původních PNG/JPG — menší přenos u Heleniných obrázků
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: bezpecnostniHlavicky,
      },
    ];
  },
};

export default nextConfig;
