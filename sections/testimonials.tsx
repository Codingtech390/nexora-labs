"use client";

import { Quote } from "lucide-react";

import { company, testimonials } from "@/data/site-data";

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

export default function Testimonials() {
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
            Testimonials
          </p>

          <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
            Trusted by Teams That Build
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-600">
            We work closely with every client to deliver thoughtful, scalable software. Here's what that experience feels like.
          </p>
        </motion.div>

        {/* Testimonials Grid */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
            >
              <Quote className="h-8 w-8 text-cyan-600" />

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                "{testimonial.review}"
              </p>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <h3 className="text-base font-semibold">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-xs text-slate-600">
                  {testimonial.position}
                </p>

                <p className="mt-0.5 text-xs text-cyan-600">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Section */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-blue-50 to-white p-10 text-center shadow-sm md:p-16"
        >
          <h2 className="text-2xl font-bold md:text-4xl">
            Let's Build Something Exceptional
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
            Whether you're launching a startup or modernizing an existing business, we're ready to build your next digital product.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white shadow-sm transition-all hover:scale-105 hover:bg-cyan-700"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
