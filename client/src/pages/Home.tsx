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

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">

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
    { value: 120, suffix: "pts", label: "Avg Score Increase" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
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
        <div className="grid grid-cols-2 divide-x divide-blue-700/40">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
const services = [
  {
    icon: FileSearch,
    title: "Credit Analysis",
    desc: "We pull and review all three bureaus — Equifax, Experian, and TransUnion — to identify every negative item, error, and opportunity for improvement.",
  },
  {
    icon: AlertCircle,
    title: "Credit Repair",
    desc: "We dispute inaccurate collections, charge-offs, late payments, repossessions, and other derogatory marks directly with the credit bureaus and creditors.",
  },
  {
    icon: TrendingUp,
    title: "Funding Connection",
    desc: "Direct access to lenders and funding programs matched to your profile and goals.",
  },
  {
    icon: Zap,
    title: "Score Monitoring",
    desc: "For clients with urgent needs — home purchase, car loan, or job application — our expedited process prioritizes the fastest possible score improvements.",
  },
  {
    icon: DollarSign,
    title: "Personal Coaching",
    desc: "We help you negotiate with creditors to settle outstanding debts for less than you owe, reducing your financial burden and clearing the path to a healthier profile.",
  },
  {
    icon: BookOpen,
    title: "Financial Literacy Coaching",
    desc: "Understanding money is the foundation of lasting financial health. We coach you on budgeting, credit utilization, saving strategies, and building wealth.",
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
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="service-card bg-white p-7 shadow-sm border border-slate-100"
              style={{ borderRadius: '12px', height: '305px' }}
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
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

/// ─── Transformation Journey ─────────────────────────────────────────────────────
const journeySteps = [
  {
    number: "01",
    title: "Free Consultation",
    desc: "We start with a no-cost strategy session to review your credit situation and map out your personalized plan.",
  },
  {
    number: "02",
    title: "Credit Repair",
    desc: "We dispute negative items, errors, and inaccuracies across all three bureaus to clean up your credit profile.",
  },
  {
    number: "03",
    title: "Score Improvement",
    desc: "With negative items removed, we implement proven strategies to boost your score and build positive history.",
  },
  {
    number: "04",
    title: "Funding Success",
    desc: "Once your profile is strong, we connect you with lenders and funding opportunities matched to your goals.",
  },
];

function TransformationJourney() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-black text-blue-950 mb-3"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Your Transformation Journey
          </h2>
          <p className="text-slate-500 text-lg">
            Four simple steps to credit repair and funding success.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Step circle */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10"
                  style={{
                    background: i % 2 === 0
                      ? "linear-gradient(135deg, oklch(0.45 0.22 264), oklch(0.35 0.20 264))"
                      : "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.42 0.20 264))",
                  }}
                >
                  <span
                    className="text-white text-2xl font-black"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3
                  className="font-black text-blue-950 text-lg mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#booking"
            className="btn-primary"
          >
            Start Your Journey <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────
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
        {/* CTA Banner */}
        <div
          className="rounded-2xl p-12 text-center"
          style={{
            background: "linear-gradient(135deg, oklch(0.18 0.08 264), oklch(0.35 0.18 264))",
          }}
        >
          <h3
            className="text-3xl lg:text-4xl font-black text-white mb-3"
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
      <Services />
      <TransformationJourney />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </div>
  );
}
