/**
 * Resources Page — Arise Credit Pro
 * Design: Bold Financial Authority — Montserrat headlines, Nunito Sans body
 * Blue (#1d4ed8) + White theme
 *
 * Gate: Visitors must enter name + email before downloading any resource.
 * Collected data will be sent to GoHighLevel CRM (webhook URL to be added).
 */

import { useState } from "react";
import { Link } from "wouter";

// ── GHL Webhook — replace with real URL when ready ──
const GHL_WEBHOOK_URL = ""; // TODO: paste GoHighLevel webhook URL here

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  icon: string;
  fileUrl: string; // TODO: replace with real uploaded PDF URL
}

const resources: Resource[] = [
  {
    id: "legal-reference-sheet",
    title: "Consumer Law Reference Sheet",
    description:
      "Know your rights. A concise reference covering the FCRA, FDCPA, and ECOA — the federal laws that protect you when disputing credit and dealing with collectors.",
    category: "Consumer Law",
    categoryColor: "bg-purple-100 text-purple-700",
    icon: "⚖️",
    fileUrl: "/manus-storage/legal_reference_sheet_456e0e97.pdf",
  },
  {
    id: "credit-is-access",
    title: "Credit Is Access Guide",
    description:
      "Learn how to leverage your credit score to unlock funding, loans, and financial opportunities most people don't even know exist.",
    category: "Credit Access",
    categoryColor: "bg-green-100 text-green-700",
    icon: "🔑",
    fileUrl: "/manus-storage/CreditIsAccess_AriseCreditPro_7dae5a51.pdf",
  },
  {
    id: "business-startup-guide",
    title: "Business Start-Up Guide",
    description:
      "Everything you need to launch your business the right way — from entity formation to building business credit and accessing capital.",
    category: "Business",
    categoryColor: "bg-blue-100 text-blue-700",
    icon: "🚀",
    fileUrl: "/manus-storage/BusinessStartUpGuide_AriseCreditPro_39a880d8.pdf",
  },
  {
    id: "meta-instagram-ads-lab",
    title: "Meta & Instagram Ads Setup Lab Guide",
    description:
      "A visual, step-by-step lab guide with pictures showing you exactly how to set up and run Meta and Instagram ad campaigns.",
    category: "Marketing",
    categoryColor: "bg-orange-100 text-orange-700",
    icon: "📱",
    fileUrl: "/manus-storage/Meta_Instagram_Ads_MODERN_43d7937c.pdf",
  },
];

interface GateModalProps {
  resource: Resource;
  onClose: () => void;
}

function GateModal({ resource, onClose }: GateModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Please fill in both fields.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      // Send to GHL if webhook is configured
      if (GHL_WEBHOOK_URL) {
        await fetch(GHL_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            resource: resource.title,
            source: "Arise Credit Pro — Resources Page",
          }),
        });
      }
      setSubmitted(true);
    } catch {
      // Still allow download even if webhook fails
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  function handleDownload() {
    if (resource.fileUrl) {
      window.open(resource.fileUrl, "_blank");
    }
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(15,23,42,0.75)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Modal Header */}
        <div
          className="px-8 py-6 text-white"
          style={{ background: "linear-gradient(135deg, #0f172a, #1d4ed8)" }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl">{resource.icon}</span>
            <button
              onClick={onClose}
              className="text-blue-300 hover:text-white transition-colors text-xl leading-none"
            >
              ✕
            </button>
          </div>
          <h3
            className="text-xl font-black text-white leading-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {resource.title}
          </h3>
          <p className="text-blue-200 text-sm mt-1">
            Enter your info below to get instant free access.
          </p>
        </div>

        {/* Modal Body */}
        <div className="px-8 py-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                />
              </div>
              {error && (
                <p className="text-red-500 text-xs font-bold">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-black text-base py-4 rounded-2xl transition-all duration-300 shadow-lg"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {loading ? "Sending..." : "Get Free Access →"}
              </button>
              <p className="text-slate-400 text-xs text-center">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4
                className="text-xl font-black text-blue-950 mb-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                You're all set!
              </h4>
              <p className="text-slate-500 text-sm mb-6">
                Your download is ready. Click below to open the PDF.
              </p>
              {resource.fileUrl ? (
                <button
                  onClick={handleDownload}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-black text-base py-4 rounded-2xl transition-all duration-300 shadow-lg"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Download PDF →
                </button>
              ) : (
                <div className="bg-blue-50 border border-blue-100 rounded-2xl px-6 py-4">
                  <p className="text-blue-700 font-bold text-sm">
                    📬 This resource will be emailed to you shortly.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Resources() {
  const [activeResource, setActiveResource] = useState<Resource | null>(null);

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
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-blue-500/30 border border-blue-400/40 text-blue-100 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Free for Everyone
          </div>
          <h1
            className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Free Resources
          </h1>
          <p className="text-lg text-blue-100 max-w-xl mx-auto leading-relaxed">
            Tools, guides, and references to help you take control of your credit — completely free. No catch.
          </p>
        </div>
      </section>

      {/* ── Resource Cards ── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Card Top */}
                <div className="px-7 pt-7 pb-5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{resource.icon}</div>
                    <span className={`text-xs font-black px-3 py-1 rounded-full ${resource.categoryColor}`}>
                      {resource.category}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-black text-blue-950 mb-2 leading-snug"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {resource.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="px-7 pb-7">
                  <button
                    onClick={() => setActiveResource(resource)}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-black text-sm py-3.5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-md"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Free PDF
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-center text-slate-400 text-sm mt-10">
            More resources coming soon. Check back regularly.
          </p>
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

      {/* ── Gate Modal ── */}
      {activeResource && (
        <GateModal
          resource={activeResource}
          onClose={() => setActiveResource(null)}
        />
      )}
    </div>
  );
}
