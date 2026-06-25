import { posts, getPost, formatDate } from "@/lib/blog";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Jarka Matušková`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="bg-white pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-6">

        <div className="mb-12">
          <a href="/blog" className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
            ← Blog
          </a>
        </div>

        <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] font-medium mb-6">
          {formatDate(post.date)}
        </p>

        <h1 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-[var(--foreground)] leading-tight mb-12">
          {post.title}
        </h1>

        <div className="space-y-6 text-[var(--foreground)] font-light leading-relaxed text-lg">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-[var(--gold-light)] text-center">
          <p className="text-[var(--muted)] font-light mb-6">
            Chceš si popovídat? Jedna zpráva stačí.
          </p>
          <a
            href="https://wa.me/420774420251?text=Ahoj+Jarko%2C+ráda+bych+si+s+tebou+popovídala."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-white text-xs tracking-[0.3em] uppercase font-bold hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(to right, #9a7020, #e8c96e, #f5e07e, #d4af5a, #9a7020)" }}
          >
            Napsat Jarce →
          </a>
        </div>

      </div>
    </main>
  );
}
