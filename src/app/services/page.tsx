import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | Apex Plumbing Co. | Austin, TX Plumber",
  description:
    "Full-service plumbing in Austin, TX. Emergency repairs, drain cleaning, water heater installation, sewer line service, bathroom remodeling, and gas line work. Licensed & insured.",
  openGraph: {
    title: "Our Services | Apex Plumbing Co.",
    description: "Everything you need, done right. Explore our full range of professional plumbing services in Austin, TX.",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
