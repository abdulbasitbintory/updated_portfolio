import Approach from "@/component/Approach";
import Encryption from "@/component/Encryption";
import { ExpandableCardDemo } from "@/component/ExpandableCards";
import Hero from "@/component/Hero";
import { HeroParallaxDemo } from "@/component/HeroParallex";
import RecentProjects from "@/component/RecentProjects";
import Skills from "@/component/Skills";
import { TimelineDemo } from "@/component/Timeline";
import ProductBuilderShowcase from "@/component/ProductBuilderShowcase";
import DedixorSection from "@/component/DedixorSection";
import TestimonialCarousel from "@/component/TestimonialCarousel";
import ContactForm from "@/component/ContactForm";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="relative z-10">
        <Skills />
      </div>
      <ProductBuilderShowcase />
      <RecentProjects />
      <Approach />
      <div className="relative z-20">
        <ExpandableCardDemo />
      </div>
      <DedixorSection />
      <TestimonialCarousel />
      <TimelineDemo />
      <section id="contact" className="py-20">
        <div className="w-full max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your vision to life.
          </p>
          <ContactForm />
        </div>
      </section>
      <HeroParallexDemo />
      <Encryption />
    </main>
  );
}
