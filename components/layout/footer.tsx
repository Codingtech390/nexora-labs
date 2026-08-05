"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,

} from "react-icons/fa6";
import { FaArrowUpRightDots } from "react-icons/fa6";


import { navigation, company } from "@/data/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50 text-slate-900">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Ambient cyan glow */}

        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-cyan-400/8 blur-[140px]" />

        {/* Ambient blue glow */}

        <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-blue-500/8 blur-[140px]" />

        {/* Subtle grid */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* Bottom fade */}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* =======================================================
            MAIN FOOTER GRID
        ======================================================== */}

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* =====================================================
              BRAND
          ====================================================== */}

          <div className="lg:col-span-5">
            {/* Logo */}

            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              {/* Logo Mark */}

              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 text-lg font-bold text-white shadow-lg shadow-cyan-600/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-xl group-hover:shadow-cyan-600/20">
                <span className="relative z-10">N</span>

                {/* Shine */}

                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </div>

              {/* Brand Name */}

              <div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900">
                  {company.name}
                </h2>

                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Software Engineering
                </p>
              </div>
            </Link>

            {/* Description */}

            <p className="mt-7 max-w-md text-sm leading-7 text-slate-600">
              We build premium web applications, AI-powered products, cloud
              solutions, and scalable digital experiences that help businesses
              grow faster.
            </p>

            {/* Social Links */}

            <div className="mt-8 flex items-center gap-3">
              {/* GitHub */}

              <Link
                href="#"
                aria-label="GitHub"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:text-slate-900 hover:shadow-lg hover:shadow-slate-200/60"
              >
                <FaGithub
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </Link>

              {/* LinkedIn */}

              <Link
                href="#"
                aria-label="LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:text-cyan-700 hover:shadow-lg hover:shadow-cyan-100"
              >
                <FaLinkedin
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </Link>

              {/* X */}

              <Link
                href="#"
                aria-label="X / Twitter"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:text-slate-900 hover:shadow-lg hover:shadow-slate-200/60"
              >
                <FaXTwitter
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </Link>

              {/* Email */}

              <Link
                href="/contact"
                aria-label="Email"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50 text-cyan-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:bg-cyan-100 hover:text-cyan-700 hover:shadow-lg hover:shadow-cyan-100"
              >
                <FaEnvelope
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </Link>
            </div>
          </div>

          {/* =====================================================
              NAVIGATION
          ====================================================== */}

          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
              Navigation
            </h3>

            <ul className="mt-7 space-y-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-cyan-600"
                  >
                    <span className="h-px w-0 bg-cyan-500 transition-all duration-300 group-hover:w-3" />

                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              PREMIUM CTA CARD
          ====================================================== */}

          <div className="lg:col-span-4">
            <div className="group relative overflow-hidden rounded-[28px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-7 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/70 sm:p-8">
              {/* Ambient Glow */}

              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl transition-transform duration-700 group-hover:scale-125" />

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

              {/* Decorative Orb */}

              <div className="absolute right-7 top-7 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-100 bg-white/80 shadow-sm backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_0_5px_rgba(6,182,212,0.12)]" />
              </div>

              {/* Content */}

              <div className="relative">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-600">
                  Start a Conversation
                </p>

                <h3 className="mt-5 max-w-xs text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                  Let's build something amazing.
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
                  Ready to launch your next software product? We'd love to
                  discuss your ideas and turn them into something exceptional.
                </p>

                {/* CTA */}

                <Link
                  href="/contact"
                  className="group/button mt-7 inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-xl hover:shadow-cyan-600/20"
                >
                  Start Your Project

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover/button:bg-white/20">
                    <FaArrowUpRightDots
                      size={12}
                      className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </div>

              {/* Bottom Accent */}

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 transition-all duration-700 group-hover:w-full" />
            </div>
          </div>
        </div>

        {/* =======================================================
            DIVIDER
        ======================================================== */}

        <div className="my-14 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* =======================================================
            BOTTOM FOOTER
        ======================================================== */}

        <div className="flex flex-col items-center justify-between gap-6 text-sm md:flex-row">
          {/* Copyright */}

          <p className="text-center text-slate-500 md:text-left">
            © {year}{" "}
            <span className="font-semibold text-slate-700">
              {company.name}
            </span>
            . All rights reserved.
          </p>

          {/* Links */}

          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            <Link
              href="/privacy"
              className="text-slate-500 transition-colors duration-200 hover:text-cyan-600"
            >
              Privacy Policy
            </Link>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <Link
              href="/terms"
              className="text-slate-500 transition-colors duration-200 hover:text-cyan-600"
            >
              Terms of Service
            </Link>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <Link
              href="/contact"
              className="font-medium text-slate-600 transition-colors duration-200 hover:text-cyan-600"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

