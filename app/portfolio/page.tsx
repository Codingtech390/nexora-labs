import type { Metadata } from "next";

import Portfolio from "@/sections/portfolio";

export const metadata: Metadata = {
  title: "Portfolio | Nexora Labs",
  description:
    "Discover our portfolio of software engineering projects, web applications, AI-powered solutions, automation platforms, and modern digital experiences.",
};

export default function PortfolioPage() {
  return (
    <main>
      <Portfolio />
    </main>
  );
}