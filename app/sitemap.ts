import { MetadataRoute } from "next";
import { vsechnyDily } from "@/lib/dily";

export default function sitemap(): MetadataRoute.Sitemap {
  const dily = vsechnyDily().map((d) => ({
    url: `https://www.jecaszit.cz/je-cas-zit/${d.slug}`,
    lastModified: d.datum ? new Date(d.datum) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: "https://www.jecaszit.cz", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://www.jecaszit.cz/je-cas-zit", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...dily,
    { url: "https://www.jecaszit.cz/o-autorce", lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: "https://www.jecaszit.cz/gdpr", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
