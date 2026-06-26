import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adam Salama | Developpeur Full-Stack",
  description:
    "Portfolio d'Adam Salama, developpeur full-stack oriente performance, automatisation et applications metier.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#050608] antialiased selection:bg-[#89AACC] selection:text-[#050608]">
        {children}
      </body>
    </html>
  );
}
