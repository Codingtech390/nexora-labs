
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ExternalLink,
  Code2,
  CheckCircle2,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Workflow,
  Zap,
  Layers3,
  ShieldCheck,
  Cpu,
} from "lucide-react";

import { automationDemos, projects } from "@/data/site-data";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
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

const automationIcons = [Workflow, Bot, BrainCircuit, Cpu, Zap];

const useCases = [
  "Lead Management",
  "CRM Automation",
  "Document Processing",
  "Customer Support",
  "Email Automation",
  "Sales Workflows",
  "Invoice Processing",
  "Reporting & Analytics",
  "Data Collection",
  "Appointment Management",
  "Content Workflows",
  "Internal Operations",
];

const workflowSteps = [
  {
    step: "01",
    title: "Understand",
    description:
      "We map the existing business process, identify bottlenecks and understand where your team spends time.",
    icon: Layers3,
  },
  {
    step: "02",
    title: "Identify",
    description:
      "We find repetitive, rule-based and data-heavy tasks that can benefit from automation or AI.",
    icon: BrainCircuit,
  },
  {
    step: "03",
    title: "Build",
    description:
      "We design and develop the workflow, integrations, APIs and intelligent logic required for the solution.",
    icon: Workflow,
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "We monitor the workflow, improve performance and continuously refine the system as your business evolves.",
    icon: Zap,
  },
];

