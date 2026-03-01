import type { Metadata } from "next";
import ContactSection from "@/component/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abdul Basit for collaboration, freelance work, or just to say hello.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactSection />
    </div>
  );
}
