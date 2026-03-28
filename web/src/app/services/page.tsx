import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Stagger } from "@/components/Stagger";
import { Card } from "@/components/Card";
import Link from "next/link";

const coreServices = [
  {
    title: "1-on-1 Executive Coaching",
    description:
      "Personalized coaching for founders, directors, and senior leaders seeking clarity, confidence, and measurable growth.",
    ctaText: "Book Coaching",
    ctaLink: "/contact",
  },
  {
    title: "Keynote Speaking",
    description:
      "High-impact talks for conferences and leadership events focused on purpose-led leadership, resilience, and transformation.",
    ctaText: "Request Keynote",
    ctaLink: "/contact",
  },
  {
    title: "Leadership Mastermind",
    description:
      "Small-group strategic sessions for ambitious leaders who want accountability, peer learning, and practical progress.",
    ctaText: "Join Mastermind",
    ctaLink: "/contact",
  },
  {
    title: "Corporate Workshops and Training",
    description:
      "Immersive team workshops designed to improve alignment, execution, and leadership culture across organizations.",
    ctaText: "Explore Workshops",
    ctaLink: "/workshops",
  },
  {
    title: "VIP Leadership Intensive",
    description:
      "A high-touch intensive designed to solve critical leadership challenges quickly through strategic diagnosis and execution planning.",
    ctaText: "Apply for VIP",
    ctaLink: "/contact",
  },
  {
    title: "Online Programs",
    description:
      "Flexible learning pathways for professionals and teams who need practical growth tools delivered digitally.",
    ctaText: "View Mentorship",
    ctaLink: "/mentorship",
  },
];

export const metadata: Metadata = {
  title: "Services | Divine Besong Eya",
  description: "Core leadership services for organizations and individuals committed to growth, performance, and impact.",
};

export default function ServicesPage() {

  return (
    <Container className="py-20">
      <Reveal>
        <SectionHeader
          eyebrow="Services"
          title="Transformational offerings for every stage of leadership"
          description="From private coaching to speaking and team interventions, each service is built to create practical and measurable results."
        />
      </Reveal>

      <Reveal>
        <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">What You Can Expect</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <p className="rounded-xl border border-black/10 bg-mist px-4 py-3 text-sm text-ink/80">Clear strategy and leadership clarity tailored to your context</p>
            <p className="rounded-xl border border-black/10 bg-mist px-4 py-3 text-sm text-ink/80">Hands-on frameworks with immediate practical application</p>
            <p className="rounded-xl border border-black/10 bg-mist px-4 py-3 text-sm text-ink/80">Sustained accountability for implementation and results</p>
          </div>
        </div>
      </Reveal>

      <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
        {coreServices.map((service) => (
          <Card
            key={service.title}
            title={service.title}
            description={service.description}
            ctaText={service.ctaText}
            ctaLink={service.ctaLink}
          />
        ))}
      </Stagger>

      <Reveal>
        <div className="mt-10 rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
          <h3 className="font-display text-3xl text-navy">Need help choosing the right service?</h3>
          <p className="mt-3 max-w-2xl text-sm text-ink/75">
            Share your goals and we will recommend the best engagement path for your leadership development or organizational transformation.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-live rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-ink">
              Request a Consultation
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
