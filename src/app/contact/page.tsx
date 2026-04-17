import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: `Contact ${business.name} | Chicago, IL`,
  description:
    `Call ${business.name} at ${business.phoneDisplay} or use the site intake form for window, door, glass, screen, and general repair work in ${business.city}, ${business.state}.`,
  openGraph: {
    title: `Contact ${business.name}`,
    description:
      `Start a repair request with ${business.name} in Chicago. Phone support and a simple intake form are available on this page.`,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
