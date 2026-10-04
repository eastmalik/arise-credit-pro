/**
 * Thank-You Page — Arise Credit Pro
 * Where the GoHighLevel consultation calendar sends people after booking
 * (calendar confirmation "Redirect URL": https://www.arisecreditpro.com/thank-you).
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { CalendarCheck, Mail, PhoneCall } from "lucide-react";
import FamilyFooter, { FLOW_URL } from "@/components/FamilyFooter";

const steps = [
  {
    icon: Mail,
    title: "Check your email",
    desc: "Your confirmation is on its way. If you don't see it in a few minutes, check your spam or promotions folder.",
  },
  {
    icon: CalendarCheck,
    title: "Mark your calendar",
    desc: "Set aside the full 30 minutes in a quiet spot. If something comes up, use the link in your confirmation email to reschedule.",
  },
  {
    icon: PhoneCall,
    title: "On the call",
    desc: "We'll go over where your credit stands, what's holding it back, and whether the Restoration Program is the right fit. No pressure, no obligation.",
  },
];

export default function ThankYou() {
  // Keep this page out of search results; it only makes sense after booking.
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
      {/* ── Nav ── */}
      <header className="bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/manus-storage/logo_icon_6cc3acb5.png"
              alt="Arise Credit Pro"
              className="w-9 h-9 rounded-full"
            />
            <span className="font-black text-blue-950 text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Arise Credit Pro
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-bold text-slate-600 hover:text-blue-700 transition-colors"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section
        className="px-4 py-20 text-center"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 60%, #3b82f6 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/15 mb-6">
            <CalendarCheck className="h-8 w-8 text-white" />
          </div>
          <h1
            className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            You're Booked!
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            Thank you for scheduling your free credit consultation. Taking this step matters, and we look forward to speaking with you.
          </p>
        </div>
      </section>

      {/* ── Next steps ── */}
      <section className="px-4 py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-black text-blue-950 text-center mb-10"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            What Happens Next
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {steps.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                  <Icon className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="font-black text-blue-950 mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── While you wait ── */}
      <section className="px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl font-black text-blue-950 mb-3"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            While You Wait
          </h2>
          <p className="text-slate-600 mb-8">
            Get familiar with your options, or grab a free guide before we talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/store"
              className="inline-flex items-center justify-center bg-blue-700 text-white font-black px-7 py-3.5 rounded-full text-sm hover:bg-blue-800 transition-colors shadow-md"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              See Pricing
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-700 font-black px-7 py-3 rounded-full text-sm hover:bg-blue-50 transition-colors"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Free Resources
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Want the bigger picture?{" "}
            <a href={FLOW_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:underline">
              Join THE FLOW
            </a>
            , our free weekly webinar.
          </p>
        </div>
      </section>

      <footer className="py-8 px-4 bg-blue-950 text-center">
        <p className="text-blue-400 text-xs">© {new Date().getFullYear()} Arise Credit Pro. All rights reserved.</p>
      </footer>
      <FamilyFooter />
    </div>
  );
}
