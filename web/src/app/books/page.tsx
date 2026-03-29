import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Stagger } from "@/components/Stagger";
import { AddToCartButton } from "@/components/AddToCartButton";
import { getBooks } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Books | Divine Besong Eya",
  description: "Books by Divine Besong Eya on leadership, resilience, and transformation.",
};

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <Container className="py-20">
      <Reveal>
        <SectionHeader
          eyebrow="Books"
          title="Leadership and resilience in print"
          description="Insights designed to help leaders navigate complexity with confidence and values-driven clarity."
        />
      </Reveal>

      <Stagger className="mt-10 grid gap-6 md:grid-cols-2">
        {books.map((book) => (
          <article key={book.slug} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            {book.coverImageUrl ? (
              <div className="mb-4 overflow-hidden rounded-xl border border-black/10">
                <Image
                  src={book.coverImageUrl}
                  alt={book.imageAlt || book.title}
                  width={800}
                  height={500}
                  className="h-52 w-full object-cover"
                />
              </div>
            ) : (
              <div className="mb-4 grid h-52 place-items-center rounded-xl bg-gradient-to-br from-navy to-ink text-center">
                <p className="px-4 font-display text-3xl text-white">{book.title}</p>
              </div>
            )}
            <h2 className="font-display text-3xl leading-tight text-navy">{book.title}</h2>
            <p className="mt-3 text-sm text-ink/75">{book.description}</p>
            <p className="mt-2 text-lg font-semibold text-navy">${(book.price ?? 5.99).toFixed(2)}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <AddToCartButton
                id={book.slug}
                title={book.title}
                price={book.price ?? 5.99}
                slug={book.slug}
                coverImageUrl={book.coverImageUrl}
              />
            </div>
          </article>
        ))}
      </Stagger>
    </Container>
  );
}
