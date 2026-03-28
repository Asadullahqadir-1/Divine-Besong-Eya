import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const tiers = [
  {
    name: "Foundation",
    duration: "3 months",
    focus: "Perfect for clarity, confidence, and immediate momentum.",
    items: [
      "6 one-on-one mentoring sessions",
      "90-day growth roadmap",
      "Email support between sessions",
    ],
  },
  {
    name: "Accelerator",
    duration: "6 months",
    focus: "Deep transformation for leaders ready for measurable change.",
    items: [
      "12 mentoring sessions",
      "Customized leadership development plan",
      "Priority support and monthly progress reviews",
    ],
  },
  {
    name: "Mastery",
    duration: "12 months",
    focus: "Long-term leadership excellence and legacy-level growth.",
    items: [
      "24 mentoring sessions",
      "Strategic leadership roadmap",
      "Advanced accountability and implementation support",
    ],
  },
];

const outcomes = [
  "Career acceleration and expanded leadership opportunities",
  "Stronger strategic clarity and decision confidence",
  "Improved communication and executive presence",
  "Consistent accountability and execution momentum",
];

export const metadata: Metadata = {
  title: "Mentorship | Divine Besong Eya",
  description:
    "Personalized mentorship for ambitious leaders, founders, and professionals building long-term impact.",
};

export default function MentorshipPage() {
  return (
    <Container className="py-20">
      <Reveal>
        <SectionHeader
          eyebrow="Mentorship"
          title="Mentorship for the ambitious"
          description="A personalized leadership partnership designed to unlock your next level of clarity, confidence, and influence."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {tiers.map((tier) => (
          <Reveal key={tier.name}>
            <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{tier.duration}</p>
              <h2 className="mt-2 font-display text-3xl text-navy">{tier.name}</h2>
              <p className="mt-3 text-sm text-ink/75">{tier.focus}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                {tier.items.map((item) => (
                  <li key={item} className="rounded-lg border border-black/10 bg-mist px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
          <h3 className="font-display text-3xl text-navy">What mentees consistently gain</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {outcomes.map((outcome) => (
              <p key={outcome} className="rounded-lg border border-black/10 bg-mist px-3 py-3 text-sm text-ink/80">
                {outcome}
              </p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-live rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-ink">
              Schedule Discovery Call
            </Link>
            <Link href="/portfolio" className="btn-live rounded-full border border-navy px-5 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white">
              View Results
            </Link>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
