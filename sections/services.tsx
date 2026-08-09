"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Cpu,
  Bot,
  Cloud,
  Palette,
  Workflow,
  Megaphone,
  Settings2,
  PenTool,
  CheckCircle2,
} from "lucide-react";

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
      "High-performance websites, SaaS platforms, dashboards and enterprise web applications built for speed, usability and long-term scalability.",
  },
  {
    icon: Bot,
    number: "02",
    title: "AI Solutions",
    description:
      "AI-powered assistants, intelligent workflows, document processing, recommendation systems and custom AI integrations for modern businesses.",
  },
  {
    icon: Workflow,
    number: "03",
    title: "Business Automation",
    description:
      "Automate repetitive business processes, CRM workflows, reporting, APIs and integrations to reduce manual work and improve efficiency.",
  },
  {
    icon: Settings2,
    number: "04",
    title: "Automation Systems",
    description:
      "Custom automation systems that connect your tools, move data between platforms and turn complex manual operations into streamlined workflows.",
  },
  {
    icon: Cloud,
    number: "05",
    title: "Cloud & Infrastructure",
    description:
      "Scalable cloud architecture, deployment pipelines, hosting, monitoring and infrastructure designed for reliability and continuous growth.",
  },
  {
    icon: Palette,
    number: "06",
    title: "UI / UX Design",
    description:
      "Premium digital interfaces designed around usability, accessibility, conversion and exceptional user experiences across every device.",
  },
  {
    icon: Cpu,
    number: "07",
    title: "Custom Software",
    description:
      "Tailor-made software engineered around your business processes, operational requirements and long-term growth objectives.",
  },
  {
    icon: Megaphone,
    number: "08",
    title: "Digital Marketing",
    description:
      "Data-driven digital marketing strategies covering SEO, search visibility, performance campaigns, analytics and conversion-focused growth.",
  },
  {
    icon: PenTool,
    number: "09",
    title: "Content Creation",
    description:
      "Strategic digital content including website copy, social media content, marketing creatives and brand-focused communication designed to engage audiences.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* =========================================================
BACKGROUND
========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-140px] top-[-140px] h-[440px] w-[440px] rounded-full bg-cyan-400/8 blur-[150px]" />

        <div className="absolute right-[-140px] top-[35%] h-[440px] w-[440px] rounded-full bg-blue-500/8 blur-[150px]" />

        <div className="absolute bottom-[-140px] left-[-140px] h-[440px] w-[440px] rounded-full bg-cyan-400/6 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50/80 px-4 py-2 shadow-sm backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-cyan-600" />

            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-cyan-700">
              Our Services
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            Digital Solutions
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Built For Growth
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            From software engineering and AI to automation, digital marketing and content creation,
            we help businesses build, launch and grow stronger digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-cyan-600 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-xl hover:shadow-cyan-600/20"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
            >
              View Our Work
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
                {/* Soft Hover Glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/0 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/10" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-500/0 blur-3xl transition-all duration-500 group-hover:bg-blue-500/10" />

                {/* Top Row */}

                <div className="relative flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-200 group-hover:shadow-md">
                    <Icon className="h-6 w-6 text-cyan-600 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <span className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-slate-300 transition-all duration-300 group-hover:border-cyan-100 group-hover:bg-cyan-50 group-hover:text-cyan-500">
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
        DEVELOPMENT & GROWTH PROCESS
    ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-cyan-600">
              Our Process
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              From Strategy to Growth
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              Whether we're building software, automating operations or growing your digital
              presence, our process stays focused on measurable business outcomes.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "Understanding your business, audience, goals, challenges and technical requirements.",
              },
              {
                number: "02",
                title: "Strategy",
                description:
                  "Defining the right product, technology, marketing and content strategy for your objectives.",
              },
              {
                number: "03",
                title: "Design & Build",
                description:
                  "Creating polished experiences and reliable digital systems using modern technologies.",
              },
              {
                number: "04",
                title: "Launch",
                description:
                  "Deploying, testing, optimizing and preparing your product or campaign for real-world users.",
              },
              {
                number: "05",
                title: "Grow & Optimize",
                description:
                  "Using analytics, automation and continuous improvements to strengthen long-term performance.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex items-start justify-between">
                  <p className="text-5xl font-black tracking-tight text-cyan-600/40 transition-colors duration-300 group-hover:text-cyan-600/90">
                    {step.number}
                  </p>

                  <CheckCircle2 className="h-5 w-5 text-slate-200 transition-colors duration-300 group-hover:text-cyan-500/60" />
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900">{step.title}</h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-500 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* =======================================================
        TECHNOLOGY & DIGITAL STACK
    ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-cyan-600">
              Technology & Digital Stack
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Modern Tools. Smarter Execution.
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              We combine modern development technologies with AI, analytics, marketing and
              automation tools to create complete digital solutions.
            </p>
          </div>

          <div className="mx-auto mt-16 flex max-w-6xl flex-wrap justify-center gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "JavaScript",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Tailwind CSS",
              "Framer Motion",
              "Git",
              "Docker",
              "AWS",
              "Vercel",
              "OpenAI",
              "REST APIs",
              "GraphQL",
              "Google Analytics",
              "Google Search Console",
              "SEO",
              "Google Ads",
              "Meta Ads",
              "Marketing Automation",
              "AI Automation",
              "Content Strategy",
            ].map((tech) => (
              <div
                key={tech}
                className="group rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-md"
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
        WHAT WE CAN HELP WITH
    ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-cyan-600">
              What We Can Help With
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              One Partner Across Your Digital Journey
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              From your first website to automation, marketing and ongoing digital growth, Nexora
              Labs can support every stage of your journey.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Build",
                description:
                  "Launch websites, web applications, SaaS products and custom software built around your business.",
              },
              {
                title: "Automate",
                description:
                  "Remove repetitive manual work by connecting systems, workflows, APIs and intelligent AI automation.",
              },
              {
                title: "Market",
                description:
                  "Improve visibility and reach through SEO, digital campaigns, analytics and conversion-focused strategies.",
              },
              {
                title: "Create",
                description:
                  "Develop useful, engaging and brand-aligned content for websites, social platforms and marketing campaigns.",
              },
              {
                title: "Optimize",
                description:
                  "Improve performance, usability, security, accessibility and search visibility across your digital presence.",
              },
              {
                title: "Scale",
                description:
                  "Build reliable digital foundations that can evolve with your customers, operations and business goals.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-500 transition-transform duration-300 group-hover:scale-150" />

                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
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
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-100 bg-white shadow-sm">
              <Sparkles className="h-5 w-5 text-cyan-600" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Ready to Grow Your Digital Presence?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              Whether you need a new website, custom software, AI automation, digital marketing or
              content creation, we're ready to help turn your ideas into measurable results.
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
