import { ScrollToTop } from "@/components/scroll-to-top";
import { TopNav } from "@/components/top-nav";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopNav />
      {children}
      <ScrollToTop />
    </>
  );
}
