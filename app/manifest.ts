import type { MetadataRoute } from "next";

/**
 * Webový manifest — jak se web chová, když si ho čtenářka připne na plochu
 * telefonu. Barvy podle závazné palety světa Heleny.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Je čas žít — svět Heleny",
    short_name: "Je čas žít",
    description:
      "Příběh na pokračování pro velké holky, které chtějí od života víc.",
    start_url: "/",
    display: "standalone",
    lang: "cs",
    background_color: "#FAF5EC",
    theme_color: "#B06B4C",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
