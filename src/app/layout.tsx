import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* Geist Mono — local, no network needed */
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
/* Google Fonts (Cormorant Garamond, DM Serif Display, DM Sans)
   are loaded via @import in globals.css — runtime browser fetch,
   no build-time network required. */

export const metadata: Metadata = {
  title: "Aman Singh — Software Developer",
  description:
    "Software Developer with 2.5+ years of experience building scalable mobile and web applications. Skilled in Next.js, Flutter, and TypeScript.",
  keywords: ["Aman Singh", "Software Developer", "Next.js", "Flutter", "TypeScript", "React", "Full Stack", "Portfolio"],
  authors: [{ name: "Aman Singh" }],
  openGraph: {
    title: "Aman Singh — Software Developer",
    description: "Building scalable mobile & web experiences with Next.js, Flutter, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistMono.variable} font-sans antialiased bg-cream text-dark`}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
