"use client";


import {
  Cpu,
  Database,
  Globe,
  Layers,
  Rocket,
  ShieldCheck,
  Megaphone,
  Workflow,
  PenTool,
} from "lucide-react";

import { company, technologies } from "@/data/site-data";

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


const highlights = [
  {
    icon: Rocket,
    title: "High Performance",
    description:
      "Fast loading applications engineered for exceptional speed and user experience.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Development",
    description:
      "Security-first architecture following modern industry best practices.",
  },
  {
    icon: Globe,
    title: "Scalable Solutions",
    description:
      "Applications designed to grow with your business and customer demands.",
  },
  {
    icon: Database,
    title: "Reliable Infrastructure",
    description:
      "Robust backend systems and databases built for long-term reliability.",
  },
  {
    icon: Layers,
    title: "Modern Architecture",
    description:
      "Clean codebases with maintainable, component-driven development.",
  },
  {
    icon: Cpu,
    title: "AI Ready",
    description:
      "Built with modern AI integrations, automation and intelligent workflows.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Data-driven digital marketing strategies designed to strengthen your online presence and generate meaningful business growth.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Intelligent business automation that streamlines repetitive processes, connects systems and improves operational efficiency.",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description:
      "Strategic content designed to communicate your brand, engage your audience and support consistent digital growth.",
  },
];



export default function Technologies() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-slate-900 lg:py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-400/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600">
            Technologies
          </p>

          <h1 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
            Built Using Modern Technologies
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-600">
            At {company.name}, we carefully select proven technologies that deliver outstanding
            performance, scalability, security, and long-term maintainability for every project.
          </p>
        </motion.div>

        {/* Technology Stack */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {technologies.map((technology) => (
              <div
                key={technology}
                className="group rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
              >
                <h3 className="text-base font-semibold transition-colors group-hover:text-cyan-600">
                  {technology}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highlights */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600">
              Engineering Principles
            </p>

            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              Technology Backed By Best Practices
            </h2>

            <p className="mt-6 text-lg text-[15px] leading-7 text-slate-600">
              Great software isn't just about choosing the right framework— it's about applying
              engineering principles that ensure long-term quality and business success.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-cyan-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                    <Icon className="h-6 w-6 text-cyan-600" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
        {/* Development Workflow */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600">
              Development Process
            </p>

            <h2 className="mt-5 text-3xl font-bold md:text-4xl">Technology With Purpose</h2>

            <p className="mt-6 text-lg text-[15px] leading-7 text-slate-600">
              Every technology we adopt is selected for reliability, scalability, maintainability,
              and long-term business value.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your business, audience, goals, challenges, and requirements before defining the right strategy.",
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description:
                  "Creating the right product, technology, automation, marketing, and content strategy around your business objectives.",
              },
              {
                step: "03",
                title: "Build & Create",
                description:
                  "Developing digital products, implementing automation, creating content, and executing campaigns with a focus on quality and consistency.",
              },
              {
                step: "04",
                title: "Launch & Grow",
                description:
                  "Launching, optimizing, measuring performance, and continuously improving your digital presence for sustainable growth.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
              >
                <p className="text-4xl font-black text-cyan-600/25 transition-colors group-hover:text-cyan-600/40">
                  {item.step}
                </p>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">{item.title}</h3>

                <p className="mt-3 text-[15px] leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

        </motion.div>

        {/* Why Our Stack */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600">
              Why This Stack
            </p>

            <h2 className="mt-5 text-3xl font-bold md:text-4xl">Modern Tools. Better Results.</h2>

            <p className="mt-6 text-lg text-[15px] leading-7 text-slate-600">
              Our technology choices focus on delivering exceptional user experiences while ensuring
              applications remain secure, maintainable, and future-ready.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Performance First",
                description:
                  "Fast-loading applications with optimized rendering and efficient code.",
              },
              {
                title: "Future Ready",
                description:
                  "Modern frameworks supported by active communities and long-term adoption.",
              },
              {
                title: "Scalable Architecture",
                description:
                  "Software that grows with your business without requiring major rewrites.",
              },
              {
                title: "Developer Experience",
                description:
                  "Clean code, reusable components, and maintainable project structures.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-cyan-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                value: `${technologies.length}+`,
                label: "Core Technologies",
              },
              {
                value: "100%",
                label: "Responsive Design",
              },
              {
                value: "Modern",
                label: "Development Practices",
              },
              {
                value: "AI",
                label: "Ready Solutions",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:border-cyan-300 hover:shadow-lg"
              >
                <h3 className="text-4xl font-bold text-cyan-600">{item.value}</h3>

                <p className="mt-2 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 overflow-hidden rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-blue-50 to-white p-6 shadow-sm md:p-16"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Let's Build With Modern Technology</h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-[15px] leading-7 text-slate-600">
              From premium websites to enterprise applications and AI-powered solutions, we use
              proven technologies to deliver software that's fast, scalable, and built for long-term
              success.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white shadow-sm transition-all hover:scale-105 hover:bg-cyan-700"
              >
                Start Your Project
              </a>

              <a
                href="/services"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition hover:border-cyan-300 hover:bg-slate-50"
              >
                Explore Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
