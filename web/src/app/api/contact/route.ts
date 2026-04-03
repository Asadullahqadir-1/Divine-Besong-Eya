import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const resendApiKey = process.env.RESEND_API_KEY?.trim() || "";
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function GET() {
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || "";
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || "";

  return NextResponse.json({
    ok: true,
    service: "resend",
    configured: Boolean(resend && toEmail && fromEmail),
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Please provide a valid email address." }, { status: 400 });
    }

    if (message.length < 10) {
      return NextResponse.json({ ok: false, error: "Message is too short." }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || "";
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || "";

    if (!resend || !toEmail || !fromEmail) {
      return NextResponse.json(
        { ok: false, error: "Email delivery is not configured." },
        { status: 500 }
      );
    }

    const safeName = name.replace(/[\r\n]/g, " ");
    const safeEmail = email.replace(/[\r\n]/g, " ");
    const safeMessage = message.replace(/\r\n/g, "\n").trim();

    try {
      const { error } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: safeEmail,
        subject: `New contact form message from ${safeName}`,
        text: [
          "New contact form submission",
          "",
          `Name: ${safeName}`,
          `Email: ${safeEmail}`,
          "",
          "Message:",
          safeMessage,
        ].join("\n"),
      });

      if (error) {
        return NextResponse.json(
          { ok: false, error: "Email provider rejected the message. Check sender domain verification." },
          { status: 500 }
        );
      }
    } catch {
      return NextResponse.json(
        { ok: false, error: "Message could not be sent right now. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, message: "Thanks. Your message has been sent successfully." });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}
