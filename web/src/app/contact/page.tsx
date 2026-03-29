import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { SocialIcon } from "@/components/SocialIcon";
import { getSettingsData } from "@/lib/cms";
import { resolveSocialUrl } from "@/lib/social";

export const metadata: Metadata = {
  title: "Contact | Divine Besong Eya",
  description: "Book a session, speaking engagement, or consulting consultation with Divine Besong Eya.",
};

export default async function ContactPage() {
  const settings = await getSettingsData();
  const details = settings.contact;

  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-16 pt-32 text-white sm:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_26%,rgba(181,138,59,0.2),transparent_42%),radial-gradient(ellipse_at_18%_52%,rgba(13,29,51,0.7),transparent_58%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Contact</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] sm:text-7xl">
            Book a Conversation
            <br />
            That Moves Leadership Forward
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">
            Use the form below to request coaching, speaking, or strategic consulting support.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />

          <aside className="relative overflow-hidden border border-black/10 bg-white p-6 sm:p-7">
            <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-gold/15 blur-2xl" />
            <h3 className="font-display text-5xl leading-tight text-ink">Direct Contact</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">Reach out directly using phone, email, or WhatsApp for a faster response.</p>

            <div className="mt-5 grid gap-3">
              <a href={`tel:${details.phone}`} className="btn-live inline-flex flex-wrap items-center justify-between gap-1 border border-black/10 bg-mist px-4 py-3 text-sm font-medium text-ink/85">
                <span className="text-xs uppercase tracking-[0.14em] text-ink/60">Phone</span>
                <span className="break-all text-right">{details.phone}</span>
              </a>
              <a href={`mailto:${details.email}`} className="btn-live inline-flex flex-wrap items-center justify-between gap-1 border border-black/10 bg-mist px-4 py-3 text-sm font-medium text-ink/85">
                <span className="text-xs uppercase tracking-[0.14em] text-ink/60">Email</span>
                <span className="break-all pl-0 text-right sm:pl-4">{details.email}</span>
              </a>
              <a
                href="https://wa.me/971526981013"
                target="_blank"
                rel="noreferrer"
                className="btn-live inline-flex items-center justify-between border border-ink bg-ink px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-gold"
              >
                <span>WhatsApp</span>
                <span>Open Chat</span>
              </a>
            </div>

            <h4 className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-gold">Social Media</h4>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {(details.socialLinks || []).map((link: any) => (
                <Link
                  key={`${link.platform}-${link.value}`}
                  href={resolveSocialUrl(link.platform, link.value)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.platform}
                  className="btn-live inline-flex h-10 w-10 items-center justify-center border border-black/15 bg-white text-ink/85 hover:border-gold hover:text-gold"
                >
                  <SocialIcon platform={link.platform} className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
