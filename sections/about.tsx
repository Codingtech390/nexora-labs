"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

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
