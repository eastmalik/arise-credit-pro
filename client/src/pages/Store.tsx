/**
 * Pricing Page — Arise Credit Pro
 * Design: Bold Financial Authority — Montserrat headlines, Nunito Sans body
 * Blue (#1d4ed8) + White theme
 * One offer: The Restoration Program (Level 1 of the 7Band map). Prepaid
 * packages were retired per the Sales Tree Coherence Audit.
 */

import { useEffect } from "react";
import { Link } from "wouter";
import ClientPortalCTA from "@/components/ClientPortalCTA";
import FamilyFooter, { FLOW_URL } from "@/components/FamilyFooter";

const VIDEO_ID = "7FGtyAsvLH0";

// Enrollment starts with the free consultation until the bill-after-the-work
// enrollment page exists. The old Authorize.net link charged $120 upfront.
const CONSULTATION_URL = "https://api.leadconnectorhq.com/widget/form/scRngtj3OIHcuu6Y01XY";

// $27 do-it-yourself guide: GoHighLevel payment link (charges through the
// connected Authorize.net account; the "$27 Guide" workflow delivers the PDF by
// email). If this is emptied, the button falls back to "Coming soon".
const GUIDE_CHECKOUT_URL = "https://link.fastpaydirect.com/payment-link/6ac295eac0e70c7fefb72625";

const guideContents = [
  "Your rights under credit reporting law, in plain English",
  "How to get all three reports free, every week",
  "A line-by-line report audit and the 20 errors worth finding",
  "8 fill-in-the-blank dispute letters for every common situation",
  "What to do when an error stays, step by step",
  "A 90-day plan, dispute tracker and scam warning signs",
];

const program = {
  title: "The Restoration Program",
  price: "$120",
  period: "/mo",
  description: "Done-for-you credit restoration, month to month. Cancel anytime.",
  url: CONSULTATION_URL,
  cta: "Book Your Free Consultation",
  features: [
    "Credit Restoration Services (Done For You)",
    "Up to 30 Dispute Items — All 3 Bureaus",
    "Professional Dispute Letters & Submissions",
    "AI Dispute Automation System",
    "Credit Restoration eBook",
  ],
};

