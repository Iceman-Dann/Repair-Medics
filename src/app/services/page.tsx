import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: `Services | ${business.name} | Chicago, IL`,
  description:
    `${business.name} is publicly associated with window repair and installation, door repair and replacement, glass installation, screen repair, handyman work, and broader repair support in ${business.city}, ${business.state}.`,
  openGraph: {
    title: `Services | ${business.name}`,
    description:
      `Explore the service categories most clearly tied to ${business.name}'s public business profile in Chicago.`,
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
