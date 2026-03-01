import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import StarsCanvas from "@/component/StarBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abdul Basit | Full-Stack Developer & Co-Founder",
    template: "%s | Abdul Basit Portfolio",
  },
  description:
    "Explore the portfolio of Abdul Basit, a Karachi-based full-stack developer & UI/UX designer who crafts pixel-perfect, high-performance web apps with Next.js, React & Tailwind CSS.",
  keywords: [
    "Next.js portfolio",
    "React developer Karachi",
    "full-stack developer Pakistan",
    "UI/UX designer portfolio",
    "Abdul Basit developer",
    "Dedixor co-founder",
  ],
  openGraph: {
    title: "Abdul Basit | Full-Stack Developer & Co-Founder",
    description:
      "High-performance web apps & delightful user experiences crafted with Next.js, React & Tailwind CSS.",
    url: "https://abdulsport.vercel.app",
    siteName: "Abdul Basit Portfolio",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Basit | Full-Stack Developer",
    description: "Modern web & UI/UX portfolio built with Next.js.",
  },
};

export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <StarsCanvas />
        <header>
          <Navbar />
        </header>
        <main className="pt-[70px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
