import type { Metadata } from "next";
import { Livvic, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ScrollToTop } from "@/components/scroll-to-top";
import { TopNav } from "@/components/top-nav";
import "./globals.css";

const livvic = Livvic({
  variable: "--font-livvic",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "Fund a Regional AI Innovation Ecosystem | Playlab",
  description:
    "Partner with Playlab to build K-12 AI innovation in your region. Explore modular components, meet launched networks, and start the partnership conversation.",
  applicationName: "Playlab Regional Ecosystems",
  authors: [{ name: "Playlab Education Inc.", url: "https://www.playlab.ai" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fund a Regional AI Innovation Ecosystem | Playlab",
    description:
      "Partner with Playlab to build K-12 AI innovation in your region. Networks of schools, districts, and communities developing AI capacity together. Start the conversation.",
    type: "website",
    url: "/",
    siteName: "Playlab Regional Ecosystems",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${livvic.variable} ${montserrat.variable}`}>
      <body>
        <TopNav />
        {children}
        <ScrollToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
