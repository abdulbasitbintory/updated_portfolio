import Skills from "@/component/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Explore the technical skills and technologies Abdul Basit uses to build modern web, mobile, and AI applications.",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <Skills />
    </div>
  );
}
