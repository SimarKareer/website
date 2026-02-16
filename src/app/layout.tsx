import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Simar Kareer",
  description: "Personal site for Simar Kareer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.variable}>
        <header className="top-nav-wrap" aria-label="Primary">
          <nav className="top-nav">
            <Link className="top-nav-brand" href="/">
              Simar Kareer
            </Link>
            <Link className="top-nav-tab" href="/papers">
              Papers
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
