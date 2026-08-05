
"use client";

import { ChevronDown, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";

import { company, faq, faqStats, faqBenefits } from "@/data/site-data";

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

export default function FAQ() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20 text-slate-900 md:py-28">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-left cyan glow */}
        <div className="absolute left-[-140px] top-[-120px] h-[360px] w-[360px] rounded-full bg-cyan-400/8 blur-[130px]" />

        {/* Bottom-right blue glow */}
        <div className="absolute bottom-[-120px] right-[-120px] h-[380px] w-[380px] rounded-full bg-blue-500/8 blur-[140px]" />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* Soft fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/30 to-white/70" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        {/* =======================================================
            HERO
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50/80 px-4 py-2 shadow-sm backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-cyan-600" />

            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-cyan-700">
              Frequently Asked Questions
            </span>
          </div>

          {/* Heading */}

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Everything You Need
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              To Know
            </span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            Have questions about working with {company.name}? Here are the
            answers to the questions we're asked most often.
          </p>
        </motion.div>

        {/* =======================================================
            FAQ LIST
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 space-y-4"
        >
          {faq.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                  isOpen
                    ? "border-cyan-200 shadow-lg shadow-slate-200/50"
                    : "border-slate-200 hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {/* Question */}

                <button
                  onClick={() => setOpenItem(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-slate-50/70 md:px-7 md:py-6"
                >
                  <div className="flex items-center gap-4">
                    {/* Question Number */}

                    <span
                      className={`hidden h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold sm:flex ${
                        isOpen
                          ? "bg-cyan-50 text-cyan-700"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className={`pr-2 text-base font-semibold transition-colors md:text-lg ${
                        isOpen ? "text-slate-900" : "text-slate-800"
                      }`}
                    >
                      {item.question}
                    </h3>
                  </div>

                  {/* Chevron */}

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen
                        ? "bg-cyan-50 text-cyan-600"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>

                {/* Answer */}

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-slate-100 px-6 py-5 sm:pl-[4.5rem] md:px-7 md:py-6 md:pl-[4.75rem]">
                    <p className="max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* =======================================================
            QUICK STATS
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {faqStats.map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-slate-200/50"
            >
              <h3 className="text-3xl font-bold tracking-tight text-cyan-600">
                {item.value}
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* =======================================================
            WHY WORK WITH US
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24"
        >
          {/* Section Heading */}

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-cyan-600">
              Why Choose Nexora Labs
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              More Than Just Development
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              We combine modern engineering, thoughtful design, and strategic
              thinking to build software that creates real business impact.
            </p>
          </div>

          {/* Benefits */}

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {faqBenefits.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/50"
              >
                {/* Number */}

                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-slate-300 transition-colors group-hover:text-cyan-500">
                    0{index + 1}
                  </span>

                  <CheckCircle2 className="h-5 w-5 text-cyan-500/60 transition-colors group-hover:text-cyan-600" />
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500 md:text-base">
                  {item.description}
                </p>

                {/* Bottom Accent */}

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* =======================================================
            CONTACT CTA
        ======================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 shadow-lg shadow-slate-200/40 md:p-12"
          >
            {/* Decorative Glows */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            {/* Content */}

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-100 bg-white shadow-sm">
                <Sparkles className="h-5 w-5 text-cyan-600" />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Still Have Questions?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
                Every project is unique. If you couldn't find the answer you're
                looking for, we'd be happy to discuss your ideas and answer
                your questions personally.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-cyan-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-xl"
                >
                  Contact Us
                </a>

                <a
                  href="/services"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

