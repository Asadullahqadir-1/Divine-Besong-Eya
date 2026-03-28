import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const workshops = [
  {
    title: "Leadership Mindset Intensive",
    meta: "4-6 hours | Virtual or in-person",
    summary:
      "A deep leadership reset for teams and founders who need sharper thinking, stronger confidence, and better decision execution.",
    benefits: [
      "A practical mindset framework for handling pressure and ambiguity",
      "Tools to shift limiting beliefs and improve team confidence",
      "A clear 30-day implementation plan for immediate action",
    ],
  },
  {
    title: "High-Performance Teams Workshop",
    meta: "Full-day | In-person or hybrid",
    summary:
      "Rebuild alignment and accountability across teams with clear operating rhythms, communication norms, and performance systems.",
    benefits: [
      "Role clarity and stronger cross-functional collaboration",
      "Team communication protocols that reduce friction",
      "A team charter and execution model that drives results",
    ],
  },
  {
    title: "Strategic Decision-Making and Execution",
    meta: "Half-day | Customized delivery",
    summary:
      "For leadership teams that need to make better decisions faster and execute with less rework and confusion.",
    benefits: [
      "A repeatable decision framework for high-stakes choices",
      "Execution checkpoints and ownership clarity",
      "Improved stakeholder buy-in and delivery consistency",
    ],
  },
  {
    title: "Emerging Leaders Academy",
    meta: "Half-day | Interactive session",
    summary:
      "Develop future-ready leaders with the self-awareness, communication, and leadership habits needed to grow sustainably.",
    benefits: [
      "Greater confidence in leading peers and projects",
      "Practical delegation and feedback skills",
      "A personal growth roadmap for accelerated leadership progress",
    ],
  },
];

export const metadata: Metadata = {
  title: "Workshops | Divine Besong Eya",
  description:
    "Immersive leadership workshops designed to create measurable team transformation and practical results.",
};

export default function WorkshopsPage() {
  return (
    <Container className="py-20">
      <Reveal>
        <SectionHeader
          eyebrow="Workshops"
          title="Transform your team in one immersive experience"
          description="Custom workshops and leadership trainings built for real implementation, stronger performance, and lasting behavioral change."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {workshops.map((workshop) => (
          <Reveal key={workshop.title}>
            <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{workshop.meta}</p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-navy">{workshop.title}</h2>
              <p className="mt-3 text-sm text-ink/75">{workshop.summary}</p>
              <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">What clients gain</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink/80">
                {workshop.benefits.map((benefit) => (
                  <li key={benefit} className="rounded-lg border border-black/10 bg-mist px-3 py-2">
                    {benefit}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
          <h3 className="font-display text-3xl text-navy">Need a custom workshop for your organization?</h3>
          <p className="mt-3 max-w-2xl text-sm text-ink/75">
            Every session can be tailored to your team size, goals, and context across Africa, the UAE, and global teams.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-live rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-ink">
              Book a Workshop
            </Link>
            <Link href="/services" className="btn-live rounded-full border border-navy px-5 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white">
              View Services
            </Link>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