export default function Store() {
  // Links like /store#guide land at the top because the page renders after
  // the browser looks for the anchor, so scroll to it once mounted.
  useEffect(() => {
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
    }
  }, []);

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "Nunito Sans, sans-serif" }}
    >
      {/* ── Sticky Nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>AC</span>
            </div>
            <div>
              <span className="font-black text-blue-950 text-base leading-none block" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Arise Credit
              </span>
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">PRO</span>
            </div>
          </Link>
          <Link href="/" className="text-sm font-bold text-slate-600 hover:text-blue-700 transition-colors" style={{ fontFamily: "Montserrat, sans-serif" }}>
            ← Back to Home
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
            className="text-lg text-blue-100 font-bold"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            My Story. My Proof. My Why.
          </p>
        </div>
      </section>

      {/* ── Video Section ── */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <p
            className="text-center text-slate-700 text-lg leading-relaxed mb-8 max-w-xl mx-auto"
          >
            I sat down with the credit service that helped me rebuild my life — and we put it all on camera. No script. No filters. Just the truth about where I was, what I did, and how I got out.{" "}
            <span className="font-black text-blue-700">Watch this before you scroll one inch further.</span>
          </p>
          <div
            className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl bg-blue-950"
            style={{ maxWidth: "360px", aspectRatio: "9/16" }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&playsinline=1`}
              title="Arise Credit Pro Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </section>

      {/* ── Pricing Section ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-4">
            <div className="inline-block bg-blue-100 text-blue-700 text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Level 1 — The Credit Shield
            </div>
            <h2
              className="text-3xl sm:text-4xl font-black text-blue-950 mb-3"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              One Program. One Price.
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              No packages, no prepaying months in advance. Here is exactly what it costs.
            </p>
          </div>

          {/* Program card */}
          <div className="mt-12 mx-auto max-w-md border border-blue-100 rounded-2xl overflow-hidden shadow-xl bg-white text-slate-800 flex flex-col">
            <div className="px-6 pt-8 pb-6 text-center border-b border-blue-100">
              <h3
                className="text-xl font-black text-blue-950 mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {program.title}
              </h3>
              <div className="flex items-end justify-center gap-0.5 mb-1">
                <span
                  className="text-5xl font-black leading-none text-blue-950"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {program.price}
                </span>
                <span className="text-base font-bold mb-1 text-slate-400">{program.period}</span>
              </div>
              <p className="text-sm mt-3 leading-snug text-slate-500">{program.description}</p>
            </div>

            <div className="px-6 py-6 flex-1">
              <ul className="space-y-3">
                {program.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-blue-100">
                      <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Required third-party cost */}
            <div className="mx-6 mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-slate-700">
              <p className="font-black text-slate-900 mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Also required: IdentityIQ — 7-day trial for $1, then $32.86/mo
              </p>
              <p>
                We work from your IdentityIQ credit reports, so an active IdentityIQ account is required while you are in the program. IdentityIQ bills you directly; it is not part of the $120.
              </p>
              <p className="mt-2">
                Your total monthly cost after the trial: <strong>$152.86</strong> ($120 to Arise Credit Pro + $32.86 to IdentityIQ).
              </p>
            </div>

            <div className="px-6 pb-8 pt-2 border-t border-blue-100">
              <a
                href={program.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center font-black text-base py-4 rounded-xl transition-all duration-300 shadow-md bg-blue-700 text-white hover:bg-blue-800"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {program.cta}
              </a>
              <p className="mt-3 text-center text-xs text-slate-500">
                Enrollment starts with a free consultation. Nothing is charged when you book.
              </p>
            </div>
          </div>

          {/* Do-it-yourself guide */}
          <div
            id="guide"
            className="mt-12 mx-auto max-w-3xl rounded-2xl border border-blue-100 bg-slate-50 p-6 sm:p-8 scroll-mt-24"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="sm:w-1/3 text-center sm:text-left">
                <div className="inline-block bg-blue-100 text-blue-700 text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                  Prefer to do it yourself?
                </div>
                <h3
                  className="text-2xl font-black text-blue-950 mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Fix Your File
                </h3>
                <p className="text-slate-500 text-sm mb-3">The do-it-yourself credit report guide (26 pages)</p>
                <div className="flex items-end justify-center sm:justify-start gap-1">
                  <span className="text-4xl font-black text-blue-950" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    $27
                  </span>
                  <span className="text-sm font-bold text-slate-400 mb-1">one time</span>
                </div>
              </div>
              <div className="sm:w-2/3">
                <ul className="space-y-2 mb-5">
                  {guideContents.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                {GUIDE_CHECKOUT_URL ? (
                  <a
                    href={GUIDE_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center font-black text-sm py-3.5 rounded-xl bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Get the Guide — $27
                  </a>
                ) : (
                  <span
                    className="block w-full text-center font-black text-sm py-3.5 rounded-xl bg-slate-200 text-slate-500"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Coming soon
                  </span>
                )}
                <p className="mt-3 text-xs text-slate-500">
                  An educational guide, not legal advice. No score or result is promised. You can dispute errors on your credit reports yourself, for free; this guide shows you how.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-slate-600">
            Credit already strong?{" "}
            <a href={FLOW_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:underline">
              Join THE FLOW
            </a>
            , our free weekly webinar.
          </p>

          {/* Bottom trust line */}
          <div className="mt-10 text-center">
            <p className="text-slate-400 text-sm">
              Questions?{" "}
              <a href="/#booking" className="text-blue-600 font-bold hover:underline">Book a free call</a>
            </p>
          </div>
        </div>
      </section>

      <ClientPortalCTA />

      {/* ── Footer ── */}
      <footer className="py-10 px-4 bg-blue-950 text-center">
        <Link href="/" className="inline-flex items-center gap-2 mb-4">
          <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
            <span className="text-white font-black text-xs" style={{ fontFamily: "Montserrat, sans-serif" }}>AC</span>
          </div>
          <span className="text-white font-black text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>Arise Credit Pro</span>
        </Link>
        <p className="text-blue-400 text-xs">
          © {new Date().getFullYear()} Arise Credit Pro. All rights reserved.
        </p>
      </footer>
      <FamilyFooter />
    </div>
  );
}
