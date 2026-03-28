import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const tierPlans = [
  {
    badge: "3 Months",
    name: "Foundation",
    focus: "Ideal for: New challenges",
    pricing: "Custom pricing",
    summary:
      "Get clarity on your immediate challenge, develop a winning strategy, and build momentum in the first 90 days.",
    items: [
      "6 bi-weekly mentoring sessions",
      "Assessment & 90-day plan",
      "Focus on 1-2 core priorities",
      "Email support between sessions",
      "Monthly check-in emails",
    ],
    cta: "Enquire Now",
    featured: false,
  },
  {
    badge: "6 Months",
    name: "Accelerator",
    focus: "Most Popular | Deep change",
    pricing: "Custom pricing",
    summary:
      "Six months of dedicated mentorship to drive significant transformation, mastery, and results. This is where real change happens.",
    items: [
      "12 bi-weekly mentoring sessions",
      "360-degree assessment",
      "Customised development plan",
      "Priority email/message support",
      "Monthly progress reviews",
      "Resource library access",
      "1 complimentary workshop",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    badge: "12 Months",
    name: "Mastery",
    focus: "Leadership excellence",
    pricing: "Custom pricing",
    summary:
      "A full year of sustained partnership for leaders serious about mastery. Build lasting habits and legacy-level impact.",
    items: [
      "24 bi-weekly mentoring sessions",
      "Comprehensive assessment suite",
      "Multi-month strategic plan",
      "24/7 support access",
      "Bi-weekly reviews",
      "Unlimited resource access",
      "2 executive workshops included",
      "Accountability partner",
    ],
    cta: "Schedule Call",
    featured: false,
  },
];

const whatYouGet = [
  "Dedicated one-on-one mentoring sessions",
  "Customised development framework",
  "Access to proprietary tools and resources",
  "Direct feedback and accountability",
  "On-demand support between sessions",
  "Clear milestones and progress tracking",
];

const modules = [
  {
    name: "Module 1",
    title: "Clarity & Self-Awareness",
    items: [
      "Leadership values and vision",
      "Strengths and growth areas",
      "Limiting beliefs and patterns",
      "Career aspirations and goals",
    ],
  },
  {
    name: "Module 2",
    title: "Strategic Thinking",
    items: [
      "Industry landscape analysis",
      "Strategic planning frameworks",
      "Decision-making models",
      "Execution roadmapping",
    ],
  },
  {
    name: "Module 3",
    title: "Influence & Leadership",
    items: ["Executive presence", "Stakeholder management", "Team building and development", "Communication mastery"],
  },
  {
    name: "Module 4",
    title: "Resilience & Growth",
    items: [
      "Stress management",
      "Building emotional intelligence",
      "Habits for sustained success",
      "Legacy and life balance",
    ],
  },
];

const outcomes = [
  {
    number: "1",
    title: "Career Acceleration",
    description:
      "Promotions, new roles, expanded responsibilities - mentees consistently advance faster because they are prepared, confident, and clear about their next moves.",
  },
  {
    number: "2",
    title: "Strategic Clarity",
    description:
      "You will have a crystalline understanding of where you are going and how to get there. No more second-guessing or spinning wheels.",
  },
  {
    number: "3",
    title: "Increased Confidence",
    description:
      "As you achieve milestones and overcome obstacles with mentorship support, your confidence compounds. You believe in yourself differently.",
  },
  {
    number: "4",
    title: "Network & Opportunities",
    description:
      "You will be introduced to strategic relationships and opportunities that accelerate your growth and expand what is possible.",
  },
  {
    number: "5",
    title: "Decision-Making Clarity",
    description:
      "High-stakes decisions become easier. You have a trusted advisor who helps you think through implications and choose strategically.",
  },
  {
    number: "6",
    title: "Accountability & Results",
    description:
      "You are more likely to follow through on commitments and achieve your goals because someone is actively invested in your success.",
  },
];

const journey = [
  {
    number: "1",
    label: "Week 1",
    title: "Kickoff & Assessment",
    description:
      "Initial discovery session to understand your background, aspirations, challenges, and desired outcomes. We establish the mentorship agreement and shared expectations.",
  },
  {
    number: "2",
    label: "Weeks 2-3",
    title: "Deeper Diagnosis",
    description:
      "Through conversations, assessments, and reflection, we build a comprehensive picture of where you are and where you want to go. We identify core focus areas.",
  },
  {
    number: "3",
    label: "Week 4",
    title: "Strategic Planning",
    description:
      "Build your customised mentorship framework, set milestones, and establish accountability structures. You walk away with clarity on the path forward.",
  },
  {
    number: "4",
    label: "Ongoing",
    title: "Bi-weekly Mentoring & Accountability",
    description:
      "Regular sessions focused on progress, challenges, learning, and next steps. We track momentum, celebrate wins, and course-correct as needed.",
  },
];

const impactMetrics = [
  { value: "92%", label: "Achieved or exceeded their primary goal" },
  { value: "85%", label: "Reported increased career advancement" },
  { value: "88%", label: "Significantly increased confidence" },
  { value: "78%", label: "Got promoted or expanded responsibilities" },
];

export const metadata: Metadata = {
  title: "Mentorship | Divine Besong Eya",
  description:
    "Comprehensive mentorship programme for ambitious leaders and professionals seeking measurable transformation.",
};

export default function MentorshipPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-gold/20 bg-black px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(181,138,59,0.18),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_65%,rgba(14,27,45,0.45),transparent_55%)]" />
        <div className="relative max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">Personal Development</p>
          <h1 className="font-display text-5xl font-light leading-[1.04] text-white sm:text-6xl md:text-7xl">
            Mentorship for the
            <br />
            <em className="italic text-gold-light">Ambitious</em>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            Personalized guidance from a seasoned leadership coach. One-on-one mentorship designed to accelerate your growth, clarify your path, and unlock your potential.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1300px] px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div>
              <h2 className="font-display text-5xl font-light leading-[1.08] text-ink sm:text-6xl">
                The <em className="italic text-gold">Mentorship</em> Experience
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-8 text-ink/70">
                Mentorship is more than advice - it is a partnership where you have someone who believes in your potential, challenges your thinking, and holds you accountable to your aspirations. Our mentorship programme pairs you with Divine for a defined period of focused development.
              </p>
              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-ink/70">
                Whether you are stepping into a bigger role, building a business, or navigating a critical transition, mentorship accelerates your learning and amplifies your impact.
              </p>

              <div className="mt-8 grid max-w-2xl gap-6 border-l-4 border-gold bg-light/85 p-7 sm:grid-cols-2">
                <div>
                  <p className="font-display text-5xl font-semibold leading-none text-gold">3-12 Months</p>
                  <p className="mt-3 text-sm text-ink/65">Flexible programme duration</p>
                </div>
                <div>
                  <p className="font-display text-5xl font-semibold leading-none text-gold">Bi-weekly</p>
                  <p className="mt-3 text-sm text-ink/65">Dedicated mentoring sessions</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="font-display text-4xl text-ink">What You Get</h3>
              <ul className="mt-7 space-y-4 text-[15px] leading-7 text-ink/65">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-[3px] text-sm text-ink">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1300px] px-8 pb-16 sm:px-12 md:px-16 md:pb-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Programme Options</p>
          <h2 className="mt-3 font-display text-5xl font-light leading-tight text-ink sm:text-6xl">
            Choose Your <em className="italic text-gold">Path</em>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {tierPlans.map((plan) => (
            <Reveal key={plan.name}>
              <article
                className={`h-full border-t-[4px] bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
                  plan.featured
                    ? "border border-gold bg-[linear-gradient(135deg,rgba(181,138,59,0.06)_0%,rgba(255,255,255,1)_100%)]"
                    : "border-t-gold"
                }`}
              >
                <span className="inline-block bg-gold px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  {plan.badge}
                </span>
                <h3 className="mt-4 font-display text-4xl text-ink">{plan.name}</h3>
                <p className="mt-2 text-sm font-semibold text-gold">{plan.focus}</p>
                <p className="mt-6 font-display text-4xl text-ink">{plan.pricing}</p>
                <p className="mt-4 text-sm leading-7 text-ink/65">{plan.summary}</p>

                <ul className="mt-6 space-y-0.5">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-2 border-b border-black/7 py-2.5 text-sm text-ink/65">
                      <span className="text-gold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold transition hover:gap-3"
                >
                  {plan.cta} →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-16 w-full max-w-[1300px] bg-black px-8 py-16 sm:px-12 md:mb-24 md:px-16 md:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Core Focus Areas</p>
          <h2 className="mt-3 font-display text-5xl font-light text-white sm:text-6xl">What We Work On</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {modules.map((module) => (
            <Reveal key={module.name}>
              <article className="h-full border-l-[3px] border-gold bg-[linear-gradient(90deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.03)_100%)] p-7">
                <p className="font-display text-3xl text-gold">{module.name}</p>
                <h3 className="mt-2 font-display text-4xl text-white">{module.title}</h3>
                <ul className="mt-5 space-y-2.5 text-sm text-white/65">
                  {module.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1300px] px-8 pb-16 sm:px-12 md:px-16 md:pb-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Mentee Outcomes</p>
          <h2 className="mt-3 font-display text-5xl font-light text-ink sm:text-6xl">What You&apos;ll Experience</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {outcomes.map((outcome) => (
            <Reveal key={outcome.title}>
              <article className="h-full border-l-[4px] border-gold bg-white p-6 sm:p-7">
                <p className="font-display text-5xl text-gold/35">{outcome.number}</p>
                <h3 className="mt-1.5 font-display text-4xl text-ink">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/65">{outcome.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-16 w-full max-w-[1300px] bg-light px-8 py-16 sm:px-12 md:mb-24 md:px-16 md:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">How It Works</p>
          <h2 className="mt-3 font-display text-5xl font-light text-ink sm:text-6xl">
            The Mentorship <em className="italic text-gold">Journey</em>
          </h2>
        </Reveal>

        <div className="relative mt-12 pl-7 before:absolute before:bottom-0 before:left-5 before:top-0 before:w-px before:bg-gold">
          {journey.map((step) => (
            <Reveal key={step.title}>
              <article className="relative mb-10 pl-14 last:mb-0">
                <span className="absolute -left-0.5 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gold font-display text-xl text-white">
                  {step.number}
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">{step.label}</p>
                <h3 className="mt-1 font-display text-4xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink/65">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1300px] px-8 pb-16 sm:px-12 md:px-16 md:pb-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Mentee Success</p>
          <h2 className="mt-3 font-display text-5xl font-light text-ink sm:text-6xl">
            Mentorship <em className="italic text-gold">Impact</em>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((metric) => (
            <Reveal key={metric.value}>
              <article className="h-full border-t-[3px] border-gold bg-white p-6 text-center">
                <p className="font-display text-5xl text-gold">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-ink/65">{metric.label}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <article className="mt-10 bg-black p-9 sm:p-12">
            <h3 className="font-display text-5xl font-light text-white">
              Why Mentees Love <em className="italic text-gold-light">This Programme</em>
            </h3>
            <p className="mt-5 max-w-3xl font-display text-2xl italic leading-relaxed text-white/75">
              "Divine did not just answer my questions - he helped me ask better questions. He saw potential I could not see in myself and did not let me settle. Six months with him changed my entire trajectory."
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-sm font-bold text-white">
                AK
              </span>
              <div>
                <p className="font-semibold text-white">Amina K.</p>
                <p className="text-sm text-white/60">Director, Tech Company</p>
              </div>
            </div>
          </article>
        </Reveal>
      </section>

      <section className="bg-bone px-8 pb-20 pt-4 text-center sm:px-12 md:px-16 md:pb-24">
        <Reveal>
          <h2 className="font-display text-5xl font-light text-ink sm:text-6xl">
            Ready to Begin Your <em className="italic text-gold">Mentorship Journey?</em>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ink/65">
            Mentorship spots are limited to ensure personalized attention and real results. Let&apos;s talk about whether mentorship is the right fit for your goals right now.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-live inline-flex min-w-[260px] justify-center bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-gold-light"
            >
              Schedule Discovery Call
            </Link>
            <Link
              href="/services"
              className="btn-live inline-flex min-w-[260px] justify-center border border-ink bg-transparent px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition hover:border-gold hover:text-gold"
            >
              Explore Other Services
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
