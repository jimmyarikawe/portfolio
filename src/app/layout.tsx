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
  title: {
    default: "Jimmy Arikawe — Senior Product Designer & Design Engineer",
    template: "%s",
  },
  description:
    "Senior Product Designer and design engineer with seven years across fintech, enterprise operations and AI. Product Lead at Omits; I design and build — research through to production front-end. Ex-Pentagram, Radical Company. MSc Artificial Intelligence (Distinction).",
  keywords: [
    "Jimmy Arikawe",
    "Senior Product Designer",
    "Design Engineer",
    "Product Lead",
    "Product Designer London",
    "Product Designer UK",
    "Fintech Product Designer",
    "Design Engineer",
    "AI Product Designer",
    "Design Systems",
    "Pentagram",
    "Radical Company",
  ],
  authors: [{ name: "Jimmy Arikawe" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jimmy Arikawe — Senior Product Designer & Design Engineer",
    description:
      "Seven years designing fintech, enterprise and AI products — and writing the front-end that ships them. Product Lead at Omits. Ex-Pentagram, Radical Company. MSc Artificial Intelligence (Distinction).",
    url: "https://jimmyarikawe.com",
    siteName: "Jimmy Arikawe",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jimmy Arikawe — Senior Product Designer & Design Engineer",
    description:
      "Seven years designing fintech, enterprise and AI products — and writing the front-end that ships them.",
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
