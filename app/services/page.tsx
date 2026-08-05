import type { Metadata } from "next";

import Services from "@/sections/services";

export const metadata: Metadata = {
  title: "Our Services | Nexora Labs",
  description:
    "Explore our software engineering services including custom web development, AI solutions, cloud applications, automation, APIs, and scalable digital products.",
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
    </main>
  );
}