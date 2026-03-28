import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Newsletter } from "@/components/Newsletter";
import { Reveal } from "@/components/Reveal";
import { Stagger } from "@/components/Stagger";
import { aboutSummary } from "@/data/fallback";
import { getBooks, getHomeData, getServices } from "@/lib/cms";

export default async function HomePage() {
  const [homeData, bookList, serviceList] = await Promise.all([getHomeData(), getBooks(), getServices()]);

  return (
    <>
      <Hero />

      <section className="border-y border-black/10 bg-white/70 py-7">
        <Container>
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/55 sm:text-xs sm:tracking-[0.28em]">Trusted By Leaders Across</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {["Corporate Teams", "Executive Coaching", "Risk Leadership", "Inclusion Strategy", "Public Sector", "Education"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 bg-white px-3 py-2 text-[10px] font-semibold tracking-[0.08em] text-ink/70 sm:px-4 sm:text-[11px] sm:uppercase sm:tracking-[0.14em]"
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-black/10 bg-white p-5 shadow-sm sm:p-8 md:grid-cols-2">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Mission</h2>
            <p className="mt-3 text-base leading-relaxed text-ink/80 sm:text-lg">{homeData.mission}</p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Vision</h2>
            <p className="mt-3 text-base leading-relaxed text-ink/80 sm:text-lg">{homeData.vision}</p>
          </div>
          </div>
        </Reveal>
      </Container>

      <Container className="pt-2 pb-10">
        <Reveal>
          <blockquote className="rounded-3xl border border-gold/25 bg-gradient-to-r from-gold/10 via-white to-gold/10 p-6 text-center sm:p-8">
            <p className="font-display text-3xl leading-tight text-navy sm:text-4xl">
              "Your purpose is not a destination. It is the engine that drives every step of your journey, especially when the terrain is uncertain."
            </p>
          </blockquote>
        </Reveal>
      </Container>

      <Container className="py-12">
        <Reveal>
          <SectionHeader
            eyebrow="About"
            title="A dedicated platform at the intersection of purpose, inclusion, and impact"
            description={aboutSummary}
          />
          <Link href="/about" className="btn-live mt-6 inline-flex rounded-full border border-navy px-5 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white">
            Learn About the Mission
          </Link>
        </Reveal>
      </Container>

      <Container className="py-12">
        <Reveal>
          <SectionHeader
            eyebrow="Leadership Workshops"
            title="Practical DEI workshops for today's leaders"
            description="Live and virtual workshop experiences combining evidence-based frameworks with practical application for teams, executives, and emerging leaders."
          />
          <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
            {serviceList.slice(0, 3).map((service) => (
              <Card
                key={service.title}
                title={service.title}
                description={service.description}
                ctaText={service.ctaText}
                ctaLink={service.ctaLink}
              />
            ))}
          </Stagger>
        </Reveal>
      </Container>

      <Container className="py-12">
        <Reveal>
          <SectionHeader
            eyebrow="Books"
            title="Books and resources that turn reflection into action"
            description="Explore practical insights on leadership, resilience, DEI, and purpose-led decision-making in uncertain times."
          />
          <Stagger className="mt-8 grid gap-5 md:grid-cols-2">
            {bookList.slice(0, 2).map((book) => (
              <div key={book.slug} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                {book.coverImageUrl && (
                  <div className="mb-4 overflow-hidden rounded-xl">
                    <Image src={book.coverImageUrl} alt={book.imageAlt} width={400} height={250} className="h-40 w-full object-cover" />
                  </div>
                )}
                {book.featured && <p className="text-xs uppercase tracking-wider text-ink/60">Featured</p>}
                <h3 className="font-display text-xl text-navy mt-2">{book.title}</h3>
                <p className="text-sm text-ink/75 mt-2">{book.description}</p>
                <p className="text-lg font-semibold text-navy mt-3">£{(book.price ?? 5.99).toFixed(2)}</p>
                <Link href="/books" className="btn-live mt-4 inline-block rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-ink transition">
                  View All Books
                </Link>
              </div>
            ))}
          </Stagger>
        </Reveal>
      </Container>

      <Container className="py-12">
        <Reveal>
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm sm:p-10">
          <SectionHeader
            eyebrow="Ready to Work Together"
            title="Lead with intention in this AI generation"
            description="Partner with Besongeya for workshops, training, and strategic guidance that build equitable systems and people-centered impact."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-live rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink">
              Request a Session
            </Link>
            <Link href="/mentorship" className="btn-live rounded-full border border-navy px-5 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white">
              Explore Learning Programs
            </Link>
          </div>
          </div>
        </Reveal>
      </Container>

      <Container className="pb-20 pt-8">
        <Newsletter />
      </Container>
    </>
  );
}
