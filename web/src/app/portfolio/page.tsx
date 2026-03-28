import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const caseStudies = [
  {
    title: "From Manager to Strategic Leader",
    sector: "Financial Services | Executive Coaching",
    challenge:
      "A newly promoted executive was strong technically but struggled with strategic visibility and influence at senior levels.",
    result:
      "Team engagement improved by 40%, and the leader secured expanded strategic responsibilities within 18 months.",
  },
  {
    title: "Rebuilding a Fragmented Leadership Team",
    sector: "Technology | Post-merger Integration",
    challenge:
      "Cross-functional leaders were siloed, decisions were slow, and alignment had broken down after organizational change.",
    result:
      "Collaboration scores rose by 72% and the team established a shared operating model with zero key talent loss.",
  },
  {
    title: "From Founder Dependence to Scalable Leadership",
    sector: "Startup Growth",
    challenge:
      "A founder bottlenecked decision making and execution, causing burnout and limiting scale.",
    result:
      "Revenue grew by 340% while leadership ownership spread across the team through delegation and systems.",
  },
  {
    title: "Mission to Movement",
    sector: "Nonprofit and Social Impact",
    challenge:
      "An impact organization had strong vision but weak strategic execution and inconsistent board alignment.",
    result:
      "Beneficiary reach expanded 5x and annual funding increased significantly through leadership and governance reset.",
  },
];

export const metadata: Metadata = {
  title: "Portfolio | Divine Besong Eya",
  description:
    "Real transformation stories across leadership coaching, team development, and strategy execution.",
};

export default function PortfolioPage() {
  return (
    <Container className="py-20">
      <Reveal>
        <SectionHeader
          eyebrow="Portfolio"
          title="Leaders and organizations transformed"
          description="A selection of coaching, team, and organizational transformation work delivered across industries and regions."
        />
      </Reveal>

      <Reveal>
        <div className="mt-8 grid gap-4 rounded-2xl border border-black/10 bg-white p-5 sm:grid-cols-4">
          <div className="rounded-xl border border-black/10 bg-mist p-4 text-center">
            <p className="font-display text-3xl text-navy">1,200+</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">Leaders Coached</p>
          </div>
          <div className="rounded-xl border border-black/10 bg-mist p-4 text-center">
            <p className="font-display text-3xl text-navy">500+</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">Organizations Impacted</p>
          </div>
          <div className="rounded-xl border border-black/10 bg-mist p-4 text-center">
            <p className="font-display text-3xl text-navy">20+</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">Countries Reached</p>
          </div>
          <div className="rounded-xl border border-black/10 bg-mist p-4 text-center">
            <p className="font-display text-3xl text-navy">95%</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">Client Satisfaction</p>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {caseStudies.map((item) => (
          <Reveal key={item.title}>
            <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{item.sector}</p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-navy">{item.title}</h2>
              <p className="mt-3 text-sm text-ink/75">
                <span className="font-semibold text-ink">Challenge:</span> {item.challenge}
              </p>
              <p className="mt-3 rounded-lg border border-black/10 bg-mist px-3 py-3 text-sm text-ink/85">
                <span className="font-semibold text-navy">Result:</span> {item.result}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
          <h3 className="font-display text-3xl text-navy">Ready for your next transformation story?</h3>
          <p className="mt-3 max-w-2xl text-sm text-ink/75">
            Let us design a leadership intervention that creates measurable change in your context.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-live rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-ink">
              Start a Conversation
            </Link>
            <Link href="/workshops" className="btn-live rounded-full border border-navy px-5 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white">
              Explore Workshops
            </Link>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
