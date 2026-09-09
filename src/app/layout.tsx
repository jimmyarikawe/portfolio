import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

// Inter carries body/UI text; Geist Sans is reserved for display headings.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jimmyarikawe.com"),
  title: "Jimmy Arikawe — Lead / Staff Product Designer",
  description:
    "Lead / Staff Product Designer with strategic domain authority. Designing mission-critical software where business complexity, deep interaction architecture, and emerging AI intersect. Ex-Pentagram, Radical Company, Omits · MSc in Artificial Intelligence (Distinction).",
  keywords: [
    "Jimmy Arikawe",
    "Lead Product Designer",
    "Staff Product Designer",
    "AI Interaction Design",
    "Agentic Workflows",
    "Human-in-the-loop Systems",
    "Evals",
    "Fintech Product Design",
    "Enterprise Systems",
    "Pentagram",
    "Radical Company",
    "London Product Designer",
  ],
  authors: [{ name: "Jimmy Arikawe" }],
  openGraph: {
    title: "Jimmy Arikawe — Lead / Staff Product Designer",
    description:
      "Designing mission-critical software where business complexity, deep interaction architecture, and emerging AI intersect. Ex-Pentagram, Radical Company, Omits · MSc Artificial Intelligence (Distinction).",
    url: "https://jimmyarikawe.com",
    siteName: "Jimmy Arikawe Portfolio",
    images: [
      {
        url: "/images/branding/ja-monogram.png",
        width: 200,
        height: 201,
        alt: "Jimmy Arikawe Portfolio",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

const THEME_STORAGE_KEY = "portfolio-theme";

// Runs synchronously while the browser parses <head>, before first paint, so
// the correct theme is on the DOM before React ever hydrates. See:
// node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md
const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${inter.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <ThemeProvider>
          <CustomCursor />
          <Header />
          <main id="main-content" className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
