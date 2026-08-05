import type { Metadata } from "next";

import About from "@/sections/about";

export const metadata: Metadata = {
  title: "About Us | Nexora Labs",
  description:
    "Learn about Nexora Labs, our mission, values, technologies, and our passion for building premium software, AI solutions, and scalable digital products.",
};

export default function AboutPage() {
  return (
    <main>
      <About />
    </main>
  );
}