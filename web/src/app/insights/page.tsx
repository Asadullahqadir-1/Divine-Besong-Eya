import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Stagger } from "@/components/Stagger";
import { getBlogPosts } from "@/lib/cms";

const categories = [
  "Purpose and Leadership",
  "Inclusive Team Culture",
  "Strategic Decision Making",
  "AI and Human-Centered Leadership",
];

export const metadata: Metadata = {
  title: "Insights | Divine Besong Eya",
  description:
    "Leadership insights, practical frameworks, and thought leadership for professionals and organizations.",
};

export default async function InsightsPage() {
  const posts = await getBlogPosts();

  return (
    <Container className="py-20">
      <Reveal>
        <SectionHeader
          eyebrow="Insights"
          title="Leadership articles and practical resources"
          description="Actionable ideas, reflections, and frameworks to help you lead with purpose and create measurable impact."
        />
      </Reveal>

      <Reveal>
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((item) => (
            <span key={item} className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold tracking-[0.08em] text-ink/75">
              {item}
            </span>
          ))}
        </div>
      </Reveal>

      <Stagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{new Date(post.publishedAt).toLocaleDateString()}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-navy">{post.title}</h2>
            <p className="mt-3 text-sm text-ink/75">{post.excerpt}</p>
            <p className="mt-4 text-xs text-ink/60">By {post.author}</p>
            <Link href={`/blog/${post.slug}`} className="btn-live mt-4 inline-flex rounded-full border border-navy px-4 py-2 text-sm font-semibold text-navy">
              Read Article
            </Link>
          </article>
        ))}
      </Stagger>
    </Container>
  );
}
