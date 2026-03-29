"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setFeedback("Please fill in all required fields.");
      return;
    }

    try {
      setStatus("sending");
      setFeedback("");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = (await response.json()) as { ok?: boolean; message?: string; error?: string };

      if (!response.ok) {
        setStatus("error");
        setFeedback(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
      setFeedback(data.message || "Thanks. Your message was submitted successfully.");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setFeedback("Network issue. Please try again.");
    }
  }

  return (
    <form className="grid gap-4 border border-black/10 bg-white p-6 sm:p-7" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink/70">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="h-11 w-full border border-black/20 bg-white px-3 text-sm focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink/70">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="h-11 w-full border border-black/20 bg-white px-3 text-sm focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full border border-black/20 bg-white px-3 py-2 text-sm focus:border-gold focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-live h-11 bg-ink px-6 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-gold disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      <div className="flex flex-wrap gap-3">
        <a
          href="mailto:div@theleadersmindset.net"
          className="border border-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition hover:border-gold hover:text-gold"
        >
          Email Directly
        </a>
        <a
          href="https://wa.me/971526981013"
          target="_blank"
          rel="noreferrer"
          className="border border-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink/80 transition hover:border-gold hover:text-gold"
        >
          WhatsApp
        </a>
      </div>

      {status === "sent" ? (
        <p className="text-sm text-emerald-700">{feedback || "Thanks. Your message was submitted successfully."}</p>
      ) : null}
      {status === "error" ? <p className="text-sm text-rose-700">{feedback || "Something went wrong. Please try again."}</p> : null}
    </form>
  );
}
