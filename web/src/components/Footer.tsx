import Link from "next/link";
import { Container } from "@/components/Container";
import { SocialIcon } from "@/components/SocialIcon";
import { getSettingsData } from "@/lib/cms";
import { resolveSocialUrl } from "@/lib/social";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Workshops", href: "/workshops" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export async function Footer() {
  const settings = await getSettingsData();
  const contact = settings.contact;
  const showAdminLink = process.env.NEXT_PUBLIC_SHOW_ADMIN_LINK === "true";

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-black/10 bg-gradient-to-br from-white to-mist">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl float-slow" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-navy/10 blur-3xl float-fast" />

      <Container className="relative grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-3xl text-navy sm:text-4xl">Divine Besong Eya</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            A purpose-led platform advancing inclusion, equity, and human-centered impact for leaders and organizations.
          </p>
          <Link
            href="/contact"
            className="btn-live mt-5 inline-flex rounded-full bg-navy px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white"
          >
            Book a Session
          </Link>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Navigation</h4>
          <div className="mt-3 grid gap-2 text-sm text-ink/80">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-max transition duration-200 hover:translate-x-1 hover:text-navy"
              >
                {item.label}
              </Link>
            ))}
            {showAdminLink ? (
              <Link
                href="/admin/login"
                className="w-max font-semibold text-navy transition duration-200 hover:translate-x-1 hover:text-ink"
              >
                Admin Login
              </Link>
            ) : null}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Speaking Contact</h4>
          <div className="mt-3 grid gap-2">
            <Link
              href={`tel:${contact.phone}`}
              className="group inline-flex w-full items-center gap-2 text-sm font-medium text-ink/80 transition duration-200 hover:text-navy sm:w-max"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/15 bg-white text-ink/80 transition group-hover:border-navy group-hover:text-navy">
                <PhoneIcon className="h-4 w-4" />
              </span>
              <span className="break-all">{contact.phone}</span>
            </Link>
            <Link
              href={`mailto:${contact.email}`}
              className="group inline-flex w-full items-center gap-2 text-sm font-medium text-ink/80 transition duration-200 hover:text-navy sm:w-max"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/15 bg-white text-ink/80 transition group-hover:border-navy group-hover:text-navy">
                <MailIcon className="h-4 w-4" />
              </span>
              <span className="break-all">{contact.email}</span>
            </Link>
          </div>
          <p className="mt-3 text-xs text-ink/60">Available for keynote speaking, coaching, and consulting requests.</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Social</h4>
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-ink/80">
                  {contact.socialLinks.map((item: (typeof contact.socialLinks)[number]) => (
              <Link
                key={item.platform}
                href={resolveSocialUrl(item.platform, item.value)}
                target="_blank"
                rel="noreferrer"
                aria-label={item.platform}
                className="btn-live inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white text-ink/85 hover:border-navy hover:text-navy"
              >
                <SocialIcon platform={item.platform} className="h-4 w-4" />
              </Link>
            ))}
          </div>
          <p className="mt-3 text-xs text-ink/60">Follow for leadership insights and updates.</p>
        </div>
      </Container>
      <div className="border-t border-black/10 bg-white/70 py-4 text-center text-xs text-ink/60">
        Copyright {new Date().getFullYear()} Divine Besong Eya. All rights reserved.
      </div>
    </footer>
  );
}

type IconProps = {
  className?: string;
};

function PhoneIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1 .44 1 1V20c0 .56-.44 1-1 1C10.61 21 3 13.39 3 4c0-.56.44-1 1-1h3.5c.56 0 1 .44 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      />
    </svg>
  );
}

function MailIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
      />
    </svg>
  );
}
