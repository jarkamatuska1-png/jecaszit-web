export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "zacit-znovu-po-padesatce",
    title: "Začít znovu po padesátce? Ano, jde to.",
    date: "2026-06-25",
    excerpt: "Říká se, že po padesátce se nic moc nemění. Já říkám: to záleží na tom, co se rozhodneš udělat.",
    content: [
      "Říká se, že po padesátce se nic moc nemění. Já říkám: to záleží na tom, co se rozhodneš udělat.",
      "Znám ženy, které v padesáti poprvé začaly podnikat. Poprvé cestovaly samy. Poprvé řekly ne věcem, které je celý život dusily.",
      "A znám ženy, které v padesáti stále čekají. Na dovolení. Na správný čas. Na to, až budou připravené.",
      "Ten správný čas nepřijde sám. Nikdy nepřišel a nepřijde.",
      "Co přijde, jsou další roky. A otázka je jen jedna: co s nimi uděláš.",
      "Jedna věc, která mě osobně nejvíc posunula, bylo přestat se ptát co si zasloužím — a začít se ptát co chci.",
      "Zasloužit si je slovo z dětství. Velká holka se neptá jestli si to zaslouží. Velká holka se rozhodne.",
      "Pokud cítíš, že je v tobě víc — pravděpodobně tam opravdu je. A já ti ráda pomůžu to najít.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
