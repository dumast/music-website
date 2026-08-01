import type { Metadata } from "next";
import { site } from "@/content/site";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: `${site.artistName} — Music`,
  description: site.bio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-dvh bg-[#0A0402] text-[#F5E8D8] antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