export default function Portfolio() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* =======================================================
          GLOBAL BACKGROUND
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large ambient glows */}

        <div className="absolute -left-56 -top-56 h-[620px] w-[620px] rounded-full bg-cyan-400/[0.07] blur-[160px]" />

        <div className="absolute -bottom-56 -right-56 h-[620px] w-[620px] rounded-full bg-blue-500/[0.07] blur-[160px]" />

        {/* Fine grid */}

        <div
          className="absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.025) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Overall fade */}

        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-slate-50/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 sm:pt-36 lg:px-8 lg:pb-32 lg:pt-40">

        {/* =======================================================
            HERO
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* Eyebrow */}

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/80 px-4 py-2 shadow-sm shadow-cyan-100/40 backdrop-blur-xl">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-50">
              <Sparkles className="h-3.5 w-3.5 text-cyan-600" />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-700">
              Our Portfolio
            </span>
          </div>

          {/* Heading */}

          <h1 className="text-4xl font-bold leading-[1.04] tracking-[-0.035em] text-slate-950 sm:text-5xl md:text-6xl lg:text-[72px]">
            Digital Products
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Built With Purpose.
            </span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            From premium websites and e-commerce platforms to intelligent
            automation systems, every project is engineered around real
            business goals, performance and long-term scalability.
          </p>

          {/* CTA */}

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-cyan-600/20"
            >
              Start Your Project

              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="#automation-lab"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
            >
              Explore Automation
              <ArrowDownIcon />
            </a>
          </div>

          {/* Small credibility line */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            <span>Web Engineering</span>
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
            <span>AI & Automation</span>
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
            <span>Digital Products</span>
          </div>
        </motion.div>

        {/* =======================================================
            FEATURED PROJECTS
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-28"
        >
          {/* Section heading */}

          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-8 rounded-full bg-cyan-500" />

                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-600">
                  Selected Work
                </p>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Projects That Solve Real Problems
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500 md:text-right">
              A selection of digital experiences, corporate platforms and
              e-commerce solutions we've helped bring to life.
            </p>
          </div>

          {/* Project Grid */}

          <div className="grid gap-7 lg:grid-cols-2">
            {projects.map((project, index) => {
              const isFeatured = index === 0;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                  }}
                  className={`group relative overflow-hidden rounded-[30px] border border-slate-200/90 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-2xl hover:shadow-slate-200/60 ${
                    isFeatured ? "lg:col-span-2" : ""
                  }`}
                >
                  {/* Image */}

                  <div
                    className={`relative overflow-hidden bg-slate-100 ${
                      isFeatured
                        ? "aspect-[16/7]"
                        : "aspect-[16/9]"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition duration-700 group-hover:scale-[1.035]"
                    />

                    {/* Image treatment */}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/5 to-transparent" />

                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Category */}

                    <div className="absolute left-5 top-5">
                      <span className="inline-flex items-center rounded-full border border-white/30 bg-white/90 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-800 shadow-lg backdrop-blur-xl">
                        {project.category}
                      </span>
                    </div>

                    {/* Year */}

                    <div className="absolute right-5 top-5">
                      <span className="rounded-full border border-white/20 bg-slate-950/35 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xl">
                        {project.year}
                      </span>
                    </div>

                    {/* Bottom project meta */}

                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-200">
                          Client Project
                        </p>

                        <h3 className="mt-1 text-xl font-bold tracking-tight text-white md:text-2xl">
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-400 group-hover:text-slate-950">
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}

                  <div className="p-6 md:p-7">
                    <div className="flex flex-col gap-5">
                      <p className="text-sm leading-7 text-slate-600">
                        {project.shortDescription ||
                          project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-500 transition-colors duration-300 group-hover:border-cyan-100 group-hover:bg-cyan-50/50 group-hover:text-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                        <span className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                          <Code2 className="h-4 w-4 text-cyan-500" />
                          {project.duration}
                        </span>

                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${project.title}`}
                            className="group/link inline-flex items-center gap-2 text-sm font-bold text-cyan-600 transition-colors hover:text-cyan-700"
                          >
                            View Live Project
                            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                          </a>
                        ) : (
                          <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-300">
                            Case Study
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        {/* =======================================================
            AI & BUSINESS AUTOMATION LAB
        ======================================================== */}

        <motion.div
          id="automation-lab"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-70px" }}
          className="relative mt-36 scroll-mt-28"
        >
          {/* Section ambient background */}

          <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-cyan-400/[0.09] blur-[130px]" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/[0.08] blur-[130px]" />

          {/* Section Header */}

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-700 shadow-sm">
              <Bot className="h-3.5 w-3.5" />
              AI & Business Automation
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-[-0.025em] text-slate-950 md:text-5xl lg:text-[52px]">
              Turning Complex Workflows
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Into Intelligent Systems
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              We design digital systems that replace fragmented spreadsheets,
              repetitive manual work and disconnected processes with structured,
              intelligent workflows built around how your business actually operates.
            </p>
          </div>

          {/* Automation Stats */}

          <div className="relative mx-auto mt-12 grid max-w-5xl grid-cols-2 overflow-hidden rounded-[26px] border border-slate-200 bg-white/90 shadow-xl shadow-slate-200/40 backdrop-blur-xl md:grid-cols-4">
            {[
              {
                value: "09+",
                label: "Automation Concepts",
              },
              {
                value: "10+",
                label: "Business Workflows",
              },
              {
                value: "24/7",
                label: "Digital Operations",
              },
              {
                value: "AI",
                label: "Ready Architecture",
              },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`relative px-5 py-7 text-center ${
                  index > 0
                    ? "border-l border-slate-100"
                    : ""
                }`}
              >
                <p className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                  {item.value}
                </p>

                <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Automation Showcase */}

          <div className="relative mt-16">
            {/* Intro strip */}

            <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-600">
                  Automation Lab
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                  Explore Business Systems We've Conceptualized
                </h3>
              </div>

              <p className="max-w-lg text-sm leading-6 text-slate-500 md:text-right">
                Interactive concepts designed around real operational
                challenges across healthcare, finance, recruitment,
                tourism, sales and more.
              </p>
            </div>

            {/* Cards */}

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {automationDemos.map((demo, index) => {
                const Icon =
                  automationIcons[index % automationIcons.length];

                const isFeatured = index === 0;

                return (
                  <Link
                    key={demo.number}
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-2xl hover:shadow-slate-200/60 ${
                      isFeatured
                        ? "md:col-span-2 lg:col-span-2"
                        : ""
                    }`}
                  >
                    {/* Visual */}

                    <div
                      className={`relative overflow-hidden bg-slate-950 ${
                        isFeatured
                          ? "h-72 md:h-[350px]"
                          : "h-60"
                      }`}
                    >
                      {/* Image */}

                      {demo.image ? (
                        <Image
                          src={demo.image}
                          alt={demo.title}
                          fill
                          className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                        />
                      ) : (
                        <>
                          {/* Abstract automation visual */}

                          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950" />

                          <div
                            className="absolute inset-0 opacity-[0.12]"
                            style={{
                              backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                              backgroundSize: "34px 34px",
                            }}
                          />

                          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-[80px]" />

                          {/* Central system visual */}

                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                              <div className="absolute -inset-8 rounded-full border border-cyan-400/10" />

                              <div className="absolute -inset-16 rounded-full border border-cyan-400/[0.06]" />

                              <div className="relative flex h-20 w-20 items-center justify-center rounded-[24px] border border-white/10 bg-white/[0.08] shadow-2xl backdrop-blur-xl">
                                <Icon className="h-9 w-9 text-cyan-300" />
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Image overlay */}

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />

                      {/* Decorative glow */}

                      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/20 blur-[75px] transition-all duration-700 group-hover:bg-cyan-300/30" />

                      {/* Meta */}

                      <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur-xl">
                          {demo.category}
                        </span>

                        <span className="flex h-9 min-w-9 items-center justify-center rounded-full border border-white/15 bg-slate-950/30 px-2 text-[10px] font-bold text-white backdrop-blur-xl">
                          {demo.number}
                        </span>
                      </div>

                      {/* Featured marker */}

                      {isFeatured && (
                        <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-200 backdrop-blur-xl">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          Featured System
                        </div>
                      )}

                      {/* Hover arrow */}

                      <div className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Content */}

                    <div className="p-6 md:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-600">
                            Automation {demo.number}
                          </p>

                          <h3 className="mt-2 text-xl font-bold leading-tight tracking-tight text-slate-950 md:text-2xl">
                            {demo.title}
                          </h3>
                        </div>

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition-all duration-300 group-hover:border-cyan-200 group-hover:bg-cyan-50">
                          <ArrowUpRight className="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-600" />
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {demo.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                        <span className="text-xs font-semibold text-slate-400 transition-colors duration-300 group-hover:text-cyan-600">
                          Explore Interactive Demo
                        </span>

                        <div className="flex items-center gap-1.5">
                          <span className="h-1 w-1 rounded-full bg-slate-200 transition-colors group-hover:bg-cyan-400" />
                          <span className="h-1 w-1 rounded-full bg-slate-200 transition-colors group-hover:bg-cyan-400" />
                          <span className="h-1 w-1 rounded-full bg-slate-200 transition-colors group-hover:bg-cyan-400" />
                        </div>
                      </div>
                    </div>

                    {/* Accent */}

                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Automation CTA */}

          <div className="relative mt-10 overflow-hidden rounded-[30px] border border-slate-800 bg-slate-950 p-7 shadow-2xl shadow-slate-300/30 md:p-10">
            {/* Grid */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Glow */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />

            <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-cyan-300">
                  <Bot className="h-4 w-4" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
                    Build Your Own System
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Have a repetitive business process?
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                  Tell us how your business works today. We'll identify
                  where technology, automation or AI can remove manual
                  effort and create a better workflow.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                Discuss Your Workflow

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            AI & AUTOMATION USE CASES
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-70px" }}
          className="mt-36"
        >
          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-600">
              <span className="h-px w-6 bg-cyan-400" />
              Use Cases
              <span className="h-px w-6 bg-cyan-400" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Where We Apply AI & Automation
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              From lead management to internal operations, we identify
              repetitive processes and turn them into efficient,
              connected workflows.
            </p>
          </div>

          {/* Use Case Grid */}

          <div className="mx-auto mt-14 grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <div
                key={useCase}
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-100/40"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                  <span className="text-xs font-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <span className="text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:text-slate-950">
                  {useCase}
                </span>

                <ArrowUpRight className="ml-auto h-4 w-4 text-slate-200 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-500" />

                <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-500 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>

          {/* Bottom Message */}

          <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-[24px] border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-blue-50 px-6 py-6 text-center shadow-sm">
            <div className="relative">
              <p className="text-sm leading-7 text-slate-600">
                <span className="font-bold text-slate-950">
                  Have a repetitive process?
                </span>{" "}
                We can analyse the workflow, identify automation
                opportunities and design a system around your actual
                business requirements.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            AUTOMATION WORKFLOW
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-70px" }}
          className="mt-36"
        >
          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 shadow-sm">
              <Workflow className="h-3.5 w-3.5 text-cyan-500" />
              Automation Workflow
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              From Manual Process
              <span className="block text-cyan-600">
                to Intelligent System
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              We don't automate for the sake of automation. We first
              understand the process, identify the right opportunities,
              and then build a system that creates measurable
              operational value.
            </p>
          </div>

          {/* Workflow */}

          <div className="relative mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {/* Connecting line */}

            <div className="pointer-events-none absolute left-[12%] right-[12%] top-12 hidden h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent xl:block" />

            {workflowSteps.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="group relative rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/50"
                >
                  {/* Step */}

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:border-cyan-200 group-hover:bg-cyan-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-4xl font-black tracking-tight text-cyan-500/10 transition-colors duration-300 group-hover:text-cyan-500/20">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300 transition-colors duration-300 group-hover:text-cyan-600">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Process Complete
                  </div>

                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* =======================================================
            FINAL CTA
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-70px" }}
          className="relative mt-36 overflow-hidden rounded-[38px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-9 shadow-2xl shadow-slate-200/50 md:p-14 lg:p-16"
        >
          {/* Decorative glows */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/15 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

          {/* Decorative grid */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,23,42,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.025) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          <div className="relative mx-auto max-w-4xl text-center">
            {/* Icon */}

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-100 bg-white shadow-lg shadow-cyan-100/50">
              <Sparkles className="h-5 w-5 text-cyan-600" />
            </div>

            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-600">
              Let's Build Something Meaningful
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-slate-950 md:text-5xl">
              Your Next Digital Product
              <span className="block text-cyan-600">
                Starts Here.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Whether you need a premium website, scalable web
              application, AI integration, automation platform or
              enterprise software, Nexora Labs is ready to bring your
              vision to life.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-cyan-600/20"
              >
                Start Your Project

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
              >
                Explore Services
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Trust line */}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              <span>Strategy</span>
              <span className="h-1 w-1 rounded-full bg-cyan-400" />
              <span>Engineering</span>
              <span className="h-1 w-1 rounded-full bg-cyan-400" />
              <span>Automation</span>
              <span className="h-1 w-1 rounded-full bg-cyan-400" />
              <span>Growth</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   SMALL DECORATIVE ICON
========================================================= */

function ArrowDownIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M8 2.5V13.5M4.5 10L8 13.5L11.5 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
