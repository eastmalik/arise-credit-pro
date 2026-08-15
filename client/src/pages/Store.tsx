/**
 * Pricing Page — Arise Credit Pro
 * Design: Bold Financial Authority — Montserrat headlines, Nunito Sans body
 * Blue (#1d4ed8) + White theme, three-column package comparison
 * All three options are Tier 1 / Bronze Package price points
 */

import { Link } from "wouter";

const VIDEO_ID = "7FGtyAsvLH0";

const MONTHLY_URL =
  "https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx?LinkId=51031108-39b4-4d74-b05c-5c4402f8e523";
const ONETIME_URL =
  "https://simplecheckout.authorize.net/payment/CatalogPayment.aspx?LinkId=6d566ebe-64ac-44f5-8afb-7c3fa6b9a1e4";
const BRONZE_URL =
  "https://simplecheckout.authorize.net/payment/CatalogPayment.aspx?LinkId=60615327-8e20-4014-814c-517f1d233816";

type Feature = { text: string; included: boolean };

interface PricingOption {
  label: string;
  title: string;
  price: string;
  period: string;
  description: string;
  highlight: boolean;
  badge?: string;
  url: string;
  cta: string;
  features: Feature[];
}

const options: PricingOption[] = [
  {
    label: "",
    title: "Monthly Plan",
    price: "$120",
    period: "/mo",
    description: "Credit restoration on a flexible monthly basis. Cancel anytime.",
    highlight: false,
    badge: "Most Popular",
    url: MONTHLY_URL,
    cta: "Get Started — $120/mo",
    features: [
      { text: "Credit Restoration Services (Done For You)", included: true },
      { text: "Up to 30 Dispute Items — All 3 Bureaus", included: true },
      { text: "Professional Dispute Letters & Submissions", included: true },
      { text: "AI Dispute Automation System", included: true },
      { text: "Credit Monitoring App", included: true },
      { text: "Credit Restoration eBook", included: true },
      { text: "Report Rent / Mortgage to Credit Report", included: false },
      { text: "LLC Structure Step by Step", included: false },
      { text: "Business & Personal Funding Access", included: false },
    ],
  },
  {
    label: "",
    title: "One-Time Payment",
    price: "$350",
    period: "",
    description: "Full credit restoration access. One payment, no recurring charges.",
    highlight: true,
    badge: "Best Value",
    url: ONETIME_URL,
    cta: "Get Started — $350",
    features: [
      { text: "Credit Restoration Services (Done For You)", included: true },
      { text: "Up to 30 Dispute Items — All 3 Bureaus", included: true },
      { text: "Professional Dispute Letters & Submissions", included: true },
      { text: "AI Dispute Automation System", included: true },
      { text: "Credit Monitoring App", included: true },
      { text: "Credit Restoration eBook", included: true },
      { text: "Report Rent / Mortgage to Credit Report", included: true },
      { text: "LLC Structure Step by Step", included: false },
      { text: "Business & Personal Funding Access", included: false },
    ],
  },
  {
    label: "",
    title: "Credit Restoration + Funding",
    price: "$600",
    period: "",
    description: "The complete path — credit restoration AND business funding access.",
    highlight: false,
    url: BRONZE_URL,
    cta: "Get Started — $600",
    features: [
      { text: "Credit Restoration Services (Done For You)", included: true },
      { text: "Up to 30 Dispute Items — All 3 Bureaus", included: true },
      { text: "Professional Dispute Letters & Submissions", included: true },
      { text: "AI Dispute Automation System", included: true },
      { text: "Credit Monitoring App", included: true },
      { text: "Credit Restoration eBook", included: true },
      { text: "Report Rent / Mortgage to Credit Report", included: true },
      { text: "LLC Structure Step by Step", included: true },
      { text: "Business & Personal Funding Access", included: true },
    ],
  },
];

export default function Store() {
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
              Tier 1 — Bronze Package
            </div>
            <h2
              className="text-3xl sm:text-4xl font-black text-blue-950 mb-3"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Product Price Package List
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Choose the option that fits where you are right now. All three paths lead to the same destination — financial freedom.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 items-stretch mt-12 border border-blue-100 rounded-2xl overflow-hidden shadow-xl">
            {options.map((opt, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  opt.highlight
                    ? "bg-blue-700 text-white"
                    : "bg-white text-slate-800"
                } ${idx === 1 ? "md:scale-[1.02] md:z-10 md:shadow-2xl" : ""} relative`}
              >
                {/* Column Header */}
                <div
                  className={`px-6 pt-8 pb-6 text-center border-b ${
                    opt.highlight ? "border-blue-500" : "border-blue-100"
                  }`}
                >
                  {/* Badge */}
                  {opt.badge && (
                    <div className={`inline-block text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full mb-3 ${
                      opt.highlight
                        ? "bg-white/20 text-white"
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {opt.badge}
                    </div>
                  )}
                  {!opt.badge && <div className="h-7 mb-3" />}

                  {/* Option Label — hidden when empty */}
                  {opt.label && (
                    <div
                      className={`inline-block font-black text-xs tracking-widest uppercase px-4 py-1.5 rounded mb-3 ${
                        opt.highlight ? "bg-white text-blue-700" : "bg-blue-700 text-white"
                      }`}
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {opt.label}
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-end justify-center gap-0.5 mb-1">
                    <span
                      className={`text-5xl font-black leading-none ${opt.highlight ? "text-white" : "text-blue-950"}`}
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {opt.price}
                    </span>
                    {opt.period && (
                      <span className={`text-base font-bold mb-1 ${opt.highlight ? "text-blue-200" : "text-slate-400"}`}>
                        {opt.period}
                      </span>
                    )}
                  </div>

                  <p className={`text-sm mt-3 leading-snug ${opt.highlight ? "text-blue-100" : "text-slate-500"}`}>
                    {opt.description}
                  </p>
                </div>

                {/* Feature List */}
                <div className="px-6 py-6 flex-1">
                  <ul className="space-y-3">
                    {opt.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        {feat.included ? (
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            opt.highlight ? "bg-white/20" : "bg-blue-100"
                          }`}>
                            <svg className={`w-3 h-3 ${opt.highlight ? "text-white" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            opt.highlight ? "bg-white/10" : "bg-slate-100"
                          }`}>
                            <svg className={`w-3 h-3 ${opt.highlight ? "text-blue-300" : "text-slate-300"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        )}
                        <span className={`text-sm font-semibold ${
                          feat.included
                            ? opt.highlight ? "text-white" : "text-slate-700"
                            : opt.highlight ? "text-blue-300/60" : "text-slate-300"
                        }`}>
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className={`px-6 pb-8 pt-2 border-t ${opt.highlight ? "border-blue-500" : "border-blue-100"}`}>
                  <a
                    href={opt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center font-black text-base py-4 rounded-xl transition-all duration-300 shadow-md ${
                      opt.highlight
                        ? "bg-white text-blue-700 hover:bg-blue-50"
                        : "bg-blue-700 text-white hover:bg-blue-800"
                    }`}
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {opt.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom trust line */}
          <div className="mt-10 text-center">
            <p className="text-slate-400 text-sm">
              🔒 All payments processed securely through Authorize.net &nbsp;·&nbsp; Questions?{" "}
              <a href="/#booking" className="text-blue-600 font-bold hover:underline">Book a free call</a>
            </p>
          </div>
        </div>
      </section>

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
    </div>
  );
}
