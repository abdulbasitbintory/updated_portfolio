import RecentProjects from "@/component/RecentProjects";
import Approach from "@/component/Approach";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Abdul Basit's portfolio of web applications, mobile apps, and software engineering projects built with modern technologies.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <RecentProjects />
      <Approach />
    </div>
  );
}
