"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

import { navigation } from "@/data/site-data";

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200 bg-white/80 shadow-sm backdrop-blur-xl"
            : "bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}

          <Link href="/" className="group flex items-center">
            <Image
              src="/Nexora-logo-1.png"
              alt="Nexora Labs"
              width={180}
              height={70}
              priority
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative rounded-full px-5 py-2 text-sm font-medium transition"
                >
                  <span
                    className={`relative z-10 transition-colors ${
                      active
                        ? "text-slate-900"
                        : "text-slate-600 hover:text-cyan-600"
                    }`}
                  >
                    {item.label}
                  </span>

                  {active && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-full border border-cyan-100 bg-cyan-50"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:scale-105 hover:bg-cyan-700"
            >
              Let's Talk
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="fixed left-0 right-0 top-20 z-40 border-b border-slate-200 bg-white/95 shadow-lg backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-6">
              {navigation.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-4 py-4 text-base font-medium transition ${
                      active
                        ? "bg-cyan-50 text-cyan-700"
                        : "text-slate-600 hover:bg-slate-100 hover:text-cyan-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-cyan-600 px-6 py-4 font-semibold text-white hover:bg-cyan-700"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
