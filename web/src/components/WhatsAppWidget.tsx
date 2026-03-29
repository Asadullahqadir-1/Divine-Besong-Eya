"use client";

// WhatsApp widget - kept simple to avoid TypeScript errors
export function WhatsAppWidget() {
  return null;
}

// Floating WhatsApp button
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971526981013?text=Hi%2C%20I%20have%20a%20question%20about%20the%20books%20and%20workshops"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-20 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition duration-300 hover:bg-emerald-600 hover:shadow-2xl sm:bottom-6 sm:right-6"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg
        className="h-7 w-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.52 3.48A11.9 11.9 0 0012.03 0C5.41 0 .02 5.39.02 12.01c0 2.12.55 4.19 1.6 6.02L0 24l6.14-1.61a11.98 11.98 0 005.89 1.5h.01c6.62 0 12-5.39 12-12.01 0-3.2-1.25-6.22-3.52-8.4zM12.03 21.86h-.01a9.95 9.95 0 01-5.08-1.39l-.36-.21-3.64.96.97-3.55-.24-.37a9.9 9.9 0 01-1.53-5.29c0-5.5 4.48-9.98 9.99-9.98 2.67 0 5.18 1.04 7.06 2.92a9.9 9.9 0 012.92 7.06c0 5.51-4.48 9.99-9.98 9.99zm5.47-7.48c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.66.15-.2.29-.78.97-.96 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.39-1.46-.88-.79-1.48-1.77-1.65-2.06-.17-.3-.02-.46.13-.61.14-.14.29-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.49 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.7.63.71.22 1.35.19 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.69.25-1.28.17-1.42-.07-.13-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}
