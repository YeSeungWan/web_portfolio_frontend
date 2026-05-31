// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Firmware Dev Portfolio",
  description: "Hosted on Synology NAS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-zinc-950 text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}