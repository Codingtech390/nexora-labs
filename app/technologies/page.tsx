import type { Metadata } from "next";

import Technologies from "@/sections/technologies";

export const metadata: Metadata = {
  title: "Technologies | Nexora Labs",
  description:
    "Discover the modern technologies, frameworks, tools, and platforms we use to engineer fast, scalable, secure, and high-performance digital products.",
};

export default function TechnologiesPage() {
  return (
    <main>
      <Technologies />
    </main>
  );
}