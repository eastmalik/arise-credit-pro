/**
 * Current Client Portal CTA — Arise Credit Pro
 * Design: Bold Financial Authority — blue and white, Montserrat headings
 * Update CLIENT_PORTAL_URL when Emperor provides the destination.
 */

const CLIENT_PORTAL_URL = "";

export default function ClientPortalCTA() {
  const isPlaceholder = !CLIENT_PORTAL_URL;

  return (
    <section
      id="client-portal"
      className="border-y border-slate-100 bg-slate-50 px-4 py-16 sm:py-20"
      aria-labelledby="client-portal-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p
          className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-blue-700"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Arise Credit Pro Clients
        </p>
        <h2
          id="client-portal-heading"
          className="mb-4 text-3xl font-black text-slate-900 sm:text-4xl"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Current Client?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Access your account and track your credit restoration progress in real time.
        </p>
        <a
          href={CLIENT_PORTAL_URL || "#client-portal"}
          onClick={(event) => {
            if (isPlaceholder) event.preventDefault();
          }}
          aria-disabled={isPlaceholder}
          title={isPlaceholder ? "Client portal link coming soon" : "Open Client Login Portal"}
          className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-8 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition-colors hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Client Login Portal
        </a>
        {isPlaceholder && (
          <p className="mt-3 text-xs text-slate-400">Portal link coming soon.</p>
        )}
      </div>
    </section>
  );
}
