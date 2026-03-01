import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import StarsCanvas from "@/component/StarBackground";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Basit | Full-Stack Developer & UI/UX Designer | Portfolio",
  description:
    "Explore the portfolio of Abdul Basit, a Karachi-based full-stack developer & UI/UX designer who crafts pixel-perfect, high-performance web apps with Next.js, React & Tailwind CSS. View recent projects, Coursera certifications and get in touch.",
  keywords: [
    "Next.js portfolio",
    "React developer Karachi",
    "full-stack developer Pakistan",
    "UI/UX designer portfolio",
    "Abdul Basit developer",
    "modern web apps",
  ],
  openGraph: {
    title: "Abdul Basit's Portfolio",
    description:
      "High-performance web apps & delightful user experiences crafted with Next.js, React & Tailwind CSS.",
    url: "https://yourdomain.vercel.app",
    siteName: "Abdul Basit Portfolio",
    images: [
      {
        url: "https://abdulsport.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdul Basit Portfolio Preview",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Basit | Full-Stack Developer",
    description: "Modern web & UI/UX portfolio built with Next.js.",
    images: ["https://abdulsport.vercel.app/og-image.png"],
  },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <StarsCanvas />
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
