"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

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
    <section className="relative overflow-hidden bg-white pt-10 sm:pt-20 lg:pt-10 max-sm:pt-16">
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[150px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-slate-100" />
      </div>

      {/* Hero Content */}

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 py-10 lg:px-8 lg:py-14">
        <div className="grid w-full gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative z-10"
          >
            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.8,
              }}
              className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl"
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
              className="mt-4 max-w-xl text-base leading-7 text-slate-600 md:text-lg"
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
              className="mt-6 flex flex-wrap gap-5"
            >
              {/* Primary CTA → Contact */}

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-700 hover:shadow-xl"
              >
                {hero.primaryButton}

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA → Portfolio */}

              <Link
                href="/portfolio"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-cyan-300 hover:bg-slate-50 hover:text-cyan-700 hover:shadow-md"
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
              className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {statistics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:border-cyan-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-cyan-600">{item.value}</h3>

                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
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

            <div className="absolute h-[360px] w-[360px] rounded-full bg-blue-400/10 blur-[120px]" />

            {/* Hero Image */}

            <div className="relative z-10 flex flex-col items-center gap-6">
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/hero.png"
                  alt="Nexora Labs Hero"
                  width={900}
                  height={900}
                  priority
                  className="h-auto w-full max-w-xl object-contain lg:max-w-[700px]"
                />
              </motion.div>

              {/* Technology Badge */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.6,
                }}
                className="mt-8 rounded-full border border-cyan-200 bg-white px-5 py-2 shadow-md"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-600" />

                  <span className="text-sm font-medium text-cyan-700">{hero.badge}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
