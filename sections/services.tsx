"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Cpu,
  Bot,
  Cloud,
  Palette,
  Workflow,
  CheckCircle2,
} from "lucide-react";

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

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Web Development",
    description:
      "High-performance marketing websites, SaaS platforms, dashboards and enterprise web applications built with modern technologies.",
  },
  {
    icon: Bot,
    number: "02",
    title: "AI Solutions",
    description:
      "AI-powered assistants, intelligent workflows, document processing, recommendation engines and custom AI integrations.",
  },
  {
    icon: Workflow,
    number: "03",
    title: "Business Automation",
    description:
      "Automate repetitive business processes, CRM workflows, APIs and integrations to improve operational efficiency.",
  },
  {
    icon: Cloud,
    number: "04",
    title: "Cloud & Infrastructure",
    description:
      "Scalable cloud architecture, deployment pipelines, monitoring and infrastructure built for reliability.",
  },
  {
    icon: Palette,
    number: "05",
    title: "UI / UX Design",
    description:
      "Premium user interfaces designed around usability, accessibility and exceptional digital experiences.",
  },
  {
    icon: Cpu,
    number: "06",
    title: "Custom Software",
    description:
      "Tailor-made software engineered specifically around your business processes and long-term growth goals.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Ambient glows */}

        <div className="absolute left-[-140px] top-[-140px] h-[440px] w-[440px] rounded-full bg-cyan-400/8 blur-[150px]" />

        <div className="absolute bottom-[-140px] right-[-140px] h-[440px] w-[440px] rounded-full bg-blue-500/8 blur-[150px]" />

        {/* Subtle grid */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

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

            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-cyan-700">
              Our Services
            </span>
          </div>

          {/* Heading */}

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            Software Engineering
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Built For Growth
            </span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            We partner with startups, businesses and enterprises to design,
            develop and scale premium digital products that deliver measurable
            business value.
          </p>

          {/* CTA */}

          <div className="mt-9 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-cyan-600 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-xl hover:shadow-cyan-600/20"
            >
              Start Your Project

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* =======================================================
            SERVICES GRID
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl hover:shadow-slate-200/60 sm:p-8"
              >
                {/* Background Hover Glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/0 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/10" />

                {/* Top Row */}

                <div className="relative flex items-start justify-between">
                  {/* Icon */}

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-200 group-hover:shadow-md">
                    <Icon className="h-6 w-6 text-cyan-600" />
                  </div>

                  {/* Number */}

                  <span className="text-sm font-bold tracking-[0.2em] text-slate-200 transition-colors duration-300 group-hover:text-cyan-200">
                    {service.number}
                  </span>
                </div>

                {/* Content */}

                <div className="relative">
                  <h3 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Learn More */}

                <div className="relative mt-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 transition-colors duration-300 group-hover:text-cyan-700">
                  Learn More

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* Bottom Accent */}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </motion.div>

        {/* =======================================================
            DEVELOPMENT PROCESS
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-32"
        >
          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-cyan-600">
              Our Process
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              From Idea to Launch
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              Every successful product starts with a structured engineering
              process focused on solving real business problems.
            </p>
          </div>

          {/* Process Cards */}

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "Understanding your business, users, goals and technical requirements.",
              },
              {
                number: "02",
                title: "Design",
                description:
                  "Creating intuitive user experiences and scalable technical architecture.",
              },
              {
                number: "03",
                title: "Development",
                description:
                  "Building fast, secure and maintainable applications using modern technologies.",
              },
              {
                number: "04",
                title: "Launch & Scale",
                description:
                  "Deployment, optimization, monitoring and continuous improvements.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex items-start justify-between">
                  <p className="text-5xl font-black tracking-tight text-cyan-600/55 transition-colors group-hover:text-cyan-600/95">
                    {step.number}
                  </p>

                  <CheckCircle2 className="h-5 w-5 text-slate-200 transition-colors group-hover:text-cyan-500/60" />
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-500 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* =======================================================
            TECHNOLOGY STACK
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-32"
        >
          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-cyan-600">
              Technology Stack
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Modern Technologies
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              We leverage industry-leading technologies to build secure,
              scalable and future-ready digital products.
            </p>
          </div>

          {/* Technologies */}

          <div className="mx-auto mt-16 flex max-w-5xl flex-wrap justify-center gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Tailwind CSS",
              "Framer Motion",
              "Docker",
              "AWS",
              "OpenAI",
              "Vercel",
              "REST APIs",
              "GraphQL",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-md"
              >
                {tech}
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
          className="relative mt-32 overflow-hidden rounded-[36px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-10 shadow-xl shadow-slate-200/40 md:p-16"
        >
          {/* Decorative Glows */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          {/* Content */}

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-100 bg-white shadow-sm">
              <Sparkles className="h-5 w-5 text-cyan-600" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Ready to Build Your Next Product?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              Whether you're building from scratch, modernizing an existing
              platform, or integrating AI into your business, we're here to
              help turn your vision into reality.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-cyan-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-xl"
              >
                Start Your Project

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

