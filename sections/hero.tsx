
"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Sparkles,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { hero, statistics } from "@/data/site-data";
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

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="absolute bottom-[-120px] right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-slate-100" />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-28 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 xl:gap-16">
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative z-10 max-w-2xl lg:max-w-none"
          >
            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.8,
              }}
              className="text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[66px]"
            >
              {hero.title}
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg md:leading-8"
            >
              {hero.subtitle}
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
              className="mt-7 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-600/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-xl"
              >
                {hero.primaryButton}

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-slate-50 hover:text-cyan-700 hover:shadow-md"
              >
                {hero.secondaryButton}
              </Link>
            </motion.div>

            {/* Statistics */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.9,
                duration: 0.8,
              }}
              className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
            >
              {statistics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-200 bg-white px-2 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-bold text-cyan-600">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-[9px] uppercase text-slate-500 sm:text-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative Glow */}

            <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px] sm:h-[430px] sm:w-[430px]" />

            {/* Hero Image */}

            <div className="relative z-10 flex w-full flex-col items-center">
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="w-full"
              >
                <Image
                  src="/hero.png"
                  alt="Nexora Labs Hero"
                  width={900}
                  height={900}
                  priority
                  className="mx-auto h-auto w-full max-w-[560px] object-contain lg:max-w-[620px] xl:max-w-[680px]"
                />
              </motion.div>

              {/* Technology Badge */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.9,
                  duration: 0.6,
                }}
                className="-mt-1 rounded-full border border-cyan-200 bg-white/95 px-5 py-2.5 shadow-lg backdrop-blur-xl sm:-mt-2"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-600" />

                  <span className="text-sm font-medium text-cyan-700">
                    {hero.badge}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            AI & AUTOMATION — HOMEPAGE HIGHLIGHT
        ====================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-16 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_100px_-35px_rgba(15,23,42,0.2)] sm:mt-20 md:rounded-[36px] lg:mt-24"
        >
          {/* =================================================
              AMBIENT BACKGROUND
          ================================================== */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-500/8 blur-[120px]" />

            <div className="absolute right-[-100px] top-1/3 h-80 w-80 rounded-full bg-cyan-500/8 blur-[120px]" />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)",
                backgroundSize: "52px 52px",
              }}
            />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-50/80 to-transparent" />
          </div>

          {/* =================================================
              MAIN CONTENT
          ================================================== */}

          <div className="relative px-5 py-9 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-14 lg:py-16 xl:px-16 xl:py-18">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-14 xl:gap-20">
              {/* =================================================
                  LEFT — MESSAGE
              ================================================== */}

              <div>
                {/* Eyebrow */}

                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50/80 px-3.5 py-2 shadow-sm backdrop-blur-xl sm:px-4">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                  </span>

                  <Bot className="h-3.5 w-3.5 text-cyan-600" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700 sm:text-[11px] sm:tracking-[0.22em]">
                    AI & Web Based-business Automation
                  </span>
                </div>

                {/* Heading */}

                <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px]">
                  We Don't Just Build Software.
                  <span className="mt-2 block bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    We Automate How Business Works.
                  </span>
                </h2>

                {/* Description */}

                <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base md:text-lg md:leading-8">
                  STORMAX transforms repetitive business processes into
                  intelligent, connected digital systems — helping teams reduce
                  manual work, improve visibility, and operate with greater
                  efficiency.
                </p>

                {/* Capability highlights */}

                <div className="mt-7 flex max-w-2xl flex-wrap gap-2 sm:mt-8 sm:gap-2.5">
                  {[
                    "AI Integration",
                    "Workflow Automation",
                    "Custom Business Systems",
                    "Intelligent Operations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-slate-600 shadow-sm backdrop-blur-sm sm:px-3.5 sm:py-2 sm:text-xs"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-500" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* CTA */}

                <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
                  <Link
                    href="/portfolio"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-slate-950 px-5 py-3 text-xs font-bold text-white shadow-xl shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-cyan-500/20 sm:px-6 sm:py-3.5 sm:text-sm"
                  >
                    Explore Automation

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full px-3 py-3 text-xs font-semibold text-slate-600 transition-colors hover:text-cyan-600 sm:px-4 sm:py-3.5 sm:text-sm"
                  >
                    Discuss Your Workflow

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* =================================================
                  RIGHT — AUTOMATION VISUAL
              ================================================== */}

              <div className="relative mx-auto w-full max-w-[500px] lg:max-w-[520px]">
                {/* Outer glow */}

                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-[90px] sm:h-72 sm:w-72" />

                {/* Main visual */}

                <div className="relative rounded-[28px] border border-slate-200 bg-slate-950 p-3.5 shadow-2xl shadow-slate-900/15 sm:rounded-[32px] sm:p-5">
                  {/* Browser Header */}

                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 sm:px-4 sm:py-3">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="h-2 w-2 rounded-full bg-white/20 sm:h-2.5 sm:w-2.5" />
                      <span className="h-2 w-2 rounded-full bg-white/20 sm:h-2.5 sm:w-2.5" />
                      <span className="h-2 w-2 rounded-full bg-white/20 sm:h-2.5 sm:w-2.5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                      <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px] sm:tracking-[0.16em]">
                        System Active
                      </span>
                    </div>
                  </div>

                  {/* Workflow Canvas */}

                  <div className="relative mt-3 overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40 p-4 sm:mt-4 sm:rounded-[24px] sm:p-6">
                    {/* Grid */}

                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.08]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />

                    {/* Glow */}

                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[65px]" />

                    {/* Workflow */}

                    <div className="relative">
                      {/* Input */}

                      <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.06] p-3 sm:gap-3 sm:p-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 sm:h-10 sm:w-10">
                          <Workflow className="h-4.5 w-4.5 text-cyan-300 sm:h-5 sm:w-5" />
                        </div>

                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-[10px] sm:tracking-[0.15em]">
                            Input
                          </p>

                          <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                            Business Request
                          </p>
                        </div>

                        <div className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/10 sm:h-7 sm:w-7">
                          <ArrowRight className="h-3 w-3 text-cyan-300 sm:h-3.5 sm:w-3.5" />
                        </div>
                      </div>

                      {/* Connector */}

                      <div className="ml-8 h-7 w-px bg-gradient-to-b from-cyan-400/60 to-cyan-400/10 sm:ml-9 sm:h-9" />

                      {/* AI Engine */}

                      <div className="relative rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-4 shadow-[0_0_50px_rgba(34,211,238,0.08)] backdrop-blur-xl sm:p-5">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 sm:h-12 sm:w-12 sm:rounded-2xl">
                            <div className="absolute inset-0 animate-pulse rounded-xl bg-cyan-400/10 blur-xl sm:rounded-2xl" />

                            <BrainCircuit className="relative h-5 w-5 text-cyan-300 sm:h-6 sm:w-6" />
                          </div>

                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-cyan-300/70 sm:text-[10px] sm:tracking-[0.15em]">
                              Intelligence Layer
                            </p>

                            <p className="mt-1 text-sm font-bold text-white sm:text-base">
                              AI Decision Engine
                            </p>
                          </div>
                        </div>

                        {/* Processing indicators */}

                        <div className="mt-4 grid grid-cols-3 gap-1.5 sm:mt-5 sm:gap-2">
                          {["Analyze", "Decide", "Execute"].map((item) => (
                            <div
                              key={item}
                              className="rounded-lg border border-white/10 bg-white/[0.04] px-1.5 py-1.5 text-center sm:px-2 sm:py-2"
                            >
                              <p className="text-[8px] font-semibold uppercase tracking-wider text-slate-400 sm:text-[9px]">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Connector */}

                      <div className="ml-8 h-7 w-px bg-gradient-to-b from-cyan-400/60 to-blue-400/20 sm:ml-9 sm:h-9" />

                      {/* Output */}

                      <div className="rounded-2xl border border-emerald-400/10 bg-white/[0.05] p-3 backdrop-blur-xl sm:p-4">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 sm:h-10 sm:w-10">
                            <CheckCircle2 className="h-4.5 w-4.5 text-emerald-300 sm:h-5 sm:w-5" />
                          </div>

                          <div className="min-w-0">
                            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-[10px] sm:tracking-[0.15em]">
                              Output
                            </p>

                            <p className="mt-1 truncate text-xs font-semibold text-white sm:text-sm">
                              Automated Action Completed
                            </p>
                          </div>

                          <span className="ml-auto shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-emerald-300 sm:px-2.5 sm:text-[9px]">
                            Done
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom System Status */}

                  <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-center sm:p-3">
                      <p className="text-base font-black text-white sm:text-lg">
                        AI
                      </p>

                      <p className="mt-1 text-[8px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[9px]">
                        Intelligence
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-center sm:p-3">
                      <p className="text-base font-black text-cyan-300 sm:text-lg">
                        24/7
                      </p>

                      <p className="mt-1 text-[8px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[9px]">
                        Automation
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-center sm:p-3">
                      <p className="text-base font-black text-white sm:text-lg">
                        ∞
                      </p>

                      <p className="mt-1 text-[8px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[9px]">
                        Possibilities
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating badge — top */}

                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-2 -top-4 hidden rounded-2xl border border-cyan-200 bg-white/95 px-3.5 py-2.5 shadow-xl shadow-slate-900/10 backdrop-blur-xl sm:block"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-50">
                      <Sparkles className="h-4 w-4 text-cyan-600" />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400">
                        Intelligent
                      </p>

                      <p className="mt-0.5 text-[11px] font-bold text-slate-900">
                        Business Systems
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating badge — bottom */}

                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -left-3 hidden rounded-2xl border border-slate-200 bg-white/95 px-3.5 py-2.5 shadow-xl shadow-slate-900/10 backdrop-blur-xl sm:block"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50">
                      <Code2 className="h-4 w-4 text-blue-600" />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400">
                        Built Around
                      </p>

                      <p className="mt-0.5 text-[11px] font-bold text-slate-900">
                        Your Workflow
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* =================================================
                BOTTOM CAPABILITY STRIP
            ================================================== */}

            <div className="relative mt-12 border-t border-slate-200/80 pt-7 sm:mt-14 sm:pt-8 md:mt-16 md:pt-10">
              <div className="grid gap-3 sm:grid-cols-3 sm:gap-5">
                {[
                  {
                    icon: Workflow,
                    title: "Connect",
                    description:
                      "Bring disconnected tools and workflows together.",
                  },
                  {
                    icon: BrainCircuit,
                    title: "Think",
                    description:
                      "Add AI-powered intelligence to repetitive processes.",
                  },
                  {
                    icon: Bot,
                    title: "Automate",
                    description:
                      "Turn manual operations into scalable systems.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex items-start gap-3 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-slate-200 hover:bg-white/70 hover:shadow-sm sm:gap-4 sm:p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50 transition-all duration-300 group-hover:bg-cyan-100 sm:h-11 sm:w-11">
                        <Icon className="h-4.5 w-4.5 text-cyan-600 sm:h-5 sm:w-5" />
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-[11px] leading-5 text-slate-500 sm:text-xs">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
