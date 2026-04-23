import type { Metadata } from "next";
import { Livvic, Montserrat } from "next/font/google";
import "./globals.css";

const livvic = Livvic({
  variable: "--font-livvic",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Regional AI Innovation Ecosystems — Playlab",
  description:
    "Building infrastructure for education systems to cultivate AI agency, impact, and innovation. A funder partnership opportunity from Playlab.",
  openGraph: {
    title: "Regional AI Innovation Ecosystems — Playlab",
    description:
      "Networks of schools, districts, and local partners collaborating to build AI capacity together. Six modular components, $50K to $5M+ investment paths.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${livvic.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
