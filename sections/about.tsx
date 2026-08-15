"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Bot, BrainCircuit, Workflow } from "lucide-react";

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

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-left blue glow */}
        <div className="absolute left-[-140px] top-[-140px] h-[420px] w-[420px] rounded-full bg-blue-500/8 blur-[140px]" />

        {/* Bottom-right cyan glow */}
        <div className="absolute bottom-[-140px] right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/8 blur-[140px]" />

        {/* Very subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* Soft overall fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/30 to-white/80" />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 lg:px-8 lg:pb-28">
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

            <span className="text-[13px] font-semibold tracking-wide text-cyan-700">
              About {company.name}
            </span>
          </div>

          {/* Heading */}

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Crafting Digital.
            <br />
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Driving Growth.
            </span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            {company.description}
          </p>

          {/* CTA */}

          <div className="mt-9 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-cyan-600 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-xl hover:shadow-cyan-600/20"
            >
              Let's Build Together
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
        {/* =======================================================
            STORY
        ======================================================== */}
        <div className="mt-24 grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Story Content */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-[13px] font-bold uppercase tracking-[0.35em] text-cyan-600">
              Our Story
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              More Than A Development Company
            </h2>

            <div className="mt-7 max-w-xl">
              <p className="text-base leading-7 text-slate-600 md:text-lg md:leading-8">
                At <span className="font-semibold text-slate-900">{company.name}</span>, we believe
                software should solve real business problems—not create new ones.
              </p>

              <p className="mt-6 text-base leading-7 text-slate-500 md:text-lg md:leading-8">
                Every website, application, automation workflow, and AI solution we build is
                designed with one goal in mind: delivering measurable value while maintaining
                exceptional user experiences and engineering quality.
              </p>

              <p className="mt-6 text-base leading-7 text-slate-500 md:text-lg md:leading-8">
                Rather than simply writing code, we collaborate with businesses to understand their
                vision, simplify complex challenges, and build scalable digital products that
                continue to grow long after launch.
              </p>
            </div>
          </motion.div>

          {/* Company Info Card */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Ambient Glow */}

            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-transparent blur-3xl" />

            {/* Card */}

            <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-xl sm:p-8">
              {/* Decorative top line */}

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

              {/* Window Controls */}

              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              </div>

              <div className="mt-9 space-y-7">
                {/* Company */}

                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Company
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">{company.name}</h3>
                </div>

                {/* Founded + Location */}

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Founded
                    </p>

                    <h4 className="mt-2 text-lg font-semibold text-slate-900">{company.founded}</h4>
                  </div>

                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Location
                    </p>

                    <h4 className="mt-2 text-lg font-semibold text-slate-900">
                      {company.location}
                    </h4>
                  </div>
                </div>

                {/* Tagline */}

                <div className="relative overflow-hidden rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-5">
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />

                  <p className="relative text-sm font-medium leading-7 text-slate-700">
                    "{company.tagline}"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* =======================================================
            MISSION & VISION
        ======================================================== */}
        <div className="mt-24 grid gap-6 lg:grid-cols-2">
          {/* Mission */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 lg:p-8"
          >
            {/* Accent */}

            <div className="absolute left-0 top-8 h-16 w-1 rounded-r-full bg-cyan-500" />

            <div className="pl-3">
              <span className="text-[13px] font-bold uppercase tracking-[0.3em] text-cyan-600">
                Mission
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl">
                Engineering Software That Creates Real Business Value
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-600">
                We partner with startups and businesses to build modern digital products that are
                scalable, high-performing, and designed for long-term success.
              </p>
            </div>
          </motion.div>

          {/* Vision */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 lg:p-8"
          >
            {/* Accent */}

            <div className="absolute left-0 top-8 h-16 w-1 rounded-r-full bg-blue-500" />

            <div className="pl-3">
              <span className="text-[13px] font-bold uppercase tracking-[0.3em] text-blue-600">
                Vision
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl">
                Helping Businesses Grow Through Better Technology
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Our vision is to become a trusted engineering partner by delivering software that
                combines exceptional design, intelligent automation, and reliable engineering.
              </p>
            </div>
          </motion.div>
        </div>
        {/* =======================================================
            TECHNOLOGIES
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-bold uppercase tracking-[0.35em] text-cyan-600">
              Technologies & Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Tools & Technologies We Work With
            </h2>

            <p className="mx-auto mt-6 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              From modern software engineering and AI to automation, digital marketing, and content
              creation, we use the right tools and technologies to build complete digital solutions.
            </p>
          </div>

          {/* Technology & Capability Pills */}

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              // Development
              "Next.js",
              "React",
              "JavaScript",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "Node.js",
              "Express.js",

              // Database & Infrastructure
              "MongoDB",
              "PostgreSQL",
              "Git",
              "Docker",
              "Vercel",
              "AWS",

              // AI & Automation
              "OpenAI",
              "AI Integrations",
              "Workflow Automation",
              "REST APIs",

              // Digital Marketing
              "SEO",
              "Google Analytics",
              "Google Search Console",
              "Microsoft Clarity",

              // Content & Growth
              "Content Strategy",
              "Content Creation",
              "Social Media",
            ].map((tech) => (
              <div
                key={tech}
                className="group rounded-full border border-slate-200 bg-white px-5 py-3 text-[13px] font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-md"
              >
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 opacity-60 transition-opacity group-hover:opacity-100" />

                  {tech}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =======================================================
    AI & AUTOMATION — INTELLIGENT SYSTEMS
======================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-28"
        >
          <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-300/30">
            {/* ===================================================
        AMBIENT BACKGROUND
    ==================================================== */}

            <div className="pointer-events-none absolute inset-0">
              {/* Cyan glow */}
              <div className="absolute -left-32 top-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[130px]" />

              {/* Blue glow */}
              <div className="absolute -bottom-32 right-[-100px] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]" />

              {/* Center glow */}
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[100px]" />

              {/* Technical grid */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "52px 52px",
                }}
              />

              {/* Radial fade */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,6,23,0.55)_100%)]" />
            </div>

            {/* ===================================================
        MAIN CONTENT
    ==================================================== */}

            <div className="relative grid gap-12 p-7 sm:p-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:p-16">
              {/* =================================================
          LEFT — BRAND MESSAGE
      ================================================== */}

              <div className="flex flex-col justify-center">
                {/* Eyebrow */}

                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 backdrop-blur-xl">
                  <div className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
                    AI & Business Automation
                  </span>
                </div>

                {/* Heading */}

                <h2 className="mt-7 max-w-xl text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  We Build Software
                  <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent">
                    That Thinks Beyond Code.
                  </span>
                </h2>

                {/* Description */}

                <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  At STORMAX, we don't see AI and automation as isolated features. We see them
                  as intelligent layers that can transform the way a business operates,
                  communicates, makes decisions, and grows.
                </p>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                  From repetitive operational workflows to intelligent decision systems, we design
                  technology around real business problems—not technology for technology's sake.
                </p>

                {/* Capability tags */}

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {[
                    "AI Integration",
                    "Workflow Automation",
                    "Business Systems",
                    "Intelligent Operations",
                    "Data & Analytics",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[11px] font-semibold text-slate-300 backdrop-blur-md transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* =================================================
          RIGHT — INTELLIGENT SYSTEM VISUAL
      ================================================== */}

              <div className="relative min-h-[430px]">
                {/* Outer technical frame */}

                <div className="absolute inset-0 rounded-[30px] border border-white/10 bg-white/[0.025] backdrop-blur-sm" />

                {/* Corner markers */}

                <div className="absolute left-4 top-4 h-4 w-4 border-l border-t border-cyan-400/50" />
                <div className="absolute right-4 top-4 h-4 w-4 border-r border-t border-cyan-400/50" />
                <div className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-cyan-400/50" />
                <div className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-cyan-400/50" />

                {/* =================================================
            CONNECTION LINES
        ================================================== */}

                <div className="absolute left-[20%] right-[20%] top-[50%] h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

                <div className="absolute bottom-[28%] left-[30%] h-[22%] w-px bg-gradient-to-b from-cyan-400/40 to-transparent" />

                <div className="absolute right-[30%] top-[28%] h-[22%] w-px bg-gradient-to-b from-blue-400/30 to-transparent" />

                {/* =================================================
            TOP LEFT NODE
        ================================================== */}

                <div className="absolute left-[8%] top-[15%]">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-xl" />

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 shadow-xl backdrop-blur-xl">
                      <Workflow className="h-6 w-6 text-cyan-300" />
                    </div>
                  </div>

                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    Workflow
                  </p>
                </div>

                {/* =================================================
            TOP RIGHT NODE
        ================================================== */}

                <div className="absolute right-[8%] top-[15%]">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-blue-400/20 blur-xl" />

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/10 shadow-xl backdrop-blur-xl">
                      <BrainCircuit className="h-6 w-6 text-blue-300" />
                    </div>
                  </div>

                  <p className="mt-2 text-right text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    Intelligence
                  </p>
                </div>

                {/* =================================================
            CENTER AI CORE
        ================================================== */}

                <motion.div
                  animate={{
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  {/* Outer rings */}

                  <div className="absolute -inset-10 rounded-full border border-cyan-400/10" />
                  <div className="absolute -inset-6 rounded-full border border-cyan-400/10" />

                  {/* Glow */}

                  <div className="absolute -inset-8 rounded-full bg-cyan-400/20 blur-3xl" />

                  {/* Core */}

                  <div className="relative flex h-28 w-28 items-center justify-center rounded-[30px] border border-cyan-300/30 bg-gradient-to-br from-cyan-400/20 via-slate-900 to-blue-500/20 shadow-[0_0_60px_rgba(34,211,238,0.18)] backdrop-blur-xl">
                    <div className="absolute inset-3 rounded-[22px] border border-white/5" />

                    <Bot className="relative h-10 w-10 text-cyan-300" />
                  </div>

                  {/* Core label */}

                  <div className="absolute left-1/2 top-full mt-5 -translate-x-1/2 whitespace-nowrap">
                    <span className="rounded-full border border-cyan-400/20 bg-slate-900/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-xl">
                      Intelligent Core
                    </span>
                  </div>
                </motion.div>

                {/* =================================================
            BOTTOM LEFT NODE
        ================================================== */}

                <div className="absolute bottom-[12%] left-[16%]">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10">
                      <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                        Process
                      </p>
                      <p className="mt-0.5 text-xs font-semibold text-slate-200">Automated</p>
                    </div>
                  </div>
                </div>

                {/* =================================================
            BOTTOM RIGHT NODE
        ================================================== */}

                <div className="absolute bottom-[12%] right-[10%]">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-400/10">
                      <Sparkles className="h-4 w-4 text-blue-300" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                        Operations
                      </p>
                      <p className="mt-0.5 text-xs font-semibold text-slate-200">Intelligent</p>
                    </div>
                  </div>
                </div>

                {/* Floating status */}

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-emerald-300">
                      Systems Connected
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ===================================================
        BOTTOM METRICS
    ==================================================== */}

            <div className="relative border-t border-white/10 px-7 py-7 sm:px-10 lg:px-16">
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  {
                    value: "01",
                    label: "Understand the Process",
                  },
                  {
                    value: "02",
                    label: "Identify Automation",
                  },
                  {
                    value: "03",
                    label: "Build Intelligent Systems",
                  },
                ].map((item) => (
                  <div key={item.value} className="flex items-center gap-4">
                    <span className="text-sm font-black tracking-[0.12em] text-cyan-400/70">
                      {item.value}
                    </span>

                    <div className="h-px flex-1 bg-white/10" />

                    <span className="text-right text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            WHY CHOOSE US
        ======================================================== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-bold uppercase tracking-[0.35em] text-cyan-600">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Built Around Quality, Performance & Growth
            </h2>
          </div>

          {/* Feature Cards */}

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Modern Engineering",
                description:
                  "Clean architecture and scalable solutions built for long-term growth.",
              },
              {
                title: "Performance First",
                description: "Optimized experiences with fast loading, accessibility, and SEO.",
              },
              {
                title: "Business Focused",
                description:
                  "Every decision is aligned with your business objectives—not just code.",
              },
              {
                title: "Continuous Innovation",
                description: "Leveraging AI, automation, and modern technologies to stay ahead.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/50"
              >
                {/* Number */}

                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-slate-300 transition-colors group-hover:text-cyan-500">
                    0{index + 1}
                  </span>

                  <CheckCircle2 className="h-5 w-5 text-cyan-500/60 transition-colors group-hover:text-cyan-600" />
                </div>

                <h3 className="mt-7 text-lg font-bold text-slate-900">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">{item.description}</p>

                {/* Bottom Accent */}

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </motion.div>
        {/* =======================================================
            CTA
        ======================================================== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 shadow-lg shadow-slate-200/40 lg:p-14">
            {/* Decorative Glows */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            {/* Content */}

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-100 bg-white shadow-sm">
                <Sparkles className="h-5 w-5 text-cyan-600" />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                Ready to Build Something Exceptional?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
                Whether you're building a new product, modernizing an existing platform, or
                exploring AI-powered solutions, we'd love to help bring your ideas to life.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-xl hover:shadow-cyan-600/20"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
