import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { Stagger } from "@/components/Stagger";
import { getHomeData, getServices } from "@/lib/cms";

export default async function HomePage() {
  const [homeData, serviceList] = await Promise.all([getHomeData(), getServices()]);

  const heroStats = [
    { label: "Leaders Transformed", value: "1,200+" },
    { label: "Years on Stage", value: "10+" },
    { label: "Countries Reached", value: "20+" }
  ];

  const testimonials = [
    {
      text: "Divine's coaching is unlike anything I've experienced. He helped me shift from a manager who executes tasks to a leader who moves people. Within four months I was promoted and my team's performance doubled.",
      author: "Chidi Kalu",
      role: "Operations Director, Lagos"
    },
    {
      text: "I attended one of Divine's keynotes covering motivation. What I got was a completely new framework for how I think about leadership and growth. I implemented his principles immediately — results came fast.",
      author: "Amina Nduka",
      role: "Founder & CEO, Accra"
    },
    {
      text: "Our team workshop with Divine was a turning point for our organization. He has a rare gift — he challenges deeply while making you feel completely seen and supported. We've invited him back twice.",
      author: "Ruth Mensah",
      role: "HR Director, Multinational Firm"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="grid min-h-screen grid-cols-1 overflow-hidden bg-black md:grid-cols-2">
        {/* Left Content */}
        <div className="relative flex flex-col justify-center px-8 pt-40 pb-8 sm:px-12 md:px-16 md:pt-0">
          <div className="relative z-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold sm:text-xs">
              Leadership Coach · Keynote Speaker · Mindset Strategist
            </p>
            <h1 className="font-display mb-6 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              Lead from the <em className="italic text-gold-light">Inside Out.</em>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-300 sm:text-base">
              Most people chase titles. Extraordinary leaders build the inner foundation that titles can never give them. Divine Besong Eya helps ambitious professionals and entrepreneurs unlock the mindset, clarity, and courage to lead at their highest level.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="inline-flex rounded-full bg-gold px-6 py-3 text-base font-semibold text-white transition hover:bg-gold-light">
                Work with Divine
              </Link>
              <Link href="/about" className="inline-flex rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-gold hover:text-gold">
                His Story →
              </Link>
            </div>
            <div className="mt-12 flex gap-8 border-t border-white/10 pt-8">
              {heroStats.map((stat) => (
                <div key={stat.value}>
                  <p className="text-3xl font-semibold text-gold-light">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden md:block">
          <Image
            src="/homepage1.jpeg"
            alt="Divine Besong Eya Speaking"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Marquee Bar */}
      <section className="overflow-hidden bg-gold py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {["Executive Coaching", "Keynote Speaking", "Mindset Mastery", "Leadership Development", "Team Performance", "Strategic Clarity"].map((item, idx) => (
            <span key={idx} className="mr-8 flex items-center text-sm font-semibold text-white">
              {item}
              <span className="mx-4">✦</span>
            </span>
          ))}
          {["Executive Coaching", "Keynote Speaking", "Mindset Mastery", "Leadership Development", "Team Performance", "Strategic Clarity"].map((item, idx) => (
            <span key={`repeat-${idx}`} className="mr-8 flex items-center text-sm font-semibold text-white">
              {item}
              <span className="mx-4">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative hidden min-h-96 md:block">
          <Image
            src="/homepage2.jpeg"
            alt="Divine Besong Eya with Audience"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center bg-bone px-8 py-12 sm:px-12 md:px-16 md:py-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">Who is Divine?</p>
          <h2 className="font-display mb-6 text-4xl font-light leading-tight text-black md:text-5xl">
            A Voice That <em className="italic text-gold">Moves</em> People to Act
          </h2>
          <p className="mb-4 text-lg italic text-slate">
            "I don't just speak to inspire — I speak to install lasting change in the people who hear me."
          </p>
          <p className="mb-6 leading-relaxed text-gray-700">
            Divine Besong Eya is one of Africa's most sought-after leadership coaches and keynote speakers. With over a decade of experience developing leaders across corporate, entrepreneurial, and community spaces, Divine brings a rare combination of depth, energy, and practical wisdom to every engagement.
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase text-gold">
              Executive Coaching
            </span>
            <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase text-gold">
              Keynote Speaking
            </span>
            <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase text-gold">
              Mindset Mastery
            </span>
            <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase text-gold">
              Team Development
            </span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">How Divine Can Help You</p>
          <h2 className="font-display text-4xl font-light text-white md:text-5xl">
            Transformational <em className="italic text-gold-light">Offerings</em> Built for Real Leaders
          </h2>
        </div>
        <div className="grid gap-px bg-white/5 md:grid-cols-3">
          {serviceList.map((service, idx) => (
            <div key={service.title} className="bg-black/50 p-8 transition hover:bg-gold/10">
              <p className="mb-4 text-5xl font-semibold text-white/5">{String(idx + 1).padStart(2, "0")}</p>
              <h3 className="font-display mb-3 text-2xl text-white">{service.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-400">{service.description}</p>
              <Link href={service.ctaLink || "/services"} className="text-xs font-semibold uppercase tracking-wider text-gold transition hover:text-gold-light">
                {service.ctaText || "Learn More"} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Strip */}
      <section className="bg-gold px-8 py-16 text-center sm:px-12 md:px-16 md:py-20">
        <blockquote className="font-display mx-auto max-w-3xl text-3xl font-light italic leading-relaxed text-white md:text-4xl">
          "The quality of your leadership will never exceed the quality of your <strong className="font-semibold not-italic">thinking.</strong> Change the mind — and everything else follows."
        </blockquote>
        <p className="mt-6 text-sm uppercase tracking-wider text-white/65">— Divine Besong Eya</p>
      </section>

      {/* Testimonials Section */}
      <section className="bg-light px-8 py-16 sm:px-12 md:px-16 md:py-24">
        <div className="mb-12">
          <h2 className="font-display text-4xl font-light text-black md:text-5xl">
            What Leaders <em className="italic text-gold">Say</em> After Working with Divine
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <Reveal key={idx}>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="font-display mb-6 text-lg italic leading-relaxed text-slate">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-amber-900 text-sm font-semibold text-white">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-black">{testimonial.author}</p>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="grid grid-cols-1 gap-8 bg-black px-8 py-16 sm:px-12 md:grid-cols-2 md:items-center md:gap-16 md:px-16 md:py-24">
        <div>
          <h2 className="font-display mb-4 text-3xl font-light text-white md:text-4xl">
            Ready to Lead at a <em className="italic text-gold-light">Higher Level?</em>
          </h2>
          <p className="text-gray-400">
            Every transformation begins with a single decision. Let's talk about yours.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link href="/contact" className="rounded-full bg-gold px-6 py-3 text-center font-semibold text-black transition hover:bg-gold-light">
            Book a Free Call
          </Link>
          <Link href="/services" className="rounded-full border border-gold px-6 py-3 text-center font-semibold text-gold transition hover:bg-gold hover:text-black">
            Explore Services
          </Link>
        </div>
      </section>
    </>
  );
}
