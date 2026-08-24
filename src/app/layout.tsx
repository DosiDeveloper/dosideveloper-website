import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fira_Code, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  fallback: ["Inter", "sans-serif"],
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  fallback: ["Fira Code", "monospace"],
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  fallback: ["Space Grotesk", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Dosi Dev Hub",
  description: "DOSI Developer Hub - Engineering the Future Through Code",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${spaceGrotesk.className} ${inter.className} ${firaCode.className}`}
    >
      <body>
        <a
          href="#main-content"
          className="fixed right-1 top-0 z-100 -translate-y-full focus:translate-y-0 bg-inherit text-on-primary px-4 py-2 text-sm font-body transition-transform"
        >
          Skip to content
        </a>
        <Navbar />
        <main
          id="main-content"
          className="min-h-full max-w-dvw flex flex-col items-center gap-30 md:gap-10 text-white overflow-hidden hud-grid"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
