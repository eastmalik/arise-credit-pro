/**
 * Resources Page — Arise Credit Pro
 * Design: Bold Financial Authority — Montserrat headlines, Nunito Sans body
 * Blue (#1d4ed8) + White theme
 *
 * Download behavior: PDFs are available immediately without a form gate.
 */

import { useState } from "react";
import { Link } from "wouter";
import ClientPortalCTA from "@/components/ClientPortalCTA";

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  icon: string;
  fileUrl: string;
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

export default function Resources() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  async function handleDownload(resource: Resource) {
    setDownloadingId(resource.id);
    setDownloadError(null);

    try {
      const response = await fetch(resource.fileUrl);
      if (!response.ok) throw new Error("The file could not be downloaded.");

      const file = await response.blob();
      const objectUrl = URL.createObjectURL(file);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = resource.fileUrl.split("/").pop() || `${resource.id}.pdf`;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(objectUrl);
    } catch {
      setDownloadError("We could not start that download. Please try again.");
    } finally {
      setDownloadingId(null);
    }
  }

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
            Tools, guides, and references to help you take control of your credit — completely free. Download any guide instantly.
          </p>
        </div>
      </section>

      {/* ── Resource Cards ── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <article
                key={resource.id}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="px-7 pt-7 pb-5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl" aria-hidden="true">{resource.icon}</div>
                    <span className={`text-xs font-black px-3 py-1 rounded-full ${resource.categoryColor}`}>
                      {resource.category}
                    </span>
                  </div>
                  <h2
                    className="text-lg font-black text-blue-950 mb-2 leading-snug"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {resource.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </div>

                <div className="px-7 pb-7">
                  <button
                    type="button"
                    onClick={() => handleDownload(resource)}
                    disabled={downloadingId === resource.id}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-black text-sm py-3.5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-200"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {downloadingId === resource.id ? "Preparing Download..." : "Download Free PDF"}
                  </button>
                </div>
              </article>
            ))}
          </div>

          {downloadError && (
            <p className="mt-6 text-center text-sm font-semibold text-red-600" role="alert">
              {downloadError}
            </p>
          )}

          <p className="text-center text-slate-400 text-sm mt-10">
            More resources coming soon. Check back regularly.
          </p>
        </div>
      </section>

      <ClientPortalCTA />

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
