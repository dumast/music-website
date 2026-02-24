import type { Metadata } from "next";
import { site } from "@/content/site";
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
      <body className="min-h-dvh bg-[#010407] text-[#DDE4EC] antialiased">
        {children}
      </body>
    </html>
  );
}
