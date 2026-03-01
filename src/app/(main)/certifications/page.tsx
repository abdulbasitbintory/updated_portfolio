import { ExpandableCardDemo } from "@/component/ExpandableCards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "View Abdul Basit's professional certifications including Google Cybersecurity, Stanford ML, and more.",
};

export default function CertificationsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <ExpandableCardDemo />
    </div>
  );
}
