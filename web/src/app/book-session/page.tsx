import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Session | Divine Besong Eya",
  description: "Book a leadership coaching, speaking, or strategy session with Divine Besong Eya.",
};

const sessionOptions = [
  {
    title: "Executive Coaching Session",
    duration: "60 min",
    note: "For founders, executives, and senior managers",
    summary:
      "A high-impact one-on-one strategy conversation focused on leadership challenges, decision-making clarity, and performance acceleration.",
  },
  {
    title: "Mentorship Discovery Call",
    duration: "45 min",
    note: "For professionals in transition or growth",
    summary:
      "A focused conversation to assess fit for ongoing mentorship and outline the right development path based on your goals.",
  },
  {
    title: "Speaking and Team Brief",
    duration: "30 min",
    note: "For organizations and event teams",
    summary:
      "Plan keynote themes, workshop outcomes, and audience context for impactful event delivery.",
  },
];

export default function BookSessionPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-16 pt-32 text-white sm:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_28%,rgba(181,138,59,0.2),transparent_42%),radial-gradient(ellipse_at_18%_52%,rgba(13,29,51,0.7),transparent_58%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Book a Session</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] sm:text-7xl">
            Reserve Time for
            <br />
            Strategic Growth
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">
            Choose the conversation format that best matches your current leadership goals. Every session is practical, direct, and outcome-focused.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {sessionOptions.map((option) => (
            <article key={option.title} className="border border-black/10 bg-white p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">{option.duration}</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink">{option.title}</h2>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink/60">{option.note}</p>
              <p className="mt-4 text-sm leading-7 text-ink/70">{option.summary}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 border border-gold/35 bg-[linear-gradient(120deg,rgba(181,138,59,0.12),rgba(245,240,232,0.75))] p-7 sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">How to Book</p>
          <h3 className="mt-3 font-display text-5xl leading-tight text-ink">Pick Your Preferred Channel</h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/70">
            Send your request by form, email, or WhatsApp. Include your goal, preferred timeline, and whether you need coaching, mentorship, or speaking support.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-live inline-flex bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-gold">
              Book via Contact Form
            </Link>
            <a
              href="mailto:div@theleadersmindset.net"
              className="btn-live inline-flex border border-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition hover:border-gold hover:text-gold"
            >
              Email Request
            </a>
            <a
              href="https://wa.me/971526981013"
              target="_blank"
              rel="noreferrer"
              className="btn-live inline-flex border border-black/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink/80 transition hover:border-gold hover:text-gold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
