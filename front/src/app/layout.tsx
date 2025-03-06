import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Pixel",
  description: "Personal portfolio showcasing web development projects and skills.",
  keywords: "portfolio, web development, frontend, React, Next.js, TypeScript",
  authors: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/alien.ico" />
      </head>
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/BackgroundAnimated.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <NavBar />
        <main className="min-h-screen flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
