import { company } from "@/data/site-data";
import Hero from "@/sections/hero";
import Technologies from "@/sections/technologies";
import Testimonials from "@/sections/testimonials";
import FAQ from "@/sections/faq";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Testimonials />
      <Technologies />
      <FAQ />
    </main>
  );
}
