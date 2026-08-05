import type { Metadata } from "next";

import FAQ from "@/sections/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Nexora Labs",
  description:
    "Find answers to common questions about our software engineering services, website development, AI solutions, project process, timelines, pricing, and support.",
};

export default function FAQPage() {
  return (
    <main>
      <FAQ />
    </main>
  );
}