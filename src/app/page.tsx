import Hero from "@/component/Hero";
import ProductBuilderShowcase from "@/component/ProductBuilderShowcase";
import DedixorSection from "@/component/DedixorSection";
import TestimonialCarousel from "@/component/TestimonialCarousel";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ProductBuilderShowcase />
      <DedixorSection />
      <TestimonialCarousel />
    </div>
  );
}
