import type { Metadata } from "next";
import Link from "next/link";
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
            {book.price ? <p className="mt-2 text-lg font-semibold text-navy">AED {book.price.toFixed(2)}</p> : null}
            <div className="mt-5 flex flex-wrap gap-3">
              {book.pdfUrl ? (
                <a
                  href={book.pdfUrl}
                  download
                  rel="noreferrer"
                  className="btn-live rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white"
                >
                  Download PDF
                </a>
              ) : null}
              <Link
                href={book.externalLink}
                target="_blank"
                rel="noreferrer"
                className="btn-live rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white"
              >
                Learn More
              </Link>
              {book.price ? (
                <AddToCartButton
                  id={book.slug}
                  title={book.title}
                  price={book.price}
                  slug={book.slug}
                  coverImageUrl={book.coverImageUrl}
                />
              ) : (
                <Link
                  href={book.externalLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-live rounded-full border border-navy px-4 py-2 text-sm font-semibold text-navy hover:bg-navy hover:text-white"
                >
                  Buy Online
                </Link>
              )}
            </div>
          </article>
        ))}
      </Stagger>
    </Container>
  );
}
