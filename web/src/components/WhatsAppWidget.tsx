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
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600 hover:shadow-2xl transition duration-300"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg
        className="h-7 w-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.866 1.235c-1.504.89-2.773 2.165-3.67 3.71-1.824 3.158-.527 7.198 2.882 8.945 1.925 1.034 4.482.923 6.788.556h.001c2.285-.363 4.291-1.439 5.493-3.331 1.394-2.132.972-5.468-.767-7.066-1.202-.988-2.807-1.68-4.632-1.684-.031 0-.062 0-.092 0z" />
      </svg>
    </a>
  );
}
