import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Candela Villaverde — Fullstack Developer | Automation & AI Workflows (Remote)",
  description: "Fullstack Developer especializada en automatización de procesos e integraciones (n8n, Node.js, Next.js). Disponibilidad 100% remota para roles full-time o part-time.",
  keywords: "automation developer, n8n developer, workflow automation, integration developer, Next.js developer, remote developer, AI workflows",
  openGraph: {
    title: "Candela Villaverde — Fullstack Developer | Automation & AI Workflows",
    description: "Fullstack Developer especializada en automatización de procesos e integraciones.",
    url: "https://candelavillaverde.com",
    siteName: "Candela Villaverde Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased scanlines`}
      >
        {children}
      </body>
    </html>
  );
}
