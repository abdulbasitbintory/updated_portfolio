import { TimelineDemo } from "@/component/Timeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Follow Abdul Basit's educational journey from high school through university, studying Software Engineering at SZABIST Karachi.",
};

export default function EducationPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-balance">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-accent">
            Education
          </span>{" "}
          Journey
        </h1>
        <p className="text-center text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
          My academic path from foundational learning to advanced software engineering
        </p>
      </div>
      <TimelineDemo />
    </div>
  );
}
