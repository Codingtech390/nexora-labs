
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { company } from "@/data/site-data";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-left cyan glow */}

        <div className="absolute left-[-140px] top-[-140px] h-[420px] w-[420px] rounded-full bg-cyan-400/8 blur-[150px]" />

        {/* Bottom-right blue glow */}

        <div className="absolute bottom-[-140px] right-[-140px] h-[420px] w-[420px] rounded-full bg-blue-500/8 blur-[150px]" />

        {/* Subtle grid */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* Soft fade */}

        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/30 to-white/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-8 lg:pb-28 lg:pt-40">
        {/* =======================================================
            HERO
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Eyebrow */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50/80 px-4 py-2 shadow-sm backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-cyan-600" />

            <span className="text-[13px] font-bold tracking-wide text-cyan-700">
              Contact STORMAX
            </span>
          </div>

          {/* Heading */}

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            Let's Build Something
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            Whether you're starting a new project, modernizing an existing platform, or exploring
            AI-powered solutions, we'd love to hear about your ideas.
          </p>

          {/* CTA */}

          <div className="mt-9 flex justify-center">
            <Link
              href="#contact-form"
              className="group inline-flex items-center gap-3 rounded-full bg-cyan-600 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-xl hover:shadow-cyan-600/20"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* =======================================================
            CONTACT INFORMATION CARDS
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {/* Email */}

          <div className="group rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/50">
            <div className="mb-6 inline-flex rounded-2xl border border-cyan-100 bg-cyan-50 p-3.5">
              <Mail className="h-6 w-6 text-cyan-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">Email</h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Send us your requirements anytime.
            </p>

            <p className="mt-5 break-words text-sm font-semibold text-slate-900">{company.email}</p>
            <p className="mt-5 break-words text-sm font-semibold text-slate-900">{company.alternateEmail}</p>

            <div className="mt-5 h-px w-10 bg-cyan-500 transition-all duration-300 group-hover:w-16" />
          </div>

          {/* Phone */}

          <div className="group rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/50">
            <div className="mb-6 inline-flex rounded-2xl border border-cyan-100 bg-cyan-50 p-3.5">
              <Phone className="h-6 w-6 text-cyan-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">Phone</h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">Talk directly with our team.</p>

            <p className="mt-5 text-sm font-semibold text-slate-900">{company.phone}</p>
            <p className="mt-5 text-sm font-semibold text-slate-900">{company.alternate}</p>

            <div className="mt-5 h-px w-10 bg-cyan-500 transition-all duration-300 group-hover:w-16" />
          </div>

          {/* Location */}

          <div className="group rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/50">
            <div className="mb-6 inline-flex rounded-2xl border border-cyan-100 bg-cyan-50 p-3.5">
              <MapPin className="h-6 w-6 text-cyan-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">Location</h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">Serving clients worldwide.</p>

            <p className="mt-5 text-sm font-semibold text-slate-900">{company.location}</p>

            <div className="mt-5 h-px w-10 bg-cyan-500 transition-all duration-300 group-hover:w-16" />
          </div>

          {/* Availability */}

          <div className="group rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/50">
            <div className="mb-6 inline-flex rounded-2xl border border-cyan-100 bg-cyan-50 p-3.5">
              <Clock className="h-6 w-6 text-cyan-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">Availability</h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              We're available for new projects.
            </p>

            <p className="mt-5 text-sm font-semibold leading-6 text-slate-900">
              Mon – Fri · 9:00 AM – 6:00 PM
            </p>

            <div className="mt-5 h-px w-10 bg-cyan-500 transition-all duration-300 group-hover:w-16" />
          </div>
        </motion.div>

        {/* =======================================================
            CONTACT FORM + RIGHT PANEL
        ======================================================== */}

        <motion.div
          id="contact-form"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10"
        >
          {/* =====================================================
              CONTACT FORM
          ====================================================== */}

          <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/40 sm:p-8 lg:p-10">
            {/* Form Heading */}

            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.35em] text-cyan-600">
                Start a Conversation
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                Tell Us About Your Project
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Share your goals, challenges, or ideas. We'll review your requirements and get back
                to you with the best approach.
              </p>
            </div>

            {/* Form */}

            <form className="mt-10 space-y-6">
              {/* Name + Email */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                  />
                </div>
              </div>

              {/* Company + Service */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Company</label>

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Service Required
                  </label>

                  <select
                    defaultValue="Web Development"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition-all duration-200 hover:border-slate-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                  >
                    <option>Web Development</option>
                    <option>AI Solutions</option>
                    <option>Automation</option>
                    <option>UI / UX Design</option>
                    <option>Cloud Solutions</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Project Details */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Project Details
                </label>

                <textarea
                  rows={7}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-cyan-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-xl hover:shadow-cyan-600/20"
              >
                Send Message
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* =====================================================
              RIGHT PANEL
          ====================================================== */}

          <div className="space-y-6">
            {/* Why Work With Us */}

            <div className="relative overflow-hidden rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 shadow-lg shadow-slate-200/30">
              {/* Decorative Glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative">
                <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-cyan-600">
                  The Nexora Difference
                </p>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                  Why Work With STORMAX?
                </h3>

                <div className="mt-8 space-y-5">
                  {[
                    "Modern, scalable software architecture",
                    "Premium UI & exceptional user experience",
                    "AI-powered automation solutions",
                    "Performance & SEO optimized applications",
                    "Long-term technical partnership",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />

                      <p className="text-sm leading-6 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Response Time */}

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/30">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-slate-400">
                    Response Time
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                    Typical Response Time
                  </h3>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                  <Clock className="h-5 w-5 text-cyan-600" />
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                We aim to respond to every inquiry within one business day. For urgent projects,
                feel free to reach out via email or phone.
              </p>

              <div className="mt-8 rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-6">
                <p className="text-3xl font-bold tracking-tight text-cyan-700">&lt; 24 Hours</p>

                <p className="mt-2 text-sm font-medium text-slate-500">
                  Average first response time
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
