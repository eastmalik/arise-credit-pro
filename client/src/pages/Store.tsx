/**
 * Store Page — Arise Credit Pro
 * Design: Bold Financial Authority — Montserrat headlines, Nunito Sans body
 * Blue (#1d4ed8) + White theme, asymmetric sections, premium feel
 *
 * Video Gate: Foundation Package is blurred until the YouTube video is watched
 * all the way through. Uses YouTube IFrame API onStateChange (state === 0 = ended).
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

// Extend Window to include YT IFrame API globals
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const VIDEO_ID = "7FGtyAsvLH0";

export default function Store() {
  const MONTHLY_URL =
    "https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx?LinkId=51031108-39b4-4d74-b05c-5c4402f8e523";
  const ONETIME_URL =
    "https://simplecheckout.authorize.net/payment/CatalogPayment.aspx?LinkId=6d566ebe-64ac-44f5-8afb-7c3fa6b9a1e4";

  const [billing, setBilling] = useState<"monthly" | "onetime">("monthly");
  const [videoWatched, setVideoWatched] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load YouTube IFrame API once
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      initPlayer();
      return;
    }

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    return () => {
      window.onYouTubeIframeAPIReady = () => {};
    };
  }, []);

  function initPlayer() {
    if (playerRef.current) return; // already initialised
    playerRef.current = new window.YT.Player("yt-player", {
      videoId: VIDEO_ID,
      playerVars: {
        rel: 0,
        modestbranding: 1,
        playsinline: 1,
      },
      events: {
        onReady: () => setPlayerReady(true),
        onStateChange: (e: any) => {
          // state 0 = ended
          if (e.data === 0) {
            setVideoWatched(true);
          }
        },
      },
    });
  }

  const isMonthly = billing === "monthly";
  const originalPrice = 330;
  const monthlyPrice = 99;
  const oneTimePrice = 330;
  const savings = Math.round(originalPrice * 0.7);

  const packageItems = [
    { item: "Up to 30 Dispute Items for 3 Credit Bureaus" },
    { item: "Professional Dispute Letters & Bureau Submissions" },
    { item: "AI Dispute Automation (Done-for-You System)" },
    { item: "Credit Monitoring App" },
    { item: "Basic Support" },
    { item: "Credit Restoration eBook" },
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
            ref={containerRef}
            className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl bg-blue-950"
            style={{ maxWidth: "360px", aspectRatio: "9/16" }}
          >
            <div id="yt-player" className="w-full h-full" />
          </div>

          {/* Watch prompt — shown until video ends */}
          {!videoWatched && playerReady && (
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <p className="text-blue-700 font-black text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Watch the full video to unlock the offer below
              </p>
            </div>
          )}

          {/* Unlocked confirmation */}
          {videoWatched && (
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <p className="text-green-600 font-black text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Offer unlocked — scroll down to get started!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Foundation Package (gated behind video) ── */}
      <section className="py-20 px-4 bg-white relative">
        {/* Blur + lock overlay — removed once video watched */}
        {!videoWatched && (
          <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center"
            style={{
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              background: "rgba(255,255,255,0.55)",
            }}
          >
            <div className="bg-blue-950 text-white rounded-3xl px-8 py-8 max-w-sm mx-4 text-center shadow-2xl border border-blue-800">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3
                className="text-xl font-black text-white mb-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Offer Locked
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Watch Malik's full story above to unlock the Foundation Package offer.
              </p>
              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-300 text-xs font-bold">Scroll up and press play</span>
              </div>
            </div>
          </div>
        )}

        <div className={`max-w-3xl mx-auto transition-all duration-700 ${!videoWatched ? "pointer-events-none select-none" : ""}`}>
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

            {/* ── Pricing Summary Bar ── */}
            <div
              className="px-8 pt-8 pb-6 text-center"
              style={{ background: "linear-gradient(135deg, #0f172a, #1d4ed8)" }}
            >
              {/* Original price + savings */}
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-blue-300 text-sm font-semibold line-through">
                  Original Price: ${originalPrice}
                </span>
                <span className="bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded-full">
                  70% OFF
                </span>
              </div>
              <p className="text-green-400 text-sm font-black mb-5">
                You save ${savings} today 🎉
              </p>

              {/* Toggle */}
              <div className="inline-flex bg-white/10 rounded-2xl p-1 mb-6">
                <button
                  onClick={() => setBilling("monthly")}
                  className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all duration-200 ${
                    isMonthly
                      ? "bg-white text-blue-700 shadow-md"
                      : "text-blue-200 hover:text-white"
                  }`}
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBilling("onetime")}
                  className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all duration-200 ${
                    !isMonthly
                      ? "bg-white text-blue-700 shadow-md"
                      : "text-blue-200 hover:text-white"
                  }`}
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  One-Time
                </button>
              </div>

              {/* Price display */}
              <div className="transition-all duration-300">
                <div className="flex items-end justify-center gap-1">
                  <span
                    className="text-6xl font-black text-white leading-none"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    ${isMonthly ? monthlyPrice : oneTimePrice}
                  </span>
                  {isMonthly && (
                    <span className="text-blue-300 text-lg font-bold mb-1">/mo</span>
                  )}
                </div>
                <p className="text-blue-200 text-sm mt-3 font-semibold">
                  {isMonthly
                    ? "Cancel anytime."
                    : "One-time payment. Full access. No recurring charges."}
                </p>
              </div>
            </div>

            {/* Items Table */}
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
                    <tr key={i} className="border-b border-slate-50 last:border-0">
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
              </table>
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
                {isMonthly
                  ? "Get Started — $99/mo →"
                  : "Get Started — $330 One-Time →"}
              </a>
              <p className="text-slate-400 text-xs mt-3">
                {isMonthly
                  ? "Cancel anytime. Free credit analysis included."
                  : "One-time payment. Full access. No recurring charges."}
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
        <Link href="/" className="text-blue-400 hover:text-white text-sm font-bold mt-2 inline-block transition-colors">
          ← Back to Home
        </Link>
      </footer>
    </div>
  );
}
