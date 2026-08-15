import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // staré stránky mimo svět Heleny — zůstávají živé kvůli starým odkazům,
      // ale nemají se objevovat ve vyhledávání
      disallow: ["/kviz", "/blog", "/o-mne", "/svet", "/dalsi-kapitola"],
    },
    sitemap: "https://jecaszit.cz/sitemap.xml",
  };
}
