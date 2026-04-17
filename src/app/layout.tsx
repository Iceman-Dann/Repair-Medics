import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { business } from "@/lib/business";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${business.name} | Window, Door, Glass and Screen Repair | Chicago, IL`,
  description:
    `${business.name} serves ${business.areaShort} with window repair, door repair, glass installation, screen repair, and broader property repair work. Call ${business.phoneDisplay}.`,
  keywords: [
    "Repair Medics",
    "window repair Chicago",
    "door repair Chicago",
    "glass installation Chicago",
    "screen repair Chicago",
    "handyman Chicago",
  ],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: `${business.name} | Chicago Repair and Installation Services`,
    description:
      `Window, door, glass, screen, and general repair support across ${business.areaShort}. Call ${business.phoneDisplay}.`,
    type: "website",
    locale: "en_US",
    siteName: business.name,
    images: [
      {
        url: '/logo.png',
        width: 100,
        height: 100,
        alt: `${business.name} Logo`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-inter antialiased">
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
