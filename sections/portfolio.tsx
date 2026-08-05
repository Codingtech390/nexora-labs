
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ExternalLink,
  Code2,
  CheckCircle2,
} from "lucide-react";

import { projects } from "@/data/site-data";
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

export default function Portfolio() {
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
              Our Portfolio
            </span>
          </div>

          {/* Heading */}

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            Products Crafted With
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Precision & Innovation
            </span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            Every project reflects our commitment to premium engineering,
            thoughtful design, performance and scalable architecture.
          </p>

          {/* CTA */}

          <div className="mt-9 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-cyan-600 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-xl"
            >
              Start Your Project

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* =======================================================
            FEATURED PROJECTS
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 grid gap-7 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl hover:shadow-slate-200/60"
            >
              {/* Image */}

              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-50" />

                {/* Category */}

                <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-bold text-slate-800 shadow-lg backdrop-blur-xl">
                  {project.category}
                </div>

                {/* Hover Icon */}

                <div className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white/90 text-slate-900 opacity-0 shadow-lg backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>

              {/* Content */}

              <div className="p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                    {project.title}
                  </h3>

                  <Code2 className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition-colors duration-300 group-hover:text-cyan-500" />
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-500 transition-colors duration-200 group-hover:border-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                  <button className="group/link inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition-colors hover:text-cyan-700">
                    View Project

                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </button>

                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300">
                    Case Study
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* =======================================================
            CAPABILITIES
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
              What We Deliver
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Engineering That Creates Impact
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              Every solution is designed with scalability, performance,
              security and long-term business growth in mind.
            </p>
          </div>

          {/* Capability Cards */}

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                value: "Fast",
                label: "Performance Optimized",
              },
              {
                value: "Modern",
                label: "Technology Stack",
              },
              {
                value: "AI",
                label: "Intelligent Solutions",
              },
              {
                value: "100%",
                label: "Responsive Design",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <h3 className="text-4xl font-black tracking-tight text-cyan-600">
                  {item.value}
                </h3>

                <p className="mt-4 text-sm font-medium text-slate-500">
                  {item.label}
                </p>

                <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-cyan-500 transition-all duration-500 group-hover:w-16" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* =======================================================
            INDUSTRIES
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
              Industries
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Solutions Across Industries
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              We build software tailored to the unique needs of startups,
              enterprises and growing businesses across multiple industries.
            </p>
          </div>

          {/* Industry Pills */}

          <div className="mx-auto mt-16 flex max-w-5xl flex-wrap justify-center gap-3">
            {[
              "Healthcare",
              "Finance",
              "Education",
              "Manufacturing",
              "Real Estate",
              "Logistics",
              "Retail",
              "SaaS",
              "Artificial Intelligence",
              "Automation",
              "E-Commerce",
              "Corporate",
            ].map((industry) => (
              <div
                key={industry}
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-cyan-500" />

                {industry}
              </div>
            ))}
          </div>
        </motion.div>

        {/* =======================================================
            PROJECT WORKFLOW
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
              Workflow
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Our Delivery Process
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              From concept to deployment, every project follows a structured
              engineering process to ensure exceptional quality.
            </p>
          </div>

          {/* Workflow Cards */}

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
              },
              {
                step: "02",
                title: "Planning",
              },
              {
                step: "03",
                title: "Development",
              },
              {
                step: "04",
                title: "Launch",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex items-start justify-between">
                  <p className="text-5xl font-black tracking-tight text-cyan-500/15 transition-colors group-hover:text-cyan-500/25">
                    {item.step}
                  </p>

                  <CheckCircle2 className="h-5 w-5 text-slate-200 transition-colors group-hover:text-cyan-500/60" />
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  We work collaboratively with you throughout every phase,
                  ensuring transparency, quality and measurable results.
                </p>

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
              Let's Build Your Next Success Story
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              Whether you need a premium website, a scalable web application,
              AI integration or enterprise software, Nexora Labs is ready to
              bring your vision to life.
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
                href="/services"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

