import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Apex Plumbing Co. | Austin's #1 Rated Plumber | 24/7 Emergency Service",
  description:
    "Apex Plumbing Co. is Austin, TX's most trusted plumbing company. Licensed & insured with 15+ years experience. Same-day service, upfront pricing, and 24/7 emergency repairs. Call (512) 555-0182.",
  keywords: "plumber Austin TX, emergency plumber, plumbing repair, drain cleaning, water heater, Apex Plumbing",
  openGraph: {
    title: "Apex Plumbing Co. | Austin's #1 Rated Plumber",
    description: "Licensed & insured plumber in Austin, TX. 15+ years experience, 24/7 emergency service, free estimates.",
    type: "website",
    locale: "en_US",
    siteName: "Apex Plumbing Co.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
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
