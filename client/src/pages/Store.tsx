/**
 * Pricing Page — Arise Credit Pro
 * Design: Bold Financial Authority — Montserrat headlines, Nunito Sans body
 * Blue (#1d4ed8) + Gold accent for premium tier, side-by-side package comparison
 *
 * Package 1 — Credit Repair Only: $99/mo or $330 one-time
 * Package 2 — Bronze (Credit Repair + Funding): $750 one-time
 */

import { useState } from "react";
import { Link } from "wouter";

const VIDEO_ID = "7FGtyAsvLH0";

const MONTHLY_URL =
  "https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx?LinkId=51031108-39b4-4d74-b05c-5c4402f8e523";
const ONETIME_URL =
  "https://simplecheckout.authorize.net/payment/CatalogPayment.aspx?LinkId=6d566ebe-64ac-44f5-8afb-7c3fa6b9a1e4";
// $750 Bronze Package link — to be updated once Authorize.net link is created
const BRONZE_URL = "#";

const BRONZE_FLYER = "/manus-storage/TheFlow_Bronze_Flyer_Final_90103dc1.webp";

export default function Store() {
  const [billing, setBilling] = useState<"monthly" | "onetime">("monthly");
  const isMonthly = billing === "monthly";

  const creditRepairItems = [
    "Credit Repair Services (Done For You)",
    "Up to 30 Dispute Items — All 3 Bureaus",
    "Professional Dispute Letters & Submissions",
    "AI Dispute Automation System",
    "Report Rent / Mortgage History to Credit Report",
    "Credit Building Action Plan",
    "Credit Monitoring App",
    "Credit Restoration eBook",
    "Basic Support",
  ];

  const bronzeItems = [
    "Everything in Credit Repair Package",
    "Correctly Structure Your LLC Step by Step",
    "Business & Personal Funding Access",
    "Access to Capital / Line of Credit",
    "Grants Research & Guidance",
    "Credit Building Action Plan",
    "Priority Support",
  ];

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
            className="text-lg text-blue-100 font-bold mb-2"
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
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            I sat down with the credit service that helped me rebuild my life — and we put it all on camera. No script. No filters. Just the truth about where I was, what I did, and how I got out.{" "}
            <span className="font-black text-blue-700">Watch this before you scroll one inch further.</span>
          </p>

          {/* YouTube embed — portrait aspect for Shorts */}
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

      {/* ── The Flow — 3-step journey ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-center text-2xl sm:text-3xl font-black text-blue-950 mb-10"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            The Path to Financial Freedom
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
            {[
              { step: "01", title: "Build Your Personal Credit Profile", icon: "📊" },
              { step: "02", title: "Correctly Structure Your LLC for Max Funding", icon: "🏛️" },
              { step: "03", title: "Access Capital — Line of Credit & Grants", icon: "💰" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center">
                <div className="flex flex-col items-center text-center px-6 py-6 bg-gradient-to-b from-blue-50 to-white rounded-2xl border border-blue-100 shadow-sm w-52">
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <span className="text-xs font-black text-blue-400 tracking-widest uppercase mb-1">Step {item.step}</span>
                  <p className="text-sm font-black text-blue-950 leading-snug" style={{ fontFamily: "Montserrat, sans-serif" }}>{item.title}</p>
                </div>
                {i < 2 && (
                  <div className="flex items-center justify-center my-2 sm:my-0 sm:mx-1">
                    <svg className="w-6 h-6 text-blue-400 rotate-90 sm:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Section ── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-block bg-red-100 text-red-600 text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              🔥 Choose Your Path — Limited Time Pricing
            </div>
            <h2
              className="text-3xl sm:text-4xl font-black text-blue-950 mb-3"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Two Packages. One Goal.
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Whether you're starting with credit repair or ready to go all the way to funding — we have a path built for you.
            </p>
          </div>

          {/* Side-by-Side Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* ── Card 1: Credit Repair Only ── */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100 flex flex-col">
              {/* Card Header */}
              <div
                className="px-8 pt-8 pb-6 text-center"
                style={{ background: "linear-gradient(135deg, #0f172a, #1d4ed8)" }}
              >
                <div className="inline-block bg-blue-500/30 text-blue-100 text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                  Credit Repair
                </div>
                <h3
                  className="text-2xl font-black text-white mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Foundation Package
                </h3>
                <p className="text-blue-300 text-sm mb-5">For those ready to repair and rebuild their credit</p>

                {/* Savings bar */}
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-blue-300 text-sm font-semibold line-through">Original: $330</span>
                  <span className="bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded-full">70% OFF</span>
                </div>
                <p className="text-green-400 text-sm font-black mb-5">You save $231 today 🎉</p>

                {/* Toggle */}
                <div className="inline-flex bg-white/10 rounded-2xl p-1 mb-5">
                  <button
                    onClick={() => setBilling("monthly")}
                    className={`px-5 py-2 rounded-xl text-sm font-black transition-all duration-200 ${
                      isMonthly ? "bg-white text-blue-700 shadow-md" : "text-blue-200 hover:text-white"
                    }`}
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBilling("onetime")}
                    className={`px-5 py-2 rounded-xl text-sm font-black transition-all duration-200 ${
                      !isMonthly ? "bg-white text-blue-700 shadow-md" : "text-blue-200 hover:text-white"
                    }`}
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    One-Time
                  </button>
                </div>

                {/* Price */}
                <div className="transition-all duration-300">
                  <div className="flex items-end justify-center gap-1">
                    <span
                      className="text-6xl font-black text-white leading-none"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {isMonthly ? "$99" : "$330"}
                    </span>
                    {isMonthly && <span className="text-blue-300 text-lg font-bold mb-1">/mo</span>}
                  </div>
                  <p className="text-blue-200 text-sm mt-2 font-semibold">
                    {isMonthly ? "Cancel anytime." : "One-time payment. Full access. No recurring charges."}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="px-6 py-6 flex-1">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">What's Included</p>
                <ul className="space-y-3">
                  {creditRepairItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-6 pb-8 text-center">
                <a
                  href={isMonthly ? MONTHLY_URL : ONETIME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-700 hover:bg-blue-800 text-white font-black text-lg py-5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-blue-200 hover:shadow-xl"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {isMonthly ? "Get Started — $99/mo →" : "Get Started — $330 One-Time →"}
                </a>
                <p className="text-slate-400 text-xs mt-3">
                  {isMonthly ? "Cancel anytime. Free credit analysis included." : "Secure one-time payment. Instant access."}
                </p>
              </div>
            </div>

            {/* ── Card 2: Bronze Package (Credit Repair + Funding) ── */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-yellow-400 flex flex-col relative">
              {/* Most Popular Badge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div
                  className="px-5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase text-white shadow-lg"
                  style={{ background: "linear-gradient(90deg, #b45309, #d97706, #f59e0b)" }}
                >
                  ⚡ Best Value
                </div>
              </div>

              {/* Card Header */}
              <div
                className="px-8 pt-10 pb-6 text-center"
                style={{ background: "linear-gradient(135deg, #1c1917, #292524, #44403c)" }}
              >
                <div className="inline-block border border-yellow-400/60 text-yellow-300 text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                  Credit Repair + Funding
                </div>
                <h3
                  className="text-2xl font-black text-white mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Bronze Package
                </h3>
                <p className="text-yellow-200/70 text-sm mb-5">For those ready to repair credit AND access capital</p>

                {/* Bronze Flyer Image */}
                <div className="mx-auto mb-5 rounded-xl overflow-hidden shadow-lg" style={{ maxWidth: "220px" }}>
                  <img
                    src={BRONZE_FLYER}
                    alt="Bronze Package"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Price */}
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span
                    className="text-6xl font-black text-white leading-none"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    $750
                  </span>
                </div>
                <p className="text-yellow-300 text-sm font-black">One-Time Investment</p>
                <p className="text-stone-400 text-xs mt-1">Full access. No recurring charges.</p>
              </div>

              {/* Items */}
              <div className="px-6 py-6 flex-1">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">What's Included</p>
                <ul className="space-y-3">
                  {bronzeItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "linear-gradient(135deg, #b45309, #d97706)" }}
                      >
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Divider callout */}
                <div className="mt-6 p-4 rounded-2xl border border-yellow-200 bg-yellow-50">
                  <p className="text-xs font-black text-yellow-700 uppercase tracking-widest mb-1">The Full Journey</p>
                  <p className="text-sm text-yellow-800 font-semibold leading-relaxed">
                    Build your credit → Structure your LLC → Access business & personal funding. This is the complete path.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 pb-8 text-center">
                <a
                  href={BRONZE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-white font-black text-lg py-5 rounded-2xl transition-all duration-300 shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #b45309, #d97706, #f59e0b)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Get the Bronze Package — $750 →
                </a>
                <p className="text-slate-400 text-xs mt-3">Secure one-time payment. Full access. Priority support.</p>
              </div>
            </div>

          </div>

          {/* Bottom trust line */}
          <div className="mt-12 text-center">
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
