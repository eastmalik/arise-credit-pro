/**
 * Store Page — Arise Credit Pro
 * Design: Bold Financial Authority — Montserrat headlines, Nunito Sans body
 * Blue (#1d4ed8) + White theme, asymmetric sections, premium feel
 */

import { Link } from "wouter";

export default function Store() {
  const BOOKING_URL =
    "https://api.leadconnectorhq.com/widget/form/scRngtj3OIHcuu6Y01XY";

  const packageItems = [
    { item: "Up to 30 Dispute Items for 3 Credit Bureaus" },
    { item: "Professional Dispute Letters & Bureau Submissions" },
    { item: "AI Dispute Automation (Done-for-You System)" },
    { item: "Credit Monitoring App" },
    { item: "Basic Support" },
    { item: "Credit Restoration eBook" },
  ];

  const totalValue = "$330";
  const price = "$99/mo";

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "Nunito Sans, sans-serif" }}
    >
      {/* ── Sticky Nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3 cursor-pointer">
              <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>AC</span>
              </div>
              <div>
                <span className="font-black text-blue-950 text-base leading-none block" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Arise Credit
                </span>
                <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">PRO</span>
              </div>
            </a>
          </Link>
          <Link href="/">
            <a className="text-sm font-bold text-slate-600 hover:text-blue-700 transition-colors" style={{ fontFamily: "Montserrat, sans-serif" }}>
              ← Back to Home
            </a>
          </Link>
        </div>
      </header>

      {/* ── Hero Banner ── */}
      <section
        className="pt-32 pb-20 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 60%, #3b82f6 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-blue-500/30 border border-blue-400/40 text-blue-100 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            My Story — Why This Matters
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            I Sat Down. I Got Real.
          </h1>
          <h2
            className="text-xl sm:text-2xl font-bold text-blue-200 mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            This Is the Conversation That Changed Everything.
          </h2>
          <p
            className="text-lg text-blue-100 font-bold mb-2"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            My Story. My Proof. My Why.
          </p>
        </div>
      </section>

      {/* ── Video Section ── */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-center text-slate-700 text-lg leading-relaxed mb-10 max-w-3xl mx-auto"
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            I sat down with the credit service that helped me rebuild my life — and we put it all on camera. No script. No filters. Just the truth about where I was, what I did, and how I got out.{" "}
            <span className="font-black text-blue-700">Watch this before you scroll one inch further.</span>
          </p>

          {/* Video placeholder — replace src with real embed */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-blue-950 aspect-video flex items-center justify-center">
            <div className="text-center px-8">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/30">
                <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white font-bold text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Your Video Goes Here
              </p>
              <p className="text-blue-300 text-sm mt-2">
                Paste your YouTube or Vimeo embed link to activate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Foundation Package ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Package Header */}
          <div className="text-center mb-10">
            <div className="inline-block bg-red-100 text-red-600 text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              🔥 70% OFF — Limited Time Offer
            </div>
            <h2
              className="text-3xl sm:text-4xl font-black text-blue-950 mb-3"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Our Foundation Package
            </h2>
            <p
              className="text-xl font-bold text-slate-600 mb-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Everything You Need. One Price.
            </p>
          </div>

          {/* Package Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100">
            {/* Card Header */}
            <div
              className="px-8 py-6 text-white text-center"
              style={{
                background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
              }}
            >
              <p className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-1">
                What's Included
              </p>
              <p className="text-4xl font-black" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {price}
              </p>
              <p className="text-blue-200 text-sm mt-1">
                Total Value:{" "}
                <span className="line-through text-blue-300">{totalValue}</span>
              </p>
            </div>

            {/* Items Table — Value column hidden, items only */}
            <div className="px-6 py-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left text-xs font-black text-slate-400 uppercase tracking-widest pb-3">
                      What You Get
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {packageItems.map(({ item }, i) => (
                    <tr
                      key={i}
                      className="border-b border-slate-50 last:border-0"
                    >
                      <td className="py-4">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-slate-700 text-sm font-semibold">{item}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-blue-100">
                    <td className="pt-4 pb-2 font-black text-blue-700 text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Your Price Today — {price}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* CTA */}
            <div className="px-6 pb-8 text-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-700 hover:bg-blue-800 text-white font-black text-lg py-5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-blue-200 hover:shadow-xl"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Get Started — $99/mo →
              </a>
              <p className="text-slate-400 text-xs mt-3">
                No contracts. Cancel anytime. Free credit analysis included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer Strip ── */}
      <footer className="py-8 px-4 bg-blue-950 text-center">
        <p className="text-blue-300 text-sm">
          © {new Date().getFullYear()} Arise Credit Pro. All rights reserved.
        </p>
        <Link href="/">
          <a className="text-blue-400 hover:text-white text-sm font-bold mt-2 inline-block transition-colors">
            ← Back to Home
          </a>
        </Link>
      </footer>
    </div>
  );
}
