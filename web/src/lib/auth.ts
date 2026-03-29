import "server-only";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const ADMIN_COOKIE_NAME = "divine_admin_session";
const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;
const DEFAULT_ADMIN_PASSWORD = "Divine@2026";
const DEFAULT_ADMIN_SESSION_SECRET = "divine-admin-session-secret-2026";

type SessionPayload = {
  exp: number;
};

function sha256(value: string) {
  return createHash("sha256").update(value).digest();
}

function safeCompare(value: string, expected: string) {
  const left = sha256(value);
  const right = sha256(expected);
  return timingSafeEqual(left, right);
}

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || DEFAULT_ADMIN_SESSION_SECRET;
}

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || DEFAULT_ADMIN_PASSWORD;
}

function signValue(value: string) {
  return createHmac("sha256", getSessionSecret()).update(value).digest("hex");
}

function encodeSession(payload: SessionPayload) {
  const payloadJson = JSON.stringify(payload);
  const payloadBase64 = Buffer.from(payloadJson, "utf8").toString("base64url");
  const signature = signValue(payloadBase64);
  return `${payloadBase64}.${signature}`;
}

function decodeSession(token: string | undefined) {
  if (!token) return null;
  const [payloadBase64, signature] = token.split(".");
  if (!payloadBase64 || !signature) return null;

  const expectedSignature = signValue(payloadBase64);
  if (!safeCompare(signature, expectedSignature)) return null;

  try {
    const payloadString = Buffer.from(payloadBase64, "base64url").toString("utf8");
    const payload = JSON.parse(payloadString) as SessionPayload;
    if (typeof payload.exp !== "number") return null;
    if (Date.now() > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}

export function hasAdminAuthConfig() {
  return Boolean(getAdminPassword() && getSessionSecret());
}

export function validateAdminPassword(password: string) {
  const expectedPassword = getAdminPassword();
  if (!expectedPassword) return false;
  return safeCompare(password, expectedPassword);
}

export async function createAdminSession() {
  const cookieStore = await cookies();
  const token = encodeSession({
    exp: Date.now() + ADMIN_SESSION_MAX_AGE_SECONDS * 1000,
  });

  cookieStore.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_SESSION_MAX_AGE_SECONDS,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

export async function isAdminAuthenticated() {
  if (!hasAdminAuthConfig()) return false;
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  return Boolean(decodeSession(token));
}
