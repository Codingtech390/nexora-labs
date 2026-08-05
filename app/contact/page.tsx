import type { Metadata } from "next";

import Contact from "@/sections/contact";

export const metadata: Metadata = {
  title: "Contact Us | Nexora Labs",
  description:
    "Get in touch with Nexora Labs to discuss your next software project, AI solution, web application, or digital transformation initiative.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}