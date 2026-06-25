import { posts, formatDate } from "@/lib/blog";

export const metadata = {
  title: "Blog | Jarka Matušková",
  description: "Články o odvaze začít znovu, síle ženy a tom, co je opravdu možné.",
};

export default function BlogPage() {
  return (
    <main className="bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        <div className="mb-16">
          <p className="text-xs tracking-[0.5em] uppercase text-[var(--muted)] font-medium mb-4">Blog</p>
          <h1 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tight text-[var(--foreground)]">
            Píšu rovnou.
          </h1>
          <p className="text-xl mt-3" style={{ fontFamily: "var(--font-script)", color: "var(--gold)" }}>
            Bez omáčky.
          </p>
        </div>

        <div className="space-y-0 divide-y divide-[var(--gold-light)]">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block py-10 hover:pl-4 transition-all duration-300"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] font-medium mb-3">
                {formatDate(post.date)}
              </p>
              <h2 className="font-sans font-black text-xl md:text-2xl uppercase tracking-tight text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors mb-3">
                {post.title}
              </h2>
              <p className="text-[var(--muted)] font-light leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
              <p className="mt-4 text-xs tracking-[0.3em] uppercase font-bold border-b-2 border-[var(--gold)] text-[var(--gold)] inline-block pb-1">
                Číst dál →
              </p>
            </a>
          ))}
        </div>

        <div className="pt-16 border-t border-[var(--gold-light)] mt-10">
          <a href="/" className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
            ← Zpět na web
          </a>
        </div>

      </div>
    </main>
  );
}
