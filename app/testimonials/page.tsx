import type { Metadata } from "next";

import Testimonials from "@/sections/testimonials";

export const metadata: Metadata = {
  title: "Client Testimonials | Nexora Labs",
  description:
    "Read what clients say about working with Nexora Labs. Discover how we deliver premium software engineering, AI solutions, scalable web applications, and exceptional digital experiences.",
};

export default function TestimonialsPage() {
  return (
    <main>
      <Testimonials />
    </main>
  );
}