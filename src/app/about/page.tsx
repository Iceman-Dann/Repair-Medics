import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: `About ${business.name} | Chicago Repair Services`,
  description:
    `Learn how ${business.name} is positioned online as a one stop repair shop for windows, doors, glass, screens, and broader property repair work in ${business.city}, ${business.state}.`,
  openGraph: {
    title: `About ${business.name}`,
    description:
      `A Chicago-area repair company focused on windows, doors, glass, screens, and practical multi-trade repair work.`,
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
