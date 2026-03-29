"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/Container";
import { CartIcon } from "@/components/CartIcon";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Workshops", href: "/workshops" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const showAdminLink = process.env.NEXT_PUBLIC_SHOW_ADMIN_LINK === "true";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-mist/95 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center">
          <img src="/logo.jpg" alt="Divine Besong Eya Logo" className="h-11 w-auto object-contain sm:h-14" />
        </Link>

        <button
          className="rounded-md border border-ink/20 px-3 py-1.5 text-sm md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink/75 transition duration-200 hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
          {showAdminLink ? (
            <Link
              href="/admin/login"
              className="btn-live rounded-full border border-ink/30 px-4 py-2 text-sm font-semibold text-ink transition hover:border-navy hover:text-navy"
            >
              Admin Login
            </Link>
          ) : null}
          <CartIcon />
          <Link
            href="/book-session"
            className="btn-live rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink"
          >
            Book a Session
          </Link>
        </nav>
      </Container>

      {open ? (
        <div className="border-t border-black/10 bg-mist md:hidden">
          <Container className="flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-sm font-semibold text-ink/85"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {showAdminLink ? (
              <Link
                href="/admin/login"
                className="btn-live mt-1 inline-flex w-max rounded-full border border-ink/30 px-4 py-2 text-sm font-semibold text-ink"
                onClick={() => setOpen(false)}
              >
                Admin Login
              </Link>
            ) : null}
            <Link
              href="/cart"
              className="btn-live mt-1 inline-flex w-max rounded-full border border-navy px-4 py-2 text-sm font-semibold text-navy"
              onClick={() => setOpen(false)}
            >
              🛒 Cart
            </Link>
            <Link
              href="/book-session"
              className="btn-live mt-1 inline-flex w-max rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Book a Session
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
