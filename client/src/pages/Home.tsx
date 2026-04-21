/*
  ARISE CREDIT PRO — Home Page
  Design: Bold Financial Authority
  Sections: Nav, Hero, Stats, About, Services, Testimonials, Booking CTA, FAQ, Footer
  Colors: Deep Navy hero, Royal Blue CTAs, White/off-white content
  Typography: Montserrat headlines, Nunito Sans body
*/

import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ArrowRight,
  Shield,
  TrendingUp,
  FileSearch,
  AlertCircle,
  CreditCard,
  BookOpen,
  Zap,
  DollarSign,
  Star,
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react";

const TYPEFORM_URL = "https://form.typeform.com/to/YOUR_TYPEFORM_ID";

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-lg shadow-blue-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/manus-storage/logo_icon_6cc3acb5.png"
              alt="Arise Credit Pro Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col leading-tight">
              <span
                className={`font-black text-lg tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-blue-900" : "text-white"
                }`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Arise Credit
              </span>
              <span
                className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${
                  scrolled ? "text-blue-600" : "text-blue-200"
                }`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Pro
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-blue-400 relative group ${
                  scrolled ? "text-slate-700" : "text-white/90"
                }`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href={TYPEFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-3 px-6"
            >
              Book Free Consultation
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-blue-900" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-blue-100 shadow-xl">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-700 font-semibold text-base py-2 border-b border-slate-100"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={TYPEFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/manus-storage/hero_bg_4c30ca62.jpg')" }}
      />
      {/* Deep navy/blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/85 to-blue-800/75" />
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span
              className="text-blue-200 text-xs font-bold tracking-widest uppercase"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Credit Building & Financial Empowerment
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 animate-fade-up delay-100"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Arise Above
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-300">
              Your Credit Score.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-blue-100/90 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl animate-fade-up delay-200">
            Arise Credit Pro helps individuals and families build powerful credit
            profiles, remove negative items, and unlock the financial freedom they
            deserve — starting today.
          </p>

          {/* Trust bullets */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up delay-300">
            {[
              "Negative Items Removed Fast",
              "Score Increases in 30–90 Days",
              "Personalized Strategy",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-300 flex-shrink-0" />
                <span className="text-blue-100 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
            <a
              href={TYPEFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base animate-pulse-glow"
            >
              Book My Free Consultation <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-outline-white text-base">
              See Our Services
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 mt-10 animate-fade-up delay-500">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D"].map((l) => (
                <div
                  key={l}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-blue-900 flex items-center justify-center text-white text-xs font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {l}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-blue-200 text-xs mt-0.5">
                <span className="font-bold text-white">100+</span> credit scores transformed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 0 960 80 720 40C480 0 240 80 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({
  value,
  suffix,
  label,
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  started: boolean;
}) {
  const count = useCountUp(value, 2000, started);
  return (
    <div className="text-center px-6 py-4">
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <div className="text-blue-200 text-sm font-medium mt-1 tracking-wide">
        {label}
      </div>
    </div>
  );
}

function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 100, suffix: "+", label: "Clients Helped" },
    { value: 120, suffix: "pts", label: "Avg Score Increase" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 90, suffix: " Days", label: "To Real Results" },
  ];

  return (
    <section
      ref={ref}
      className="py-12"
      style={{
        background: "linear-gradient(135deg, oklch(0.18 0.08 264), oklch(0.30 0.18 264))",
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-blue-700/40 divide-y lg:divide-y-0">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About / Founder ──────────────────────────────────────────────────────────
function About() {
  const fixes = [
    "Collections & Charge-offs",
    "Late & Missed Payments",
    "Medical Debt",
    "Bankruptcies",
    "Repossessions",
    "Identity Theft Errors",
    "Hard Inquiries",
    "Student Loan Delinquencies",
  ];

  const credentials = [
    "Certified Credit Restoration Specialist",
    "Financial Literacy Coach & Educator",
    "Personalized 1-on-1 Credit Strategy",
    "Transparent, Results-Driven Approach",
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                alt="Malik East — Founder of Arise Credit Pro"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p
                  className="text-white font-black text-xl"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Malik East
                </p>
                <p className="text-blue-200 text-sm font-medium">
                  Founder & Lead Credit Consultant
                </p>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -right-6 top-10 bg-white rounded-xl shadow-xl p-4 border border-blue-100">
              <div
                className="text-3xl font-black text-blue-700"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                800+
              </div>
              <div className="text-slate-500 text-xs font-medium">
                Credit Score Achieved
              </div>
            </div>
            <div className="absolute -left-6 bottom-20 bg-blue-700 rounded-xl shadow-xl p-4">
              <div
                className="text-3xl font-black text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                100+
              </div>
              <div className="text-blue-200 text-xs font-medium">
                Clients Transformed
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <div className="section-label mb-4">Meet the Founder</div>
            <h2
              className="text-4xl lg:text-5xl font-black text-blue-950 mb-2 leading-tight"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Malik East
            </h2>
            <p
              className="text-blue-600 font-semibold text-lg mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Founder & Lead Credit Consultant, Arise Credit Pro
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Malik East founded Arise Credit Pro on one powerful belief: everyone
              deserves a clear, actionable path to financial freedom — regardless of
              where they're starting from. Having personally navigated the credit
              system and achieved an{" "}
              <strong className="text-blue-700">800+ Excellent credit score</strong>,
              Malik built a proven system that has helped over 100 clients remove
              negative items, boost their scores, and unlock real financial
              opportunities.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              His approach is transparent, results-driven, and deeply personal. Every
              client receives a customized strategy built around their unique
              financial situation.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h4
                  className="font-black text-blue-950 mb-3 text-sm uppercase tracking-wider"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  What We Help You Fix
                </h4>
                <ul className="space-y-2">
                  {fixes.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-600 text-sm">
                      <CheckCircle2 size={14} className="text-blue-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4
                  className="font-black text-blue-950 mb-3 text-sm uppercase tracking-wider"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Credentials
                </h4>
                <ul className="space-y-2">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-slate-600 text-sm">
                      <Shield size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={TYPEFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book My Free Consultation <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
const services = [
  {
    icon: FileSearch,
    title: "Credit Report Analysis",
    desc: "We pull and review all three bureaus — Equifax, Experian, and TransUnion — to identify every negative item, error, and opportunity for improvement.",
    tag: "Free initial review",
  },
  {
    icon: AlertCircle,
    title: "Negative Item Disputes",
    desc: "We dispute inaccurate collections, charge-offs, late payments, repossessions, and other derogatory marks directly with the credit bureaus and creditors.",
    tag: "Results in 30–90 days",
  },
  {
    icon: TrendingUp,
    title: "Score Building Strategy",
    desc: "Beyond removal, we create a personalized roadmap to build positive credit history — including secured cards, credit-builder loans, and utilization strategies.",
    tag: "Long-term growth plan",
  },
  {
    icon: Zap,
    title: "Rapid Credit Restoration",
    desc: "For clients with urgent needs — home purchase, car loan, or job application — our expedited process prioritizes the fastest possible score improvements.",
    tag: "Priority processing",
  },
  {
    icon: DollarSign,
    title: "Debt Settlement Guidance",
    desc: "We help you negotiate with creditors to settle outstanding debts for less than you owe, reducing your financial burden and clearing the path to a healthier profile.",
    tag: "Reduce what you owe",
  },
  {
    icon: BookOpen,
    title: "Financial Literacy Coaching",
    desc: "Understanding money is the foundation of lasting financial health. We coach you on budgeting, credit utilization, saving strategies, and building wealth.",
    tag: "Lifetime knowledge",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4">Our Services</div>
          <h2
            className="text-4xl lg:text-5xl font-black text-blue-950 mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Everything You Need to{" "}
            <span className="text-blue-600">Repair & Rebuild</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Our comprehensive credit building services are tailored to your unique
            situation, with real results and full transparency every step of the way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, tag }) => (
            <div
              key={title}
              className="service-card bg-white rounded-xl p-7 shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                <Icon size={22} className="text-blue-600" />
              </div>
              <h3
                className="font-black text-blue-950 text-lg mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full">
                  <CreditCard size={11} />
                  {tag}
                </span>
                <a
                  href={TYPEFORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Get Started <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-500 mb-4">
            Not sure where to start? Let us review your credit report for free.
          </p>
          <a
            href={TYPEFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book My Free Consultation <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    score: "711",
    label: "Very Good",
    points: "+85 pts",
    quote:
      "After trying a few credit companies in the past I was skeptical, but I finally found someone who actually kept their word and delivered real results in such a short time. I appreciate everything Malik has done for me!",
    name: "Verified Client",
    detail: "Score jumped from 626 to 711",
  },
  {
    score: "144",
    label: "Points Gained",
    points: "+144 pts",
    quote:
      "144 points is crazy! I never thought my score could jump that fast. Arise Credit Pro made it happen — I can finally qualify for the things I've been working toward.",
    name: "Verified Client",
    detail: "TransUnion score increase",
  },
  {
    score: "600",
    label: "Score Reached",
    points: "+91 pts in 3 days",
    quote:
      "4 accounts removed and my score jumped 91 points in just a few days. I'm blown away by how fast this worked. Malik is the real deal.",
    name: "Verified Client",
    detail: "4 accounts removed",
  },
  {
    score: "715",
    label: "All 3 Bureaus",
    points: "715 / 707 / 697",
    quote:
      "Tapp in with the wizard — he got my people together fast. Everything from personal to business credit he gone make it shake. All you have to do is trust the process. Credit is King!",
    name: "@livin_legacy0217",
    detail: "All 3 bureaus improved",
  },
];

function Testimonials() {
  return (
    <section id="results" className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4">Real Client Results</div>
          <h2
            className="text-4xl lg:text-5xl font-black text-blue-950 mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Real People.{" "}
            <span className="text-blue-600">Real Results.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            These are real outcomes from real clients. We let the numbers speak for
            themselves.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(({ score, label, points, quote, name, detail }) => (
            <div
              key={score + label}
              className="bg-gradient-to-br from-blue-950 to-blue-800 rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-blue-900/20"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div
                    className="text-4xl font-black text-white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {score}
                  </div>
                  <div className="text-blue-300 text-xs font-semibold">{label}</div>
                </div>
                <span className="bg-blue-500/30 text-blue-200 text-xs font-bold px-2 py-1 rounded-full border border-blue-400/30">
                  {points}
                </span>
              </div>
              <p className="text-blue-100/90 text-sm leading-relaxed flex-1 italic">
                "{quote}"
              </p>
              <div className="border-t border-blue-700/50 pt-3">
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-blue-200 text-xs font-semibold">{name}</p>
                <p className="text-blue-400 text-xs">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="mt-16 rounded-2xl p-10 text-center"
          style={{
            background: "linear-gradient(135deg, oklch(0.18 0.08 264), oklch(0.35 0.18 264))",
          }}
        >
          <h3
            className="text-3xl font-black text-white mb-3"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Ready to write your own success story?
          </h3>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Join hundreds of clients who have transformed their credit and financial
            future with Arise Credit Pro.
          </p>
          <a
            href={TYPEFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base"
          >
            Start Your Credit Restoration Today <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Booking CTA ──────────────────────────────────────────────────────────────
function BookingCTA() {
  const details = [
    { label: "Duration", value: "30 minutes" },
    { label: "Format", value: "Phone / Video" },
    { label: "Availability", value: "Mon – Sat" },
    { label: "Cost", value: "100% Free" },
  ];

  return (
    <section
      id="booking"
      className="py-24"
      style={{
        background: "linear-gradient(135deg, oklch(0.96 0.02 264), oklch(0.98 0.01 230))",
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="section-label mb-4">Schedule a Call</div>
            <h2
              className="text-4xl lg:text-5xl font-black text-blue-950 mb-6 leading-tight"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Ready to Restore
              <br />
              <span className="text-blue-600">Your Credit?</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Book your free 30-minute credit consultation. We'll review your credit
              situation, identify what's hurting your score, and map out a clear path
              to financial recovery — at no cost and no obligation.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                "Free 30-minute credit review & action plan",
                "No obligation, no pressure — just honest guidance",
                "Identify every negative item hurting your score",
                "Walk away knowing exactly what to do next",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={TYPEFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              Book Your Free Consultation <ArrowRight size={18} />
            </a>
            <p className="text-slate-400 text-xs mt-3">
              No credit card required · 100% free · No obligation
            </p>
          </div>

          {/* Right — details card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/10 p-8 border border-blue-100">
            <h3
              className="font-black text-blue-950 text-xl mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Consultation Details
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {details.map(({ label, value }) => (
                <div key={label} className="bg-blue-50 rounded-xl p-4">
                  <div className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                    {label}
                  </div>
                  <div
                    className="text-blue-950 font-black text-lg"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-blue-950 to-blue-800 rounded-xl p-6 text-center">
              <Phone size={28} className="text-blue-300 mx-auto mb-3" />
              <p
                className="text-white font-black text-lg mb-1"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Ready to get started?
              </p>
              <p className="text-blue-200 text-sm mb-4">
                Fill out our quick intake form and we'll reach out to schedule your
                call.
              </p>
              <a
                href={TYPEFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                Fill Out Intake Form <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How long does Credit Restoration take?",
    a: "Most clients begin seeing results within 30–90 days. The timeline depends on the complexity of your credit profile and the types of negative items being disputed. We provide regular updates throughout the process.",
  },
  {
    q: "Can you really remove negative items from my credit report?",
    a: "Yes. We dispute inaccurate, unverifiable, or outdated negative items directly with the three major credit bureaus. While we cannot guarantee removal of every item, our proven process has helped hundreds of clients achieve significant improvements.",
  },
  {
    q: "What does the free consultation include?",
    a: "Your free 30-minute consultation includes a review of your current credit situation, identification of the key items hurting your score, and a personalized action plan — all at no cost and no obligation.",
  },
  {
    q: "How much can my credit score increase?",
    a: "Results vary by individual, but our clients have seen average score increases of 120+ points. Some clients have seen jumps of 144 points or more within a few months.",
  },
  {
    q: "Is Credit Restoration legal?",
    a: "Absolutely. Credit restoration is a fully legal process protected under the Fair Credit Reporting Act (FCRA) and the Credit Repair Organizations Act (CROA). You have the legal right to dispute inaccurate information on your credit report.",
  },
  {
    q: "What information do I need to get started?",
    a: "To get started, you'll need a copy of your credit reports from all three bureaus (Equifax, Experian, TransUnion), a valid government-issued ID, and proof of address. We'll guide you through the entire process.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4">FAQ</div>
          <h2
            className="text-4xl lg:text-5xl font-black text-blue-950 mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Your Questions,{" "}
            <span className="text-blue-600">Answered</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Everything you need to know before we start working together.
          </p>
        </div>

        <div className="space-y-0 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="faq-item">
              <button
                className="w-full flex items-center justify-between px-7 py-5 text-left hover:bg-blue-50/50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="font-bold text-blue-950 text-base pr-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {q}
                </span>
                {open === i ? (
                  <ChevronUp size={18} className="text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown size={18} className="text-slate-400 flex-shrink-0" />
                )}
              </button>
              {open === i && (
                <div className="px-7 pb-5">
                  <p className="text-slate-600 leading-relaxed text-sm">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-500 mb-4">Still have questions? We're here to help.</p>
          <a
            href={TYPEFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book My Free Consultation <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="py-16"
      style={{
        background: "linear-gradient(135deg, oklch(0.14 0.07 264), oklch(0.20 0.12 264))",
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/manus-storage/logo_icon_6cc3acb5.png"
                alt="Arise Credit Pro"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div
                  className="text-white font-black text-lg"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Arise Credit
                </div>
                <div
                  className="text-blue-300 text-xs font-bold tracking-widest uppercase"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Pro
                </div>
              </div>
            </div>
            <p className="text-blue-200/80 text-sm leading-relaxed max-w-xs mb-6">
              Helping individuals and families build powerful credit profiles and
              unlock financial freedom — one score at a time.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-blue-800/50 hover:bg-blue-600 rounded-lg flex items-center justify-center text-blue-300 hover:text-white transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
              <a
                href="mailto:contact@arisecreditpro.com"
                aria-label="Email"
                className="w-9 h-9 bg-blue-800/50 hover:bg-blue-600 rounded-lg flex items-center justify-center text-blue-300 hover:text-white transition-all duration-300"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-black text-sm uppercase tracking-wider mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Services", "Results", "FAQ"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-blue-300 hover:text-white text-sm transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-black text-sm uppercase tracking-wider mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-blue-300 text-sm">
                <Mail size={14} />
                <a
                  href="mailto:contact@arisecreditpro.com"
                  className="hover:text-white transition-colors"
                >
                  contact@arisecreditpro.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-blue-300 text-sm">
                <Phone size={14} />
                <span>Available Mon – Sat</span>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href={TYPEFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-3 px-5"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-400 text-xs">
            © {new Date().getFullYear()} Arise Credit Pro. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-blue-400 hover:text-white text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-400 hover:text-white text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Testimonials />
      <BookingCTA />
      <FAQ />
      <Footer />
    </div>
  );
}
